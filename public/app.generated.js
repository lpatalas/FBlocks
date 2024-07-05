(() => {
  // artifacts/fable_output/fable_modules/fable-library-js.4.19.3/Util.js
  function isArrayLike(x) {
    return Array.isArray(x) || ArrayBuffer.isView(x);
  }
  function isEnumerable(x) {
    return x != null && typeof x.GetEnumerator === "function";
  }
  function isComparable(x) {
    return x != null && typeof x.CompareTo === "function";
  }
  function isEquatable(x) {
    return x != null && typeof x.Equals === "function";
  }
  function isHashable(x) {
    return x != null && typeof x.GetHashCode === "function";
  }
  function isDisposable(x) {
    return x != null && typeof x.Dispose === "function";
  }
  function disposeSafe(x) {
    if (isDisposable(x)) {
      x.Dispose();
    }
  }
  function defaultOf() {
    return null;
  }
  function sameConstructor(x, y) {
    return Object.getPrototypeOf(x)?.constructor === Object.getPrototypeOf(y)?.constructor;
  }
  var Enumerator = class {
    constructor(iter) {
      this.iter = iter;
      this.current = defaultOf();
    }
    ["System.Collections.Generic.IEnumerator`1.get_Current"]() {
      return this.current;
    }
    ["System.Collections.IEnumerator.get_Current"]() {
      return this.current;
    }
    ["System.Collections.IEnumerator.MoveNext"]() {
      const cur = this.iter.next();
      this.current = cur.value;
      return !cur.done;
    }
    ["System.Collections.IEnumerator.Reset"]() {
      throw new Error("JS iterators cannot be reset");
    }
    Dispose() {
      return;
    }
  };
  function getEnumerator(e) {
    if (isEnumerable(e)) {
      return e.GetEnumerator();
    } else {
      return new Enumerator(e[Symbol.iterator]());
    }
  }
  function toIterator(en) {
    return {
      next() {
        const hasNext = en["System.Collections.IEnumerator.MoveNext"]();
        const current = hasNext ? en["System.Collections.Generic.IEnumerator`1.get_Current"]() : void 0;
        return { done: !hasNext, value: current };
      }
    };
  }
  function padWithZeros(i, length3) {
    return i.toString(10).padStart(length3, "0");
  }
  function dateOffset(date) {
    const date1 = date;
    return typeof date1.offset === "number" ? date1.offset : date.kind === 1 ? 0 : date.getTimezoneOffset() * -6e4;
  }
  function int32ToString(i, radix) {
    i = i < 0 && radix != null && radix !== 10 ? 4294967295 + i + 1 : i;
    return i.toString(radix);
  }
  var ObjectRef = class _ObjectRef {
    static id(o) {
      if (!_ObjectRef.idMap.has(o)) {
        _ObjectRef.idMap.set(o, ++_ObjectRef.count);
      }
      return _ObjectRef.idMap.get(o);
    }
  };
  ObjectRef.idMap = /* @__PURE__ */ new WeakMap();
  ObjectRef.count = 0;
  function stringHash(s) {
    let i = 0;
    let h = 5381;
    const len = s.length;
    while (i < len) {
      h = h * 33 ^ s.charCodeAt(i++);
    }
    return h;
  }
  function numberHash(x) {
    return x * 2654435761 | 0;
  }
  function bigintHash(x) {
    return stringHash(x.toString(32));
  }
  function combineHashCodes(hashes) {
    let h1 = 0;
    const len = hashes.length;
    for (let i = 0; i < len; i++) {
      const h2 = hashes[i];
      h1 = (h1 << 5) + h1 ^ h2;
    }
    return h1;
  }
  function dateHash(x) {
    return x.getTime();
  }
  function arrayHash(x) {
    const len = x.length;
    const hashes = new Array(len);
    for (let i = 0; i < len; i++) {
      hashes[i] = structuralHash(x[i]);
    }
    return combineHashCodes(hashes);
  }
  function structuralHash(x) {
    if (x == null) {
      return 0;
    }
    switch (typeof x) {
      case "boolean":
        return x ? 1 : 0;
      case "number":
        return numberHash(x);
      case "bigint":
        return bigintHash(x);
      case "string":
        return stringHash(x);
      default: {
        if (isHashable(x)) {
          return x.GetHashCode();
        } else if (isArrayLike(x)) {
          return arrayHash(x);
        } else if (x instanceof Date) {
          return dateHash(x);
        } else if (Object.getPrototypeOf(x)?.constructor === Object) {
          const hashes = Object.values(x).map((v) => structuralHash(v));
          return combineHashCodes(hashes);
        } else {
          return numberHash(ObjectRef.id(x));
        }
      }
    }
  }
  function equalArraysWith(x, y, eq) {
    if (x == null) {
      return y == null;
    }
    if (y == null) {
      return false;
    }
    if (x.length !== y.length) {
      return false;
    }
    for (let i = 0; i < x.length; i++) {
      if (!eq(x[i], y[i])) {
        return false;
      }
    }
    return true;
  }
  function equalArrays(x, y) {
    return equalArraysWith(x, y, equals);
  }
  function equalObjects(x, y) {
    const xKeys = Object.keys(x);
    const yKeys = Object.keys(y);
    if (xKeys.length !== yKeys.length) {
      return false;
    }
    xKeys.sort();
    yKeys.sort();
    for (let i = 0; i < xKeys.length; i++) {
      if (xKeys[i] !== yKeys[i] || !equals(x[xKeys[i]], y[yKeys[i]])) {
        return false;
      }
    }
    return true;
  }
  function equals(x, y) {
    if (x === y) {
      return true;
    } else if (x == null) {
      return y == null;
    } else if (y == null) {
      return false;
    } else if (isEquatable(x)) {
      return x.Equals(y);
    } else if (isArrayLike(x)) {
      return isArrayLike(y) && equalArrays(x, y);
    } else if (typeof x !== "object") {
      return false;
    } else if (x instanceof Date) {
      return y instanceof Date && compareDates(x, y) === 0;
    } else {
      return Object.getPrototypeOf(x)?.constructor === Object && equalObjects(x, y);
    }
  }
  function compareDates(x, y) {
    let xtime;
    let ytime;
    if ("offset" in x && "offset" in y) {
      xtime = x.getTime();
      ytime = y.getTime();
    } else {
      xtime = x.getTime() + dateOffset(x);
      ytime = y.getTime() + dateOffset(y);
    }
    return xtime === ytime ? 0 : xtime < ytime ? -1 : 1;
  }
  function comparePrimitives(x, y) {
    return x === y ? 0 : x < y ? -1 : 1;
  }
  function compareArraysWith(x, y, comp) {
    if (x == null) {
      return y == null ? 0 : 1;
    }
    if (y == null) {
      return -1;
    }
    if (x.length !== y.length) {
      return x.length < y.length ? -1 : 1;
    }
    for (let i = 0, j = 0; i < x.length; i++) {
      j = comp(x[i], y[i]);
      if (j !== 0) {
        return j;
      }
    }
    return 0;
  }
  function compareArrays(x, y) {
    return compareArraysWith(x, y, compare);
  }
  function compareObjects(x, y) {
    const xKeys = Object.keys(x);
    const yKeys = Object.keys(y);
    if (xKeys.length !== yKeys.length) {
      return xKeys.length < yKeys.length ? -1 : 1;
    }
    xKeys.sort();
    yKeys.sort();
    for (let i = 0, j = 0; i < xKeys.length; i++) {
      const key = xKeys[i];
      if (key !== yKeys[i]) {
        return key < yKeys[i] ? -1 : 1;
      } else {
        j = compare(x[key], y[key]);
        if (j !== 0) {
          return j;
        }
      }
    }
    return 0;
  }
  function compare(x, y) {
    if (x === y) {
      return 0;
    } else if (x == null) {
      return y == null ? 0 : -1;
    } else if (y == null) {
      return 1;
    } else if (isComparable(x)) {
      return x.CompareTo(y);
    } else if (isArrayLike(x)) {
      return isArrayLike(y) ? compareArrays(x, y) : -1;
    } else if (typeof x !== "object") {
      return x < y ? -1 : 1;
    } else if (x instanceof Date) {
      return y instanceof Date ? compareDates(x, y) : -1;
    } else {
      return Object.getPrototypeOf(x)?.constructor === Object ? compareObjects(x, y) : -1;
    }
  }
  function createAtom(value2) {
    let atom = value2;
    return (...args) => {
      if (args.length === 0) {
        return atom;
      } else {
        atom = args[0];
      }
    };
  }
  var curried = /* @__PURE__ */ new WeakMap();
  function curry2(f) {
    return curried.get(f) ?? ((a1) => (a2) => f(a1, a2));
  }

  // artifacts/fable_output/fable_modules/fable-library-js.4.19.3/Types.js
  function seqToString(self) {
    let count = 0;
    let str = "[";
    for (const x of self) {
      if (count === 0) {
        str += toString(x);
      } else if (count === 100) {
        str += "; ...";
        break;
      } else {
        str += "; " + toString(x);
      }
      count++;
    }
    return str + "]";
  }
  function toString(x, callStack = 0) {
    if (x != null && typeof x === "object") {
      if (typeof x.toString === "function") {
        return x.toString();
      } else if (Symbol.iterator in x) {
        return seqToString(x);
      } else {
        const cons2 = Object.getPrototypeOf(x)?.constructor;
        return cons2 === Object && callStack < 10 ? "{ " + Object.entries(x).map(([k, v]) => k + " = " + toString(v, callStack + 1)).join("\n  ") + " }" : cons2?.name ?? "";
      }
    }
    return String(x);
  }
  function unionToString(name, fields) {
    if (fields.length === 0) {
      return name;
    } else {
      let fieldStr;
      let withParens = true;
      if (fields.length === 1) {
        fieldStr = toString(fields[0]);
        withParens = fieldStr.indexOf(" ") >= 0;
      } else {
        fieldStr = fields.map((x) => toString(x)).join(", ");
      }
      return name + (withParens ? " (" : " ") + fieldStr + (withParens ? ")" : "");
    }
  }
  var Union = class {
    get name() {
      return this.cases()[this.tag];
    }
    toJSON() {
      return this.fields.length === 0 ? this.name : [this.name].concat(this.fields);
    }
    toString() {
      return unionToString(this.name, this.fields);
    }
    GetHashCode() {
      const hashes = this.fields.map((x) => structuralHash(x));
      hashes.splice(0, 0, numberHash(this.tag));
      return combineHashCodes(hashes);
    }
    Equals(other) {
      if (this === other) {
        return true;
      } else if (!sameConstructor(this, other)) {
        return false;
      } else if (this.tag === other.tag) {
        return equalArrays(this.fields, other.fields);
      } else {
        return false;
      }
    }
    CompareTo(other) {
      if (this === other) {
        return 0;
      } else if (!sameConstructor(this, other)) {
        return -1;
      } else if (this.tag === other.tag) {
        return compareArrays(this.fields, other.fields);
      } else {
        return this.tag < other.tag ? -1 : 1;
      }
    }
  };
  function recordToJSON(self) {
    const o = {};
    const keys = Object.keys(self);
    for (let i = 0; i < keys.length; i++) {
      o[keys[i]] = self[keys[i]];
    }
    return o;
  }
  function recordToString(self) {
    return "{ " + Object.entries(self).map(([k, v]) => k + " = " + toString(v)).join("\n  ") + " }";
  }
  function recordGetHashCode(self) {
    const hashes = Object.values(self).map((v) => structuralHash(v));
    return combineHashCodes(hashes);
  }
  function recordEquals(self, other) {
    if (self === other) {
      return true;
    } else if (!sameConstructor(self, other)) {
      return false;
    } else {
      const thisNames = Object.keys(self);
      for (let i = 0; i < thisNames.length; i++) {
        if (!equals(self[thisNames[i]], other[thisNames[i]])) {
          return false;
        }
      }
      return true;
    }
  }
  function recordCompareTo(self, other) {
    if (self === other) {
      return 0;
    } else if (!sameConstructor(self, other)) {
      return -1;
    } else {
      const thisNames = Object.keys(self);
      for (let i = 0; i < thisNames.length; i++) {
        const result = compare(self[thisNames[i]], other[thisNames[i]]);
        if (result !== 0) {
          return result;
        }
      }
      return 0;
    }
  }
  var Record = class {
    toJSON() {
      return recordToJSON(this);
    }
    toString() {
      return recordToString(this);
    }
    GetHashCode() {
      return recordGetHashCode(this);
    }
    Equals(other) {
      return recordEquals(this, other);
    }
    CompareTo(other) {
      return recordCompareTo(this, other);
    }
  };
  var FSharpRef = class {
    get contents() {
      return this.getter();
    }
    set contents(v) {
      this.setter(v);
    }
    constructor(contentsOrGetter, setter) {
      if (typeof setter === "function") {
        this.getter = contentsOrGetter;
        this.setter = setter;
      } else {
        this.getter = () => contentsOrGetter;
        this.setter = (v) => {
          contentsOrGetter = v;
        };
      }
    }
  };

  // artifacts/fable_output/fable_modules/fable-library-js.4.19.3/Numeric.js
  var symbol = Symbol("numeric");
  function isNumeric(x) {
    return typeof x === "number" || typeof x === "bigint" || x?.[symbol];
  }
  function compare2(x, y) {
    if (typeof x === "number") {
      return x < y ? -1 : x > y ? 1 : 0;
    } else if (typeof x === "bigint") {
      return x < y ? -1 : x > y ? 1 : 0;
    } else {
      return x.CompareTo(y);
    }
  }
  function multiply(x, y) {
    if (typeof x === "number") {
      return x * y;
    } else if (typeof x === "bigint") {
      return x * BigInt(y);
    } else {
      return x[symbol]().multiply(y);
    }
  }
  function toFixed(x, dp) {
    if (typeof x === "number") {
      return x.toFixed(dp);
    } else if (typeof x === "bigint") {
      return x;
    } else {
      return x[symbol]().toFixed(dp);
    }
  }
  function toPrecision(x, sd) {
    if (typeof x === "number") {
      return x.toPrecision(sd);
    } else if (typeof x === "bigint") {
      return x;
    } else {
      return x[symbol]().toPrecision(sd);
    }
  }
  function toExponential(x, dp) {
    if (typeof x === "number") {
      return x.toExponential(dp);
    } else if (typeof x === "bigint") {
      return x;
    } else {
      return x[symbol]().toExponential(dp);
    }
  }
  function toHex(x) {
    if (typeof x === "number") {
      return (Number(x) >>> 0).toString(16);
    } else if (typeof x === "bigint") {
      return BigInt.asUintN(64, x).toString(16);
    } else {
      return x[symbol]().toHex();
    }
  }

  // artifacts/fable_output/coord.generated.js
  var Coord = class extends Record {
    constructor(x, y) {
      super();
      this.x = x | 0;
      this.y = y | 0;
    }
  };
  function create(x, y) {
    return new Coord(x, y);
  }
  function add(a, b) {
    return new Coord(a.x + b.x, a.y + b.y);
  }
  function getY(coord) {
    return coord.y;
  }

  // artifacts/fable_output/fable_modules/fable-library-js.4.19.3/Native.js
  function Helpers_allocateArrayFromCons(cons2, len) {
    if (typeof cons2 === "function") {
      return new cons2(len);
    } else {
      return new Array(len);
    }
  }

  // artifacts/fable_output/fable_modules/fable-library-js.4.19.3/Option.js
  var Some = class _Some {
    constructor(value2) {
      this.value = value2;
    }
    toJSON() {
      return this.value;
    }
    // Don't add "Some" for consistency with erased options
    toString() {
      return String(this.value);
    }
    GetHashCode() {
      return structuralHash(this.value);
    }
    Equals(other) {
      if (other == null) {
        return false;
      } else {
        return equals(this.value, other instanceof _Some ? other.value : other);
      }
    }
    CompareTo(other) {
      if (other == null) {
        return 1;
      } else {
        return compare(this.value, other instanceof _Some ? other.value : other);
      }
    }
  };
  function value(x) {
    if (x == null) {
      throw new Error("Option has no value");
    } else {
      return x instanceof Some ? x.value : x;
    }
  }
  function some(x) {
    return x == null || x instanceof Some ? new Some(x) : x;
  }
  function defaultArg(opt, defaultValue) {
    return opt != null ? value(opt) : defaultValue;
  }

  // artifacts/fable_output/fable_modules/fable-library-js.4.19.3/Double.js
  function max(x, y) {
    return x > y ? x : y;
  }
  function min(x, y) {
    return x < y ? x : y;
  }

  // artifacts/fable_output/fable_modules/fable-library-js.4.19.3/Global.js
  var SR_indexOutOfBounds = "The index was outside the range of elements in the collection.";
  var SR_inputWasEmpty = "Collection was empty.";

  // artifacts/fable_output/fable_modules/fable-library-js.4.19.3/Array.js
  function mapIndexed(f, source, cons2) {
    const len = source.length | 0;
    const target = Helpers_allocateArrayFromCons(cons2, len);
    for (let i = 0; i <= len - 1; i++) {
      setItem(target, i, f(i, item(i, source)));
    }
    return target;
  }
  function map(f, source, cons2) {
    const len = source.length | 0;
    const target = Helpers_allocateArrayFromCons(cons2, len);
    for (let i = 0; i <= len - 1; i++) {
      setItem(target, i, f(item(i, source)));
    }
    return target;
  }
  function concat(arrays, cons2) {
    const arrays_1 = Array.isArray(arrays) ? arrays : Array.from(arrays);
    const matchValue = arrays_1.length | 0;
    switch (matchValue) {
      case 0:
        return Helpers_allocateArrayFromCons(cons2, 0);
      case 1:
        return item(0, arrays_1);
      default: {
        let totalIdx = 0;
        let totalLength = 0;
        for (let idx = 0; idx <= arrays_1.length - 1; idx++) {
          const arr_1 = item(idx, arrays_1);
          totalLength = totalLength + arr_1.length | 0;
        }
        const result = Helpers_allocateArrayFromCons(cons2, totalLength);
        for (let idx_1 = 0; idx_1 <= arrays_1.length - 1; idx_1++) {
          const arr_2 = item(idx_1, arrays_1);
          for (let j = 0; j <= arr_2.length - 1; j++) {
            setItem(result, totalIdx, item(j, arr_2));
            totalIdx = totalIdx + 1 | 0;
          }
        }
        return result;
      }
    }
  }
  function replicate(count, initial2, cons2) {
    if (count < 0) {
      throw new Error("The input must be non-negative\\nParameter name: count");
    }
    const result = Helpers_allocateArrayFromCons(cons2, count);
    for (let i = 0; i <= result.length - 1; i++) {
      setItem(result, i, initial2);
    }
    return result;
  }
  function copy(array) {
    return array.slice();
  }
  function iterateIndexed(action, array) {
    for (let i = 0; i <= array.length - 1; i++) {
      action(i, item(i, array));
    }
  }
  function item(index, array) {
    if (index < 0 ? true : index >= array.length) {
      throw new Error("Index was outside the bounds of the array.\\nParameter name: index");
    } else {
      return array[index];
    }
  }
  function setItem(array, index, value2) {
    if (index < 0 ? true : index >= array.length) {
      throw new Error("Index was outside the bounds of the array.\\nParameter name: index");
    } else {
      array[index] = value2;
    }
  }

  // artifacts/fable_output/fable_modules/fable-library-js.4.19.3/Date.js
  var shortDays = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
  ];
  var longDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  var shortMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  var longMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  function parseRepeatToken(format, pos, patternChar) {
    let tokenLength = 0;
    let internalPos = pos;
    while (internalPos < format.length && format[internalPos] === patternChar) {
      internalPos++;
      tokenLength++;
    }
    return tokenLength;
  }
  function parseNextChar(format, pos) {
    if (pos >= format.length - 1) {
      return -1;
    }
    return format.charCodeAt(pos + 1);
  }
  function parseQuotedString(format, pos) {
    let beginPos = pos;
    const quoteChar = format[pos];
    let result = "";
    let foundQuote = false;
    while (pos < format.length) {
      pos++;
      const currentChar = format[pos];
      if (currentChar === quoteChar) {
        foundQuote = true;
        break;
      } else if (currentChar === "\\") {
        if (pos < format.length) {
          pos++;
          result += format[pos];
        } else {
          throw new Error("Invalid string format");
        }
      } else {
        result += currentChar;
      }
    }
    if (!foundQuote) {
      throw new Error(`Invalid string format could not find matching quote for ${quoteChar}`);
    }
    return [result, pos - beginPos + 1];
  }
  function dateToStringWithCustomFormat(date, format, utc) {
    let cursorPos = 0;
    let tokenLength = 0;
    let result = "";
    const localizedDate = utc ? DateTime(
      date.getTime(),
      1
      /* DateKind.UTC */
    ) : date;
    while (cursorPos < format.length) {
      const token = format[cursorPos];
      switch (token) {
        case "d":
          tokenLength = parseRepeatToken(format, cursorPos, "d");
          cursorPos += tokenLength;
          switch (tokenLength) {
            case 1:
              result += day(localizedDate);
              break;
            case 2:
              result += padWithZeros(day(localizedDate), 2);
              break;
            case 3:
              result += shortDays[dayOfWeek(localizedDate)];
              break;
            case 4:
              result += longDays[dayOfWeek(localizedDate)];
              break;
            default:
              break;
          }
          break;
        case "f":
          tokenLength = parseRepeatToken(format, cursorPos, "f");
          cursorPos += tokenLength;
          if (tokenLength <= 3) {
            const precision = 10 ** (3 - tokenLength);
            result += padWithZeros(Math.floor(millisecond(localizedDate) / precision), tokenLength);
          } else if (tokenLength <= 7) {
            result += ("" + millisecond(localizedDate)).padEnd(tokenLength, "0");
          }
          break;
        case "F":
          tokenLength = parseRepeatToken(format, cursorPos, "F");
          cursorPos += tokenLength;
          if (tokenLength <= 3) {
            const precision = 10 ** (3 - tokenLength);
            const value2 = Math.floor(millisecond(localizedDate) / precision);
            if (value2 != 0) {
              result += padWithZeros(value2, tokenLength);
            }
          } else if (tokenLength <= 7) {
            const value2 = millisecond(localizedDate);
            if (value2 != 0) {
              result += padWithZeros(value2, 3);
            }
          }
          break;
        case "g":
          tokenLength = parseRepeatToken(format, cursorPos, "g");
          cursorPos += tokenLength;
          if (tokenLength <= 2) {
            result += "A.D.";
          }
          break;
        case "h":
          tokenLength = parseRepeatToken(format, cursorPos, "h");
          cursorPos += tokenLength;
          switch (tokenLength) {
            case 1:
              result += hour(localizedDate) % 12;
              break;
            case 2:
              result += padWithZeros(hour(localizedDate) % 12, 2);
              break;
            default:
              break;
          }
          break;
        case "H":
          tokenLength = parseRepeatToken(format, cursorPos, "H");
          cursorPos += tokenLength;
          switch (tokenLength) {
            case 1:
              result += hour(localizedDate);
              break;
            case 2:
              result += padWithZeros(hour(localizedDate), 2);
              break;
            default:
              break;
          }
          break;
        case "K":
          tokenLength = parseRepeatToken(format, cursorPos, "K");
          cursorPos += tokenLength;
          switch (tokenLength) {
            case 1:
              switch (kind(localizedDate)) {
                case 1:
                  result += "Z";
                  break;
                case 2:
                  result += dateOffsetToString(localizedDate.getTimezoneOffset() * -6e4);
                  break;
                case 0:
                  break;
              }
              break;
            default:
              break;
          }
          break;
        case "m":
          tokenLength = parseRepeatToken(format, cursorPos, "m");
          cursorPos += tokenLength;
          switch (tokenLength) {
            case 1:
              result += minute(localizedDate);
              break;
            case 2:
              result += padWithZeros(minute(localizedDate), 2);
              break;
            default:
              break;
          }
          break;
        case "M":
          tokenLength = parseRepeatToken(format, cursorPos, "M");
          cursorPos += tokenLength;
          switch (tokenLength) {
            case 1:
              result += month(localizedDate);
              break;
            case 2:
              result += padWithZeros(month(localizedDate), 2);
              break;
            case 3:
              result += shortMonths[month(localizedDate) - 1];
              break;
            case 4:
              result += longMonths[month(localizedDate) - 1];
              break;
            default:
              break;
          }
          break;
        case "s":
          tokenLength = parseRepeatToken(format, cursorPos, "s");
          cursorPos += tokenLength;
          switch (tokenLength) {
            case 1:
              result += second(localizedDate);
              break;
            case 2:
              result += padWithZeros(second(localizedDate), 2);
              break;
            default:
              break;
          }
          break;
        case "t":
          tokenLength = parseRepeatToken(format, cursorPos, "t");
          cursorPos += tokenLength;
          switch (tokenLength) {
            case 1:
              result += localizedDate.getHours() < 12 ? "A" : "P";
              break;
            case 2:
              result += localizedDate.getHours() < 12 ? "AM" : "PM";
              break;
            default:
              break;
          }
          break;
        case "y":
          tokenLength = parseRepeatToken(format, cursorPos, "y");
          cursorPos += tokenLength;
          switch (tokenLength) {
            case 1:
              result += localizedDate.getFullYear() % 100;
              break;
            case 2:
              result += padWithZeros(localizedDate.getFullYear() % 100, 2);
              break;
            case 3:
              result += padWithZeros(localizedDate.getFullYear(), 3);
              break;
            case 4:
              result += padWithZeros(localizedDate.getFullYear(), 4);
              break;
            case 5:
              result += padWithZeros(localizedDate.getFullYear(), 5);
              break;
            default:
              break;
          }
          break;
        case "z":
          tokenLength = parseRepeatToken(format, cursorPos, "z");
          cursorPos += tokenLength;
          let utcOffsetText = "";
          switch (kind(localizedDate)) {
            case 1:
              utcOffsetText = "+00:00";
              break;
            case 2:
              utcOffsetText = dateOffsetToString(localizedDate.getTimezoneOffset() * -6e4);
              break;
            case 0:
              utcOffsetText = dateOffsetToString(toLocalTime(localizedDate).getTimezoneOffset() * -6e4);
              break;
          }
          const sign = utcOffsetText[0] === "-" ? "-" : "+";
          const hours = parseInt(utcOffsetText.substring(1, 3), 10);
          const minutes = parseInt(utcOffsetText.substring(4, 6), 10);
          switch (tokenLength) {
            case 1:
              result += `${sign}${hours}`;
              break;
            case 2:
              result += `${sign}${padWithZeros(hours, 2)}`;
              break;
            default:
              result += `${sign}${padWithZeros(hours, 2)}:${padWithZeros(minutes, 2)}`;
              break;
          }
          break;
        case ":":
          result += ":";
          cursorPos++;
          break;
        case "/":
          result += "/";
          cursorPos++;
          break;
        case "'":
        case '"':
          const [quotedString, quotedStringLenght] = parseQuotedString(format, cursorPos);
          result += quotedString;
          cursorPos += quotedStringLenght;
          break;
        case "%":
          const nextChar = parseNextChar(format, cursorPos);
          if (nextChar >= 0 && nextChar !== "%".charCodeAt(0)) {
            cursorPos += 2;
            result += dateToStringWithCustomFormat(localizedDate, String.fromCharCode(nextChar), utc);
          } else {
            throw new Error("Invalid format string");
          }
          break;
        case "\\":
          const nextChar2 = parseNextChar(format, cursorPos);
          if (nextChar2 >= 0) {
            cursorPos += 2;
            result += String.fromCharCode(nextChar2);
          } else {
            throw new Error("Invalid format string");
          }
          break;
        default:
          cursorPos++;
          result += token;
          break;
      }
    }
    return result;
  }
  function kind(value2) {
    return value2.kind || 0;
  }
  function dateOffsetToString(offset) {
    const isMinus = offset < 0;
    offset = Math.abs(offset);
    const hours = ~~(offset / 36e5);
    const minutes = offset % 36e5 / 6e4;
    return (isMinus ? "-" : "+") + padWithZeros(hours, 2) + ":" + padWithZeros(minutes, 2);
  }
  function dateToHalfUTCString(date, half) {
    const str = date.toISOString();
    return half === "first" ? str.substring(0, str.indexOf("T")) : str.substring(str.indexOf("T") + 1, str.length - 1);
  }
  function dateToISOString(d, utc) {
    if (utc) {
      return d.toISOString();
    } else {
      const printOffset = d.kind == null ? true : d.kind === 2;
      return padWithZeros(d.getFullYear(), 4) + "-" + padWithZeros(d.getMonth() + 1, 2) + "-" + padWithZeros(d.getDate(), 2) + "T" + padWithZeros(d.getHours(), 2) + ":" + padWithZeros(d.getMinutes(), 2) + ":" + padWithZeros(d.getSeconds(), 2) + "." + padWithZeros(d.getMilliseconds(), 3) + (printOffset ? dateOffsetToString(d.getTimezoneOffset() * -6e4) : "");
    }
  }
  function dateToISOStringWithOffset(dateWithOffset, offset) {
    const str = dateWithOffset.toISOString();
    return str.substring(0, str.length - 1) + dateOffsetToString(offset);
  }
  function dateToStringWithOffset(date, format) {
    const d = new Date(date.getTime() + (date.offset ?? 0));
    if (typeof format !== "string") {
      return d.toISOString().replace(/\.\d+/, "").replace(/[A-Z]|\.\d+/g, " ") + dateOffsetToString(date.offset ?? 0);
    } else if (format.length === 1) {
      switch (format) {
        case "D":
        case "d":
          return dateToHalfUTCString(d, "first");
        case "T":
        case "t":
          return dateToHalfUTCString(d, "second");
        case "O":
        case "o":
          return dateToISOStringWithOffset(d, date.offset ?? 0);
        default:
          throw new Error("Unrecognized Date print format");
      }
    } else {
      return dateToStringWithCustomFormat(d, format, true);
    }
  }
  function dateToStringWithKind(date, format) {
    const utc = date.kind === 1;
    if (typeof format !== "string") {
      return utc ? date.toUTCString() : date.toLocaleString();
    } else if (format.length === 1) {
      switch (format) {
        case "D":
        case "d":
          return utc ? dateToHalfUTCString(date, "first") : date.toLocaleDateString();
        case "T":
        case "t":
          return utc ? dateToHalfUTCString(date, "second") : date.toLocaleTimeString();
        case "O":
        case "o":
          return dateToISOString(date, utc);
        default:
          throw new Error("Unrecognized Date print format");
      }
    } else {
      return dateToStringWithCustomFormat(date, format, utc);
    }
  }
  function toString2(date, format, _provider) {
    return date.offset != null ? dateToStringWithOffset(date, format) : dateToStringWithKind(date, format);
  }
  function DateTime(value2, kind2) {
    const d = new Date(value2);
    d.kind = (kind2 == null ? 0 : kind2) | 0;
    return d;
  }
  function toLocalTime(date) {
    return date.kind === 2 ? date : DateTime(
      date.getTime(),
      2
      /* DateKind.Local */
    );
  }
  function day(d) {
    return d.kind === 1 ? d.getUTCDate() : d.getDate();
  }
  function hour(d) {
    return d.kind === 1 ? d.getUTCHours() : d.getHours();
  }
  function millisecond(d) {
    return d.kind === 1 ? d.getUTCMilliseconds() : d.getMilliseconds();
  }
  function minute(d) {
    return d.kind === 1 ? d.getUTCMinutes() : d.getMinutes();
  }
  function month(d) {
    return (d.kind === 1 ? d.getUTCMonth() : d.getMonth()) + 1;
  }
  function second(d) {
    return d.kind === 1 ? d.getUTCSeconds() : d.getSeconds();
  }
  function dayOfWeek(d) {
    return d.kind === 1 ? d.getUTCDay() : d.getDay();
  }

  // artifacts/fable_output/fable_modules/fable-library-js.4.19.3/String.js
  var fsFormatRegExp = /(^|[^%])%([0+\- ]*)(\*|\d+)?(?:\.(\d+))?(\w)/g;
  function isLessThan(x, y) {
    return compare2(x, y) < 0;
  }
  function printf(input) {
    return {
      input,
      cont: fsFormat(input)
    };
  }
  function continuePrint(cont, arg) {
    return typeof arg === "string" ? cont(arg) : arg.cont(cont);
  }
  function toText(arg) {
    return continuePrint((x) => x, arg);
  }
  function formatReplacement(rep, flags, padLength, precision, format) {
    let sign = "";
    flags = flags || "";
    format = format || "";
    if (isNumeric(rep)) {
      if (format.toLowerCase() !== "x") {
        if (isLessThan(rep, 0)) {
          rep = multiply(rep, -1);
          sign = "-";
        } else {
          if (flags.indexOf(" ") >= 0) {
            sign = " ";
          } else if (flags.indexOf("+") >= 0) {
            sign = "+";
          }
        }
      }
      precision = precision == null ? null : parseInt(precision, 10);
      switch (format) {
        case "f":
        case "F":
          precision = precision != null ? precision : 6;
          rep = toFixed(rep, precision);
          break;
        case "g":
        case "G":
          rep = precision != null ? toPrecision(rep, precision) : toPrecision(rep);
          break;
        case "e":
        case "E":
          rep = precision != null ? toExponential(rep, precision) : toExponential(rep);
          break;
        case "x":
          rep = toHex(rep);
          break;
        case "X":
          rep = toHex(rep).toUpperCase();
          break;
        default:
          rep = String(rep);
          break;
      }
    } else if (rep instanceof Date) {
      rep = toString2(rep);
    } else {
      rep = toString(rep);
    }
    padLength = typeof padLength === "number" ? padLength : parseInt(padLength, 10);
    if (!isNaN(padLength)) {
      const zeroFlag = flags.indexOf("0") >= 0;
      const minusFlag = flags.indexOf("-") >= 0;
      const ch = minusFlag || !zeroFlag ? " " : "0";
      if (ch === "0") {
        rep = pad(rep, padLength - sign.length, ch, minusFlag);
        rep = sign + rep;
      } else {
        rep = pad(sign + rep, padLength, ch, minusFlag);
      }
    } else {
      rep = sign + rep;
    }
    return rep;
  }
  function createPrinter(cont, _strParts, _matches, _result = "", padArg = -1) {
    return (...args) => {
      let result = _result;
      const strParts = _strParts.slice();
      const matches = _matches.slice();
      for (const arg of args) {
        const [, , flags, _padLength, precision, format] = matches[0];
        let padLength = _padLength;
        if (padArg >= 0) {
          padLength = padArg;
          padArg = -1;
        } else if (padLength === "*") {
          if (arg < 0) {
            throw new Error("Non-negative number required");
          }
          padArg = arg;
          continue;
        }
        result += strParts[0];
        result += formatReplacement(arg, flags, padLength, precision, format);
        strParts.splice(0, 1);
        matches.splice(0, 1);
      }
      if (matches.length === 0) {
        result += strParts[0];
        return cont(result);
      } else {
        return createPrinter(cont, strParts, matches, result, padArg);
      }
    };
  }
  function fsFormat(str) {
    return (cont) => {
      fsFormatRegExp.lastIndex = 0;
      const strParts = [];
      const matches = [];
      let strIdx = 0;
      let match = fsFormatRegExp.exec(str);
      while (match) {
        const matchIndex = match.index + (match[1] || "").length;
        strParts.push(str.substring(strIdx, matchIndex).replace(/%%/g, "%"));
        matches.push(match);
        strIdx = fsFormatRegExp.lastIndex;
        fsFormatRegExp.lastIndex -= 1;
        match = fsFormatRegExp.exec(str);
      }
      if (strParts.length === 0) {
        return cont(str.replace(/%%/g, "%"));
      } else {
        strParts.push(str.substring(strIdx).replace(/%%/g, "%"));
        return createPrinter(cont, strParts, matches);
      }
    };
  }
  function join(delimiter, xs) {
    if (Array.isArray(xs)) {
      return xs.join(delimiter);
    } else {
      return Array.from(xs).join(delimiter);
    }
  }
  function pad(str, len, ch, isRight) {
    ch = ch || " ";
    len = len - str.length;
    for (let i = 0; i < len; i++) {
      str = isRight ? str + ch : ch + str;
    }
    return str;
  }

  // artifacts/fable_output/fable_modules/fable-library-js.4.19.3/FSharp.Core.js
  function Operators_NullArg(x) {
    throw new Error(x);
  }

  // artifacts/fable_output/fable_modules/fable-library-js.4.19.3/List.js
  var FSharpList = class extends Record {
    constructor(head2, tail2) {
      super();
      this.head = head2;
      this.tail = tail2;
    }
    toString() {
      const xs = this;
      return "[" + join("; ", xs) + "]";
    }
    Equals(other) {
      const xs = this;
      if (xs === other) {
        return true;
      } else {
        const loop = (xs_1_mut, ys_1_mut) => {
          loop: while (true) {
            const xs_1 = xs_1_mut, ys_1 = ys_1_mut;
            const matchValue = xs_1.tail;
            const matchValue_1 = ys_1.tail;
            if (matchValue != null) {
              if (matchValue_1 != null) {
                const xt = value(matchValue);
                const yt = value(matchValue_1);
                if (equals(xs_1.head, ys_1.head)) {
                  xs_1_mut = xt;
                  ys_1_mut = yt;
                  continue loop;
                } else {
                  return false;
                }
              } else {
                return false;
              }
            } else if (matchValue_1 != null) {
              return false;
            } else {
              return true;
            }
            break;
          }
        };
        return loop(xs, other);
      }
    }
    GetHashCode() {
      const xs = this;
      const loop = (i_mut, h_mut, xs_1_mut) => {
        loop: while (true) {
          const i = i_mut, h = h_mut, xs_1 = xs_1_mut;
          const matchValue = xs_1.tail;
          if (matchValue != null) {
            const t = value(matchValue);
            if (i > 18) {
              return h | 0;
            } else {
              i_mut = i + 1;
              h_mut = (h << 1) + structuralHash(xs_1.head) + 631 * i;
              xs_1_mut = t;
              continue loop;
            }
          } else {
            return h | 0;
          }
          break;
        }
      };
      return loop(0, 0, xs) | 0;
    }
    toJSON() {
      const this$ = this;
      return Array.from(this$);
    }
    CompareTo(other) {
      const xs = this;
      const loop = (xs_1_mut, ys_1_mut) => {
        loop: while (true) {
          const xs_1 = xs_1_mut, ys_1 = ys_1_mut;
          const matchValue = xs_1.tail;
          const matchValue_1 = ys_1.tail;
          if (matchValue != null) {
            if (matchValue_1 != null) {
              const xt = value(matchValue);
              const yt = value(matchValue_1);
              const c = compare(xs_1.head, ys_1.head) | 0;
              if (c === 0) {
                xs_1_mut = xt;
                ys_1_mut = yt;
                continue loop;
              } else {
                return c | 0;
              }
            } else {
              return 1;
            }
          } else if (matchValue_1 != null) {
            return -1;
          } else {
            return 0;
          }
          break;
        }
      };
      return loop(xs, other) | 0;
    }
    GetEnumerator() {
      const xs = this;
      return ListEnumerator$1_$ctor_3002E699(xs);
    }
    [Symbol.iterator]() {
      return toIterator(getEnumerator(this));
    }
    "System.Collections.IEnumerable.GetEnumerator"() {
      const xs = this;
      return getEnumerator(xs);
    }
  };
  var ListEnumerator$1 = class {
    constructor(xs) {
      this.xs = xs;
      this.it = this.xs;
      this.current = defaultOf();
    }
    "System.Collections.Generic.IEnumerator`1.get_Current"() {
      const _ = this;
      return _.current;
    }
    "System.Collections.IEnumerator.get_Current"() {
      const _ = this;
      return _.current;
    }
    "System.Collections.IEnumerator.MoveNext"() {
      const _ = this;
      const matchValue = _.it.tail;
      if (matchValue != null) {
        const t = value(matchValue);
        _.current = _.it.head;
        _.it = t;
        return true;
      } else {
        return false;
      }
    }
    "System.Collections.IEnumerator.Reset"() {
      const _ = this;
      _.it = _.xs;
      _.current = defaultOf();
    }
    Dispose() {
    }
  };
  function ListEnumerator$1_$ctor_3002E699(xs) {
    return new ListEnumerator$1(xs);
  }
  function FSharpList_get_Empty() {
    return new FSharpList(defaultOf(), void 0);
  }
  function FSharpList_Cons_305B8EAC(x, xs) {
    return new FSharpList(x, xs);
  }
  function FSharpList__get_IsEmpty(xs) {
    return xs.tail == null;
  }
  function FSharpList__get_Length(xs) {
    const loop = (i_mut, xs_1_mut) => {
      loop: while (true) {
        const i = i_mut, xs_1 = xs_1_mut;
        const matchValue = xs_1.tail;
        if (matchValue != null) {
          i_mut = i + 1;
          xs_1_mut = value(matchValue);
          continue loop;
        } else {
          return i | 0;
        }
        break;
      }
    };
    return loop(0, xs) | 0;
  }
  function FSharpList__get_Head(xs) {
    const matchValue = xs.tail;
    if (matchValue != null) {
      return xs.head;
    } else {
      throw new Error(SR_inputWasEmpty + "\\nParameter name: list");
    }
  }
  function FSharpList__get_Tail(xs) {
    const matchValue = xs.tail;
    if (matchValue != null) {
      return value(matchValue);
    } else {
      throw new Error(SR_inputWasEmpty + "\\nParameter name: list");
    }
  }
  function FSharpList__get_Item_Z524259A4(xs, index) {
    const loop = (i_mut, xs_1_mut) => {
      loop: while (true) {
        const i = i_mut, xs_1 = xs_1_mut;
        const matchValue = xs_1.tail;
        if (matchValue != null) {
          if (i === index) {
            return xs_1.head;
          } else {
            i_mut = i + 1;
            xs_1_mut = value(matchValue);
            continue loop;
          }
        } else {
          throw new Error(SR_indexOutOfBounds + "\\nParameter name: index");
        }
        break;
      }
    };
    return loop(0, xs);
  }
  function empty() {
    return FSharpList_get_Empty();
  }
  function cons(x, xs) {
    return FSharpList_Cons_305B8EAC(x, xs);
  }
  function singleton(x) {
    return FSharpList_Cons_305B8EAC(x, FSharpList_get_Empty());
  }
  function isEmpty(xs) {
    return FSharpList__get_IsEmpty(xs);
  }
  function length(xs) {
    return FSharpList__get_Length(xs);
  }
  function head(xs) {
    return FSharpList__get_Head(xs);
  }
  function tail(xs) {
    return FSharpList__get_Tail(xs);
  }
  function fold(folder, state, xs) {
    let acc = state;
    let xs_1 = xs;
    while (!FSharpList__get_IsEmpty(xs_1)) {
      acc = folder(acc, head(xs_1));
      xs_1 = FSharpList__get_Tail(xs_1);
    }
    return acc;
  }
  function reverse(xs) {
    return fold((acc, x) => FSharpList_Cons_305B8EAC(x, acc), FSharpList_get_Empty(), xs);
  }
  function ofArrayWithTail(xs, tail_1) {
    let res = tail_1;
    for (let i = xs.length - 1; i >= 0; i--) {
      res = FSharpList_Cons_305B8EAC(item(i, xs), res);
    }
    return res;
  }
  function ofArray(xs) {
    return ofArrayWithTail(xs, FSharpList_get_Empty());
  }
  function ofSeq(xs) {
    let xs_3, t;
    if (isArrayLike(xs)) {
      return ofArray(xs);
    } else if (xs instanceof FSharpList) {
      return xs;
    } else {
      const root = FSharpList_get_Empty();
      let node = root;
      const enumerator = getEnumerator(xs);
      try {
        while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
          const x = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
          node = (xs_3 = node, t = new FSharpList(x, void 0), xs_3.tail = t, t);
        }
      } finally {
        disposeSafe(enumerator);
      }
      const xs_5 = node;
      const t_2 = FSharpList_get_Empty();
      xs_5.tail = t_2;
      return FSharpList__get_Tail(root);
    }
  }
  function append(xs, ys) {
    return fold((acc, x) => FSharpList_Cons_305B8EAC(x, acc), ys, reverse(xs));
  }
  function item2(n, xs) {
    return FSharpList__get_Item_Z524259A4(xs, n);
  }

  // artifacts/fable_output/fable_modules/fable-library-js.4.19.3/Seq.js
  var SR_enumerationAlreadyFinished = "Enumeration already finished.";
  var SR_enumerationNotStarted = "Enumeration has not started. Call MoveNext.";
  var SR_inputSequenceEmpty2 = "The input sequence was empty.";
  var SR_resetNotSupported = "Reset is not supported on this enumerator.";
  function Enumerator_noReset() {
    throw new Error(SR_resetNotSupported);
  }
  function Enumerator_notStarted() {
    throw new Error(SR_enumerationNotStarted);
  }
  function Enumerator_alreadyFinished() {
    throw new Error(SR_enumerationAlreadyFinished);
  }
  var Enumerator_Seq = class {
    constructor(f) {
      this.f = f;
    }
    toString() {
      const xs = this;
      let i = 0;
      let str = "seq [";
      const e = getEnumerator(xs);
      try {
        while (i < 4 && e["System.Collections.IEnumerator.MoveNext"]()) {
          if (i > 0) {
            str = str + "; ";
          }
          str = str + toString(e["System.Collections.Generic.IEnumerator`1.get_Current"]());
          i = i + 1 | 0;
        }
        if (i === 4) {
          str = str + "; ...";
        }
        return str + "]";
      } finally {
        disposeSafe(e);
      }
    }
    GetEnumerator() {
      const x = this;
      return x.f();
    }
    [Symbol.iterator]() {
      return toIterator(getEnumerator(this));
    }
    "System.Collections.IEnumerable.GetEnumerator"() {
      const x = this;
      return x.f();
    }
  };
  function Enumerator_Seq_$ctor_673A07F2(f) {
    return new Enumerator_Seq(f);
  }
  var Enumerator_FromFunctions$1 = class {
    constructor(current, next, dispose) {
      this.current = current;
      this.next = next;
      this.dispose = dispose;
    }
    "System.Collections.Generic.IEnumerator`1.get_Current"() {
      const _ = this;
      return _.current();
    }
    "System.Collections.IEnumerator.get_Current"() {
      const _ = this;
      return _.current();
    }
    "System.Collections.IEnumerator.MoveNext"() {
      const _ = this;
      return _.next();
    }
    "System.Collections.IEnumerator.Reset"() {
      Enumerator_noReset();
    }
    Dispose() {
      const _ = this;
      _.dispose();
    }
  };
  function Enumerator_FromFunctions$1_$ctor_58C54629(current, next, dispose) {
    return new Enumerator_FromFunctions$1(current, next, dispose);
  }
  function Enumerator_generateWhileSome(openf, compute, closef) {
    let started = false;
    let curr = void 0;
    let state = some(openf());
    const dispose = () => {
      if (state != null) {
        const x_1 = value(state);
        try {
          closef(x_1);
        } finally {
          state = void 0;
        }
      }
    };
    const finish = () => {
      try {
        dispose();
      } finally {
        curr = void 0;
      }
    };
    return Enumerator_FromFunctions$1_$ctor_58C54629(() => {
      if (!started) {
        Enumerator_notStarted();
      }
      if (curr != null) {
        return value(curr);
      } else {
        return Enumerator_alreadyFinished();
      }
    }, () => {
      if (!started) {
        started = true;
      }
      if (state != null) {
        const s = value(state);
        let matchValue_1;
        try {
          matchValue_1 = compute(s);
        } catch (matchValue) {
          finish();
          throw matchValue;
        }
        if (matchValue_1 != null) {
          curr = matchValue_1;
          return true;
        } else {
          finish();
          return false;
        }
      } else {
        return false;
      }
    }, dispose);
  }
  function Enumerator_unfold(f, state) {
    let curr = void 0;
    let acc = state;
    return Enumerator_FromFunctions$1_$ctor_58C54629(() => {
      if (curr != null) {
        const x = value(curr)[0];
        const st = value(curr)[1];
        return x;
      } else {
        return Enumerator_notStarted();
      }
    }, () => {
      curr = f(acc);
      if (curr != null) {
        const x_1 = value(curr)[0];
        const st_1 = value(curr)[1];
        acc = st_1;
        return true;
      } else {
        return false;
      }
    }, () => {
    });
  }
  function checkNonNull(argName, arg) {
    if (arg == null) {
      Operators_NullArg(argName);
    }
  }
  function mkSeq(f) {
    return Enumerator_Seq_$ctor_673A07F2(f);
  }
  function ofSeq2(xs) {
    checkNonNull("source", xs);
    return getEnumerator(xs);
  }
  function delay(generator) {
    return mkSeq(() => getEnumerator(generator()));
  }
  function unfold(generator, state) {
    return mkSeq(() => Enumerator_unfold(generator, state));
  }
  function toList(xs) {
    if (isArrayLike(xs)) {
      return ofArray(xs);
    } else if (xs instanceof FSharpList) {
      return xs;
    } else {
      return ofSeq(xs);
    }
  }
  function generate(create6, compute, dispose) {
    return mkSeq(() => Enumerator_generateWhileSome(create6, compute, dispose));
  }
  function choose(chooser, xs) {
    return generate(() => ofSeq2(xs), (e) => {
      let curr = void 0;
      while (curr == null && e["System.Collections.IEnumerator.MoveNext"]()) {
        curr = chooser(e["System.Collections.Generic.IEnumerator`1.get_Current"]());
      }
      return curr;
    }, (e_1) => {
      disposeSafe(e_1);
    });
  }
  function filter(f, xs) {
    return choose((x) => {
      if (f(x)) {
        return some(x);
      } else {
        return void 0;
      }
    }, xs);
  }
  function exists(predicate, xs) {
    const e = ofSeq2(xs);
    try {
      let found = false;
      while (!found && e["System.Collections.IEnumerator.MoveNext"]()) {
        found = predicate(e["System.Collections.Generic.IEnumerator`1.get_Current"]());
      }
      return found;
    } finally {
      disposeSafe(e);
    }
  }
  function tryFind(predicate, xs) {
    const e = ofSeq2(xs);
    try {
      let res = void 0;
      while (res == null && e["System.Collections.IEnumerator.MoveNext"]()) {
        const c = e["System.Collections.Generic.IEnumerator`1.get_Current"]();
        if (predicate(c)) {
          res = some(c);
        }
      }
      return res;
    } finally {
      disposeSafe(e);
    }
  }
  function fold2(folder, state, xs) {
    const e = ofSeq2(xs);
    try {
      let acc = state;
      while (e["System.Collections.IEnumerator.MoveNext"]()) {
        acc = folder(acc, e["System.Collections.Generic.IEnumerator`1.get_Current"]());
      }
      return acc;
    } finally {
      disposeSafe(e);
    }
  }
  function forAll(predicate, xs) {
    return !exists((x) => !predicate(x), xs);
  }
  function tryLast(xs) {
    const e = ofSeq2(xs);
    try {
      const loop = (acc_mut) => {
        loop: while (true) {
          const acc = acc_mut;
          if (!e["System.Collections.IEnumerator.MoveNext"]()) {
            return acc;
          } else {
            acc_mut = e["System.Collections.Generic.IEnumerator`1.get_Current"]();
            continue loop;
          }
          break;
        }
      };
      return e["System.Collections.IEnumerator.MoveNext"]() ? some(loop(e["System.Collections.Generic.IEnumerator`1.get_Current"]())) : void 0;
    } finally {
      disposeSafe(e);
    }
  }
  function length2(xs) {
    if (isArrayLike(xs)) {
      const a = xs;
      return a.length | 0;
    } else if (xs instanceof FSharpList) {
      return length(xs) | 0;
    } else {
      const e = ofSeq2(xs);
      try {
        let count = 0;
        while (e["System.Collections.IEnumerator.MoveNext"]()) {
          count = count + 1 | 0;
        }
        return count | 0;
      } finally {
        disposeSafe(e);
      }
    }
  }
  function map2(mapping, xs) {
    return generate(() => ofSeq2(xs), (e) => e["System.Collections.IEnumerator.MoveNext"]() ? some(mapping(e["System.Collections.Generic.IEnumerator`1.get_Current"]())) : void 0, (e_1) => {
      disposeSafe(e_1);
    });
  }
  function reduce(folder, xs) {
    const e = ofSeq2(xs);
    try {
      const loop = (acc_mut) => {
        loop: while (true) {
          const acc = acc_mut;
          if (e["System.Collections.IEnumerator.MoveNext"]()) {
            acc_mut = folder(acc, e["System.Collections.Generic.IEnumerator`1.get_Current"]());
            continue loop;
          } else {
            return acc;
          }
          break;
        }
      };
      if (e["System.Collections.IEnumerator.MoveNext"]()) {
        return loop(e["System.Collections.Generic.IEnumerator`1.get_Current"]());
      } else {
        throw new Error(SR_inputSequenceEmpty2);
      }
    } finally {
      disposeSafe(e);
    }
  }
  function takeWhile(predicate, xs) {
    return generate(() => ofSeq2(xs), (e) => e["System.Collections.IEnumerator.MoveNext"]() && predicate(e["System.Collections.Generic.IEnumerator`1.get_Current"]()) ? some(e["System.Collections.Generic.IEnumerator`1.get_Current"]()) : void 0, (e_1) => {
      disposeSafe(e_1);
    });
  }
  function max2(xs, comparer) {
    return reduce((x, y) => comparer.Compare(y, x) > 0 ? y : x, xs);
  }

  // artifacts/fable_output/fable_modules/fable-library-js.4.19.3/Range.js
  function makeRangeStepFunction(step, stop, zero2, add3) {
    const stepComparedWithZero = compare(step, zero2) | 0;
    if (stepComparedWithZero === 0) {
      throw new Error("The step of a range cannot be zero");
    }
    const stepGreaterThanZero = stepComparedWithZero > 0;
    return (x) => {
      const comparedWithLast = compare(x, stop) | 0;
      return (stepGreaterThanZero && comparedWithLast <= 0 ? true : !stepGreaterThanZero && comparedWithLast >= 0) ? [x, add3(x, step)] : void 0;
    };
  }
  function integralRangeStep(start, step, stop, zero2, add3) {
    const stepFn = makeRangeStepFunction(step, stop, zero2, add3);
    return delay(() => unfold(stepFn, start));
  }
  function rangeDouble(start, step, stop) {
    return integralRangeStep(start, step, stop, 0, (x, y) => x + y);
  }

  // artifacts/fable_output/matrix.generated.js
  var Matrix$1 = class extends Record {
    constructor(cells, columnCount, rowCount) {
      super();
      this.cells = cells;
      this.columnCount = columnCount | 0;
      this.rowCount = rowCount | 0;
    }
  };
  function create2(columnCount, rowCount, value2) {
    return new Matrix$1(replicate(columnCount * rowCount, value2), columnCount, rowCount);
  }
  function fromArray(input) {
    if (input.length === 0) {
      throw new Error("Input array can't have zero length\\nParameter name: input");
    }
    const rowCount = input.length | 0;
    const columnCount = item(0, input).length | 0;
    if (!forAll((subarray) => subarray.length === columnCount, input)) {
      throw new Error("All subarrays in matrix must have same length\\nParameter name: input");
    }
    return new Matrix$1(concat(input), columnCount, rowCount);
  }
  function getAt(x, y, matrix) {
    return item(x + y * matrix.columnCount, matrix.cells);
  }
  function getRow(y, matrix) {
    return matrix.cells.slice(y * matrix.columnCount, matrix.columnCount + y * matrix.columnCount - 1 + 1);
  }
  function rows(matrix) {
    return map2((y) => getRow(y, matrix), rangeDouble(0, 1, matrix.rowCount - 1));
  }
  function iteri(action, matrix) {
    iterateIndexed((i, x) => {
      action(i % matrix.columnCount, ~~(i / matrix.columnCount), x);
    }, matrix.cells);
  }
  function flatmapi(mapping, matrix) {
    return mapIndexed((i, x) => mapping(i % matrix.columnCount, ~~(i / matrix.columnCount), x), matrix.cells);
  }
  function map3(mapping, matrix) {
    return new Matrix$1(map(mapping, matrix.cells), matrix.columnCount, matrix.rowCount);
  }
  function mapi(mapping, matrix) {
    return new Matrix$1(mapIndexed((i, x) => mapping(i % matrix.columnCount, ~~(i / matrix.columnCount), x), matrix.cells), matrix.columnCount, matrix.rowCount);
  }
  function coordsWhere(predicate, matrix) {
    return map2((tupledArg_1) => create(tupledArg_1[0], tupledArg_1[1]), filter((tupledArg) => predicate(tupledArg[2]), flatmapi((x, y, v) => [x, y, v], matrix)));
  }
  function rotateClockwise(matrix) {
    return mapi((x, y, _arg) => getAt(y, matrix.rowCount - 1 - x, matrix), create2(matrix.rowCount, matrix.columnCount, getAt(0, 0, matrix)));
  }

  // artifacts/fable_output/shape.generated.js
  var ShapeCell = class extends Union {
    constructor(tag, fields) {
      super();
      this.tag = tag;
      this.fields = fields;
    }
    cases() {
      return ["EmptyCell", "FilledCell"];
    }
  };
  var ShapeName = class extends Union {
    constructor(tag, fields) {
      super();
      this.tag = tag;
      this.fields = fields;
    }
    cases() {
      return ["D", "I", "J", "L", "O", "S", "Z"];
    }
  };
  function isCellFilled(cell) {
    if (cell.tag === 0) {
      return false;
    } else {
      return true;
    }
  }
  function getShapeColor(shapeName) {
    switch (shapeName.tag) {
      case 1:
        return "#8080FF";
      case 2:
        return "#FFFF80";
      case 3:
        return "#FFB080";
      case 4:
        return "#80FF80";
      case 5:
        return "#FF80FF";
      case 6:
        return "#B080FF";
      default:
        return "#FF8080";
    }
  }
  function getShapeMatrix(shapeName) {
    const matrixDefinition = shapeName.tag === 1 ? [new Int32Array([0, 0, 0, 0]), new Int32Array([1, 1, 1, 1]), new Int32Array([0, 0, 0, 0]), new Int32Array([0, 0, 0, 0])] : shapeName.tag === 2 ? [new Int32Array([1, 0, 0]), new Int32Array([1, 1, 1]), new Int32Array([0, 0, 0])] : shapeName.tag === 3 ? [new Int32Array([0, 0, 1]), new Int32Array([1, 1, 1]), new Int32Array([0, 0, 0])] : shapeName.tag === 4 ? [new Int32Array([1, 1]), new Int32Array([1, 1])] : shapeName.tag === 5 ? [new Int32Array([0, 1, 1]), new Int32Array([1, 1, 0]), new Int32Array([0, 0, 0])] : shapeName.tag === 6 ? [new Int32Array([1, 1, 0]), new Int32Array([0, 1, 1]), new Int32Array([0, 0, 0])] : [new Int32Array([0, 1, 0]), new Int32Array([1, 1, 1]), new Int32Array([0, 0, 0])];
    const color = getShapeColor(shapeName);
    return map3((x_1) => {
      if (x_1 === 1) {
        return new ShapeCell(1, [color]);
      } else {
        return new ShapeCell(0, []);
      }
    }, fromArray(matrixDefinition));
  }
  function filledCellCoords(shape) {
    return map2((tupledArg_1) => tupledArg_1[0], filter((tupledArg) => isCellFilled(tupledArg[1]), flatmapi((x, y, v) => [create(x, y), v], shape)));
  }

  // artifacts/fable_output/fable_modules/fable-library-js.4.19.3/Int32.js
  var NumberStyles;
  (function(NumberStyles2) {
    NumberStyles2[NumberStyles2["AllowHexSpecifier"] = 512] = "AllowHexSpecifier";
  })(NumberStyles || (NumberStyles = {}));
  function op_UnaryNegation_Int32(x) {
    return x === -2147483648 ? x : -x;
  }

  // artifacts/fable_output/boundingRect.generated.js
  var BoundingRect = class extends Record {
    constructor(bottom, left, right, top) {
      super();
      this.bottom = bottom | 0;
      this.left = left | 0;
      this.right = right | 0;
      this.top = top | 0;
    }
  };
  function addPoint(bounds, coord) {
    return new BoundingRect(max(bounds.bottom, coord.y), min(bounds.left, coord.x), max(bounds.right, coord.x), min(bounds.top, coord.y));
  }
  function fromCoords(coords) {
    return fold2(addPoint, new BoundingRect(-2147483648, 2147483647, -2147483648, -2147483648), coords);
  }

  // artifacts/fable_output/block.generated.js
  var Block = class extends Record {
    constructor(position, shape) {
      super();
      this.position = position;
      this.shape = shape;
    }
  };
  function create3(gridSize, shapeName) {
    const shape = getShapeMatrix(shapeName);
    return new Block(new Coord(~~((gridSize - shape.columnCount) / 2), op_UnaryNegation_Int32(max2(map2(getY, filledCellCoords(shape)), {
      Compare: comparePrimitives
    }))), shape);
  }
  function moveBy(dx, dy, block) {
    return new Block(add(block.position, new Coord(dx, dy)), block.shape);
  }
  function rotate(block) {
    return new Block(block.position, rotateClockwise(block.shape));
  }
  function getSquareCoords(block) {
    return map2((coord) => add(coord, block.position), filledCellCoords(block.shape));
  }
  function getFilledCells(block) {
    return map2((tupledArg_1) => [add(tupledArg_1[0], block.position), tupledArg_1[1]], filter((tupledArg) => isCellFilled(tupledArg[1]), flatmapi((x, y, cell) => [create(x, y), cell], block.shape)));
  }
  function getBoundingRect(block) {
    return fromCoords(getSquareCoords(block));
  }

  // artifacts/fable_output/grid.generated.js
  var Grid = class extends Record {
    constructor(cells, height, width) {
      super();
      this.cells = cells;
      this.height = height | 0;
      this.width = width | 0;
    }
  };
  function create4(width, height) {
    return new Grid(create2(width, height, new ShapeCell(0, [])), height, width);
  }
  function getFilledCellCoords(grid) {
    return coordsWhere(isCellFilled, grid.cells);
  }
  function isBlockValid(grid, block) {
    return forAll((cell) => {
      let coord;
      if (coord = cell, coord.x >= 0 && coord.x < grid.width && coord.y < grid.height) {
        return !exists((gridCoord) => equals(gridCoord, cell), getFilledCellCoords(grid));
      } else {
        return false;
      }
    }, getSquareCoords(block));
  }
  function countCompletedRows(grid) {
    return length2(filter((arg) => forAll(isCellFilled, arg), rows(grid.cells)));
  }
  function removeCompletedRows(grid) {
    const matrix = grid.cells;
    return new Grid(fold2((matrix_2, rowIndex_1) => mapi((x, y, value2) => {
      if (y === 0) {
        return new ShapeCell(0, []);
      } else if (y <= rowIndex_1) {
        return getAt(x, y - 1, matrix_2);
      } else {
        return value2;
      }
    }, matrix_2), matrix, filter((rowIndex) => forAll(isCellFilled, getRow(rowIndex, matrix)), rangeDouble(0, 1, matrix.rowCount - 1))), grid.height, grid.width);
  }
  function placeBlock(grid, block) {
    const filledCells = getFilledCells(block);
    return new Grid(mapi((x, y, value2) => {
      const matchingCell = tryFind((tupledArg) => equals(tupledArg[0], create(x, y)), filledCells);
      if (matchingCell != null) {
        return matchingCell[1];
      } else {
        return value2;
      }
    }, grid.cells), grid.height, grid.width);
  }
  function moveBlockToBottom(grid, block) {
    return defaultArg(tryLast(takeWhile((block_1) => isBlockValid(grid, block_1), map2((dy) => moveBy(0, dy, block), toList(rangeDouble(0, 1, grid.height - 1 - block.position.y))))), block);
  }

  // artifacts/fable_output/score.generated.js
  var Score = class extends Record {
    constructor(level, linesCompleted, points) {
      super();
      this.level = level | 0;
      this.linesCompleted = linesCompleted | 0;
      this.points = points | 0;
    }
  };
  var initial = new Score(0, 0, 0);
  function linesToNextLevel(currentLevel) {
    return (currentLevel + 1) * 10;
  }
  function calculatePoints(linesCompleted) {
    switch (linesCompleted) {
      case 0:
        return 0;
      case 1:
        return 40;
      case 2:
        return 100;
      case 3:
        return 300;
      case 4:
        return 1200;
      default:
        throw new Error(toText(printf("Invalid number of lines completed: %i"))(linesCompleted) + "\\nParameter name: linesCompleted");
    }
  }
  function calculateLevel(level, totalLinesCompleted) {
    if (totalLinesCompleted >= linesToNextLevel(level)) {
      return level + 1 | 0;
    } else {
      return level | 0;
    }
  }
  function update(score, linesCompleted) {
    const totalLinesCompleted = score.linesCompleted + linesCompleted | 0;
    return new Score(calculateLevel(score.level, totalLinesCompleted), totalLinesCompleted, score.points + calculatePoints(linesCompleted));
  }
  function difference(previous, current) {
    return new Score(current.level - previous.level, current.linesCompleted - previous.linesCompleted, current.points - previous.points);
  }

  // artifacts/fable_output/fable_modules/fable-library-js.4.19.3/Random.js
  function Native_random() {
    return Math.random();
  }
  function Native_randomNext(min2, max3) {
    if (max3 < min2) {
      throw new Error("minValue must be less than maxValue");
    }
    return Math.floor(Math.random() * (max3 - min2)) + min2;
  }
  function Native_randomBytes(buffer) {
    if (buffer == null) {
      throw new Error("Buffer cannot be null");
    }
    for (let i = 0; i < buffer.length; i += 6) {
      let r = Math.floor(Math.random() * 281474976710656);
      const rhi = Math.floor(r / 16777216);
      for (let j = 0; j < 6 && i + j < buffer.length; j++) {
        if (j === 3) {
          r = rhi;
        }
        buffer[i + j] = r & 255;
        r >>>= 8;
      }
    }
    ;
  }
  var NonSeeded = class {
    constructor() {
    }
    Next0() {
      return Native_randomNext(0, 2147483647);
    }
    Next1(maxValue) {
      return Native_randomNext(0, maxValue);
    }
    Next2(minValue, maxValue) {
      return Native_randomNext(minValue, maxValue);
    }
    NextDouble() {
      return Native_random();
    }
    NextBytes(buffer) {
      Native_randomBytes(buffer);
    }
  };
  function NonSeeded_$ctor() {
    return new NonSeeded();
  }
  function nonSeeded() {
    return NonSeeded_$ctor();
  }

  // artifacts/fable_output/randomShapeGenerator.generated.js
  var GeneratorState = class extends Record {
    constructor(nextShapes) {
      super();
      this.nextShapes = nextShapes;
    }
  };
  var random = nonSeeded();
  var allShapes = [new ShapeName(0, []), new ShapeName(1, []), new ShapeName(2, []), new ShapeName(3, []), new ShapeName(4, []), new ShapeName(5, []), new ShapeName(6, [])];
  function shuffleList(array) {
    const arrayCopy = copy(array);
    for (let i = arrayCopy.length - 1; i >= 0; i--) {
      const j = random.Next2(0, i + 1) | 0;
      const temp = item(i, arrayCopy);
      setItem(arrayCopy, i, item(j, arrayCopy));
      setItem(arrayCopy, j, temp);
    }
    return ofArray(arrayCopy);
  }
  function getShuffledShapes() {
    return shuffleList(allShapes);
  }
  function getNext(state) {
    const matchValue = state.nextShapes;
    if (!isEmpty(matchValue)) {
      if (isEmpty(tail(matchValue))) {
        return [head(matchValue), new GeneratorState(getShuffledShapes())];
      } else {
        return [head(matchValue), new GeneratorState(tail(matchValue))];
      }
    } else {
      throw new Error("Unexpected empty list of next shapes");
    }
  }
  function getList(count, state) {
    let patternInput;
    return fold2((tupledArg, _arg) => {
      const patternInput_1 = getNext(tupledArg[1]);
      return [append(tupledArg[0], singleton(patternInput_1[0])), patternInput_1[1]];
    }, (patternInput = getNext(state), [singleton(patternInput[0]), patternInput[1]]), rangeDouble(1, 1, count));
  }
  function initialize() {
    return new GeneratorState(getShuffledShapes());
  }

  // artifacts/fable_output/fable_modules/fable-library-js.4.19.3/MapUtil.js
  function tryGetValue(map4, key, defaultValue) {
    if (map4.has(key)) {
      defaultValue.contents = map4.get(key);
      return true;
    }
    return false;
  }

  // artifacts/fable_output/input.generated.js
  var InputAction = class extends Union {
    constructor(tag, fields) {
      super();
      this.tag = tag;
      this.fields = fields;
    }
    cases() {
      return ["MoveLeft", "MoveRight", "StopMovement", "Rotate", "PlaceBlock", "IncreaseFallSpeed", "DecreaseFallSpeed", "TogglePause"];
    }
  };
  var inputActionQueue = createAtom(empty());
  function getActions() {
    const inputs = reverse(inputActionQueue());
    inputActionQueue(empty());
    return inputs;
  }
  function handleInput(mapping, inputEvent) {
    const event = inputEvent;
    if (!event.repeat) {
      let maybeAction;
      let matchValue;
      let outArg = defaultOf();
      matchValue = [tryGetValue(mapping, event.key, new FSharpRef(() => outArg, (v) => {
        outArg = v;
      })), outArg];
      maybeAction = matchValue[0] ? matchValue[1] : void 0;
      if (maybeAction == null) {
      } else {
        const action_1 = maybeAction;
        inputActionQueue(cons(action_1, inputActionQueue()));
      }
    }
  }
  var onKeyDown = (() => {
    const mapping = /* @__PURE__ */ new Map([["ArrowLeft", new InputAction(0, [])], ["ArrowRight", new InputAction(1, [])], ["ArrowDown", new InputAction(5, [])], ["ArrowUp", new InputAction(3, [])], [" ", new InputAction(4, [])]]);
    return (inputEvent) => {
      handleInput(mapping, inputEvent);
    };
  })();
  var onKeyUp = (() => {
    const mapping = /* @__PURE__ */ new Map([["ArrowLeft", new InputAction(2, [])], ["ArrowRight", new InputAction(2, [])], ["ArrowDown", new InputAction(6, [])], ["p", new InputAction(7, [])]]);
    return (inputEvent) => {
      handleInput(mapping, inputEvent);
    };
  })();
  function addEventListeners() {
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
  }

  // artifacts/fable_output/game.generated.js
  var fastFallInterval = 4;
  var moveInterval = 8;
  var GameState = class extends Record {
    constructor(block, grid, isFastFallEnabled, isPaused, lastBlockFallFrame, lastMoveFrame, moveDelta, nextShape, score, shapeGeneratorState) {
      super();
      this.block = block;
      this.grid = grid;
      this.isFastFallEnabled = isFastFallEnabled;
      this.isPaused = isPaused;
      this.lastBlockFallFrame = lastBlockFallFrame | 0;
      this.lastMoveFrame = lastMoveFrame | 0;
      this.moveDelta = moveDelta;
      this.nextShape = nextShape;
      this.score = score;
      this.shapeGeneratorState = shapeGeneratorState;
    }
  };
  var Game = class extends Union {
    constructor(tag, fields) {
      super();
      this.tag = tag;
      this.fields = fields;
    }
    cases() {
      return ["RunningGame", "FinishedGame"];
    }
  };
  function updateBlockIfValid(gameState, updater) {
    const updatedBlock = updater(gameState.block);
    if (isBlockValid(gameState.grid, updatedBlock)) {
      return new GameState(updatedBlock, gameState.grid, gameState.isFastFallEnabled, gameState.isPaused, gameState.lastBlockFallFrame, gameState.lastMoveFrame, gameState.moveDelta, gameState.nextShape, gameState.score, gameState.shapeGeneratorState);
    } else {
      return gameState;
    }
  }
  function placeBlock2(currentFrame, block, gameState) {
    const newGrid = placeBlock(gameState.grid, block);
    const completedRows = countCompletedRows(newGrid) | 0;
    const patternInput = getNext(gameState.shapeGeneratorState);
    return new GameState(create3(gameState.grid.width, gameState.nextShape), removeCompletedRows(newGrid), false, gameState.isPaused, currentFrame, gameState.lastMoveFrame, gameState.moveDelta, patternInput[0], update(gameState.score, completedRows), patternInput[1]);
  }
  function placeCurrentBlock(currentFrame, gameState) {
    return placeBlock2(currentFrame, gameState.block, gameState);
  }
  function moveBlockDown(currentFrame, gameState) {
    const movedBlock = moveBy(0, 1, gameState.block);
    if (isBlockValid(gameState.grid, movedBlock)) {
      return new GameState(movedBlock, gameState.grid, gameState.isFastFallEnabled, gameState.isPaused, currentFrame, gameState.lastMoveFrame, gameState.moveDelta, gameState.nextShape, gameState.score, gameState.shapeGeneratorState);
    } else {
      return placeCurrentBlock(currentFrame, gameState);
    }
  }
  function offsetOutOfBoundsBlock(gridWidth2, block) {
    const bounds = getBoundingRect(block);
    if (bounds.left < 0) {
      return moveBy(op_UnaryNegation_Int32(bounds.left), 0, block);
    } else if (bounds.right >= gridWidth2) {
      return moveBy(gridWidth2 - bounds.right - 1, 0, block);
    } else {
      return block;
    }
  }
  function processInput(currentFrame, inputs, gameState) {
    return fold2((gameState_1, action) => {
      const setMovement = (dx, gameState_4) => new GameState(gameState_4.block, gameState_4.grid, gameState_4.isFastFallEnabled, gameState_4.isPaused, gameState_4.lastBlockFallFrame, gameState_4.lastMoveFrame, dx, gameState_4.nextShape, gameState_4.score, gameState_4.shapeGeneratorState);
      const enableFastFall = (enabled, gameState_6) => new GameState(gameState_6.block, gameState_6.grid, enabled, gameState_6.isPaused, gameState_6.lastBlockFallFrame, gameState_6.lastMoveFrame, gameState_6.moveDelta, gameState_6.nextShape, gameState_6.score, gameState_6.shapeGeneratorState);
      return (action.tag === 1 ? curry2(setMovement)(1) : action.tag === 2 ? (gameState_5) => new GameState(gameState_5.block, gameState_5.grid, gameState_5.isFastFallEnabled, gameState_5.isPaused, gameState_5.lastBlockFallFrame, gameState_5.lastMoveFrame, void 0, gameState_5.nextShape, gameState_5.score, gameState_5.shapeGeneratorState) : action.tag === 5 ? curry2(enableFastFall)(true) : action.tag === 6 ? curry2(enableFastFall)(false) : action.tag === 3 ? (gameState_2) => updateBlockIfValid(gameState_2, (arg) => offsetOutOfBoundsBlock(gameState_2.grid.width, rotate(arg))) : action.tag === 4 ? (gameState_3) => placeBlock2(currentFrame, moveBlockToBottom(gameState_3.grid, gameState_3.block), gameState_3) : action.tag === 7 ? (gameState_7) => new GameState(gameState_7.block, gameState_7.grid, gameState_7.isFastFallEnabled, !gameState_7.isPaused, gameState_7.lastBlockFallFrame, gameState_7.lastMoveFrame, gameState_7.moveDelta, gameState_7.nextShape, gameState_7.score, gameState_7.shapeGeneratorState) : curry2(setMovement)(-1))(gameState_1);
    }, gameState, inputs);
  }
  function moveBlock(dx, gameState) {
    return updateBlockIfValid(gameState, (block) => moveBy(dx, 0, block));
  }
  function processMovement(currentFrame, gameState) {
    const matchValue = gameState.moveDelta;
    if (matchValue == null) {
      return gameState;
    } else if (~~((currentFrame - gameState.lastMoveFrame) / moveInterval) >= 1) {
      const newGameState = moveBlock(matchValue, gameState);
      return new GameState(newGameState.block, newGameState.grid, newGameState.isFastFallEnabled, newGameState.isPaused, newGameState.lastBlockFallFrame, currentFrame, newGameState.moveDelta, newGameState.nextShape, newGameState.score, newGameState.shapeGeneratorState);
    } else {
      return gameState;
    }
  }
  function calculateFallInterval(isFastFallEnabled, level) {
    const normalFallInterval = (level <= 9 ? (48 - level * 5) * 1 : max(5 - ~~((level - 10) / 3), 1) * 1) | 0;
    if (isFastFallEnabled) {
      return min(fastFallInterval, normalFallInterval) | 0;
    } else {
      return normalFallInterval | 0;
    }
  }
  function processFalling(currentFrame, gameState) {
    if (~~((currentFrame - gameState.lastBlockFallFrame) / calculateFallInterval(gameState.isFastFallEnabled, gameState.score.level)) >= 1) {
      return moveBlockDown(currentFrame, gameState);
    } else {
      return gameState;
    }
  }
  function checkGameOver(gameState) {
    if (isBlockValid(gameState.grid, gameState.block)) {
      return new Game(0, [gameState]);
    } else {
      return new Game(1, [gameState.score]);
    }
  }
  function update2(currentFrame, game) {
    const ifNotPaused = (action, gameState) => {
      if (!gameState.isPaused) {
        return action(gameState);
      } else {
        return gameState;
      }
    };
    if (game.tag === 1) {
      return game;
    } else {
      return checkGameOver(ifNotPaused((gameState_4) => processFalling(currentFrame, gameState_4), ifNotPaused((gameState_3) => processMovement(currentFrame, gameState_3), processInput(currentFrame, getActions(), game.fields[0]))));
    }
  }
  function newGame(gridWidth2, gridHeight2, currentTime) {
    const grid = create4(gridWidth2, gridHeight2);
    const patternInput = getList(2, initialize());
    const initialShapes = patternInput[0];
    return new Game(0, [new GameState(create3(grid.width, item2(0, initialShapes)), grid, false, false, 0, 0, void 0, item2(1, initialShapes), initial, patternInput[1])]);
  }

  // artifacts/fable_output/time.generated.js
  var Time = class extends Union {
    constructor(ms) {
      super();
      this.tag = 0;
      this.fields = [ms];
    }
    cases() {
      return ["Time"];
    }
  };
  var zero = new Time(0);
  function add2(_arg, _arg_1) {
    return new Time(_arg.fields[0] + _arg_1.fields[0]);
  }
  function difference2(_arg, _arg_1) {
    return new Time(_arg.fields[0] - _arg_1.fields[0]);
  }
  function fromMilliseconds(ms) {
    return new Time(ms);
  }
  function getCurrent() {
    return fromMilliseconds(performance.now() * 1);
  }

  // artifacts/fable_output/renderer.generated.js
  var Renderer = class extends Record {
    constructor(canvas) {
      super();
      this.canvas = canvas;
    }
  };
  var blockSize = 24;
  function setAlpha(alpha, color) {
    return toText(printf("%s%X"))(color)(alpha);
  }
  function create5(containerElementId, width, height) {
    const elem = document.getElementById(containerElementId);
    const canvas = document.createElement("canvas");
    canvas.width = width * blockSize;
    canvas.height = height * blockSize;
    elem.appendChild(canvas);
    return new Renderer(canvas);
  }
  function clearCanvas(canvas) {
    const context = canvas.getContext("2d");
    context.fillStyle = "#246";
    context.fillRect(0, 0, canvas.width, canvas.height);
  }
  function drawSquare(x, y, color, canvas) {
    const context = canvas.getContext("2d");
    context.fillStyle = color;
    context.fillRect(x * blockSize + 0.5, y * blockSize + 0.5, blockSize - 1, blockSize - 1);
  }
  function drawGrid(grid, canvas) {
    iteri((cellX, cellY, cell) => {
      if (cell.tag === 1) {
        drawSquare(cellX, cellY, cell.fields[0], canvas);
      }
    }, grid.cells);
  }
  function drawShape(x, y, shape, alpha, canvas) {
    iteri((cellX, cellY, cell) => {
      if (cell.tag === 0) {
      } else {
        drawSquare(x + cellX, y + cellY, setAlpha(alpha, cell.fields[0]), canvas);
      }
    }, shape);
  }
  function drawBlock(renderer, alpha, block) {
    drawShape(block.position.x, block.position.y, block.shape, alpha, renderer.canvas);
  }
  function redraw(renderer, grid, block) {
    clearCanvas(renderer.canvas);
    drawGrid(grid, renderer.canvas);
    drawBlock(renderer, 64, moveBlockToBottom(grid, block));
    drawBlock(renderer, 255, block);
  }
  function drawNextBlock(renderer, shape) {
    clearCanvas(renderer.canvas);
    drawShape(0, 0, getShapeMatrix(shape), 255, renderer.canvas);
  }

  // artifacts/fable_output/unitsOfMeasure.generated.js
  var millisecondsPerSecond = 1e3;
  function secondsToMilliseconds(seconds) {
    return seconds * millisecondsPerSecond;
  }

  // artifacts/fable_output/gameLoop.generated.js
  var framesPerSecond = 60;
  var msPerFrame = secondsToMilliseconds(1 / framesPerSecond);
  var frameDuration = fromMilliseconds(msPerFrame);
  function onNextFrame(callback) {
    window.requestAnimationFrame(callback);
  }
  function updateFrame(state_mut, lastFrameNumber_mut, currentTime_mut, lastFrameTime_mut) {
    updateFrame:
      while (true) {
        const state = state_mut, lastFrameNumber = lastFrameNumber_mut, currentTime = currentTime_mut, lastFrameTime = lastFrameTime_mut;
        const frameNumber = lastFrameNumber + 1 | 0;
        const frameTime = add2(lastFrameTime, frameDuration);
        if (compare(frameTime, currentTime) < 0) {
          state_mut = update2(frameNumber, state);
          lastFrameNumber_mut = frameNumber;
          currentTime_mut = currentTime;
          lastFrameTime_mut = frameTime;
          continue updateFrame;
        } else {
          return [state, lastFrameNumber, lastFrameTime];
        }
        break;
      }
  }
  function mainLoop(game, updateUI, lastFrameNumber, lastFrameTime, lastGameTime, lastRealTime) {
    const realTime = getCurrent();
    const gameTime = add2(lastGameTime, difference2(realTime, lastRealTime));
    const patternInput = updateFrame(game, lastFrameNumber, gameTime, lastFrameTime);
    const updatedGame = patternInput[0];
    if (!equals(updatedGame, game)) {
      updateUI(game, updatedGame);
    }
    if (updatedGame.tag === 0) {
      onNextFrame((_arg) => {
        mainLoop(updatedGame, updateUI, patternInput[1], patternInput[2], gameTime, realTime);
      });
    }
  }
  function run(game, updateUI) {
    const realTime = getCurrent();
    onNextFrame((_arg) => {
      mainLoop(game, updateUI, 0, zero, zero, realTime);
    });
  }

  // artifacts/fable_output/app.generated.js
  var gridWidth = 10;
  var gridHeight = 20;
  function run2(gameContainerDivId, nextBlockDivId) {
    const game = newGame(gridWidth, gridHeight, getCurrent());
    const gameRenderer = create5(gameContainerDivId, gridWidth, gridHeight);
    const nextBlockRenderer = create5(nextBlockDivId, 4, 4);
    const gameContainerElement = document.getElementById(gameContainerDivId);
    const scoreElement = document.getElementById("score");
    const linesCompletedElement = document.getElementById("linesCompleted");
    const levelElement = document.getElementById("level");
    const updateScore = (score) => {
      scoreElement.innerText = int32ToString(score.points);
      linesCompletedElement.innerText = int32ToString(score.linesCompleted);
      levelElement.innerHTML = int32ToString(score.level);
    };
    addEventListeners();
    run(game, (previousState, currentState) => {
      if (currentState.tag === 1) {
        updateScore(currentState.fields[0]);
        gameContainerElement.classList.add("is-over");
      } else {
        const gameState = currentState.fields[0];
        redraw(gameRenderer, gameState.grid, gameState.block);
        drawNextBlock(nextBlockRenderer, gameState.nextShape);
        updateScore(gameState.score);
        if (previousState.tag === 0) {
          const previousScore = previousState.fields[0].score;
          const currentScore = gameState.score;
          if (!equals(previousScore, currentScore)) {
            const gainedScore = difference(previousScore, currentScore);
            const linesText = gainedScore.linesCompleted > 1 ? toText(printf("%i LINES"))(gainedScore.linesCompleted) : toText(printf("%i LINE"))(gainedScore.linesCompleted);
            const pointsText = toText(printf("%i POINTS"))(gainedScore.points);
            if (previousScore.level !== currentScore.level) {
              const levelUpElement = document.createElement("div");
              levelUpElement.classList.add("level-up-popup");
              levelUpElement.innerHTML = "Level Up!";
              levelUpElement.addEventListener("animationend", (arg_4) => {
                ((e) => {
                  console.log(some("Removing element"));
                  levelUpElement.remove();
                })(arg_4);
              });
              gameContainerElement.appendChild(levelUpElement);
            }
          }
        }
      }
    });
  }
  run2("gameContainer", "nextBlockContainer");
})();
