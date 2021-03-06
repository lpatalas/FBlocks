/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.fsproj");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./.fable/fable-library.2.13.0/Array.js":
/*!**********************************************!*\
  !*** ./.fable/fable-library.2.13.0/Array.js ***!
  \**********************************************/
/*! exports provided: append, filter, fill, getSubArray, last, tryLast, mapIndexed, map, mapIndexed2, map2, mapIndexed3, map3, mapFold, mapFoldBack, indexed, truncate, concat, collect, countBy, distinctBy, distinct, where, contains, except, groupBy, empty, singleton, initialize, pairwise, replicate, copy, reverse, scan, scanBack, skip, skipWhile, take, takeWhile, addInPlace, addRangeInPlace, removeInPlace, removeAllInPlace, copyTo, partition, find, tryFind, findIndex, tryFindIndex, pick, tryPick, findBack, tryFindBack, findLastIndex, findIndexBack, tryFindIndexBack, choose, foldIndexed, fold, iterate, iterateIndexed, iterate2, iterateIndexed2, isEmpty, forAll, permute, setSlice, sortInPlaceBy, sortInPlace, sort, sortBy, sortDescending, sortByDescending, sortWith, unfold, unzip, unzip3, zip, zip3, chunkBySize, splitAt, compareWith, equalsWith, exactlyOne, head, tryHead, tail, item, tryItem, foldBackIndexed, foldBack, foldIndexed2, fold2, foldBackIndexed2, foldBack2, reduce, reduceBack, forAll2, existsOffset, exists, existsOffset2, exists2, sum, sumBy, maxBy, max, minBy, min, average, averageBy, ofSeq, ofList, toList, windowed, splitInto, transpose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fill", function() { return fill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSubArray", function() { return getSubArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "last", function() { return last; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryLast", function() { return tryLast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapIndexed", function() { return mapIndexed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapIndexed2", function() { return mapIndexed2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map2", function() { return map2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapIndexed3", function() { return mapIndexed3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map3", function() { return map3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapFold", function() { return mapFold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapFoldBack", function() { return mapFoldBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexed", function() { return indexed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "truncate", function() { return truncate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collect", function() { return collect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countBy", function() { return countBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distinctBy", function() { return distinctBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distinct", function() { return distinct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "where", function() { return where; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return contains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "except", function() { return except; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return groupBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleton", function() { return singleton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pairwise", function() { return pairwise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replicate", function() { return replicate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverse", function() { return reverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scan", function() { return scan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scanBack", function() { return scanBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skip", function() { return skip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skipWhile", function() { return skipWhile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "take", function() { return take; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeWhile", function() { return takeWhile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addInPlace", function() { return addInPlace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRangeInPlace", function() { return addRangeInPlace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeInPlace", function() { return removeInPlace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAllInPlace", function() { return removeAllInPlace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyTo", function() { return copyTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return partition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryFind", function() { return tryFind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return findIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryFindIndex", function() { return tryFindIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return pick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryPick", function() { return tryPick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findBack", function() { return findBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryFindBack", function() { return tryFindBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findLastIndex", function() { return findLastIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIndexBack", function() { return findIndexBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryFindIndexBack", function() { return tryFindIndexBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "choose", function() { return choose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foldIndexed", function() { return foldIndexed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fold", function() { return fold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterate", function() { return iterate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterateIndexed", function() { return iterateIndexed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterate2", function() { return iterate2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterateIndexed2", function() { return iterateIndexed2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forAll", function() { return forAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "permute", function() { return permute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSlice", function() { return setSlice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortInPlaceBy", function() { return sortInPlaceBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortInPlace", function() { return sortInPlace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sort", function() { return sort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortBy", function() { return sortBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortDescending", function() { return sortDescending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByDescending", function() { return sortByDescending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortWith", function() { return sortWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unfold", function() { return unfold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unzip", function() { return unzip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unzip3", function() { return unzip3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return zip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zip3", function() { return zip3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chunkBySize", function() { return chunkBySize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitAt", function() { return splitAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareWith", function() { return compareWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equalsWith", function() { return equalsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactlyOne", function() { return exactlyOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "head", function() { return head; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryHead", function() { return tryHead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tail", function() { return tail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "item", function() { return item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryItem", function() { return tryItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foldBackIndexed", function() { return foldBackIndexed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foldBack", function() { return foldBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foldIndexed2", function() { return foldIndexed2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fold2", function() { return fold2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foldBackIndexed2", function() { return foldBackIndexed2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foldBack2", function() { return foldBack2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return reduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduceBack", function() { return reduceBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forAll2", function() { return forAll2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "existsOffset", function() { return existsOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exists", function() { return exists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "existsOffset2", function() { return existsOffset2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exists2", function() { return exists2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return sum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sumBy", function() { return sumBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxBy", function() { return maxBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minBy", function() { return minBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "average", function() { return average; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "averageBy", function() { return averageBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ofSeq", function() { return ofSeq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ofList", function() { return ofList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toList", function() { return toList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowed", function() { return windowed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitInto", function() { return splitInto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return transpose; });
/* harmony import */ var _Option_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Option.js */ "./.fable/fable-library.2.13.0/Option.js");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Util.js */ "./.fable/fable-library.2.13.0/Util.js");
/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Map.js */ "./.fable/fable-library.2.13.0/Map.js");
/* harmony import */ var _Set_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Set.js */ "./.fable/fable-library.2.13.0/Set.js");
/* harmony import */ var _Types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Types.js */ "./.fable/fable-library.2.13.0/Types.js");
/* harmony import */ var _Seq_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Seq.js */ "./.fable/fable-library.2.13.0/Seq.js");






const indexNotFoundMsg = "An index satisfying the predicate was not found in the collection.";
function append(array1, array2, cons) {
  if (ArrayBuffer.isView(array1)) {
    const len1 = array1.length | 0;
    const len2 = array2.length | 0;
    const newArray = new cons(len1 + len2);

    for (let i = 0; i <= len1 - 1; i++) {
      newArray[i] = array1[i];
    }

    for (let i$$1 = 0; i$$1 <= len2 - 1; i$$1++) {
      newArray[i$$1 + len1] = array2[i$$1];
    }

    return newArray;
  } else {
    return array1.concat(array2);
  }
}
function filter(predicate, array) {
  return array.filter(predicate);
}
function fill(target, targetIndex, count, value) {
  target.fill(value, targetIndex, targetIndex + count);
  return target;
}
function getSubArray(array$$3, start$$1, count$$2) {
  return array$$3.slice(start$$1, start$$1 + count$$2);
}
function last(array$$5) {
  if (array$$5.length === 0) {
    throw new Error("The input array was empty\\nParameter name: array");
  } else {
    void null;
  }

  return array$$5[array$$5.length - 1];
}
function tryLast(array$$6) {
  if (array$$6.length === 0) {
    return undefined;
  } else {
    return Object(_Option_js__WEBPACK_IMPORTED_MODULE_0__["some"])(array$$6[array$$6.length - 1]);
  }
}
function mapIndexed(f, source, cons$$1) {
  if (ArrayBuffer.isView(source)) {
    const len = source.length | 0;
    const target$$1 = new cons$$1(len);

    for (let i$$2 = 0; i$$2 <= len - 1; i$$2++) {
      target$$1[i$$2] = f(i$$2, source[i$$2]);
    }

    return target$$1;
  } else {
    return source.map(function (delegateArg0, delegateArg1) {
      return f(delegateArg1, delegateArg0);
    });
  }
}
function map(f$$1, source$$1, cons$$2) {
  if (ArrayBuffer.isView(source$$1)) {
    const len$$1 = source$$1.length | 0;
    const target$$2 = new cons$$2(len$$1);

    for (let i$$4 = 0; i$$4 <= len$$1 - 1; i$$4++) {
      target$$2[i$$4] = f$$1(source$$1[i$$4]);
    }

    return target$$2;
  } else {
    return source$$1.map(function mapping$$1(x$$1) {
      return f$$1(x$$1);
    });
  }
}
function mapIndexed2(f$$2, source1, source2, cons$$3) {
  if (source1.length !== source2.length) {
    throw new Error("Arrays had different lengths");
  } else {
    void null;
  }

  const result = new cons$$3(source1.length);

  for (let i$$5 = 0; i$$5 <= source1.length - 1; i$$5++) {
    result[i$$5] = f$$2(i$$5, source1[i$$5], source2[i$$5]);
  }

  return result;
}
function map2(f$$3, source1$$1, source2$$1, cons$$4) {
  if (source1$$1.length !== source2$$1.length) {
    throw new Error("Arrays had different lengths");
  } else {
    void null;
  }

  const result$$1 = new cons$$4(source1$$1.length);

  for (let i$$6 = 0; i$$6 <= source1$$1.length - 1; i$$6++) {
    result$$1[i$$6] = f$$3(source1$$1[i$$6], source2$$1[i$$6]);
  }

  return result$$1;
}
function mapIndexed3(f$$4, source1$$2, source2$$2, source3, cons$$5) {
  if (source1$$2.length !== source2$$2.length ? true : source2$$2.length !== source3.length) {
    throw new Error("Arrays had different lengths");
  } else {
    void null;
  }

  const result$$2 = new cons$$5(source1$$2.length);

  for (let i$$7 = 0; i$$7 <= source1$$2.length - 1; i$$7++) {
    result$$2[i$$7] = f$$4(i$$7, source1$$2[i$$7], source2$$2[i$$7], source3[i$$7]);
  }

  return result$$2;
}
function map3(f$$5, source1$$3, source2$$3, source3$$1, cons$$6) {
  if (source1$$3.length !== source2$$3.length ? true : source2$$3.length !== source3$$1.length) {
    throw new Error("Arrays had different lengths");
  } else {
    void null;
  }

  const result$$3 = new cons$$6(source1$$3.length);

  for (let i$$8 = 0; i$$8 <= source1$$3.length - 1; i$$8++) {
    result$$3[i$$8] = f$$5(source1$$3[i$$8], source2$$3[i$$8], source3$$1[i$$8]);
  }

  return result$$3;
}
function mapFold(mapping$$2, state, array$$9, cons$$7) {
  const matchValue = array$$9.length | 0;

  if (matchValue === 0) {
    return [[], state];
  } else {
    let acc = state;
    const res = new cons$$7(matchValue);

    for (let i$$9 = 0; i$$9 <= array$$9.length - 1; i$$9++) {
      const patternInput = mapping$$2(acc, array$$9[i$$9]);
      res[i$$9] = patternInput[0];
      acc = patternInput[1];
    }

    return [res, acc];
  }
}
function mapFoldBack(mapping$$3, array$$10, state$$1, cons$$8) {
  const matchValue$$1 = array$$10.length | 0;

  if (matchValue$$1 === 0) {
    return [[], state$$1];
  } else {
    let acc$$1 = state$$1;
    const res$$1 = new cons$$8(matchValue$$1);

    for (let i$$10 = array$$10.length - 1; i$$10 >= 0; i$$10--) {
      const patternInput$$1 = mapping$$3(array$$10[i$$10], acc$$1);
      res$$1[i$$10] = patternInput$$1[0];
      acc$$1 = patternInput$$1[1];
    }

    return [res$$1, acc$$1];
  }
}
function indexed(source$$2) {
  const len$$4 = source$$2.length | 0;
  const target$$3 = new Array(len$$4);

  for (let i$$11 = 0; i$$11 <= len$$4 - 1; i$$11++) {
    target$$3[i$$11] = [i$$11, source$$2[i$$11]];
  }

  return target$$3;
}
function truncate(count$$4, array$$11) {
  const count$$5 = Object(_Util_js__WEBPACK_IMPORTED_MODULE_1__["max"])(_Util_js__WEBPACK_IMPORTED_MODULE_1__["comparePrimitives"], 0, count$$4) | 0;
  return array$$11.slice(0, 0 + count$$5);
}
function concat(arrays, cons$$9) {
  var arr$$4;
  const arrays$$1 = Array.isArray(arrays) ? arrays : Array.from(arrays);
  const matchValue$$2 = arrays$$1.length | 0;

  switch (matchValue$$2) {
    case 0:
      {
        return new cons$$9(0);
      }

    case 1:
      {
        return arrays$$1[0];
      }

    default:
      {
        if (arr$$4 = arrays$$1[0], ArrayBuffer.isView(arr$$4)) {
          let totalIdx = 0;
          let totalLength = 0;

          for (let idx = 0; idx <= arrays$$1.length - 1; idx++) {
            const arr$$5 = arrays$$1[idx];
            totalLength = totalLength + arr$$5.length;
          }

          const result$$4 = new cons$$9(totalLength);

          for (let idx$$1 = 0; idx$$1 <= arrays$$1.length - 1; idx$$1++) {
            const arr$$6 = arrays$$1[idx$$1];

            for (let j = 0; j <= arr$$6.length - 1; j++) {
              result$$4[totalIdx] = arr$$6[j];
              totalIdx = totalIdx + 1;
            }
          }

          return result$$4;
        } else {
          return arrays$$1[0].concat(...arrays$$1.slice(1));
        }
      }
  }
}
function collect(mapping$$4, array$$14, cons$$10) {
  const mapped = map(mapping$$4, array$$14, Array);
  return concat(mapped, cons$$10);
}
function countBy(projection, array$$15, eq) {
  const dict = Object(_Map_js__WEBPACK_IMPORTED_MODULE_2__["createMutable"])([], eq);
  const keys = [];

  for (let idx$$2 = 0; idx$$2 <= array$$15.length - 1; idx$$2++) {
    const value$$2 = array$$15[idx$$2];
    const key = projection(value$$2);
    const matchValue$$3 = Object(_Util_js__WEBPACK_IMPORTED_MODULE_1__["tryGetValue"])(dict, key, 0);

    if (matchValue$$3[0]) {
      dict.set(key, matchValue$$3[1] + 1);
    } else {
      dict.set(key, 1);
      const value$$3 = keys.push(key);
      void value$$3;
    }
  }

  const result$$5 = map(function (key$$1) {
    return [key$$1, Object(_Util_js__WEBPACK_IMPORTED_MODULE_1__["getItemFromDict"])(dict, key$$1)];
  }, keys, Array);
  return result$$5;
}
function distinctBy(projection$$1, array$$17, eq$$1) {
  const hashSet = Object(_Set_js__WEBPACK_IMPORTED_MODULE_3__["createMutable"])([], eq$$1);
  return filter(function predicate$$2($arg$$3) {
    const arg00 = projection$$1($arg$$3);
    return Object(_Util_js__WEBPACK_IMPORTED_MODULE_1__["addToSet"])(arg00, hashSet);
  }, array$$17);
}
function distinct(array$$19, eq$$2) {
  return distinctBy(function (x$$2) {
    return x$$2;
  }, array$$19, eq$$2);
}
function where(predicate$$3, array$$20) {
  return array$$20.filter(predicate$$3);
}
function contains(value$$4, array$$22, eq$$3) {
  const loop = function loop($i$$12$$79) {
    loop: while (true) {
      const i$$12 = $i$$12$$79;

      if (i$$12 >= array$$22.length) {
        return false;
      } else if (eq$$3.Equals(value$$4, array$$22[i$$12])) {
        return true;
      } else {
        $i$$12$$79 = i$$12 + 1;
        continue loop;
      }

      break;
    }
  };

  return loop(0);
}
function except(itemsToExclude, array$$23, eq$$4) {
  if (array$$23.length === 0) {
    return array$$23;
  } else {
    const cached = Object(_Set_js__WEBPACK_IMPORTED_MODULE_3__["createMutable"])(itemsToExclude, eq$$4);
    return array$$23.filter(function predicate$$5(arg00$$1) {
      return Object(_Util_js__WEBPACK_IMPORTED_MODULE_1__["addToSet"])(arg00$$1, cached);
    });
  }
}
function groupBy(projection$$2, array$$26, cons$$11, eq$$5) {
  const dict$$1 = Object(_Map_js__WEBPACK_IMPORTED_MODULE_2__["createMutable"])([], eq$$5);
  const keys$$1 = [];

  for (let idx$$3 = 0; idx$$3 <= array$$26.length - 1; idx$$3++) {
    const v = array$$26[idx$$3];
    const key$$2 = projection$$2(v);
    const matchValue$$4 = Object(_Util_js__WEBPACK_IMPORTED_MODULE_1__["tryGetValue"])(dict$$1, key$$2, null);

    if (matchValue$$4[0]) {
      dict$$1.set(key$$2, new _Types_js__WEBPACK_IMPORTED_MODULE_4__["List"](v, matchValue$$4[1]));
    } else {
      Object(_Util_js__WEBPACK_IMPORTED_MODULE_1__["addToDict"])(dict$$1, key$$2, new _Types_js__WEBPACK_IMPORTED_MODULE_4__["List"](v, new _Types_js__WEBPACK_IMPORTED_MODULE_4__["List"]()));
      const value$$5 = keys$$1.push(key$$2);
      void value$$5;
    }
  }

  const result$$6 = map(function (key$$3) {
    var array$$28;
    return [key$$3, (array$$28 = cons$$11.from(Object(_Util_js__WEBPACK_IMPORTED_MODULE_1__["getItemFromDict"])(dict$$1, key$$3)), (array$$28.reverse()))];
  }, keys$$1, Array);
  return result$$6;
}
function empty(cons$$12) {
  return new cons$$12(0);
}
function singleton(value$$6, cons$$14) {
  const ar = new cons$$14(1);
  ar[0] = value$$6;
  return ar;
}
function initialize(count$$8, initializer, cons$$15) {
  if (count$$8 < 0) {
    throw new Error("The input must be non-negative\\nParameter name: count");
  } else {
    void null;
  }

  const result$$7 = new cons$$15(count$$8);

  for (let i$$13 = 0; i$$13 <= count$$8 - 1; i$$13++) {
    result$$7[i$$13] = initializer(i$$13);
  }

  return result$$7;
}
function pairwise(array$$30) {
  if (array$$30.length < 2) {
    return [];
  } else {
    const count$$9 = array$$30.length - 1 | 0;
    const result$$8 = new Array(count$$9);

    for (let i$$14 = 0; i$$14 <= count$$9 - 1; i$$14++) {
      result$$8[i$$14] = [array$$30[i$$14], array$$30[i$$14 + 1]];
    }

    return result$$8;
  }
}
function replicate(count$$10, initial, cons$$16) {
  if (count$$10 < 0) {
    throw new Error("The input must be non-negative\\nParameter name: count");
  } else {
    void null;
  }

  const result$$9 = new cons$$16(count$$10);

  for (let i$$15 = 0; i$$15 <= result$$9.length - 1; i$$15++) {
    result$$9[i$$15] = initial;
  }

  return result$$9;
}
function copy(array$$31, cons$$17) {
  return array$$31.slice();
}
function reverse(array$$33, cons$$18) {
  const array$$35 = array$$33.slice();
  return array$$35.reverse();
}
function scan(folder, state$$2, array$$37, cons$$19) {
  const res$$2 = new cons$$19(array$$37.length + 1);
  res$$2[0] = state$$2;

  for (let i$$16 = 0; i$$16 <= array$$37.length - 1; i$$16++) {
    res$$2[i$$16 + 1] = folder(res$$2[i$$16], array$$37[i$$16]);
  }

  return res$$2;
}
function scanBack(folder$$1, array$$38, state$$3, cons$$20) {
  const res$$3 = new cons$$20(array$$38.length + 1);
  res$$3[array$$38.length] = state$$3;

  for (let i$$17 = array$$38.length - 1; i$$17 >= 0; i$$17--) {
    res$$3[i$$17] = folder$$1(array$$38[i$$17], res$$3[i$$17 + 1]);
  }

  return res$$3;
}
function skip(count$$11, array$$39, cons$$21) {
  if (count$$11 > array$$39.length) {
    throw new Error("count is greater than array length\\nParameter name: count");
  } else {
    void null;
  }

  if (count$$11 === array$$39.length) {
    return new cons$$21(0);
  } else {
    const count$$12 = (count$$11 < 0 ? 0 : count$$11) | 0;
    return array$$39.slice(count$$12);
  }
}
function skipWhile(predicate$$7, array$$41, cons$$23) {
  let count$$14 = 0;

  while (count$$14 < array$$41.length ? predicate$$7(array$$41[count$$14]) : false) {
    count$$14 = count$$14 + 1;
  }

  if (count$$14 === array$$41.length) {
    return new cons$$23(0);
  } else {
    const count$$15 = count$$14 | 0;
    return array$$41.slice(count$$15);
  }
}
function take(count$$16, array$$43, cons$$25) {
  if (count$$16 < 0) {
    throw new Error("The input must be non-negative\\nParameter name: count");
  } else {
    void null;
  }

  if (count$$16 > array$$43.length) {
    throw new Error("count is greater than array length\\nParameter name: count");
  } else {
    void null;
  }

  if (count$$16 === 0) {
    return new cons$$25(0);
  } else {
    return array$$43.slice(0, 0 + count$$16);
  }
}
function takeWhile(predicate$$8, array$$45, cons$$27) {
  let count$$18 = 0;

  while (count$$18 < array$$45.length ? predicate$$8(array$$45[count$$18]) : false) {
    count$$18 = count$$18 + 1;
  }

  if (count$$18 === 0) {
    return new cons$$27(0);
  } else {
    const count$$19 = count$$18 | 0;
    return array$$45.slice(0, 0 + count$$19);
  }
}
function addInPlace(x$$3, array$$47) {
  const value$$7 = array$$47.push(x$$3);
  void value$$7;
}
function addRangeInPlace(range, array$$49) {
  Object(_Seq_js__WEBPACK_IMPORTED_MODULE_5__["iterate"])(function (x$$4) {
    const value$$8 = array$$49.push(x$$4);
    void value$$8;
  }, range);
}
function removeInPlace(item$$5, array$$51) {
  const i$$18 = array$$51.indexOf(item$$5);

  if (i$$18 > -1) {
    const value$$9 = array$$51.splice(i$$18, 1);
    void value$$9;
    return true;
  } else {
    return false;
  }
}
function removeAllInPlace(predicate$$9, array$$54) {
  const countRemoveAll = function countRemoveAll(count$$20) {
    const i$$19 = array$$54.findIndex(predicate$$9);

    if (i$$19 > -1) {
      const value$$10 = array$$54.splice(i$$19, 1);
      void value$$10;
      return countRemoveAll(count$$20) + 1 | 0;
    } else {
      return count$$20 | 0;
    }
  };

  return countRemoveAll(0) | 0;
}
function copyTo(source$$3, sourceIndex, target$$4, targetIndex$$1, count$$21) {
  const diff = targetIndex$$1 - sourceIndex | 0;

  for (let i$$20 = sourceIndex; i$$20 <= sourceIndex + count$$21 - 1; i$$20++) {
    target$$4[i$$20 + diff] = source$$3[i$$20];
  }
}
function partition(f$$6, source$$4, cons$$29) {
  const len$$7 = source$$4.length | 0;
  const res1 = new cons$$29(len$$7);
  const res2 = new cons$$29(len$$7);
  let iTrue = 0;
  let iFalse = 0;

  for (let i$$21 = 0; i$$21 <= len$$7 - 1; i$$21++) {
    if (f$$6(source$$4[i$$21])) {
      res1[iTrue] = source$$4[i$$21];
      iTrue = iTrue + 1;
    } else {
      res2[iFalse] = source$$4[i$$21];
      iFalse = iFalse + 1;
    }
  }

  return [(truncate(iTrue, res1)), (truncate(iFalse, res2))];
}
function find(predicate$$11, array$$59) {
  const matchValue$$5 = array$$59.find(predicate$$11);

  if (matchValue$$5 == null) {
    throw new Error(indexNotFoundMsg);
  } else {
    const res$$4 = Object(_Option_js__WEBPACK_IMPORTED_MODULE_0__["value"])(matchValue$$5);
    return res$$4;
  }
}
function tryFind(predicate$$13, array$$61) {
  return array$$61.find(predicate$$13);
}
function findIndex(predicate$$15, array$$63) {
  const matchValue$$6 = array$$63.findIndex(predicate$$15);

  if (matchValue$$6 > -1) {
    return matchValue$$6 | 0;
  } else {
    throw new Error(indexNotFoundMsg);
  }
}
function tryFindIndex(predicate$$17, array$$65) {
  const matchValue$$7 = array$$65.findIndex(predicate$$17);

  if (matchValue$$7 > -1) {
    return matchValue$$7;
  } else {
    return undefined;
  }
}
function pick(chooser, array$$67) {
  const loop$$1 = function loop$$1($i$$22$$149) {
    loop$$1: while (true) {
      const i$$22 = $i$$22$$149;

      if (i$$22 >= array$$67.length) {
        throw new Error(indexNotFoundMsg);
      } else {
        const matchValue$$8 = chooser(array$$67[i$$22]);

        if (matchValue$$8 != null) {
          const res$$5 = Object(_Option_js__WEBPACK_IMPORTED_MODULE_0__["value"])(matchValue$$8);
          return res$$5;
        } else {
          $i$$22$$149 = i$$22 + 1;
          continue loop$$1;
        }
      }

      break;
    }
  };

  return loop$$1(0);
}
function tryPick(chooser$$1, array$$68) {
  const loop$$2 = function loop$$2($i$$23$$152) {
    loop$$2: while (true) {
      const i$$23 = $i$$23$$152;

      if (i$$23 >= array$$68.length) {
        return undefined;
      } else {
        const matchValue$$9 = chooser$$1(array$$68[i$$23]);

        if (matchValue$$9 == null) {
          $i$$23$$152 = i$$23 + 1;
          continue loop$$2;
        } else {
          return matchValue$$9;
        }
      }

      break;
    }
  };

  return loop$$2(0);
}
function findBack(predicate$$19, array$$69) {
  const loop$$3 = function loop$$3($i$$24$$155) {
    loop$$3: while (true) {
      const i$$24 = $i$$24$$155;

      if (i$$24 < 0) {
        throw new Error(indexNotFoundMsg);
      } else if (predicate$$19(array$$69[i$$24])) {
        return array$$69[i$$24];
      } else {
        $i$$24$$155 = i$$24 - 1;
        continue loop$$3;
      }

      break;
    }
  };

  return loop$$3(array$$69.length - 1);
}
function tryFindBack(predicate$$20, array$$70) {
  const loop$$4 = function loop$$4($i$$25$$158) {
    loop$$4: while (true) {
      const i$$25 = $i$$25$$158;

      if (i$$25 < 0) {
        return undefined;
      } else if (predicate$$20(array$$70[i$$25])) {
        return Object(_Option_js__WEBPACK_IMPORTED_MODULE_0__["some"])(array$$70[i$$25]);
      } else {
        $i$$25$$158 = i$$25 - 1;
        continue loop$$4;
      }

      break;
    }
  };

  return loop$$4(array$$70.length - 1);
}
function findLastIndex(predicate$$21, array$$71) {
  const loop$$5 = function loop$$5($i$$26$$161) {
    loop$$5: while (true) {
      const i$$26 = $i$$26$$161;

      if (i$$26 < 0) {
        return -1 | 0;
      } else if (predicate$$21(array$$71[i$$26])) {
        return i$$26 | 0;
      } else {
        $i$$26$$161 = i$$26 - 1;
        continue loop$$5;
      }

      break;
    }
  };

  return loop$$5(array$$71.length - 1) | 0;
}
function findIndexBack(predicate$$22, array$$72) {
  const loop$$6 = function loop$$6($i$$27$$164) {
    loop$$6: while (true) {
      const i$$27 = $i$$27$$164;

      if (i$$27 < 0) {
        throw new Error(indexNotFoundMsg);
      } else if (predicate$$22(array$$72[i$$27])) {
        return i$$27 | 0;
      } else {
        $i$$27$$164 = i$$27 - 1;
        continue loop$$6;
      }

      break;
    }
  };

  return loop$$6(array$$72.length - 1) | 0;
}
function tryFindIndexBack(predicate$$23, array$$73) {
  const loop$$7 = function loop$$7($i$$28$$167) {
    loop$$7: while (true) {
      const i$$28 = $i$$28$$167;

      if (i$$28 < 0) {
        return undefined;
      } else if (predicate$$23(array$$73[i$$28])) {
        return i$$28;
      } else {
        $i$$28$$167 = i$$28 - 1;
        continue loop$$7;
      }

      break;
    }
  };

  return loop$$7(array$$73.length - 1);
}
function choose(chooser$$2, array$$74, cons$$30) {
  const arr$$7 = array$$74.filter(function f$$7(x$$5) {
    const option = chooser$$2(x$$5);
    return option != null;
  });
  return map(function g(x$$6) {
    const option$$1 = chooser$$2(x$$6);
    return Object(_Option_js__WEBPACK_IMPORTED_MODULE_0__["value"])(option$$1);
  }, arr$$7, cons$$30);
}
function foldIndexed(folder$$2, state$$4, array$$76) {
  return array$$76.reduce(function (delegateArg0$$1, delegateArg1$$1, delegateArg2) {
    return folder$$2(delegateArg2, delegateArg0$$1, delegateArg1$$1);
  }, state$$4);
}
function fold(folder$$4, state$$6, array$$78) {
  return array$$78.reduce(function (delegateArg0$$2, delegateArg1$$2) {
    return folder$$4(delegateArg0$$2, delegateArg1$$2);
  }, state$$6);
}
function iterate(action, array$$80) {
  for (let i$$30 = 0; i$$30 <= array$$80.length - 1; i$$30++) {
    action(array$$80[i$$30]);
  }
}
function iterateIndexed(action$$1, array$$81) {
  for (let i$$31 = 0; i$$31 <= array$$81.length - 1; i$$31++) {
    action$$1(i$$31, array$$81[i$$31]);
  }
}
function iterate2(action$$2, array1$$2, array2$$2) {
  if (array1$$2.length !== array2$$2.length) {
    throw new Error("Arrays had different lengths");
  } else {
    void null;
  }

  for (let i$$32 = 0; i$$32 <= array1$$2.length - 1; i$$32++) {
    action$$2(array1$$2[i$$32], array2$$2[i$$32]);
  }
}
function iterateIndexed2(action$$3, array1$$3, array2$$3) {
  if (array1$$3.length !== array2$$3.length) {
    throw new Error("Arrays had different lengths");
  } else {
    void null;
  }

  for (let i$$33 = 0; i$$33 <= array1$$3.length - 1; i$$33++) {
    action$$3(i$$33, array1$$3[i$$33], array2$$3[i$$33]);
  }
}
function isEmpty(array$$82) {
  return array$$82.length === 0;
}
function forAll(predicate$$25, array$$83) {
  return array$$83.every(predicate$$25);
}
function permute(f$$8, array$$85) {
  const size = array$$85.length | 0;
  const res$$7 = array$$85.slice();
  const checkFlags = new Int32Array(size);
  iterateIndexed(function (i$$34, x$$9) {
    const j$$1 = f$$8(i$$34) | 0;

    if (j$$1 < 0 ? true : j$$1 >= size) {
      throw new Error("Not a valid permutation");
    } else {
      void null;
    }

    res$$7[j$$1] = x$$9;
    checkFlags[j$$1] = 1;
  }, array$$85);
  let isValid;
  isValid = checkFlags.every(function predicate$$27(y) {
    return 1 === y;
  });

  if (!isValid) {
    throw new Error("Not a valid permutation");
  } else {
    void null;
  }

  return res$$7;
}
function setSlice(target$$5, lower, upper, source$$5) {
  const lower$$1 = Object(_Option_js__WEBPACK_IMPORTED_MODULE_0__["defaultArg"])(lower, 0) | 0;
  const upper$$1 = Object(_Option_js__WEBPACK_IMPORTED_MODULE_0__["defaultArg"])(upper, 0) | 0;
  const length = (upper$$1 > 0 ? upper$$1 : target$$5.length - 1) - lower$$1 | 0;

  for (let i$$35 = 0; i$$35 <= length; i$$35++) {
    target$$5[i$$35 + lower$$1] = source$$5[i$$35];
  }
}
function sortInPlaceBy(projection$$3, xs, comparer) {
  xs.sort(function (x$$11, y$$1) {
    return comparer.Compare(projection$$3(x$$11), projection$$3(y$$1));
  });
}
function sortInPlace(xs$$1, comparer$$1) {
  xs$$1.sort(function (x$$12, y$$2) {
    return comparer$$1.Compare(x$$12, y$$2);
  });
}
function sort(xs$$2, comparer$$2) {
  const xs$$3 = xs$$2.slice();
  xs$$3.sort(function comparer$$3(x$$13, y$$3) {
    return comparer$$2.Compare(x$$13, y$$3);
  });
  return xs$$3;
}
function sortBy(projection$$4, xs$$4, comparer$$4) {
  const xs$$5 = xs$$4.slice();
  xs$$5.sort(function comparer$$5(x$$14, y$$4) {
    return comparer$$4.Compare(projection$$4(x$$14), projection$$4(y$$4));
  });
  return xs$$5;
}
function sortDescending(xs$$6, comparer$$6) {
  const xs$$7 = xs$$6.slice();
  xs$$7.sort(function comparer$$7(x$$15, y$$5) {
    return comparer$$6.Compare(x$$15, y$$5) * -1;
  });
  return xs$$7;
}
function sortByDescending(projection$$5, xs$$8, comparer$$8) {
  const xs$$9 = xs$$8.slice();
  xs$$9.sort(function comparer$$9(x$$16, y$$6) {
    return comparer$$8.Compare(projection$$5(x$$16), projection$$5(y$$6)) * -1;
  });
  return xs$$9;
}
function sortWith(comparer$$10, xs$$10) {
  const xs$$11 = xs$$10.slice();
  xs$$11.sort(comparer$$10);
  return xs$$11;
}
function unfold(generator, state$$8) {
  const res$$8 = [];

  const loop$$8 = function loop$$8($state$$9$$226) {
    loop$$8: while (true) {
      const state$$9 = $state$$9$$226;
      const matchValue$$10 = generator(state$$9);

      if (matchValue$$10 != null) {
        const x$$17 = matchValue$$10[0];
        const s$$2 = matchValue$$10[1];
        const value$$11 = res$$8.push(x$$17);
        void value$$11;
        $state$$9$$226 = s$$2;
        continue loop$$8;
      } else {
        void null;
      }

      break;
    }
  };

  loop$$8(state$$8);
  return res$$8;
}
function unzip(array$$95) {
  const len$$8 = array$$95.length | 0;
  const res1$$1 = new Array(len$$8);
  const res2$$1 = new Array(len$$8);
  iterateIndexed(function (i$$36, tupledArg) {
    res1$$1[i$$36] = tupledArg[0];
    res2$$1[i$$36] = tupledArg[1];
  }, array$$95);
  return [res1$$1, res2$$1];
}
function unzip3(array$$96) {
  const len$$11 = array$$96.length | 0;
  const res1$$2 = new Array(len$$11);
  const res2$$2 = new Array(len$$11);
  const res3 = new Array(len$$11);
  iterateIndexed(function (i$$37, tupledArg$$1) {
    res1$$2[i$$37] = tupledArg$$1[0];
    res2$$2[i$$37] = tupledArg$$1[1];
    res3[i$$37] = tupledArg$$1[2];
  }, array$$96);
  return [res1$$2, res2$$2, res3];
}
function zip(array1$$4, array2$$4) {
  if (array1$$4.length !== array2$$4.length) {
    throw new Error("Arrays had different lengths");
  } else {
    void null;
  }

  let result$$10;
  const len$$15 = array1$$4.length | 0;
  result$$10 = new Array(len$$15);

  for (let i$$38 = 0; i$$38 <= array1$$4.length - 1; i$$38++) {
    result$$10[i$$38] = [array1$$4[i$$38], array2$$4[i$$38]];
  }

  return result$$10;
}
function zip3(array1$$5, array2$$5, array3) {
  if (array1$$5.length !== array2$$5.length ? true : array2$$5.length !== array3.length) {
    throw new Error("Arrays had different lengths");
  } else {
    void null;
  }

  let result$$11;
  const len$$16 = array1$$5.length | 0;
  result$$11 = new Array(len$$16);

  for (let i$$39 = 0; i$$39 <= array1$$5.length - 1; i$$39++) {
    result$$11[i$$39] = [array1$$5[i$$39], array2$$5[i$$39], array3[i$$39]];
  }

  return result$$11;
}
function chunkBySize(chunkSize, array$$97) {
  if (chunkSize < 1) {
    throw new Error("The input must be positive.\\nParameter name: size");
  } else {
    void null;
  }

  if (array$$97.length === 0) {
    return [[]];
  } else {
    const result$$12 = [];

    for (let x$$18 = 0; x$$18 <= ~~Math.ceil(array$$97.length / chunkSize) - 1; x$$18++) {
      const start$$8 = x$$18 * chunkSize | 0;
      const slice = array$$97.slice(start$$8, start$$8 + chunkSize);
      const value$$12 = result$$12.push(slice);
      void value$$12;
    }

    return result$$12;
  }
}
function splitAt(index$$4, array$$100) {
  if (index$$4 < 0) {
    throw new Error("The input must be non-negative\\nParameter name: index");
  } else {
    void null;
  }

  if (index$$4 > array$$100.length) {
    throw new Error("The input sequence has an insufficient number of elements.\\nParameter name: index");
  } else {
    void null;
  }

  return [array$$100.slice(0, 0 + index$$4), array$$100.slice(index$$4)];
}
function compareWith(comparer$$12, array1$$6, array2$$6) {
  if (array1$$6 == null) {
    if (array2$$6 == null) {
      return 0;
    } else {
      return -1 | 0;
    }
  } else if (array2$$6 == null) {
    return 1;
  } else {
    let i$$40 = 0;
    let result$$13 = 0;
    const length1 = array1$$6.length | 0;
    const length2 = array2$$6.length | 0;

    if (length1 > length2) {
      return 1;
    } else if (length1 < length2) {
      return -1 | 0;
    } else {
      while (i$$40 < length1 ? result$$13 === 0 : false) {
        result$$13 = comparer$$12(array1$$6[i$$40], array2$$6[i$$40]);
        i$$40 = i$$40 + 1;
      }

      return result$$13 | 0;
    }
  }
}
function equalsWith(comparer$$13, array1$$7, array2$$7) {
  return compareWith(_Util_js__WEBPACK_IMPORTED_MODULE_1__["compare"], array1$$7, array2$$7) === 0;
}
function exactlyOne(array$$103) {
  if (array$$103.length === 1) {
    return array$$103[0];
  } else if (array$$103.length === 0) {
    throw new Error("The input sequence was empty\\nParameter name: array");
  } else {
    throw new Error("Input array too long\\nParameter name: array");
  }
}
function head(array$$104) {
  if (array$$104.length === 0) {
    throw new Error("The input array was empty\\nParameter name: array");
  } else {
    return array$$104[0];
  }
}
function tryHead(array$$105) {
  if (array$$105.length === 0) {
    return undefined;
  } else {
    return Object(_Option_js__WEBPACK_IMPORTED_MODULE_0__["some"])(array$$105[0]);
  }
}
function tail(array$$106) {
  if (array$$106.length === 0) {
    throw new Error("Not enough elements\\nParameter name: array");
  } else {
    void null;
  }

  return array$$106.slice(1);
}
function item(index$$5, array$$108) {
  return array$$108[index$$5];
}
function tryItem(index$$6, array$$109) {
  if (index$$6 < 0 ? true : index$$6 >= array$$109.length) {
    return undefined;
  } else {
    return Object(_Option_js__WEBPACK_IMPORTED_MODULE_0__["some"])(array$$109[index$$6]);
  }
}
function foldBackIndexed(folder$$6, array$$110, state$$10) {
  return array$$110.reduceRight(function (delegateArg0$$3, delegateArg1$$3, delegateArg2$$1) {
    return folder$$6(delegateArg2$$1, delegateArg1$$3, delegateArg0$$3);
  }, state$$10);
}
function foldBack(folder$$8, array$$112, state$$12) {
  return array$$112.reduceRight(function (delegateArg0$$4, delegateArg1$$4) {
    return folder$$8(delegateArg1$$4, delegateArg0$$4);
  }, state$$12);
}
function foldIndexed2(folder$$10, state$$14, array1$$8, array2$$8) {
  let acc$$6 = state$$14;

  if (array1$$8.length !== array2$$8.length) {
    throw new Error("Arrays have different lengths");
  } else {
    void null;
  }

  for (let i$$42 = 0; i$$42 <= array1$$8.length - 1; i$$42++) {
    acc$$6 = folder$$10(i$$42, acc$$6, array1$$8[i$$42], array2$$8[i$$42]);
  }

  return acc$$6;
}
function fold2(folder$$11, state$$15, array1$$9, array2$$9) {
  return foldIndexed2(function (_arg1, acc$$7, x$$21, y$$7) {
    return folder$$11(acc$$7, x$$21, y$$7);
  }, state$$15, array1$$9, array2$$9);
}
function foldBackIndexed2(folder$$12, array1$$10, array2$$10, state$$16) {
  let acc$$8 = state$$16;

  if (array1$$10.length !== array2$$10.length) {
    throw new Error("Arrays had different lengths");
  } else {
    void null;
  }

  const size$$1 = array1$$10.length | 0;

  for (let i$$43 = 1; i$$43 <= size$$1; i$$43++) {
    acc$$8 = folder$$12(i$$43 - 1, array1$$10[size$$1 - i$$43], array2$$10[size$$1 - i$$43], acc$$8);
  }

  return acc$$8;
}
function foldBack2(f$$9, array1$$11, array2$$11, state$$17) {
  return foldBackIndexed2(function (_arg1$$1, x$$22, y$$8, acc$$9) {
    return f$$9(x$$22, y$$8, acc$$9);
  }, array1$$11, array2$$11, state$$17);
}
function reduce(reduction, array$$114) {
  if (array$$114.length === 0) {
    throw new Error("The input array was empty");
  } else {
    void null;
  }

  return array$$114.reduce(reduction);
}
function reduceBack(reduction$$2, array$$116) {
  if (array$$116.length === 0) {
    throw new Error("The input array was empty");
  } else {
    void null;
  }

  return array$$116.reduceRight(reduction$$2);
}
function forAll2(predicate$$29, array1$$12, array2$$12) {
  return fold2(function (acc$$10, x$$23, y$$9) {
    return acc$$10 ? predicate$$29(x$$23, y$$9) : false;
  }, true, array1$$12, array2$$12);
}
function existsOffset($predicate$$30$$281, $array$$118$$282, $index$$7$$283) {
  existsOffset: while (true) {
    const predicate$$30 = $predicate$$30$$281,
          array$$118 = $array$$118$$282,
          index$$7 = $index$$7$$283;

    if (index$$7 === array$$118.length) {
      return false;
    } else if (predicate$$30(array$$118[index$$7])) {
      return true;
    } else {
      $predicate$$30$$281 = predicate$$30;
      $array$$118$$282 = array$$118;
      $index$$7$$283 = index$$7 + 1;
      continue existsOffset;
    }

    break;
  }
}
function exists(predicate$$31, array$$119) {
  return existsOffset(predicate$$31, array$$119, 0);
}
function existsOffset2($predicate$$32$$286, $array1$$13$$287, $array2$$13$$288, $index$$8$$289) {
  existsOffset2: while (true) {
    const predicate$$32 = $predicate$$32$$286,
          array1$$13 = $array1$$13$$287,
          array2$$13 = $array2$$13$$288,
          index$$8 = $index$$8$$289;

    if (index$$8 === array1$$13.length) {
      return false;
    } else if (predicate$$32(array1$$13[index$$8], array2$$13[index$$8])) {
      return true;
    } else {
      $predicate$$32$$286 = predicate$$32;
      $array1$$13$$287 = array1$$13;
      $array2$$13$$288 = array2$$13;
      $index$$8$$289 = index$$8 + 1;
      continue existsOffset2;
    }

    break;
  }
}
function exists2(predicate$$33, array1$$14, array2$$14) {
  if (array1$$14.length !== array2$$14.length) {
    throw new Error("Arrays had different lengths");
  } else {
    void null;
  }

  return existsOffset2(predicate$$33, array1$$14, array2$$14, 0);
}
function sum(array$$120, adder) {
  let acc$$11 = adder.GetZero();

  for (let i$$44 = 0; i$$44 <= array$$120.length - 1; i$$44++) {
    acc$$11 = adder.Add(acc$$11, array$$120[i$$44]);
  }

  return acc$$11;
}
function sumBy(projection$$6, array$$121, adder$$1) {
  let acc$$12 = adder$$1.GetZero();

  for (let i$$45 = 0; i$$45 <= array$$121.length - 1; i$$45++) {
    acc$$12 = adder$$1.Add(acc$$12, projection$$6(array$$121[i$$45]));
  }

  return acc$$12;
}
function maxBy(projection$$7, xs$$12, comparer$$14) {
  return reduce(function (x$$24, y$$10) {
    return comparer$$14.Compare(projection$$7(y$$10), projection$$7(x$$24)) > 0 ? y$$10 : x$$24;
  }, xs$$12);
}
function max(xs$$13, comparer$$15) {
  return reduce(function (x$$25, y$$11) {
    return comparer$$15.Compare(y$$11, x$$25) > 0 ? y$$11 : x$$25;
  }, xs$$13);
}
function minBy(projection$$8, xs$$14, comparer$$16) {
  return reduce(function (x$$26, y$$12) {
    return comparer$$16.Compare(projection$$8(y$$12), projection$$8(x$$26)) > 0 ? x$$26 : y$$12;
  }, xs$$14);
}
function min(xs$$15, comparer$$17) {
  return reduce(function (x$$27, y$$13) {
    return comparer$$17.Compare(y$$13, x$$27) > 0 ? x$$27 : y$$13;
  }, xs$$15);
}
function average(array$$122, averager) {
  if (array$$122.length === 0) {
    throw new Error("The input array was empty\\nParameter name: array");
  } else {
    void null;
  }

  let total = averager.GetZero();

  for (let i$$46 = 0; i$$46 <= array$$122.length - 1; i$$46++) {
    total = averager.Add(total, array$$122[i$$46]);
  }

  return averager.DivideByInt(total, array$$122.length);
}
function averageBy(projection$$9, array$$123, averager$$1) {
  if (array$$123.length === 0) {
    throw new Error("The input array was empty\\nParameter name: array");
  } else {
    void null;
  }

  let total$$1 = averager$$1.GetZero();

  for (let i$$47 = 0; i$$47 <= array$$123.length - 1; i$$47++) {
    total$$1 = averager$$1.Add(total$$1, projection$$9(array$$123[i$$47]));
  }

  return averager$$1.DivideByInt(total$$1, array$$123.length);
}
function ofSeq(source$$6, cons$$31) {
  return cons$$31.from(source$$6);
}
function ofList(source$$7, cons$$32) {
  return cons$$32.from(source$$7);
}
function toList(source$$8) {
  const len$$17 = source$$8.length | 0;
  let target$$6 = new _Types_js__WEBPACK_IMPORTED_MODULE_4__["List"]();

  for (let i$$48 = len$$17 - 1; i$$48 >= 0; i$$48--) {
    target$$6 = new _Types_js__WEBPACK_IMPORTED_MODULE_4__["List"](source$$8[i$$48], target$$6);
  }

  return target$$6;
}
function windowed(windowSize, source$$9) {
  if (windowSize <= 0) {
    throw new Error("windowSize must be positive");
  } else {
    void null;
  }

  let res$$9;
  const len$$18 = Object(_Util_js__WEBPACK_IMPORTED_MODULE_1__["max"])(_Util_js__WEBPACK_IMPORTED_MODULE_1__["comparePrimitives"], 0, source$$9.length - windowSize) | 0;
  res$$9 = new Array(len$$18);

  for (let i$$49 = windowSize; i$$49 <= source$$9.length; i$$49++) {
    res$$9[i$$49 - windowSize] = source$$9.slice(i$$49 - windowSize, i$$49 - 1 + 1);
  }

  return res$$9;
}
function splitInto(chunks, array$$124) {
  if (chunks < 1) {
    throw new Error("The input must be positive.\\nParameter name: chunks");
  } else {
    void null;
  }

  if (array$$124.length === 0) {
    return [[]];
  } else {
    const result$$14 = [];
    const chunks$$1 = Object(_Util_js__WEBPACK_IMPORTED_MODULE_1__["min"])(_Util_js__WEBPACK_IMPORTED_MODULE_1__["comparePrimitives"], chunks, array$$124.length) | 0;
    const minChunkSize = ~~(array$$124.length / chunks$$1) | 0;
    const chunksWithExtraItem = array$$124.length % chunks$$1 | 0;

    for (let i$$50 = 0; i$$50 <= chunks$$1 - 1; i$$50++) {
      const chunkSize$$1 = (i$$50 < chunksWithExtraItem ? minChunkSize + 1 : minChunkSize) | 0;
      const start$$11 = i$$50 * minChunkSize + Object(_Util_js__WEBPACK_IMPORTED_MODULE_1__["min"])(_Util_js__WEBPACK_IMPORTED_MODULE_1__["comparePrimitives"], chunksWithExtraItem, i$$50) | 0;
      const slice$$1 = array$$124.slice(start$$11, start$$11 + chunkSize$$1);
      const value$$13 = result$$14.push(slice$$1);
      void value$$13;
    }

    return result$$14;
  }
}
function transpose(arrays$$2, cons$$33) {
  var value$$14;
  const arrays$$3 = Array.isArray(arrays$$2) ? arrays$$2 : Array.from(arrays$$2);
  const len$$20 = arrays$$3.length | 0;

  if (len$$20 === 0) {
    return new Array(0);
  } else {
    const lenInner = arrays$$3[0].length | 0;

    if (value$$14 = (forAll(function predicate$$34(a) {
      return a.length === lenInner;
    }, arrays$$3)), (!value$$14)) {
      throw new Error("Arrays had different lengths");
    } else {
      void null;
    }

    const result$$15 = new Array(lenInner);

    for (let i$$51 = 0; i$$51 <= lenInner - 1; i$$51++) {
      result$$15[i$$51] = new cons$$33(len$$20);

      for (let j$$2 = 0; j$$2 <= len$$20 - 1; j$$2++) {
        result$$15[i$$51][j$$2] = arrays$$3[j$$2][i$$51];
      }
    }

    return result$$15;
  }
}

/***/ }),

/***/ "./.fable/fable-library.2.13.0/Date.js":
/*!*********************************************!*\
  !*** ./.fable/fable-library.2.13.0/Date.js ***!
  \*********************************************/
/*! exports provided: offsetRegex, dateOffsetToString, dateToHalfUTCString, toString, DateTime, fromTicks, fromDateTimeOffset, getTicks, minValue, maxValue, parseRaw, parse, tryParse, create, now, utcNow, today, isLeapYear, daysInMonth, toUniversalTime, toLocalTime, specifyKind, timeOfDay, date, day, hour, millisecond, minute, month, second, year, dayOfWeek, dayOfYear, add, addDays, addHours, addMinutes, addSeconds, addMilliseconds, addYears, addMonths, subtract, toLongDateString, toShortDateString, toLongTimeString, toShortTimeString, equals, compare, compareTo, op_Addition, op_Subtraction, isDaylightSavingTime, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offsetRegex", function() { return offsetRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateOffsetToString", function() { return dateOffsetToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateToHalfUTCString", function() { return dateToHalfUTCString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return toString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTime", function() { return DateTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromTicks", function() { return fromTicks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromDateTimeOffset", function() { return fromDateTimeOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTicks", function() { return getTicks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minValue", function() { return minValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxValue", function() { return maxValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseRaw", function() { return parseRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryParse", function() { return tryParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcNow", function() { return utcNow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "today", function() { return today; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLeapYear", function() { return isLeapYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "daysInMonth", function() { return daysInMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUniversalTime", function() { return toUniversalTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toLocalTime", function() { return toLocalTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "specifyKind", function() { return specifyKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeOfDay", function() { return timeOfDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "date", function() { return date; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "day", function() { return day; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hour", function() { return hour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "millisecond", function() { return millisecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minute", function() { return minute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "month", function() { return month; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "second", function() { return second; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "year", function() { return year; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dayOfWeek", function() { return dayOfWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dayOfYear", function() { return dayOfYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDays", function() { return addDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addHours", function() { return addHours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMinutes", function() { return addMinutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSeconds", function() { return addSeconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMilliseconds", function() { return addMilliseconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addYears", function() { return addYears; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMonths", function() { return addMonths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toLongDateString", function() { return toLongDateString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toShortDateString", function() { return toShortDateString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toLongTimeString", function() { return toLongTimeString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toShortTimeString", function() { return toShortTimeString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareTo", function() { return compareTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_Addition", function() { return op_Addition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_Subtraction", function() { return op_Subtraction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDaylightSavingTime", function() { return isDaylightSavingTime; });
/* harmony import */ var _Long__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Long */ "./.fable/fable-library.2.13.0/Long.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Util */ "./.fable/fable-library.2.13.0/Util.js");
/**
 * DateTimeOffset functions.
 *
 * Note: Date instances are always DateObjects in local
 * timezone (because JS dates are all kinds of messed up).
 * A local date returns UTC epoc when `.getTime()` is called.
 *
 * Basically; invariant: date.getTime() always return UTC time.
 */


const offsetRegex = /(?:Z|[+-](\d+):?([0-5]?\d)?)\s*$/;
function dateOffsetToString(offset) {
    const isMinus = offset < 0;
    offset = Math.abs(offset);
    const hours = ~~(offset / 3600000);
    const minutes = (offset % 3600000) / 60000;
    return (isMinus ? "-" : "+") +
        Object(_Util__WEBPACK_IMPORTED_MODULE_1__["padWithZeros"])(hours, 2) + ":" +
        Object(_Util__WEBPACK_IMPORTED_MODULE_1__["padWithZeros"])(minutes, 2);
}
function dateToHalfUTCString(date, half) {
    const str = date.toISOString();
    return half === "first"
        ? str.substring(0, str.indexOf("T"))
        : str.substring(str.indexOf("T") + 1, str.length - 1);
}
function dateToISOString(d, utc) {
    if (utc) {
        return d.toISOString();
    }
    else {
        // JS Date is always local
        const printOffset = d.kind == null ? true : d.kind === 2 /* Local */;
        return Object(_Util__WEBPACK_IMPORTED_MODULE_1__["padWithZeros"])(d.getFullYear(), 4) + "-" +
            Object(_Util__WEBPACK_IMPORTED_MODULE_1__["padWithZeros"])(d.getMonth() + 1, 2) + "-" +
            Object(_Util__WEBPACK_IMPORTED_MODULE_1__["padWithZeros"])(d.getDate(), 2) + "T" +
            Object(_Util__WEBPACK_IMPORTED_MODULE_1__["padWithZeros"])(d.getHours(), 2) + ":" +
            Object(_Util__WEBPACK_IMPORTED_MODULE_1__["padWithZeros"])(d.getMinutes(), 2) + ":" +
            Object(_Util__WEBPACK_IMPORTED_MODULE_1__["padWithZeros"])(d.getSeconds(), 2) + "." +
            Object(_Util__WEBPACK_IMPORTED_MODULE_1__["padWithZeros"])(d.getMilliseconds(), 3) +
            (printOffset ? dateOffsetToString(d.getTimezoneOffset() * -60000) : "");
    }
}
function dateToISOStringWithOffset(dateWithOffset, offset) {
    const str = dateWithOffset.toISOString();
    return str.substring(0, str.length - 1) + dateOffsetToString(offset);
}
function dateToStringWithCustomFormat(date, format, utc) {
    return format.replace(/(\w)\1*/g, (match) => {
        let rep = Number.NaN;
        switch (match.substring(0, 1)) {
            case "y":
                const y = utc ? date.getUTCFullYear() : date.getFullYear();
                rep = match.length < 4 ? y % 100 : y;
                break;
            case "M":
                rep = (utc ? date.getUTCMonth() : date.getMonth()) + 1;
                break;
            case "d":
                rep = utc ? date.getUTCDate() : date.getDate();
                break;
            case "H":
                rep = utc ? date.getUTCHours() : date.getHours();
                break;
            case "h":
                const h = utc ? date.getUTCHours() : date.getHours();
                rep = h > 12 ? h % 12 : h;
                break;
            case "m":
                rep = utc ? date.getUTCMinutes() : date.getMinutes();
                break;
            case "s":
                rep = utc ? date.getUTCSeconds() : date.getSeconds();
                break;
            case "f":
                rep = utc ? date.getUTCMilliseconds() : date.getMilliseconds();
                break;
        }
        if (Number.isNaN(rep)) {
            return match;
        }
        else {
            return (rep < 10 && match.length > 1) ? "0" + rep : "" + rep;
        }
    });
}
function dateToStringWithOffset(date, format) {
    var _a, _b, _c;
    const d = new Date(date.getTime() + ((_a = date.offset) !== null && _a !== void 0 ? _a : 0));
    if (typeof format !== "string") {
        return d.toISOString().replace(/\.\d+/, "").replace(/[A-Z]|\.\d+/g, " ") + dateOffsetToString(((_b = date.offset) !== null && _b !== void 0 ? _b : 0));
    }
    else if (format.length === 1) {
        switch (format) {
            case "D":
            case "d": return dateToHalfUTCString(d, "first");
            case "T":
            case "t": return dateToHalfUTCString(d, "second");
            case "O":
            case "o": return dateToISOStringWithOffset(d, ((_c = date.offset) !== null && _c !== void 0 ? _c : 0));
            default: throw new Error("Unrecognized Date print format");
        }
    }
    else {
        return dateToStringWithCustomFormat(d, format, true);
    }
}
function dateToStringWithKind(date, format) {
    const utc = date.kind === 1 /* UTC */;
    if (typeof format !== "string") {
        return utc ? date.toUTCString() : date.toLocaleString();
    }
    else if (format.length === 1) {
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
    }
    else {
        return dateToStringWithCustomFormat(date, format, utc);
    }
}
function toString(date, format, _provider) {
    return date.offset != null
        ? dateToStringWithOffset(date, format)
        : dateToStringWithKind(date, format);
}
function DateTime(value, kind) {
    const d = new Date(value);
    d.kind = (kind == null ? 0 /* Unspecified */ : kind) | 0;
    return d;
}
function fromTicks(ticks, kind) {
    ticks = Object(_Long__WEBPACK_IMPORTED_MODULE_0__["fromValue"])(ticks);
    kind = kind != null ? kind : 0 /* Unspecified */;
    let date = DateTime(Object(_Long__WEBPACK_IMPORTED_MODULE_0__["ticksToUnixEpochMilliseconds"])(ticks), kind);
    // Ticks are local to offset (in this case, either UTC or Local/Unknown).
    // If kind is anything but UTC, that means that the tick number was not
    // in utc, thus getTime() cannot return UTC, and needs to be shifted.
    if (kind !== 1 /* UTC */) {
        date = DateTime(date.getTime() - Object(_Util__WEBPACK_IMPORTED_MODULE_1__["dateOffset"])(date), kind);
    }
    return date;
}
function fromDateTimeOffset(date, kind) {
    var _a;
    switch (kind) {
        case 1 /* UTC */: return DateTime(date.getTime(), 1 /* UTC */);
        case 2 /* Local */: return DateTime(date.getTime(), 2 /* Local */);
        default:
            const d = DateTime(date.getTime() + ((_a = date.offset) !== null && _a !== void 0 ? _a : 0), kind);
            return DateTime(d.getTime() - Object(_Util__WEBPACK_IMPORTED_MODULE_1__["dateOffset"])(d), kind);
    }
}
function getTicks(date) {
    return Object(_Long__WEBPACK_IMPORTED_MODULE_0__["unixEpochMillisecondsToTicks"])(date.getTime(), Object(_Util__WEBPACK_IMPORTED_MODULE_1__["dateOffset"])(date));
}
function minValue() {
    // This is "0001-01-01T00:00:00.000Z", actual JS min value is -8640000000000000
    return DateTime(-62135596800000, 0 /* Unspecified */);
}
function maxValue() {
    // This is "9999-12-31T23:59:59.999Z", actual JS max value is 8640000000000000
    return DateTime(253402300799999, 0 /* Unspecified */);
}
function parseRaw(input) {
    if (input === null) {
        throw new Error("Value cannot be null when parsing DateTime");
    }
    if (input.trim() === "") {
        throw new Error("An empty string is not recognized as a valid DateTime");
    }
    let date = new Date(input);
    if (isNaN(date.getTime())) {
        // Try to check strings JS Date cannot parse (see #1045, #1422)
        // tslint:disable-next-line:max-line-length
        const m = /^\s*(\d+[^\w\s:]\d+[^\w\s:]\d+)?\s*(\d+:\d+(?::\d+(?:\.\d+)?)?)?\s*([AaPp][Mm])?\s*([+-]\d+(?::\d+)?)?\s*$/.exec(input);
        if (m != null) {
            let baseDate;
            let timeInSeconds = 0;
            if (m[2] != null) {
                const timeParts = m[2].split(":");
                timeInSeconds =
                    parseInt(timeParts[0], 10) * 3600 +
                        parseInt(timeParts[1] || "0", 10) * 60 +
                        parseFloat(timeParts[2] || "0");
                if (m[3] != null && m[3].toUpperCase() === "PM") {
                    timeInSeconds += 720;
                }
            }
            if (m[4] != null) { // There's an offset, parse as UTC
                if (m[1] != null) {
                    baseDate = new Date(m[1] + " UTC");
                }
                else {
                    const d = new Date();
                    baseDate = new Date(d.getUTCFullYear() + "/" + (d.getUTCMonth() + 1) + "/" + d.getUTCDate());
                }
                const offsetParts = m[4].substr(1).split(":");
                let offsetInMinutes = parseInt(offsetParts[0], 10) * 60 + parseInt(offsetParts[1] || "0", 10);
                if (m[4][0] === "+") {
                    offsetInMinutes *= -1;
                }
                timeInSeconds += offsetInMinutes * 60;
            }
            else {
                if (m[1] != null) {
                    baseDate = new Date(m[1]);
                }
                else {
                    const d = new Date();
                    baseDate = new Date(d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate());
                }
            }
            date = new Date(baseDate.getTime() + timeInSeconds * 1000);
            // correct for daylight savings time
            date = new Date(date.getTime() + (date.getTimezoneOffset() - baseDate.getTimezoneOffset()) * 60000);
        }
        else {
            throw new Error("The string is not a valid Date.");
        }
    }
    return date;
}
function parse(str, detectUTC = false) {
    const date = parseRaw(str);
    const offset = offsetRegex.exec(str);
    // .NET always parses DateTime as Local if there's offset info (even "Z")
    // Newtonsoft.Json uses UTC if the offset is "Z"
    const kind = offset != null
        ? (detectUTC && offset[0] === "Z" ? 1 /* UTC */ : 2 /* Local */)
        : 0 /* Unspecified */;
    return DateTime(date.getTime(), kind);
}
function tryParse(v, _refValue) {
    try {
        return [true, parse(v)];
    }
    catch (_err) {
        return [false, minValue()];
    }
}
function create(year, month, day, h = 0, m = 0, s = 0, ms = 0, kind) {
    const dateValue = kind === 1 /* UTC */
        ? Date.UTC(year, month - 1, day, h, m, s, ms)
        : new Date(year, month - 1, day, h, m, s, ms).getTime();
    if (isNaN(dateValue)) {
        throw new Error("The parameters describe an unrepresentable Date.");
    }
    const date = DateTime(dateValue, kind);
    if (year <= 99) {
        date.setFullYear(year, month - 1, day);
    }
    return date;
}
function now() {
    return DateTime(Date.now(), 2 /* Local */);
}
function utcNow() {
    return DateTime(Date.now(), 1 /* UTC */);
}
function today() {
    return date(now());
}
function isLeapYear(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
function daysInMonth(year, month) {
    return month === 2
        ? (isLeapYear(year) ? 29 : 28)
        : (month >= 8 ? (month % 2 === 0 ? 31 : 30) : (month % 2 === 0 ? 30 : 31));
}
function toUniversalTime(date) {
    return date.kind === 1 /* UTC */ ? date : DateTime(date.getTime(), 1 /* UTC */);
}
function toLocalTime(date) {
    return date.kind === 2 /* Local */ ? date : DateTime(date.getTime(), 2 /* Local */);
}
function specifyKind(d, kind) {
    return create(year(d), month(d), day(d), hour(d), minute(d), second(d), millisecond(d), kind);
}
function timeOfDay(d) {
    return hour(d) * 3600000
        + minute(d) * 60000
        + second(d) * 1000
        + millisecond(d);
}
function date(d) {
    return create(year(d), month(d), day(d), 0, 0, 0, 0, d.kind);
}
function day(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCDate() : d.getDate();
}
function hour(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCHours() : d.getHours();
}
function millisecond(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCMilliseconds() : d.getMilliseconds();
}
function minute(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCMinutes() : d.getMinutes();
}
function month(d) {
    return (d.kind === 1 /* UTC */ ? d.getUTCMonth() : d.getMonth()) + 1;
}
function second(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCSeconds() : d.getSeconds();
}
function year(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCFullYear() : d.getFullYear();
}
function dayOfWeek(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCDay() : d.getDay();
}
function dayOfYear(d) {
    const _year = year(d);
    const _month = month(d);
    let _day = day(d);
    for (let i = 1; i < _month; i++) {
        _day += daysInMonth(_year, i);
    }
    return _day;
}
function add(d, ts) {
    const newDate = DateTime(d.getTime() + ts, d.kind);
    if (d.kind === 2 /* Local */) {
        const oldTzOffset = d.getTimezoneOffset();
        const newTzOffset = newDate.getTimezoneOffset();
        return oldTzOffset !== newTzOffset
            ? DateTime(newDate.getTime() + (newTzOffset - oldTzOffset) * 60000, d.kind)
            : newDate;
    }
    else {
        return newDate;
    }
}
function addDays(d, v) {
    return add(d, v * 86400000);
}
function addHours(d, v) {
    return add(d, v * 3600000);
}
function addMinutes(d, v) {
    return add(d, v * 60000);
}
function addSeconds(d, v) {
    return add(d, v * 1000);
}
function addMilliseconds(d, v) {
    return add(d, v);
}
function addYears(d, v) {
    const newMonth = month(d);
    const newYear = year(d) + v;
    const _daysInMonth = daysInMonth(newYear, newMonth);
    const newDay = Math.min(_daysInMonth, day(d));
    return create(newYear, newMonth, newDay, hour(d), minute(d), second(d), millisecond(d), d.kind);
}
function addMonths(d, v) {
    let newMonth = month(d) + v;
    let newMonth_ = 0;
    let yearOffset = 0;
    if (newMonth > 12) {
        newMonth_ = newMonth % 12;
        yearOffset = Math.floor(newMonth / 12);
        newMonth = newMonth_;
    }
    else if (newMonth < 1) {
        newMonth_ = 12 + newMonth % 12;
        yearOffset = Math.floor(newMonth / 12) + (newMonth_ === 12 ? -1 : 0);
        newMonth = newMonth_;
    }
    const newYear = year(d) + yearOffset;
    const _daysInMonth = daysInMonth(newYear, newMonth);
    const newDay = Math.min(_daysInMonth, day(d));
    return create(newYear, newMonth, newDay, hour(d), minute(d), second(d), millisecond(d), d.kind);
}
function subtract(d, that) {
    return typeof that === "number"
        ? add(d, -that)
        : d.getTime() - that.getTime();
}
function toLongDateString(d) {
    return d.toDateString();
}
function toShortDateString(d) {
    return d.toLocaleDateString();
}
function toLongTimeString(d) {
    return d.toLocaleTimeString();
}
function toShortTimeString(d) {
    return d.toLocaleTimeString().replace(/:\d\d(?!:)/, "");
}
function equals(d1, d2) {
    return d1.getTime() === d2.getTime();
}
const compare = _Util__WEBPACK_IMPORTED_MODULE_1__["compareDates"];
const compareTo = _Util__WEBPACK_IMPORTED_MODULE_1__["compareDates"];
function op_Addition(x, y) {
    return add(x, y);
}
function op_Subtraction(x, y) {
    return subtract(x, y);
}
function isDaylightSavingTime(x) {
    const jan = new Date(x.getFullYear(), 0, 1);
    const jul = new Date(x.getFullYear(), 6, 1);
    return isDST(jan.getTimezoneOffset(), jul.getTimezoneOffset(), x.getTimezoneOffset());
}
function isDST(janOffset, julOffset, tOffset) {
    return Math.min(janOffset, julOffset) === tOffset;
}
/* harmony default export */ __webpack_exports__["default"] = (DateTime);
//# sourceMappingURL=Date.js.map

/***/ }),

/***/ "./.fable/fable-library.2.13.0/Decimal.js":
/*!************************************************!*\
  !*** ./.fable/fable-library.2.13.0/Decimal.js ***!
  \************************************************/
/*! exports provided: default, get_Zero, get_One, get_MinusOne, get_MaxValue, get_MinValue, compare, equals, abs, round, truncate, ceiling, floor, pow, sqrt, op_Addition, op_Subtraction, op_Multiply, op_Division, op_Modulus, op_UnaryNegation, add, subtract, multiply, divide, remainder, negate, toString, tryParse, parse, toNumber, fromIntArray, fromInts, fromParts, getBits, makeRangeStepFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_Zero", function() { return get_Zero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_One", function() { return get_One; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_MinusOne", function() { return get_MinusOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_MaxValue", function() { return get_MaxValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_MinValue", function() { return get_MinValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abs", function() { return abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "truncate", function() { return truncate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceiling", function() { return ceiling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor", function() { return floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pow", function() { return pow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrt", function() { return sqrt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_Addition", function() { return op_Addition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_Subtraction", function() { return op_Subtraction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_Multiply", function() { return op_Multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_Division", function() { return op_Division; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_Modulus", function() { return op_Modulus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_UnaryNegation", function() { return op_UnaryNegation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return divide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remainder", function() { return remainder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return negate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return toString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryParse", function() { return tryParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNumber", function() { return toNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromIntArray", function() { return fromIntArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromInts", function() { return fromInts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromParts", function() { return fromParts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBits", function() { return getBits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeRangeStepFunction", function() { return makeRangeStepFunction; });
/* harmony import */ var _lib_big__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/big */ "./.fable/fable-library.2.13.0/lib/big.js");

/* harmony default export */ __webpack_exports__["default"] = (_lib_big__WEBPACK_IMPORTED_MODULE_0__["default"]);
const get_Zero = new _lib_big__WEBPACK_IMPORTED_MODULE_0__["default"](0);
const get_One = new _lib_big__WEBPACK_IMPORTED_MODULE_0__["default"](1);
const get_MinusOne = new _lib_big__WEBPACK_IMPORTED_MODULE_0__["default"](-1);
const get_MaxValue = new _lib_big__WEBPACK_IMPORTED_MODULE_0__["default"]("79228162514264337593543950335");
const get_MinValue = new _lib_big__WEBPACK_IMPORTED_MODULE_0__["default"]("-79228162514264337593543950335");
function compare(x, y) {
    return x.cmp(y);
}
function equals(x, y) {
    return !x.cmp(y);
}
function abs(x) {
    return x.abs();
}
function round(x, digits = 0) {
    return x.round(digits, 2 /* ROUND_HALF_EVEN */);
}
function truncate(x) {
    return x.round(0, 0 /* ROUND_DOWN */);
}
function ceiling(x) {
    return x.round(0, x.cmp(0) >= 0 ? 3 /* ROUND_UP */ : 0 /* ROUND_DOWN */);
}
function floor(x) {
    return x.round(0, x.cmp(0) >= 0 ? 0 /* ROUND_DOWN */ : 3 /* ROUND_UP */);
}
function pow(x, n) {
    return x.pow(n);
}
function sqrt(x) {
    return x.sqrt();
}
function op_Addition(x, y) {
    return x.add(y);
}
function op_Subtraction(x, y) {
    return x.sub(y);
}
function op_Multiply(x, y) {
    return x.mul(y);
}
function op_Division(x, y) {
    return x.div(y);
}
function op_Modulus(x, y) {
    return x.mod(y);
}
function op_UnaryNegation(x) {
    const x2 = new _lib_big__WEBPACK_IMPORTED_MODULE_0__["default"](x);
    x2.s = -x2.s || 0;
    return x2;
}
const add = op_Addition;
const subtract = op_Subtraction;
const multiply = op_Multiply;
const divide = op_Division;
const remainder = op_Modulus;
const negate = op_UnaryNegation;
function toString(x) {
    return x.toString();
}
function tryParse(str) {
    try {
        return [true, new _lib_big__WEBPACK_IMPORTED_MODULE_0__["default"](str.trim())];
    }
    catch (_a) {
        return [false, get_Zero];
    }
}
function parse(str) {
    const [ok, value] = tryParse(str);
    if (ok) {
        return value;
    }
    else {
        throw new Error("Input string was not in a correct format.");
    }
}
function toNumber(x) {
    return +x;
}
function decimalToHex(dec, bitSize) {
    const hex = new Uint8Array(bitSize / 4 | 0);
    let hexCount = 1;
    for (let d = 0; d < dec.length; d++) {
        let value = dec[d];
        for (let i = 0; i < hexCount; i++) {
            const digit = hex[i] * 10 + value | 0;
            hex[i] = digit & 0xF;
            value = digit >> 4;
        }
        if (value !== 0) {
            hex[hexCount++] = value;
        }
    }
    return hex.slice(0, hexCount); // digits in reverse order
}
function hexToDecimal(hex, bitSize) {
    const dec = new Uint8Array(bitSize * 301 / 1000 + 1 | 0);
    let decCount = 1;
    for (let d = hex.length - 1; d >= 0; d--) {
        let carry = hex[d];
        for (let i = 0; i < decCount; i++) {
            const val = dec[i] * 16 + carry | 0;
            dec[i] = (val % 10) | 0;
            carry = (val / 10) | 0;
        }
        while (carry > 0) {
            dec[decCount++] = (carry % 10) | 0;
            carry = (carry / 10) | 0;
        }
    }
    return dec.slice(0, decCount); // digits in reverse order
}
function setInt32Bits(hexDigits, bits, offset) {
    for (let i = 0; i < 8; i++) {
        hexDigits[offset + i] = (bits >> (i * 4)) & 0xF;
    }
}
function getInt32Bits(hexDigits, offset) {
    let bits = 0;
    for (let i = 0; i < 8; i++) {
        bits = bits | (hexDigits[offset + i] << (i * 4));
    }
    return bits;
}
function fromIntArray(bits) {
    return fromInts(bits[0], bits[1], bits[2], bits[3]);
}
function fromInts(low, mid, high, signExp) {
    const isNegative = signExp < 0;
    const scale = (signExp >> 16) & 0x7F;
    return fromParts(low, mid, high, isNegative, scale);
}
function fromParts(low, mid, high, isNegative, scale) {
    const bitSize = 96;
    const hexDigits = new Uint8Array(bitSize / 4);
    setInt32Bits(hexDigits, low, 0);
    setInt32Bits(hexDigits, mid, 8);
    setInt32Bits(hexDigits, high, 16);
    const decDigits = hexToDecimal(hexDigits, bitSize);
    scale = scale & 0x7F;
    const big = new _lib_big__WEBPACK_IMPORTED_MODULE_0__["default"](0);
    big.c = Array.from(decDigits.reverse());
    big.e = decDigits.length - scale - 1;
    big.s = isNegative ? -1 : 1;
    const d = new _lib_big__WEBPACK_IMPORTED_MODULE_0__["default"](big);
    return d;
}
function getBits(d) {
    const bitSize = 96;
    const decDigits = Uint8Array.from(d.c);
    const hexDigits = decimalToHex(decDigits, bitSize);
    const low = getInt32Bits(hexDigits, 0);
    const mid = getInt32Bits(hexDigits, 8);
    const high = getInt32Bits(hexDigits, 16);
    const decStr = d.toString();
    const dotPos = decStr.indexOf(".");
    const scale = dotPos < 0 ? 0 : decStr.length - dotPos - 1;
    const signExp = ((scale & 0x7F) << 16) | (d.s < 0 ? 0x80000000 : 0);
    return [low, mid, high, signExp];
}
function makeRangeStepFunction(step, last) {
    const stepComparedWithZero = step.cmp(get_Zero);
    if (stepComparedWithZero === 0) {
        throw new Error("The step of a range cannot be zero");
    }
    const stepGreaterThanZero = stepComparedWithZero > 0;
    return (x) => {
        const comparedWithLast = x.cmp(last);
        if ((stepGreaterThanZero && comparedWithLast <= 0)
            || (!stepGreaterThanZero && comparedWithLast >= 0)) {
            return [x, op_Addition(x, step)];
        }
        else {
            return undefined;
        }
    };
}
//# sourceMappingURL=Decimal.js.map

/***/ }),

/***/ "./.fable/fable-library.2.13.0/Int32.js":
/*!**********************************************!*\
  !*** ./.fable/fable-library.2.13.0/Int32.js ***!
  \**********************************************/
/*! exports provided: NumberStyles, isValid, parse, tryParse, op_UnaryNegation_Int8, op_UnaryNegation_Int16, op_UnaryNegation_Int32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberStyles", function() { return NumberStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValid", function() { return isValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryParse", function() { return tryParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_UnaryNegation_Int8", function() { return op_UnaryNegation_Int8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_UnaryNegation_Int16", function() { return op_UnaryNegation_Int16; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_UnaryNegation_Int32", function() { return op_UnaryNegation_Int32; });
// export type decimal = Decimal;
var NumberStyles;
(function (NumberStyles) {
    // None = 0x00000000,
    // AllowLeadingWhite = 0x00000001,
    // AllowTrailingWhite = 0x00000002,
    // AllowLeadingSign = 0x00000004,
    // AllowTrailingSign = 0x00000008,
    // AllowParentheses = 0x00000010,
    // AllowDecimalPoint = 0x00000020,
    // AllowThousands = 0x00000040,
    // AllowExponent = 0x00000080,
    // AllowCurrencySymbol = 0x00000100,
    NumberStyles[NumberStyles["AllowHexSpecifier"] = 512] = "AllowHexSpecifier";
    // Integer = AllowLeadingWhite | AllowTrailingWhite | AllowLeadingSign,
    // HexNumber = AllowLeadingWhite | AllowTrailingWhite | AllowHexSpecifier,
    // Number = AllowLeadingWhite | AllowTrailingWhite | AllowLeadingSign |
    //          AllowTrailingSign | AllowDecimalPoint | AllowThousands,
    // Float = AllowLeadingWhite | AllowTrailingWhite | AllowLeadingSign |
    //         AllowDecimalPoint | AllowExponent,
    // Currency = AllowLeadingWhite | AllowTrailingWhite | AllowLeadingSign | AllowTrailingSign |
    //            AllowParentheses | AllowDecimalPoint | AllowThousands | AllowCurrencySymbol,
    // Any = AllowLeadingWhite | AllowTrailingWhite | AllowLeadingSign | AllowTrailingSign |
    //       AllowParentheses | AllowDecimalPoint | AllowThousands | AllowCurrencySymbol | AllowExponent,
})(NumberStyles || (NumberStyles = {}));
function validResponse(regexMatch, radix) {
    const [/*all*/ , sign, prefix, digits] = regexMatch;
    return {
        sign: sign || "",
        prefix: prefix || "",
        digits,
        radix,
    };
}
function getRange(unsigned, bitsize) {
    switch (bitsize) {
        case 8: return unsigned ? [0, 255] : [-128, 127];
        case 16: return unsigned ? [0, 65535] : [-32768, 32767];
        case 32: return unsigned ? [0, 4294967295] : [-2147483648, 2147483647];
        default: throw new Error("Invalid bit size.");
    }
}
function getInvalidDigits(radix) {
    switch (radix) {
        case 2: return /[^0-1]/;
        case 8: return /[^0-7]/;
        case 10: return /[^0-9]/;
        case 16: return /[^0-9a-fA-F]/;
        default:
            throw new Error("Invalid Base.");
    }
}
function getRadix(prefix, style) {
    if (style & NumberStyles.AllowHexSpecifier) {
        return 16;
    }
    else {
        switch (prefix) {
            case "0b":
            case "0B": return 2;
            case "0o":
            case "0O": return 8;
            case "0x":
            case "0X": return 16;
            default: return 10;
        }
    }
}
function isValid(str, style, radix) {
    const integerRegex = /^\s*([\+\-])?(0[xXoObB])?([0-9a-fA-F]+)\s*$/;
    const res = integerRegex.exec(str.replace(/_/g, ""));
    if (res != null) {
        const [/*all*/ , /*sign*/ , prefix, digits] = res;
        radix = radix || getRadix(prefix, style);
        const invalidDigits = getInvalidDigits(radix);
        if (!invalidDigits.test(digits)) {
            return validResponse(res, radix);
        }
    }
    return null;
}
function parse(str, style, unsigned, bitsize, radix) {
    const res = isValid(str, style, radix);
    if (res != null) {
        let v = Number.parseInt(res.sign + res.digits, res.radix);
        if (!Number.isNaN(v)) {
            const [umin, umax] = getRange(true, bitsize);
            if (!unsigned && res.radix !== 10 && v >= umin && v <= umax) {
                v = v << (32 - bitsize) >> (32 - bitsize);
            }
            const [min, max] = getRange(unsigned, bitsize);
            if (v >= min && v <= max) {
                return v;
            }
        }
    }
    throw new Error("Input string was not in a correct format.");
}
function tryParse(str, style, unsigned, bitsize) {
    try {
        const v = parse(str, style, unsigned, bitsize);
        return [true, v];
    }
    catch (_a) {
        // supress error
    }
    return [false, 0];
}
function op_UnaryNegation_Int8(x) {
    return x === -128 ? x : -x;
}
function op_UnaryNegation_Int16(x) {
    return x === -32768 ? x : -x;
}
function op_UnaryNegation_Int32(x) {
    return x === -2147483648 ? x : -x;
}
//# sourceMappingURL=Int32.js.map

/***/ }),

/***/ "./.fable/fable-library.2.13.0/List.js":
/*!*********************************************!*\
  !*** ./.fable/fable-library.2.13.0/List.js ***!
  \*********************************************/
/*! exports provided: head, tryHead, tail, last, tryLast, compareWith, foldIndexedAux, foldIndexed, fold, reverse, foldBack, toSeq, ofSeq, concat, foldIndexed2Aux, foldIndexed2, fold2, foldBack2, unfold, foldIndexed3Aux, foldIndexed3, fold3, scan, scanBack, length, append, collect, map, mapIndexed, indexed, map2, mapIndexed2, map3, mapIndexed3, mapFold, mapFoldBack, iterate, iterate2, iterateIndexed, iterateIndexed2, ofArray, empty, isEmpty, tryPickIndexedAux, tryPickIndexed, tryPick, pick, tryFindIndexed, tryFind, findIndexed, find, findBack, tryFindBack, tryFindIndex, tryFindIndexBack, findIndex, findIndexBack, item, tryItem, filter, partition, choose, contains, except, initialize, replicate, reduce, reduceBack, forAll, forAll2, exists, exists2, unzip, unzip3, zip, zip3, sort, sortBy, sortDescending, sortByDescending, sortWith, sum, sumBy, maxBy, max, minBy, min, average, averageBy, permute, chunkBySize, skip, skipWhile, takeSplitAux, take, takeWhile, truncate, splitAt, outOfRange, slice, distinctBy, distinct, exactlyOne, groupBy, countBy, where, pairwise, windowed, splitInto, transpose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "head", function() { return head; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryHead", function() { return tryHead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tail", function() { return tail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "last", function() { return last; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryLast", function() { return tryLast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareWith", function() { return compareWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foldIndexedAux", function() { return foldIndexedAux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foldIndexed", function() { return foldIndexed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fold", function() { return fold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverse", function() { return reverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foldBack", function() { return foldBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toSeq", function() { return toSeq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ofSeq", function() { return ofSeq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foldIndexed2Aux", function() { return foldIndexed2Aux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foldIndexed2", function() { return foldIndexed2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fold2", function() { return fold2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foldBack2", function() { return foldBack2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unfold", function() { return unfold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foldIndexed3Aux", function() { return foldIndexed3Aux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foldIndexed3", function() { return foldIndexed3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fold3", function() { return fold3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scan", function() { return scan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scanBack", function() { return scanBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collect", function() { return collect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapIndexed", function() { return mapIndexed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexed", function() { return indexed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map2", function() { return map2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapIndexed2", function() { return mapIndexed2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map3", function() { return map3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapIndexed3", function() { return mapIndexed3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapFold", function() { return mapFold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapFoldBack", function() { return mapFoldBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterate", function() { return iterate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterate2", function() { return iterate2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterateIndexed", function() { return iterateIndexed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterateIndexed2", function() { return iterateIndexed2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ofArray", function() { return ofArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryPickIndexedAux", function() { return tryPickIndexedAux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryPickIndexed", function() { return tryPickIndexed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryPick", function() { return tryPick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return pick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryFindIndexed", function() { return tryFindIndexed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryFind", function() { return tryFind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIndexed", function() { return findIndexed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findBack", function() { return findBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryFindBack", function() { return tryFindBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryFindIndex", function() { return tryFindIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryFindIndexBack", function() { return tryFindIndexBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return findIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIndexBack", function() { return findIndexBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "item", function() { return item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryItem", function() { return tryItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return partition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "choose", function() { return choose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return contains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "except", function() { return except; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replicate", function() { return replicate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return reduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduceBack", function() { return reduceBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forAll", function() { return forAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forAll2", function() { return forAll2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exists", function() { return exists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exists2", function() { return exists2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unzip", function() { return unzip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unzip3", function() { return unzip3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return zip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zip3", function() { return zip3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sort", function() { return sort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortBy", function() { return sortBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortDescending", function() { return sortDescending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByDescending", function() { return sortByDescending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortWith", function() { return sortWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return sum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sumBy", function() { return sumBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxBy", function() { return maxBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minBy", function() { return minBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "average", function() { return average; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "averageBy", function() { return averageBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "permute", function() { return permute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chunkBySize", function() { return chunkBySize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skip", function() { return skip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skipWhile", function() { return skipWhile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeSplitAux", function() { return takeSplitAux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "take", function() { return take; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeWhile", function() { return takeWhile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "truncate", function() { return truncate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitAt", function() { return splitAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outOfRange", function() { return outOfRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distinctBy", function() { return distinctBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distinct", function() { return distinct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactlyOne", function() { return exactlyOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return groupBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countBy", function() { return countBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "where", function() { return where; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pairwise", function() { return pairwise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowed", function() { return windowed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitInto", function() { return splitInto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return transpose; });
/* harmony import */ var _Option_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Option.js */ "./.fable/fable-library.2.13.0/Option.js");
/* harmony import */ var _Types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Types.js */ "./.fable/fable-library.2.13.0/Types.js");
/* harmony import */ var _Seq_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Seq.js */ "./.fable/fable-library.2.13.0/Seq.js");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Util.js */ "./.fable/fable-library.2.13.0/Util.js");
/* harmony import */ var _Array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Array.js */ "./.fable/fable-library.2.13.0/Array.js");
/* harmony import */ var _Set_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Set.js */ "./.fable/fable-library.2.13.0/Set.js");
/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Map.js */ "./.fable/fable-library.2.13.0/Map.js");








function head(_arg1) {
  if (_arg1.tail != null) {
    return _arg1.head;
  } else {
    throw new Error("List was empty");
  }
}
function tryHead(_arg1$$1) {
  if (_arg1$$1.tail != null) {
    return Object(_Option_js__WEBPACK_IMPORTED_MODULE_0__["some"])(_arg1$$1.head);
  } else {
    return undefined;
  }
}
function tail(_arg1$$2) {
  if (_arg1$$2.tail != null) {
    return _arg1$$2.tail;
  } else {
    throw new Error("List was empty");
  }
}
function last($_arg1$$3$$5) {
  last: while (true) {
    const _arg1$$3 = $_arg1$$3$$5;

    if (_arg1$$3.tail != null) {
      if (_arg1$$3.tail.tail == null) {
        return _arg1$$3.head;
      } else {
        $_arg1$$3$$5 = _arg1$$3.tail;
        continue last;
      }
    } else {
      throw new Error("List was empty");
    }

    break;
  }
}
function tryLast($_arg1$$4$$6) {
  tryLast: while (true) {
    const _arg1$$4 = $_arg1$$4$$6;

    if (_arg1$$4.tail != null) {
      if (_arg1$$4.tail.tail == null) {
        return Object(_Option_js__WEBPACK_IMPORTED_MODULE_0__["some"])(_arg1$$4.head);
      } else {
        $_arg1$$4$$6 = _arg1$$4.tail;
        continue tryLast;
      }
    } else {
      return undefined;
    }

    break;
  }
}
function compareWith(comparer, xs$$3, ys) {
  if (xs$$3 === ys) {
    return 0;
  } else {
    const loop = function loop($xs$$4$$10, $ys$$1$$11) {
      loop: while (true) {
        const xs$$4 = $xs$$4$$10,
              ys$$1 = $ys$$1$$11;

        if (xs$$4.tail != null) {
          if (ys$$1.tail != null) {
            const matchValue$$1 = comparer(xs$$4.head, ys$$1.head) | 0;

            if (matchValue$$1 === 0) {
              $xs$$4$$10 = xs$$4.tail;
              $ys$$1$$11 = ys$$1.tail;
              continue loop;
            } else {
              return matchValue$$1 | 0;
            }
          } else {
            return 1;
          }
        } else if (ys$$1.tail == null) {
          return 0;
        } else {
          return -1 | 0;
        }

        break;
      }
    };

    return loop(xs$$3, ys) | 0;
  }
}
function foldIndexedAux($f$$12, $i$$13, $acc$$14, $_arg1$$5$$15) {
  foldIndexedAux: while (true) {
    const f = $f$$12,
          i = $i$$13,
          acc = $acc$$14,
          _arg1$$5 = $_arg1$$5$$15;

    if (_arg1$$5.tail != null) {
      $f$$12 = f;
      $i$$13 = i + 1;
      $acc$$14 = f(i, acc, _arg1$$5.head);
      $_arg1$$5$$15 = _arg1$$5.tail;
      continue foldIndexedAux;
    } else {
      return acc;
    }

    break;
  }
}
function foldIndexed(f$$1, state, xs$$7) {
  return foldIndexedAux(f$$1, 0, state, xs$$7);
}
function fold($f$$2$$19, $state$$1$$20, $xs$$8$$21) {
  fold: while (true) {
    const f$$2 = $f$$2$$19,
          state$$1 = $state$$1$$20,
          xs$$8 = $xs$$8$$21;

    if (xs$$8.tail != null) {
      $f$$2$$19 = f$$2;
      $state$$1$$20 = f$$2(state$$1, xs$$8.head);
      $xs$$8$$21 = xs$$8.tail;
      continue fold;
    } else {
      return state$$1;
    }

    break;
  }
}
function reverse(xs$$9) {
  return fold(function (acc$$1, x$$6) {
    return new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](x$$6, acc$$1);
  }, new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](), xs$$9);
}
function foldBack(f$$3, xs$$10, state$$2) {
  return fold(function (acc$$2, x$$7) {
    return f$$3(x$$7, acc$$2);
  }, state$$2, reverse(xs$$10));
}
function toSeq(xs$$11) {
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x$$8) {
    return x$$8;
  }, xs$$11);
}
function ofSeq(xs$$12) {
  const xs$$13 = Object(_Seq_js__WEBPACK_IMPORTED_MODULE_2__["fold"])(function (acc$$3, x$$9) {
    return new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](x$$9, acc$$3);
  }, new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](), xs$$12);
  return reverse(xs$$13);
}
function concat(lists) {
  const xs$$15 = Object(_Seq_js__WEBPACK_IMPORTED_MODULE_2__["fold"])(function (state$$3, xs$$14) {
    return fold(function f$$4(acc$$4, x$$10) {
      return new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](x$$10, acc$$4);
    }, state$$3, xs$$14);
  }, new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](), lists);
  return reverse(xs$$15);
}
function foldIndexed2Aux($f$$5$$31, $i$$1$$32, $acc$$5$$33, $bs$$34, $cs$$35) {
  foldIndexed2Aux: while (true) {
    const f$$5 = $f$$5$$31,
          i$$1 = $i$$1$$32,
          acc$$5 = $acc$$5$$33,
          bs = $bs$$34,
          cs = $cs$$35;
    var $target$$36, x$$11, xs$$16, y$$1, ys$$3;

    if (bs.tail != null) {
      if (cs.tail != null) {
        $target$$36 = 1;
        x$$11 = bs.head;
        xs$$16 = bs.tail;
        y$$1 = cs.head;
        ys$$3 = cs.tail;
      } else {
        $target$$36 = 2;
      }
    } else if (cs.tail == null) {
      $target$$36 = 0;
    } else {
      $target$$36 = 2;
    }

    switch ($target$$36) {
      case 0:
        {
          return acc$$5;
        }

      case 1:
        {
          $f$$5$$31 = f$$5;
          $i$$1$$32 = i$$1 + 1;
          $acc$$5$$33 = f$$5(i$$1, acc$$5, x$$11, y$$1);
          $bs$$34 = xs$$16;
          $cs$$35 = ys$$3;
          continue foldIndexed2Aux;
        }

      case 2:
        {
          throw new Error("Lists had different lengths");
        }
    }

    break;
  }
}
function foldIndexed2(f$$6, state$$4, xs$$17, ys$$4) {
  return foldIndexed2Aux(f$$6, 0, state$$4, xs$$17, ys$$4);
}
function fold2(f$$7, state$$5, xs$$18, ys$$5) {
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_2__["fold2"])(f$$7, state$$5, xs$$18, ys$$5);
}
function foldBack2(f$$8, xs$$19, ys$$6, state$$6) {
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_2__["foldBack2"])(f$$8, xs$$19, ys$$6, state$$6);
}
function unfold(f$$9, state$$7) {
  const unfoldInner = function unfoldInner($acc$$6$$51, $state$$8$$52) {
    unfoldInner: while (true) {
      const acc$$6 = $acc$$6$$51,
            state$$8 = $state$$8$$52;
      const matchValue$$3 = f$$9(state$$8);

      if (matchValue$$3 != null) {
        const x$$12 = matchValue$$3[0];
        const state$$9 = matchValue$$3[1];
        $acc$$6$$51 = new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](x$$12, acc$$6);
        $state$$8$$52 = state$$9;
        continue unfoldInner;
      } else {
        return reverse(acc$$6);
      }

      break;
    }
  };

  return unfoldInner(new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](), state$$7);
}
function foldIndexed3Aux($f$$10$$53, $i$$2$$54, $acc$$7$$55, $bs$$1$$56, $cs$$1$$57, $ds$$58) {
  foldIndexed3Aux: while (true) {
    const f$$10 = $f$$10$$53,
          i$$2 = $i$$2$$54,
          acc$$7 = $acc$$7$$55,
          bs$$1 = $bs$$1$$56,
          cs$$1 = $cs$$1$$57,
          ds = $ds$$58;
    var $target$$59, x$$13, xs$$20, y$$2, ys$$7, z, zs;

    if (bs$$1.tail != null) {
      if (cs$$1.tail != null) {
        if (ds.tail != null) {
          $target$$59 = 1;
          x$$13 = bs$$1.head;
          xs$$20 = bs$$1.tail;
          y$$2 = cs$$1.head;
          ys$$7 = cs$$1.tail;
          z = ds.head;
          zs = ds.tail;
        } else {
          $target$$59 = 2;
        }
      } else {
        $target$$59 = 2;
      }
    } else if (cs$$1.tail == null) {
      if (ds.tail == null) {
        $target$$59 = 0;
      } else {
        $target$$59 = 2;
      }
    } else {
      $target$$59 = 2;
    }

    switch ($target$$59) {
      case 0:
        {
          return acc$$7;
        }

      case 1:
        {
          $f$$10$$53 = f$$10;
          $i$$2$$54 = i$$2 + 1;
          $acc$$7$$55 = f$$10(i$$2, acc$$7, x$$13, y$$2, z);
          $bs$$1$$56 = xs$$20;
          $cs$$1$$57 = ys$$7;
          $ds$$58 = zs;
          continue foldIndexed3Aux;
        }

      case 2:
        {
          throw new Error("Lists had different lengths");
        }
    }

    break;
  }
}
function foldIndexed3(f$$11, seed, xs$$21, ys$$8, zs$$1) {
  return foldIndexed3Aux(f$$11, 0, seed, xs$$21, ys$$8, zs$$1);
}
function fold3(f$$12, state$$10, xs$$22, ys$$9, zs$$2) {
  return foldIndexed3(function (_arg1$$6, acc$$8, x$$14, y$$3, z$$1) {
    return f$$12(acc$$8, x$$14, y$$3, z$$1);
  }, state$$10, xs$$22, ys$$9, zs$$2);
}
function scan(f$$13, state$$11, xs$$23) {
  const xs$$24 = Object(_Seq_js__WEBPACK_IMPORTED_MODULE_2__["scan"])(f$$13, state$$11, xs$$23);
  return ofSeq(xs$$24);
}
function scanBack(f$$14, xs$$25, state$$12) {
  const xs$$26 = Object(_Seq_js__WEBPACK_IMPORTED_MODULE_2__["scanBack"])(f$$14, xs$$25, state$$12);
  return ofSeq(xs$$26);
}
function length(xs$$27) {
  return fold(function (acc$$9, _arg1$$7) {
    return acc$$9 + 1;
  }, 0, xs$$27);
}
function append(xs$$28, ys$$10) {
  return fold(function (acc$$10, x$$15) {
    return new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](x$$15, acc$$10);
  }, ys$$10, reverse(xs$$28));
}
function collect(f$$15, xs$$29) {
  const xs$$30 = Object(_Seq_js__WEBPACK_IMPORTED_MODULE_2__["collect"])(f$$15, xs$$29);
  return ofSeq(xs$$30);
}
function map(f$$16, xs$$31) {
  const xs$$32 = fold(function (acc$$11, x$$16) {
    return new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](f$$16(x$$16), acc$$11);
  }, new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](), xs$$31);
  return reverse(xs$$32);
}
function mapIndexed(f$$17, xs$$33) {
  const xs$$34 = foldIndexed(function (i$$3, acc$$12, x$$17) {
    return new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](f$$17(i$$3, x$$17), acc$$12);
  }, new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](), xs$$33);
  return reverse(xs$$34);
}
function indexed(xs$$35) {
  return mapIndexed(function (i$$4, x$$18) {
    return [i$$4, x$$18];
  }, xs$$35);
}
function map2(f$$18, xs$$36, ys$$11) {
  const xs$$37 = fold2(function (acc$$13, x$$19, y$$4) {
    return new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](f$$18(x$$19, y$$4), acc$$13);
  }, new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](), xs$$36, ys$$11);
  return reverse(xs$$37);
}
function mapIndexed2(f$$19, xs$$38, ys$$12) {
  const xs$$39 = foldIndexed2(function (i$$5, acc$$14, x$$20, y$$5) {
    return new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](f$$19(i$$5, x$$20, y$$5), acc$$14);
  }, new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](), xs$$38, ys$$12);
  return reverse(xs$$39);
}
function map3(f$$20, xs$$40, ys$$13, zs$$3) {
  const xs$$41 = fold3(function (acc$$15, x$$21, y$$6, z$$2) {
    return new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](f$$20(x$$21, y$$6, z$$2), acc$$15);
  }, new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](), xs$$40, ys$$13, zs$$3);
  return reverse(xs$$41);
}
function mapIndexed3(f$$21, xs$$42, ys$$14, zs$$4) {
  const xs$$43 = foldIndexed3(function (i$$6, acc$$16, x$$22, y$$7, z$$3) {
    return new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](f$$21(i$$6, x$$22, y$$7, z$$3), acc$$16);
  }, new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](), xs$$42, ys$$14, zs$$4);
  return reverse(xs$$43);
}
function mapFold(f$$22, s, xs$$44) {
  const patternInput$$1 = fold(function foldFn(tupledArg, x$$23) {
    const patternInput = f$$22(tupledArg[1], x$$23);
    return [new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](patternInput[0], tupledArg[0]), patternInput[1]];
  }, [new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](), s], xs$$44);
  return [reverse(patternInput$$1[0]), patternInput$$1[1]];
}
function mapFoldBack(f$$23, xs$$45, s$$2) {
  return mapFold(function (s$$3, v) {
    return f$$23(v, s$$3);
  }, s$$2, reverse(xs$$45));
}
function iterate(f$$24, xs$$46) {
  fold(function (unitVar0, x$$24) {
    f$$24(x$$24);
  }, void null, xs$$46);
}
function iterate2(f$$25, xs$$47, ys$$15) {
  fold2(function (unitVar0$$1, x$$25, y$$8) {
    f$$25(x$$25, y$$8);
  }, void null, xs$$47, ys$$15);
}
function iterateIndexed(f$$26, xs$$48) {
  foldIndexed(function (i$$7, unitVar1, x$$26) {
    f$$26(i$$7, x$$26);
  }, void null, xs$$48);
}
function iterateIndexed2(f$$27, xs$$49, ys$$16) {
  foldIndexed2(function (i$$8, unitVar1$$1, x$$27, y$$9) {
    f$$27(i$$8, x$$27, y$$9);
  }, void null, xs$$49, ys$$16);
}
function ofArray(xs$$50) {
  let res$$1 = new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"]();

  for (let i$$9 = Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["count"])(xs$$50) - 1; i$$9 >= 0; i$$9--) {
    res$$1 = new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](xs$$50[i$$9], res$$1);
  }

  return res$$1;
}
function empty() {
  return new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"]();
}
function isEmpty(_arg1$$8) {
  if (_arg1$$8.tail == null) {
    return true;
  } else {
    return false;
  }
}
function tryPickIndexedAux($f$$28$$120, $i$$10$$121, $_arg1$$9$$122) {
  tryPickIndexedAux: while (true) {
    const f$$28 = $f$$28$$120,
          i$$10 = $i$$10$$121,
          _arg1$$9 = $_arg1$$9$$122;

    if (_arg1$$9.tail != null) {
      const result = f$$28(i$$10, _arg1$$9.head);

      if (result == null) {
        $f$$28$$120 = f$$28;
        $i$$10$$121 = i$$10 + 1;
        $_arg1$$9$$122 = _arg1$$9.tail;
        continue tryPickIndexedAux;
      } else {
        return result;
      }
    } else {
      return undefined;
    }

    break;
  }
}
function tryPickIndexed(f$$29, xs$$52) {
  return tryPickIndexedAux(f$$29, 0, xs$$52);
}
function tryPick(f$$30, xs$$53) {
  return tryPickIndexed(function (_arg1$$10, x$$29) {
    return f$$30(x$$29);
  }, xs$$53);
}
function pick(f$$31, xs$$54) {
  const matchValue$$5 = tryPick(f$$31, xs$$54);

  if (matchValue$$5 != null) {
    const x$$30 = Object(_Option_js__WEBPACK_IMPORTED_MODULE_0__["value"])(matchValue$$5);
    return x$$30;
  } else {
    throw new Error("List did not contain any matching elements");
  }
}
function tryFindIndexed(f$$32, xs$$55) {
  return tryPickIndexed(function (i$$11, x$$31) {
    return f$$32(i$$11, x$$31) ? Object(_Option_js__WEBPACK_IMPORTED_MODULE_0__["some"])(x$$31) : undefined;
  }, xs$$55);
}
function tryFind(f$$33, xs$$56) {
  return tryPickIndexed(function (_arg1$$11, x$$32) {
    return f$$33(x$$32) ? Object(_Option_js__WEBPACK_IMPORTED_MODULE_0__["some"])(x$$32) : undefined;
  }, xs$$56);
}
function findIndexed(f$$34, xs$$57) {
  const matchValue$$6 = tryFindIndexed(f$$34, xs$$57);

  if (matchValue$$6 != null) {
    const x$$33 = Object(_Option_js__WEBPACK_IMPORTED_MODULE_0__["value"])(matchValue$$6);
    return x$$33;
  } else {
    throw new Error("List did not contain any matching elements");
  }
}
function find(f$$35, xs$$58) {
  return findIndexed(function (_arg1$$12, x$$34) {
    return f$$35(x$$34);
  }, xs$$58);
}
function findBack(f$$36, xs$$59) {
  let xs$$61;
  xs$$61 = reverse(xs$$59);
  return find(f$$36, xs$$61);
}
function tryFindBack(f$$37, xs$$62) {
  let xs$$64;
  xs$$64 = reverse(xs$$62);
  return tryFind(f$$37, xs$$64);
}
function tryFindIndex(f$$38, xs$$65) {
  return tryPickIndexed(function (i$$12, x$$35) {
    return f$$38(x$$35) ? i$$12 : undefined;
  }, xs$$65);
}
function tryFindIndexBack(f$$39, xs$$66) {
  const array = Object(_Array_js__WEBPACK_IMPORTED_MODULE_4__["ofList"])(xs$$66, Array);
  return Object(_Array_js__WEBPACK_IMPORTED_MODULE_4__["tryFindIndexBack"])(f$$39, array);
}
function findIndex(f$$40, xs$$67) {
  const matchValue$$7 = tryFindIndex(f$$40, xs$$67);

  if (matchValue$$7 != null) {
    const x$$36 = matchValue$$7 | 0;
    return x$$36 | 0;
  } else {
    throw new Error("List did not contain any matching elements");
  }
}
function findIndexBack(f$$41, xs$$68) {
  const array$$1 = Object(_Array_js__WEBPACK_IMPORTED_MODULE_4__["ofList"])(xs$$68, Array);
  return Object(_Array_js__WEBPACK_IMPORTED_MODULE_4__["findIndexBack"])(f$$41, array$$1) | 0;
}
function item(n, xs$$69) {
  return findIndexed(function (i$$13, _arg1$$13) {
    return n === i$$13;
  }, xs$$69);
}
function tryItem(n$$1, xs$$70) {
  return tryFindIndexed(function (i$$14, _arg1$$14) {
    return n$$1 === i$$14;
  }, xs$$70);
}
function filter(f$$42, xs$$71) {
  const xs$$72 = fold(function (acc$$17, x$$37) {
    return f$$42(x$$37) ? new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](x$$37, acc$$17) : acc$$17;
  }, new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](), xs$$71);
  return reverse(xs$$72);
}
function partition(f$$43, xs$$73) {
  return fold(function (tupledArg$$1, x$$38) {
    return f$$43(x$$38) ? [new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](x$$38, tupledArg$$1[0]), tupledArg$$1[1]] : [tupledArg$$1[0], new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](x$$38, tupledArg$$1[1])];
  }, [new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](), new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"]()], reverse(xs$$73));
}
function choose(f$$44, xs$$74) {
  const xs$$75 = fold(function (acc$$18, x$$39) {
    const matchValue$$8 = f$$44(x$$39);

    if (matchValue$$8 == null) {
      return acc$$18;
    } else {
      const y$$10 = Object(_Option_js__WEBPACK_IMPORTED_MODULE_0__["value"])(matchValue$$8);
      return new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](y$$10, acc$$18);
    }
  }, new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](), xs$$74);
  return reverse(xs$$75);
}
function contains(value, list, eq) {
  const loop$$1 = function loop$$1($xs$$76$$162) {
    loop$$1: while (true) {
      const xs$$76 = $xs$$76$$162;

      if (xs$$76.tail != null) {
        if (eq.Equals(value, xs$$76.head)) {
          return true;
        } else {
          $xs$$76$$162 = xs$$76.tail;
          continue loop$$1;
        }
      } else {
        return false;
      }

      break;
    }
  };

  return loop$$1(list);
}
function except(itemsToExclude, array$$2, eq$$1) {
  if (isEmpty(array$$2)) {
    return array$$2;
  } else {
    const cached = Object(_Set_js__WEBPACK_IMPORTED_MODULE_5__["createMutable"])(itemsToExclude, eq$$1);
    return filter(function f$$45(arg00) {
      return Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["addToSet"])(arg00, cached);
    }, array$$2);
  }
}
function initialize(n$$2, f$$46) {
  let xs$$78 = new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"]();

  for (let i$$15 = 0; i$$15 <= n$$2 - 1; i$$15++) {
    xs$$78 = new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](f$$46(i$$15), xs$$78);
  }

  return reverse(xs$$78);
}
function replicate(n$$3, x$$40) {
  return initialize(n$$3, function (_arg1$$15) {
    return x$$40;
  });
}
function reduce(f$$47, _arg1$$16) {
  if (_arg1$$16.tail != null) {
    return fold(f$$47, _arg1$$16.head, _arg1$$16.tail);
  } else {
    throw new Error("List was empty");
  }
}
function reduceBack(f$$48, _arg1$$17) {
  if (_arg1$$17.tail != null) {
    return foldBack(f$$48, _arg1$$17.tail, _arg1$$17.head);
  } else {
    throw new Error("List was empty");
  }
}
function forAll(f$$49, xs$$79) {
  return fold(function (acc$$19, x$$41) {
    return acc$$19 ? f$$49(x$$41) : false;
  }, true, xs$$79);
}
function forAll2(f$$50, xs$$80, ys$$17) {
  return fold2(function (acc$$20, x$$42, y$$11) {
    return acc$$20 ? f$$50(x$$42, y$$11) : false;
  }, true, xs$$80, ys$$17);
}
function exists($f$$51$$180, $_arg1$$18$$181) {
  exists: while (true) {
    const f$$51 = $f$$51$$180,
          _arg1$$18 = $_arg1$$18$$181;

    if (_arg1$$18.tail != null) {
      if (f$$51(_arg1$$18.head)) {
        return true;
      } else {
        $f$$51$$180 = f$$51;
        $_arg1$$18$$181 = _arg1$$18.tail;
        continue exists;
      }
    } else {
      return false;
    }

    break;
  }
}
function exists2($f$$52$$182, $bs$$2$$183, $cs$$2$$184) {
  exists2: while (true) {
    const f$$52 = $f$$52$$182,
          bs$$2 = $bs$$2$$183,
          cs$$2 = $cs$$2$$184;
    var $target$$185, x$$44, xs$$82, y$$12, ys$$18;

    if (bs$$2.tail != null) {
      if (cs$$2.tail != null) {
        $target$$185 = 1;
        x$$44 = bs$$2.head;
        xs$$82 = bs$$2.tail;
        y$$12 = cs$$2.head;
        ys$$18 = cs$$2.tail;
      } else {
        $target$$185 = 2;
      }
    } else if (cs$$2.tail == null) {
      $target$$185 = 0;
    } else {
      $target$$185 = 2;
    }

    switch ($target$$185) {
      case 0:
        {
          return false;
        }

      case 1:
        {
          if (f$$52(x$$44, y$$12)) {
            return true;
          } else {
            $f$$52$$182 = f$$52;
            $bs$$2$$183 = xs$$82;
            $cs$$2$$184 = ys$$18;
            continue exists2;
          }
        }

      case 2:
        {
          throw new Error("Lists had different lengths");
        }
    }

    break;
  }
}
function unzip(xs$$83) {
  return foldBack(function (tupledArg$$2, tupledArg$$3) {
    return [new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](tupledArg$$2[0], tupledArg$$3[0]), new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](tupledArg$$2[1], tupledArg$$3[1])];
  }, xs$$83, [new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](), new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"]()]);
}
function unzip3(xs$$84) {
  return foldBack(function (tupledArg$$4, tupledArg$$5) {
    return [new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](tupledArg$$4[0], tupledArg$$5[0]), new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](tupledArg$$4[1], tupledArg$$5[1]), new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](tupledArg$$4[2], tupledArg$$5[2])];
  }, xs$$84, [new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](), new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](), new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"]()]);
}
function zip(xs$$85, ys$$19) {
  return map2(function (x$$47, y$$15) {
    return [x$$47, y$$15];
  }, xs$$85, ys$$19);
}
function zip3(xs$$86, ys$$20, zs$$5) {
  return map3(function (x$$48, y$$16, z$$5) {
    return [x$$48, y$$16, z$$5];
  }, xs$$86, ys$$20, zs$$5);
}
function sort(xs$$87, comparer$$1) {
  let xs$$89;
  const xs$$88 = Object(_Array_js__WEBPACK_IMPORTED_MODULE_4__["ofList"])(xs$$87, Array);
  xs$$88.sort(function comparer$$2(x$$49, y$$17) {
    return comparer$$1.Compare(x$$49, y$$17);
  });
  xs$$89 = xs$$88;
  return ofArray(xs$$89);
}
function sortBy(projection, xs$$90, comparer$$3) {
  let xs$$92;
  const xs$$91 = Object(_Array_js__WEBPACK_IMPORTED_MODULE_4__["ofList"])(xs$$90, Array);
  xs$$91.sort(function comparer$$4(x$$50, y$$18) {
    return comparer$$3.Compare(projection(x$$50), projection(y$$18));
  });
  xs$$92 = xs$$91;
  return ofArray(xs$$92);
}
function sortDescending(xs$$93, comparer$$5) {
  let xs$$95;
  const xs$$94 = Object(_Array_js__WEBPACK_IMPORTED_MODULE_4__["ofList"])(xs$$93, Array);
  xs$$94.sort(function comparer$$6(x$$51, y$$19) {
    return comparer$$5.Compare(x$$51, y$$19) * -1;
  });
  xs$$95 = xs$$94;
  return ofArray(xs$$95);
}
function sortByDescending(projection$$1, xs$$96, comparer$$7) {
  let xs$$98;
  const xs$$97 = Object(_Array_js__WEBPACK_IMPORTED_MODULE_4__["ofList"])(xs$$96, Array);
  xs$$97.sort(function comparer$$8(x$$52, y$$20) {
    return comparer$$7.Compare(projection$$1(x$$52), projection$$1(y$$20)) * -1;
  });
  xs$$98 = xs$$97;
  return ofArray(xs$$98);
}
function sortWith(comparer$$9, xs$$99) {
  let xs$$101;
  const xs$$100 = Object(_Array_js__WEBPACK_IMPORTED_MODULE_4__["ofList"])(xs$$99, Array);
  xs$$100.sort(comparer$$9);
  xs$$101 = xs$$100;
  return ofArray(xs$$101);
}
function sum(xs$$102, adder) {
  return fold(function (acc$$21, x$$53) {
    return adder.Add(acc$$21, x$$53);
  }, adder.GetZero(), xs$$102);
}
function sumBy(f$$53, xs$$103, adder$$1) {
  return fold(function (acc$$22, x$$54) {
    return adder$$1.Add(acc$$22, f$$53(x$$54));
  }, adder$$1.GetZero(), xs$$103);
}
function maxBy(projection$$2, xs$$104, comparer$$11) {
  return reduce(function (x$$55, y$$21) {
    return comparer$$11.Compare(projection$$2(y$$21), projection$$2(x$$55)) > 0 ? y$$21 : x$$55;
  }, xs$$104);
}
function max(li, comparer$$12) {
  return reduce(function (x$$56, y$$22) {
    return comparer$$12.Compare(y$$22, x$$56) > 0 ? y$$22 : x$$56;
  }, li);
}
function minBy(projection$$3, xs$$105, comparer$$13) {
  return reduce(function (x$$57, y$$23) {
    return comparer$$13.Compare(projection$$3(y$$23), projection$$3(x$$57)) > 0 ? x$$57 : y$$23;
  }, xs$$105);
}
function min(xs$$106, comparer$$14) {
  return reduce(function (x$$58, y$$24) {
    return comparer$$14.Compare(y$$24, x$$58) > 0 ? x$$58 : y$$24;
  }, xs$$106);
}
function average(xs$$107, averager) {
  const total = fold(function (acc$$23, x$$59) {
    return averager.Add(acc$$23, x$$59);
  }, averager.GetZero(), xs$$107);
  return averager.DivideByInt(total, length(xs$$107));
}
function averageBy(f$$54, xs$$108, averager$$1) {
  const total$$1 = fold(function (acc$$24, x$$60) {
    return averager$$1.Add(acc$$24, f$$54(x$$60));
  }, averager$$1.GetZero(), xs$$108);
  return averager$$1.DivideByInt(total$$1, length(xs$$108));
}
function permute(f$$55, xs$$109) {
  let xs$$110;
  let array$$3;
  array$$3 = Object(_Array_js__WEBPACK_IMPORTED_MODULE_4__["ofList"])(xs$$109, Array);
  xs$$110 = Object(_Array_js__WEBPACK_IMPORTED_MODULE_4__["permute"])(f$$55, array$$3);
  return ofArray(xs$$110);
}
function chunkBySize(chunkSize, xs$$111) {
  let xs$$114;
  let xs$$112;
  let array$$4;
  array$$4 = Object(_Array_js__WEBPACK_IMPORTED_MODULE_4__["ofList"])(xs$$111, Array);
  xs$$112 = Object(_Array_js__WEBPACK_IMPORTED_MODULE_4__["chunkBySize"])(chunkSize, array$$4);
  xs$$114 = ofArray(xs$$112);
  return map(function f$$56(xs$$113) {
    return ofArray(xs$$113);
  }, xs$$114);
}
function skip(i$$16, xs$$115) {
  const skipInner = function skipInner($i$$17$$240, $xs$$116$$241) {
    skipInner: while (true) {
      const i$$17 = $i$$17$$240,
            xs$$116 = $xs$$116$$241;

      if (i$$17 === 0) {
        return xs$$116;
      } else if (xs$$116.tail != null) {
        $i$$17$$240 = i$$17 - 1;
        $xs$$116$$241 = xs$$116.tail;
        continue skipInner;
      } else {
        throw new Error("The input sequence has an insufficient number of elements.");
      }

      break;
    }
  };

  if (i$$16 < 0) {
    throw new Error("The input must be non-negative.");
  } else {
    var $target$$242, i$$20, xs$$119;

    if (i$$16 === 0) {
      $target$$242 = 0;
    } else if (i$$16 === 1) {
      if (xs$$115.tail != null) {
        $target$$242 = 1;
      } else {
        $target$$242 = 2;
        i$$20 = i$$16;
        xs$$119 = xs$$115;
      }
    } else {
      $target$$242 = 2;
      i$$20 = i$$16;
      xs$$119 = xs$$115;
    }

    switch ($target$$242) {
      case 0:
        {
          return xs$$115;
        }

      case 1:
        {
          return xs$$115.tail;
        }

      case 2:
        {
          return skipInner(i$$20, xs$$119);
        }
    }
  }
}
function skipWhile($predicate$$243, $xs$$120$$244) {
  skipWhile: while (true) {
    const predicate = $predicate$$243,
          xs$$120 = $xs$$120$$244;
    var $target$$245, h$$4, t$$4;

    if (xs$$120.tail != null) {
      if (predicate(xs$$120.head)) {
        $target$$245 = 0;
        h$$4 = xs$$120.head;
        t$$4 = xs$$120.tail;
      } else {
        $target$$245 = 1;
      }
    } else {
      $target$$245 = 1;
    }

    switch ($target$$245) {
      case 0:
        {
          $predicate$$243 = predicate;
          $xs$$120$$244 = t$$4;
          continue skipWhile;
        }

      case 1:
        {
          return xs$$120;
        }
    }

    break;
  }
}
function takeSplitAux($error$$246, $i$$21$$247, $acc$$25$$248, $xs$$121$$249) {
  takeSplitAux: while (true) {
    const error = $error$$246,
          i$$21 = $i$$21$$247,
          acc$$25 = $acc$$25$$248,
          xs$$121 = $xs$$121$$249;

    if (i$$21 === 0) {
      return [reverse(acc$$25), xs$$121];
    } else if (xs$$121.tail != null) {
      $error$$246 = error;
      $i$$21$$247 = i$$21 - 1;
      $acc$$25$$248 = new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](xs$$121.head, acc$$25);
      $xs$$121$$249 = xs$$121.tail;
      continue takeSplitAux;
    } else {
      if (error) {
        throw new Error("The input sequence has an insufficient number of elements.");
      } else {
        return [reverse(acc$$25), xs$$121];
      }
    }

    break;
  }
}
function take(i$$22, xs$$123) {
  if (i$$22 < 0) {
    throw new Error("The input must be non-negative.");
  } else {
    var $target$$252, i$$25, xs$$124;

    if (i$$22 === 0) {
      $target$$252 = 0;
    } else if (i$$22 === 1) {
      if (xs$$123.tail != null) {
        $target$$252 = 1;
      } else {
        $target$$252 = 2;
        i$$25 = i$$22;
        xs$$124 = xs$$123;
      }
    } else {
      $target$$252 = 2;
      i$$25 = i$$22;
      xs$$124 = xs$$123;
    }

    switch ($target$$252) {
      case 0:
        {
          return new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"]();
        }

      case 1:
        {
          return new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](xs$$123.head, new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"]());
        }

      case 2:
        {
          const tuple = takeSplitAux(true, i$$25, new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](), xs$$124);
          return tuple[0];
        }
    }
  }
}
function takeWhile(predicate$$1, xs$$125) {
  if (xs$$125.tail != null) {
    if (xs$$125.tail.tail == null) {
      if (predicate$$1(xs$$125.head)) {
        return xs$$125;
      } else {
        return xs$$125.tail;
      }
    } else {
      if (!predicate$$1(xs$$125.head)) {
        return new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"]();
      } else {
        return new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](xs$$125.head, takeWhile(predicate$$1, xs$$125.tail));
      }
    }
  } else {
    return xs$$125;
  }
}
function truncate(i$$26, xs$$127) {
  if (i$$26 < 0) {
    throw new Error("The input must be non-negative.");
  } else {
    var $target$$257, i$$29, xs$$128;

    if (i$$26 === 0) {
      $target$$257 = 0;
    } else if (i$$26 === 1) {
      if (xs$$127.tail != null) {
        $target$$257 = 1;
      } else {
        $target$$257 = 2;
        i$$29 = i$$26;
        xs$$128 = xs$$127;
      }
    } else {
      $target$$257 = 2;
      i$$29 = i$$26;
      xs$$128 = xs$$127;
    }

    switch ($target$$257) {
      case 0:
        {
          return new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"]();
        }

      case 1:
        {
          return new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](xs$$127.head, new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"]());
        }

      case 2:
        {
          const tuple$$1 = takeSplitAux(false, i$$29, new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](), xs$$128);
          return tuple$$1[0];
        }
    }
  }
}
function splitAt(i$$30, xs$$129) {
  if (i$$30 < 0) {
    throw new Error("The input must be non-negative.");
  } else {
    var $target$$260, i$$33, xs$$131;

    if (i$$30 === 0) {
      $target$$260 = 0;
    } else if (i$$30 === 1) {
      if (xs$$129.tail != null) {
        $target$$260 = 1;
      } else {
        $target$$260 = 2;
        i$$33 = i$$30;
        xs$$131 = xs$$129;
      }
    } else {
      $target$$260 = 2;
      i$$33 = i$$30;
      xs$$131 = xs$$129;
    }

    switch ($target$$260) {
      case 0:
        {
          return [new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](), xs$$129];
        }

      case 1:
        {
          return [new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](xs$$129.head, new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"]()), xs$$129.tail];
        }

      case 2:
        {
          return takeSplitAux(true, i$$33, new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](), xs$$131);
        }
    }
  }
}
function outOfRange() {
  throw new Error("Index out of range");
}
function slice(lower, upper, xs$$132) {
  const lower$$1 = Object(_Option_js__WEBPACK_IMPORTED_MODULE_0__["defaultArg"])(lower, 0) | 0;
  const hasUpper = upper != null;

  if (lower$$1 < 0) {
    return outOfRange();
  } else if (hasUpper ? upper < lower$$1 : false) {
    return new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"]();
  } else {
    let lastIndex = -1 | 0;
    let res$$2;
    const state$$13 = new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"]();
    res$$2 = foldIndexed(function f$$57(i$$34, acc$$26, x$$67) {
      lastIndex = i$$34;

      if (lower$$1 <= i$$34 ? !hasUpper ? true : i$$34 <= upper : false) {
        return new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](x$$67, acc$$26);
      } else {
        return acc$$26;
      }
    }, state$$13, xs$$132);

    if (lower$$1 > lastIndex + 1 ? true : hasUpper ? upper > lastIndex : false) {
      outOfRange();
    } else {
      void null;
    }

    return reverse(res$$2);
  }
}
function distinctBy(projection$$4, xs$$134, eq$$2) {
  const hashSet = Object(_Set_js__WEBPACK_IMPORTED_MODULE_5__["createMutable"])([], eq$$2);
  return filter(function f$$58($arg$$1) {
    const arg00$$1 = projection$$4($arg$$1);
    return Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["addToSet"])(arg00$$1, hashSet);
  }, xs$$134);
}
function distinct(xs$$136, eq$$3) {
  return distinctBy(function (x$$68) {
    return x$$68;
  }, xs$$136, eq$$3);
}
function exactlyOne(xs$$137) {
  if (xs$$137.tail != null) {
    if (xs$$137.tail.tail != null) {
      throw new Error("Input list too long\\nParameter name: list");
    } else {
      return xs$$137.head;
    }
  } else {
    throw new Error("The input sequence was empty\\nParameter name: list");
  }
}
function groupBy(projection$$5, xs$$139, eq$$4) {
  const dict = Object(_Map_js__WEBPACK_IMPORTED_MODULE_6__["createMutable"])([], eq$$4);
  let keys = new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"]();
  iterate(function f$$59(v$$2) {
    const key = projection$$5(v$$2);
    const matchValue$$16 = Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["tryGetValue"])(dict, key, null);

    if (matchValue$$16[0]) {
      dict.set(key, new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](v$$2, matchValue$$16[1]));
    } else {
      Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["addToDict"])(dict, key, new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](v$$2, new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"]()));
      keys = new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](key, keys);
    }
  }, xs$$139);
  let result$$1 = new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"]();
  const xs$$141 = keys;
  iterate(function f$$60(key$$1) {
    result$$1 = new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"]([key$$1, reverse(Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["getItemFromDict"])(dict, key$$1))], result$$1);
  }, xs$$141);
  return result$$1;
}
function countBy(projection$$6, xs$$142, eq$$5) {
  const dict$$1 = Object(_Map_js__WEBPACK_IMPORTED_MODULE_6__["createMutable"])([], eq$$5);
  let keys$$1 = new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"]();
  iterate(function f$$61(v$$3) {
    const key$$2 = projection$$6(v$$3);
    const matchValue$$17 = Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["tryGetValue"])(dict$$1, key$$2, 0);

    if (matchValue$$17[0]) {
      dict$$1.set(key$$2, matchValue$$17[1] + 1);
    } else {
      dict$$1.set(key$$2, 1);
      keys$$1 = new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](key$$2, keys$$1);
    }
  }, xs$$142);
  let result$$2 = new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"]();
  const xs$$144 = keys$$1;
  iterate(function f$$62(key$$3) {
    result$$2 = new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"]([key$$3, Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["getItemFromDict"])(dict$$1, key$$3)], result$$2);
  }, xs$$144);
  return result$$2;
}
function where(predicate$$2, source) {
  return filter(predicate$$2, source);
}
function pairwise(source$$1) {
  const xs$$145 = Object(_Seq_js__WEBPACK_IMPORTED_MODULE_2__["pairwise"])(source$$1);
  return ofSeq(xs$$145);
}
function windowed(windowSize, source$$2) {
  if (windowSize <= 0) {
    throw new Error("windowSize must be positive");
  } else {
    void null;
  }

  let res$$3 = new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"]();

  for (let i$$35 = length(source$$2); i$$35 >= windowSize; i$$35--) {
    res$$3 = new _Types_js__WEBPACK_IMPORTED_MODULE_1__["List"](slice(i$$35 - windowSize, i$$35 - 1, source$$2), res$$3);
  }

  return res$$3;
}
function splitInto(chunks, source$$3) {
  let xs$$148;
  let xs$$146;
  let array$$5;
  array$$5 = Object(_Array_js__WEBPACK_IMPORTED_MODULE_4__["ofList"])(source$$3, Array);
  xs$$146 = Object(_Array_js__WEBPACK_IMPORTED_MODULE_4__["splitInto"])(chunks, array$$5);
  xs$$148 = ofArray(xs$$146);
  return map(function f$$63(xs$$147) {
    return ofArray(xs$$147);
  }, xs$$148);
}
function transpose(lists$$1) {
  let xs$$150;
  let source$$5;
  source$$5 = Object(_Seq_js__WEBPACK_IMPORTED_MODULE_2__["transpose"])(lists$$1);
  xs$$150 = Object(_Seq_js__WEBPACK_IMPORTED_MODULE_2__["map"])(ofSeq, source$$5);
  return ofSeq(xs$$150);
}

/***/ }),

/***/ "./.fable/fable-library.2.13.0/Long.js":
/*!*********************************************!*\
  !*** ./.fable/fable-library.2.13.0/Long.js ***!
  \*********************************************/
/*! exports provided: default, get_Zero, get_One, op_Addition, op_Subtraction, op_Multiply, op_Division, op_Modulus, op_UnaryNegation, op_LeftShift, op_RightShift, op_RightShiftUnsigned, op_BitwiseAnd, op_BitwiseOr, op_ExclusiveOr, op_LogicalNot, op_LessThan, op_LessThanOrEqual, op_GreaterThan, op_GreaterThanOrEqual, op_Equality, op_Inequality, equals, compare, fromInt, fromBits, fromBytes, fromNumber, fromString, fromValue, toInt, toBytes, toNumber, toString, getLowBits, getHighBits, getLowBitsUnsigned, getHighBitsUnsigned, abs, fromInteger, parse, tryParse, unixEpochMillisecondsToTicks, ticksToUnixEpochMilliseconds, makeRangeStepFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_Zero", function() { return get_Zero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get_One", function() { return get_One; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_Addition", function() { return op_Addition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_Subtraction", function() { return op_Subtraction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_Multiply", function() { return op_Multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_Division", function() { return op_Division; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_Modulus", function() { return op_Modulus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_UnaryNegation", function() { return op_UnaryNegation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_LeftShift", function() { return op_LeftShift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_RightShift", function() { return op_RightShift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_RightShiftUnsigned", function() { return op_RightShiftUnsigned; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_BitwiseAnd", function() { return op_BitwiseAnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_BitwiseOr", function() { return op_BitwiseOr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_ExclusiveOr", function() { return op_ExclusiveOr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_LogicalNot", function() { return op_LogicalNot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_LessThan", function() { return op_LessThan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_LessThanOrEqual", function() { return op_LessThanOrEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_GreaterThan", function() { return op_GreaterThan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_GreaterThanOrEqual", function() { return op_GreaterThanOrEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_Equality", function() { return op_Equality; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_Inequality", function() { return op_Inequality; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromInt", function() { return fromInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromBits", function() { return fromBits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromBytes", function() { return fromBytes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromNumber", function() { return fromNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromString", function() { return fromString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValue", function() { return fromValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toInt", function() { return toInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toBytes", function() { return toBytes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNumber", function() { return toNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return toString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLowBits", function() { return getLowBits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHighBits", function() { return getHighBits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLowBitsUnsigned", function() { return getLowBitsUnsigned; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHighBitsUnsigned", function() { return getHighBitsUnsigned; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abs", function() { return abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromInteger", function() { return fromInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryParse", function() { return tryParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unixEpochMillisecondsToTicks", function() { return unixEpochMillisecondsToTicks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ticksToUnixEpochMilliseconds", function() { return ticksToUnixEpochMilliseconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeRangeStepFunction", function() { return makeRangeStepFunction; });
/* harmony import */ var _Int32__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Int32 */ "./.fable/fable-library.2.13.0/Int32.js");
/* harmony import */ var _lib_long__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/long */ "./.fable/fable-library.2.13.0/lib/long.js");


/* harmony default export */ __webpack_exports__["default"] = (_lib_long__WEBPACK_IMPORTED_MODULE_1__["Long"]);
const get_Zero = _lib_long__WEBPACK_IMPORTED_MODULE_1__["ZERO"];
const get_One = _lib_long__WEBPACK_IMPORTED_MODULE_1__["ONE"];
const op_Addition = _lib_long__WEBPACK_IMPORTED_MODULE_1__["add"];
const op_Subtraction = _lib_long__WEBPACK_IMPORTED_MODULE_1__["subtract"];
const op_Multiply = _lib_long__WEBPACK_IMPORTED_MODULE_1__["multiply"];
const op_Division = _lib_long__WEBPACK_IMPORTED_MODULE_1__["divide"];
const op_Modulus = _lib_long__WEBPACK_IMPORTED_MODULE_1__["modulo"];
const op_UnaryNegation = _lib_long__WEBPACK_IMPORTED_MODULE_1__["negate"];
const op_LeftShift = _lib_long__WEBPACK_IMPORTED_MODULE_1__["shiftLeft"];
const op_RightShift = _lib_long__WEBPACK_IMPORTED_MODULE_1__["shiftRight"];
const op_RightShiftUnsigned = _lib_long__WEBPACK_IMPORTED_MODULE_1__["shiftRightUnsigned"];
const op_BitwiseAnd = _lib_long__WEBPACK_IMPORTED_MODULE_1__["and"];
const op_BitwiseOr = _lib_long__WEBPACK_IMPORTED_MODULE_1__["or"];
const op_ExclusiveOr = _lib_long__WEBPACK_IMPORTED_MODULE_1__["xor"];
const op_LogicalNot = _lib_long__WEBPACK_IMPORTED_MODULE_1__["not"];
const op_LessThan = _lib_long__WEBPACK_IMPORTED_MODULE_1__["lessThan"];
const op_LessThanOrEqual = _lib_long__WEBPACK_IMPORTED_MODULE_1__["lessThanOrEqual"];
const op_GreaterThan = _lib_long__WEBPACK_IMPORTED_MODULE_1__["greaterThan"];
const op_GreaterThanOrEqual = _lib_long__WEBPACK_IMPORTED_MODULE_1__["greaterThanOrEqual"];
const op_Equality = _lib_long__WEBPACK_IMPORTED_MODULE_1__["equals"];
const op_Inequality = _lib_long__WEBPACK_IMPORTED_MODULE_1__["notEquals"];
const equals = _lib_long__WEBPACK_IMPORTED_MODULE_1__["equals"];
const compare = _lib_long__WEBPACK_IMPORTED_MODULE_1__["compare"];
const fromInt = _lib_long__WEBPACK_IMPORTED_MODULE_1__["fromInt"];
const fromBits = _lib_long__WEBPACK_IMPORTED_MODULE_1__["fromBits"];
const fromBytes = _lib_long__WEBPACK_IMPORTED_MODULE_1__["fromBytes"];
const fromNumber = _lib_long__WEBPACK_IMPORTED_MODULE_1__["fromNumber"];
const fromString = _lib_long__WEBPACK_IMPORTED_MODULE_1__["fromString"];
const fromValue = _lib_long__WEBPACK_IMPORTED_MODULE_1__["fromValue"];
const toInt = _lib_long__WEBPACK_IMPORTED_MODULE_1__["toInt"];
const toBytes = _lib_long__WEBPACK_IMPORTED_MODULE_1__["toBytes"];
const toNumber = _lib_long__WEBPACK_IMPORTED_MODULE_1__["toNumber"];
const toString = _lib_long__WEBPACK_IMPORTED_MODULE_1__["toString"];
const getLowBits = _lib_long__WEBPACK_IMPORTED_MODULE_1__["getLowBits"];
const getHighBits = _lib_long__WEBPACK_IMPORTED_MODULE_1__["getHighBits"];
const getLowBitsUnsigned = _lib_long__WEBPACK_IMPORTED_MODULE_1__["getLowBitsUnsigned"];
const getHighBitsUnsigned = _lib_long__WEBPACK_IMPORTED_MODULE_1__["getHighBitsUnsigned"];
function getMaxValue(unsigned, radix, isNegative) {
    switch (radix) {
        case 2: return unsigned ?
            "1111111111111111111111111111111111111111111111111111111111111111" :
            (isNegative ? "1000000000000000000000000000000000000000000000000000000000000000"
                : "111111111111111111111111111111111111111111111111111111111111111");
        case 8: return unsigned ?
            "1777777777777777777777" :
            (isNegative ? "1000000000000000000000" : "777777777777777777777");
        case 10: return unsigned ?
            "18446744073709551615" :
            (isNegative ? "9223372036854775808" : "9223372036854775807");
        case 16: return unsigned ?
            "FFFFFFFFFFFFFFFF" :
            (isNegative ? "8000000000000000" : "7FFFFFFFFFFFFFFF");
        default: throw new Error("Invalid radix.");
    }
}
function abs(x) {
    if (!x.unsigned && _lib_long__WEBPACK_IMPORTED_MODULE_1__["isNegative"](x)) {
        return op_UnaryNegation(x);
    }
    else {
        return x;
    }
}
function fromInteger(value, unsigned, kind) {
    let x = value;
    let xh = 0;
    switch (kind) {
        case 0:
            x = value << 24 >> 24;
            xh = x;
            break;
        case 4:
            x = value << 24 >>> 24;
            break;
        case 1:
            x = value << 16 >> 16;
            xh = x;
            break;
        case 5:
            x = value << 16 >>> 16;
            break;
        case 2:
            x = value >> 0;
            xh = x;
            break;
        case 6:
            x = value >>> 0;
            break;
    }
    return _lib_long__WEBPACK_IMPORTED_MODULE_1__["fromBits"](x, xh >> 31, unsigned);
}
function parse(str, style, unsigned, _bitsize, radix) {
    const res = Object(_Int32__WEBPACK_IMPORTED_MODULE_0__["isValid"])(str, style, radix);
    if (res != null) {
        const lessOrEqual = (x, y) => {
            const len = Math.max(x.length, y.length);
            return x.padStart(len, "0") <= y.padStart(len, "0");
        };
        const isNegative = res.sign === "-";
        const maxValue = getMaxValue(unsigned || res.radix !== 10, res.radix, isNegative);
        if (lessOrEqual(res.digits.toUpperCase(), maxValue)) {
            str = isNegative ? res.sign + res.digits : res.digits;
            return _lib_long__WEBPACK_IMPORTED_MODULE_1__["fromString"](str, unsigned, res.radix);
        }
    }
    throw new Error("Input string was not in a correct format.");
}
function tryParse(str, style, unsigned, bitsize) {
    try {
        const v = parse(str, style, unsigned, bitsize);
        return [true, v];
    }
    catch (_a) {
        // supress error
    }
    return [false, _lib_long__WEBPACK_IMPORTED_MODULE_1__["ZERO"]];
}
function unixEpochMillisecondsToTicks(ms, offset) {
    return op_Multiply(op_Addition(op_Addition(_lib_long__WEBPACK_IMPORTED_MODULE_1__["fromNumber"](ms), 62135596800000), offset), 10000);
}
function ticksToUnixEpochMilliseconds(ticks) {
    return _lib_long__WEBPACK_IMPORTED_MODULE_1__["toNumber"](op_Subtraction(op_Division(ticks, 10000), 62135596800000));
}
function makeRangeStepFunction(step, last, unsigned) {
    const stepComparedWithZero = _lib_long__WEBPACK_IMPORTED_MODULE_1__["compare"](step, unsigned ? _lib_long__WEBPACK_IMPORTED_MODULE_1__["UZERO"] : _lib_long__WEBPACK_IMPORTED_MODULE_1__["ZERO"]);
    if (stepComparedWithZero === 0) {
        throw new Error("The step of a range cannot be zero");
    }
    const stepGreaterThanZero = stepComparedWithZero > 0;
    return (x) => {
        const comparedWithLast = _lib_long__WEBPACK_IMPORTED_MODULE_1__["compare"](x, last);
        if ((stepGreaterThanZero && comparedWithLast <= 0)
            || (!stepGreaterThanZero && comparedWithLast >= 0)) {
            return [x, op_Addition(x, step)];
        }
        else {
            return undefined;
        }
    };
}
//# sourceMappingURL=Long.js.map

/***/ }),

/***/ "./.fable/fable-library.2.13.0/Map.js":
/*!********************************************!*\
  !*** ./.fable/fable-library.2.13.0/Map.js ***!
  \********************************************/
/*! exports provided: MapTree$00602, MapTree$00602$reflection, MapTreeModule$$$sizeAux, MapTreeModule$$$size, MapTreeModule$$$empty, MapTreeModule$$$height, MapTreeModule$$$isEmpty, MapTreeModule$$$mk, MapTreeModule$$$rebalance, MapTreeModule$$$add, MapTreeModule$$$find, MapTreeModule$$$tryFind, MapTreeModule$$$partition1, MapTreeModule$$$partitionAux, MapTreeModule$$$partition, MapTreeModule$$$filter1, MapTreeModule$$$filterAux, MapTreeModule$$$filter, MapTreeModule$$$spliceOutSuccessor, MapTreeModule$$$remove, MapTreeModule$$$mem, MapTreeModule$$$iter, MapTreeModule$$$tryPick, MapTreeModule$$$exists, MapTreeModule$$$forall, MapTreeModule$$$map, MapTreeModule$$$mapi, MapTreeModule$$$foldBack, MapTreeModule$$$fold, MapTreeModule$$$foldFromTo, MapTreeModule$$$foldSection, MapTreeModule$$$loop, MapTreeModule$$$toList, MapTreeModule$$$ofList, MapTreeModule$$$mkFromEnumerator, MapTreeModule$$$ofArray, MapTreeModule$$$ofSeq, MapTreeModule$$$copyToArray, MapTreeModule$002EMapIterator$00602, MapTreeModule$002EMapIterator$00602$reflection, MapTreeModule$$$collapseLHS, MapTreeModule$$$mkIterator, MapTreeModule$$$notStarted, MapTreeModule$$$alreadyFinished, MapTreeModule$$$current, MapTreeModule$$$moveNext, MapTreeModule$002EmkIEnumerator$0027$00602, MapTreeModule$002EmkIEnumerator$0027$00602$reflection, MapTreeModule$002EmkIEnumerator$0027$00602$$$$002Ector$$Z26BC498C, MapTreeModule$$$mkIEnumerator, MapTreeModule$$$toSeq, FSharpMap, FSharpMap$reflection, FSharpMap$$$$002Ector$$58ADD115, FSharpMap$$get_Comparer, FSharpMap$$get_Tree, FSharpMap$$Add$$5BDDA1, FSharpMap$$get_IsEmpty, FSharpMap$$get_Item$$2B595, FSharpMap$$TryGetValue$$5BDDA1, FSharpMap$$TryPick$$72321DD7, FSharpMap$$Exists$$Z395DDC35, FSharpMap$$Filter$$Z395DDC35, FSharpMap$$ForAll$$Z395DDC35, FSharpMap$$Fold, FSharpMap$$FoldSection, FSharpMap$$Iterate$$1DCFB91D, FSharpMap$$MapRange$$6DC7247, FSharpMap$$Map$$Z6F6B671C, FSharpMap$$Partition$$Z395DDC35, FSharpMap$$get_Count, FSharpMap$$ContainsKey$$2B595, FSharpMap$$Remove$$2B595, FSharpMap$$TryFind$$2B595, FSharpMap$$ToList, isEmpty, add, find, tryFind, remove, containsKey, iterate, tryPick, pick, exists, filter, partition, forAll, mapRange, map, fold, foldBack, toSeq, findKey, tryFindKey, ofList, ofSeq, ofArray, toList, toArray, empty, createMutable, groupBy, countBy, count */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTree$00602", function() { return MapTree$00602; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTree$00602$reflection", function() { return MapTree$00602$reflection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$sizeAux", function() { return MapTreeModule$$$sizeAux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$size", function() { return MapTreeModule$$$size; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$empty", function() { return MapTreeModule$$$empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$height", function() { return MapTreeModule$$$height; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$isEmpty", function() { return MapTreeModule$$$isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$mk", function() { return MapTreeModule$$$mk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$rebalance", function() { return MapTreeModule$$$rebalance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$add", function() { return MapTreeModule$$$add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$find", function() { return MapTreeModule$$$find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$tryFind", function() { return MapTreeModule$$$tryFind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$partition1", function() { return MapTreeModule$$$partition1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$partitionAux", function() { return MapTreeModule$$$partitionAux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$partition", function() { return MapTreeModule$$$partition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$filter1", function() { return MapTreeModule$$$filter1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$filterAux", function() { return MapTreeModule$$$filterAux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$filter", function() { return MapTreeModule$$$filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$spliceOutSuccessor", function() { return MapTreeModule$$$spliceOutSuccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$remove", function() { return MapTreeModule$$$remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$mem", function() { return MapTreeModule$$$mem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$iter", function() { return MapTreeModule$$$iter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$tryPick", function() { return MapTreeModule$$$tryPick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$exists", function() { return MapTreeModule$$$exists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$forall", function() { return MapTreeModule$$$forall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$map", function() { return MapTreeModule$$$map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$mapi", function() { return MapTreeModule$$$mapi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$foldBack", function() { return MapTreeModule$$$foldBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$fold", function() { return MapTreeModule$$$fold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$foldFromTo", function() { return MapTreeModule$$$foldFromTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$foldSection", function() { return MapTreeModule$$$foldSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$loop", function() { return MapTreeModule$$$loop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$toList", function() { return MapTreeModule$$$toList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$ofList", function() { return MapTreeModule$$$ofList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$mkFromEnumerator", function() { return MapTreeModule$$$mkFromEnumerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$ofArray", function() { return MapTreeModule$$$ofArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$ofSeq", function() { return MapTreeModule$$$ofSeq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$copyToArray", function() { return MapTreeModule$$$copyToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$002EMapIterator$00602", function() { return MapTreeModule$002EMapIterator$00602; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$002EMapIterator$00602$reflection", function() { return MapTreeModule$002EMapIterator$00602$reflection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$collapseLHS", function() { return MapTreeModule$$$collapseLHS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$mkIterator", function() { return MapTreeModule$$$mkIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$notStarted", function() { return MapTreeModule$$$notStarted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$alreadyFinished", function() { return MapTreeModule$$$alreadyFinished; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$current", function() { return MapTreeModule$$$current; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$moveNext", function() { return MapTreeModule$$$moveNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$002EmkIEnumerator$0027$00602", function() { return MapTreeModule$002EmkIEnumerator$0027$00602; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$002EmkIEnumerator$0027$00602$reflection", function() { return MapTreeModule$002EmkIEnumerator$0027$00602$reflection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$002EmkIEnumerator$0027$00602$$$$002Ector$$Z26BC498C", function() { return MapTreeModule$002EmkIEnumerator$0027$00602$$$$002Ector$$Z26BC498C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$mkIEnumerator", function() { return MapTreeModule$$$mkIEnumerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTreeModule$$$toSeq", function() { return MapTreeModule$$$toSeq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap", function() { return FSharpMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap$reflection", function() { return FSharpMap$reflection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap$$$$002Ector$$58ADD115", function() { return FSharpMap$$$$002Ector$$58ADD115; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap$$get_Comparer", function() { return FSharpMap$$get_Comparer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap$$get_Tree", function() { return FSharpMap$$get_Tree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap$$Add$$5BDDA1", function() { return FSharpMap$$Add$$5BDDA1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap$$get_IsEmpty", function() { return FSharpMap$$get_IsEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap$$get_Item$$2B595", function() { return FSharpMap$$get_Item$$2B595; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap$$TryGetValue$$5BDDA1", function() { return FSharpMap$$TryGetValue$$5BDDA1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap$$TryPick$$72321DD7", function() { return FSharpMap$$TryPick$$72321DD7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap$$Exists$$Z395DDC35", function() { return FSharpMap$$Exists$$Z395DDC35; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap$$Filter$$Z395DDC35", function() { return FSharpMap$$Filter$$Z395DDC35; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap$$ForAll$$Z395DDC35", function() { return FSharpMap$$ForAll$$Z395DDC35; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap$$Fold", function() { return FSharpMap$$Fold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap$$FoldSection", function() { return FSharpMap$$FoldSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap$$Iterate$$1DCFB91D", function() { return FSharpMap$$Iterate$$1DCFB91D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap$$MapRange$$6DC7247", function() { return FSharpMap$$MapRange$$6DC7247; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap$$Map$$Z6F6B671C", function() { return FSharpMap$$Map$$Z6F6B671C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap$$Partition$$Z395DDC35", function() { return FSharpMap$$Partition$$Z395DDC35; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap$$get_Count", function() { return FSharpMap$$get_Count; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap$$ContainsKey$$2B595", function() { return FSharpMap$$ContainsKey$$2B595; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap$$Remove$$2B595", function() { return FSharpMap$$Remove$$2B595; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap$$TryFind$$2B595", function() { return FSharpMap$$TryFind$$2B595; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpMap$$ToList", function() { return FSharpMap$$ToList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryFind", function() { return tryFind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containsKey", function() { return containsKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterate", function() { return iterate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryPick", function() { return tryPick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return pick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exists", function() { return exists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return partition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forAll", function() { return forAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapRange", function() { return mapRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fold", function() { return fold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foldBack", function() { return foldBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toSeq", function() { return toSeq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findKey", function() { return findKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryFindKey", function() { return tryFindKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ofList", function() { return ofList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ofSeq", function() { return ofSeq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ofArray", function() { return ofArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toList", function() { return toList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMutable", function() { return createMutable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return groupBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countBy", function() { return countBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "count", function() { return count; });
/* harmony import */ var _Types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Types.js */ "./.fable/fable-library.2.13.0/Types.js");
/* harmony import */ var _Reflection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reflection.js */ "./.fable/fable-library.2.13.0/Reflection.js");
/* harmony import */ var _Option_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Option.js */ "./.fable/fable-library.2.13.0/Option.js");
/* harmony import */ var _Seq_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Seq.js */ "./.fable/fable-library.2.13.0/Seq.js");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Util.js */ "./.fable/fable-library.2.13.0/Util.js");
/* harmony import */ var _String_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./String.js */ "./.fable/fable-library.2.13.0/String.js");
/* harmony import */ var _MutableMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MutableMap */ "./.fable/fable-library.2.13.0/MutableMap.js");







const MapTree$00602 = Object(_Types_js__WEBPACK_IMPORTED_MODULE_0__["declare"])(function Map_MapTree(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, _Types_js__WEBPACK_IMPORTED_MODULE_0__["Union"]);
function MapTree$00602$reflection($gen$$3, $gen$$4) {
  return Object(_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["union_type"])("Map.MapTree`2", [$gen$$3, $gen$$4], MapTree$00602, () => ["MapEmpty", ["MapOne", [["Item1", $gen$$3], ["Item2", $gen$$4]]], ["MapNode", [["Item1", $gen$$3], ["Item2", $gen$$4], ["Item3", MapTree$00602$reflection($gen$$3, $gen$$4)], ["Item4", MapTree$00602$reflection($gen$$3, $gen$$4)], ["Item5", _Reflection_js__WEBPACK_IMPORTED_MODULE_1__["int32_type"]]]]]);
}
function MapTreeModule$$$sizeAux($acc$$5, $m$$6) {
  MapTreeModule$$$sizeAux: while (true) {
    const acc = $acc$$5,
          m = $m$$6;

    switch (m.tag) {
      case 1:
        {
          return acc + 1 | 0;
        }

      case 2:
        {
          $acc$$5 = MapTreeModule$$$sizeAux(acc + 1, m.fields[2]);
          $m$$6 = m.fields[3];
          continue MapTreeModule$$$sizeAux;
        }

      default:
        {
          return acc | 0;
        }
    }

    break;
  }
}
function MapTreeModule$$$size(x) {
  return MapTreeModule$$$sizeAux(0, x);
}
function MapTreeModule$$$empty() {
  return new MapTree$00602(0, "MapEmpty");
}
function MapTreeModule$$$height(_arg1) {
  switch (_arg1.tag) {
    case 1:
      {
        return 1;
      }

    case 2:
      {
        return _arg1.fields[4] | 0;
      }

    default:
      {
        return 0;
      }
  }
}
function MapTreeModule$$$isEmpty(m$$1) {
  if (m$$1.tag === 0) {
    return true;
  } else {
    return false;
  }
}
function MapTreeModule$$$mk(l$$1, k, v, r$$1) {
  var $target$$14;

  if (l$$1.tag === 0) {
    if (r$$1.tag === 0) {
      $target$$14 = 0;
    } else {
      $target$$14 = 1;
    }
  } else {
    $target$$14 = 1;
  }

  switch ($target$$14) {
    case 0:
      {
        return new MapTree$00602(1, "MapOne", k, v);
      }

    case 1:
      {
        const hl = MapTreeModule$$$height(l$$1) | 0;
        const hr = MapTreeModule$$$height(r$$1) | 0;
        const m$$2 = (hl < hr ? hr : hl) | 0;
        return new MapTree$00602(2, "MapNode", k, v, l$$1, r$$1, m$$2 + 1);
      }
  }
}
function MapTreeModule$$$rebalance(t1, k$$1, v$$1, t2) {
  const t1h = MapTreeModule$$$height(t1) | 0;
  const t2h = MapTreeModule$$$height(t2) | 0;

  if (t2h > t1h + 2) {
    if (t2.tag === 2) {
      if (MapTreeModule$$$height(t2.fields[2]) > t1h + 1) {
        if (t2.fields[2].tag === 2) {
          return MapTreeModule$$$mk(MapTreeModule$$$mk(t1, k$$1, v$$1, t2.fields[2].fields[2]), t2.fields[2].fields[0], t2.fields[2].fields[1], MapTreeModule$$$mk(t2.fields[2].fields[3], t2.fields[0], t2.fields[1], t2.fields[3]));
        } else {
          throw new Error("rebalance");
        }
      } else {
        return MapTreeModule$$$mk(MapTreeModule$$$mk(t1, k$$1, v$$1, t2.fields[2]), t2.fields[0], t2.fields[1], t2.fields[3]);
      }
    } else {
      throw new Error("rebalance");
    }
  } else if (t1h > t2h + 2) {
    if (t1.tag === 2) {
      if (MapTreeModule$$$height(t1.fields[3]) > t2h + 1) {
        if (t1.fields[3].tag === 2) {
          return MapTreeModule$$$mk(MapTreeModule$$$mk(t1.fields[2], t1.fields[0], t1.fields[1], t1.fields[3].fields[2]), t1.fields[3].fields[0], t1.fields[3].fields[1], MapTreeModule$$$mk(t1.fields[3].fields[3], k$$1, v$$1, t2));
        } else {
          throw new Error("re  balance");
        }
      } else {
        return MapTreeModule$$$mk(t1.fields[2], t1.fields[0], t1.fields[1], MapTreeModule$$$mk(t1.fields[3], k$$1, v$$1, t2));
      }
    } else {
      throw new Error("rebalance");
    }
  } else {
    return MapTreeModule$$$mk(t1, k$$1, v$$1, t2);
  }
}
function MapTreeModule$$$add(comparer, k$$2, v$$2, m$$3) {
  switch (m$$3.tag) {
    case 1:
      {
        const c = comparer.Compare(k$$2, m$$3.fields[0]) | 0;

        if (c < 0) {
          return new MapTree$00602(2, "MapNode", k$$2, v$$2, new MapTree$00602(0, "MapEmpty"), m$$3, 2);
        } else if (c === 0) {
          return new MapTree$00602(1, "MapOne", k$$2, v$$2);
        } else {
          return new MapTree$00602(2, "MapNode", k$$2, v$$2, m$$3, new MapTree$00602(0, "MapEmpty"), 2);
        }
      }

    case 2:
      {
        const c$$1 = comparer.Compare(k$$2, m$$3.fields[0]) | 0;

        if (c$$1 < 0) {
          return MapTreeModule$$$rebalance(MapTreeModule$$$add(comparer, k$$2, v$$2, m$$3.fields[2]), m$$3.fields[0], m$$3.fields[1], m$$3.fields[3]);
        } else if (c$$1 === 0) {
          return new MapTree$00602(2, "MapNode", k$$2, v$$2, m$$3.fields[2], m$$3.fields[3], m$$3.fields[4]);
        } else {
          return MapTreeModule$$$rebalance(m$$3.fields[2], m$$3.fields[0], m$$3.fields[1], MapTreeModule$$$add(comparer, k$$2, v$$2, m$$3.fields[3]));
        }
      }

    default:
      {
        return new MapTree$00602(1, "MapOne", k$$2, v$$2);
      }
  }
}
function MapTreeModule$$$find($comparer$$1$$23, $k$$3$$24, $m$$4$$25) {
  MapTreeModule$$$find: while (true) {
    const comparer$$1 = $comparer$$1$$23,
          k$$3 = $k$$3$$24,
          m$$4 = $m$$4$$25;

    switch (m$$4.tag) {
      case 1:
        {
          const c$$2 = comparer$$1.Compare(k$$3, m$$4.fields[0]) | 0;

          if (c$$2 === 0) {
            return m$$4.fields[1];
          } else {
            throw new Error("key not found");
          }
        }

      case 2:
        {
          const c$$3 = comparer$$1.Compare(k$$3, m$$4.fields[0]) | 0;

          if (c$$3 < 0) {
            $comparer$$1$$23 = comparer$$1;
            $k$$3$$24 = k$$3;
            $m$$4$$25 = m$$4.fields[2];
            continue MapTreeModule$$$find;
          } else if (c$$3 === 0) {
            return m$$4.fields[1];
          } else {
            $comparer$$1$$23 = comparer$$1;
            $k$$3$$24 = k$$3;
            $m$$4$$25 = m$$4.fields[3];
            continue MapTreeModule$$$find;
          }
        }

      default:
        {
          throw new Error("key not found");
        }
    }

    break;
  }
}
function MapTreeModule$$$tryFind($comparer$$2$$26, $k$$4$$27, $m$$5$$28) {
  MapTreeModule$$$tryFind: while (true) {
    const comparer$$2 = $comparer$$2$$26,
          k$$4 = $k$$4$$27,
          m$$5 = $m$$5$$28;

    switch (m$$5.tag) {
      case 1:
        {
          const c$$4 = comparer$$2.Compare(k$$4, m$$5.fields[0]) | 0;

          if (c$$4 === 0) {
            return Object(_Option_js__WEBPACK_IMPORTED_MODULE_2__["some"])(m$$5.fields[1]);
          } else {
            return undefined;
          }
        }

      case 2:
        {
          const c$$5 = comparer$$2.Compare(k$$4, m$$5.fields[0]) | 0;

          if (c$$5 < 0) {
            $comparer$$2$$26 = comparer$$2;
            $k$$4$$27 = k$$4;
            $m$$5$$28 = m$$5.fields[2];
            continue MapTreeModule$$$tryFind;
          } else if (c$$5 === 0) {
            return Object(_Option_js__WEBPACK_IMPORTED_MODULE_2__["some"])(m$$5.fields[1]);
          } else {
            $comparer$$2$$26 = comparer$$2;
            $k$$4$$27 = k$$4;
            $m$$5$$28 = m$$5.fields[3];
            continue MapTreeModule$$$tryFind;
          }
        }

      default:
        {
          return undefined;
        }
    }

    break;
  }
}
function MapTreeModule$$$partition1(comparer$$3, f, k$$5, v$$3, acc1, acc2) {
  if (f(k$$5, v$$3)) {
    return [MapTreeModule$$$add(comparer$$3, k$$5, v$$3, acc1), acc2];
  } else {
    return [acc1, MapTreeModule$$$add(comparer$$3, k$$5, v$$3, acc2)];
  }
}
function MapTreeModule$$$partitionAux($comparer$$4$$35, $f$$1$$36, $s$$37, $acc_0$$38, $acc_1$$39) {
  MapTreeModule$$$partitionAux: while (true) {
    const comparer$$4 = $comparer$$4$$35,
          f$$1 = $f$$1$$36,
          s = $s$$37,
          acc_0 = $acc_0$$38,
          acc_1 = $acc_1$$39;

    switch (s.tag) {
      case 1:
        {
          return MapTreeModule$$$partition1(comparer$$4, f$$1, s.fields[0], s.fields[1], acc_0, acc_1);
        }

      case 2:
        {
          const acc$$2 = MapTreeModule$$$partitionAux(comparer$$4, f$$1, s.fields[3], acc_0, acc_1);
          const acc$$3 = MapTreeModule$$$partition1(comparer$$4, f$$1, s.fields[0], s.fields[1], acc$$2[0], acc$$2[1]);
          $comparer$$4$$35 = comparer$$4;
          $f$$1$$36 = f$$1;
          $s$$37 = s.fields[2];
          $acc_0$$38 = acc$$3[0];
          $acc_1$$39 = acc$$3[1];
          continue MapTreeModule$$$partitionAux;
        }

      default:
        {
          return [acc_0, acc_1];
        }
    }

    break;
  }
}
function MapTreeModule$$$partition(comparer$$5, f$$2, s$$1) {
  return MapTreeModule$$$partitionAux(comparer$$5, f$$2, s$$1, MapTreeModule$$$empty(), MapTreeModule$$$empty());
}
function MapTreeModule$$$filter1(comparer$$6, f$$3, k$$8, v$$6, acc$$4) {
  if (f$$3(k$$8, v$$6)) {
    return MapTreeModule$$$add(comparer$$6, k$$8, v$$6, acc$$4);
  } else {
    return acc$$4;
  }
}
function MapTreeModule$$$filterAux($comparer$$7$$48, $f$$4$$49, $s$$2$$50, $acc$$5$$51) {
  MapTreeModule$$$filterAux: while (true) {
    const comparer$$7 = $comparer$$7$$48,
          f$$4 = $f$$4$$49,
          s$$2 = $s$$2$$50,
          acc$$5 = $acc$$5$$51;

    switch (s$$2.tag) {
      case 1:
        {
          return MapTreeModule$$$filter1(comparer$$7, f$$4, s$$2.fields[0], s$$2.fields[1], acc$$5);
        }

      case 2:
        {
          const acc$$6 = MapTreeModule$$$filterAux(comparer$$7, f$$4, s$$2.fields[2], acc$$5);
          const acc$$7 = MapTreeModule$$$filter1(comparer$$7, f$$4, s$$2.fields[0], s$$2.fields[1], acc$$6);
          $comparer$$7$$48 = comparer$$7;
          $f$$4$$49 = f$$4;
          $s$$2$$50 = s$$2.fields[3];
          $acc$$5$$51 = acc$$7;
          continue MapTreeModule$$$filterAux;
        }

      default:
        {
          return acc$$5;
        }
    }

    break;
  }
}
function MapTreeModule$$$filter(comparer$$8, f$$5, s$$3) {
  return MapTreeModule$$$filterAux(comparer$$8, f$$5, s$$3, MapTreeModule$$$empty());
}
function MapTreeModule$$$spliceOutSuccessor(m$$6) {
  switch (m$$6.tag) {
    case 1:
      {
        return [m$$6.fields[0], m$$6.fields[1], new MapTree$00602(0, "MapEmpty")];
      }

    case 2:
      {
        if (m$$6.fields[2].tag === 0) {
          return [m$$6.fields[0], m$$6.fields[1], m$$6.fields[3]];
        } else {
          const patternInput = MapTreeModule$$$spliceOutSuccessor(m$$6.fields[2]);
          return [patternInput[0], patternInput[1], MapTreeModule$$$mk(patternInput[2], m$$6.fields[0], m$$6.fields[1], m$$6.fields[3])];
        }
      }

    default:
      {
        throw new Error("internal error: Map.spliceOutSuccessor");
      }
  }
}
function MapTreeModule$$$remove(comparer$$9, k$$11, m$$7) {
  switch (m$$7.tag) {
    case 1:
      {
        const c$$6 = comparer$$9.Compare(k$$11, m$$7.fields[0]) | 0;

        if (c$$6 === 0) {
          return new MapTree$00602(0, "MapEmpty");
        } else {
          return m$$7;
        }
      }

    case 2:
      {
        const c$$7 = comparer$$9.Compare(k$$11, m$$7.fields[0]) | 0;

        if (c$$7 < 0) {
          return MapTreeModule$$$rebalance(MapTreeModule$$$remove(comparer$$9, k$$11, m$$7.fields[2]), m$$7.fields[0], m$$7.fields[1], m$$7.fields[3]);
        } else if (c$$7 === 0) {
          if (m$$7.fields[2].tag === 0) {
            return m$$7.fields[3];
          } else if (m$$7.fields[3].tag === 0) {
            return m$$7.fields[2];
          } else {
            const patternInput$$1 = MapTreeModule$$$spliceOutSuccessor(m$$7.fields[3]);
            return MapTreeModule$$$mk(m$$7.fields[2], patternInput$$1[0], patternInput$$1[1], patternInput$$1[2]);
          }
        } else {
          return MapTreeModule$$$rebalance(m$$7.fields[2], m$$7.fields[0], m$$7.fields[1], MapTreeModule$$$remove(comparer$$9, k$$11, m$$7.fields[3]));
        }
      }

    default:
      {
        return MapTreeModule$$$empty();
      }
  }
}
function MapTreeModule$$$mem($comparer$$10$$59, $k$$12$$60, $m$$8$$61) {
  MapTreeModule$$$mem: while (true) {
    const comparer$$10 = $comparer$$10$$59,
          k$$12 = $k$$12$$60,
          m$$8 = $m$$8$$61;

    switch (m$$8.tag) {
      case 1:
        {
          return comparer$$10.Compare(k$$12, m$$8.fields[0]) === 0;
        }

      case 2:
        {
          const c$$8 = comparer$$10.Compare(k$$12, m$$8.fields[0]) | 0;

          if (c$$8 < 0) {
            $comparer$$10$$59 = comparer$$10;
            $k$$12$$60 = k$$12;
            $m$$8$$61 = m$$8.fields[2];
            continue MapTreeModule$$$mem;
          } else if (c$$8 === 0) {
            return true;
          } else {
            $comparer$$10$$59 = comparer$$10;
            $k$$12$$60 = k$$12;
            $m$$8$$61 = m$$8.fields[3];
            continue MapTreeModule$$$mem;
          }
        }

      default:
        {
          return false;
        }
    }

    break;
  }
}
function MapTreeModule$$$iter($f$$6$$62, $m$$9$$63) {
  MapTreeModule$$$iter: while (true) {
    const f$$6 = $f$$6$$62,
          m$$9 = $m$$9$$63;

    switch (m$$9.tag) {
      case 1:
        {
          f$$6(m$$9.fields[0], m$$9.fields[1]);
          break;
        }

      case 2:
        {
          MapTreeModule$$$iter(f$$6, m$$9.fields[2]);
          f$$6(m$$9.fields[0], m$$9.fields[1]);
          $f$$6$$62 = f$$6;
          $m$$9$$63 = m$$9.fields[3];
          continue MapTreeModule$$$iter;
          break;
        }

      default:
        {
          void null;
        }
    }

    break;
  }
}
function MapTreeModule$$$tryPick($f$$7$$64, $m$$10$$65) {
  MapTreeModule$$$tryPick: while (true) {
    const f$$7 = $f$$7$$64,
          m$$10 = $m$$10$$65;

    switch (m$$10.tag) {
      case 1:
        {
          return f$$7(m$$10.fields[0], m$$10.fields[1]);
        }

      case 2:
        {
          const matchValue$$2 = MapTreeModule$$$tryPick(f$$7, m$$10.fields[2]);

          if (matchValue$$2 == null) {
            const matchValue$$3 = f$$7(m$$10.fields[0], m$$10.fields[1]);

            if (matchValue$$3 == null) {
              $f$$7$$64 = f$$7;
              $m$$10$$65 = m$$10.fields[3];
              continue MapTreeModule$$$tryPick;
            } else {
              return matchValue$$3;
            }
          } else {
            return matchValue$$2;
          }
        }

      default:
        {
          return undefined;
        }
    }

    break;
  }
}
function MapTreeModule$$$exists($f$$8$$66, $m$$11$$67) {
  MapTreeModule$$$exists: while (true) {
    const f$$8 = $f$$8$$66,
          m$$11 = $m$$11$$67;

    switch (m$$11.tag) {
      case 1:
        {
          return f$$8(m$$11.fields[0], m$$11.fields[1]);
        }

      case 2:
        {
          if (MapTreeModule$$$exists(f$$8, m$$11.fields[2]) ? true : f$$8(m$$11.fields[0], m$$11.fields[1])) {
            return true;
          } else {
            $f$$8$$66 = f$$8;
            $m$$11$$67 = m$$11.fields[3];
            continue MapTreeModule$$$exists;
          }
        }

      default:
        {
          return false;
        }
    }

    break;
  }
}
function MapTreeModule$$$forall($f$$9$$68, $m$$12$$69) {
  MapTreeModule$$$forall: while (true) {
    const f$$9 = $f$$9$$68,
          m$$12 = $m$$12$$69;

    switch (m$$12.tag) {
      case 1:
        {
          return f$$9(m$$12.fields[0], m$$12.fields[1]);
        }

      case 2:
        {
          if (MapTreeModule$$$forall(f$$9, m$$12.fields[2]) ? f$$9(m$$12.fields[0], m$$12.fields[1]) : false) {
            $f$$9$$68 = f$$9;
            $m$$12$$69 = m$$12.fields[3];
            continue MapTreeModule$$$forall;
          } else {
            return false;
          }
        }

      default:
        {
          return true;
        }
    }

    break;
  }
}
function MapTreeModule$$$map(f$$10, m$$13) {
  switch (m$$13.tag) {
    case 1:
      {
        return new MapTree$00602(1, "MapOne", m$$13.fields[0], f$$10(m$$13.fields[1]));
      }

    case 2:
      {
        const l2 = MapTreeModule$$$map(f$$10, m$$13.fields[2]);
        const v2$$16 = f$$10(m$$13.fields[1]);
        const r2 = MapTreeModule$$$map(f$$10, m$$13.fields[3]);
        return new MapTree$00602(2, "MapNode", m$$13.fields[0], v2$$16, l2, r2, m$$13.fields[4]);
      }

    default:
      {
        return MapTreeModule$$$empty();
      }
  }
}
function MapTreeModule$$$mapi(f$$11, m$$14) {
  switch (m$$14.tag) {
    case 1:
      {
        return new MapTree$00602(1, "MapOne", m$$14.fields[0], f$$11(m$$14.fields[0], m$$14.fields[1]));
      }

    case 2:
      {
        const l2$$1 = MapTreeModule$$$mapi(f$$11, m$$14.fields[2]);
        const v2$$17 = f$$11(m$$14.fields[0], m$$14.fields[1]);
        const r2$$1 = MapTreeModule$$$mapi(f$$11, m$$14.fields[3]);
        return new MapTree$00602(2, "MapNode", m$$14.fields[0], v2$$17, l2$$1, r2$$1, m$$14.fields[4]);
      }

    default:
      {
        return MapTreeModule$$$empty();
      }
  }
}
function MapTreeModule$$$foldBack($f$$12$$74, $m$$15$$75, $x$$1$$76) {
  MapTreeModule$$$foldBack: while (true) {
    const f$$12 = $f$$12$$74,
          m$$15 = $m$$15$$75,
          x$$1 = $x$$1$$76;

    switch (m$$15.tag) {
      case 1:
        {
          return f$$12(m$$15.fields[0], m$$15.fields[1], x$$1);
        }

      case 2:
        {
          const x$$2 = MapTreeModule$$$foldBack(f$$12, m$$15.fields[3], x$$1);
          const x$$3 = f$$12(m$$15.fields[0], m$$15.fields[1], x$$2);
          $f$$12$$74 = f$$12;
          $m$$15$$75 = m$$15.fields[2];
          $x$$1$$76 = x$$3;
          continue MapTreeModule$$$foldBack;
        }

      default:
        {
          return x$$1;
        }
    }

    break;
  }
}
function MapTreeModule$$$fold($f$$13$$77, $x$$4$$78, $m$$16$$79) {
  MapTreeModule$$$fold: while (true) {
    const f$$13 = $f$$13$$77,
          x$$4 = $x$$4$$78,
          m$$16 = $m$$16$$79;

    switch (m$$16.tag) {
      case 1:
        {
          return f$$13(x$$4, m$$16.fields[0], m$$16.fields[1]);
        }

      case 2:
        {
          const x$$5 = MapTreeModule$$$fold(f$$13, x$$4, m$$16.fields[2]);
          const x$$6 = f$$13(x$$5, m$$16.fields[0], m$$16.fields[1]);
          $f$$13$$77 = f$$13;
          $x$$4$$78 = x$$6;
          $m$$16$$79 = m$$16.fields[3];
          continue MapTreeModule$$$fold;
        }

      default:
        {
          return x$$4;
        }
    }

    break;
  }
}
function MapTreeModule$$$foldFromTo(comparer$$11, lo, hi, f$$14, m$$17, x$$7) {
  switch (m$$17.tag) {
    case 1:
      {
        const cLoKey = comparer$$11.Compare(lo, m$$17.fields[0]) | 0;
        const cKeyHi = comparer$$11.Compare(m$$17.fields[0], hi) | 0;
        const x$$8 = (cLoKey <= 0 ? cKeyHi <= 0 : false) ? f$$14(m$$17.fields[0], m$$17.fields[1], x$$7) : x$$7;
        return x$$8;
      }

    case 2:
      {
        const cLoKey$$1 = comparer$$11.Compare(lo, m$$17.fields[0]) | 0;
        const cKeyHi$$1 = comparer$$11.Compare(m$$17.fields[0], hi) | 0;
        const x$$9 = cLoKey$$1 < 0 ? MapTreeModule$$$foldFromTo(comparer$$11, lo, hi, f$$14, m$$17.fields[2], x$$7) : x$$7;
        const x$$10 = (cLoKey$$1 <= 0 ? cKeyHi$$1 <= 0 : false) ? f$$14(m$$17.fields[0], m$$17.fields[1], x$$9) : x$$9;
        const x$$11 = cKeyHi$$1 < 0 ? MapTreeModule$$$foldFromTo(comparer$$11, lo, hi, f$$14, m$$17.fields[3], x$$10) : x$$10;
        return x$$11;
      }

    default:
      {
        return x$$7;
      }
  }
}
function MapTreeModule$$$foldSection(comparer$$12, lo$$1, hi$$1, f$$15, m$$18, x$$12) {
  if (comparer$$12.Compare(lo$$1, hi$$1) === 1) {
    return x$$12;
  } else {
    return MapTreeModule$$$foldFromTo(comparer$$12, lo$$1, hi$$1, f$$15, m$$18, x$$12);
  }
}
function MapTreeModule$$$loop($m$$19$$92, $acc$$8$$93) {
  MapTreeModule$$$loop: while (true) {
    const m$$19 = $m$$19$$92,
          acc$$8 = $acc$$8$$93;

    switch (m$$19.tag) {
      case 1:
        {
          return new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"]([m$$19.fields[0], m$$19.fields[1]], acc$$8);
        }

      case 2:
        {
          $m$$19$$92 = m$$19.fields[2];
          $acc$$8$$93 = new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"]([m$$19.fields[0], m$$19.fields[1]], MapTreeModule$$$loop(m$$19.fields[3], acc$$8));
          continue MapTreeModule$$$loop;
        }

      default:
        {
          return acc$$8;
        }
    }

    break;
  }
}
function MapTreeModule$$$toList(m$$20) {
  return MapTreeModule$$$loop(m$$20, new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"]());
}
function MapTreeModule$$$ofList(comparer$$13, l$$20) {
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["fold"])(function (acc$$9, tupledArg) {
    return MapTreeModule$$$add(comparer$$13, tupledArg[0], tupledArg[1], acc$$9);
  }, MapTreeModule$$$empty(), l$$20);
}
function MapTreeModule$$$mkFromEnumerator($comparer$$14$$97, $acc$$10$$98, $e$$99) {
  MapTreeModule$$$mkFromEnumerator: while (true) {
    const comparer$$14 = $comparer$$14$$97,
          acc$$10 = $acc$$10$$98,
          e = $e$$99;

    if (e.MoveNext()) {
      const patternInput$$2 = e.Current;
      $comparer$$14$$97 = comparer$$14;
      $acc$$10$$98 = MapTreeModule$$$add(comparer$$14, patternInput$$2[0], patternInput$$2[1], acc$$10);
      $e$$99 = e;
      continue MapTreeModule$$$mkFromEnumerator;
    } else {
      return acc$$10;
    }

    break;
  }
}
function MapTreeModule$$$ofArray(comparer$$15, arr) {
  let res$$2 = MapTreeModule$$$empty();

  for (let i = 0; i <= arr.length - 1; i++) {
    const patternInput$$3 = arr[i];
    res$$2 = MapTreeModule$$$add(comparer$$15, patternInput$$3[0], patternInput$$3[1], res$$2);
  }

  return res$$2;
}
function MapTreeModule$$$ofSeq(comparer$$16, c$$9) {
  const ie = Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["getEnumerator"])(c$$9);

  try {
    return MapTreeModule$$$mkFromEnumerator(comparer$$16, MapTreeModule$$$empty(), ie);
  } finally {
    if (Object(_Util_js__WEBPACK_IMPORTED_MODULE_4__["isDisposable"])(ie)) {
      ie.Dispose();
    } else {
      void null;
    }
  }
}
function MapTreeModule$$$copyToArray(s$$4, arr$$1, i$$1) {
  let j = i$$1 | 0;
  MapTreeModule$$$iter(function f$$16(x$$15, y$$2) {
    arr$$1[j] = [x$$15, y$$2];
    j = j + 1;
  }, s$$4);
}
const MapTreeModule$002EMapIterator$00602 = Object(_Types_js__WEBPACK_IMPORTED_MODULE_0__["declare"])(function Map_MapTreeModule_MapIterator(stack, started) {
  this.stack = stack;
  this.started = started;
}, _Types_js__WEBPACK_IMPORTED_MODULE_0__["Record"]);
function MapTreeModule$002EMapIterator$00602$reflection($gen$$109, $gen$$110) {
  return Object(_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["record_type"])("Map.MapTreeModule.MapIterator`2", [$gen$$109, $gen$$110], MapTreeModule$002EMapIterator$00602, () => [["stack", Object(_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["list_type"])(MapTree$00602$reflection($gen$$109, $gen$$110))], ["started", _Reflection_js__WEBPACK_IMPORTED_MODULE_1__["bool_type"]]]);
}
function MapTreeModule$$$collapseLHS($stack$$111) {
  MapTreeModule$$$collapseLHS: while (true) {
    const stack = $stack$$111;

    if (stack.tail != null) {
      if (stack.head.tag === 1) {
        return stack;
      } else if (stack.head.tag === 2) {
        $stack$$111 = new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](stack.head.fields[2], new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](new MapTree$00602(1, "MapOne", stack.head.fields[0], stack.head.fields[1]), new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](stack.head.fields[3], stack.tail)));
        continue MapTreeModule$$$collapseLHS;
      } else {
        $stack$$111 = stack.tail;
        continue MapTreeModule$$$collapseLHS;
      }
    } else {
      return new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"]();
    }

    break;
  }
}
function MapTreeModule$$$mkIterator(s$$5) {
  return new MapTreeModule$002EMapIterator$00602(MapTreeModule$$$collapseLHS(new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](s$$5, new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"]())), false);
}
function MapTreeModule$$$notStarted() {
  throw new Error("enumeration not started");
}
function MapTreeModule$$$alreadyFinished() {
  throw new Error("enumeration already finished");
}
function MapTreeModule$$$current(i$$2) {
  if (i$$2.started) {
    const matchValue$$4 = i$$2.stack;

    if (matchValue$$4.tail == null) {
      return MapTreeModule$$$alreadyFinished();
    } else if (matchValue$$4.head.tag === 1) {
      return [matchValue$$4.head.fields[0], matchValue$$4.head.fields[1]];
    } else {
      throw new Error("Please report error: Map iterator, unexpected stack for current");
    }
  } else {
    return MapTreeModule$$$notStarted();
  }
}
function MapTreeModule$$$moveNext(i$$3) {
  if (i$$3.started) {
    const matchValue$$5 = i$$3.stack;

    if (matchValue$$5.tail == null) {
      return false;
    } else if (matchValue$$5.head.tag === 1) {
      i$$3.stack = MapTreeModule$$$collapseLHS(matchValue$$5.tail);
      return !(i$$3.stack.tail == null);
    } else {
      throw new Error("Please report error: Map iterator, unexpected stack for moveNext");
    }
  } else {
    i$$3.started = true;
    return !(i$$3.stack.tail == null);
  }
}
const MapTreeModule$002EmkIEnumerator$0027$00602 = Object(_Types_js__WEBPACK_IMPORTED_MODULE_0__["declare"])(function Map_MapTreeModule_mkIEnumerator_(s$$6) {
  const $this$$1 = this;
  $this$$1.s = s$$6;
  $this$$1.i = MapTreeModule$$$mkIterator($this$$1.s);
  void null;
});
function MapTreeModule$002EmkIEnumerator$0027$00602$reflection($gen$$115, $gen$$116) {
  return Object(_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["class_type"])("Map.MapTreeModule.mkIEnumerator'`2", [$gen$$115, $gen$$116], MapTreeModule$002EmkIEnumerator$0027$00602);
}
function MapTreeModule$002EmkIEnumerator$0027$00602$$$$002Ector$$Z26BC498C(s$$6) {
  return this instanceof MapTreeModule$002EmkIEnumerator$0027$00602 ? MapTreeModule$002EmkIEnumerator$0027$00602.call(this, s$$6) : new MapTreeModule$002EmkIEnumerator$0027$00602(s$$6);
}
Object.defineProperty(MapTreeModule$002EmkIEnumerator$0027$00602.prototype, "Current", {
  "get": function () {
    const __ = this;
    return MapTreeModule$$$current(__.i);
  }
});

MapTreeModule$002EmkIEnumerator$0027$00602.prototype.MoveNext = function () {
  const __$$1 = this;
  return MapTreeModule$$$moveNext(__$$1.i);
};

MapTreeModule$002EmkIEnumerator$0027$00602.prototype.Reset = function () {
  const __$$2 = this;
  __$$2.i = MapTreeModule$$$mkIterator(__$$2.s);
};

MapTreeModule$002EmkIEnumerator$0027$00602.prototype.Dispose = function () {
  void null;
};

function MapTreeModule$$$mkIEnumerator(s$$7) {
  return MapTreeModule$002EmkIEnumerator$0027$00602$$$$002Ector$$Z26BC498C(s$$7);
}
function MapTreeModule$$$toSeq(s$$8) {
  const en = MapTreeModule$$$mkIEnumerator(s$$8);
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["unfold"])(function generator(en$$1) {
    if (en$$1.MoveNext()) {
      return [en$$1.Current, en$$1];
    } else {
      return undefined;
    }
  }, en);
}
const FSharpMap = Object(_Types_js__WEBPACK_IMPORTED_MODULE_0__["declare"])(function Map_Map(comparer$$17, tree) {
  const $this$$2 = this;
  $this$$2.comparer = comparer$$17;
  $this$$2.tree = tree;
  void null;
});
function FSharpMap$reflection($gen$$120, $gen$$121) {
  return Object(_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["class_type"])("Map.FSharpMap", [$gen$$120, $gen$$121], FSharpMap);
}
function FSharpMap$$$$002Ector$$58ADD115(comparer$$17, tree) {
  return this instanceof FSharpMap ? FSharpMap.call(this, comparer$$17, tree) : new FSharpMap(comparer$$17, tree);
}
function FSharpMap$$get_Comparer(__$$4) {
  return __$$4.comparer;
}
function FSharpMap$$get_Tree(__$$5) {
  return __$$5.tree;
}
function FSharpMap$$Add$$5BDDA1(__$$6, k$$28, v$$24) {
  return FSharpMap$$$$002Ector$$58ADD115(__$$6.comparer, MapTreeModule$$$add(__$$6.comparer, k$$28, v$$24, __$$6.tree));
}
function FSharpMap$$get_IsEmpty(__$$7) {
  return MapTreeModule$$$isEmpty(__$$7.tree);
}
function FSharpMap$$get_Item$$2B595(__$$8, k$$29) {
  return MapTreeModule$$$find(__$$8.comparer, k$$29, __$$8.tree);
}
function FSharpMap$$TryGetValue$$5BDDA1(__$$9, k$$30, defValue) {
  const matchValue$$6 = MapTreeModule$$$tryFind(__$$9.comparer, k$$30, __$$9.tree);

  if (matchValue$$6 == null) {
    return [false, defValue];
  } else {
    const v$$25 = Object(_Option_js__WEBPACK_IMPORTED_MODULE_2__["value"])(matchValue$$6);
    return [true, v$$25];
  }
}
function FSharpMap$$TryPick$$72321DD7(__$$10, f$$17) {
  return MapTreeModule$$$tryPick(f$$17, __$$10.tree);
}
function FSharpMap$$Exists$$Z395DDC35(__$$11, f$$18) {
  return MapTreeModule$$$exists(f$$18, __$$11.tree);
}
function FSharpMap$$Filter$$Z395DDC35(__$$12, f$$19) {
  return FSharpMap$$$$002Ector$$58ADD115(__$$12.comparer, MapTreeModule$$$filter(__$$12.comparer, f$$19, __$$12.tree));
}
function FSharpMap$$ForAll$$Z395DDC35(__$$13, f$$20) {
  return MapTreeModule$$$forall(f$$20, __$$13.tree);
}
function FSharpMap$$Fold(__$$14, f$$21, acc$$11) {
  return MapTreeModule$$$foldBack(f$$21, __$$14.tree, acc$$11);
}
function FSharpMap$$FoldSection(__$$15, lo$$2, hi$$2, f$$22, acc$$12) {
  return MapTreeModule$$$foldSection(__$$15.comparer, lo$$2, hi$$2, f$$22, __$$15.tree, acc$$12);
}
function FSharpMap$$Iterate$$1DCFB91D(__$$16, f$$23) {
  MapTreeModule$$$iter(f$$23, __$$16.tree);
}
function FSharpMap$$MapRange$$6DC7247(__$$17, f$$24) {
  return FSharpMap$$$$002Ector$$58ADD115(__$$17.comparer, MapTreeModule$$$map(f$$24, __$$17.tree));
}
function FSharpMap$$Map$$Z6F6B671C(__$$18, f$$25) {
  return FSharpMap$$$$002Ector$$58ADD115(__$$18.comparer, MapTreeModule$$$mapi(f$$25, __$$18.tree));
}
function FSharpMap$$Partition$$Z395DDC35(__$$19, f$$26) {
  const patternInput$$4 = MapTreeModule$$$partition(__$$19.comparer, f$$26, __$$19.tree);
  return [FSharpMap$$$$002Ector$$58ADD115(__$$19.comparer, patternInput$$4[0]), FSharpMap$$$$002Ector$$58ADD115(__$$19.comparer, patternInput$$4[1])];
}
function FSharpMap$$get_Count(__$$20) {
  return MapTreeModule$$$size(__$$20.tree);
}
function FSharpMap$$ContainsKey$$2B595(__$$21, k$$31) {
  return MapTreeModule$$$mem(__$$21.comparer, k$$31, __$$21.tree);
}
function FSharpMap$$Remove$$2B595(__$$22, k$$32) {
  return FSharpMap$$$$002Ector$$58ADD115(__$$22.comparer, MapTreeModule$$$remove(__$$22.comparer, k$$32, __$$22.tree));
}
function FSharpMap$$TryFind$$2B595(__$$23, k$$33) {
  return MapTreeModule$$$tryFind(__$$23.comparer, k$$33, __$$23.tree);
}
function FSharpMap$$ToList(__$$24) {
  return MapTreeModule$$$toList(__$$24.tree);
}

FSharpMap.prototype.toString = function () {
  const this$ = this;
  let str;
  let strings;
  strings = Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["map"])(function toStr(kv) {
    return Object(_String_js__WEBPACK_IMPORTED_MODULE_5__["format"])("({0}, {1})", kv[0], kv[1]);
  }, this$);
  str = Object(_String_js__WEBPACK_IMPORTED_MODULE_5__["join"])("; ", strings);
  return "map [" + str + "]";
};

FSharpMap.prototype.GetHashCode = function () {
  const this$$$1 = this;

  const combineHash = function combineHash(x$$16, y$$3) {
    return (x$$16 << 1) + y$$3 + 631;
  };

  let res$$3 = 0;
  const e$$1 = MapTreeModule$$$mkIEnumerator(FSharpMap$$get_Tree(this$$$1));

  while (e$$1.MoveNext()) {
    const patternInput$$5 = e$$1.Current;
    const activePatternResult3682 = patternInput$$5;
    res$$3 = combineHash(res$$3, Object(_Util_js__WEBPACK_IMPORTED_MODULE_4__["structuralHash"])(activePatternResult3682[0]));
    res$$3 = combineHash(res$$3, Object(_Util_js__WEBPACK_IMPORTED_MODULE_4__["structuralHash"])(activePatternResult3682[1]));
  }

  return Math.abs(res$$3) | 0;
};

FSharpMap.prototype.Equals = function (that) {
  const this$$$2 = this;
  return this$$$2.CompareTo(that) === 0;
};

FSharpMap.prototype[Symbol.iterator] = function () {
  const __$$25 = this;
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["toIterator"])(MapTreeModule$$$mkIEnumerator(__$$25.tree));
};

FSharpMap.prototype.CompareTo = function (obj) {
  const m$$22 = this;
  let res$$4 = 0;
  let finished = false;
  const e1 = MapTreeModule$$$mkIEnumerator(FSharpMap$$get_Tree(m$$22));

  try {
    const e2 = MapTreeModule$$$mkIEnumerator(FSharpMap$$get_Tree(obj));

    try {
      while (!finished ? res$$4 === 0 : false) {
        const matchValue$$7 = [e1.MoveNext(), e2.MoveNext()];

        if (matchValue$$7[0]) {
          if (matchValue$$7[1]) {
            const kvp1 = e1.Current;
            const kvp2 = e2.Current;
            const c$$10 = m$$22.comparer.Compare(kvp1[0], kvp2[0]) | 0;
            res$$4 = c$$10 !== 0 ? c$$10 : Object(_Util_js__WEBPACK_IMPORTED_MODULE_4__["compare"])(kvp1[1], kvp2[1]);
          } else {
            res$$4 = 1;
          }
        } else if (matchValue$$7[1]) {
          res$$4 = -1;
        } else {
          finished = true;
        }
      }

      return res$$4 | 0;
    } finally {
      if (Object(_Util_js__WEBPACK_IMPORTED_MODULE_4__["isDisposable"])(e2)) {
        e2.Dispose();
      } else {
        void null;
      }
    }
  } finally {
    if (Object(_Util_js__WEBPACK_IMPORTED_MODULE_4__["isDisposable"])(e1)) {
      e1.Dispose();
    } else {
      void null;
    }
  }
};

Object.defineProperty(FSharpMap.prototype, "size", {
  "get": function () {
    const this$$$3 = this;
    return FSharpMap$$get_Count(this$$$3) | 0;
  }
});

FSharpMap.prototype.clear = function () {
  throw new Error("Map cannot be mutated");
};

FSharpMap.prototype.delete = function (_arg1$$1) {
  throw new Error("Map cannot be mutated");
};

FSharpMap.prototype.entries = function () {
  const this$$$4 = this;
  return MapTreeModule$$$toSeq(FSharpMap$$get_Tree(this$$$4));
};

FSharpMap.prototype.get = function (k$$34) {
  const this$$$5 = this;
  return FSharpMap$$get_Item$$2B595(this$$$5, k$$34);
};

FSharpMap.prototype.has = function (k$$35) {
  const this$$$6 = this;
  return FSharpMap$$ContainsKey$$2B595(this$$$6, k$$35);
};

FSharpMap.prototype.keys = function () {
  const this$$$7 = this;
  const source$$1 = MapTreeModule$$$toSeq(FSharpMap$$get_Tree(this$$$7));
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["map"])(function mapping(kv$$1) {
    return kv$$1[0];
  }, source$$1);
};

FSharpMap.prototype.set = function (k$$36, v$$26) {
  throw new Error("Map cannot be mutated");
};

FSharpMap.prototype.values = function () {
  const this$$$8 = this;
  const source$$2 = MapTreeModule$$$toSeq(FSharpMap$$get_Tree(this$$$8));
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["map"])(function mapping$$1(kv$$2) {
    return kv$$2[1];
  }, source$$2);
};

function isEmpty(m$$23) {
  return FSharpMap$$get_IsEmpty(m$$23);
}
function add(k$$37, v$$27, m$$24) {
  return FSharpMap$$Add$$5BDDA1(m$$24, k$$37, v$$27);
}
function find(k$$38, m$$25) {
  return FSharpMap$$get_Item$$2B595(m$$25, k$$38);
}
function tryFind(k$$39, m$$26) {
  return FSharpMap$$TryFind$$2B595(m$$26, k$$39);
}
function remove(k$$40, m$$27) {
  return FSharpMap$$Remove$$2B595(m$$27, k$$40);
}
function containsKey(k$$41, m$$28) {
  return FSharpMap$$ContainsKey$$2B595(m$$28, k$$41);
}
function iterate(f$$27, m$$29) {
  FSharpMap$$Iterate$$1DCFB91D(m$$29, f$$27);
}
function tryPick(f$$28, m$$30) {
  return FSharpMap$$TryPick$$72321DD7(m$$30, f$$28);
}
function pick(f$$29, m$$31) {
  const matchValue$$8 = tryPick(f$$29, m$$31);

  if (matchValue$$8 != null) {
    const res$$5 = Object(_Option_js__WEBPACK_IMPORTED_MODULE_2__["value"])(matchValue$$8);
    return res$$5;
  } else {
    throw new Error("key not found");
  }
}
function exists(f$$30, m$$32) {
  return FSharpMap$$Exists$$Z395DDC35(m$$32, f$$30);
}
function filter(f$$31, m$$33) {
  return FSharpMap$$Filter$$Z395DDC35(m$$33, f$$31);
}
function partition(f$$32, m$$34) {
  return FSharpMap$$Partition$$Z395DDC35(m$$34, f$$32);
}
function forAll(f$$33, m$$35) {
  return FSharpMap$$ForAll$$Z395DDC35(m$$35, f$$33);
}
function mapRange(f$$34, m$$36) {
  return FSharpMap$$MapRange$$6DC7247(m$$36, f$$34);
}
function map(f$$35, m$$37) {
  return FSharpMap$$Map$$Z6F6B671C(m$$37, f$$35);
}
function fold(f$$36, z, m$$38) {
  return MapTreeModule$$$fold(f$$36, z, FSharpMap$$get_Tree(m$$38));
}
function foldBack(f$$37, m$$39, z$$1) {
  return MapTreeModule$$$foldBack(f$$37, FSharpMap$$get_Tree(m$$39), z$$1);
}
function toSeq(m$$40) {
  return MapTreeModule$$$toSeq(FSharpMap$$get_Tree(m$$40));
}
function findKey(f$$38, m$$41) {
  let _arg1$$2;

  const m$$42 = FSharpMap$$get_Tree(m$$41);
  _arg1$$2 = MapTreeModule$$$tryPick(function f$$39(k$$42, v$$28) {
    if (f$$38(k$$42, v$$28)) {
      return Object(_Option_js__WEBPACK_IMPORTED_MODULE_2__["some"])(k$$42);
    } else {
      return undefined;
    }
  }, m$$42);

  if (_arg1$$2 == null) {
    throw new Error("Key not found");
  } else {
    const k$$43 = Object(_Option_js__WEBPACK_IMPORTED_MODULE_2__["value"])(_arg1$$2);
    return k$$43;
  }
}
function tryFindKey(f$$40, m$$43) {
  const m$$44 = FSharpMap$$get_Tree(m$$43);
  return MapTreeModule$$$tryPick(function f$$41(k$$44, v$$29) {
    if (f$$40(k$$44, v$$29)) {
      return Object(_Option_js__WEBPACK_IMPORTED_MODULE_2__["some"])(k$$44);
    } else {
      return undefined;
    }
  }, m$$44);
}
function ofList(l$$22, comparer$$18) {
  return FSharpMap$$$$002Ector$$58ADD115(comparer$$18, MapTreeModule$$$ofList(comparer$$18, l$$22));
}
function ofSeq(l$$23, comparer$$19) {
  return FSharpMap$$$$002Ector$$58ADD115(comparer$$19, MapTreeModule$$$ofSeq(comparer$$19, l$$23));
}
function ofArray(array, comparer$$20) {
  return FSharpMap$$$$002Ector$$58ADD115(comparer$$20, MapTreeModule$$$ofArray(comparer$$20, array));
}
function toList(m$$45) {
  return FSharpMap$$ToList(m$$45);
}
function toArray(m$$46) {
  let res$$6;
  const len = FSharpMap$$get_Count(m$$46) | 0;
  res$$6 = new Array(len);
  MapTreeModule$$$copyToArray(FSharpMap$$get_Tree(m$$46), res$$6, 0);
  return res$$6;
}
function empty(comparer$$21) {
  return FSharpMap$$$$002Ector$$58ADD115(comparer$$21, new MapTree$00602(0, "MapEmpty"));
}
function createMutable(source$$3, comparer$$22) {
  const map$$1 = Object(_MutableMap__WEBPACK_IMPORTED_MODULE_6__["MutableMap$00602$$$$002Ector$$6623D9B3"])(source$$3, comparer$$22);
  return map$$1;
}
function groupBy(projection, xs, comparer$$23) {
  const dict = createMutable(Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["empty"])(), comparer$$23);
  Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["iterate"])(function (v$$30) {
    const key = projection(v$$30);

    if (dict.has(key)) {
      void dict.get(key).push(v$$30);
    } else {
      const value = dict.set(key, [v$$30]);
      void value;
    }
  }, xs);
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["map"])(function mapping$$2(kv$$3) {
    return [kv$$3[0], kv$$3[1]];
  }, dict);
}
function countBy(projection$$1, xs$$1, comparer$$24) {
  const dict$$1 = createMutable(Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["empty"])(), comparer$$24);
  Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["iterate"])(function (value$$1) {
    const key$$1 = projection$$1(value$$1);
    const value$$2 = dict$$1.has(key$$1) ? dict$$1.set(key$$1, dict$$1.get(key$$1) + 1) : dict$$1.set(key$$1, 1);
    void value$$2;
  }, xs$$1);
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["map"])(function mapping$$3(kv$$4) {
    return [kv$$4[0], kv$$4[1]];
  }, dict$$1);
}
function count(m$$47) {
  return FSharpMap$$get_Count(m$$47);
}

/***/ }),

/***/ "./.fable/fable-library.2.13.0/MutableMap.js":
/*!***************************************************!*\
  !*** ./.fable/fable-library.2.13.0/MutableMap.js ***!
  \***************************************************/
/*! exports provided: MutableMap$00602, MutableMap$00602$reflection, MutableMap$00602$$$$002Ector$$6623D9B3, MutableMap$00602$$TryFind$$2B595, MutableMap$00602$$get_Comparer, MutableMap$00602$$Clear, MutableMap$00602$$get_Count, MutableMap$00602$$get_Item$$2B595, MutableMap$00602$$set_Item$$5BDDA1, MutableMap$00602$$Add$$5BDDA1, MutableMap$00602$$ContainsKey$$2B595, MutableMap$00602$$Remove$$2B595 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutableMap$00602", function() { return MutableMap$00602; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutableMap$00602$reflection", function() { return MutableMap$00602$reflection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutableMap$00602$$$$002Ector$$6623D9B3", function() { return MutableMap$00602$$$$002Ector$$6623D9B3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutableMap$00602$$TryFind$$2B595", function() { return MutableMap$00602$$TryFind$$2B595; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutableMap$00602$$get_Comparer", function() { return MutableMap$00602$$get_Comparer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutableMap$00602$$Clear", function() { return MutableMap$00602$$Clear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutableMap$00602$$get_Count", function() { return MutableMap$00602$$get_Count; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutableMap$00602$$get_Item$$2B595", function() { return MutableMap$00602$$get_Item$$2B595; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutableMap$00602$$set_Item$$5BDDA1", function() { return MutableMap$00602$$set_Item$$5BDDA1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutableMap$00602$$Add$$5BDDA1", function() { return MutableMap$00602$$Add$$5BDDA1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutableMap$00602$$ContainsKey$$2B595", function() { return MutableMap$00602$$ContainsKey$$2B595; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutableMap$00602$$Remove$$2B595", function() { return MutableMap$00602$$Remove$$2B595; });
/* harmony import */ var _Types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Types.js */ "./.fable/fable-library.2.13.0/Types.js");
/* harmony import */ var _Seq_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Seq.js */ "./.fable/fable-library.2.13.0/Seq.js");
/* harmony import */ var _Reflection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Reflection.js */ "./.fable/fable-library.2.13.0/Reflection.js");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Util.js */ "./.fable/fable-library.2.13.0/Util.js");
/* harmony import */ var _String_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./String.js */ "./.fable/fable-library.2.13.0/String.js");





const MutableMap$00602 = Object(_Types_js__WEBPACK_IMPORTED_MODULE_0__["declare"])(function Fable_Collections_MutableMap(pairs, comparer) {
  const $this$$1 = this;
  const this$ = new _Types_js__WEBPACK_IMPORTED_MODULE_0__["FSharpRef"](null);
  $this$$1.comparer = comparer;
  this$.contents = $this$$1;
  $this$$1.hashMap = new Map([]);
  $this$$1["init@20-1"] = 1;
  Object(_Seq_js__WEBPACK_IMPORTED_MODULE_1__["iterate"])(function (pair) {
    MutableMap$00602$$Add$$5BDDA1(this$.contents, pair[0], pair[1]);
  }, pairs);
  void null;
});
function MutableMap$00602$reflection($gen$$4, $gen$$5) {
  return Object(_Reflection_js__WEBPACK_IMPORTED_MODULE_2__["class_type"])("Fable.Collections.MutableMap`2", [$gen$$4, $gen$$5], MutableMap$00602);
}
function MutableMap$00602$$$$002Ector$$6623D9B3(pairs, comparer) {
  return this instanceof MutableMap$00602 ? MutableMap$00602.call(this, pairs, comparer) : new MutableMap$00602(pairs, comparer);
}

function MutableMap$00602$$TryFindIndex$$2B595(this$$$1, k) {
  const h = this$$$1.comparer.GetHashCode(k) | 0;
  const matchValue = Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["tryGetValue"])(this$$$1.hashMap, h, null);

  if (matchValue[0]) {
    return [true, h, matchValue[1].findIndex(function (pair$$1) {
      return this$$$1.comparer.Equals(k, pair$$1[0]);
    })];
  } else {
    return [false, h, -1];
  }
}

function MutableMap$00602$$TryFind$$2B595(this$$$2, k$$1) {
  const matchValue$$1 = MutableMap$00602$$TryFindIndex$$2B595(this$$$2, k$$1);
  var $target$$10;

  if (matchValue$$1[0]) {
    if (matchValue$$1[2] > -1) {
      $target$$10 = 0;
    } else {
      $target$$10 = 1;
    }
  } else {
    $target$$10 = 1;
  }

  switch ($target$$10) {
    case 0:
      {
        return Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["getItemFromDict"])(this$$$2.hashMap, matchValue$$1[1])[matchValue$$1[2]];
      }

    case 1:
      {
        return undefined;
      }
  }
}
function MutableMap$00602$$get_Comparer(this$$$3) {
  return this$$$3.comparer;
}
function MutableMap$00602$$Clear(this$$$4) {
  this$$$4.hashMap.clear();
}
function MutableMap$00602$$get_Count(this$$$5) {
  const source = this$$$5.hashMap.values();
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_1__["sumBy"])(function projection(pairs$$2) {
    return pairs$$2.length;
  }, source, {
    GetZero() {
      return 0;
    },

    Add($x$$2, $y$$3) {
      return $x$$2 + $y$$3;
    }

  }) | 0;
}
function MutableMap$00602$$get_Item$$2B595(this$$$6, k$$2) {
  const matchValue$$2 = MutableMap$00602$$TryFind$$2B595(this$$$6, k$$2);

  if (matchValue$$2 != null) {
    const pair$$2 = matchValue$$2;
    return pair$$2[1];
  } else {
    throw new Error("The item was not found in collection");
  }
}
function MutableMap$00602$$set_Item$$5BDDA1(this$$$7, k$$3, v) {
  const matchValue$$3 = MutableMap$00602$$TryFindIndex$$2B595(this$$$7, k$$3);
  var $target$$20;

  if (matchValue$$3[0]) {
    if (matchValue$$3[2] > -1) {
      $target$$20 = 0;
    } else {
      $target$$20 = 1;
    }
  } else {
    $target$$20 = 1;
  }

  switch ($target$$20) {
    case 0:
      {
        Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["getItemFromDict"])(this$$$7.hashMap, matchValue$$3[1])[matchValue$$3[2]] = [k$$3, v];
        break;
      }

    case 1:
      {
        if (matchValue$$3[0]) {
          const value = void Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["getItemFromDict"])(this$$$7.hashMap, matchValue$$3[1]).push([k$$3, v]);
          void null;
        } else {
          this$$$7.hashMap.set(matchValue$$3[1], [[k$$3, v]]);
        }

        break;
      }
  }
}
function MutableMap$00602$$Add$$5BDDA1(this$$$8, k$$4, v$$1) {
  const matchValue$$4 = MutableMap$00602$$TryFindIndex$$2B595(this$$$8, k$$4);
  var $target$$24;

  if (matchValue$$4[0]) {
    if (matchValue$$4[2] > -1) {
      $target$$24 = 0;
    } else {
      $target$$24 = 1;
    }
  } else {
    $target$$24 = 1;
  }

  switch ($target$$24) {
    case 0:
      {
        const msg = Object(_String_js__WEBPACK_IMPORTED_MODULE_4__["format"])("An item with the same key has already been added. Key: {0}", k$$4);
        throw new Error(msg);
        break;
      }

    case 1:
      {
        if (matchValue$$4[0]) {
          const value$$1 = void Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["getItemFromDict"])(this$$$8.hashMap, matchValue$$4[1]).push([k$$4, v$$1]);
          void null;
        } else {
          this$$$8.hashMap.set(matchValue$$4[1], [[k$$4, v$$1]]);
        }

        break;
      }
  }
}
function MutableMap$00602$$ContainsKey$$2B595(this$$$9, k$$5) {
  const matchValue$$5 = MutableMap$00602$$TryFindIndex$$2B595(this$$$9, k$$5);
  var $target$$27;

  if (matchValue$$5[0]) {
    if (matchValue$$5[2] > -1) {
      $target$$27 = 0;
    } else {
      $target$$27 = 1;
    }
  } else {
    $target$$27 = 1;
  }

  switch ($target$$27) {
    case 0:
      {
        return true;
      }

    case 1:
      {
        return false;
      }
  }
}
function MutableMap$00602$$Remove$$2B595(this$$$10, k$$6) {
  const matchValue$$6 = MutableMap$00602$$TryFindIndex$$2B595(this$$$10, k$$6);
  var $target$$30;

  if (matchValue$$6[0]) {
    if (matchValue$$6[2] > -1) {
      $target$$30 = 0;
    } else {
      $target$$30 = 1;
    }
  } else {
    $target$$30 = 1;
  }

  switch ($target$$30) {
    case 0:
      {
        Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["getItemFromDict"])(this$$$10.hashMap, matchValue$$6[1]).splice(matchValue$$6[2], 1);
        return true;
      }

    case 1:
      {
        return false;
      }
  }
}

MutableMap$00602.prototype[Symbol.iterator] = function () {
  var elems;
  const this$$$11 = this;
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_1__["toIterator"])((elems = Object(_Seq_js__WEBPACK_IMPORTED_MODULE_1__["delay"])(function () {
    return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_1__["collect"])(function (pairs$$3) {
      return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_1__["map"])(function (pair$$3) {
        return pair$$3;
      }, pairs$$3);
    }, this$$$11.hashMap.values());
  }), Object(_Seq_js__WEBPACK_IMPORTED_MODULE_1__["getEnumerator"])(elems)));
};

MutableMap$00602.prototype.Add = function (item) {
  const this$$$12 = this;
  MutableMap$00602$$Add$$5BDDA1(this$$$12, item[0], item[1]);
};

MutableMap$00602.prototype.Clear = function () {
  const this$$$13 = this;
  MutableMap$00602$$Clear(this$$$13);
};

MutableMap$00602.prototype.Contains = function (item$$1) {
  var p;
  const this$$$14 = this;
  const matchValue$$7 = MutableMap$00602$$TryFind$$2B595(this$$$14, item$$1[0]);
  var $target$$31;

  if (matchValue$$7 != null) {
    if (p = matchValue$$7, Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["equals"])(p[1], item$$1[1])) {
      $target$$31 = 0;
    } else {
      $target$$31 = 1;
    }
  } else {
    $target$$31 = 1;
  }

  switch ($target$$31) {
    case 0:
      {
        return true;
      }

    case 1:
      {
        return false;
      }
  }
};

MutableMap$00602.prototype.CopyTo = function (array, arrayIndex) {
  const this$$$15 = this;
  Object(_Seq_js__WEBPACK_IMPORTED_MODULE_1__["iterateIndexed"])(function action(i$$10, e) {
    array[arrayIndex + i$$10] = e;
  }, this$$$15);
};

Object.defineProperty(MutableMap$00602.prototype, "Count", {
  "get": function () {
    const this$$$16 = this;
    return MutableMap$00602$$get_Count(this$$$16) | 0;
  }
});
Object.defineProperty(MutableMap$00602.prototype, "IsReadOnly", {
  "get": function () {
    return false;
  }
});

MutableMap$00602.prototype.Remove = function (item$$2) {
  const this$$$18 = this;
  const matchValue$$8 = MutableMap$00602$$TryFind$$2B595(this$$$18, item$$2[0]);

  if (matchValue$$8 != null) {
    const pair$$4 = matchValue$$8;

    if (Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["equals"])(pair$$4[1], item$$2[1])) {
      const value$$2 = MutableMap$00602$$Remove$$2B595(this$$$18, item$$2[0]);
      void value$$2;
    } else {
      void null;
    }

    return true;
  } else {
    return false;
  }
};

Object.defineProperty(MutableMap$00602.prototype, "size", {
  "get": function () {
    const this$$$19 = this;
    return MutableMap$00602$$get_Count(this$$$19) | 0;
  }
});

MutableMap$00602.prototype.clear = function () {
  const this$$$20 = this;
  MutableMap$00602$$Clear(this$$$20);
};

MutableMap$00602.prototype.delete = function (k$$7) {
  const this$$$21 = this;
  return MutableMap$00602$$Remove$$2B595(this$$$21, k$$7);
};

MutableMap$00602.prototype.entries = function () {
  const this$$$22 = this;
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_1__["map"])(function mapping(x) {
    return x;
  }, this$$$22);
};

MutableMap$00602.prototype.get = function (k$$8) {
  const this$$$23 = this;
  return MutableMap$00602$$get_Item$$2B595(this$$$23, k$$8);
};

MutableMap$00602.prototype.has = function (k$$9) {
  const this$$$24 = this;
  return MutableMap$00602$$ContainsKey$$2B595(this$$$24, k$$9);
};

MutableMap$00602.prototype.keys = function () {
  const this$$$25 = this;
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_1__["map"])(function mapping$$1(pair$$5) {
    return pair$$5[0];
  }, this$$$25);
};

MutableMap$00602.prototype.set = function (k$$10, v$$2) {
  const this$$$26 = this;
  MutableMap$00602$$set_Item$$5BDDA1(this$$$26, k$$10, v$$2);
  return this$$$26;
};

MutableMap$00602.prototype.values = function () {
  const this$$$27 = this;
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_1__["map"])(function mapping$$2(pair$$6) {
    return pair$$6[1];
  }, this$$$27);
};

/***/ }),

/***/ "./.fable/fable-library.2.13.0/MutableSet.js":
/*!***************************************************!*\
  !*** ./.fable/fable-library.2.13.0/MutableSet.js ***!
  \***************************************************/
/*! exports provided: MutableSet$00601, MutableSet$00601$reflection, MutableSet$00601$$$$002Ector$$Z6150332D, MutableSet$00601$$get_Comparer, MutableSet$00601$$Clear, MutableSet$00601$$get_Count, MutableSet$00601$$Add$$2B595, MutableSet$00601$$Contains$$2B595, MutableSet$00601$$Remove$$2B595 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutableSet$00601", function() { return MutableSet$00601; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutableSet$00601$reflection", function() { return MutableSet$00601$reflection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutableSet$00601$$$$002Ector$$Z6150332D", function() { return MutableSet$00601$$$$002Ector$$Z6150332D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutableSet$00601$$get_Comparer", function() { return MutableSet$00601$$get_Comparer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutableSet$00601$$Clear", function() { return MutableSet$00601$$Clear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutableSet$00601$$get_Count", function() { return MutableSet$00601$$get_Count; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutableSet$00601$$Add$$2B595", function() { return MutableSet$00601$$Add$$2B595; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutableSet$00601$$Contains$$2B595", function() { return MutableSet$00601$$Contains$$2B595; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutableSet$00601$$Remove$$2B595", function() { return MutableSet$00601$$Remove$$2B595; });
/* harmony import */ var _Types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Types.js */ "./.fable/fable-library.2.13.0/Types.js");
/* harmony import */ var _Seq_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Seq.js */ "./.fable/fable-library.2.13.0/Seq.js");
/* harmony import */ var _Reflection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Reflection.js */ "./.fable/fable-library.2.13.0/Reflection.js");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Util.js */ "./.fable/fable-library.2.13.0/Util.js");
/* harmony import */ var _Option_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Option.js */ "./.fable/fable-library.2.13.0/Option.js");





const MutableSet$00601 = Object(_Types_js__WEBPACK_IMPORTED_MODULE_0__["declare"])(function Fable_Collections_MutableSet(items, comparer) {
  const $this$$1 = this;
  const this$ = new _Types_js__WEBPACK_IMPORTED_MODULE_0__["FSharpRef"](null);
  $this$$1.comparer = comparer;
  this$.contents = $this$$1;
  $this$$1.hashMap = new Map([]);
  $this$$1["init@21-2"] = 1;
  Object(_Seq_js__WEBPACK_IMPORTED_MODULE_1__["iterate"])(function (item) {
    const value = MutableSet$00601$$Add$$2B595(this$.contents, item);
    void value;
  }, items);
  void null;
});
function MutableSet$00601$reflection($gen$$4) {
  return Object(_Reflection_js__WEBPACK_IMPORTED_MODULE_2__["class_type"])("Fable.Collections.MutableSet`1", [$gen$$4], MutableSet$00601);
}
function MutableSet$00601$$$$002Ector$$Z6150332D(items, comparer) {
  return this instanceof MutableSet$00601 ? MutableSet$00601.call(this, items, comparer) : new MutableSet$00601(items, comparer);
}

function MutableSet$00601$$TryFindIndex$$2B595(this$$$1, k) {
  const h = this$$$1.comparer.GetHashCode(k) | 0;
  const matchValue = Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["tryGetValue"])(this$$$1.hashMap, h, null);

  if (matchValue[0]) {
    return [true, h, matchValue[1].findIndex(function (v) {
      return this$$$1.comparer.Equals(k, v);
    })];
  } else {
    return [false, h, -1];
  }
}

function MutableSet$00601$$TryFind$$2B595(this$$$2, k$$1) {
  const matchValue$$1 = MutableSet$00601$$TryFindIndex$$2B595(this$$$2, k$$1);
  var $target$$9;

  if (matchValue$$1[0]) {
    if (matchValue$$1[2] > -1) {
      $target$$9 = 0;
    } else {
      $target$$9 = 1;
    }
  } else {
    $target$$9 = 1;
  }

  switch ($target$$9) {
    case 0:
      {
        return Object(_Option_js__WEBPACK_IMPORTED_MODULE_4__["some"])(Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["getItemFromDict"])(this$$$2.hashMap, matchValue$$1[1])[matchValue$$1[2]]);
      }

    case 1:
      {
        return undefined;
      }
  }
}

function MutableSet$00601$$get_Comparer(this$$$3) {
  return this$$$3.comparer;
}
function MutableSet$00601$$Clear(this$$$4) {
  this$$$4.hashMap.clear();
}
function MutableSet$00601$$get_Count(this$$$5) {
  const source = this$$$5.hashMap.values();
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_1__["sumBy"])(function projection(pairs) {
    return pairs.length;
  }, source, {
    GetZero() {
      return 0;
    },

    Add($x$$2, $y$$3) {
      return $x$$2 + $y$$3;
    }

  }) | 0;
}
function MutableSet$00601$$Add$$2B595(this$$$6, k$$2) {
  const matchValue$$2 = MutableSet$00601$$TryFindIndex$$2B595(this$$$6, k$$2);
  var $target$$16;

  if (matchValue$$2[0]) {
    if (matchValue$$2[2] > -1) {
      $target$$16 = 0;
    } else {
      $target$$16 = 1;
    }
  } else {
    $target$$16 = 1;
  }

  switch ($target$$16) {
    case 0:
      {
        return false;
      }

    case 1:
      {
        if (matchValue$$2[0]) {
          const value$$1 = void Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["getItemFromDict"])(this$$$6.hashMap, matchValue$$2[1]).push(k$$2);
          void null;
          return true;
        } else {
          this$$$6.hashMap.set(matchValue$$2[1], [k$$2]);
          return true;
        }
      }
  }
}
function MutableSet$00601$$Contains$$2B595(this$$$7, k$$3) {
  const matchValue$$3 = MutableSet$00601$$TryFindIndex$$2B595(this$$$7, k$$3);
  var $target$$19;

  if (matchValue$$3[0]) {
    if (matchValue$$3[2] > -1) {
      $target$$19 = 0;
    } else {
      $target$$19 = 1;
    }
  } else {
    $target$$19 = 1;
  }

  switch ($target$$19) {
    case 0:
      {
        return true;
      }

    case 1:
      {
        return false;
      }
  }
}
function MutableSet$00601$$Remove$$2B595(this$$$8, k$$4) {
  const matchValue$$4 = MutableSet$00601$$TryFindIndex$$2B595(this$$$8, k$$4);
  var $target$$22;

  if (matchValue$$4[0]) {
    if (matchValue$$4[2] > -1) {
      $target$$22 = 0;
    } else {
      $target$$22 = 1;
    }
  } else {
    $target$$22 = 1;
  }

  switch ($target$$22) {
    case 0:
      {
        Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["getItemFromDict"])(this$$$8.hashMap, matchValue$$4[1]).splice(matchValue$$4[2], 1);
        return true;
      }

    case 1:
      {
        return false;
      }
  }
}

MutableSet$00601.prototype[Symbol.iterator] = function () {
  var elems;
  const this$$$9 = this;
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_1__["toIterator"])((elems = Object(_Seq_js__WEBPACK_IMPORTED_MODULE_1__["delay"])(function () {
    return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_1__["collect"])(function (values$$1) {
      return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_1__["map"])(function (value$$2) {
        return value$$2;
      }, values$$1);
    }, this$$$9.hashMap.values());
  }), Object(_Seq_js__WEBPACK_IMPORTED_MODULE_1__["getEnumerator"])(elems)));
};

MutableSet$00601.prototype.Add = function (item$$1) {
  const this$$$10 = this;
  const value$$3 = MutableSet$00601$$Add$$2B595(this$$$10, item$$1);
  void value$$3;
};

MutableSet$00601.prototype.Clear = function () {
  const this$$$11 = this;
  MutableSet$00601$$Clear(this$$$11);
};

MutableSet$00601.prototype.Contains = function (item$$2) {
  const this$$$12 = this;
  return MutableSet$00601$$Contains$$2B595(this$$$12, item$$2);
};

MutableSet$00601.prototype.CopyTo = function (array, arrayIndex) {
  const this$$$13 = this;
  Object(_Seq_js__WEBPACK_IMPORTED_MODULE_1__["iterateIndexed"])(function action(i$$8, e) {
    array[arrayIndex + i$$8] = e;
  }, this$$$13);
};

Object.defineProperty(MutableSet$00601.prototype, "Count", {
  "get": function () {
    const this$$$14 = this;
    return MutableSet$00601$$get_Count(this$$$14) | 0;
  }
});
Object.defineProperty(MutableSet$00601.prototype, "IsReadOnly", {
  "get": function () {
    return false;
  }
});

MutableSet$00601.prototype.Remove = function (item$$3) {
  const this$$$16 = this;
  return MutableSet$00601$$Remove$$2B595(this$$$16, item$$3);
};

Object.defineProperty(MutableSet$00601.prototype, "size", {
  "get": function () {
    const this$$$17 = this;
    return MutableSet$00601$$get_Count(this$$$17) | 0;
  }
});

MutableSet$00601.prototype.add = function (k$$5) {
  const this$$$18 = this;
  const value$$4 = MutableSet$00601$$Add$$2B595(this$$$18, k$$5);
  void value$$4;
  return this$$$18;
};

MutableSet$00601.prototype.add_ = function (k$$6) {
  const this$$$19 = this;
  return MutableSet$00601$$Add$$2B595(this$$$19, k$$6);
};

MutableSet$00601.prototype.clear = function () {
  const this$$$20 = this;
  MutableSet$00601$$Clear(this$$$20);
};

MutableSet$00601.prototype.delete = function (k$$7) {
  const this$$$21 = this;
  return MutableSet$00601$$Remove$$2B595(this$$$21, k$$7);
};

MutableSet$00601.prototype.has = function (k$$8) {
  const this$$$22 = this;
  return MutableSet$00601$$Contains$$2B595(this$$$22, k$$8);
};

MutableSet$00601.prototype.keys = function () {
  const this$$$23 = this;
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_1__["map"])(function mapping(x) {
    return x;
  }, this$$$23);
};

MutableSet$00601.prototype.values = function () {
  const this$$$24 = this;
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_1__["map"])(function mapping$$1(x$$1) {
    return x$$1;
  }, this$$$24);
};

MutableSet$00601.prototype.entries = function () {
  const this$$$25 = this;
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_1__["map"])(function mapping$$2(v$$1) {
    return [v$$1, v$$1];
  }, this$$$25);
};

/***/ }),

/***/ "./.fable/fable-library.2.13.0/Option.js":
/*!***********************************************!*\
  !*** ./.fable/fable-library.2.13.0/Option.js ***!
  \***********************************************/
/*! exports provided: Some, some, value, tryValue, toArray, defaultArg, defaultArgWith, filter, map, map2, map3, bind, tryOp, Choice, Choice3, Choice4, Choice5, Choice6, Choice7, choice1Of2, choice2Of2, tryValueIfChoice1Of2, tryValueIfChoice2Of2, Result, ok, error, mapOk, mapError, bindOk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Some", function() { return Some; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "some", function() { return some; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "value", function() { return value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryValue", function() { return tryValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultArg", function() { return defaultArg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultArgWith", function() { return defaultArgWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map2", function() { return map2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map3", function() { return map3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryOp", function() { return tryOp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Choice", function() { return Choice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Choice3", function() { return Choice3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Choice4", function() { return Choice4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Choice5", function() { return Choice5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Choice6", function() { return Choice6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Choice7", function() { return Choice7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "choice1Of2", function() { return choice1Of2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "choice2Of2", function() { return choice2Of2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryValueIfChoice1Of2", function() { return tryValueIfChoice1Of2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryValueIfChoice2Of2", function() { return tryValueIfChoice2Of2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result", function() { return Result; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ok", function() { return ok; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapOk", function() { return mapOk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapError", function() { return mapError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindOk", function() { return bindOk; });
/* harmony import */ var _Types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Types */ "./.fable/fable-library.2.13.0/Types.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Util */ "./.fable/fable-library.2.13.0/Util.js");


// Using a class here for better compatibility with TS files importing Some
class Some {
    constructor(value) {
        this.value = value;
    }
    // Don't add "Some" for consistency with erased options
    toString() {
        return String(this.value);
    }
    toJSON() {
        return this.value;
    }
    GetHashCode() {
        return Object(_Util__WEBPACK_IMPORTED_MODULE_1__["structuralHash"])(this.value);
    }
    Equals(other) {
        if (other == null) {
            return false;
        }
        else {
            return Object(_Util__WEBPACK_IMPORTED_MODULE_1__["equals"])(this.value, other instanceof Some ? other.value : other);
        }
    }
    CompareTo(other) {
        if (other == null) {
            return 1;
        }
        else {
            return Object(_Util__WEBPACK_IMPORTED_MODULE_1__["compare"])(this.value, other instanceof Some ? other.value : other);
        }
    }
}
function some(x) {
    return x == null || x instanceof Some ? new Some(x) : x;
}
function value(x) {
    if (x == null) {
        throw new Error("Option has no value");
    }
    else {
        return x instanceof Some ? x.value : x;
    }
}
function tryValue(x) {
    return x instanceof Some ? x.value : x;
}
function toArray(opt) {
    return (opt == null) ? [] : [value(opt)];
}
function defaultArg(opt, defaultValue) {
    return (opt != null) ? value(opt) : defaultValue;
}
function defaultArgWith(opt, defThunk) {
    return (opt != null) ? value(opt) : defThunk();
}
function filter(predicate, opt) {
    return (opt != null) ? (predicate(value(opt)) ? opt : undefined) : opt;
}
function map(mapping, opt) {
    return (opt != null) ? some(mapping(value(opt))) : undefined;
}
function map2(mapping, opt1, opt2) {
    return (opt1 != null && opt2 != null) ? mapping(value(opt1), value(opt2)) : undefined;
}
function map3(mapping, opt1, opt2, opt3) {
    return (opt1 != null && opt2 != null && opt3 != null) ? mapping(value(opt1), value(opt2), value(opt3)) : undefined;
}
function bind(binder, opt) {
    return opt != null ? binder(value(opt)) : undefined;
}
function tryOp(op, arg) {
    try {
        return some(op(arg));
    }
    catch (_a) {
        return undefined;
    }
}
// CHOICE
class Choice extends _Types__WEBPACK_IMPORTED_MODULE_0__["Union"] {
}
class Choice3 extends _Types__WEBPACK_IMPORTED_MODULE_0__["Union"] {
}
class Choice4 extends _Types__WEBPACK_IMPORTED_MODULE_0__["Union"] {
}
class Choice5 extends _Types__WEBPACK_IMPORTED_MODULE_0__["Union"] {
}
class Choice6 extends _Types__WEBPACK_IMPORTED_MODULE_0__["Union"] {
}
class Choice7 extends _Types__WEBPACK_IMPORTED_MODULE_0__["Union"] {
}
function choice1Of2(x) {
    return new Choice(0, "Choice1Of2", x);
}
function choice2Of2(x) {
    return new Choice(1, "Choice2Of2", x);
}
function tryValueIfChoice1Of2(x) {
    return x.tag === 0 ? some(x.fields[0]) : undefined;
}
function tryValueIfChoice2Of2(x) {
    return x.tag === 1 ? some(x.fields[0]) : undefined;
}
// RESULT
class Result extends _Types__WEBPACK_IMPORTED_MODULE_0__["Union"] {
}
function ok(x) {
    return new Result(0, "Ok", x);
}
function error(x) {
    return new Result(1, "Error", x);
}
function mapOk(f, result) {
    return result.tag === 0 ? ok(f(result.fields[0])) : result;
}
function mapError(f, result) {
    return result.tag === 1 ? error(f(result.fields[0])) : result;
}
function bindOk(f, result) {
    return result.tag === 0 ? f(result.fields[0]) : result;
}
//# sourceMappingURL=Option.js.map

/***/ }),

/***/ "./.fable/fable-library.2.13.0/Reflection.js":
/*!***************************************************!*\
  !*** ./.fable/fable-library.2.13.0/Reflection.js ***!
  \***************************************************/
/*! exports provided: CaseInfo, TypeInfo, getGenerics, equals, compare, class_type, record_type, anonRecord_type, union_type, tuple_type, delegate_type, lambda_type, option_type, list_type, array_type, enum_type, obj_type, unit_type, char_type, string_type, bool_type, int8_type, uint8_type, int16_type, uint16_type, int32_type, uint32_type, float32_type, float64_type, decimal_type, name, fullName, namespace, isArray, getElementType, isGenericType, isEnum, getGenericTypeDefinition, getEnumUnderlyingType, getEnumValues, getEnumNames, parseEnum, tryParseEnum, getEnumName, isEnumDefined, getUnionCases, getRecordElements, getTupleElements, getFunctionElements, isUnion, isRecord, isTuple, isFunction, getUnionFields, getUnionCaseFields, getRecordFields, getRecordField, getTupleFields, getTupleField, makeUnion, makeRecord, makeTuple, makeGenericType, createInstance, getValue, getCaseTag, getCaseName, getCaseFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseInfo", function() { return CaseInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeInfo", function() { return TypeInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGenerics", function() { return getGenerics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "class_type", function() { return class_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "record_type", function() { return record_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "anonRecord_type", function() { return anonRecord_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "union_type", function() { return union_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuple_type", function() { return tuple_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delegate_type", function() { return delegate_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lambda_type", function() { return lambda_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "option_type", function() { return option_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "list_type", function() { return list_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "array_type", function() { return array_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enum_type", function() { return enum_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "obj_type", function() { return obj_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unit_type", function() { return unit_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "char_type", function() { return char_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "string_type", function() { return string_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bool_type", function() { return bool_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "int8_type", function() { return int8_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uint8_type", function() { return uint8_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "int16_type", function() { return int16_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uint16_type", function() { return uint16_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "int32_type", function() { return int32_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uint32_type", function() { return uint32_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "float32_type", function() { return float32_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "float64_type", function() { return float64_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decimal_type", function() { return decimal_type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fullName", function() { return fullName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namespace", function() { return namespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementType", function() { return getElementType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGenericType", function() { return isGenericType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEnum", function() { return isEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGenericTypeDefinition", function() { return getGenericTypeDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnumUnderlyingType", function() { return getEnumUnderlyingType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnumValues", function() { return getEnumValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnumNames", function() { return getEnumNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseEnum", function() { return parseEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryParseEnum", function() { return tryParseEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnumName", function() { return getEnumName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEnumDefined", function() { return isEnumDefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnionCases", function() { return getUnionCases; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecordElements", function() { return getRecordElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTupleElements", function() { return getTupleElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFunctionElements", function() { return getFunctionElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUnion", function() { return isUnion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRecord", function() { return isRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTuple", function() { return isTuple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnionFields", function() { return getUnionFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnionCaseFields", function() { return getUnionCaseFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecordFields", function() { return getRecordFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecordField", function() { return getRecordField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTupleFields", function() { return getTupleFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTupleField", function() { return getTupleField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeUnion", function() { return makeUnion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeRecord", function() { return makeRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeTuple", function() { return makeTuple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeGenericType", function() { return makeGenericType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInstance", function() { return createInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValue", function() { return getValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCaseTag", function() { return getCaseTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCaseName", function() { return getCaseName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCaseFields", function() { return getCaseFields; });
/* harmony import */ var _Types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Types */ "./.fable/fable-library.2.13.0/Types.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Util */ "./.fable/fable-library.2.13.0/Util.js");


class CaseInfo {
    constructor(declaringType, tag, name, fields) {
        this.declaringType = declaringType;
        this.tag = tag;
        this.name = name;
        this.fields = fields;
    }
}
class TypeInfo {
    constructor(fullname, generics, construct, fields, cases, enumCases) {
        this.fullname = fullname;
        this.generics = generics;
        this.construct = construct;
        this.fields = fields;
        this.cases = cases;
        this.enumCases = enumCases;
    }
    toString() {
        return fullName(this);
    }
    Equals(other) {
        return equals(this, other);
    }
    CompareTo(other) {
        return compare(this, other);
    }
}
function getGenerics(t) {
    return t.generics != null ? t.generics : [];
}
function equals(t1, t2) {
    if (t1.fullname === "") { // Anonymous records
        return t2.fullname === ""
            && Object(_Util__WEBPACK_IMPORTED_MODULE_1__["equalArraysWith"])(getRecordElements(t1), getRecordElements(t2), ([k1, v1], [k2, v2]) => k1 === k2 && equals(v1, v2));
    }
    else {
        return t1.fullname === t2.fullname
            && Object(_Util__WEBPACK_IMPORTED_MODULE_1__["equalArraysWith"])(getGenerics(t1), getGenerics(t2), equals);
    }
}
// System.Type is not comparable in .NET, but let's implement this
// in case users want to create a dictionary with types as keys
function compare(t1, t2) {
    if (t1.fullname !== t2.fullname) {
        return t1.fullname < t2.fullname ? -1 : 1;
    }
    else {
        return Object(_Util__WEBPACK_IMPORTED_MODULE_1__["compareArraysWith"])(getGenerics(t1), getGenerics(t2), compare);
    }
}
function class_type(fullname, generics, construct) {
    return new TypeInfo(fullname, generics, construct);
}
function record_type(fullname, generics, construct, fields) {
    return new TypeInfo(fullname, generics, construct, fields);
}
function anonRecord_type(...fields) {
    return new TypeInfo("", undefined, undefined, () => fields);
}
function union_type(fullname, generics, construct, cases) {
    const t = new TypeInfo(fullname, generics, construct, undefined, () => cases().map((x, i) => typeof x === "string"
        ? new CaseInfo(t, i, x)
        : new CaseInfo(t, i, x[0], x[1])));
    return t;
}
function tuple_type(...generics) {
    return new TypeInfo("System.Tuple`" + generics.length, generics);
}
function delegate_type(...generics) {
    return new TypeInfo("System.Func`" + generics.length, generics);
}
function lambda_type(argType, returnType) {
    return new TypeInfo("Microsoft.FSharp.Core.FSharpFunc`2", [argType, returnType]);
}
function option_type(generic) {
    return new TypeInfo("Microsoft.FSharp.Core.FSharpOption`1", [generic]);
}
function list_type(generic) {
    return new TypeInfo("Microsoft.FSharp.Collections.FSharpList`1", [generic]);
}
function array_type(generic) {
    return new TypeInfo(generic.fullname + "[]", [generic]);
}
function enum_type(fullname, underlyingType, enumCases) {
    return new TypeInfo(fullname, [underlyingType], undefined, undefined, undefined, enumCases);
}
const obj_type = new TypeInfo("System.Object");
const unit_type = new TypeInfo("Microsoft.FSharp.Core.Unit");
const char_type = new TypeInfo("System.Char");
const string_type = new TypeInfo("System.String");
const bool_type = new TypeInfo("System.Boolean");
const int8_type = new TypeInfo("System.SByte");
const uint8_type = new TypeInfo("System.Byte");
const int16_type = new TypeInfo("System.Int16");
const uint16_type = new TypeInfo("System.UInt16");
const int32_type = new TypeInfo("System.Int32");
const uint32_type = new TypeInfo("System.UInt32");
const float32_type = new TypeInfo("System.Single");
const float64_type = new TypeInfo("System.Double");
const decimal_type = new TypeInfo("System.Decimal");
function name(info) {
    if (Array.isArray(info)) {
        return info[0];
    }
    else if (info instanceof CaseInfo) {
        return info.name;
    }
    else {
        const i = info.fullname.lastIndexOf(".");
        return i === -1 ? info.fullname : info.fullname.substr(i + 1);
    }
}
function fullName(t) {
    const gen = t.generics != null && !isArray(t) ? t.generics : [];
    if (gen.length > 0) {
        return t.fullname + "[" + gen.map((x) => fullName(x)).join(",") + "]";
    }
    else {
        return t.fullname;
    }
}
function namespace(t) {
    const i = t.fullname.lastIndexOf(".");
    return i === -1 ? "" : t.fullname.substr(0, i);
}
function isArray(t) {
    return t.fullname.endsWith("[]");
}
function getElementType(t) {
    var _a;
    return isArray(t) ? (_a = t.generics) === null || _a === void 0 ? void 0 : _a[0] : undefined;
}
function isGenericType(t) {
    return t.generics != null && t.generics.length > 0;
}
function isEnum(t) {
    return t.enumCases != null && t.enumCases.length > 0;
}
/**
 * This doesn't replace types for fields (records) or cases (unions)
 * but it should be enough for type comparison purposes
 */
function getGenericTypeDefinition(t) {
    return t.generics == null ? t : new TypeInfo(t.fullname, t.generics.map(() => obj_type));
}
function getEnumUnderlyingType(t) {
    var _a;
    return (_a = t.generics) === null || _a === void 0 ? void 0 : _a[0];
}
function getEnumValues(t) {
    if (isEnum(t) && t.enumCases != null) {
        return t.enumCases.map((kv) => kv[1]);
    }
    else {
        throw new Error(`${t.fullname} is not an enum type`);
    }
}
function getEnumNames(t) {
    if (isEnum(t) && t.enumCases != null) {
        return t.enumCases.map((kv) => kv[0]);
    }
    else {
        throw new Error(`${t.fullname} is not an enum type`);
    }
}
function getEnumCase(t, v) {
    if (t.enumCases != null) {
        if (typeof v === "string") {
            for (const kv of t.enumCases) {
                if (kv[0] === v) {
                    return kv;
                }
            }
            throw new Error(`'${v}' was not found in ${t.fullname}`);
        }
        else {
            for (const kv of t.enumCases) {
                if (kv[1] === v) {
                    return kv;
                }
            }
            // .NET returns the number even if it doesn't match any of the cases
            return ["", v];
        }
    }
    else {
        throw new Error(`${t.fullname} is not an enum type`);
    }
}
function parseEnum(t, str) {
    // TODO: better int parsing here, parseInt ceils floats: "4.8" -> 4
    const value = parseInt(str, 10);
    return getEnumCase(t, isNaN(value) ? str : value)[1];
}
function tryParseEnum(t, str) {
    try {
        const v = parseEnum(t, str);
        return [true, v];
    }
    catch (_a) {
        // supress error
    }
    return [false, NaN];
}
function getEnumName(t, v) {
    return getEnumCase(t, v)[0];
}
function isEnumDefined(t, v) {
    try {
        const kv = getEnumCase(t, v);
        return kv[0] != null && kv[0] !== "";
    }
    catch (_a) {
        // supress error
    }
    return false;
}
// FSharpType
function getUnionCases(t) {
    if (t.cases != null) {
        return t.cases();
    }
    else {
        throw new Error(`${t.fullname} is not an F# union type`);
    }
}
function getRecordElements(t) {
    if (t.fields != null) {
        return t.fields();
    }
    else {
        throw new Error(`${t.fullname} is not an F# record type`);
    }
}
function getTupleElements(t) {
    if (isTuple(t) && t.generics != null) {
        return t.generics;
    }
    else {
        throw new Error(`${t.fullname} is not a tuple type`);
    }
}
function getFunctionElements(t) {
    if (isFunction(t) && t.generics != null) {
        const gen = t.generics;
        return [gen[0], gen[1]];
    }
    else {
        throw new Error(`${t.fullname} is not an F# function type`);
    }
}
function isUnion(t) {
    return t instanceof TypeInfo ? t.cases != null : t instanceof _Types__WEBPACK_IMPORTED_MODULE_0__["Union"];
}
function isRecord(t) {
    return t instanceof TypeInfo ? t.fields != null : t instanceof _Types__WEBPACK_IMPORTED_MODULE_0__["Record"];
}
function isTuple(t) {
    return t.fullname.startsWith("System.Tuple");
}
// In .NET this is false for delegates
function isFunction(t) {
    return t.fullname === "Microsoft.FSharp.Core.FSharpFunc`2";
}
// FSharpValue
function getUnionFields(v, t) {
    const cases = getUnionCases(t);
    const case_ = cases[v.tag];
    if (case_ == null) {
        throw new Error(`Cannot find case ${v.name} in union type`);
    }
    return [case_, v.fields];
}
function getUnionCaseFields(uci) {
    return uci.fields == null ? [] : uci.fields;
}
function getRecordFields(v) {
    return Object.keys(v).map((k) => v[k]);
}
function getRecordField(v, field) {
    return v[field[0]];
}
function getTupleFields(v) {
    return v;
}
function getTupleField(v, i) {
    return v[i];
}
function makeUnion(uci, values) {
    const expectedLength = (uci.fields || []).length;
    if (values.length !== expectedLength) {
        throw new Error(`Expected an array of length ${expectedLength} but got ${values.length}`);
    }
    return uci.declaringType.construct != null
        ? new uci.declaringType.construct(uci.tag, uci.name, ...values)
        : {};
}
function makeRecord(t, values) {
    const fields = getRecordElements(t);
    if (fields.length !== values.length) {
        throw new Error(`Expected an array of length ${fields.length} but got ${values.length}`);
    }
    return t.construct != null
        ? new t.construct(...values)
        : Object(_Types__WEBPACK_IMPORTED_MODULE_0__["anonRecord"])(fields.reduce((obj, [key, _t], i) => {
            obj[key] = values[i];
            return obj;
        }, {}));
}
function makeTuple(values, _t) {
    return values;
}
function makeGenericType(t, generics) {
    return new TypeInfo(t.fullname, generics, t.construct, t.fields, t.cases);
}
function createInstance(t, consArgs) {
    // TODO: Check if consArgs length is same as t.construct?
    // (Arg types can still be different)
    if (typeof t.construct === "function") {
        return new t.construct(...(consArgs !== null && consArgs !== void 0 ? consArgs : []));
    }
    else {
        throw new Error(`Cannot access constructor of ${t.fullname}`);
    }
}
function getValue(propertyInfo, v) {
    return v[propertyInfo[0]];
}
// Fable.Core.Reflection
function assertUnion(x) {
    if (!(x instanceof _Types__WEBPACK_IMPORTED_MODULE_0__["Union"])) {
        throw new Error(`Value is not an F# union type`);
    }
}
function getCaseTag(x) {
    assertUnion(x);
    return x.tag;
}
function getCaseName(x) {
    assertUnion(x);
    return x.name;
}
function getCaseFields(x) {
    assertUnion(x);
    return x.fields;
}
//# sourceMappingURL=Reflection.js.map

/***/ }),

/***/ "./.fable/fable-library.2.13.0/RegExp.js":
/*!***********************************************!*\
  !*** ./.fable/fable-library.2.13.0/RegExp.js ***!
  \***********************************************/
/*! exports provided: create, escape, unescape, isMatch, match, matches, options, replace, split */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return escape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unescape", function() { return unescape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMatch", function() { return isMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match", function() { return match; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return matches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "split", function() { return split; });
function create(pattern, options = 0) {
    // Supported RegexOptions
    // * IgnoreCase:  0x0001
    // * Multiline:   0x0002
    // * Singleline:  0x0010
    // * ECMAScript:  0x0100 (ignored)
    if ((options & ~(1 ^ 2 ^ 16 ^ 256)) !== 0) {
        throw new Error("RegexOptions only supports: IgnoreCase, Multiline, Singleline and ECMAScript");
    }
    let flags = "g";
    flags += options & 1 ? "i" : ""; // 0x0001 RegexOptions.IgnoreCase
    flags += options & 2 ? "m" : "";
    flags += options & 16 ? "s" : "";
    return new RegExp(pattern, flags);
}
// From http://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
function escape(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
function unescape(str) {
    return str.replace(/\\([\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|])/g, "$1");
}
function isMatch(str, pattern, options = 0) {
    let reg;
    reg = str instanceof RegExp
        ? (reg = str, str = pattern, reg.lastIndex = options, reg)
        : reg = create(pattern, options);
    return reg.test(str);
}
function match(str, pattern, options = 0) {
    let reg;
    reg = str instanceof RegExp
        ? (reg = str, str = pattern, reg.lastIndex = options, reg)
        : reg = create(pattern, options);
    return reg.exec(str);
}
function matches(str, pattern, options = 0) {
    let reg;
    reg = str instanceof RegExp
        ? (reg = str, str = pattern, reg.lastIndex = options, reg)
        : reg = create(pattern, options);
    if (!reg.global) {
        throw new Error("Non-global RegExp"); // Prevent infinite loop
    }
    let m = reg.exec(str);
    const matches = [];
    while (m !== null) {
        matches.push(m);
        m = reg.exec(str);
    }
    return matches;
}
function options(reg) {
    let options = 256; // ECMAScript
    options |= reg.ignoreCase ? 1 : 0;
    options |= reg.multiline ? 2 : 0;
    return options;
}
function replace(reg, input, replacement, limit, offset = 0) {
    function replacer() {
        let res = arguments[0];
        if (limit) {
            limit--;
            const match = [];
            const len = arguments.length;
            for (let i = 0; i < len - 2; i++) {
                match.push(arguments[i]);
            }
            match.index = arguments[len - 2];
            match.input = arguments[len - 1];
            res = replacement(match);
        }
        return res;
    }
    if (typeof reg === "string") {
        const tmp = reg;
        reg = create(input, limit !== null && limit !== void 0 ? limit : 0);
        input = tmp;
        limit = undefined;
    }
    if (typeof replacement === "function") {
        limit = limit == null ? -1 : limit;
        return input.substring(0, offset) + input.substring(offset).replace(reg, replacer);
    }
    else {
        // $0 doesn't work with JS regex, see #1155
        replacement = replacement.replace(/\$0/g, (_s) => "$&");
        if (limit != null) {
            let m;
            const sub1 = input.substring(offset);
            const _matches = matches(reg, sub1);
            const sub2 = matches.length > limit ? (m = _matches[limit - 1], sub1.substring(0, m.index + m[0].length)) : sub1;
            return input.substring(0, offset) + sub2.replace(reg, replacement)
                + input.substring(offset + sub2.length);
        }
        else {
            return input.replace(reg, replacement);
        }
    }
}
function split(reg, input, limit, offset = 0) {
    if (typeof reg === "string") {
        const tmp = reg;
        reg = create(input, limit !== null && limit !== void 0 ? limit : 0);
        input = tmp;
        limit = undefined;
    }
    input = input.substring(offset);
    return input.split(reg, limit);
}
//# sourceMappingURL=RegExp.js.map

/***/ }),

/***/ "./.fable/fable-library.2.13.0/Seq.js":
/*!********************************************!*\
  !*** ./.fable/fable-library.2.13.0/Seq.js ***!
  \********************************************/
/*! exports provided: Enumerator, getEnumerator, toIterator, ofArray, allPairs, append, average, averageBy, concat, collect, choose, compareWith, delay, empty, singleton, enumerateFromFunctions, enumerateWhile, enumerateThenFinally, enumerateUsing, exactlyOne, except, exists, exists2, forAll, forAll2, contains, filter, where, fold, foldBack, fold2, foldBack2, tryHead, head, initialize, initializeInfinite, tryItem, item, iterate, iterate2, iterateIndexed, iterateIndexed2, isEmpty, tryLast, last, length, map, mapIndexed, indexed, map2, mapIndexed2, map3, mapFold, mapFoldBack, max, maxBy, min, minBy, pairwise, rangeChar, rangeLong, rangeDecimal, rangeNumber, readOnly, reduce, reduceBack, replicate, reverse, scan, scanBack, skip, skipWhile, sortWith, sum, sumBy, tail, take, truncate, takeWhile, tryFind, find, tryFindBack, findBack, tryFindIndex, findIndex, tryFindIndexBack, findIndexBack, tryPick, pick, unfold, zip, zip3, windowed, transpose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Enumerator", function() { return Enumerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnumerator", function() { return getEnumerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toIterator", function() { return toIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ofArray", function() { return ofArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allPairs", function() { return allPairs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "average", function() { return average; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "averageBy", function() { return averageBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collect", function() { return collect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "choose", function() { return choose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareWith", function() { return compareWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return delay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleton", function() { return singleton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumerateFromFunctions", function() { return enumerateFromFunctions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumerateWhile", function() { return enumerateWhile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumerateThenFinally", function() { return enumerateThenFinally; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumerateUsing", function() { return enumerateUsing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exactlyOne", function() { return exactlyOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "except", function() { return except; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exists", function() { return exists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exists2", function() { return exists2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forAll", function() { return forAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forAll2", function() { return forAll2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return contains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "where", function() { return where; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fold", function() { return fold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foldBack", function() { return foldBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fold2", function() { return fold2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foldBack2", function() { return foldBack2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryHead", function() { return tryHead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "head", function() { return head; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeInfinite", function() { return initializeInfinite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryItem", function() { return tryItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "item", function() { return item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterate", function() { return iterate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterate2", function() { return iterate2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterateIndexed", function() { return iterateIndexed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterateIndexed2", function() { return iterateIndexed2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryLast", function() { return tryLast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "last", function() { return last; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapIndexed", function() { return mapIndexed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexed", function() { return indexed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map2", function() { return map2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapIndexed2", function() { return mapIndexed2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map3", function() { return map3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapFold", function() { return mapFold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapFoldBack", function() { return mapFoldBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxBy", function() { return maxBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minBy", function() { return minBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pairwise", function() { return pairwise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeChar", function() { return rangeChar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeLong", function() { return rangeLong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeDecimal", function() { return rangeDecimal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeNumber", function() { return rangeNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readOnly", function() { return readOnly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return reduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduceBack", function() { return reduceBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replicate", function() { return replicate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverse", function() { return reverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scan", function() { return scan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scanBack", function() { return scanBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skip", function() { return skip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skipWhile", function() { return skipWhile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortWith", function() { return sortWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return sum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sumBy", function() { return sumBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tail", function() { return tail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "take", function() { return take; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "truncate", function() { return truncate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeWhile", function() { return takeWhile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryFind", function() { return tryFind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryFindBack", function() { return tryFindBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findBack", function() { return findBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryFindIndex", function() { return tryFindIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return findIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryFindIndexBack", function() { return tryFindIndexBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIndexBack", function() { return findIndexBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryPick", function() { return tryPick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return pick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unfold", function() { return unfold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return zip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zip3", function() { return zip3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowed", function() { return windowed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return transpose; });
/* harmony import */ var _Decimal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Decimal */ "./.fable/fable-library.2.13.0/Decimal.js");
/* harmony import */ var _Long__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Long */ "./.fable/fable-library.2.13.0/Long.js");
/* harmony import */ var _Option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Option */ "./.fable/fable-library.2.13.0/Option.js");
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Util */ "./.fable/fable-library.2.13.0/Util.js");




class Enumerator {
    constructor(iter) {
        this.iter = iter;
    }
    MoveNext() {
        const cur = this.iter.next();
        this.current = cur.value;
        return !cur.done;
    }
    get Current() {
        return this.current;
    }
    Reset() {
        throw new Error("JS iterators cannot be reset");
    }
    Dispose() {
        return;
    }
}
function getEnumerator(o) {
    return new Enumerator(o[Symbol.iterator]());
}
function toIterator(en) {
    return {
        next() {
            return en.MoveNext()
                ? { done: false, value: en.Current }
                : { done: true, value: undefined };
        },
    };
}
// export function toIterable<T>(en: IEnumerable<T>): Iterable<T> {
//   return {
//     [Symbol.iterator]() {
//       return toIterator(en.GetEnumerator());
//     },
//   };
// }
function __failIfNone(res) {
    if (res == null) {
        throw new Error("Seq did not contain any matching element");
    }
    return Object(_Option__WEBPACK_IMPORTED_MODULE_2__["value"])(res);
}
function makeSeq(f) {
    const seq = {
        [Symbol.iterator]: f,
        toString: () => "seq [" + Array.from(seq).join("; ") + "]",
    };
    return seq;
}
function ofArray(xs) {
    return delay(() => unfold((i) => i != null && i < xs.length ? [xs[i], i + 1] : undefined, 0));
}
function allPairs(xs, ys) {
    let firstEl = true;
    const ysCache = [];
    return collect((x) => {
        if (firstEl) {
            firstEl = false;
            return map((y) => {
                ysCache.push(y);
                return [x, y];
            }, ys);
        }
        else {
            return ysCache.map((y) => [x, y]);
            // return map(function (i) {
            //     return [x, ysCache[i]];
            // }, rangeNumber(0, 1, ysCache.length - 1));
        }
    }, xs);
}
function append(xs, ys) {
    return delay(() => {
        let firstDone = false;
        const i = xs[Symbol.iterator]();
        let iters = [i, undefined];
        return unfold(() => {
            var _a, _b;
            let cur;
            if (!firstDone) {
                cur = (_a = iters[0]) === null || _a === void 0 ? void 0 : _a.next();
                if (cur != null && !cur.done) {
                    return [cur.value, iters];
                }
                else {
                    firstDone = true;
                    iters = [undefined, ys[Symbol.iterator]()];
                }
            }
            cur = (_b = iters[1]) === null || _b === void 0 ? void 0 : _b.next();
            return cur != null && !cur.done ? [cur.value, iters] : undefined;
        }, iters);
    });
}
function average(xs, averager) {
    let count = 0;
    const total = fold((acc, x) => {
        count++;
        return averager.Add(acc, x);
    }, averager.GetZero(), xs);
    return averager.DivideByInt(total, count);
}
function averageBy(f, xs, averager) {
    let count = 0;
    const total = fold((acc, x) => {
        count++;
        return averager.Add(acc, f(x));
    }, averager.GetZero(), xs);
    return averager.DivideByInt(total, count);
}
function concat(xs) {
    return delay(() => {
        const iter = xs[Symbol.iterator]();
        let output;
        return unfold((innerIter) => {
            let hasFinished = false;
            while (!hasFinished) {
                if (innerIter == null) {
                    const cur = iter.next();
                    if (!cur.done) {
                        innerIter = cur.value[Symbol.iterator]();
                    }
                    else {
                        hasFinished = true;
                    }
                }
                else {
                    const cur = innerIter.next();
                    if (!cur.done) {
                        output = cur.value;
                        hasFinished = true;
                    }
                    else {
                        innerIter = undefined;
                    }
                }
            }
            return innerIter != null ? [output, innerIter] : undefined;
        }, undefined);
    });
}
function collect(f, xs) {
    return concat(map(f, xs));
}
function choose(f, xs) {
    return delay(() => unfold((iter) => {
        let cur = iter.next();
        while (!cur.done) {
            const y = f(cur.value);
            if (y != null) {
                return [Object(_Option__WEBPACK_IMPORTED_MODULE_2__["value"])(y), iter];
            }
            cur = iter.next();
        }
        return undefined;
    }, xs[Symbol.iterator]()));
}
function compareWith(f, xs, ys) {
    const nonZero = tryFind((i) => i !== 0, map2(f, xs, ys));
    return nonZero != null ? Object(_Option__WEBPACK_IMPORTED_MODULE_2__["value"])(nonZero) : length(xs) - length(ys);
}
function delay(f) {
    return makeSeq(() => f()[Symbol.iterator]());
}
function empty() {
    return [];
}
function singleton(y) {
    return [y];
}
function enumerateFromFunctions(factory, moveNext, current) {
    return delay(() => unfold((e) => moveNext(e) ? [current(e), e] : undefined, factory()));
}
function enumerateWhile(cond, xs) {
    return concat(unfold(() => cond() ? [xs, true] : undefined, undefined));
}
function enumerateThenFinally(xs, finalFn) {
    return delay(() => {
        let iter;
        try {
            iter = xs[Symbol.iterator]();
        }
        catch (err) {
            try {
                return empty();
            }
            finally {
                finalFn();
            }
        }
        return unfold((it) => {
            try {
                const cur = it.next();
                return !cur.done ? [cur.value, it] : undefined;
            }
            catch (err) {
                return undefined;
            }
            finally {
                finalFn();
            }
        }, iter);
    });
}
function enumerateUsing(disp, work) {
    let isDisposed = false;
    const disposeOnce = () => {
        if (!isDisposed) {
            isDisposed = true;
            disp.Dispose();
        }
    };
    try {
        return enumerateThenFinally(work(disp), disposeOnce);
    }
    catch (err) {
        return void 0;
    }
    finally {
        disposeOnce();
    }
}
function exactlyOne(xs) {
    const iter = xs[Symbol.iterator]();
    const fst = iter.next();
    if (fst.done) {
        throw new Error("Seq was empty");
    }
    const snd = iter.next();
    if (!snd.done) {
        throw new Error("Seq had multiple items");
    }
    return fst.value;
}
function except(itemsToExclude, source) {
    const exclusionItems = Array.from(itemsToExclude);
    const testIsNotInExclusionItems = (element) => !exclusionItems.some((excludedItem) => Object(_Util__WEBPACK_IMPORTED_MODULE_3__["equals"])(excludedItem, element));
    return filter(testIsNotInExclusionItems, source);
}
function exists(f, xs) {
    let cur;
    for (const iter = xs[Symbol.iterator]();;) {
        cur = iter.next();
        if (cur.done) {
            break;
        }
        if (f(cur.value)) {
            return true;
        }
    }
    return false;
}
function exists2(f, xs, ys) {
    let cur1;
    let cur2;
    for (const iter1 = xs[Symbol.iterator](), iter2 = ys[Symbol.iterator]();;) {
        cur1 = iter1.next();
        cur2 = iter2.next();
        if (cur1.done || cur2.done) {
            break;
        }
        if (f(cur1.value, cur2.value)) {
            return true;
        }
    }
    return false;
}
function forAll(f, xs) {
    return !exists((x) => !f(x), xs);
}
function forAll2(f, xs, ys) {
    return !exists2((x, y) => !f(x, y), xs, ys);
}
function contains(i, xs) {
    return exists((x) => Object(_Util__WEBPACK_IMPORTED_MODULE_3__["equals"])(x, i), xs);
}
function filter(f, xs) {
    return delay(() => unfold((iter) => {
        let cur = iter.next();
        while (!cur.done) {
            if (f(cur.value)) {
                return [cur.value, iter];
            }
            cur = iter.next();
        }
        return undefined;
    }, xs[Symbol.iterator]()));
}
function where(f, xs) {
    return filter(f, xs);
}
function fold(f, acc, xs) {
    if (Array.isArray(xs) || ArrayBuffer.isView(xs)) {
        return xs.reduce(f, acc);
    }
    else {
        let cur;
        for (let i = 0, iter = xs[Symbol.iterator]();; i++) {
            cur = iter.next();
            if (cur.done) {
                break;
            }
            acc = f(acc, cur.value, i);
        }
        return acc;
    }
}
function foldBack(f, xs, acc) {
    const arr = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
    for (let i = arr.length - 1; i >= 0; i--) {
        acc = f(arr[i], acc, i);
    }
    return acc;
}
function fold2(f, acc, xs, ys) {
    const iter1 = xs[Symbol.iterator]();
    const iter2 = ys[Symbol.iterator]();
    let cur1;
    let cur2;
    for (let i = 0;; i++) {
        cur1 = iter1.next();
        cur2 = iter2.next();
        if (cur1.done || cur2.done) {
            break;
        }
        acc = f(acc, cur1.value, cur2.value, i);
    }
    return acc;
}
function foldBack2(f, xs, ys, acc) {
    const ar1 = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
    const ar2 = Array.isArray(ys) || ArrayBuffer.isView(ys) ? ys : Array.from(ys);
    for (let i = ar1.length - 1; i >= 0; i--) {
        acc = f(ar1[i], ar2[i], acc, i);
    }
    return acc;
}
function tryHead(xs) {
    const iter = xs[Symbol.iterator]();
    const cur = iter.next();
    return cur.done ? undefined : Object(_Option__WEBPACK_IMPORTED_MODULE_2__["some"])(cur.value);
}
function head(xs) {
    return __failIfNone(tryHead(xs));
}
function initialize(n, f) {
    return delay(() => unfold((i) => i < n ? [f(i), i + 1] : undefined, 0));
}
function initializeInfinite(f) {
    return delay(() => unfold((i) => [f(i), i + 1], 0));
}
function tryItem(i, xs) {
    if (i < 0) {
        return undefined;
    }
    if (Array.isArray(xs) || ArrayBuffer.isView(xs)) {
        return i < xs.length ? Object(_Option__WEBPACK_IMPORTED_MODULE_2__["some"])(xs[i]) : undefined;
    }
    for (let j = 0, iter = xs[Symbol.iterator]();; j++) {
        const cur = iter.next();
        if (cur.done) {
            break;
        }
        if (j === i) {
            return Object(_Option__WEBPACK_IMPORTED_MODULE_2__["some"])(cur.value);
        }
    }
    return undefined;
}
function item(i, xs) {
    return __failIfNone(tryItem(i, xs));
}
function iterate(f, xs) {
    fold((_, x) => (f(x), undefined), undefined, xs);
}
function iterate2(f, xs, ys) {
    fold2((_, x, y) => (f(x, y), undefined), undefined, xs, ys);
}
function iterateIndexed(f, xs) {
    fold((_, x, i) => (f(i !== null && i !== void 0 ? i : 0, x), undefined), undefined, xs);
}
function iterateIndexed2(f, xs, ys) {
    fold2((_, x, y, i) => (f(i !== null && i !== void 0 ? i : 0, x, y), undefined), undefined, xs, ys);
}
function isEmpty(xs) {
    const i = xs[Symbol.iterator]();
    return i.next().done;
}
function tryLast(xs) {
    return isEmpty(xs) ? undefined : Object(_Option__WEBPACK_IMPORTED_MODULE_2__["some"])(reduce((_, x) => x, xs));
}
function last(xs) {
    return __failIfNone(tryLast(xs));
}
function length(xs) {
    return Array.isArray(xs) || ArrayBuffer.isView(xs)
        ? xs.length
        : fold((acc, _x) => acc + 1, 0, xs);
}
function map(f, xs) {
    return delay(() => unfold((iter) => {
        const cur = iter.next();
        return !cur.done ? [f(cur.value), iter] : undefined;
    }, xs[Symbol.iterator]()));
}
function mapIndexed(f, xs) {
    return delay(() => {
        let i = 0;
        return unfold((iter) => {
            const cur = iter.next();
            return !cur.done ? [f(i++, cur.value), iter] : undefined;
        }, xs[Symbol.iterator]());
    });
}
function indexed(xs) {
    return mapIndexed((i, x) => [i, x], xs);
}
function map2(f, xs, ys) {
    return delay(() => {
        const iter1 = xs[Symbol.iterator]();
        const iter2 = ys[Symbol.iterator]();
        return unfold(() => {
            const cur1 = iter1.next();
            const cur2 = iter2.next();
            return !cur1.done && !cur2.done ? [f(cur1.value, cur2.value), undefined] : undefined;
        }, undefined);
    });
}
function mapIndexed2(f, xs, ys) {
    return delay(() => {
        let i = 0;
        const iter1 = xs[Symbol.iterator]();
        const iter2 = ys[Symbol.iterator]();
        return unfold(() => {
            const cur1 = iter1.next();
            const cur2 = iter2.next();
            return !cur1.done && !cur2.done ? [f(i++, cur1.value, cur2.value), undefined] : undefined;
        }, undefined);
    });
}
function map3(f, xs, ys, zs) {
    return delay(() => {
        const iter1 = xs[Symbol.iterator]();
        const iter2 = ys[Symbol.iterator]();
        const iter3 = zs[Symbol.iterator]();
        return unfold(() => {
            const cur1 = iter1.next();
            const cur2 = iter2.next();
            const cur3 = iter3.next();
            return !cur1.done && !cur2.done && !cur3.done ? [f(cur1.value, cur2.value, cur3.value), undefined] : undefined;
        }, undefined);
    });
}
function mapFold(f, acc, xs, transform) {
    const result = [];
    let r;
    let cur;
    for (let i = 0, iter = xs[Symbol.iterator]();; i++) {
        cur = iter.next();
        if (cur.done) {
            break;
        }
        [r, acc] = f(acc, cur.value);
        result.push(r);
    }
    return transform !== void 0 ? [transform(result), acc] : [result, acc];
}
function mapFoldBack(f, xs, acc, transform) {
    const arr = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
    const result = [];
    let r;
    for (let i = arr.length - 1; i >= 0; i--) {
        [r, acc] = f(arr[i], acc);
        result.push(r);
    }
    return transform !== void 0 ? [transform(result), acc] : [result, acc];
}
function max(xs, comparer) {
    const compareFn = comparer != null ? comparer.Compare : _Util__WEBPACK_IMPORTED_MODULE_3__["compare"];
    return reduce((acc, x) => compareFn(acc, x) === 1 ? acc : x, xs);
}
function maxBy(f, xs, comparer) {
    const compareFn = comparer != null ? comparer.Compare : _Util__WEBPACK_IMPORTED_MODULE_3__["compare"];
    return reduce((acc, x) => compareFn(f(acc), f(x)) === 1 ? acc : x, xs);
}
function min(xs, comparer) {
    const compareFn = comparer != null ? comparer.Compare : _Util__WEBPACK_IMPORTED_MODULE_3__["compare"];
    return reduce((acc, x) => compareFn(acc, x) === -1 ? acc : x, xs);
}
function minBy(f, xs, comparer) {
    const compareFn = comparer != null ? comparer.Compare : _Util__WEBPACK_IMPORTED_MODULE_3__["compare"];
    return reduce((acc, x) => compareFn(f(acc), f(x)) === -1 ? acc : x, xs);
}
function pairwise(xs) {
    return delay(() => {
        const iter = xs[Symbol.iterator]();
        const cur = iter.next();
        if (cur.done) {
            return empty();
        }
        const hd = cur.value;
        const tl = tail(xs);
        const ys = scan(([_, last], next) => [last, next], [hd, hd], tl);
        return skip(1, ys);
    });
}
function rangeChar(first, last) {
    return delay(() => unfold((x) => x <= last ? [x, String.fromCharCode(x.charCodeAt(0) + 1)] : undefined, first));
}
function rangeLong(first, step, last, unsigned) {
    const stepFn = Object(_Long__WEBPACK_IMPORTED_MODULE_1__["makeRangeStepFunction"])(step, last, unsigned);
    return delay(() => unfold(stepFn, first));
}
function rangeDecimal(first, step, last) {
    const stepFn = Object(_Decimal__WEBPACK_IMPORTED_MODULE_0__["makeRangeStepFunction"])(step, last);
    return delay(() => unfold(stepFn, first));
}
function rangeNumber(first, step, last) {
    if (step === 0) {
        throw new Error("Step cannot be 0");
    }
    return delay(() => unfold((x) => step > 0 && x <= last || step < 0 && x >= last ? [x, x + step] : undefined, first));
}
function readOnly(xs) {
    return map((x) => x, xs);
}
function reduce(f, xs) {
    if (Array.isArray(xs) || ArrayBuffer.isView(xs)) {
        return xs.reduce(f);
    }
    const iter = xs[Symbol.iterator]();
    let cur = iter.next();
    if (cur.done) {
        throw new Error("Seq was empty");
    }
    let acc = cur.value;
    while (true) {
        cur = iter.next();
        if (cur.done) {
            break;
        }
        acc = f(acc, cur.value);
    }
    return acc;
}
function reduceBack(f, xs) {
    const ar = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
    if (ar.length === 0) {
        throw new Error("Seq was empty");
    }
    let acc = ar[ar.length - 1];
    for (let i = ar.length - 2; i >= 0; i--) {
        acc = f(ar[i], acc, i);
    }
    return acc;
}
function replicate(n, x) {
    return initialize(n, () => x);
}
function reverse(xs) {
    const ar = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs.slice(0) : Array.from(xs);
    return ofArray(ar.reverse());
}
function scan(f, seed, xs) {
    return delay(() => {
        const iter = xs[Symbol.iterator]();
        return unfold((acc) => {
            if (acc == null) {
                return [seed, seed];
            }
            const cur = iter.next();
            if (!cur.done) {
                acc = f(acc, cur.value);
                return [acc, acc];
            }
            return undefined;
        }, undefined);
    });
}
function scanBack(f, xs, seed) {
    return reverse(scan((acc, x) => f(x, acc), seed, reverse(xs)));
}
function skip(n, xs) {
    return makeSeq(() => {
        const iter = xs[Symbol.iterator]();
        for (let i = 1; i <= n; i++) {
            if (iter.next().done) {
                throw new Error("Seq has not enough elements");
            }
        }
        return iter;
    });
}
function skipWhile(f, xs) {
    return delay(() => {
        let hasPassed = false;
        return filter((x) => hasPassed || (hasPassed = !f(x)), xs);
    });
}
function sortWith(f, xs) {
    const ys = Array.from(xs);
    return ofArray(ys.sort(f));
}
function sum(xs, adder) {
    return fold((acc, x) => adder.Add(acc, x), adder.GetZero(), xs);
}
function sumBy(f, xs, adder) {
    return fold((acc, x) => adder.Add(acc, f(x)), adder.GetZero(), xs);
}
function tail(xs) {
    return skip(1, xs);
}
function take(n, xs, truncate = false) {
    return delay(() => {
        const iter = xs[Symbol.iterator]();
        return unfold((i) => {
            if (i < n) {
                const cur = iter.next();
                if (!cur.done) {
                    return [cur.value, i + 1];
                }
                if (!truncate) {
                    throw new Error("Seq has not enough elements");
                }
            }
            return undefined;
        }, 0);
    });
}
function truncate(n, xs) {
    return take(n, xs, true);
}
function takeWhile(f, xs) {
    return delay(() => {
        const iter = xs[Symbol.iterator]();
        return unfold(() => {
            const cur = iter.next();
            if (!cur.done && f(cur.value)) {
                return [cur.value, undefined];
            }
            return undefined;
        }, 0);
    });
}
function tryFind(f, xs, defaultValue) {
    for (let i = 0, iter = xs[Symbol.iterator]();; i++) {
        const cur = iter.next();
        if (cur.done) {
            break;
        }
        if (f(cur.value, i)) {
            return Object(_Option__WEBPACK_IMPORTED_MODULE_2__["some"])(cur.value);
        }
    }
    return defaultValue === void 0 ? undefined : Object(_Option__WEBPACK_IMPORTED_MODULE_2__["some"])(defaultValue);
}
function find(f, xs) {
    return __failIfNone(tryFind(f, xs));
}
function tryFindBack(f, xs, defaultValue) {
    const arr = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs.slice(0) : Array.from(xs);
    return tryFind(f, arr.reverse(), defaultValue);
}
function findBack(f, xs) {
    return __failIfNone(tryFindBack(f, xs));
}
function tryFindIndex(f, xs) {
    for (let i = 0, iter = xs[Symbol.iterator]();; i++) {
        const cur = iter.next();
        if (cur.done) {
            break;
        }
        if (f(cur.value, i)) {
            return i;
        }
    }
    return undefined;
}
function findIndex(f, xs) {
    return __failIfNone(tryFindIndex(f, xs));
}
function tryFindIndexBack(f, xs) {
    const arr = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs.slice(0) : Array.from(xs);
    for (let i = arr.length - 1; i >= 0; i--) {
        if (f(arr[i], i)) {
            return i;
        }
    }
    return undefined;
}
function findIndexBack(f, xs) {
    return __failIfNone(tryFindIndexBack(f, xs));
}
function tryPick(f, xs) {
    for (let i = 0, iter = xs[Symbol.iterator]();; i++) {
        const cur = iter.next();
        if (cur.done) {
            break;
        }
        const y = f(cur.value, i);
        if (y != null) {
            return y;
        }
    }
    return undefined;
}
function pick(f, xs) {
    return __failIfNone(tryPick(f, xs));
}
function unfold(f, fst) {
    return makeSeq(() => {
        // Capture a copy of the first value in the closure
        // so the sequence is restarted every time, see #1230
        let acc = fst;
        const iter = {
            next() {
                const res = f(acc);
                if (res != null) {
                    const v = Object(_Option__WEBPACK_IMPORTED_MODULE_2__["value"])(res);
                    if (v != null) {
                        acc = v[1];
                        return { done: false, value: v[0] };
                    }
                }
                return { done: true, value: undefined };
            },
        };
        return iter;
    });
}
function zip(xs, ys) {
    return map2((x, y) => [x, y], xs, ys);
}
function zip3(xs, ys, zs) {
    return map3((x, y, z) => [x, y, z], xs, ys, zs);
}
function windowed(windowSize, source) {
    if (windowSize <= 0) {
        throw new Error("windowSize must be positive");
    }
    return makeSeq(() => {
        let window = [];
        const iter = source[Symbol.iterator]();
        const iter2 = {
            next() {
                let cur;
                while (window.length < windowSize) {
                    if ((cur = iter.next()).done) {
                        return { done: true, value: undefined };
                    }
                    window.push(cur.value);
                }
                const value = window;
                window = window.slice(1);
                return { done: false, value };
            },
        };
        return iter2;
    });
}
function transpose(source) {
    return makeSeq(() => {
        const iters = Array.from(source, (x) => x[Symbol.iterator]());
        const iter = {
            next() {
                if (iters.length === 0) {
                    return { done: true, value: undefined }; // empty sequence
                }
                const results = Array.from(iters, (iter) => iter.next());
                if (results[0].done) {
                    if (!results.every((x) => x.done)) {
                        throw new Error("Sequences have different lengths");
                    }
                    return { done: true, value: undefined };
                }
                else {
                    if (!results.every((x) => !x.done)) {
                        throw new Error("Sequences have different lengths");
                    }
                    const values = results.map((x) => x.value);
                    return { done: false, value: values };
                }
            },
        };
        return iter;
    });
}
//# sourceMappingURL=Seq.js.map

/***/ }),

/***/ "./.fable/fable-library.2.13.0/Set.js":
/*!********************************************!*\
  !*** ./.fable/fable-library.2.13.0/Set.js ***!
  \********************************************/
/*! exports provided: SetTree$00601, SetTree$00601$reflection, SetTreeModule$$$countAux, SetTreeModule$$$count, SetTreeModule$$$SetOne, SetTreeModule$$$SetNode, SetTreeModule$$$height, SetTreeModule$$$tolerance, SetTreeModule$$$mk, SetTreeModule$$$rebalance, SetTreeModule$$$add, SetTreeModule$$$balance, SetTreeModule$$$split, SetTreeModule$$$spliceOutSuccessor, SetTreeModule$$$remove, SetTreeModule$$$mem, SetTreeModule$$$iter, SetTreeModule$$$foldBack, SetTreeModule$$$fold, SetTreeModule$$$forall, SetTreeModule$$$exists, SetTreeModule$$$isEmpty, SetTreeModule$$$subset, SetTreeModule$$$psubset, SetTreeModule$$$filterAux, SetTreeModule$$$filter, SetTreeModule$$$diffAux, SetTreeModule$$$diff, SetTreeModule$$$union, SetTreeModule$$$intersectionAux, SetTreeModule$$$intersection, SetTreeModule$$$partition1, SetTreeModule$$$partitionAux, SetTreeModule$$$partition, SetTreeModule$$$$007CMatchSetNode$007CMatchSetEmpty$007C, SetTreeModule$$$minimumElementAux, SetTreeModule$$$minimumElementOpt, SetTreeModule$$$maximumElementAux, SetTreeModule$$$maximumElementOpt, SetTreeModule$$$minimumElement, SetTreeModule$$$maximumElement, SetTreeModule$002ESetIterator$00601, SetTreeModule$002ESetIterator$00601$reflection, SetTreeModule$$$collapseLHS, SetTreeModule$$$mkIterator, SetTreeModule$$$notStarted, SetTreeModule$$$alreadyFinished, SetTreeModule$$$current, SetTreeModule$$$moveNext, SetTreeModule$002EmkIEnumerator$00601, SetTreeModule$002EmkIEnumerator$00601$reflection, SetTreeModule$002EmkIEnumerator$00601$$$$002Ector$$Z5B395D56, SetTreeModule$$$mkIEnumerator, SetTreeModule$$$toSeq, SetTreeModule$$$compareStacks, SetTreeModule$$$compare, SetTreeModule$$$choose, SetTreeModule$$$loop, SetTreeModule$$$toList, SetTreeModule$$$copyToArray, SetTreeModule$$$mkFromEnumerator, SetTreeModule$$$ofSeq, SetTreeModule$$$ofArray, FSharpSet, FSharpSet$reflection, FSharpSet$$$$002Ector$$2528C5CB, FSharpSet$$get_Comparer, FSharpSet$$get_Tree, FSharpSet$$Add$$2B595, FSharpSet$$Remove$$2B595, FSharpSet$$get_Count, FSharpSet$$Contains$$2B595, FSharpSet$$Iterate$$5028453F, FSharpSet$$Fold, FSharpSet$$get_IsEmpty, FSharpSet$$Partition$$Z1D55A0D7, FSharpSet$$Filter$$Z1D55A0D7, FSharpSet$$Map$$7597B8F7, FSharpSet$$Exists$$Z1D55A0D7, FSharpSet$$ForAll$$Z1D55A0D7, FSharpSet$$$op_Subtraction, FSharpSet$$$op_Addition, FSharpSet$$$Intersection$$Z3BE9BFE0, FSharpSet$$$IntersectionMany$$Z15B59630, FSharpSet$$$Equality$$Z3BE9BFE0, FSharpSet$$$Compare$$Z3BE9BFE0, FSharpSet$$get_Choose, FSharpSet$$get_MinimumElement, FSharpSet$$get_MaximumElement, FSharpSet$$IsSubsetOf$$6A20B1FF, FSharpSet$$IsSupersetOf$$6A20B1FF, FSharpSet$$IsProperSubsetOf$$6A20B1FF, FSharpSet$$IsProperSupersetOf$$6A20B1FF, isEmpty, contains, add, singleton, remove, union, unionMany, intersect, intersectMany, iterate, empty, forAll, exists, filter, partition, fold, foldBack, map, count, minimumElement, maximumElement, ofList, ofArray, toList, toArray, toSeq, ofSeq, difference, isSubset, isSuperset, isProperSubset, isProperSuperset, minElement, maxElement, createMutable, distinct, distinctBy, unionWith, intersectWith, exceptWith, isSubsetOf, isSupersetOf, isProperSubsetOf, isProperSupersetOf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTree$00601", function() { return SetTree$00601; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTree$00601$reflection", function() { return SetTree$00601$reflection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$countAux", function() { return SetTreeModule$$$countAux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$count", function() { return SetTreeModule$$$count; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$SetOne", function() { return SetTreeModule$$$SetOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$SetNode", function() { return SetTreeModule$$$SetNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$height", function() { return SetTreeModule$$$height; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$tolerance", function() { return SetTreeModule$$$tolerance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$mk", function() { return SetTreeModule$$$mk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$rebalance", function() { return SetTreeModule$$$rebalance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$add", function() { return SetTreeModule$$$add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$balance", function() { return SetTreeModule$$$balance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$split", function() { return SetTreeModule$$$split; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$spliceOutSuccessor", function() { return SetTreeModule$$$spliceOutSuccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$remove", function() { return SetTreeModule$$$remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$mem", function() { return SetTreeModule$$$mem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$iter", function() { return SetTreeModule$$$iter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$foldBack", function() { return SetTreeModule$$$foldBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$fold", function() { return SetTreeModule$$$fold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$forall", function() { return SetTreeModule$$$forall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$exists", function() { return SetTreeModule$$$exists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$isEmpty", function() { return SetTreeModule$$$isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$subset", function() { return SetTreeModule$$$subset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$psubset", function() { return SetTreeModule$$$psubset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$filterAux", function() { return SetTreeModule$$$filterAux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$filter", function() { return SetTreeModule$$$filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$diffAux", function() { return SetTreeModule$$$diffAux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$diff", function() { return SetTreeModule$$$diff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$union", function() { return SetTreeModule$$$union; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$intersectionAux", function() { return SetTreeModule$$$intersectionAux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$intersection", function() { return SetTreeModule$$$intersection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$partition1", function() { return SetTreeModule$$$partition1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$partitionAux", function() { return SetTreeModule$$$partitionAux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$partition", function() { return SetTreeModule$$$partition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$$007CMatchSetNode$007CMatchSetEmpty$007C", function() { return SetTreeModule$$$$007CMatchSetNode$007CMatchSetEmpty$007C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$minimumElementAux", function() { return SetTreeModule$$$minimumElementAux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$minimumElementOpt", function() { return SetTreeModule$$$minimumElementOpt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$maximumElementAux", function() { return SetTreeModule$$$maximumElementAux; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$maximumElementOpt", function() { return SetTreeModule$$$maximumElementOpt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$minimumElement", function() { return SetTreeModule$$$minimumElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$maximumElement", function() { return SetTreeModule$$$maximumElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$002ESetIterator$00601", function() { return SetTreeModule$002ESetIterator$00601; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$002ESetIterator$00601$reflection", function() { return SetTreeModule$002ESetIterator$00601$reflection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$collapseLHS", function() { return SetTreeModule$$$collapseLHS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$mkIterator", function() { return SetTreeModule$$$mkIterator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$notStarted", function() { return SetTreeModule$$$notStarted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$alreadyFinished", function() { return SetTreeModule$$$alreadyFinished; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$current", function() { return SetTreeModule$$$current; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$moveNext", function() { return SetTreeModule$$$moveNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$002EmkIEnumerator$00601", function() { return SetTreeModule$002EmkIEnumerator$00601; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$002EmkIEnumerator$00601$reflection", function() { return SetTreeModule$002EmkIEnumerator$00601$reflection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$002EmkIEnumerator$00601$$$$002Ector$$Z5B395D56", function() { return SetTreeModule$002EmkIEnumerator$00601$$$$002Ector$$Z5B395D56; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$mkIEnumerator", function() { return SetTreeModule$$$mkIEnumerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$toSeq", function() { return SetTreeModule$$$toSeq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$compareStacks", function() { return SetTreeModule$$$compareStacks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$compare", function() { return SetTreeModule$$$compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$choose", function() { return SetTreeModule$$$choose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$loop", function() { return SetTreeModule$$$loop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$toList", function() { return SetTreeModule$$$toList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$copyToArray", function() { return SetTreeModule$$$copyToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$mkFromEnumerator", function() { return SetTreeModule$$$mkFromEnumerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$ofSeq", function() { return SetTreeModule$$$ofSeq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTreeModule$$$ofArray", function() { return SetTreeModule$$$ofArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet", function() { return FSharpSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$reflection", function() { return FSharpSet$reflection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$$$002Ector$$2528C5CB", function() { return FSharpSet$$$$002Ector$$2528C5CB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$get_Comparer", function() { return FSharpSet$$get_Comparer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$get_Tree", function() { return FSharpSet$$get_Tree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$Add$$2B595", function() { return FSharpSet$$Add$$2B595; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$Remove$$2B595", function() { return FSharpSet$$Remove$$2B595; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$get_Count", function() { return FSharpSet$$get_Count; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$Contains$$2B595", function() { return FSharpSet$$Contains$$2B595; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$Iterate$$5028453F", function() { return FSharpSet$$Iterate$$5028453F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$Fold", function() { return FSharpSet$$Fold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$get_IsEmpty", function() { return FSharpSet$$get_IsEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$Partition$$Z1D55A0D7", function() { return FSharpSet$$Partition$$Z1D55A0D7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$Filter$$Z1D55A0D7", function() { return FSharpSet$$Filter$$Z1D55A0D7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$Map$$7597B8F7", function() { return FSharpSet$$Map$$7597B8F7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$Exists$$Z1D55A0D7", function() { return FSharpSet$$Exists$$Z1D55A0D7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$ForAll$$Z1D55A0D7", function() { return FSharpSet$$ForAll$$Z1D55A0D7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$$op_Subtraction", function() { return FSharpSet$$$op_Subtraction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$$op_Addition", function() { return FSharpSet$$$op_Addition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$$Intersection$$Z3BE9BFE0", function() { return FSharpSet$$$Intersection$$Z3BE9BFE0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$$IntersectionMany$$Z15B59630", function() { return FSharpSet$$$IntersectionMany$$Z15B59630; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$$Equality$$Z3BE9BFE0", function() { return FSharpSet$$$Equality$$Z3BE9BFE0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$$Compare$$Z3BE9BFE0", function() { return FSharpSet$$$Compare$$Z3BE9BFE0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$get_Choose", function() { return FSharpSet$$get_Choose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$get_MinimumElement", function() { return FSharpSet$$get_MinimumElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$get_MaximumElement", function() { return FSharpSet$$get_MaximumElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$IsSubsetOf$$6A20B1FF", function() { return FSharpSet$$IsSubsetOf$$6A20B1FF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$IsSupersetOf$$6A20B1FF", function() { return FSharpSet$$IsSupersetOf$$6A20B1FF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$IsProperSubsetOf$$6A20B1FF", function() { return FSharpSet$$IsProperSubsetOf$$6A20B1FF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpSet$$IsProperSupersetOf$$6A20B1FF", function() { return FSharpSet$$IsProperSupersetOf$$6A20B1FF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return contains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleton", function() { return singleton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "union", function() { return union; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unionMany", function() { return unionMany; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersect", function() { return intersect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectMany", function() { return intersectMany; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterate", function() { return iterate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forAll", function() { return forAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exists", function() { return exists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return partition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fold", function() { return fold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foldBack", function() { return foldBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "count", function() { return count; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minimumElement", function() { return minimumElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maximumElement", function() { return maximumElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ofList", function() { return ofList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ofArray", function() { return ofArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toList", function() { return toList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toSeq", function() { return toSeq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ofSeq", function() { return ofSeq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "difference", function() { return difference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSubset", function() { return isSubset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSuperset", function() { return isSuperset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isProperSubset", function() { return isProperSubset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isProperSuperset", function() { return isProperSuperset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minElement", function() { return minElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxElement", function() { return maxElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMutable", function() { return createMutable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distinct", function() { return distinct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distinctBy", function() { return distinctBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unionWith", function() { return unionWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectWith", function() { return intersectWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exceptWith", function() { return exceptWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSubsetOf", function() { return isSubsetOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSupersetOf", function() { return isSupersetOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isProperSubsetOf", function() { return isProperSubsetOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isProperSupersetOf", function() { return isProperSupersetOf; });
/* harmony import */ var _Types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Types.js */ "./.fable/fable-library.2.13.0/Types.js");
/* harmony import */ var _Reflection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reflection.js */ "./.fable/fable-library.2.13.0/Reflection.js");
/* harmony import */ var _Option_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Option.js */ "./.fable/fable-library.2.13.0/Option.js");
/* harmony import */ var _Seq_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Seq.js */ "./.fable/fable-library.2.13.0/Seq.js");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Util.js */ "./.fable/fable-library.2.13.0/Util.js");
/* harmony import */ var _String_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./String.js */ "./.fable/fable-library.2.13.0/String.js");
/* harmony import */ var _MutableSet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MutableSet */ "./.fable/fable-library.2.13.0/MutableSet.js");







const SetTree$00601 = Object(_Types_js__WEBPACK_IMPORTED_MODULE_0__["declare"])(function Set_SetTree(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, _Types_js__WEBPACK_IMPORTED_MODULE_0__["Union"]);
function SetTree$00601$reflection($gen$$3) {
  return Object(_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["union_type"])("Set.SetTree`1", [$gen$$3], SetTree$00601, () => ["SetEmpty", ["SetNode", [["Item1", $gen$$3], ["Item2", SetTree$00601$reflection($gen$$3)], ["Item3", SetTree$00601$reflection($gen$$3)], ["Item4", _Reflection_js__WEBPACK_IMPORTED_MODULE_1__["int32_type"]]]], ["SetOne", [["Item", $gen$$3]]]]);
}
function SetTreeModule$$$countAux($s$$4, $acc$$5) {
  SetTreeModule$$$countAux: while (true) {
    const s = $s$$4,
          acc = $acc$$5;

    switch (s.tag) {
      case 2:
        {
          return acc + 1 | 0;
        }

      case 0:
        {
          return acc | 0;
        }

      default:
        {
          $s$$4 = s.fields[1];
          $acc$$5 = SetTreeModule$$$countAux(s.fields[2], acc + 1);
          continue SetTreeModule$$$countAux;
        }
    }

    break;
  }
}
function SetTreeModule$$$count(s$$1) {
  return SetTreeModule$$$countAux(s$$1, 0);
}
function SetTreeModule$$$SetOne(n) {
  return new SetTree$00601(2, "SetOne", n);
}
function SetTreeModule$$$SetNode(x, l$$1, r$$1, h) {
  return new SetTree$00601(1, "SetNode", x, l$$1, r$$1, h);
}
function SetTreeModule$$$height(t) {
  switch (t.tag) {
    case 2:
      {
        return 1;
      }

    case 1:
      {
        return t.fields[3] | 0;
      }

    default:
      {
        return 0;
      }
  }
}
const SetTreeModule$$$tolerance = 2;
function SetTreeModule$$$mk(l$$2, k, r$$2) {
  var $target$$16;

  if (l$$2.tag === 0) {
    if (r$$2.tag === 0) {
      $target$$16 = 0;
    } else {
      $target$$16 = 1;
    }
  } else {
    $target$$16 = 1;
  }

  switch ($target$$16) {
    case 0:
      {
        return SetTreeModule$$$SetOne(k);
      }

    case 1:
      {
        const hl = SetTreeModule$$$height(l$$2) | 0;
        const hr = SetTreeModule$$$height(r$$2) | 0;
        const m = (hl < hr ? hr : hl) | 0;
        return SetTreeModule$$$SetNode(k, l$$2, r$$2, m + 1);
      }
  }
}
function SetTreeModule$$$rebalance(t1, k$$1, t2) {
  const t1h = SetTreeModule$$$height(t1) | 0;
  const t2h = SetTreeModule$$$height(t2) | 0;

  if (t2h > t1h + SetTreeModule$$$tolerance) {
    if (t2.tag === 1) {
      if (SetTreeModule$$$height(t2.fields[1]) > t1h + 1) {
        if (t2.fields[1].tag === 1) {
          return SetTreeModule$$$mk(SetTreeModule$$$mk(t1, k$$1, t2.fields[1].fields[1]), t2.fields[1].fields[0], SetTreeModule$$$mk(t2.fields[1].fields[2], t2.fields[0], t2.fields[2]));
        } else {
          throw new Error("rebalance");
        }
      } else {
        return SetTreeModule$$$mk(SetTreeModule$$$mk(t1, k$$1, t2.fields[1]), t2.fields[0], t2.fields[2]);
      }
    } else {
      throw new Error("rebalance");
    }
  } else if (t1h > t2h + SetTreeModule$$$tolerance) {
    if (t1.tag === 1) {
      if (SetTreeModule$$$height(t1.fields[2]) > t2h + 1) {
        if (t1.fields[2].tag === 1) {
          return SetTreeModule$$$mk(SetTreeModule$$$mk(t1.fields[1], t1.fields[0], t1.fields[2].fields[1]), t1.fields[2].fields[0], SetTreeModule$$$mk(t1.fields[2].fields[2], k$$1, t2));
        } else {
          throw new Error("rebalance");
        }
      } else {
        return SetTreeModule$$$mk(t1.fields[1], t1.fields[0], SetTreeModule$$$mk(t1.fields[2], k$$1, t2));
      }
    } else {
      throw new Error("rebalance");
    }
  } else {
    return SetTreeModule$$$mk(t1, k$$1, t2);
  }
}
function SetTreeModule$$$add(comparer, k$$2, t$$1) {
  switch (t$$1.tag) {
    case 2:
      {
        const c$$1 = comparer.Compare(k$$2, t$$1.fields[0]) | 0;

        if (c$$1 < 0) {
          return SetTreeModule$$$SetNode(k$$2, new SetTree$00601(0, "SetEmpty"), t$$1, 2);
        } else if (c$$1 === 0) {
          return t$$1;
        } else {
          return SetTreeModule$$$SetNode(k$$2, t$$1, new SetTree$00601(0, "SetEmpty"), 2);
        }
      }

    case 0:
      {
        return SetTreeModule$$$SetOne(k$$2);
      }

    default:
      {
        const c = comparer.Compare(k$$2, t$$1.fields[0]) | 0;

        if (c < 0) {
          return SetTreeModule$$$rebalance(SetTreeModule$$$add(comparer, k$$2, t$$1.fields[1]), t$$1.fields[0], t$$1.fields[2]);
        } else if (c === 0) {
          return t$$1;
        } else {
          return SetTreeModule$$$rebalance(t$$1.fields[1], t$$1.fields[0], SetTreeModule$$$add(comparer, k$$2, t$$1.fields[2]));
        }
      }
  }
}
function SetTreeModule$$$balance(comparer$$1, t1$$1, k$$3, t2$$1) {
  var $target$$27, t2$$2, t1$$2, k1, t2$$3, k2$$2, t1$$3, h1, h2, k1$$1, k2$$3, t11, t12, t21, t22;

  if (t1$$1.tag === 2) {
    if (t2$$1.tag === 0) {
      $target$$27 = 1;
      t1$$2 = t1$$1;
    } else if (t2$$1.tag === 2) {
      $target$$27 = 2;
      k1 = t1$$1.fields[0];
      t2$$3 = t2$$1;
    } else {
      $target$$27 = 2;
      k1 = t1$$1.fields[0];
      t2$$3 = t2$$1;
    }
  } else if (t1$$1.tag === 1) {
    if (t2$$1.tag === 2) {
      $target$$27 = 3;
      k2$$2 = t2$$1.fields[0];
      t1$$3 = t1$$1;
    } else if (t2$$1.tag === 1) {
      $target$$27 = 4;
      h1 = t1$$1.fields[3];
      h2 = t2$$1.fields[3];
      k1$$1 = t1$$1.fields[0];
      k2$$3 = t2$$1.fields[0];
      t11 = t1$$1.fields[1];
      t12 = t1$$1.fields[2];
      t21 = t2$$1.fields[1];
      t22 = t2$$1.fields[2];
    } else {
      $target$$27 = 1;
      t1$$2 = t1$$1;
    }
  } else {
    $target$$27 = 0;
    t2$$2 = t2$$1;
  }

  switch ($target$$27) {
    case 0:
      {
        return SetTreeModule$$$add(comparer$$1, k$$3, t2$$2);
      }

    case 1:
      {
        return SetTreeModule$$$add(comparer$$1, k$$3, t1$$2);
      }

    case 2:
      {
        return SetTreeModule$$$add(comparer$$1, k$$3, SetTreeModule$$$add(comparer$$1, k1, t2$$3));
      }

    case 3:
      {
        return SetTreeModule$$$add(comparer$$1, k$$3, SetTreeModule$$$add(comparer$$1, k2$$2, t1$$3));
      }

    case 4:
      {
        if (h1 + SetTreeModule$$$tolerance < h2) {
          return SetTreeModule$$$rebalance(SetTreeModule$$$balance(comparer$$1, t1$$1, k$$3, t21), k2$$3, t22);
        } else if (h2 + SetTreeModule$$$tolerance < h1) {
          return SetTreeModule$$$rebalance(t11, k1$$1, SetTreeModule$$$balance(comparer$$1, t12, k$$3, t2$$1));
        } else {
          return SetTreeModule$$$mk(t1$$1, k$$3, t2$$1);
        }
      }
  }
}
function SetTreeModule$$$split(comparer$$2, pivot, t$$2) {
  switch (t$$2.tag) {
    case 2:
      {
        const c$$3 = comparer$$2.Compare(t$$2.fields[0], pivot) | 0;

        if (c$$3 < 0) {
          return [t$$2, false, new SetTree$00601(0, "SetEmpty")];
        } else if (c$$3 === 0) {
          return [new SetTree$00601(0, "SetEmpty"), true, new SetTree$00601(0, "SetEmpty")];
        } else {
          return [new SetTree$00601(0, "SetEmpty"), false, t$$2];
        }
      }

    case 0:
      {
        return [new SetTree$00601(0, "SetEmpty"), false, new SetTree$00601(0, "SetEmpty")];
      }

    default:
      {
        const c$$2 = comparer$$2.Compare(pivot, t$$2.fields[0]) | 0;

        if (c$$2 < 0) {
          const patternInput = SetTreeModule$$$split(comparer$$2, pivot, t$$2.fields[1]);
          return [patternInput[0], patternInput[1], SetTreeModule$$$balance(comparer$$2, patternInput[2], t$$2.fields[0], t$$2.fields[2])];
        } else if (c$$2 === 0) {
          return [t$$2.fields[1], true, t$$2.fields[2]];
        } else {
          const patternInput$$1 = SetTreeModule$$$split(comparer$$2, pivot, t$$2.fields[2]);
          return [SetTreeModule$$$balance(comparer$$2, t$$2.fields[1], t$$2.fields[0], patternInput$$1[0]), patternInput$$1[1], patternInput$$1[2]];
        }
      }
  }
}
function SetTreeModule$$$spliceOutSuccessor(t$$3) {
  switch (t$$3.tag) {
    case 2:
      {
        return [t$$3.fields[0], new SetTree$00601(0, "SetEmpty")];
      }

    case 1:
      {
        if (t$$3.fields[1].tag === 0) {
          return [t$$3.fields[0], t$$3.fields[2]];
        } else {
          const patternInput$$2 = SetTreeModule$$$spliceOutSuccessor(t$$3.fields[1]);
          return [patternInput$$2[0], SetTreeModule$$$mk(patternInput$$2[1], t$$3.fields[0], t$$3.fields[2])];
        }
      }

    default:
      {
        throw new Error("internal error: Set.spliceOutSuccessor");
      }
  }
}
function SetTreeModule$$$remove(comparer$$3, k$$4, t$$4) {
  switch (t$$4.tag) {
    case 2:
      {
        const c$$4 = comparer$$3.Compare(k$$4, t$$4.fields[0]) | 0;

        if (c$$4 === 0) {
          return new SetTree$00601(0, "SetEmpty");
        } else {
          return t$$4;
        }
      }

    case 1:
      {
        const c$$5 = comparer$$3.Compare(k$$4, t$$4.fields[0]) | 0;

        if (c$$5 < 0) {
          return SetTreeModule$$$rebalance(SetTreeModule$$$remove(comparer$$3, k$$4, t$$4.fields[1]), t$$4.fields[0], t$$4.fields[2]);
        } else if (c$$5 === 0) {
          if (t$$4.fields[1].tag === 0) {
            return t$$4.fields[2];
          } else if (t$$4.fields[2].tag === 0) {
            return t$$4.fields[1];
          } else {
            const patternInput$$3 = SetTreeModule$$$spliceOutSuccessor(t$$4.fields[2]);
            return SetTreeModule$$$mk(t$$4.fields[1], patternInput$$3[0], patternInput$$3[1]);
          }
        } else {
          return SetTreeModule$$$rebalance(t$$4.fields[1], t$$4.fields[0], SetTreeModule$$$remove(comparer$$3, k$$4, t$$4.fields[2]));
        }
      }

    default:
      {
        return t$$4;
      }
  }
}
function SetTreeModule$$$mem($comparer$$4$$35, $k$$5$$36, $t$$5$$37) {
  SetTreeModule$$$mem: while (true) {
    const comparer$$4 = $comparer$$4$$35,
          k$$5 = $k$$5$$36,
          t$$5 = $t$$5$$37;

    switch (t$$5.tag) {
      case 2:
        {
          return comparer$$4.Compare(k$$5, t$$5.fields[0]) === 0;
        }

      case 0:
        {
          return false;
        }

      default:
        {
          const c$$6 = comparer$$4.Compare(k$$5, t$$5.fields[0]) | 0;

          if (c$$6 < 0) {
            $comparer$$4$$35 = comparer$$4;
            $k$$5$$36 = k$$5;
            $t$$5$$37 = t$$5.fields[1];
            continue SetTreeModule$$$mem;
          } else if (c$$6 === 0) {
            return true;
          } else {
            $comparer$$4$$35 = comparer$$4;
            $k$$5$$36 = k$$5;
            $t$$5$$37 = t$$5.fields[2];
            continue SetTreeModule$$$mem;
          }
        }
    }

    break;
  }
}
function SetTreeModule$$$iter($f$$38, $t$$6$$39) {
  SetTreeModule$$$iter: while (true) {
    const f = $f$$38,
          t$$6 = $t$$6$$39;

    switch (t$$6.tag) {
      case 2:
        {
          f(t$$6.fields[0]);
          break;
        }

      case 0:
        {
          void null;
          break;
        }

      default:
        {
          SetTreeModule$$$iter(f, t$$6.fields[1]);
          f(t$$6.fields[0]);
          $f$$38 = f;
          $t$$6$$39 = t$$6.fields[2];
          continue SetTreeModule$$$iter;
        }
    }

    break;
  }
}
function SetTreeModule$$$foldBack($f$$1$$40, $m$$1$$41, $x$$1$$42) {
  SetTreeModule$$$foldBack: while (true) {
    const f$$1 = $f$$1$$40,
          m$$1 = $m$$1$$41,
          x$$1 = $x$$1$$42;

    switch (m$$1.tag) {
      case 2:
        {
          return f$$1(m$$1.fields[0], x$$1);
        }

      case 0:
        {
          return x$$1;
        }

      default:
        {
          $f$$1$$40 = f$$1;
          $m$$1$$41 = m$$1.fields[1];
          $x$$1$$42 = f$$1(m$$1.fields[0], SetTreeModule$$$foldBack(f$$1, m$$1.fields[2], x$$1));
          continue SetTreeModule$$$foldBack;
        }
    }

    break;
  }
}
function SetTreeModule$$$fold($f$$2$$43, $x$$2$$44, $m$$2$$45) {
  SetTreeModule$$$fold: while (true) {
    const f$$2 = $f$$2$$43,
          x$$2 = $x$$2$$44,
          m$$2 = $m$$2$$45;

    switch (m$$2.tag) {
      case 2:
        {
          return f$$2(x$$2, m$$2.fields[0]);
        }

      case 0:
        {
          return x$$2;
        }

      default:
        {
          const x$$3 = SetTreeModule$$$fold(f$$2, x$$2, m$$2.fields[1]);
          const x$$4 = f$$2(x$$3, m$$2.fields[0]);
          $f$$2$$43 = f$$2;
          $x$$2$$44 = x$$4;
          $m$$2$$45 = m$$2.fields[2];
          continue SetTreeModule$$$fold;
        }
    }

    break;
  }
}
function SetTreeModule$$$forall($f$$3$$46, $m$$3$$47) {
  SetTreeModule$$$forall: while (true) {
    const f$$3 = $f$$3$$46,
          m$$3 = $m$$3$$47;

    switch (m$$3.tag) {
      case 2:
        {
          return f$$3(m$$3.fields[0]);
        }

      case 0:
        {
          return true;
        }

      default:
        {
          if (f$$3(m$$3.fields[0]) ? SetTreeModule$$$forall(f$$3, m$$3.fields[1]) : false) {
            $f$$3$$46 = f$$3;
            $m$$3$$47 = m$$3.fields[2];
            continue SetTreeModule$$$forall;
          } else {
            return false;
          }
        }
    }

    break;
  }
}
function SetTreeModule$$$exists($f$$4$$48, $m$$4$$49) {
  SetTreeModule$$$exists: while (true) {
    const f$$4 = $f$$4$$48,
          m$$4 = $m$$4$$49;

    switch (m$$4.tag) {
      case 2:
        {
          return f$$4(m$$4.fields[0]);
        }

      case 0:
        {
          return false;
        }

      default:
        {
          if (f$$4(m$$4.fields[0]) ? true : SetTreeModule$$$exists(f$$4, m$$4.fields[1])) {
            return true;
          } else {
            $f$$4$$48 = f$$4;
            $m$$4$$49 = m$$4.fields[2];
            continue SetTreeModule$$$exists;
          }
        }
    }

    break;
  }
}
function SetTreeModule$$$isEmpty(m$$5) {
  if (m$$5.tag === 0) {
    return true;
  } else {
    return false;
  }
}
function SetTreeModule$$$subset(comparer$$5, a, b) {
  return SetTreeModule$$$forall(function (x$$5) {
    return SetTreeModule$$$mem(comparer$$5, x$$5, b);
  }, a);
}
function SetTreeModule$$$psubset(comparer$$6, a$$1, b$$1) {
  if (SetTreeModule$$$forall(function (x$$6) {
    return SetTreeModule$$$mem(comparer$$6, x$$6, b$$1);
  }, a$$1)) {
    return SetTreeModule$$$exists(function (x$$7) {
      return !SetTreeModule$$$mem(comparer$$6, x$$7, a$$1);
    }, b$$1);
  } else {
    return false;
  }
}
function SetTreeModule$$$filterAux($comparer$$7$$57, $f$$5$$58, $s$$2$$59, $acc$$1$$60) {
  SetTreeModule$$$filterAux: while (true) {
    const comparer$$7 = $comparer$$7$$57,
          f$$5 = $f$$5$$58,
          s$$2 = $s$$2$$59,
          acc$$1 = $acc$$1$$60;

    switch (s$$2.tag) {
      case 2:
        {
          if (f$$5(s$$2.fields[0])) {
            return SetTreeModule$$$add(comparer$$7, s$$2.fields[0], acc$$1);
          } else {
            return acc$$1;
          }
        }

      case 0:
        {
          return acc$$1;
        }

      default:
        {
          const acc$$2 = f$$5(s$$2.fields[0]) ? SetTreeModule$$$add(comparer$$7, s$$2.fields[0], acc$$1) : acc$$1;
          $comparer$$7$$57 = comparer$$7;
          $f$$5$$58 = f$$5;
          $s$$2$$59 = s$$2.fields[1];
          $acc$$1$$60 = SetTreeModule$$$filterAux(comparer$$7, f$$5, s$$2.fields[2], acc$$2);
          continue SetTreeModule$$$filterAux;
        }
    }

    break;
  }
}
function SetTreeModule$$$filter(comparer$$8, f$$6, s$$3) {
  return SetTreeModule$$$filterAux(comparer$$8, f$$6, s$$3, new SetTree$00601(0, "SetEmpty"));
}
function SetTreeModule$$$diffAux($comparer$$9$$64, $m$$6$$65, $acc$$3$$66) {
  SetTreeModule$$$diffAux: while (true) {
    const comparer$$9 = $comparer$$9$$64,
          m$$6 = $m$$6$$65,
          acc$$3 = $acc$$3$$66;

    switch (m$$6.tag) {
      case 2:
        {
          return SetTreeModule$$$remove(comparer$$9, m$$6.fields[0], acc$$3);
        }

      case 0:
        {
          return acc$$3;
        }

      default:
        {
          $comparer$$9$$64 = comparer$$9;
          $m$$6$$65 = m$$6.fields[1];
          $acc$$3$$66 = SetTreeModule$$$diffAux(comparer$$9, m$$6.fields[2], SetTreeModule$$$remove(comparer$$9, m$$6.fields[0], acc$$3));
          continue SetTreeModule$$$diffAux;
        }
    }

    break;
  }
}
function SetTreeModule$$$diff(comparer$$10, a$$2, b$$2) {
  return SetTreeModule$$$diffAux(comparer$$10, b$$2, a$$2);
}
function SetTreeModule$$$union(comparer$$11, t1$$4, t2$$4) {
  var $target$$73, h1$$1, h2$$1, k1$$4, k2$$16, t11$$2, t12$$2, t21$$1, t22$$1, t$$7, t$$8, k1$$5, t2$$5, k2$$17, t1$$5;

  if (t1$$4.tag === 0) {
    $target$$73 = 1;
    t$$7 = t2$$4;
  } else if (t1$$4.tag === 2) {
    if (t2$$4.tag === 0) {
      $target$$73 = 2;
      t$$8 = t1$$4;
    } else if (t2$$4.tag === 2) {
      $target$$73 = 3;
      k1$$5 = t1$$4.fields[0];
      t2$$5 = t2$$4;
    } else {
      $target$$73 = 3;
      k1$$5 = t1$$4.fields[0];
      t2$$5 = t2$$4;
    }
  } else if (t2$$4.tag === 0) {
    $target$$73 = 2;
    t$$8 = t1$$4;
  } else if (t2$$4.tag === 2) {
    $target$$73 = 4;
    k2$$17 = t2$$4.fields[0];
    t1$$5 = t1$$4;
  } else {
    $target$$73 = 0;
    h1$$1 = t1$$4.fields[3];
    h2$$1 = t2$$4.fields[3];
    k1$$4 = t1$$4.fields[0];
    k2$$16 = t2$$4.fields[0];
    t11$$2 = t1$$4.fields[1];
    t12$$2 = t1$$4.fields[2];
    t21$$1 = t2$$4.fields[1];
    t22$$1 = t2$$4.fields[2];
  }

  switch ($target$$73) {
    case 0:
      {
        if (h1$$1 > h2$$1) {
          const patternInput$$4 = SetTreeModule$$$split(comparer$$11, k1$$4, t2$$4);
          return SetTreeModule$$$balance(comparer$$11, SetTreeModule$$$union(comparer$$11, t11$$2, patternInput$$4[0]), k1$$4, SetTreeModule$$$union(comparer$$11, t12$$2, patternInput$$4[2]));
        } else {
          const patternInput$$5 = SetTreeModule$$$split(comparer$$11, k2$$16, t1$$4);
          return SetTreeModule$$$balance(comparer$$11, SetTreeModule$$$union(comparer$$11, t21$$1, patternInput$$5[0]), k2$$16, SetTreeModule$$$union(comparer$$11, t22$$1, patternInput$$5[2]));
        }
      }

    case 1:
      {
        return t$$7;
      }

    case 2:
      {
        return t$$8;
      }

    case 3:
      {
        return SetTreeModule$$$add(comparer$$11, k1$$5, t2$$5);
      }

    case 4:
      {
        return SetTreeModule$$$add(comparer$$11, k2$$17, t1$$5);
      }
  }
}
function SetTreeModule$$$intersectionAux($comparer$$12$$74, $b$$3$$75, $m$$7$$76, $acc$$4$$77) {
  SetTreeModule$$$intersectionAux: while (true) {
    const comparer$$12 = $comparer$$12$$74,
          b$$3 = $b$$3$$75,
          m$$7 = $m$$7$$76,
          acc$$4 = $acc$$4$$77;

    switch (m$$7.tag) {
      case 2:
        {
          if (SetTreeModule$$$mem(comparer$$12, m$$7.fields[0], b$$3)) {
            return SetTreeModule$$$add(comparer$$12, m$$7.fields[0], acc$$4);
          } else {
            return acc$$4;
          }
        }

      case 0:
        {
          return acc$$4;
        }

      default:
        {
          const acc$$5 = SetTreeModule$$$intersectionAux(comparer$$12, b$$3, m$$7.fields[2], acc$$4);
          const acc$$6 = SetTreeModule$$$mem(comparer$$12, m$$7.fields[0], b$$3) ? SetTreeModule$$$add(comparer$$12, m$$7.fields[0], acc$$5) : acc$$5;
          $comparer$$12$$74 = comparer$$12;
          $b$$3$$75 = b$$3;
          $m$$7$$76 = m$$7.fields[1];
          $acc$$4$$77 = acc$$6;
          continue SetTreeModule$$$intersectionAux;
        }
    }

    break;
  }
}
function SetTreeModule$$$intersection(comparer$$13, a$$3, b$$4) {
  return SetTreeModule$$$intersectionAux(comparer$$13, b$$4, a$$3, new SetTree$00601(0, "SetEmpty"));
}
function SetTreeModule$$$partition1(comparer$$14, f$$7, k$$16, acc1, acc2) {
  if (f$$7(k$$16)) {
    return [SetTreeModule$$$add(comparer$$14, k$$16, acc1), acc2];
  } else {
    return [acc1, SetTreeModule$$$add(comparer$$14, k$$16, acc2)];
  }
}
function SetTreeModule$$$partitionAux($comparer$$15$$86, $f$$8$$87, $s$$4$$88, $acc_0$$89, $acc_1$$90) {
  SetTreeModule$$$partitionAux: while (true) {
    const comparer$$15 = $comparer$$15$$86,
          f$$8 = $f$$8$$87,
          s$$4 = $s$$4$$88,
          acc_0 = $acc_0$$89,
          acc_1 = $acc_1$$90;

    switch (s$$4.tag) {
      case 2:
        {
          return SetTreeModule$$$partition1(comparer$$15, f$$8, s$$4.fields[0], acc_0, acc_1);
        }

      case 0:
        {
          return [acc_0, acc_1];
        }

      default:
        {
          const acc$$8 = SetTreeModule$$$partitionAux(comparer$$15, f$$8, s$$4.fields[2], acc_0, acc_1);
          const acc$$9 = SetTreeModule$$$partition1(comparer$$15, f$$8, s$$4.fields[0], acc$$8[0], acc$$8[1]);
          $comparer$$15$$86 = comparer$$15;
          $f$$8$$87 = f$$8;
          $s$$4$$88 = s$$4.fields[1];
          $acc_0$$89 = acc$$9[0];
          $acc_1$$90 = acc$$9[1];
          continue SetTreeModule$$$partitionAux;
        }
    }

    break;
  }
}
function SetTreeModule$$$partition(comparer$$16, f$$9, s$$5) {
  const seed = [new SetTree$00601(0, "SetEmpty"), new SetTree$00601(0, "SetEmpty")];
  return SetTreeModule$$$partitionAux(comparer$$16, f$$9, s$$5, seed[0], seed[1]);
}
function SetTreeModule$$$$007CMatchSetNode$007CMatchSetEmpty$007C(s$$6) {
  switch (s$$6.tag) {
    case 2:
      {
        return new _Option_js__WEBPACK_IMPORTED_MODULE_2__["Choice"](0, "Choice1Of2", [s$$6.fields[0], new SetTree$00601(0, "SetEmpty"), new SetTree$00601(0, "SetEmpty")]);
      }

    case 0:
      {
        return new _Option_js__WEBPACK_IMPORTED_MODULE_2__["Choice"](1, "Choice2Of2", void null);
      }

    default:
      {
        return new _Option_js__WEBPACK_IMPORTED_MODULE_2__["Choice"](0, "Choice1Of2", [s$$6.fields[0], s$$6.fields[1], s$$6.fields[2]]);
      }
  }
}
function SetTreeModule$$$minimumElementAux($s$$7$$95, $n$$1$$96) {
  SetTreeModule$$$minimumElementAux: while (true) {
    const s$$7 = $s$$7$$95,
          n$$1 = $n$$1$$96;

    switch (s$$7.tag) {
      case 2:
        {
          return s$$7.fields[0];
        }

      case 0:
        {
          return n$$1;
        }

      default:
        {
          $s$$7$$95 = s$$7.fields[1];
          $n$$1$$96 = s$$7.fields[0];
          continue SetTreeModule$$$minimumElementAux;
        }
    }

    break;
  }
}
function SetTreeModule$$$minimumElementOpt(s$$8) {
  switch (s$$8.tag) {
    case 2:
      {
        return Object(_Option_js__WEBPACK_IMPORTED_MODULE_2__["some"])(s$$8.fields[0]);
      }

    case 0:
      {
        return undefined;
      }

    default:
      {
        return Object(_Option_js__WEBPACK_IMPORTED_MODULE_2__["some"])(SetTreeModule$$$minimumElementAux(s$$8.fields[1], s$$8.fields[0]));
      }
  }
}
function SetTreeModule$$$maximumElementAux($s$$9$$98, $n$$2$$99) {
  SetTreeModule$$$maximumElementAux: while (true) {
    const s$$9 = $s$$9$$98,
          n$$2 = $n$$2$$99;

    switch (s$$9.tag) {
      case 2:
        {
          return s$$9.fields[0];
        }

      case 0:
        {
          return n$$2;
        }

      default:
        {
          $s$$9$$98 = s$$9.fields[2];
          $n$$2$$99 = s$$9.fields[0];
          continue SetTreeModule$$$maximumElementAux;
        }
    }

    break;
  }
}
function SetTreeModule$$$maximumElementOpt(s$$10) {
  switch (s$$10.tag) {
    case 2:
      {
        return Object(_Option_js__WEBPACK_IMPORTED_MODULE_2__["some"])(s$$10.fields[0]);
      }

    case 0:
      {
        return undefined;
      }

    default:
      {
        return Object(_Option_js__WEBPACK_IMPORTED_MODULE_2__["some"])(SetTreeModule$$$maximumElementAux(s$$10.fields[2], s$$10.fields[0]));
      }
  }
}
function SetTreeModule$$$minimumElement(s$$11) {
  const matchValue$$4 = SetTreeModule$$$minimumElementOpt(s$$11);

  if (matchValue$$4 == null) {
    throw new Error("Set contains no elements");
  } else {
    const k$$27 = Object(_Option_js__WEBPACK_IMPORTED_MODULE_2__["value"])(matchValue$$4);
    return k$$27;
  }
}
function SetTreeModule$$$maximumElement(s$$12) {
  const matchValue$$5 = SetTreeModule$$$maximumElementOpt(s$$12);

  if (matchValue$$5 == null) {
    throw new Error("Set contains no elements");
  } else {
    const k$$28 = Object(_Option_js__WEBPACK_IMPORTED_MODULE_2__["value"])(matchValue$$5);
    return k$$28;
  }
}
const SetTreeModule$002ESetIterator$00601 = Object(_Types_js__WEBPACK_IMPORTED_MODULE_0__["declare"])(function Set_SetTreeModule_SetIterator(stack, started) {
  this.stack = stack;
  this.started = started;
}, _Types_js__WEBPACK_IMPORTED_MODULE_0__["Record"]);
function SetTreeModule$002ESetIterator$00601$reflection($gen$$103) {
  return Object(_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["record_type"])("Set.SetTreeModule.SetIterator`1", [$gen$$103], SetTreeModule$002ESetIterator$00601, () => [["stack", Object(_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["list_type"])(SetTree$00601$reflection($gen$$103))], ["started", _Reflection_js__WEBPACK_IMPORTED_MODULE_1__["bool_type"]]]);
}
function SetTreeModule$$$collapseLHS($stack$$104) {
  SetTreeModule$$$collapseLHS: while (true) {
    const stack = $stack$$104;

    if (stack.tail != null) {
      if (stack.head.tag === 2) {
        return stack;
      } else if (stack.head.tag === 1) {
        $stack$$104 = new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](stack.head.fields[1], new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](SetTreeModule$$$SetOne(stack.head.fields[0]), new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](stack.head.fields[2], stack.tail)));
        continue SetTreeModule$$$collapseLHS;
      } else {
        $stack$$104 = stack.tail;
        continue SetTreeModule$$$collapseLHS;
      }
    } else {
      return new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"]();
    }

    break;
  }
}
function SetTreeModule$$$mkIterator(s$$13) {
  return new SetTreeModule$002ESetIterator$00601(SetTreeModule$$$collapseLHS(new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](s$$13, new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"]())), false);
}
function SetTreeModule$$$notStarted() {
  throw new Error("Enumeration not started");
}
function SetTreeModule$$$alreadyFinished() {
  throw new Error("Enumeration already started");
}
function SetTreeModule$$$current(i) {
  if (i.started) {
    const matchValue$$6 = i.stack;

    if (matchValue$$6.tail == null) {
      return SetTreeModule$$$alreadyFinished();
    } else if (matchValue$$6.head.tag === 2) {
      return matchValue$$6.head.fields[0];
    } else {
      throw new Error("Please report error: Set iterator, unexpected stack for current");
    }
  } else {
    return SetTreeModule$$$notStarted();
  }
}
function SetTreeModule$$$moveNext(i$$1) {
  if (i$$1.started) {
    const matchValue$$7 = i$$1.stack;

    if (matchValue$$7.tail == null) {
      return false;
    } else if (matchValue$$7.head.tag === 2) {
      i$$1.stack = SetTreeModule$$$collapseLHS(matchValue$$7.tail);
      return !(i$$1.stack.tail == null);
    } else {
      throw new Error("Please report error: Set iterator, unexpected stack for moveNext");
    }
  } else {
    i$$1.started = true;
    return !(i$$1.stack.tail == null);
  }
}
const SetTreeModule$002EmkIEnumerator$00601 = Object(_Types_js__WEBPACK_IMPORTED_MODULE_0__["declare"])(function Set_SetTreeModule_mkIEnumerator(s$$14) {
  const $this$$1 = this;
  $this$$1.s = s$$14;
  $this$$1.i = SetTreeModule$$$mkIterator($this$$1.s);
  void null;
});
function SetTreeModule$002EmkIEnumerator$00601$reflection($gen$$108) {
  return Object(_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["class_type"])("Set.SetTreeModule.mkIEnumerator`1", [$gen$$108], SetTreeModule$002EmkIEnumerator$00601);
}
function SetTreeModule$002EmkIEnumerator$00601$$$$002Ector$$Z5B395D56(s$$14) {
  return this instanceof SetTreeModule$002EmkIEnumerator$00601 ? SetTreeModule$002EmkIEnumerator$00601.call(this, s$$14) : new SetTreeModule$002EmkIEnumerator$00601(s$$14);
}
Object.defineProperty(SetTreeModule$002EmkIEnumerator$00601.prototype, "Current", {
  "get": function () {
    const __ = this;
    return SetTreeModule$$$current(__.i);
  }
});

SetTreeModule$002EmkIEnumerator$00601.prototype.MoveNext = function () {
  const __$$1 = this;
  return SetTreeModule$$$moveNext(__$$1.i);
};

SetTreeModule$002EmkIEnumerator$00601.prototype.Reset = function () {
  const __$$2 = this;
  __$$2.i = SetTreeModule$$$mkIterator(__$$2.s);
};

SetTreeModule$002EmkIEnumerator$00601.prototype.Dispose = function () {
  void null;
};

function SetTreeModule$$$mkIEnumerator(s$$15) {
  return SetTreeModule$002EmkIEnumerator$00601$$$$002Ector$$Z5B395D56(s$$15);
}
function SetTreeModule$$$toSeq(s$$16) {
  const en = SetTreeModule$$$mkIEnumerator(s$$16);
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["unfold"])(function generator(en$$1) {
    if (en$$1.MoveNext()) {
      return [en$$1.Current, en$$1];
    } else {
      return undefined;
    }
  }, en);
}
function SetTreeModule$$$compareStacks($comparer$$17$$112, $l1$$113, $l2$$114) {
  SetTreeModule$$$compareStacks: while (true) {
    const comparer$$17 = $comparer$$17$$112,
          l1 = $l1$$113,
          l2 = $l2$$114;
    var $target$$115, t1$$6, t2$$6, n1k, n2k, t1$$7, t2$$7, n1k$$1, n2k$$1, n2r, t1$$8, t2$$8, emp, n1k$$2, n1r, n2k$$2, t1$$9, t2$$9, n1k$$3, n1r$$1, n2k$$3, n2r$$1, t1$$10, t2$$10, n1k$$4, t1$$11, n1k$$5, n1l, n1r$$2, t1$$12, n2k$$4, t2$$11, n2k$$5, n2l, n2r$$2, t2$$12;

    if (l1.tail != null) {
      if (l2.tail != null) {
        if (l2.head.tag === 2) {
          if (l1.head.tag === 2) {
            $target$$115 = 4;
            n1k = l1.head.fields[0];
            n2k = l2.head.fields[0];
            t1$$7 = l1.tail;
            t2$$7 = l2.tail;
          } else if (l1.head.tag === 1) {
            if (l1.head.fields[1].tag === 0) {
              $target$$115 = 6;
              emp = l1.head.fields[1];
              n1k$$2 = l1.head.fields[0];
              n1r = l1.head.fields[2];
              n2k$$2 = l2.head.fields[0];
              t1$$9 = l1.tail;
              t2$$9 = l2.tail;
            } else {
              $target$$115 = 9;
              n1k$$5 = l1.head.fields[0];
              n1l = l1.head.fields[1];
              n1r$$2 = l1.head.fields[2];
              t1$$12 = l1.tail;
            }
          } else {
            $target$$115 = 10;
            n2k$$4 = l2.head.fields[0];
            t2$$11 = l2.tail;
          }
        } else if (l2.head.tag === 1) {
          if (l2.head.fields[1].tag === 0) {
            if (l1.head.tag === 2) {
              $target$$115 = 5;
              n1k$$1 = l1.head.fields[0];
              n2k$$1 = l2.head.fields[0];
              n2r = l2.head.fields[2];
              t1$$8 = l1.tail;
              t2$$8 = l2.tail;
            } else if (l1.head.tag === 1) {
              if (l1.head.fields[1].tag === 0) {
                $target$$115 = 7;
                n1k$$3 = l1.head.fields[0];
                n1r$$1 = l1.head.fields[2];
                n2k$$3 = l2.head.fields[0];
                n2r$$1 = l2.head.fields[2];
                t1$$10 = l1.tail;
                t2$$10 = l2.tail;
              } else {
                $target$$115 = 9;
                n1k$$5 = l1.head.fields[0];
                n1l = l1.head.fields[1];
                n1r$$2 = l1.head.fields[2];
                t1$$12 = l1.tail;
              }
            } else {
              $target$$115 = 11;
              n2k$$5 = l2.head.fields[0];
              n2l = l2.head.fields[1];
              n2r$$2 = l2.head.fields[2];
              t2$$12 = l2.tail;
            }
          } else if (l1.head.tag === 2) {
            $target$$115 = 8;
            n1k$$4 = l1.head.fields[0];
            t1$$11 = l1.tail;
          } else if (l1.head.tag === 1) {
            $target$$115 = 9;
            n1k$$5 = l1.head.fields[0];
            n1l = l1.head.fields[1];
            n1r$$2 = l1.head.fields[2];
            t1$$12 = l1.tail;
          } else {
            $target$$115 = 11;
            n2k$$5 = l2.head.fields[0];
            n2l = l2.head.fields[1];
            n2r$$2 = l2.head.fields[2];
            t2$$12 = l2.tail;
          }
        } else if (l1.head.tag === 2) {
          $target$$115 = 8;
          n1k$$4 = l1.head.fields[0];
          t1$$11 = l1.tail;
        } else if (l1.head.tag === 1) {
          $target$$115 = 9;
          n1k$$5 = l1.head.fields[0];
          n1l = l1.head.fields[1];
          n1r$$2 = l1.head.fields[2];
          t1$$12 = l1.tail;
        } else {
          $target$$115 = 3;
          t1$$6 = l1.tail;
          t2$$6 = l2.tail;
        }
      } else {
        $target$$115 = 2;
      }
    } else if (l2.tail != null) {
      $target$$115 = 1;
    } else {
      $target$$115 = 0;
    }

    switch ($target$$115) {
      case 0:
        {
          return 0;
        }

      case 1:
        {
          return -1 | 0;
        }

      case 2:
        {
          return 1;
        }

      case 3:
        {
          $comparer$$17$$112 = comparer$$17;
          $l1$$113 = t1$$6;
          $l2$$114 = t2$$6;
          continue SetTreeModule$$$compareStacks;
        }

      case 4:
        {
          const c$$7 = comparer$$17.Compare(n1k, n2k) | 0;

          if (c$$7 !== 0) {
            return c$$7 | 0;
          } else {
            $comparer$$17$$112 = comparer$$17;
            $l1$$113 = t1$$7;
            $l2$$114 = t2$$7;
            continue SetTreeModule$$$compareStacks;
          }
        }

      case 5:
        {
          const c$$8 = comparer$$17.Compare(n1k$$1, n2k$$1) | 0;

          if (c$$8 !== 0) {
            return c$$8 | 0;
          } else {
            $comparer$$17$$112 = comparer$$17;
            $l1$$113 = new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](new SetTree$00601(0, "SetEmpty"), t1$$8);
            $l2$$114 = new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](n2r, t2$$8);
            continue SetTreeModule$$$compareStacks;
          }
        }

      case 6:
        {
          const c$$9 = comparer$$17.Compare(n1k$$2, n2k$$2) | 0;

          if (c$$9 !== 0) {
            return c$$9 | 0;
          } else {
            $comparer$$17$$112 = comparer$$17;
            $l1$$113 = new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](n1r, t1$$9);
            $l2$$114 = new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](emp, t2$$9);
            continue SetTreeModule$$$compareStacks;
          }
        }

      case 7:
        {
          const c$$10 = comparer$$17.Compare(n1k$$3, n2k$$3) | 0;

          if (c$$10 !== 0) {
            return c$$10 | 0;
          } else {
            $comparer$$17$$112 = comparer$$17;
            $l1$$113 = new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](n1r$$1, t1$$10);
            $l2$$114 = new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](n2r$$1, t2$$10);
            continue SetTreeModule$$$compareStacks;
          }
        }

      case 8:
        {
          $comparer$$17$$112 = comparer$$17;
          $l1$$113 = new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](new SetTree$00601(0, "SetEmpty"), new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](SetTreeModule$$$SetOne(n1k$$4), t1$$11));
          $l2$$114 = l2;
          continue SetTreeModule$$$compareStacks;
        }

      case 9:
        {
          $comparer$$17$$112 = comparer$$17;
          $l1$$113 = new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](n1l, new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](SetTreeModule$$$SetNode(n1k$$5, new SetTree$00601(0, "SetEmpty"), n1r$$2, 0), t1$$12));
          $l2$$114 = l2;
          continue SetTreeModule$$$compareStacks;
        }

      case 10:
        {
          $comparer$$17$$112 = comparer$$17;
          $l1$$113 = l1;
          $l2$$114 = new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](new SetTree$00601(0, "SetEmpty"), new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](SetTreeModule$$$SetOne(n2k$$4), t2$$11));
          continue SetTreeModule$$$compareStacks;
        }

      case 11:
        {
          $comparer$$17$$112 = comparer$$17;
          $l1$$113 = l1;
          $l2$$114 = new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](n2l, new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](SetTreeModule$$$SetNode(n2k$$5, new SetTree$00601(0, "SetEmpty"), n2r$$2, 0), t2$$12));
          continue SetTreeModule$$$compareStacks;
        }
    }

    break;
  }
}
function SetTreeModule$$$compare(comparer$$18, s1, s2) {
  if (s1.tag === 0) {
    if (s2.tag === 0) {
      return 0;
    } else {
      return -1 | 0;
    }
  } else if (s2.tag === 0) {
    return 1;
  } else {
    return SetTreeModule$$$compareStacks(comparer$$18, new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](s1, new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"]()), new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](s2, new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"]())) | 0;
  }
}
function SetTreeModule$$$choose(s$$17) {
  return SetTreeModule$$$minimumElement(s$$17);
}
function SetTreeModule$$$loop($m$$8$$120, $acc$$10$$121) {
  SetTreeModule$$$loop: while (true) {
    const m$$8 = $m$$8$$120,
          acc$$10 = $acc$$10$$121;

    switch (m$$8.tag) {
      case 2:
        {
          return new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](m$$8.fields[0], acc$$10);
        }

      case 0:
        {
          return acc$$10;
        }

      default:
        {
          $m$$8$$120 = m$$8.fields[1];
          $acc$$10$$121 = new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](m$$8.fields[0], SetTreeModule$$$loop(m$$8.fields[2], acc$$10));
          continue SetTreeModule$$$loop;
        }
    }

    break;
  }
}
function SetTreeModule$$$toList(s$$18) {
  return SetTreeModule$$$loop(s$$18, new _Types_js__WEBPACK_IMPORTED_MODULE_0__["List"]());
}
function SetTreeModule$$$copyToArray(s$$19, arr, i$$2) {
  let j = i$$2 | 0;
  SetTreeModule$$$iter(function (x$$8) {
    arr[j] = x$$8;
    j = j + 1;
  }, s$$19);
}
function SetTreeModule$$$mkFromEnumerator($comparer$$19$$126, $acc$$11$$127, $e$$128) {
  SetTreeModule$$$mkFromEnumerator: while (true) {
    const comparer$$19 = $comparer$$19$$126,
          acc$$11 = $acc$$11$$127,
          e = $e$$128;

    if (e.MoveNext()) {
      $comparer$$19$$126 = comparer$$19;
      $acc$$11$$127 = SetTreeModule$$$add(comparer$$19, e.Current, acc$$11);
      $e$$128 = e;
      continue SetTreeModule$$$mkFromEnumerator;
    } else {
      return acc$$11;
    }

    break;
  }
}
function SetTreeModule$$$ofSeq(comparer$$20, c$$11) {
  const ie = Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["getEnumerator"])(c$$11);

  try {
    return SetTreeModule$$$mkFromEnumerator(comparer$$20, new SetTree$00601(0, "SetEmpty"), ie);
  } finally {
    if (Object(_Util_js__WEBPACK_IMPORTED_MODULE_4__["isDisposable"])(ie)) {
      ie.Dispose();
    } else {
      void null;
    }
  }
}
function SetTreeModule$$$ofArray(comparer$$21, arr$$1) {
  let acc$$12 = new SetTree$00601(0, "SetEmpty");

  for (let i$$3 = 0; i$$3 <= arr$$1.length - 1; i$$3++) {
    acc$$12 = SetTreeModule$$$add(comparer$$21, arr$$1[i$$3], acc$$12);
  }

  return acc$$12;
}
const FSharpSet = Object(_Types_js__WEBPACK_IMPORTED_MODULE_0__["declare"])(function Set_Set(comparer$$22, tree) {
  const $this$$2 = this;
  $this$$2.comparer = comparer$$22;
  $this$$2.tree = tree;
  void null;
});
function FSharpSet$reflection($gen$$133) {
  return Object(_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["class_type"])("Set.FSharpSet", [$gen$$133], FSharpSet);
}
function FSharpSet$$$$002Ector$$2528C5CB(comparer$$22, tree) {
  return this instanceof FSharpSet ? FSharpSet.call(this, comparer$$22, tree) : new FSharpSet(comparer$$22, tree);
}
function FSharpSet$$get_Comparer(__$$4) {
  return __$$4.comparer;
}
function FSharpSet$$get_Tree(__$$5) {
  return __$$5.tree;
}
function FSharpSet$$Add$$2B595(s$$20, x$$9) {
  return FSharpSet$$$$002Ector$$2528C5CB(FSharpSet$$get_Comparer(s$$20), SetTreeModule$$$add(FSharpSet$$get_Comparer(s$$20), x$$9, FSharpSet$$get_Tree(s$$20)));
}
function FSharpSet$$Remove$$2B595(s$$21, x$$10) {
  return FSharpSet$$$$002Ector$$2528C5CB(FSharpSet$$get_Comparer(s$$21), SetTreeModule$$$remove(FSharpSet$$get_Comparer(s$$21), x$$10, FSharpSet$$get_Tree(s$$21)));
}
function FSharpSet$$get_Count(s$$22) {
  return SetTreeModule$$$count(FSharpSet$$get_Tree(s$$22));
}
function FSharpSet$$Contains$$2B595(s$$23, x$$11) {
  return SetTreeModule$$$mem(FSharpSet$$get_Comparer(s$$23), x$$11, FSharpSet$$get_Tree(s$$23));
}
function FSharpSet$$Iterate$$5028453F(s$$24, x$$12) {
  SetTreeModule$$$iter(x$$12, FSharpSet$$get_Tree(s$$24));
}
function FSharpSet$$Fold(s$$25, f$$10, z) {
  return SetTreeModule$$$fold(function (x$$13, z$$1) {
    return f$$10(z$$1, x$$13);
  }, z, FSharpSet$$get_Tree(s$$25));
}
function FSharpSet$$get_IsEmpty(s$$26) {
  return SetTreeModule$$$isEmpty(FSharpSet$$get_Tree(s$$26));
}
function FSharpSet$$Partition$$Z1D55A0D7(s$$27, f$$11) {
  const matchValue$$10 = FSharpSet$$get_Tree(s$$27);

  if (matchValue$$10.tag === 0) {
    return [s$$27, s$$27];
  } else {
    const patternInput$$6 = SetTreeModule$$$partition(FSharpSet$$get_Comparer(s$$27), f$$11, FSharpSet$$get_Tree(s$$27));
    return [FSharpSet$$$$002Ector$$2528C5CB(FSharpSet$$get_Comparer(s$$27), patternInput$$6[0]), FSharpSet$$$$002Ector$$2528C5CB(FSharpSet$$get_Comparer(s$$27), patternInput$$6[1])];
  }
}
function FSharpSet$$Filter$$Z1D55A0D7(s$$28, f$$12) {
  const matchValue$$11 = FSharpSet$$get_Tree(s$$28);

  if (matchValue$$11.tag === 0) {
    return s$$28;
  } else {
    return FSharpSet$$$$002Ector$$2528C5CB(FSharpSet$$get_Comparer(s$$28), SetTreeModule$$$filter(FSharpSet$$get_Comparer(s$$28), f$$12, FSharpSet$$get_Tree(s$$28)));
  }
}
function FSharpSet$$Map$$7597B8F7(s$$29, f$$13, comparer$$23) {
  return FSharpSet$$$$002Ector$$2528C5CB(comparer$$23, SetTreeModule$$$fold(function (acc$$13, k$$33) {
    return SetTreeModule$$$add(comparer$$23, f$$13(k$$33), acc$$13);
  }, new SetTree$00601(0, "SetEmpty"), FSharpSet$$get_Tree(s$$29)));
}
function FSharpSet$$Exists$$Z1D55A0D7(s$$30, f$$14) {
  return SetTreeModule$$$exists(f$$14, FSharpSet$$get_Tree(s$$30));
}
function FSharpSet$$ForAll$$Z1D55A0D7(s$$31, f$$15) {
  return SetTreeModule$$$forall(f$$15, FSharpSet$$get_Tree(s$$31));
}
function FSharpSet$$$op_Subtraction(a$$4, b$$5) {
  const matchValue$$12 = FSharpSet$$get_Tree(a$$4);

  if (matchValue$$12.tag === 0) {
    return a$$4;
  } else {
    const matchValue$$13 = FSharpSet$$get_Tree(b$$5);

    if (matchValue$$13.tag === 0) {
      return a$$4;
    } else {
      return FSharpSet$$$$002Ector$$2528C5CB(FSharpSet$$get_Comparer(a$$4), SetTreeModule$$$diff(FSharpSet$$get_Comparer(a$$4), FSharpSet$$get_Tree(a$$4), FSharpSet$$get_Tree(b$$5)));
    }
  }
}
function FSharpSet$$$op_Addition(a$$5, b$$6) {
  const matchValue$$14 = FSharpSet$$get_Tree(b$$6);

  if (matchValue$$14.tag === 0) {
    return a$$5;
  } else {
    const matchValue$$15 = FSharpSet$$get_Tree(a$$5);

    if (matchValue$$15.tag === 0) {
      return b$$6;
    } else {
      return FSharpSet$$$$002Ector$$2528C5CB(FSharpSet$$get_Comparer(a$$5), SetTreeModule$$$union(FSharpSet$$get_Comparer(a$$5), FSharpSet$$get_Tree(a$$5), FSharpSet$$get_Tree(b$$6)));
    }
  }
}
function FSharpSet$$$Intersection$$Z3BE9BFE0(a$$6, b$$7) {
  const matchValue$$16 = FSharpSet$$get_Tree(b$$7);

  if (matchValue$$16.tag === 0) {
    return b$$7;
  } else {
    const matchValue$$17 = FSharpSet$$get_Tree(a$$6);

    if (matchValue$$17.tag === 0) {
      return a$$6;
    } else {
      return FSharpSet$$$$002Ector$$2528C5CB(FSharpSet$$get_Comparer(a$$6), SetTreeModule$$$intersection(FSharpSet$$get_Comparer(a$$6), FSharpSet$$get_Tree(a$$6), FSharpSet$$get_Tree(b$$7)));
    }
  }
}
function FSharpSet$$$IntersectionMany$$Z15B59630(sets) {
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["reduce"])(FSharpSet$$$Intersection$$Z3BE9BFE0, sets);
}
function FSharpSet$$$Equality$$Z3BE9BFE0(a$$7, b$$8) {
  return SetTreeModule$$$compare(FSharpSet$$get_Comparer(a$$7), FSharpSet$$get_Tree(a$$7), FSharpSet$$get_Tree(b$$8)) === 0;
}
function FSharpSet$$$Compare$$Z3BE9BFE0(a$$8, b$$9) {
  return SetTreeModule$$$compare(FSharpSet$$get_Comparer(a$$8), FSharpSet$$get_Tree(a$$8), FSharpSet$$get_Tree(b$$9));
}
function FSharpSet$$get_Choose(x$$14) {
  return SetTreeModule$$$choose(FSharpSet$$get_Tree(x$$14));
}
function FSharpSet$$get_MinimumElement(x$$15) {
  return SetTreeModule$$$minimumElement(FSharpSet$$get_Tree(x$$15));
}
function FSharpSet$$get_MaximumElement(x$$16) {
  return SetTreeModule$$$maximumElement(FSharpSet$$get_Tree(x$$16));
}
function FSharpSet$$IsSubsetOf$$6A20B1FF(x$$17, y) {
  return SetTreeModule$$$subset(FSharpSet$$get_Comparer(x$$17), FSharpSet$$get_Tree(x$$17), FSharpSet$$get_Tree(y));
}
function FSharpSet$$IsSupersetOf$$6A20B1FF(x$$18, y$$1) {
  return SetTreeModule$$$subset(FSharpSet$$get_Comparer(x$$18), FSharpSet$$get_Tree(y$$1), FSharpSet$$get_Tree(x$$18));
}
function FSharpSet$$IsProperSubsetOf$$6A20B1FF(x$$19, y$$2) {
  return SetTreeModule$$$psubset(FSharpSet$$get_Comparer(x$$19), FSharpSet$$get_Tree(x$$19), FSharpSet$$get_Tree(y$$2));
}
function FSharpSet$$IsProperSupersetOf$$6A20B1FF(x$$20, y$$3) {
  return SetTreeModule$$$psubset(FSharpSet$$get_Comparer(x$$20), FSharpSet$$get_Tree(y$$3), FSharpSet$$get_Tree(x$$20));
}

FSharpSet.prototype.toString = function () {
  var strings;
  const this$ = this;
  return "set [" + (strings = Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x$$21) {
    let copyOfStruct = x$$21;
    return String(copyOfStruct);
  }, this$), (Object(_String_js__WEBPACK_IMPORTED_MODULE_5__["join"])("; ", strings))) + "]";
};

FSharpSet.prototype.GetHashCode = function () {
  const this$$$1 = this;
  let res = 0;
  const e$$1 = SetTreeModule$$$mkIEnumerator(FSharpSet$$get_Tree(this$$$1));

  while (e$$1.MoveNext()) {
    const x$$22 = res | 0;
    const y$$4 = Object(_Util_js__WEBPACK_IMPORTED_MODULE_4__["structuralHash"])(e$$1.Current) | 0;
    res = (x$$22 << 1) + y$$4 + 631;
  }

  return Math.abs(res) | 0;
};

FSharpSet.prototype.Equals = function (that) {
  const this$$$2 = this;
  return SetTreeModule$$$compare(FSharpSet$$get_Comparer(this$$$2), FSharpSet$$get_Tree(this$$$2), FSharpSet$$get_Tree(that)) === 0;
};

FSharpSet.prototype.CompareTo = function (that$$1) {
  const this$$$3 = this;
  return SetTreeModule$$$compare(FSharpSet$$get_Comparer(this$$$3), FSharpSet$$get_Tree(this$$$3), FSharpSet$$get_Tree(that$$1)) | 0;
};

FSharpSet.prototype[Symbol.iterator] = function () {
  const s$$32 = this;
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["toIterator"])(SetTreeModule$$$mkIEnumerator(FSharpSet$$get_Tree(s$$32)));
};

function isEmpty(s$$33) {
  return FSharpSet$$get_IsEmpty(s$$33);
}
function contains(x$$23, s$$34) {
  return FSharpSet$$Contains$$2B595(s$$34, x$$23);
}
function add(x$$24, s$$35) {
  return FSharpSet$$Add$$2B595(s$$35, x$$24);
}
function singleton(x$$25, comparer$$24) {
  return FSharpSet$$$$002Ector$$2528C5CB(comparer$$24, new SetTree$00601(2, "SetOne", x$$25));
}
function remove(x$$26, s$$36) {
  return FSharpSet$$Remove$$2B595(s$$36, x$$26);
}
function union(s1$$2, s2$$2) {
  return FSharpSet$$$op_Addition(s1$$2, s2$$2);
}
function unionMany(sets$$1, comparer$$25) {
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["fold"])(FSharpSet$$$op_Addition, FSharpSet$$$$002Ector$$2528C5CB(comparer$$25, new SetTree$00601(0, "SetEmpty")), sets$$1);
}
function intersect(s1$$3, s2$$3) {
  return FSharpSet$$$Intersection$$Z3BE9BFE0(s1$$3, s2$$3);
}
function intersectMany(sets$$2) {
  return FSharpSet$$$IntersectionMany$$Z15B59630(sets$$2);
}
function iterate(f$$16, s$$37) {
  FSharpSet$$Iterate$$5028453F(s$$37, f$$16);
}
function empty(comparer$$26) {
  return FSharpSet$$$$002Ector$$2528C5CB(comparer$$26, new SetTree$00601(0, "SetEmpty"));
}
function forAll(f$$17, s$$38) {
  return FSharpSet$$ForAll$$Z1D55A0D7(s$$38, f$$17);
}
function exists(f$$18, s$$39) {
  return FSharpSet$$Exists$$Z1D55A0D7(s$$39, f$$18);
}
function filter(f$$19, s$$40) {
  return FSharpSet$$Filter$$Z1D55A0D7(s$$40, f$$19);
}
function partition(f$$20, s$$41) {
  return FSharpSet$$Partition$$Z1D55A0D7(s$$41, f$$20);
}
function fold(f$$21, z$$2, s$$42) {
  return SetTreeModule$$$fold(f$$21, z$$2, FSharpSet$$get_Tree(s$$42));
}
function foldBack(f$$22, s$$43, z$$3) {
  return SetTreeModule$$$foldBack(f$$22, FSharpSet$$get_Tree(s$$43), z$$3);
}
function map(f$$23, s$$44, comparer$$27) {
  return FSharpSet$$Map$$7597B8F7(s$$44, f$$23, comparer$$27);
}
function count(s$$45) {
  return FSharpSet$$get_Count(s$$45);
}
function minimumElement(s$$46) {
  return FSharpSet$$get_MinimumElement(s$$46);
}
function maximumElement(s$$47) {
  return FSharpSet$$get_MaximumElement(s$$47);
}
function ofList(li, comparer$$28) {
  return FSharpSet$$$$002Ector$$2528C5CB(comparer$$28, SetTreeModule$$$ofSeq(comparer$$28, li));
}
function ofArray(arr$$2, comparer$$29) {
  return FSharpSet$$$$002Ector$$2528C5CB(comparer$$29, SetTreeModule$$$ofArray(comparer$$29, arr$$2));
}
function toList(s$$48) {
  return SetTreeModule$$$toList(FSharpSet$$get_Tree(s$$48));
}
function toArray(s$$49, cons) {
  const n$$3 = count(s$$49) | 0;
  const res$$1 = new cons(n$$3);
  SetTreeModule$$$copyToArray(FSharpSet$$get_Tree(s$$49), res$$1, 0);
  return res$$1;
}
function toSeq(s$$50) {
  return SetTreeModule$$$toSeq(FSharpSet$$get_Tree(s$$50));
}
function ofSeq(elements, comparer$$30) {
  return FSharpSet$$$$002Ector$$2528C5CB(comparer$$30, SetTreeModule$$$ofSeq(comparer$$30, elements));
}
function difference(x$$28, y$$6) {
  return FSharpSet$$$op_Subtraction(x$$28, y$$6);
}
function isSubset(x$$29, y$$7) {
  return FSharpSet$$IsSubsetOf$$6A20B1FF(x$$29, y$$7);
}
function isSuperset(x$$30, y$$8) {
  return FSharpSet$$IsSupersetOf$$6A20B1FF(x$$30, y$$8);
}
function isProperSubset(x$$31, y$$9) {
  return FSharpSet$$IsProperSubsetOf$$6A20B1FF(x$$31, y$$9);
}
function isProperSuperset(x$$32, y$$10) {
  return FSharpSet$$IsProperSupersetOf$$6A20B1FF(x$$32, y$$10);
}
function minElement(s$$51) {
  return FSharpSet$$get_MinimumElement(s$$51);
}
function maxElement(s$$52) {
  return FSharpSet$$get_MaximumElement(s$$52);
}
function createMutable(source, comparer$$31) {
  const set = Object(_MutableSet__WEBPACK_IMPORTED_MODULE_6__["MutableSet$00601$$$$002Ector$$Z6150332D"])(source, comparer$$31);
  return set;
}
function distinct(xs, comparer$$32) {
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["delay"])(function () {
    const set$$1 = Object(_MutableSet__WEBPACK_IMPORTED_MODULE_6__["MutableSet$00601$$$$002Ector$$Z6150332D"])(Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["empty"])(), comparer$$32);
    return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["collect"])(function (x$$33) {
      return Object(_MutableSet__WEBPACK_IMPORTED_MODULE_6__["MutableSet$00601$$Add$$2B595"])(set$$1, x$$33) ? Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["singleton"])(x$$33) : Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["empty"])();
    }, xs);
  });
}
function distinctBy(projection, xs$$1, comparer$$33) {
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["delay"])(function () {
    const set$$2 = Object(_MutableSet__WEBPACK_IMPORTED_MODULE_6__["MutableSet$00601$$$$002Ector$$Z6150332D"])(Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["empty"])(), comparer$$33);
    return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["collect"])(function (x$$34) {
      return Object(_MutableSet__WEBPACK_IMPORTED_MODULE_6__["MutableSet$00601$$Add$$2B595"])(set$$2, projection(x$$34)) ? Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["singleton"])(x$$34) : Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["empty"])();
    }, xs$$1);
  });
}
function unionWith(s1$$4, s2$$4) {
  return Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["fold"])(function folder(acc$$14, x$$35) {
    return acc$$14.add(x$$35);
  }, s1$$4, s2$$4);
}
function intersectWith(s1$$5, s2$$5, comparer$$34) {
  const s2$$6 = ofSeq(s2$$5, comparer$$34);
  Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["iterate"])(function (x$$36) {
    if (!FSharpSet$$Contains$$2B595(s2$$6, x$$36)) {
      const value = s1$$5.delete(x$$36);
      void value;
    } else {
      void null;
    }
  }, s1$$5);
}
function exceptWith(s1$$6, s2$$7) {
  Object(_Seq_js__WEBPACK_IMPORTED_MODULE_3__["iterate"])(function (x$$37) {
    const value$$1 = s1$$6.delete(x$$37);
    void value$$1;
  }, s2$$7);
}
function isSubsetOf(s1$$7, s2$$8, comparer$$35) {
  return isSubset(ofSeq(s1$$7, comparer$$35), ofSeq(s2$$8, comparer$$35));
}
function isSupersetOf(s1$$8, s2$$9, comparer$$36) {
  return isSuperset(ofSeq(s1$$8, comparer$$36), ofSeq(s2$$9, comparer$$36));
}
function isProperSubsetOf(s1$$9, s2$$10, comparer$$37) {
  return isProperSubset(ofSeq(s1$$9, comparer$$37), ofSeq(s2$$10, comparer$$37));
}
function isProperSupersetOf(s1$$10, s2$$11, comparer$$38) {
  return isProperSuperset(ofSeq(s1$$10, comparer$$38), ofSeq(s2$$11, comparer$$38));
}

/***/ }),

/***/ "./.fable/fable-library.2.13.0/String.js":
/*!***********************************************!*\
  !*** ./.fable/fable-library.2.13.0/String.js ***!
  \***********************************************/
/*! exports provided: compare, compareOrdinal, compareTo, startsWith, indexOfAny, printf, toConsole, toConsoleError, toText, toFail, fsFormat, format, endsWith, initialize, insert, isNullOrEmpty, isNullOrWhiteSpace, concat, join, joinWithIndices, toBase64String, fromBase64String, padLeft, padRight, remove, replace, replicate, getCharAtIndex, split, trim, trimStart, trimEnd, filter, substring */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareOrdinal", function() { return compareOrdinal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareTo", function() { return compareTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startsWith", function() { return startsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexOfAny", function() { return indexOfAny; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printf", function() { return printf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toConsole", function() { return toConsole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toConsoleError", function() { return toConsoleError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toText", function() { return toText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toFail", function() { return toFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fsFormat", function() { return fsFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endsWith", function() { return endsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insert", function() { return insert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNullOrEmpty", function() { return isNullOrEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNullOrWhiteSpace", function() { return isNullOrWhiteSpace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "join", function() { return join; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "joinWithIndices", function() { return joinWithIndices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toBase64String", function() { return toBase64String; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromBase64String", function() { return fromBase64String; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padLeft", function() { return padLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padRight", function() { return padRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replicate", function() { return replicate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCharAtIndex", function() { return getCharAtIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "split", function() { return split; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trim", function() { return trim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trimStart", function() { return trimStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trimEnd", function() { return trimEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "substring", function() { return substring; });
/* harmony import */ var _Date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Date */ "./.fable/fable-library.2.13.0/Date.js");
/* harmony import */ var _Decimal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Decimal */ "./.fable/fable-library.2.13.0/Decimal.js");
/* harmony import */ var _Long__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Long */ "./.fable/fable-library.2.13.0/Long.js");
/* harmony import */ var _RegExp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegExp */ "./.fable/fable-library.2.13.0/RegExp.js");




const fsFormatRegExp = /(^|[^%])%([0+\- ]*)(\d+)?(?:\.(\d+))?(\w)/;
const formatRegExp = /\{(\d+)(,-?\d+)?(?:\:([a-zA-Z])(\d{0,2})|\:(.+?))?\}/g;
// These are used for formatting and only take longs and decimals into account (no bigint)
function isNumeric(x) {
    return typeof x === "number" || x instanceof _Long__WEBPACK_IMPORTED_MODULE_2__["default"] || x instanceof _Decimal__WEBPACK_IMPORTED_MODULE_1__["default"];
}
function isLessThan(x, y) {
    if (x instanceof _Long__WEBPACK_IMPORTED_MODULE_2__["default"]) {
        return _Long__WEBPACK_IMPORTED_MODULE_2__["compare"](x, y) < 0;
    }
    else if (x instanceof _Decimal__WEBPACK_IMPORTED_MODULE_1__["default"]) {
        return x.cmp(y) < 0;
    }
    else {
        return x < y;
    }
}
function multiply(x, y) {
    if (x instanceof _Long__WEBPACK_IMPORTED_MODULE_2__["default"]) {
        return _Long__WEBPACK_IMPORTED_MODULE_2__["op_Multiply"](x, y);
    }
    else if (x instanceof _Decimal__WEBPACK_IMPORTED_MODULE_1__["default"]) {
        return x.mul(y);
    }
    else {
        return x * y;
    }
}
function toFixed(x, dp) {
    if (x instanceof _Long__WEBPACK_IMPORTED_MODULE_2__["default"]) {
        return String(x) + (0).toFixed(dp).substr(1);
    }
    else {
        return x.toFixed(dp);
    }
}
function toPrecision(x, sd) {
    if (x instanceof _Long__WEBPACK_IMPORTED_MODULE_2__["default"]) {
        return String(x) + (0).toPrecision(sd).substr(1);
    }
    else {
        return x.toPrecision(sd);
    }
}
function toExponential(x, dp) {
    if (x instanceof _Long__WEBPACK_IMPORTED_MODULE_2__["default"]) {
        return String(x) + (0).toExponential(dp).substr(1);
    }
    else {
        return x.toExponential(dp);
    }
}
function cmp(x, y, ic) {
    function isIgnoreCase(i) {
        return i === true ||
            i === 1 /* CurrentCultureIgnoreCase */ ||
            i === 3 /* InvariantCultureIgnoreCase */ ||
            i === 5 /* OrdinalIgnoreCase */;
    }
    function isOrdinal(i) {
        return i === 4 /* Ordinal */ ||
            i === 5 /* OrdinalIgnoreCase */;
    }
    if (x == null) {
        return y == null ? 0 : -1;
    }
    if (y == null) {
        return 1;
    } // everything is bigger than null
    if (isOrdinal(ic)) {
        if (isIgnoreCase(ic)) {
            x = x.toLowerCase();
            y = y.toLowerCase();
        }
        return (x === y) ? 0 : (x < y ? -1 : 1);
    }
    else {
        if (isIgnoreCase(ic)) {
            x = x.toLocaleLowerCase();
            y = y.toLocaleLowerCase();
        }
        return x.localeCompare(y);
    }
}
function compare(...args) {
    switch (args.length) {
        case 2: return cmp(args[0], args[1], false);
        case 3: return cmp(args[0], args[1], args[2]);
        case 4: return cmp(args[0], args[1], args[2] === true);
        case 5: return cmp(args[0].substr(args[1], args[4]), args[2].substr(args[3], args[4]), false);
        case 6: return cmp(args[0].substr(args[1], args[4]), args[2].substr(args[3], args[4]), args[5]);
        case 7: return cmp(args[0].substr(args[1], args[4]), args[2].substr(args[3], args[4]), args[5] === true);
        default: throw new Error("String.compare: Unsupported number of parameters");
    }
}
function compareOrdinal(x, y) {
    return cmp(x, y, 4 /* Ordinal */);
}
function compareTo(x, y) {
    return cmp(x, y, 0 /* CurrentCulture */);
}
function startsWith(str, pattern, ic) {
    if (str.length >= pattern.length) {
        return cmp(str.substr(0, pattern.length), pattern, ic) === 0;
    }
    return false;
}
function indexOfAny(str, anyOf, ...args) {
    if (str == null || str === "") {
        return -1;
    }
    const startIndex = (args.length > 0) ? args[0] : 0;
    if (startIndex < 0) {
        throw new Error("Start index cannot be negative");
    }
    const length = (args.length > 1) ? args[1] : str.length - startIndex;
    if (length < 0) {
        throw new Error("Length cannot be negative");
    }
    if (length > str.length - startIndex) {
        throw new Error("Invalid startIndex and length");
    }
    str = str.substr(startIndex, length);
    for (const c of anyOf) {
        const index = str.indexOf(c);
        if (index > -1) {
            return index + startIndex;
        }
    }
    return -1;
}
function toHex(x) {
    if (x instanceof _Long__WEBPACK_IMPORTED_MODULE_2__["default"]) {
        return _Long__WEBPACK_IMPORTED_MODULE_2__["toString"](x.unsigned ? x : _Long__WEBPACK_IMPORTED_MODULE_2__["fromBytes"](_Long__WEBPACK_IMPORTED_MODULE_2__["toBytes"](x), true), 16);
    }
    else {
        return (Number(x) >>> 0).toString(16);
    }
}
function printf(input) {
    return {
        input,
        cont: fsFormat(input),
    };
}
function toConsole(arg) {
    // Don't remove the lambda here, see #1357
    return arg.cont((x) => { console.log(x); });
}
function toConsoleError(arg) {
    return arg.cont((x) => { console.error(x); });
}
function toText(arg) {
    return arg.cont((x) => x);
}
function toFail(arg) {
    return arg.cont((x) => { throw new Error(x); });
}
function formatOnce(str2, rep) {
    return str2.replace(fsFormatRegExp, (_, prefix, flags, padLength, precision, format) => {
        let sign = "";
        if (isNumeric(rep)) {
            if (format.toLowerCase() !== "x") {
                if (isLessThan(rep, 0)) {
                    rep = multiply(rep, -1);
                    sign = "-";
                }
                else {
                    if (flags.indexOf(" ") >= 0) {
                        sign = " ";
                    }
                    else if (flags.indexOf("+") >= 0) {
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
                default: // AOid
                    rep = String(rep);
                    break;
            }
        }
        padLength = parseInt(padLength, 10);
        if (!isNaN(padLength)) {
            const zeroFlag = flags.indexOf("0") >= 0; // Use '0' for left padding
            const minusFlag = flags.indexOf("-") >= 0; // Right padding
            const ch = minusFlag || !zeroFlag ? " " : "0";
            if (ch === "0") {
                rep = padLeft(rep, padLength - sign.length, ch, minusFlag);
                rep = sign + rep;
            }
            else {
                rep = padLeft(sign + rep, padLength, ch, minusFlag);
            }
        }
        else {
            rep = sign + rep;
        }
        const once = prefix + rep;
        return once.replace(/%/g, "%%");
    });
}
function createPrinter(str, cont) {
    return (...args) => {
        // Make a copy as the function may be used several times
        let strCopy = str;
        for (const arg of args) {
            strCopy = formatOnce(strCopy, arg);
        }
        return fsFormatRegExp.test(strCopy)
            ? createPrinter(strCopy, cont)
            : cont(strCopy.replace(/%%/g, "%"));
    };
}
function fsFormat(str) {
    return (cont) => {
        return fsFormatRegExp.test(str)
            ? createPrinter(str, cont)
            : cont(str);
    };
}
function format(str, ...args) {
    if (typeof str === "object" && args.length > 0) {
        // Called with culture info
        str = args[0];
        args.shift();
    }
    return str.replace(formatRegExp, (_, idx, padLength, format, precision, pattern) => {
        let rep = args[idx];
        if (isNumeric(rep)) {
            precision = precision == null ? null : parseInt(precision, 10);
            switch (format) {
                case "f":
                case "F":
                    precision = precision != null ? precision : 2;
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
                case "p":
                case "P":
                    precision = precision != null ? precision : 2;
                    rep = toFixed(multiply(rep, 100), precision) + " %";
                    break;
                case "d":
                case "D":
                    rep = precision != null ? padLeft(String(rep), precision, "0") : String(rep);
                    break;
                case "x":
                case "X":
                    rep = precision != null ? padLeft(toHex(rep), precision, "0") : toHex(rep);
                    if (format === "X") {
                        rep = rep.toUpperCase();
                    }
                    break;
                default:
                    if (pattern) {
                        let sign = "";
                        rep = pattern.replace(/(0+)(\.0+)?/, (_, intPart, decimalPart) => {
                            if (isLessThan(rep, 0)) {
                                rep = multiply(rep, -1);
                                sign = "-";
                            }
                            rep = toFixed(rep, decimalPart != null ? decimalPart.length - 1 : 0);
                            return padLeft(rep, (intPart || "").length - sign.length + (decimalPart != null ? decimalPart.length : 0), "0");
                        });
                        rep = sign + rep;
                    }
            }
        }
        else if (rep instanceof Date) {
            rep = Object(_Date__WEBPACK_IMPORTED_MODULE_0__["toString"])(rep, pattern || format);
        }
        padLength = parseInt((padLength || " ").substring(1), 10);
        if (!isNaN(padLength)) {
            rep = padLeft(String(rep), Math.abs(padLength), " ", padLength < 0);
        }
        return rep;
    });
}
function endsWith(str, search) {
    const idx = str.lastIndexOf(search);
    return idx >= 0 && idx === str.length - search.length;
}
function initialize(n, f) {
    if (n < 0) {
        throw new Error("String length must be non-negative");
    }
    const xs = new Array(n);
    for (let i = 0; i < n; i++) {
        xs[i] = f(i);
    }
    return xs.join("");
}
function insert(str, startIndex, value) {
    if (startIndex < 0 || startIndex > str.length) {
        throw new Error("startIndex is negative or greater than the length of this instance.");
    }
    return str.substring(0, startIndex) + value + str.substring(startIndex);
}
function isNullOrEmpty(str) {
    return typeof str !== "string" || str.length === 0;
}
function isNullOrWhiteSpace(str) {
    return typeof str !== "string" || /^\s*$/.test(str);
}
function concat(...xs) {
    return xs.map((x) => String(x)).join("");
}
function join(delimiter, xs) {
    if (Array.isArray(xs)) {
        return xs.join(delimiter);
    }
    else {
        return Array.from(xs).join(delimiter);
    }
}
function joinWithIndices(delimiter, xs, startIndex, count) {
    const endIndexPlusOne = startIndex + count;
    if (endIndexPlusOne > xs.length) {
        throw new Error("Index and count must refer to a location within the buffer.");
    }
    return xs.slice(startIndex, endIndexPlusOne).join(delimiter);
}
function notSupported(name) {
    throw new Error("The environment doesn't support '" + name + "', please use a polyfill.");
}
function toBase64String(inArray) {
    let str = "";
    for (let i = 0; i < inArray.length; i++) {
        str += String.fromCharCode(inArray[i]);
    }
    return typeof btoa === "function" ? btoa(str) : notSupported("btoa");
}
function fromBase64String(b64Encoded) {
    const binary = typeof atob === "function" ? atob(b64Encoded) : notSupported("atob");
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
}
function padLeft(str, len, ch, isRight) {
    ch = ch || " ";
    len = len - str.length;
    for (let i = 0; i < len; i++) {
        str = isRight ? str + ch : ch + str;
    }
    return str;
}
function padRight(str, len, ch) {
    return padLeft(str, len, ch, true);
}
function remove(str, startIndex, count) {
    if (startIndex >= str.length) {
        throw new Error("startIndex must be less than length of string");
    }
    if (typeof count === "number" && (startIndex + count) > str.length) {
        throw new Error("Index and count must refer to a location within the string.");
    }
    return str.slice(0, startIndex) + (typeof count === "number" ? str.substr(startIndex + count) : "");
}
function replace(str, search, replace) {
    return str.replace(new RegExp(Object(_RegExp__WEBPACK_IMPORTED_MODULE_3__["escape"])(search), "g"), replace);
}
function replicate(n, x) {
    return initialize(n, () => x);
}
function getCharAtIndex(input, index) {
    if (index < 0 || index >= input.length) {
        throw new Error("Index was outside the bounds of the array.");
    }
    return input[index];
}
function split(str, splitters, count, removeEmpty) {
    count = typeof count === "number" ? count : undefined;
    removeEmpty = typeof removeEmpty === "number" ? removeEmpty : undefined;
    if (count && count < 0) {
        throw new Error("Count cannot be less than zero");
    }
    if (count === 0) {
        return [];
    }
    if (!Array.isArray(splitters)) {
        if (removeEmpty === 0) {
            return str.split(splitters, count);
        }
        const len = arguments.length;
        splitters = Array(len - 1);
        for (let key = 1; key < len; key++) {
            splitters[key - 1] = arguments[key];
        }
    }
    splitters = splitters.map((x) => Object(_RegExp__WEBPACK_IMPORTED_MODULE_3__["escape"])(x));
    splitters = splitters.length > 0 ? splitters : [" "];
    let i = 0;
    const splits = [];
    const reg = new RegExp(splitters.join("|"), "g");
    while (count == null || count > 1) {
        const m = reg.exec(str);
        if (m === null) {
            break;
        }
        if (!removeEmpty || (m.index - i) > 0) {
            count = count != null ? count - 1 : count;
            splits.push(str.substring(i, m.index));
        }
        i = reg.lastIndex;
    }
    if (!removeEmpty || (str.length - i) > 0) {
        splits.push(str.substring(i));
    }
    return splits;
}
function trim(str, ...chars) {
    if (chars.length === 0) {
        return str.trim();
    }
    const pattern = "[" + Object(_RegExp__WEBPACK_IMPORTED_MODULE_3__["escape"])(chars.join("")) + "]+";
    return str.replace(new RegExp("^" + pattern), "").replace(new RegExp(pattern + "$"), "");
}
function trimStart(str, ...chars) {
    return chars.length === 0
        ? str.trimStart()
        : str.replace(new RegExp("^[" + Object(_RegExp__WEBPACK_IMPORTED_MODULE_3__["escape"])(chars.join("")) + "]+"), "");
}
function trimEnd(str, ...chars) {
    return chars.length === 0
        ? str.trimEnd()
        : str.replace(new RegExp("[" + Object(_RegExp__WEBPACK_IMPORTED_MODULE_3__["escape"])(chars.join("")) + "]+$"), "");
}
function filter(pred, x) {
    return x.split("").filter((c) => pred(c)).join("");
}
function substring(str, startIndex, length) {
    if ((startIndex + (length || 0) > str.length)) {
        throw new Error("Invalid startIndex and/or length");
    }
    return length != null ? str.substr(startIndex, length) : str.substr(startIndex);
}
//# sourceMappingURL=String.js.map

/***/ }),

/***/ "./.fable/fable-library.2.13.0/Types.js":
/*!**********************************************!*\
  !*** ./.fable/fable-library.2.13.0/Types.js ***!
  \**********************************************/
/*! exports provided: declare, SystemObject, List, Union, Record, anonRecord, FSharpRef, Exception, isException, FSharpException, MatchFailureException, Attribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "declare", function() { return declare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemObject", function() { return SystemObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Union", function() { return Union; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Record", function() { return Record; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "anonRecord", function() { return anonRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpRef", function() { return FSharpRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Exception", function() { return Exception; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isException", function() { return isException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FSharpException", function() { return FSharpException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchFailureException", function() { return MatchFailureException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Attribute", function() { return Attribute; });
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util */ "./.fable/fable-library.2.13.0/Util.js");
// tslint:disable: space-before-function-paren

function sameType(x, y) {
    return y != null && Object.getPrototypeOf(x).constructor === Object.getPrototypeOf(y).constructor;
}
// Taken from Babel helpers
function inherits(subClass, superClass) {
    // if (typeof superClass !== "function" && superClass !== null) {
    //   throw new TypeError(
    //     "Super expression must either be null or a function, not " +
    //       typeof superClass
    //   );
    // }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true,
        },
    });
    // if (superClass)
    //   Object.setPrototypeOf
    //     ? Object.setPrototypeOf(subClass, superClass)
    //     : (subClass.__proto__ = superClass);
}
function declare(cons, superClass) {
    inherits(cons, superClass || SystemObject);
    return cons;
}
class SystemObject {
    toString() {
        return "{" + Object.entries(this).map(([k, v]) => k + " = " + String(v)).join(";\n ") + "}";
    }
    GetHashCode(x) {
        return Object(_Util__WEBPACK_IMPORTED_MODULE_0__["identityHash"])(x !== null && x !== void 0 ? x : this);
    }
    Equals(x, y) {
        return x === (y !== null && y !== void 0 ? y : this);
    }
}
function compareList(self, other) {
    if (self === other) {
        return 0;
    }
    else {
        if (other == null) {
            return -1;
        }
        while (self.tail != null) {
            if (other.tail == null) {
                return 1;
            }
            const res = Object(_Util__WEBPACK_IMPORTED_MODULE_0__["compare"])(self.head, other.head);
            if (res !== 0) {
                return res;
            }
            self = self.tail;
            other = other.tail;
        }
        return other.tail == null ? 0 : -1;
    }
}
class List {
    constructor(head, tail) {
        this.head = head;
        this.tail = tail;
    }
    toString() {
        return "[" + Array.from(this).join("; ") + "]";
    }
    toJSON() {
        return Array.from(this);
    }
    [Symbol.iterator]() {
        let cur = this;
        return {
            next: () => {
                const value = cur === null || cur === void 0 ? void 0 : cur.head;
                const done = (cur === null || cur === void 0 ? void 0 : cur.tail) == null;
                cur = cur === null || cur === void 0 ? void 0 : cur.tail;
                return { done, value };
            },
        };
    }
    GetHashCode() {
        const hashes = Array.from(this).map(_Util__WEBPACK_IMPORTED_MODULE_0__["structuralHash"]);
        return Object(_Util__WEBPACK_IMPORTED_MODULE_0__["combineHashCodes"])(hashes);
    }
    Equals(other) {
        return compareList(this, other) === 0;
    }
    CompareTo(other) {
        return compareList(this, other);
    }
}
class Union extends SystemObject {
    constructor(tag, name, ...fields) {
        super();
        this.tag = tag | 0;
        this.name = name;
        this.fields = fields;
    }
    toString() {
        const len = this.fields.length;
        if (len === 0) {
            return this.name;
        }
        else if (len === 1) {
            return this.name + " " + String(this.fields[0]);
        }
        else {
            return this.name + " (" + this.fields.map((x) => String(x)).join(",") + ")";
        }
    }
    toJSON() {
        return this.fields.length === 0
            ? this.name
            : [this.name].concat(this.fields);
    }
    GetHashCode() {
        const hashes = this.fields.map((x) => Object(_Util__WEBPACK_IMPORTED_MODULE_0__["structuralHash"])(x));
        hashes.splice(0, 0, Object(_Util__WEBPACK_IMPORTED_MODULE_0__["numberHash"])(this.tag));
        return Object(_Util__WEBPACK_IMPORTED_MODULE_0__["combineHashCodes"])(hashes);
    }
    Equals(other) {
        return this === other
            || (sameType(this, other)
                && this.tag === other.tag
                && Object(_Util__WEBPACK_IMPORTED_MODULE_0__["equalArrays"])(this.fields, other.fields));
    }
    CompareTo(other) {
        if (this === other) {
            return 0;
        }
        else if (!sameType(this, other)) {
            return -1;
        }
        else if (this.tag === other.tag) {
            return Object(_Util__WEBPACK_IMPORTED_MODULE_0__["compareArrays"])(this.fields, other.fields);
        }
        else {
            return this.tag < other.tag ? -1 : 1;
        }
    }
}
function recordToJson(record, getFieldNames) {
    const o = {};
    const keys = getFieldNames == null ? Object.keys(record) : getFieldNames(record);
    for (let i = 0; i < keys.length; i++) {
        o[keys[i]] = record[keys[i]];
    }
    return o;
}
function recordEquals(self, other, getFieldNames) {
    if (self === other) {
        return true;
    }
    else if (!sameType(self, other)) {
        return false;
    }
    else {
        const thisNames = getFieldNames == null ? Object.keys(self) : getFieldNames(self);
        for (let i = 0; i < thisNames.length; i++) {
            if (!Object(_Util__WEBPACK_IMPORTED_MODULE_0__["equals"])(self[thisNames[i]], other[thisNames[i]])) {
                return false;
            }
        }
        return true;
    }
}
function recordCompare(self, other, getFieldNames) {
    if (self === other) {
        return 0;
    }
    else if (!sameType(self, other)) {
        return -1;
    }
    else {
        const thisNames = getFieldNames == null ? Object.keys(self) : getFieldNames(self);
        for (let i = 0; i < thisNames.length; i++) {
            const result = Object(_Util__WEBPACK_IMPORTED_MODULE_0__["compare"])(self[thisNames[i]], other[thisNames[i]]);
            if (result !== 0) {
                return result;
            }
        }
        return 0;
    }
}
class Record extends SystemObject {
    toString() {
        return "{" + Object.entries(this).map(([k, v]) => k + " = " + String(v)).join(";\n ") + "}";
    }
    toJSON() {
        return recordToJson(this);
    }
    GetHashCode() {
        const hashes = Object.values(this).map((v) => Object(_Util__WEBPACK_IMPORTED_MODULE_0__["structuralHash"])(v));
        return Object(_Util__WEBPACK_IMPORTED_MODULE_0__["combineHashCodes"])(hashes);
    }
    Equals(other) {
        return recordEquals(this, other);
    }
    CompareTo(other) {
        return recordCompare(this, other);
    }
}
function anonRecord(o) {
    return Object.assign(Object.create(Record.prototype), o);
}
class FSharpRef extends Record {
    constructor(contents) {
        super();
        this.contents = contents;
    }
}
const Exception = declare(function Exception(message) {
    this.stack = Error().stack;
    this.message = message;
}, SystemObject);
function isException(x) {
    return x instanceof Error || x instanceof Exception;
}
function getFSharpExceptionFieldNames(self) {
    return Object.keys(self).filter((k) => k !== "message" && k !== "stack");
}
class FSharpException extends Exception {
    toString() {
        var _a;
        // const fieldNames = getFSharpExceptionFieldNames(this);
        const fields = Object.entries(this).filter(([k, _]) => k !== "message" && k !== "stack");
        const len = fields.length;
        if (len === 0) {
            return (_a = this.message) !== null && _a !== void 0 ? _a : "";
        }
        else if (len === 1) {
            return this.message + " " + String(fields[1]);
        }
        else {
            return this.message + " (" + fields.map(([_, v]) => String(v)).join(",") + ")";
        }
    }
    toJSON() {
        return recordToJson(this, getFSharpExceptionFieldNames);
    }
    GetHashCode() {
        const fields = Object.entries(this).filter(([k, _]) => k !== "message" && k !== "stack");
        const hashes = fields.map(([_, v]) => Object(_Util__WEBPACK_IMPORTED_MODULE_0__["structuralHash"])(v));
        return Object(_Util__WEBPACK_IMPORTED_MODULE_0__["combineHashCodes"])(hashes);
    }
    Equals(other) {
        return recordEquals(this, other, getFSharpExceptionFieldNames);
    }
    CompareTo(other) {
        return recordCompare(this, other, getFSharpExceptionFieldNames);
    }
}
class MatchFailureException extends FSharpException {
    constructor(arg1, arg2, arg3) {
        super();
        this.arg1 = arg1;
        this.arg2 = arg2 | 0;
        this.arg3 = arg3 | 0;
        this.message = "The match cases were incomplete";
    }
}
const Attribute = declare(function Attribute() { return; }, SystemObject);
//# sourceMappingURL=Types.js.map

/***/ }),

/***/ "./.fable/fable-library.2.13.0/Util.js":
/*!*********************************************!*\
  !*** ./.fable/fable-library.2.13.0/Util.js ***!
  \*********************************************/
/*! exports provided: bindThis, extend, isIterable, isArrayLike, isComparer, isComparable, isEquatable, isHashable, isDisposable, Comparer, comparerFromEqualityComparer, containsValue, tryGetValue, addToSet, assertEqual, assertNotEqual, Lazy, lazyFromValue, padWithZeros, padLeftAndRightWithZeros, dateOffset, int16ToString, int32ToString, ObjectRef, stringHash, numberHash, combineHashCodes, identityHash, structuralHash, equalArraysWith, equalArrays, equals, compareDates, comparePrimitives, compareArraysWith, compareArrays, compareObjects, compare, min, max, createAtom, createObj, jsOptions, round, sign, randomNext, randomBytes, unescapeDataString, escapeDataString, escapeUriString, count, clear, uncurry, curry, partialApply, mapCurriedArgs, addToDict, getItemFromDict */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindThis", function() { return bindThis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIterable", function() { return isIterable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayLike", function() { return isArrayLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComparer", function() { return isComparer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComparable", function() { return isComparable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEquatable", function() { return isEquatable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isHashable", function() { return isHashable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDisposable", function() { return isDisposable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comparer", function() { return Comparer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "comparerFromEqualityComparer", function() { return comparerFromEqualityComparer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containsValue", function() { return containsValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryGetValue", function() { return tryGetValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToSet", function() { return addToSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertEqual", function() { return assertEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertNotEqual", function() { return assertNotEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lazy", function() { return Lazy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazyFromValue", function() { return lazyFromValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padWithZeros", function() { return padWithZeros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padLeftAndRightWithZeros", function() { return padLeftAndRightWithZeros; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateOffset", function() { return dateOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "int16ToString", function() { return int16ToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "int32ToString", function() { return int32ToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectRef", function() { return ObjectRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringHash", function() { return stringHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberHash", function() { return numberHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineHashCodes", function() { return combineHashCodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identityHash", function() { return identityHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "structuralHash", function() { return structuralHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equalArraysWith", function() { return equalArraysWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equalArrays", function() { return equalArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareDates", function() { return compareDates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "comparePrimitives", function() { return comparePrimitives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareArraysWith", function() { return compareArraysWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareArrays", function() { return compareArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareObjects", function() { return compareObjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAtom", function() { return createAtom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createObj", function() { return createObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsOptions", function() { return jsOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sign", function() { return sign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomNext", function() { return randomNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomBytes", function() { return randomBytes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unescapeDataString", function() { return unescapeDataString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeDataString", function() { return escapeDataString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeUriString", function() { return escapeUriString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "count", function() { return count; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return clear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uncurry", function() { return uncurry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "curry", function() { return curry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partialApply", function() { return partialApply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapCurriedArgs", function() { return mapCurriedArgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToDict", function() { return addToDict; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemFromDict", function() { return getItemFromDict; });
// tslint:disable:ban-types
function bindThis(this$, source) {
    for (const key of Object.keys(source)) {
        if (typeof source[key] === "function") {
            source[key] = source[key].bind(this$);
        }
    }
    return source;
}
// Object.assign flattens getters and setters
// See https://stackoverflow.com/questions/37054596/js-es5-how-to-assign-objects-with-setters-and-getters
function extend(target, ...sources) {
    for (const source of sources) {
        for (const key of Object.keys(source)) {
            const descr = Object.getOwnPropertyDescriptor(source, key);
            if (descr) {
                Object.defineProperty(target, key, descr);
            }
        }
    }
    return target;
}
function isIterable(x) {
    return x != null && typeof x === "object" && Symbol.iterator in x;
}
function isArrayLike(x) {
    return x != null && (Array.isArray(x) || ArrayBuffer.isView(x));
}
function isComparer(x) {
    return x != null && typeof x.Compare === "function";
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
class Comparer {
    constructor(f) {
        this.Compare = f || compare;
    }
}
function comparerFromEqualityComparer(comparer) {
    // Sometimes IEqualityComparer also implements IComparer
    if (isComparer(comparer)) {
        return new Comparer(comparer.Compare);
    }
    else {
        return new Comparer((x, y) => {
            const xhash = comparer.GetHashCode(x);
            const yhash = comparer.GetHashCode(y);
            if (xhash === yhash) {
                return comparer.Equals(x, y) ? 0 : -1;
            }
            else {
                return xhash < yhash ? -1 : 1;
            }
        });
    }
}
// TODO: Move these three methods to Map and Set modules
function containsValue(v, map) {
    for (const kv of map) {
        if (equals(v, kv[1])) {
            return true;
        }
    }
    return false;
}
function tryGetValue(map, key, defaultValue) {
    return map.has(key) ? [true, map.get(key)] : [false, defaultValue];
}
function addToSet(v, set) {
    if (set.has(v)) {
        return false;
    }
    set.add(v);
    return true;
}
function assertEqual(actual, expected, msg) {
    if (!equals(actual, expected)) {
        throw Object.assign(new Error(msg || `Expected: ${expected} - Actual: ${actual}`), {
            actual,
            expected,
        });
    }
}
function assertNotEqual(actual, expected, msg) {
    if (equals(actual, expected)) {
        throw Object.assign(new Error(msg || `Expected: ${expected} - Actual: ${actual}`), {
            actual,
            expected,
        });
    }
}
class Lazy {
    constructor(factory) {
        this.factory = factory;
        this.isValueCreated = false;
    }
    get Value() {
        if (!this.isValueCreated) {
            this.createdValue = this.factory();
            this.isValueCreated = true;
        }
        return this.createdValue;
    }
    get IsValueCreated() {
        return this.isValueCreated;
    }
}
function lazyFromValue(v) {
    return new Lazy(() => v);
}
function padWithZeros(i, length) {
    let str = i.toString(10);
    while (str.length < length) {
        str = "0" + str;
    }
    return str;
}
function padLeftAndRightWithZeros(i, lengthLeft, lengthRight) {
    let str = i.toString(10);
    while (str.length < lengthLeft) {
        str = "0" + str;
    }
    while (str.length < lengthRight) {
        str = str + "0";
    }
    return str;
}
function dateOffset(date) {
    const date1 = date;
    return typeof date1.offset === "number"
        ? date1.offset
        : (date.kind === 1 /* UTC */
            ? 0 : date.getTimezoneOffset() * -60000);
}
function int16ToString(i, radix) {
    i = i < 0 && radix != null && radix !== 10 ? 0xFFFF + i + 1 : i;
    return i.toString(radix);
}
function int32ToString(i, radix) {
    i = i < 0 && radix != null && radix !== 10 ? 0xFFFFFFFF + i + 1 : i;
    return i.toString(radix);
}
let ObjectRef = /** @class */ (() => {
    class ObjectRef {
        static id(o) {
            if (!ObjectRef.idMap.has(o)) {
                ObjectRef.idMap.set(o, ++ObjectRef.count);
            }
            return ObjectRef.idMap.get(o);
        }
    }
    ObjectRef.idMap = new WeakMap();
    ObjectRef.count = 0;
    return ObjectRef;
})();

function stringHash(s) {
    let i = 0;
    let h = 5381;
    const len = s.length;
    while (i < len) {
        h = (h * 33) ^ s.charCodeAt(i++);
    }
    return h;
}
function numberHash(x) {
    return x * 2654435761 | 0;
}
// From https://stackoverflow.com/a/37449594
function combineHashCodes(hashes) {
    if (hashes.length === 0) {
        return 0;
    }
    return hashes.reduce((h1, h2) => {
        return ((h1 << 5) + h1) ^ h2;
    });
}
function identityHash(x) {
    if (x == null) {
        return 0;
    }
    switch (typeof x) {
        case "boolean":
            return x ? 1 : 0;
        case "number":
            return numberHash(x);
        case "string":
            return stringHash(x);
        default:
            return numberHash(ObjectRef.id(x));
    }
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
        case "string":
            return stringHash(x);
        default: {
            if (isHashable(x)) {
                return x.GetHashCode();
            }
            else if (isArrayLike(x)) {
                const len = x.length;
                const hashes = new Array(len);
                for (let i = 0; i < len; i++) {
                    hashes[i] = structuralHash(x[i]);
                }
                return combineHashCodes(hashes);
            }
            else {
                return stringHash(String(x));
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
// export function equalObjects(x: { [k: string]: any }, y: { [k: string]: any }): boolean {
//   if (x == null) { return y == null; }
//   if (y == null) { return false; }
//   const xKeys = Object.keys(x);
//   const yKeys = Object.keys(y);
//   if (xKeys.length !== yKeys.length) {
//     return false;
//   }
//   xKeys.sort();
//   yKeys.sort();
//   for (let i = 0; i < xKeys.length; i++) {
//     if (xKeys[i] !== yKeys[i] || !equals(x[xKeys[i]], y[yKeys[i]])) {
//       return false;
//     }
//   }
//   return true;
// }
function equals(x, y) {
    if (x === y) {
        return true;
    }
    else if (x == null) {
        return y == null;
    }
    else if (y == null) {
        return false;
    }
    else if (typeof x !== "object") {
        return false;
    }
    else if (isEquatable(x)) {
        return x.Equals(y);
    }
    else if (isArrayLike(x)) {
        return isArrayLike(y) && equalArrays(x, y);
    }
    else if (x instanceof Date) {
        return (y instanceof Date) && compareDates(x, y) === 0;
    }
    else {
        return false;
    }
}
function compareDates(x, y) {
    let xtime;
    let ytime;
    // DateTimeOffset and DateTime deals with equality differently.
    if ("offset" in x && "offset" in y) {
        xtime = x.getTime();
        ytime = y.getTime();
    }
    else {
        xtime = x.getTime() + dateOffset(x);
        ytime = y.getTime() + dateOffset(y);
    }
    return xtime === ytime ? 0 : (xtime < ytime ? -1 : 1);
}
function comparePrimitives(x, y) {
    return x === y ? 0 : (x < y ? -1 : 1);
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
    if (x == null) {
        return y == null ? 0 : 1;
    }
    if (y == null) {
        return -1;
    }
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
        }
        else {
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
    }
    else if (x == null) {
        return y == null ? 0 : -1;
    }
    else if (y == null) {
        return 1;
    }
    else if (typeof x !== "object") {
        return x < y ? -1 : 1;
    }
    else if (isComparable(x)) {
        return x.CompareTo(y);
    }
    else if (isArrayLike(x) && isArrayLike(y)) {
        return compareArrays(x, y);
    }
    else if (x instanceof Date && y instanceof Date) {
        return compareDates(x, y);
    }
    else {
        return 1;
    }
}
function min(comparer, x, y) {
    return comparer(x, y) < 0 ? x : y;
}
function max(comparer, x, y) {
    return comparer(x, y) > 0 ? x : y;
}
function createAtom(value) {
    let atom = value;
    return (value, isSetter) => {
        if (!isSetter) {
            return atom;
        }
        else {
            atom = value;
            return void 0;
        }
    };
}
const CaseRules = {
    None: 0,
    LowerFirst: 1,
    SnakeCase: 2,
    SnakeCaseAllCaps: 3,
    KebabCase: 4,
};
function dashify(str, separator) {
    return str.replace(/[a-z]?[A-Z]/g, (m) => m.length === 1
        ? m.toLowerCase()
        : m.charAt(0) + separator + m.charAt(1).toLowerCase());
}
function changeCase(str, caseRule) {
    switch (caseRule) {
        case CaseRules.LowerFirst:
            return str.charAt(0).toLowerCase() + str.slice(1);
        case CaseRules.SnakeCase:
            return dashify(str, "_");
        case CaseRules.SnakeCaseAllCaps:
            return dashify(str, "_").toUpperCase();
        case CaseRules.KebabCase:
            return dashify(str, "-");
        case CaseRules.None:
        default:
            return str;
    }
}
function createObj(fields, caseRule = CaseRules.None) {
    function fail(kvPair) {
        throw new Error("Cannot infer key and value of " + String(kvPair));
    }
    const o = {};
    const definedCaseRule = caseRule;
    for (let kvPair of fields) {
        let caseRule = CaseRules.None;
        if (kvPair == null) {
            fail(kvPair);
        }
        // Deflate unions and use the defined case rule
        if (typeof kvPair.toJSON === "function") {
            kvPair = kvPair.toJSON();
            caseRule = definedCaseRule;
        }
        if (Array.isArray(kvPair)) {
            switch (kvPair.length) {
                case 0:
                    fail(kvPair);
                    break;
                case 1:
                    o[changeCase(kvPair[0], caseRule)] = true;
                    break;
                case 2:
                    const value = kvPair[1];
                    o[changeCase(kvPair[0], caseRule)] = value;
                    break;
                default:
                    o[changeCase(kvPair[0], caseRule)] = kvPair.slice(1);
            }
        }
        else if (typeof kvPair === "string") {
            o[changeCase(kvPair, caseRule)] = true;
        }
        else {
            fail(kvPair);
        }
    }
    return o;
}
function jsOptions(mutator) {
    const opts = {};
    mutator(opts);
    return opts;
}
function round(value, digits = 0) {
    const m = Math.pow(10, digits);
    const n = +(digits ? value * m : value).toFixed(8);
    const i = Math.floor(n);
    const f = n - i;
    const e = 1e-8;
    const r = (f > 0.5 - e && f < 0.5 + e) ? ((i % 2 === 0) ? i : i + 1) : Math.round(n);
    return digits ? r / m : r;
}
function sign(x) {
    return x > 0 ? 1 : x < 0 ? -1 : 0;
}
function randomNext(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function randomBytes(buffer) {
    if (buffer == null) {
        throw new Error("Buffer cannot be null");
    }
    for (let i = 0; i < buffer.length; i += 6) {
        // Pick random 48-bit number. Fill buffer in 2 24-bit chunks to avoid bitwise truncation.
        let r = Math.floor(Math.random() * 281474976710656); // Low 24 bits = chunk 1.
        const rhi = Math.floor(r / 16777216); // High 24 bits shifted via division = chunk 2.
        for (let j = 0; j < 6 && i + j < buffer.length; j++) {
            if (j === 3) {
                r = rhi;
            }
            buffer[i + j] = r & 255;
            r >>>= 8;
        }
    }
}
function unescapeDataString(s) {
    // https://stackoverflow.com/a/4458580/524236
    return decodeURIComponent((s).replace(/\+/g, "%20"));
}
function escapeDataString(s) {
    return encodeURIComponent(s).replace(/!/g, "%21")
        .replace(/'/g, "%27")
        .replace(/\(/g, "%28")
        .replace(/\)/g, "%29")
        .replace(/\*/g, "%2A");
}
function escapeUriString(s) {
    return encodeURI(s);
}
// ICollection.Clear and Count members can be called on Arrays
// or Dictionaries so we need a runtime check (see #1120)
function count(col) {
    if (isArrayLike(col)) {
        return col.length;
    }
    else {
        let count = 0;
        for (const _ of col) {
            count++;
        }
        return count;
    }
}
function clear(col) {
    if (isArrayLike(col)) {
        col.splice(0);
    }
    else {
        col.clear();
    }
}
const CURRIED_KEY = "__CURRIED__";
function uncurry(arity, f) {
    // f may be a function option with None value
    if (f == null) {
        return undefined;
    }
    // The function is already uncurried
    if (f.length > 1) {
        // if (CURRIED_KEY in f) { // This doesn't always work
        return f;
    }
    let uncurriedFn;
    switch (arity) {
        case 2:
            uncurriedFn = (a1, a2) => f(a1)(a2);
            break;
        case 3:
            uncurriedFn = (a1, a2, a3) => f(a1)(a2)(a3);
            break;
        case 4:
            uncurriedFn = (a1, a2, a3, a4) => f(a1)(a2)(a3)(a4);
            break;
        case 5:
            uncurriedFn = (a1, a2, a3, a4, a5) => f(a1)(a2)(a3)(a4)(a5);
            break;
        case 6:
            uncurriedFn = (a1, a2, a3, a4, a5, a6) => f(a1)(a2)(a3)(a4)(a5)(a6);
            break;
        case 7:
            uncurriedFn = (a1, a2, a3, a4, a5, a6, a7) => f(a1)(a2)(a3)(a4)(a5)(a6)(a7);
            break;
        case 8:
            uncurriedFn = (a1, a2, a3, a4, a5, a6, a7, a8) => f(a1)(a2)(a3)(a4)(a5)(a6)(a7)(a8);
            break;
        default:
            throw new Error("Uncurrying to more than 8-arity is not supported: " + arity);
    }
    uncurriedFn[CURRIED_KEY] = f;
    return uncurriedFn;
}
function curry(arity, f) {
    if (f == null) {
        return undefined;
    }
    if (CURRIED_KEY in f) {
        return f[CURRIED_KEY];
    }
    switch (arity) {
        case 2:
            return (a1) => (a2) => f(a1, a2);
        case 3:
            return (a1) => (a2) => (a3) => f(a1, a2, a3);
        case 4:
            return (a1) => (a2) => (a3) => (a4) => f(a1, a2, a3, a4);
        case 5:
            return (a1) => (a2) => (a3) => (a4) => (a5) => f(a1, a2, a3, a4, a5);
        case 6:
            return (a1) => (a2) => (a3) => (a4) => (a5) => (a6) => f(a1, a2, a3, a4, a5, a6);
        case 7:
            return (a1) => (a2) => (a3) => (a4) => (a5) => (a6) => (a7) => f(a1, a2, a3, a4, a5, a6, a7);
        case 8:
            return (a1) => (a2) => (a3) => (a4) => (a5) => (a6) => (a7) => (a8) => f(a1, a2, a3, a4, a5, a6, a7, a8);
        default:
            throw new Error("Currying to more than 8-arity is not supported: " + arity);
    }
}
function partialApply(arity, f, args) {
    if (f == null) {
        return undefined;
    }
    else if (CURRIED_KEY in f) {
        f = f[CURRIED_KEY];
        for (let i = 0; i < args.length; i++) {
            f = f(args[i]);
        }
        return f;
    }
    else {
        switch (arity) {
            case 1:
                // Wrap arguments to make sure .concat doesn't destruct arrays. Example
                // [1,2].concat([3,4],5)   --> [1,2,3,4,5]    // fails
                // [1,2].concat([[3,4],5]) --> [1,2,[3,4],5]  // ok
                return (a1) => f.apply(undefined, args.concat([a1]));
            case 2:
                return (a1) => (a2) => f.apply(undefined, args.concat([a1, a2]));
            case 3:
                return (a1) => (a2) => (a3) => f.apply(undefined, args.concat([a1, a2, a3]));
            case 4:
                return (a1) => (a2) => (a3) => (a4) => f.apply(undefined, args.concat([a1, a2, a3, a4]));
            case 5:
                return (a1) => (a2) => (a3) => (a4) => (a5) => f.apply(undefined, args.concat([a1, a2, a3, a4, a5]));
            case 6:
                return (a1) => (a2) => (a3) => (a4) => (a5) => (a6) => f.apply(undefined, args.concat([a1, a2, a3, a4, a5, a6]));
            case 7:
                return (a1) => (a2) => (a3) => (a4) => (a5) => (a6) => (a7) => f.apply(undefined, args.concat([a1, a2, a3, a4, a5, a6, a7]));
            case 8:
                return (a1) => (a2) => (a3) => (a4) => (a5) => (a6) => (a7) => (a8) => f.apply(undefined, args.concat([a1, a2, a3, a4, a5, a6, a7, a8]));
            default:
                throw new Error("Partially applying to more than 8-arity is not supported: " + arity);
        }
    }
}
function mapCurriedArgs(fn, mappings) {
    function mapArg(fn, arg, mappings, idx) {
        const mapping = mappings[idx];
        if (mapping !== 0) {
            const expectedArity = mapping[0];
            const actualArity = mapping[1];
            if (expectedArity > 1) {
                arg = curry(expectedArity, arg);
            }
            if (actualArity > 1) {
                arg = uncurry(actualArity, arg);
            }
        }
        const res = fn(arg);
        if (idx + 1 === mappings.length) {
            return res;
        }
        else {
            return (arg) => mapArg(res, arg, mappings, idx + 1);
        }
    }
    return (arg) => mapArg(fn, arg, mappings, 0);
}
function addToDict(dict, k, v) {
    if (dict.has(k)) {
        throw new Error("An item with the same key has already been added. Key: " + k);
    }
    dict.set(k, v);
}
function getItemFromDict(map, key) {
    if (map.has(key)) {
        return map.get(key);
    }
    else {
        throw new Error(`The given key '${key}' was not present in the dictionary.`);
    }
}
//# sourceMappingURL=Util.js.map

/***/ }),

/***/ "./.fable/fable-library.2.13.0/lib/big.js":
/*!************************************************!*\
  !*** ./.fable/fable-library.2.13.0/lib/big.js ***!
  \************************************************/
/*! exports provided: Big, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Big", function() { return Big; });
/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Util */ "./.fable/fable-library.2.13.0/Util.js");
// https://github.com/MikeMcl/big.js/blob/01b3ce3a6b0ba7b42442ea48ec4ffc88d1669ec4/big.mjs
/* tslint:disable */

// The shared prototype object.
var P = {
    GetHashCode() { return Object(_Util__WEBPACK_IMPORTED_MODULE_0__["combineHashCodes"])([this.s, this.e].concat(this.c)); },
    Equals(x) { return !this.cmp(x); },
    CompareTo(x) { return this.cmp(x); },
};
/*
 *  big.js v5.2.2
 *  A small, fast, easy-to-use library for arbitrary-precision decimal arithmetic.
 *  Copyright (c) 2018 Michael Mclaughlin <M8ch88l@gmail.com>
 *  https://github.com/MikeMcl/big.js/LICENCE
 */
/************************************** EDITABLE DEFAULTS *****************************************/
// The default values below must be integers within the stated ranges.
/*
 * The maximum number of decimal places (DP) of the results of operations involving division:
 * div and sqrt, and pow with negative exponents.
 */
var DP = 28, // 0 to MAX_DP
/*
 * The rounding mode (RM) used when rounding to the above decimal places.
 *
 *  0  Towards zero (i.e. truncate, no rounding).       (ROUND_DOWN)
 *  1  To nearest neighbour. If equidistant, round up.  (ROUND_HALF_UP)
 *  2  To nearest neighbour. If equidistant, to even.   (ROUND_HALF_EVEN)
 *  3  Away from zero.                                  (ROUND_UP)
 */
RM = 1, // 0, 1, 2 or 3
// The maximum value of DP and Big.DP.
MAX_DP = 1E6, // 0 to 1000000
// The maximum magnitude of the exponent argument to the pow method.
MAX_POWER = 1E6, // 1 to 1000000
/*
 * The negative exponent (NE) at and beneath which toString returns exponential notation.
 * (JavaScript numbers: -7)
 * -1000000 is the minimum recommended exponent value of a Big.
 */
NE = -29, // 0 to -1000000
/*
 * The positive exponent (PE) at and above which toString returns exponential notation.
 * (JavaScript numbers: 21)
 * 1000000 is the maximum recommended exponent value of a Big.
 * (This limit is not enforced or checked.)
 */
PE = 29, // 0 to 1000000
/**************************************************************************************************/
// Error messages.
NAME = '[big.js] ', INVALID = NAME + 'Invalid ', INVALID_DP = INVALID + 'decimal places', INVALID_RM = INVALID + 'rounding mode', DIV_BY_ZERO = NAME + 'Division by zero', UNDEFINED = void 0, NUMERIC = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
/*
 * Create and return a Big constructor.
 *
 */
function _Big_() {
    /*
     * The Big constructor and exported function.
     * Create and return a new instance of a Big number object.
     *
     * n {number|string|Big} A numeric value.
     */
    function Big(n) {
        var x = this;
        // Enable constructor usage without new.
        if (!(x instanceof Big))
            return n === UNDEFINED ? _Big_() : new Big(n);
        // Duplicate.
        if (n instanceof Big) {
            x.s = n.s;
            x.e = n.e;
            x.c = n.c.slice();
            normalize(x);
        }
        else {
            parse(x, n);
        }
        /*
         * Retain a reference to this Big constructor, and shadow Big.prototype.constructor which
         * points to Object.
         */
        x.constructor = Big;
    }
    Big.prototype = P;
    Big.DP = DP;
    Big.RM = RM;
    Big.NE = NE;
    Big.PE = PE;
    Big.version = '5.2.2';
    return Big;
}
function normalize(x) {
    x = round(x, DP, 0);
    if (x.c.length > 1 && !x.c[0]) {
        let i = x.c.findIndex(x => x);
        x.c = x.c.slice(i);
        x.e = x.e - i;
    }
}
/*
 * Parse the number or string value passed to a Big constructor.
 *
 * x {Big} A Big number instance.
 * n {number|string} A numeric value.
 */
function parse(x, n) {
    var e, i, nl;
    // Minus zero?
    if (n === 0 && 1 / n < 0)
        n = '-0';
    else if (!NUMERIC.test(n += ''))
        throw Error(INVALID + 'number');
    // Determine sign.
    x.s = n.charAt(0) == '-' ? (n = n.slice(1), -1) : 1;
    // Decimal point?
    if ((e = n.indexOf('.')) > -1)
        n = n.replace('.', '');
    // Exponential form?
    if ((i = n.search(/e/i)) > 0) {
        // Determine exponent.
        if (e < 0)
            e = i;
        e += +n.slice(i + 1);
        n = n.substring(0, i);
    }
    else if (e < 0) {
        // Integer.
        e = n.length;
    }
    nl = n.length;
    // Determine leading zeros before decimal point.
    for (i = 0; i < e && i < nl && n.charAt(i) == '0';)
        ++i;
    // older version (ignores decimal point).
    // // Determine leading zeros.
    // for (i = 0; i < nl && n.charAt(i) == '0';) ++i;
    if (i == nl) {
        // Zero.
        x.c = [x.e = 0];
    }
    else {
        x.e = e - i - 1;
        x.c = [];
        // Convert string to array of digits without leading zeros
        for (e = 0; i < nl;)
            x.c[e++] = +n.charAt(i++);
        // older version (doesn't keep trailing zeroes).
        // // Determine trailing zeros.
        // for (; nl > 0 && n.charAt(--nl) == '0';);
        // // Convert string to array of digits without leading/trailing zeros.
        // for (e = 0; i <= nl;) x.c[e++] = +n.charAt(i++);
    }
    x = round(x, Big.DP, Big.RM);
    return x;
}
/*
 * Round Big x to a maximum of dp decimal places using rounding mode rm.
 * Called by stringify, P.div, P.round and P.sqrt.
 *
 * x {Big} The Big to round.
 * dp {number} Integer, 0 to MAX_DP inclusive.
 * rm {number} 0, 1, 2 or 3 (DOWN, HALF_UP, HALF_EVEN, UP)
 * [more] {boolean} Whether the result of division was truncated.
 */
function round(x, dp, rm, more) {
    var xc = x.c, i = x.e + dp + 1;
    if (i < xc.length) {
        if (rm === 1) {
            // xc[i] is the digit after the digit that may be rounded up.
            more = xc[i] >= 5;
        }
        else if (rm === 2) {
            more = xc[i] > 5 || xc[i] == 5 &&
                (more || i < 0 || xc[i + 1] !== UNDEFINED || xc[i - 1] & 1);
        }
        else if (rm === 3) {
            more = more || !!xc[0];
        }
        else {
            more = false;
            if (rm !== 0)
                throw Error(INVALID_RM);
        }
        if (i < 1) {
            xc.length = 1;
            if (more) {
                // 1, 0.1, 0.01, 0.001, 0.0001 etc.
                x.e = -dp;
                xc[0] = 1;
            }
            else {
                // Zero.
                xc[0] = x.e = 0;
            }
        }
        else {
            // Remove any digits after the required decimal places.
            xc.length = i--;
            // Round up?
            if (more) {
                // Rounding up may mean the previous digit has to be rounded up.
                for (; ++xc[i] > 9;) {
                    xc[i] = 0;
                    if (!i--) {
                        ++x.e;
                        xc.unshift(1);
                    }
                }
            }
            // Remove trailing zeros.
            for (i = xc.length; !xc[--i];)
                xc.pop();
        }
    }
    else if (rm < 0 || rm > 3 || rm !== ~~rm) {
        throw Error(INVALID_RM);
    }
    return x;
}
/*
 * Return a string representing the value of Big x in normal or exponential notation.
 * Handles P.toExponential, P.toFixed, P.toJSON, P.toPrecision, P.toString and P.valueOf.
 *
 * x {Big}
 * id? {number} Caller id.
 *         1 toExponential
 *         2 toFixed
 *         3 toPrecision
 *         4 valueOf
 * n? {number|undefined} Caller's argument.
 * k? {number|undefined}
 */
function stringify(x, id, n, k) {
    var e, s, Big = x.constructor, z = !x.c[0];
    if (n !== UNDEFINED) {
        if (n !== ~~n || n < (id == 3) || n > MAX_DP) {
            throw Error(id == 3 ? INVALID + 'precision' : INVALID_DP);
        }
        x = new Big(x);
        // The index of the digit that may be rounded up.
        n = k - x.e;
        // Round?
        if (x.c.length > ++k)
            round(x, n, Big.RM);
        // toFixed: recalculate k as x.e may have changed if value rounded up.
        if (id == 2)
            k = x.e + n + 1;
        // Append zeros?
        for (; x.c.length < k;)
            x.c.push(0);
    }
    e = x.e;
    s = x.c.join('');
    n = s.length;
    // Exponential notation?
    if (id != 2 && (id == 1 || id == 3 && k <= e || e <= Big.NE || e >= Big.PE)) {
        s = s.charAt(0) + (n > 1 ? '.' + s.slice(1) : '') + (e < 0 ? 'e' : 'e+') + e;
        // Normal notation.
    }
    else if (e < 0) {
        for (; ++e;)
            s = '0' + s;
        s = '0.' + s;
    }
    else if (e > 0) {
        if (++e > n)
            for (e -= n; e--;)
                s += '0';
        else if (e < n)
            s = s.slice(0, e) + '.' + s.slice(e);
    }
    else if (n > 1) {
        s = s.charAt(0) + '.' + s.slice(1);
    }
    return x.s < 0 && (!z || id == 4) ? '-' + s : s;
}
// Prototype/instance methods
/*
 * Return a new Big whose value is the absolute value of this Big.
 */
P.abs = function () {
    var x = new this.constructor(this);
    x.s = 1;
    return x;
};
/*
 * Return 1 if the value of this Big is greater than the value of Big y,
 *       -1 if the value of this Big is less than the value of Big y, or
 *        0 if they have the same value.
*/
P.cmp = function (y) {
    var isneg, Big = this.constructor, x = new Big(this), y = new Big(y), xc = x.c, yc = y.c, i = x.s, j = y.s, k = x.e, l = y.e;
    // Either zero?
    if (!xc[0] || !yc[0])
        return !xc[0] ? !yc[0] ? 0 : -j : i;
    // Signs differ?
    if (i != j)
        return i;
    isneg = i < 0;
    // Compare exponents.
    if (k != l)
        return k > l ^ isneg ? 1 : -1;
    // Compare digit by digit.
    j = Math.max(xc.length, yc.length);
    for (i = 0; i < j; i++) {
        k = i < xc.length ? xc[i] : 0;
        l = i < yc.length ? yc[i] : 0;
        if (k != l)
            return k > l ^ isneg ? 1 : -1;
    }
    return 0;
    // old version (doesn't compare well trailing zeroes, e.g. 1.0 with 1.00)
    // j = (k = xc.length) < (l = yc.length) ? k : l;
    // // Compare digit by digit.
    // for (i = -1; ++i < j;) {
    //   if (xc[i] != yc[i]) return xc[i] > yc[i] ^ isneg ? 1 : -1;
    // }
    // // Compare lengths.
    // return k == l ? 0 : k > l ^ isneg ? 1 : -1;
};
/*
 * Return a new Big whose value is the value of this Big divided by the value of Big y, rounded,
 * if necessary, to a maximum of Big.DP decimal places using rounding mode Big.RM.
 */
P.div = function (y) {
    var Big = this.constructor, x = new Big(this), y = new Big(y), a = x.c, // dividend
    b = y.c, // divisor
    k = x.s == y.s ? 1 : -1, dp = Big.DP;
    if (dp !== ~~dp || dp < 0 || dp > MAX_DP)
        throw Error(INVALID_DP);
    // Divisor is zero?
    if (!b[0])
        throw Error(DIV_BY_ZERO);
    // Dividend is 0? Return +-0.
    if (!a[0])
        return new Big(k * 0);
    var bl, bt, n, cmp, ri, bz = b.slice(), ai = bl = b.length, al = a.length, r = a.slice(0, bl), // remainder
    rl = r.length, q = y, // quotient
    qc = q.c = [], qi = 0, d = dp + (q.e = x.e - y.e) + 1; // number of digits of the result
    q.s = k;
    k = d < 0 ? 0 : d;
    // Create version of divisor with leading zero.
    bz.unshift(0);
    // Add zeros to make remainder as long as divisor.
    for (; rl++ < bl;)
        r.push(0);
    do {
        // n is how many times the divisor goes into current remainder.
        for (n = 0; n < 10; n++) {
            // Compare divisor and remainder.
            if (bl != (rl = r.length)) {
                cmp = bl > rl ? 1 : -1;
            }
            else {
                for (ri = -1, cmp = 0; ++ri < bl;) {
                    if (b[ri] != r[ri]) {
                        cmp = b[ri] > r[ri] ? 1 : -1;
                        break;
                    }
                }
            }
            // If divisor < remainder, subtract divisor from remainder.
            if (cmp < 0) {
                // Remainder can't be more than 1 digit longer than divisor.
                // Equalise lengths using divisor with extra leading zero?
                for (bt = rl == bl ? b : bz; rl;) {
                    if (r[--rl] < bt[rl]) {
                        ri = rl;
                        for (; ri && !r[--ri];)
                            r[ri] = 9;
                        --r[ri];
                        r[rl] += 10;
                    }
                    r[rl] -= bt[rl];
                }
                for (; !r[0];)
                    r.shift();
            }
            else {
                break;
            }
        }
        // Add the digit n to the result array.
        qc[qi++] = cmp ? n : ++n;
        // Update the remainder.
        if (r[0] && cmp)
            r[rl] = a[ai] || 0;
        else
            r = [a[ai]];
    } while ((ai++ < al || r[0] !== UNDEFINED) && k--);
    // Leading zero? Do not remove if result is simply zero (qi == 1).
    if (!qc[0] && qi != 1) {
        // There can't be more than one zero.
        qc.shift();
        q.e--;
    }
    // Round?
    if (qi > d)
        round(q, dp, Big.RM, r[0] !== UNDEFINED);
    return q;
};
/*
 * Return true if the value of this Big is equal to the value of Big y, otherwise return false.
 */
P.eq = function (y) {
    return !this.cmp(y);
};
/*
 * Return true if the value of this Big is greater than the value of Big y, otherwise return
 * false.
 */
P.gt = function (y) {
    return this.cmp(y) > 0;
};
/*
 * Return true if the value of this Big is greater than or equal to the value of Big y, otherwise
 * return false.
 */
P.gte = function (y) {
    return this.cmp(y) > -1;
};
/*
 * Return true if the value of this Big is less than the value of Big y, otherwise return false.
 */
P.lt = function (y) {
    return this.cmp(y) < 0;
};
/*
 * Return true if the value of this Big is less than or equal to the value of Big y, otherwise
 * return false.
 */
P.lte = function (y) {
    return this.cmp(y) < 1;
};
/*
 * Return a new Big whose value is the value of this Big minus the value of Big y.
 */
P.minus = P.sub = function (y) {
    var i, j, t, xlty, Big = this.constructor, x = new Big(this), y = new Big(y), a = x.s, b = y.s;
    // Signs differ?
    if (a != b) {
        y.s = -b;
        return x.plus(y);
    }
    var xc = x.c.slice(), xe = x.e, yc = y.c, ye = y.e;
    // Either zero?
    if (!xc[0] || !yc[0]) {
        // y is non-zero? x is non-zero? Or both are zero.
        return yc[0] ? (y.s = -b, y) : new Big(xc[0] ? x : 0);
    }
    // Determine which is the bigger number. Prepend zeros to equalise exponents.
    if (a = xe - ye) {
        if (xlty = a < 0) {
            a = -a;
            t = xc;
        }
        else {
            ye = xe;
            t = yc;
        }
        t.reverse();
        for (b = a; b--;)
            t.push(0);
        t.reverse();
    }
    else {
        // Exponents equal. Check digit by digit.
        j = ((xlty = xc.length < yc.length) ? xc : yc).length;
        for (a = b = 0; b < j; b++) {
            if (xc[b] != yc[b]) {
                xlty = xc[b] < yc[b];
                break;
            }
        }
    }
    // x < y? Point xc to the array of the bigger number.
    if (xlty) {
        t = xc;
        xc = yc;
        yc = t;
        y.s = -y.s;
    }
    /*
     * Append zeros to xc if shorter. No need to add zeros to yc if shorter as subtraction only
     * needs to start at yc.length.
     */
    if ((b = (j = yc.length) - (i = xc.length)) > 0)
        for (; b--;)
            xc[i++] = 0;
    // Subtract yc from xc.
    for (b = i; j > a;) {
        if (xc[--j] < yc[j]) {
            for (i = j; i && !xc[--i];)
                xc[i] = 9;
            --xc[i];
            xc[j] += 10;
        }
        xc[j] -= yc[j];
    }
    // Remove trailing zeros.
    for (; xc[--b] === 0;)
        xc.pop();
    // Remove leading zeros and adjust exponent accordingly.
    for (; xc[0] === 0;) {
        xc.shift();
        --ye;
    }
    if (!xc[0]) {
        // n - n = +0
        y.s = 1;
        // Result must be zero.
        xc = [ye = 0];
    }
    y.c = xc;
    y.e = ye;
    return y;
};
/*
 * Return a new Big whose value is the value of this Big modulo the value of Big y.
 */
P.mod = function (y) {
    var ygtx, Big = this.constructor, x = new Big(this), y = new Big(y), a = x.s, b = y.s;
    if (!y.c[0])
        throw Error(DIV_BY_ZERO);
    x.s = y.s = 1;
    ygtx = y.cmp(x) == 1;
    x.s = a;
    y.s = b;
    if (ygtx)
        return new Big(x);
    a = Big.DP;
    b = Big.RM;
    Big.DP = Big.RM = 0;
    x = x.div(y);
    Big.DP = a;
    Big.RM = b;
    return this.minus(x.times(y));
};
/*
 * Return a new Big whose value is the value of this Big plus the value of Big y.
 */
P.plus = P.add = function (y) {
    var t, Big = this.constructor, x = new Big(this), y = new Big(y), a = x.s, b = y.s;
    // Signs differ?
    if (a != b) {
        y.s = -b;
        return x.minus(y);
    }
    var xe = x.e, xc = x.c, ye = y.e, yc = y.c;
    // Either zero? y is non-zero? x is non-zero? Or both are zero.
    if (!xc[0] || !yc[0])
        return yc[0] ? y : new Big(xc[0] ? x : a * 0);
    xc = xc.slice();
    // Prepend zeros to equalise exponents.
    // Note: reverse faster than unshifts.
    if (a = xe - ye) {
        if (a > 0) {
            ye = xe;
            t = yc;
        }
        else {
            a = -a;
            t = xc;
        }
        t.reverse();
        for (; a--;)
            t.push(0);
        t.reverse();
    }
    // Point xc to the longer array.
    if (xc.length - yc.length < 0) {
        t = yc;
        yc = xc;
        xc = t;
    }
    a = yc.length;
    // Only start adding at yc.length - 1 as the further digits of xc can be left as they are.
    for (b = 0; a; xc[a] %= 10)
        b = (xc[--a] = xc[a] + yc[a] + b) / 10 | 0;
    // No need to check for zero, as +x + +y != 0 && -x + -y != 0
    if (b) {
        xc.unshift(b);
        ++ye;
    }
    // Remove trailing zeros.
    for (a = xc.length; xc[--a] === 0;)
        xc.pop();
    y.c = xc;
    y.e = ye;
    return y;
};
/*
 * Return a Big whose value is the value of this Big raised to the power n.
 * If n is negative, round to a maximum of Big.DP decimal places using rounding
 * mode Big.RM.
 *
 * n {number} Integer, -MAX_POWER to MAX_POWER inclusive.
 */
P.pow = function (n) {
    var Big = this.constructor, x = new Big(this), y = new Big(1), one = new Big(1), isneg = n < 0;
    if (n !== ~~n || n < -MAX_POWER || n > MAX_POWER)
        throw Error(INVALID + 'exponent');
    if (isneg)
        n = -n;
    for (;;) {
        if (n & 1)
            y = y.times(x);
        n >>= 1;
        if (!n)
            break;
        x = x.times(x);
    }
    return isneg ? one.div(y) : y;
};
/*
 * Return a new Big whose value is the value of this Big rounded using rounding mode rm
 * to a maximum of dp decimal places, or, if dp is negative, to an integer which is a
 * multiple of 10**-dp.
 * If dp is not specified, round to 0 decimal places.
 * If rm is not specified, use Big.RM.
 *
 * dp? {number} Integer, -MAX_DP to MAX_DP inclusive.
 * rm? 0, 1, 2 or 3 (ROUND_DOWN, ROUND_HALF_UP, ROUND_HALF_EVEN, ROUND_UP)
 */
P.round = function (dp, rm) {
    var Big = this.constructor;
    if (dp === UNDEFINED)
        dp = 0;
    else if (dp !== ~~dp || dp < -MAX_DP || dp > MAX_DP)
        throw Error(INVALID_DP);
    return round(new Big(this), dp, rm === UNDEFINED ? Big.RM : rm);
};
/*
 * Return a new Big whose value is the square root of the value of this Big, rounded, if
 * necessary, to a maximum of Big.DP decimal places using rounding mode Big.RM.
 */
P.sqrt = function () {
    var r, c, t, Big = this.constructor, x = new Big(this), s = x.s, e = x.e, half = new Big(0.5);
    // Zero?
    if (!x.c[0])
        return new Big(x);
    // Negative?
    if (s < 0)
        throw Error(NAME + 'No square root');
    // Estimate.
    s = Math.sqrt(x + '');
    // Math.sqrt underflow/overflow?
    // Re-estimate: pass x coefficient to Math.sqrt as integer, then adjust the result exponent.
    if (s === 0 || s === 1 / 0) {
        c = x.c.join('');
        if (!(c.length + e & 1))
            c += '0';
        s = Math.sqrt(c);
        e = ((e + 1) / 2 | 0) - (e < 0 || e & 1);
        r = new Big((s == 1 / 0 ? '1e' : (s = s.toExponential()).slice(0, s.indexOf('e') + 1)) + e);
    }
    else {
        r = new Big(s);
    }
    e = r.e + (Big.DP += 4);
    // Newton-Raphson iteration.
    do {
        t = r;
        r = half.times(t.plus(x.div(t)));
    } while (t.c.slice(0, e).join('') !== r.c.slice(0, e).join(''));
    return round(r, Big.DP -= 4, Big.RM);
};
/*
 * Return a new Big whose value is the value of this Big times the value of Big y.
 */
P.times = P.mul = function (y) {
    var c, Big = this.constructor, x = new Big(this), y = new Big(y), xc = x.c, yc = y.c, a = xc.length, b = yc.length, i = x.e, j = y.e;
    // Determine sign of result.
    y.s = x.s == y.s ? 1 : -1;
    // Return signed 0 if either 0.
    if (!xc[0] || !yc[0])
        return new Big(y.s * 0);
    // Initialise exponent of result as x.e + y.e.
    y.e = i + j;
    // If array xc has fewer digits than yc, swap xc and yc, and lengths.
    if (a < b) {
        c = xc;
        xc = yc;
        yc = c;
        j = a;
        a = b;
        b = j;
    }
    // Initialise coefficient array of result with zeros.
    for (c = new Array(j = a + b); j--;)
        c[j] = 0;
    // Multiply.
    // i is initially xc.length.
    for (i = b; i--;) {
        b = 0;
        // a is yc.length.
        for (j = a + i; j > i;) {
            // Current sum of products at this digit position, plus carry.
            b = c[j] + yc[i] * xc[j - i - 1] + b;
            c[j--] = b % 10;
            // carry
            b = b / 10 | 0;
        }
        c[j] = (c[j] + b) % 10;
    }
    // Increment result exponent if there is a final carry, otherwise remove leading zero.
    if (b)
        ++y.e;
    else
        c.shift();
    // Remove trailing zeros.
    for (i = c.length; !c[--i];)
        c.pop();
    y.c = c;
    return y;
};
/*
 * Return a string representing the value of this Big in exponential notation to dp fixed decimal
 * places and rounded using Big.RM.
 *
 * dp? {number} Integer, 0 to MAX_DP inclusive.
 */
P.toExponential = function (dp) {
    return stringify(this, 1, dp, dp);
};
/*
 * Return a string representing the value of this Big in normal notation to dp fixed decimal
 * places and rounded using Big.RM.
 *
 * dp? {number} Integer, 0 to MAX_DP inclusive.
 *
 * (-0).toFixed(0) is '0', but (-0.1).toFixed(0) is '-0'.
 * (-0).toFixed(1) is '0.0', but (-0.01).toFixed(1) is '-0.0'.
 */
P.toFixed = function (dp) {
    return stringify(this, 2, dp, this.e + dp);
};
/*
 * Return a string representing the value of this Big rounded to sd significant digits using
 * Big.RM. Use exponential notation if sd is less than the number of digits necessary to represent
 * the integer part of the value in normal notation.
 *
 * sd {number} Integer, 1 to MAX_DP inclusive.
 */
P.toPrecision = function (sd) {
    return stringify(this, 3, sd, sd - 1);
};
/*
 * Return a string representing the value of this Big.
 * Return exponential notation if this Big has a positive exponent equal to or greater than
 * Big.PE, or a negative exponent equal to or less than Big.NE.
 * Omit the sign for negative zero.
 */
P.toString = function () {
    return stringify(this);
};
/*
 * Return a string representing the value of this Big.
 * Return exponential notation if this Big has a positive exponent equal to or greater than
 * Big.PE, or a negative exponent equal to or less than Big.NE.
 * Include the sign for negative zero.
 */
P.valueOf = P.toJSON = function () {
    return stringify(this, 4);
};
// Export
var Big = _Big_();
/* harmony default export */ __webpack_exports__["default"] = (Big);
//# sourceMappingURL=big.js.map

/***/ }),

/***/ "./.fable/fable-library.2.13.0/lib/long.js":
/*!*************************************************!*\
  !*** ./.fable/fable-library.2.13.0/lib/long.js ***!
  \*************************************************/
/*! exports provided: default, Long, isLong, fromInt, fromNumber, fromBits, fromString, fromValue, ZERO, UZERO, ONE, UONE, NEG_ONE, MAX_VALUE, MAX_UNSIGNED_VALUE, MIN_VALUE, toInt, toNumber, toString, getHighBits, getHighBitsUnsigned, getLowBits, getLowBitsUnsigned, getNumBitsAbs, isZero, isNegative, isPositive, isOdd, isEven, equals, notEquals, lessThan, lessThanOrEqual, greaterThan, greaterThanOrEqual, compare, negate, add, subtract, multiply, divide, modulo, not, and, or, xor, shiftLeft, shiftRight, shiftRightUnsigned, rotateLeft, rotateRight, toSigned, toUnsigned, toBytes, toBytesLE, toBytesBE, fromBytes, fromBytesLE, fromBytesBE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Long", function() { return Long; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLong", function() { return isLong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromInt", function() { return fromInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromNumber", function() { return fromNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromBits", function() { return fromBits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromString", function() { return fromString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValue", function() { return fromValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZERO", function() { return ZERO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UZERO", function() { return UZERO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ONE", function() { return ONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UONE", function() { return UONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEG_ONE", function() { return NEG_ONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_VALUE", function() { return MAX_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_UNSIGNED_VALUE", function() { return MAX_UNSIGNED_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_VALUE", function() { return MIN_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toInt", function() { return toInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNumber", function() { return toNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return toString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHighBits", function() { return getHighBits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHighBitsUnsigned", function() { return getHighBitsUnsigned; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLowBits", function() { return getLowBits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLowBitsUnsigned", function() { return getLowBitsUnsigned; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNumBitsAbs", function() { return getNumBitsAbs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isZero", function() { return isZero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNegative", function() { return isNegative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPositive", function() { return isPositive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOdd", function() { return isOdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEven", function() { return isEven; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return equals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notEquals", function() { return notEquals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lessThan", function() { return lessThan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lessThanOrEqual", function() { return lessThanOrEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greaterThan", function() { return greaterThan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greaterThanOrEqual", function() { return greaterThanOrEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return negate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divide", function() { return divide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modulo", function() { return modulo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "not", function() { return not; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "and", function() { return and; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "or", function() { return or; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xor", function() { return xor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shiftLeft", function() { return shiftLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shiftRight", function() { return shiftRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shiftRightUnsigned", function() { return shiftRightUnsigned; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateLeft", function() { return rotateLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateRight", function() { return rotateRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toSigned", function() { return toSigned; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUnsigned", function() { return toUnsigned; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toBytes", function() { return toBytes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toBytesLE", function() { return toBytesLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toBytesBE", function() { return toBytesBE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromBytes", function() { return fromBytes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromBytesLE", function() { return fromBytesLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromBytesBE", function() { return fromBytesBE; });
// Adapted from: https://github.com/dcodeIO/long.js/blob/master/src/long.js
// Apache License 2.0: https://github.com/dcodeIO/long.js/blob/master/LICENSE
/* harmony default export */ __webpack_exports__["default"] = (Long);
/**
 * wasm optimizations, to do native i64 multiplication and divide
 */
var wasm = null;
try {
    wasm = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([
        0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11
    ])), {}).exports;
}
catch (e) {
    // no wasm support :(
}
/**
 * Constructs a 64 bit two's-complement integer, given its low and high 32 bit values as *signed* integers.
 *  See the from* functions below for more convenient ways of constructing Longs.
 * @exports Long
 * @class A Long class for representing a 64 bit two's-complement integer value.
 * @param {number} low The low (signed) 32 bits of the long
 * @param {number} high The high (signed) 32 bits of the long
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @constructor
 */
function Long(low, high, unsigned) {
    /**
     * The low 32 bits as a signed value.
     * @type {number}
     */
    this.low = low | 0;
    /**
     * The high 32 bits as a signed value.
     * @type {number}
     */
    this.high = high | 0;
    /**
     * Whether unsigned or not.
     * @type {boolean}
     */
    this.unsigned = !!unsigned;
}
Long.prototype.GetHashCode = function () {
    let h1 = this.unsigned ? 1 : 0;
    h1 = ((h1 << 5) + h1) ^ this.high;
    h1 = ((h1 << 5) + h1) ^ this.low;
    return h1;
};
Long.prototype.Equals = function (x) { return equals(this, x); };
Long.prototype.CompareTo = function (x) { return compare(this, x); };
Long.prototype.toString = function (radix) { return toString(this, radix); };
Long.prototype.toJSON = function () { return toString(this); };
// The internal representation of a long is the two given signed, 32-bit values.
// We use 32-bit pieces because these are the size of integers on which
// Javascript performs bit-operations.  For operations like addition and
// multiplication, we split each number into 16 bit pieces, which can easily be
// multiplied within Javascript's floating-point representation without overflow
// or change in sign.
//
// In the algorithms below, we frequently reduce the negative case to the
// positive case by negating the input(s) and then post-processing the result.
// Note that we must ALWAYS check specially whether those values are MIN_VALUE
// (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
// a positive number, it overflows back into a negative).  Not handling this
// case would often result in infinite recursion.
//
// Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the from*
// methods on which they depend.
/**
 * An indicator used to reliably determine if an object is a Long or not.
 * @type {boolean}
 * @const
 * @private
 */
Long.prototype.__isLong__;
Object.defineProperty(Long.prototype, "__isLong__", { value: true });
/**
 * @function
 * @param {*} obj Object
 * @returns {boolean}
 * @inner
 */
function isLong(obj) {
    return (obj && obj["__isLong__"]) === true;
}
/**
 * Tests if the specified object is a Long.
 * @function
 * @param {*} obj Object
 * @returns {boolean}
 */
// Long.isLong = isLong;
/**
 * A cache of the Long representations of small integer values.
 * @type {!Object}
 * @inner
 */
var INT_CACHE = {};
/**
 * A cache of the Long representations of small unsigned integer values.
 * @type {!Object}
 * @inner
 */
var UINT_CACHE = {};
/**
 * @param {number} value
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromInt(value, unsigned) {
    var obj, cachedObj, cache;
    if (unsigned) {
        value >>>= 0;
        if (cache = (0 <= value && value < 256)) {
            cachedObj = UINT_CACHE[value];
            if (cachedObj)
                return cachedObj;
        }
        obj = fromBits(value, (value | 0) < 0 ? -1 : 0, true);
        if (cache)
            UINT_CACHE[value] = obj;
        return obj;
    }
    else {
        value |= 0;
        if (cache = (-128 <= value && value < 128)) {
            cachedObj = INT_CACHE[value];
            if (cachedObj)
                return cachedObj;
        }
        obj = fromBits(value, value < 0 ? -1 : 0, false);
        if (cache)
            INT_CACHE[value] = obj;
        return obj;
    }
}
/**
 * Returns a Long representing the given 32 bit integer value.
 * @function
 * @param {number} value The 32 bit integer in question
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */
// Long.fromInt = fromInt;
/**
 * @param {number} value
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromNumber(value, unsigned) {
    if (isNaN(value))
        return unsigned ? UZERO : ZERO;
    if (unsigned) {
        if (value < 0)
            return UZERO;
        if (value >= TWO_PWR_64_DBL)
            return MAX_UNSIGNED_VALUE;
    }
    else {
        if (value <= -TWO_PWR_63_DBL)
            return MIN_VALUE;
        if (value + 1 >= TWO_PWR_63_DBL)
            return MAX_VALUE;
    }
    if (value < 0)
        return negate(fromNumber(-value, unsigned));
    return fromBits((value % TWO_PWR_32_DBL) | 0, (value / TWO_PWR_32_DBL) | 0, unsigned);
}
/**
 * Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned.
 * @function
 * @param {number} value The number in question
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */
// Long.fromNumber = fromNumber;
/**
 * @param {number} lowBits
 * @param {number} highBits
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromBits(lowBits, highBits, unsigned) {
    return new Long(lowBits, highBits, unsigned);
}
/**
 * Returns a Long representing the 64 bit integer that comes by concatenating the given low and high bits. Each is
 *  assumed to use 32 bits.
 * @function
 * @param {number} lowBits The low 32 bits
 * @param {number} highBits The high 32 bits
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */
// Long.fromBits = fromBits;
/**
 * @function
 * @param {number} base
 * @param {number} exponent
 * @returns {number}
 * @inner
 */
var pow_dbl = Math.pow; // Used 4 times (4*8 to 15+4)
/**
 * @param {string} str
 * @param {(boolean|number)=} unsigned
 * @param {number=} radix
 * @returns {!Long}
 * @inner
 */
function fromString(str, unsigned, radix) {
    if (str.length === 0)
        throw Error('empty string');
    if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity")
        return ZERO;
    if (typeof unsigned === 'number') {
        // For goog.math.long compatibility
        radix = unsigned,
            unsigned = false;
    }
    else {
        unsigned = !!unsigned;
    }
    radix = radix || 10;
    if (radix < 2 || 36 < radix)
        throw RangeError('radix');
    var p = str.indexOf('-');
    if (p > 0)
        throw Error('interior hyphen');
    else if (p === 0) {
        return negate(fromString(str.substring(1), unsigned, radix));
    }
    // Do several (8) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = fromNumber(pow_dbl(radix, 8));
    var result = ZERO;
    for (var i = 0; i < str.length; i += 8) {
        var size = Math.min(8, str.length - i), value = parseInt(str.substring(i, i + size), radix);
        if (size < 8) {
            var power = fromNumber(pow_dbl(radix, size));
            result = add(multiply(result, power), fromNumber(value));
        }
        else {
            result = multiply(result, radixToPower);
            result = add(result, fromNumber(value));
        }
    }
    result.unsigned = unsigned;
    return result;
}
/**
 * Returns a Long representation of the given string, written using the specified radix.
 * @function
 * @param {string} str The textual representation of the Long
 * @param {(boolean|number)=} unsigned Whether unsigned or not, defaults to signed
 * @param {number=} radix The radix in which the text is written (2-36), defaults to 10
 * @returns {!Long} The corresponding Long value
 */
// Long.fromString = fromString;
/**
 * @function
 * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromValue(val, unsigned) {
    if (typeof val === 'number')
        return fromNumber(val, unsigned);
    if (typeof val === 'string')
        return fromString(val, unsigned);
    // Throws for non-objects, converts non-instanceof Long:
    return fromBits(val.low, val.high, typeof unsigned === 'boolean' ? unsigned : val.unsigned);
}
/**
 * Converts the specified value to a Long using the appropriate from* function for its type.
 * @function
 * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val Value
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long}
 */
// Long.fromValue = fromValue;
// NOTE: the compiler should inline these constant values below and then remove these variables, so there should be
// no runtime penalty for these.
/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_16_DBL = 1 << 16;
/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_24_DBL = 1 << 24;
/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;
/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;
/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;
/**
 * @type {!Long}
 * @const
 * @inner
 */
var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);
/**
 * @type {!Long}
 * @inner
 */
var ZERO = fromInt(0);
/**
 * Signed zero.
 * @type {!Long}
 */
// Long.ZERO = ZERO;
/**
 * @type {!Long}
 * @inner
 */
var UZERO = fromInt(0, true);
/**
 * Unsigned zero.
 * @type {!Long}
 */
// Long.UZERO = UZERO;
/**
 * @type {!Long}
 * @inner
 */
var ONE = fromInt(1);
/**
 * Signed one.
 * @type {!Long}
 */
// Long.ONE = ONE;
/**
 * @type {!Long}
 * @inner
 */
var UONE = fromInt(1, true);
/**
 * Unsigned one.
 * @type {!Long}
 */
// Long.UONE = UONE;
/**
 * @type {!Long}
 * @inner
 */
var NEG_ONE = fromInt(-1);
/**
 * Signed negative one.
 * @type {!Long}
 */
// Long.NEG_ONE = NEG_ONE;
/**
 * @type {!Long}
 * @inner
 */
var MAX_VALUE = fromBits(0xFFFFFFFF | 0, 0x7FFFFFFF | 0, false);
/**
 * Maximum signed value.
 * @type {!Long}
 */
// Long.MAX_VALUE = MAX_VALUE;
/**
 * @type {!Long}
 * @inner
 */
var MAX_UNSIGNED_VALUE = fromBits(0xFFFFFFFF | 0, 0xFFFFFFFF | 0, true);
/**
 * Maximum unsigned value.
 * @type {!Long}
 */
// Long.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;
/**
 * @type {!Long}
 * @inner
 */
var MIN_VALUE = fromBits(0, 0x80000000 | 0, false);
/**
 * Minimum signed value.
 * @type {!Long}
 */
// Long.MIN_VALUE = MIN_VALUE;
/**
 * @alias Long.prototype
 * @inner
 */
// var LongPrototype = Long.prototype;
/**
 * Converts the Long to a 32 bit integer, assuming it is a 32 bit integer.
 * @this {!Long}
 * @returns {number}
 */
function toInt($this) {
    return $this.unsigned ? $this.low >>> 0 : $this.low;
}
;
/**
 * Converts the Long to a the nearest floating-point representation of this value (double, 53 bit mantissa).
 * @this {!Long}
 * @returns {number}
 */
function toNumber($this) {
    if ($this.unsigned)
        return (($this.high >>> 0) * TWO_PWR_32_DBL) + ($this.low >>> 0);
    return $this.high * TWO_PWR_32_DBL + ($this.low >>> 0);
}
;
/**
 * Converts the Long to a string written in the specified radix.
 * @this {!Long}
 * @param {number=} radix Radix (2-36), defaults to 10
 * @returns {string}
 * @override
 * @throws {RangeError} If `radix` is out of range
 */
function toString($this, radix) {
    radix = radix || 10;
    if (radix < 2 || 36 < radix)
        throw RangeError('radix');
    if (isZero($this))
        return '0';
    if (isNegative($this)) { // Unsigned Longs are never negative
        if (equals($this, MIN_VALUE)) {
            // We need to change the Long value before it can be negated, so we remove
            // the bottom-most digit in this base and then recurse to do the rest.
            var radixLong = fromNumber(radix), div = divide($this, radixLong), rem1 = subtract(multiply(div, radixLong), $this);
            return toString(div, radix) + toInt(rem1).toString(radix);
        }
        else
            return '-' + toString(negate($this), radix);
    }
    // Do several (6) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = fromNumber(pow_dbl(radix, 6), $this.unsigned), rem = $this;
    var result = '';
    while (true) {
        var remDiv = divide(rem, radixToPower), intval = toInt(subtract(rem, multiply(remDiv, radixToPower))) >>> 0, digits = intval.toString(radix);
        rem = remDiv;
        if (isZero(rem))
            return digits + result;
        else {
            while (digits.length < 6)
                digits = '0' + digits;
            result = '' + digits + result;
        }
    }
}
;
/**
 * Gets the high 32 bits as a signed integer.
 * @this {!Long}
 * @returns {number} Signed high bits
 */
function getHighBits($this) {
    return $this.high;
}
;
/**
 * Gets the high 32 bits as an unsigned integer.
 * @this {!Long}
 * @returns {number} Unsigned high bits
 */
function getHighBitsUnsigned($this) {
    return $this.high >>> 0;
}
;
/**
 * Gets the low 32 bits as a signed integer.
 * @this {!Long}
 * @returns {number} Signed low bits
 */
function getLowBits($this) {
    return $this.low;
}
;
/**
 * Gets the low 32 bits as an unsigned integer.
 * @this {!Long}
 * @returns {number} Unsigned low bits
 */
function getLowBitsUnsigned($this) {
    return $this.low >>> 0;
}
;
/**
 * Gets the number of bits needed to represent the absolute value of this Long.
 * @this {!Long}
 * @returns {number}
 */
function getNumBitsAbs($this) {
    if (isNegative($this)) // Unsigned Longs are never negative
        return equals($this, MIN_VALUE) ? 64 : getNumBitsAbs(negate($this));
    var val = $this.high != 0 ? $this.high : $this.low;
    for (var bit = 31; bit > 0; bit--)
        if ((val & (1 << bit)) != 0)
            break;
    return $this.high != 0 ? bit + 33 : bit + 1;
}
;
/**
 * Tests if this Long's value equals zero.
 * @this {!Long}
 * @returns {boolean}
 */
function isZero($this) {
    return $this.high === 0 && $this.low === 0;
}
;
/**
 * Tests if this Long's value equals zero. This is an alias of {@link Long#isZero}.
 * @returns {boolean}
 */
// LongPrototype.eqz = LongPrototype.isZero;
/**
 * Tests if this Long's value is negative.
 * @this {!Long}
 * @returns {boolean}
 */
function isNegative($this) {
    return !$this.unsigned && $this.high < 0;
}
;
/**
 * Tests if this Long's value is positive.
 * @this {!Long}
 * @returns {boolean}
 */
function isPositive($this) {
    return $this.unsigned || $this.high >= 0;
}
;
/**
 * Tests if this Long's value is odd.
 * @this {!Long}
 * @returns {boolean}
 */
function isOdd($this) {
    return ($this.low & 1) === 1;
}
;
/**
 * Tests if this Long's value is even.
 * @this {!Long}
 * @returns {boolean}
 */
function isEven($this) {
    return ($this.low & 1) === 0;
}
;
/**
 * Tests if this Long's value equals the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
function equals($this, other) {
    if (!isLong(other))
        other = fromValue(other);
    if ($this.unsigned !== other.unsigned && ($this.high >>> 31) === 1 && (other.high >>> 31) === 1)
        return false;
    return $this.high === other.high && $this.low === other.low;
}
;
/**
 * Tests if this Long's value equals the specified's. This is an alias of {@link Long#equals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
// LongPrototype.eq = LongPrototype.equals;
/**
 * Tests if this Long's value differs from the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
function notEquals($this, other) {
    return !equals($this, /* validates */ other);
}
;
/**
 * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
// LongPrototype.neq = LongPrototype.notEquals;
/**
 * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
// LongPrototype.ne = LongPrototype.notEquals;
/**
 * Tests if this Long's value is less than the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
function lessThan($this, other) {
    return compare($this, /* validates */ other) < 0;
}
;
/**
 * Tests if this Long's value is less than the specified's. This is an alias of {@link Long#lessThan}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
// LongPrototype.lt = LongPrototype.lessThan;
/**
 * Tests if this Long's value is less than or equal the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
function lessThanOrEqual($this, other) {
    return compare($this, /* validates */ other) <= 0;
}
;
/**
 * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
// LongPrototype.lte = LongPrototype.lessThanOrEqual;
/**
 * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
// LongPrototype.le = LongPrototype.lessThanOrEqual;
/**
 * Tests if this Long's value is greater than the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
function greaterThan($this, other) {
    return compare($this, /* validates */ other) > 0;
}
;
/**
 * Tests if this Long's value is greater than the specified's. This is an alias of {@link Long#greaterThan}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
// LongPrototype.gt = LongPrototype.greaterThan;
/**
 * Tests if this Long's value is greater than or equal the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
function greaterThanOrEqual($this, other) {
    return compare($this, /* validates */ other) >= 0;
}
;
/**
 * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
// LongPrototype.gte = LongPrototype.greaterThanOrEqual;
/**
 * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
// LongPrototype.ge = LongPrototype.greaterThanOrEqual;
/**
 * Compares this Long's value with the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {number} 0 if they are the same, 1 if the this is greater and -1
 *  if the given one is greater
 */
function compare($this, other) {
    if (!isLong(other))
        other = fromValue(other);
    if (equals($this, other))
        return 0;
    var thisNeg = isNegative($this), otherNeg = isNegative(other);
    if (thisNeg && !otherNeg)
        return -1;
    if (!thisNeg && otherNeg)
        return 1;
    // At this point the sign bits are the same
    if (!$this.unsigned)
        return isNegative(subtract($this, other)) ? -1 : 1;
    // Both are positive if at least one is unsigned
    return (other.high >>> 0) > ($this.high >>> 0) || (other.high === $this.high && (other.low >>> 0) > ($this.low >>> 0)) ? -1 : 1;
}
;
/**
 * Compares this Long's value with the specified's. This is an alias of {@link Long#compare}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {number} 0 if they are the same, 1 if the this is greater and -1
 *  if the given one is greater
 */
// LongPrototype.comp = LongPrototype.compare;
/**
 * Negates this Long's value.
 * @this {!Long}
 * @returns {!Long} Negated Long
 */
function negate($this) {
    if (!$this.unsigned && equals($this, MIN_VALUE))
        return MIN_VALUE;
    return add(not($this), ONE);
}
;
/**
 * Negates this Long's value. This is an alias of {@link Long#negate}.
 * @function
 * @returns {!Long} Negated Long
 */
// LongPrototype.neg = LongPrototype.negate;
/**
 * Returns the sum of this and the specified Long.
 * @this {!Long}
 * @param {!Long|number|string} addend Addend
 * @returns {!Long} Sum
 */
function add($this, addend) {
    if (!isLong(addend))
        addend = fromValue(addend);
    // Divide each number into 4 chunks of 16 bits, and then sum the chunks.
    var a48 = $this.high >>> 16;
    var a32 = $this.high & 0xFFFF;
    var a16 = $this.low >>> 16;
    var a00 = $this.low & 0xFFFF;
    var b48 = addend.high >>> 16;
    var b32 = addend.high & 0xFFFF;
    var b16 = addend.low >>> 16;
    var b00 = addend.low & 0xFFFF;
    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 + b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 + b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 + b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 + b48;
    c48 &= 0xFFFF;
    return fromBits((c16 << 16) | c00, (c48 << 16) | c32, $this.unsigned);
}
;
/**
 * Returns the difference of this and the specified Long.
 * @this {!Long}
 * @param {!Long|number|string} subtrahend Subtrahend
 * @returns {!Long} Difference
 */
function subtract($this, subtrahend) {
    if (!isLong(subtrahend))
        subtrahend = fromValue(subtrahend);
    return add($this, negate(subtrahend));
}
;
/**
 * Returns the difference of this and the specified Long. This is an alias of {@link Long#subtract}.
 * @function
 * @param {!Long|number|string} subtrahend Subtrahend
 * @returns {!Long} Difference
 */
// LongPrototype.sub = LongPrototype.subtract;
/**
 * Returns the product of this and the specified Long.
 * @this {!Long}
 * @param {!Long|number|string} multiplier Multiplier
 * @returns {!Long} Product
 */
function multiply($this, multiplier) {
    if (isZero($this))
        return $this.unsigned ? UZERO : ZERO;
    if (!isLong(multiplier))
        multiplier = fromValue(multiplier);
    // use wasm support if present
    if (wasm) {
        var low = wasm.mul($this.low, $this.high, multiplier.low, multiplier.high);
        return fromBits(low, wasm.get_high(), $this.unsigned);
    }
    if (isZero(multiplier))
        return $this.unsigned ? UZERO : ZERO;
    if (equals($this, MIN_VALUE))
        return isOdd(multiplier) ? MIN_VALUE : ZERO;
    if (equals(multiplier, MIN_VALUE))
        return isOdd($this) ? MIN_VALUE : ZERO;
    if (isNegative($this)) {
        if (isNegative(multiplier))
            return multiply(negate($this), negate(multiplier));
        else
            return negate(multiply(negate($this), multiplier));
    }
    else if (isNegative(multiplier))
        return negate(multiply($this, negate(multiplier)));
    // If both longs are small, use float multiplication
    if (lessThan($this, TWO_PWR_24) && lessThan(multiplier, TWO_PWR_24))
        return fromNumber(toNumber($this) * toNumber(multiplier), $this.unsigned);
    // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
    // We can skip products that would overflow.
    var a48 = $this.high >>> 16;
    var a32 = $this.high & 0xFFFF;
    var a16 = $this.low >>> 16;
    var a00 = $this.low & 0xFFFF;
    var b48 = multiplier.high >>> 16;
    var b32 = multiplier.high & 0xFFFF;
    var b16 = multiplier.low >>> 16;
    var b00 = multiplier.low & 0xFFFF;
    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 * b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 * b00;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c16 += a00 * b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 * b00;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a16 * b16;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a00 * b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
    c48 &= 0xFFFF;
    return fromBits((c16 << 16) | c00, (c48 << 16) | c32, $this.unsigned);
}
;
/**
 * Returns the product of this and the specified Long. This is an alias of {@link Long#multiply}.
 * @function
 * @param {!Long|number|string} multiplier Multiplier
 * @returns {!Long} Product
 */
// LongPrototype.mul = LongPrototype.multiply;
/**
 * Returns this Long divided by the specified. The result is signed if this Long is signed or
 *  unsigned if this Long is unsigned.
 * @this {!Long}
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Quotient
 */
function divide($this, divisor) {
    if (!isLong(divisor))
        divisor = fromValue(divisor);
    if (isZero(divisor))
        throw Error('division by zero');
    // use wasm support if present
    if (wasm) {
        // guard against signed division overflow: the largest
        // negative number / -1 would be 1 larger than the largest
        // positive number, due to two's complement.
        if (!$this.unsigned &&
            $this.high === -0x80000000 &&
            divisor.low === -1 && divisor.high === -1) {
            // be consistent with non-wasm code path
            return $this;
        }
        var low = ($this.unsigned ? wasm.div_u : wasm.div_s)($this.low, $this.high, divisor.low, divisor.high);
        return fromBits(low, wasm.get_high(), $this.unsigned);
    }
    if (isZero($this))
        return $this.unsigned ? UZERO : ZERO;
    var approx, rem, res;
    if (!$this.unsigned) {
        // This section is only relevant for signed longs and is derived from the
        // closure library as a whole.
        if (equals($this, MIN_VALUE)) {
            if (equals(divisor, ONE) || equals(divisor, NEG_ONE))
                return MIN_VALUE; // recall that -MIN_VALUE == MIN_VALUE
            else if (equals(divisor, MIN_VALUE))
                return ONE;
            else {
                // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
                var halfThis = shiftRight($this, 1);
                approx = shiftLeft(divide(halfThis, divisor), 1);
                if (equals(approx, ZERO)) {
                    return isNegative(divisor) ? ONE : NEG_ONE;
                }
                else {
                    rem = subtract($this, multiply(divisor, approx));
                    res = add(approx, divide(rem, divisor));
                    return res;
                }
            }
        }
        else if (equals(divisor, MIN_VALUE))
            return $this.unsigned ? UZERO : ZERO;
        if (isNegative($this)) {
            if (isNegative(divisor))
                return divide(negate($this), negate(divisor));
            return negate(divide(negate($this), divisor));
        }
        else if (isNegative(divisor))
            return negate(divide($this, negate(divisor)));
        res = ZERO;
    }
    else {
        // The algorithm below has not been made for unsigned longs. It's therefore
        // required to take special care of the MSB prior to running it.
        if (!divisor.unsigned)
            divisor = toUnsigned(divisor);
        if (greaterThan(divisor, $this))
            return UZERO;
        if (greaterThan(divisor, shiftRightUnsigned($this, 1))) // 15 >>> 1 = 7 ; with divisor = 8 ; true
            return UONE;
        res = UZERO;
    }
    // Repeat the following until the remainder is less than other:  find a
    // floating-point that approximates remainder / other *from below*, add this
    // into the result, and subtract it from the remainder.  It is critical that
    // the approximate value is less than or equal to the real value so that the
    // remainder never becomes negative.
    rem = $this;
    while (greaterThanOrEqual(rem, divisor)) {
        // Approximate the result of division. This may be a little greater or
        // smaller than the actual value.
        approx = Math.max(1, Math.floor(toNumber(rem) / toNumber(divisor)));
        // We will tweak the approximate result by changing it in the 48-th digit or
        // the smallest non-fractional digit, whichever is larger.
        var log2 = Math.ceil(Math.log(approx) / Math.LN2), delta = (log2 <= 48) ? 1 : pow_dbl(2, log2 - 48), 
        // Decrease the approximation until it is smaller than the remainder.  Note
        // that if it is too large, the product overflows and is negative.
        approxRes = fromNumber(approx), approxRem = multiply(approxRes, divisor);
        while (isNegative(approxRem) || greaterThan(approxRem, rem)) {
            approx -= delta;
            approxRes = fromNumber(approx, $this.unsigned);
            approxRem = multiply(approxRes, divisor);
        }
        // We know the answer can't be zero... and actually, zero would cause
        // infinite recursion since we would make no progress.
        if (isZero(approxRes))
            approxRes = ONE;
        res = add(res, approxRes);
        rem = subtract(rem, approxRem);
    }
    return res;
}
;
/**
 * Returns this Long divided by the specified. This is an alias of {@link Long#divide}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Quotient
 */
// LongPrototype.div = LongPrototype.divide;
/**
 * Returns this Long modulo the specified.
 * @this {!Long}
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */
function modulo($this, divisor) {
    if (!isLong(divisor))
        divisor = fromValue(divisor);
    // use wasm support if present
    if (wasm) {
        var low = ($this.unsigned ? wasm.rem_u : wasm.rem_s)($this.low, $this.high, divisor.low, divisor.high);
        return fromBits(low, wasm.get_high(), $this.unsigned);
    }
    return subtract($this, multiply(divide($this, divisor), divisor));
}
;
/**
 * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */
// LongPrototype.mod = LongPrototype.modulo;
/**
 * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */
// LongPrototype.rem = LongPrototype.modulo;
/**
 * Returns the bitwise NOT of this Long.
 * @this {!Long}
 * @returns {!Long}
 */
function not($this) {
    return fromBits(~$this.low, ~$this.high, $this.unsigned);
}
;
/**
 * Returns the bitwise AND of this Long and the specified.
 * @this {!Long}
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */
function and($this, other) {
    if (!isLong(other))
        other = fromValue(other);
    return fromBits($this.low & other.low, $this.high & other.high, $this.unsigned);
}
;
/**
 * Returns the bitwise OR of this Long and the specified.
 * @this {!Long}
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */
function or($this, other) {
    if (!isLong(other))
        other = fromValue(other);
    return fromBits($this.low | other.low, $this.high | other.high, $this.unsigned);
}
;
/**
 * Returns the bitwise XOR of this Long and the given one.
 * @this {!Long}
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */
function xor($this, other) {
    if (!isLong(other))
        other = fromValue(other);
    return fromBits($this.low ^ other.low, $this.high ^ other.high, $this.unsigned);
}
;
/**
 * Returns this Long with bits shifted to the left by the given amount.
 * @this {!Long}
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
function shiftLeft($this, numBits) {
    if (isLong(numBits))
        numBits = toInt(numBits);
    if ((numBits &= 63) === 0)
        return $this;
    else if (numBits < 32)
        return fromBits($this.low << numBits, ($this.high << numBits) | ($this.low >>> (32 - numBits)), $this.unsigned);
    else
        return fromBits(0, $this.low << (numBits - 32), $this.unsigned);
}
;
/**
 * Returns this Long with bits shifted to the left by the given amount. This is an alias of {@link Long#shiftLeft}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
// LongPrototype.shl = LongPrototype.shiftLeft;
/**
 * Returns this Long with bits arithmetically shifted to the right by the given amount.
 * @this {!Long}
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
function shiftRight($this, numBits) {
    if (isLong(numBits))
        numBits = toInt(numBits);
    if ((numBits &= 63) === 0)
        return $this;
    else if (numBits < 32)
        return fromBits(($this.low >>> numBits) | ($this.high << (32 - numBits)), $this.high >> numBits, $this.unsigned);
    else
        return fromBits($this.high >> (numBits - 32), $this.high >= 0 ? 0 : -1, $this.unsigned);
}
;
/**
 * Returns this Long with bits arithmetically shifted to the right by the given amount. This is an alias of {@link Long#shiftRight}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
// LongPrototype.shr = LongPrototype.shiftRight;
/**
 * Returns this Long with bits logically shifted to the right by the given amount.
 * @this {!Long}
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
function shiftRightUnsigned($this, numBits) {
    if (isLong(numBits))
        numBits = toInt(numBits);
    numBits &= 63;
    if (numBits === 0)
        return $this;
    else {
        var high = $this.high;
        if (numBits < 32) {
            var low = $this.low;
            return fromBits((low >>> numBits) | (high << (32 - numBits)), high >>> numBits, $this.unsigned);
        }
        else if (numBits === 32)
            return fromBits(high, 0, $this.unsigned);
        else
            return fromBits(high >>> (numBits - 32), 0, $this.unsigned);
    }
}
;
/**
 * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
// LongPrototype.shru = LongPrototype.shiftRightUnsigned;
/**
 * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
// LongPrototype.shr_u = LongPrototype.shiftRightUnsigned;
/**
 * Returns this Long with bits rotated to the left by the given amount.
 * @this {!Long}
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Rotated Long
 */
const rotateLeft = function rotateLeft(numBits) {
    var b;
    if (isLong(numBits))
        numBits = numBits.toInt();
    if ((numBits &= 63) === 0)
        return this;
    if (numBits === 32)
        return fromBits(this.high, this.low, this.unsigned);
    if (numBits < 32) {
        b = (32 - numBits);
        return fromBits(((this.low << numBits) | (this.high >>> b)), ((this.high << numBits) | (this.low >>> b)), this.unsigned);
    }
    numBits -= 32;
    b = (32 - numBits);
    return fromBits(((this.high << numBits) | (this.low >>> b)), ((this.low << numBits) | (this.high >>> b)), this.unsigned);
};
/**
 * Returns this Long with bits rotated to the left by the given amount. This is an alias of {@link Long#rotateLeft}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Rotated Long
 */
// LongPrototype.rotl = LongPrototype.rotateLeft;
/**
 * Returns this Long with bits rotated to the right by the given amount.
 * @this {!Long}
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Rotated Long
 */
const rotateRight = function rotateRight(numBits) {
    var b;
    if (isLong(numBits))
        numBits = numBits.toInt();
    if ((numBits &= 63) === 0)
        return this;
    if (numBits === 32)
        return fromBits(this.high, this.low, this.unsigned);
    if (numBits < 32) {
        b = (32 - numBits);
        return fromBits(((this.high << b) | (this.low >>> numBits)), ((this.low << b) | (this.high >>> numBits)), this.unsigned);
    }
    numBits -= 32;
    b = (32 - numBits);
    return fromBits(((this.low << b) | (this.high >>> numBits)), ((this.high << b) | (this.low >>> numBits)), this.unsigned);
};
/**
 * Returns this Long with bits rotated to the right by the given amount. This is an alias of {@link Long#rotateRight}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Rotated Long
 */
// LongPrototype.rotr = LongPrototype.rotateRight;
/**
 * Converts this Long to signed.
 * @this {!Long}
 * @returns {!Long} Signed long
 */
function toSigned($this) {
    if (!$this.unsigned)
        return $this;
    return fromBits($this.low, $this.high, false);
}
;
/**
 * Converts this Long to unsigned.
 * @this {!Long}
 * @returns {!Long} Unsigned long
 */
function toUnsigned($this) {
    if ($this.unsigned)
        return $this;
    return fromBits($this.low, $this.high, true);
}
;
/**
 * Converts this Long to its byte representation.
 * @param {boolean=} le Whether little or big endian, defaults to big endian
 * @this {!Long}
 * @returns {!Array.<number>} Byte representation
 */
function toBytes($this, le) {
    return le ? toBytesLE($this) : toBytesBE($this);
}
;
/**
 * Converts this Long to its little endian byte representation.
 * @this {!Long}
 * @returns {!Array.<number>} Little endian byte representation
 */
function toBytesLE($this) {
    var hi = $this.high, lo = $this.low;
    return [
        lo & 0xff,
        lo >>> 8 & 0xff,
        lo >>> 16 & 0xff,
        lo >>> 24,
        hi & 0xff,
        hi >>> 8 & 0xff,
        hi >>> 16 & 0xff,
        hi >>> 24
    ];
}
;
/**
 * Converts this Long to its big endian byte representation.
 * @this {!Long}
 * @returns {!Array.<number>} Big endian byte representation
 */
function toBytesBE($this) {
    var hi = $this.high, lo = $this.low;
    return [
        hi >>> 24,
        hi >>> 16 & 0xff,
        hi >>> 8 & 0xff,
        hi & 0xff,
        lo >>> 24,
        lo >>> 16 & 0xff,
        lo >>> 8 & 0xff,
        lo & 0xff
    ];
}
;
/**
 * Creates a Long from its byte representation.
 * @param {!Array.<number>} bytes Byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @param {boolean=} le Whether little or big endian, defaults to big endian
 * @returns {Long} The corresponding Long value
 */
function fromBytes(bytes, unsigned, le) {
    return le ? fromBytesLE(bytes, unsigned) : fromBytesBE(bytes, unsigned);
}
;
/**
 * Creates a Long from its little endian byte representation.
 * @param {!Array.<number>} bytes Little endian byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {Long} The corresponding Long value
 */
function fromBytesLE(bytes, unsigned) {
    return new Long(bytes[0] |
        bytes[1] << 8 |
        bytes[2] << 16 |
        bytes[3] << 24, bytes[4] |
        bytes[5] << 8 |
        bytes[6] << 16 |
        bytes[7] << 24, unsigned);
}
;
/**
 * Creates a Long from its big endian byte representation.
 * @param {!Array.<number>} bytes Big endian byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {Long} The corresponding Long value
 */
function fromBytesBE(bytes, unsigned) {
    return new Long(bytes[4] << 24 |
        bytes[5] << 16 |
        bytes[6] << 8 |
        bytes[7], bytes[0] << 24 |
        bytes[1] << 16 |
        bytes[2] << 8 |
        bytes[3], unsigned);
}
;
//# sourceMappingURL=long.js.map

/***/ }),

/***/ "./src/app.fs":
/*!********************!*\
  !*** ./src/app.fs ***!
  \********************/
/*! exports provided: gridWidth, gridHeight, run */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridWidth", function() { return gridWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gridHeight", function() { return gridHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run", function() { return run; });
/* harmony import */ var _time_fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time.fs */ "./src/time.fs");
/* harmony import */ var _game_fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.fs */ "./src/game.fs");
/* harmony import */ var _renderer_fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderer.fs */ "./src/renderer.fs");
/* harmony import */ var _fable_fable_library_2_13_0_Util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/Util.js */ "./.fable/fable-library.2.13.0/Util.js");
/* harmony import */ var _score_fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./score.fs */ "./src/score.fs");
/* harmony import */ var _fable_fable_library_2_13_0_String_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/String.js */ "./.fable/fable-library.2.13.0/String.js");
/* harmony import */ var _input_fs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input.fs */ "./src/input.fs");
/* harmony import */ var _gameLoop_fs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gameLoop.fs */ "./src/gameLoop.fs");








const gridWidth = 10;
const gridHeight = 20;
function run(gameContainerDivId, nextBlockDivId) {
  const currentTime = Object(_time_fs__WEBPACK_IMPORTED_MODULE_0__["getCurrent"])();
  const game = Object(_game_fs__WEBPACK_IMPORTED_MODULE_1__["newGame"])(gridWidth, gridHeight, currentTime);
  const gameRenderer = Object(_renderer_fs__WEBPACK_IMPORTED_MODULE_2__["create"])(gameContainerDivId, gridWidth, gridHeight);
  const nextBlockRenderer = Object(_renderer_fs__WEBPACK_IMPORTED_MODULE_2__["create"])(nextBlockDivId, 4, 4);
  const gameContainerElement = document.getElementById(gameContainerDivId);
  const scoreElement = document.getElementById("score");
  const linesCompletedElement = document.getElementById("linesCompleted");
  const levelElement = document.getElementById("level");

  const updateScore = function updateScore(score) {
    scoreElement.innerText = Object(_fable_fable_library_2_13_0_Util_js__WEBPACK_IMPORTED_MODULE_3__["int32ToString"])(score.points);
    linesCompletedElement.innerText = Object(_fable_fable_library_2_13_0_Util_js__WEBPACK_IMPORTED_MODULE_3__["int32ToString"])(score.linesCompleted);
    levelElement.innerHTML = Object(_fable_fable_library_2_13_0_Util_js__WEBPACK_IMPORTED_MODULE_3__["int32ToString"])(score.level);
  };

  const removeChildNodeCallback = function removeChildNodeCallback(node, e) {
    console.log("Removing element");
    node.remove();
  };

  const showScorePopup = function showScorePopup(previousScore, currentScore) {
    if (!Object(_fable_fable_library_2_13_0_Util_js__WEBPACK_IMPORTED_MODULE_3__["equals"])(previousScore, currentScore)) {
      const gainedScore = Object(_score_fs__WEBPACK_IMPORTED_MODULE_4__["difference"])(previousScore, currentScore);
      let linesText;

      if (gainedScore.linesCompleted > 1) {
        const arg10 = gainedScore.linesCompleted | 0;
        const clo1 = Object(_fable_fable_library_2_13_0_String_js__WEBPACK_IMPORTED_MODULE_5__["toText"])(Object(_fable_fable_library_2_13_0_String_js__WEBPACK_IMPORTED_MODULE_5__["printf"])("%i LINES"));
        linesText = clo1(arg10);
      } else {
        const arg10$$1 = gainedScore.linesCompleted | 0;
        const clo1$$1 = Object(_fable_fable_library_2_13_0_String_js__WEBPACK_IMPORTED_MODULE_5__["toText"])(Object(_fable_fable_library_2_13_0_String_js__WEBPACK_IMPORTED_MODULE_5__["printf"])("%i LINE"));
        linesText = clo1$$1(arg10$$1);
      }

      let pointsText;
      const arg10$$2 = gainedScore.points | 0;
      const clo1$$2 = Object(_fable_fable_library_2_13_0_String_js__WEBPACK_IMPORTED_MODULE_5__["toText"])(Object(_fable_fable_library_2_13_0_String_js__WEBPACK_IMPORTED_MODULE_5__["printf"])("%i POINTS"));
      pointsText = clo1$$2(arg10$$2);

      if (previousScore.level !== currentScore.level) {
        const levelUpElement = document.createElement("div");
        levelUpElement.classList.add("level-up-popup");
        levelUpElement.innerHTML = "Level Up!";
        let callback;
        const arg00 = levelUpElement;
        const clo1$$3 = Object(_fable_fable_library_2_13_0_Util_js__WEBPACK_IMPORTED_MODULE_3__["partialApply"])(1, removeChildNodeCallback, [arg00]);

        callback = function (arg10$$3) {
          clo1$$3(arg10$$3);
        };

        levelUpElement.addEventListener("animationend", callback);
        const value = gameContainerElement.appendChild(levelUpElement);
        void value;
      } else {
        void null;
      }
    } else {
      void null;
    }
  };

  const updateUI = function updateUI(previousState, currentState) {
    if (currentState.tag === 1) {
      const score$$1 = currentState.fields[0];
      updateScore(score$$1);
      gameContainerElement.classList.add("is-over");
    } else {
      const gameState = currentState.fields[0];
      Object(_renderer_fs__WEBPACK_IMPORTED_MODULE_2__["redraw"])(gameRenderer, gameState.grid, gameState.block);
      Object(_renderer_fs__WEBPACK_IMPORTED_MODULE_2__["drawNextBlock"])(nextBlockRenderer, gameState.nextShape);
      updateScore(gameState.score);

      if (previousState.tag === 0) {
        const prevGameState = previousState.fields[0];
        showScorePopup(prevGameState.score, gameState.score);
      } else {
        void null;
      }
    }
  };

  Object(_input_fs__WEBPACK_IMPORTED_MODULE_6__["addEventListeners"])();
  Object(_gameLoop_fs__WEBPACK_IMPORTED_MODULE_7__["run"])(game, updateUI);
}
run("gameContainer", "nextBlockContainer");

/***/ }),

/***/ "./src/app.fsproj":
/*!************************!*\
  !*** ./src/app.fsproj ***!
  \************************/
/*! exports provided: gridWidth, gridHeight, run */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.fs */ "./src/app.fs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridWidth", function() { return _app_fs__WEBPACK_IMPORTED_MODULE_0__["gridWidth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gridHeight", function() { return _app_fs__WEBPACK_IMPORTED_MODULE_0__["gridHeight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "run", function() { return _app_fs__WEBPACK_IMPORTED_MODULE_0__["run"]; });



/***/ }),

/***/ "./src/block.fs":
/*!**********************!*\
  !*** ./src/block.fs ***!
  \**********************/
/*! exports provided: Block, Block$reflection, create, moveBy, rotate, getSquareCoords, getFilledCells, getBoundingRect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Block", function() { return Block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Block$reflection", function() { return Block$reflection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveBy", function() { return moveBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSquareCoords", function() { return getSquareCoords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilledCells", function() { return getFilledCells; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBoundingRect", function() { return getBoundingRect; });
/* harmony import */ var _fable_fable_library_2_13_0_Types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/Types.js */ "./.fable/fable-library.2.13.0/Types.js");
/* harmony import */ var _coord_fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coord.fs */ "./src/coord.fs");
/* harmony import */ var _shape_fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shape.fs */ "./src/shape.fs");
/* harmony import */ var _matrix_fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./matrix.fs */ "./src/matrix.fs");
/* harmony import */ var _fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/Reflection.js */ "./.fable/fable-library.2.13.0/Reflection.js");
/* harmony import */ var _fable_fable_library_2_13_0_Seq_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/Seq.js */ "./.fable/fable-library.2.13.0/Seq.js");
/* harmony import */ var _fable_fable_library_2_13_0_Util_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/Util.js */ "./.fable/fable-library.2.13.0/Util.js");
/* harmony import */ var _fable_fable_library_2_13_0_Int32_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/Int32.js */ "./.fable/fable-library.2.13.0/Int32.js");
/* harmony import */ var _boundingRect_fs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./boundingRect.fs */ "./src/boundingRect.fs");









const Block = Object(_fable_fable_library_2_13_0_Types_js__WEBPACK_IMPORTED_MODULE_0__["declare"])(function FBlocks_Block_Block(position, shape) {
  this.position = position;
  this.shape = shape;
}, _fable_fable_library_2_13_0_Types_js__WEBPACK_IMPORTED_MODULE_0__["Record"]);
function Block$reflection() {
  return Object(_fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_4__["record_type"])("FBlocks.Block.Block", [], Block, () => [["position", Object(_coord_fs__WEBPACK_IMPORTED_MODULE_1__["Coord$reflection"])()], ["shape", Object(_matrix_fs__WEBPACK_IMPORTED_MODULE_3__["Matrix$00601$reflection"])(Object(_shape_fs__WEBPACK_IMPORTED_MODULE_2__["ShapeCell$reflection"])())]]);
}
function create(gridSize, shapeName) {
  const shape = Object(_shape_fs__WEBPACK_IMPORTED_MODULE_2__["getShapeMatrix"])(shapeName);
  let maxY;
  let source$$1;
  let source;
  const shape$$1 = shape;
  source = Object(_shape_fs__WEBPACK_IMPORTED_MODULE_2__["filledCellCoords"])(shape$$1);
  source$$1 = Object(_fable_fable_library_2_13_0_Seq_js__WEBPACK_IMPORTED_MODULE_5__["map"])(_coord_fs__WEBPACK_IMPORTED_MODULE_1__["getY"], source);
  maxY = Object(_fable_fable_library_2_13_0_Seq_js__WEBPACK_IMPORTED_MODULE_5__["max"])(source$$1, {
    Compare: _fable_fable_library_2_13_0_Util_js__WEBPACK_IMPORTED_MODULE_6__["comparePrimitives"]
  });
  return new Block(new _coord_fs__WEBPACK_IMPORTED_MODULE_1__["Coord"](~~((gridSize - shape.columnCount) / 2), Object(_fable_fable_library_2_13_0_Int32_js__WEBPACK_IMPORTED_MODULE_7__["op_UnaryNegation_Int32"])(maxY)), shape);
}
function moveBy(dx, dy, block) {
  return new Block(Object(_coord_fs__WEBPACK_IMPORTED_MODULE_1__["add"])(block.position, new _coord_fs__WEBPACK_IMPORTED_MODULE_1__["Coord"](dx, dy)), block.shape);
}
function rotate(block$$1) {
  const shape$$2 = Object(_matrix_fs__WEBPACK_IMPORTED_MODULE_3__["rotateClockwise"])(block$$1.shape);
  return new Block(block$$1.position, shape$$2);
}
function getSquareCoords(block$$2) {
  let source$$2;
  const shape$$3 = block$$2.shape;
  source$$2 = Object(_shape_fs__WEBPACK_IMPORTED_MODULE_2__["filledCellCoords"])(shape$$3);
  return Object(_fable_fable_library_2_13_0_Seq_js__WEBPACK_IMPORTED_MODULE_5__["map"])(function mapping(coord$$1) {
    return Object(_coord_fs__WEBPACK_IMPORTED_MODULE_1__["add"])(coord$$1, block$$2.position);
  }, source$$2);
}
function getFilledCells(block$$3) {
  let source$$4;
  let source$$3;
  const matrix = block$$3.shape;
  source$$3 = Object(_matrix_fs__WEBPACK_IMPORTED_MODULE_3__["flatmapi"])(function mapping$$1(x, y, cell) {
    return [Object(_coord_fs__WEBPACK_IMPORTED_MODULE_1__["create"])(x, y), cell];
  }, matrix);
  source$$4 = Object(_fable_fable_library_2_13_0_Seq_js__WEBPACK_IMPORTED_MODULE_5__["filter"])(function predicate(tupledArg) {
    const coord$$2 = tupledArg[0];
    const cell$$1 = tupledArg[1];
    return Object(_shape_fs__WEBPACK_IMPORTED_MODULE_2__["isCellFilled"])(cell$$1);
  }, source$$3);
  return Object(_fable_fable_library_2_13_0_Seq_js__WEBPACK_IMPORTED_MODULE_5__["map"])(function mapping$$2(tupledArg$$1) {
    const coord$$3 = tupledArg$$1[0];
    const cell$$2 = tupledArg$$1[1];
    return [Object(_coord_fs__WEBPACK_IMPORTED_MODULE_1__["add"])(coord$$3, block$$3.position), cell$$2];
  }, source$$4);
}
function getBoundingRect(block$$4) {
  let coords;
  const block$$5 = block$$4;
  coords = getSquareCoords(block$$5);
  return Object(_boundingRect_fs__WEBPACK_IMPORTED_MODULE_8__["fromCoords"])(coords);
}

/***/ }),

/***/ "./src/boundingRect.fs":
/*!*****************************!*\
  !*** ./src/boundingRect.fs ***!
  \*****************************/
/*! exports provided: BoundingRect, BoundingRect$reflection, addPoint, fromCoords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoundingRect", function() { return BoundingRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoundingRect$reflection", function() { return BoundingRect$reflection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPoint", function() { return addPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromCoords", function() { return fromCoords; });
/* harmony import */ var _fable_fable_library_2_13_0_Types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/Types.js */ "./.fable/fable-library.2.13.0/Types.js");
/* harmony import */ var _fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/Reflection.js */ "./.fable/fable-library.2.13.0/Reflection.js");
/* harmony import */ var _fable_fable_library_2_13_0_Util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/Util.js */ "./.fable/fable-library.2.13.0/Util.js");
/* harmony import */ var _fable_fable_library_2_13_0_Seq_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/Seq.js */ "./.fable/fable-library.2.13.0/Seq.js");




const BoundingRect = Object(_fable_fable_library_2_13_0_Types_js__WEBPACK_IMPORTED_MODULE_0__["declare"])(function FBlocks_BoundingRect_BoundingRect(bottom, left, right, top) {
  this.bottom = bottom | 0;
  this.left = left | 0;
  this.right = right | 0;
  this.top = top | 0;
}, _fable_fable_library_2_13_0_Types_js__WEBPACK_IMPORTED_MODULE_0__["Record"]);
function BoundingRect$reflection() {
  return Object(_fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["record_type"])("FBlocks.BoundingRect.BoundingRect", [], BoundingRect, () => [["bottom", _fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["int32_type"]], ["left", _fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["int32_type"]], ["right", _fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["int32_type"]], ["top", _fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["int32_type"]]]);
}
function addPoint(bounds, coord) {
  return new BoundingRect(Object(_fable_fable_library_2_13_0_Util_js__WEBPACK_IMPORTED_MODULE_2__["max"])(_fable_fable_library_2_13_0_Util_js__WEBPACK_IMPORTED_MODULE_2__["comparePrimitives"], bounds.bottom, coord.y), Object(_fable_fable_library_2_13_0_Util_js__WEBPACK_IMPORTED_MODULE_2__["min"])(_fable_fable_library_2_13_0_Util_js__WEBPACK_IMPORTED_MODULE_2__["comparePrimitives"], bounds.left, coord.x), Object(_fable_fable_library_2_13_0_Util_js__WEBPACK_IMPORTED_MODULE_2__["max"])(_fable_fable_library_2_13_0_Util_js__WEBPACK_IMPORTED_MODULE_2__["comparePrimitives"], bounds.right, coord.x), Object(_fable_fable_library_2_13_0_Util_js__WEBPACK_IMPORTED_MODULE_2__["min"])(_fable_fable_library_2_13_0_Util_js__WEBPACK_IMPORTED_MODULE_2__["comparePrimitives"], bounds.top, coord.y));
}
function fromCoords(coords) {
  const initialBounds = new BoundingRect(-2147483648, 2147483647, -2147483648, -2147483648);
  const source = coords;
  return Object(_fable_fable_library_2_13_0_Seq_js__WEBPACK_IMPORTED_MODULE_3__["fold"])(addPoint, initialBounds, source);
}

/***/ }),

/***/ "./src/coord.fs":
/*!**********************!*\
  !*** ./src/coord.fs ***!
  \**********************/
/*! exports provided: Coord, Coord$reflection, create, add, getX, getY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coord", function() { return Coord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coord$reflection", function() { return Coord$reflection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getX", function() { return getX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getY", function() { return getY; });
/* harmony import */ var _fable_fable_library_2_13_0_Types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/Types.js */ "./.fable/fable-library.2.13.0/Types.js");
/* harmony import */ var _fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/Reflection.js */ "./.fable/fable-library.2.13.0/Reflection.js");


const Coord = Object(_fable_fable_library_2_13_0_Types_js__WEBPACK_IMPORTED_MODULE_0__["declare"])(function FBlocks_Coord_Coord(x, y) {
  this.x = x | 0;
  this.y = y | 0;
}, _fable_fable_library_2_13_0_Types_js__WEBPACK_IMPORTED_MODULE_0__["Record"]);
function Coord$reflection() {
  return Object(_fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["record_type"])("FBlocks.Coord.Coord", [], Coord, () => [["x", _fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["int32_type"]], ["y", _fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["int32_type"]]]);
}
function create(x, y) {
  return new Coord(x, y);
}
function add(a, b) {
  return new Coord(a.x + b.x, a.y + b.y);
}
function getX(coord) {
  return coord.x;
}
function getY(coord$$1) {
  return coord$$1.y;
}

/***/ }),

/***/ "./src/game.fs":
/*!*********************!*\
  !*** ./src/game.fs ***!
  \*********************/
/*! exports provided: minimumFallInterval, fastFallInterval, moveInterval, GameState, GameState$reflection, Game, Game$reflection, updateBlockIfValid, placeBlock, placeCurrentBlock, moveBlockDown, offsetOutOfBoundsBlock, processInput, moveBlock, processMovement, calculateFallInterval, processFalling, checkGameOver, update, newGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minimumFallInterval", function() { return minimumFallInterval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fastFallInterval", function() { return fastFallInterval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveInterval", function() { return moveInterval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameState", function() { return GameState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameState$reflection", function() { return GameState$reflection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game$reflection", function() { return Game$reflection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBlockIfValid", function() { return updateBlockIfValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placeBlock", function() { return placeBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placeCurrentBlock", function() { return placeCurrentBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveBlockDown", function() { return moveBlockDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offsetOutOfBoundsBlock", function() { return offsetOutOfBoundsBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processInput", function() { return processInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveBlock", function() { return moveBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processMovement", function() { return processMovement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateFallInterval", function() { return calculateFallInterval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processFalling", function() { return processFalling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkGameOver", function() { return checkGameOver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newGame", function() { return newGame; });
/* harmony import */ var _fable_fable_library_2_13_0_Types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/Types.js */ "./.fable/fable-library.2.13.0/Types.js");
/* harmony import */ var _block_fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.fs */ "./src/block.fs");
/* harmony import */ var _grid_fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid.fs */ "./src/grid.fs");
/* harmony import */ var _fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/Reflection.js */ "./.fable/fable-library.2.13.0/Reflection.js");
/* harmony import */ var _shape_fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shape.fs */ "./src/shape.fs");
/* harmony import */ var _score_fs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./score.fs */ "./src/score.fs");
/* harmony import */ var _randomShapeGenerator_fs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./randomShapeGenerator.fs */ "./src/randomShapeGenerator.fs");
/* harmony import */ var _fable_fable_library_2_13_0_Int32_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/Int32.js */ "./.fable/fable-library.2.13.0/Int32.js");
/* harmony import */ var _fable_fable_library_2_13_0_Util_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/Util.js */ "./.fable/fable-library.2.13.0/Util.js");
/* harmony import */ var _fable_fable_library_2_13_0_Seq_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/Seq.js */ "./.fable/fable-library.2.13.0/Seq.js");
/* harmony import */ var _input_fs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./input.fs */ "./src/input.fs");
/* harmony import */ var _fable_fable_library_2_13_0_List_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/List.js */ "./.fable/fable-library.2.13.0/List.js");












const minimumFallInterval = 1;
const fastFallInterval = 4;
const moveInterval = 8;
const GameState = Object(_fable_fable_library_2_13_0_Types_js__WEBPACK_IMPORTED_MODULE_0__["declare"])(function FBlocks_Game_GameState(block, grid, isFastFallEnabled, isPaused, lastBlockFallFrame, lastMoveFrame, moveDelta, nextShape, score, shapeGeneratorState) {
  this.block = block;
  this.grid = grid;
  this.isFastFallEnabled = isFastFallEnabled;
  this.isPaused = isPaused;
  this.lastBlockFallFrame = lastBlockFallFrame;
  this.lastMoveFrame = lastMoveFrame;
  this.moveDelta = moveDelta;
  this.nextShape = nextShape;
  this.score = score;
  this.shapeGeneratorState = shapeGeneratorState;
}, _fable_fable_library_2_13_0_Types_js__WEBPACK_IMPORTED_MODULE_0__["Record"]);
function GameState$reflection() {
  return Object(_fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_3__["record_type"])("FBlocks.Game.GameState", [], GameState, () => [["block", Object(_block_fs__WEBPACK_IMPORTED_MODULE_1__["Block$reflection"])()], ["grid", Object(_grid_fs__WEBPACK_IMPORTED_MODULE_2__["Grid$reflection"])()], ["isFastFallEnabled", _fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_3__["bool_type"]], ["isPaused", _fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_3__["bool_type"]], ["lastBlockFallFrame", _fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_3__["int32_type"]], ["lastMoveFrame", _fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_3__["int32_type"]], ["moveDelta", Object(_fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_3__["option_type"])(_fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_3__["int32_type"])], ["nextShape", Object(_shape_fs__WEBPACK_IMPORTED_MODULE_4__["ShapeName$reflection"])()], ["score", Object(_score_fs__WEBPACK_IMPORTED_MODULE_5__["Score$reflection"])()], ["shapeGeneratorState", Object(_randomShapeGenerator_fs__WEBPACK_IMPORTED_MODULE_6__["GeneratorState$reflection"])()]]);
}
const Game = Object(_fable_fable_library_2_13_0_Types_js__WEBPACK_IMPORTED_MODULE_0__["declare"])(function FBlocks_Game_Game(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, _fable_fable_library_2_13_0_Types_js__WEBPACK_IMPORTED_MODULE_0__["Union"]);
function Game$reflection() {
  return Object(_fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_3__["union_type"])("FBlocks.Game.Game", [], Game, () => [["RunningGame", [["Item", GameState$reflection()]]], ["FinishedGame", [["Item", Object(_score_fs__WEBPACK_IMPORTED_MODULE_5__["Score$reflection"])()]]]]);
}
function updateBlockIfValid(gameState, updater) {
  const updatedBlock = updater(gameState.block);

  if (Object(_grid_fs__WEBPACK_IMPORTED_MODULE_2__["isBlockValid"])(gameState.grid, updatedBlock)) {
    return new GameState(updatedBlock, gameState.grid, gameState.isFastFallEnabled, gameState.isPaused, gameState.lastBlockFallFrame, gameState.lastMoveFrame, gameState.moveDelta, gameState.nextShape, gameState.score, gameState.shapeGeneratorState);
  } else {
    return gameState;
  }
}
function placeBlock(currentFrame, block, gameState$$1) {
  const newGrid = Object(_grid_fs__WEBPACK_IMPORTED_MODULE_2__["placeBlock"])(gameState$$1.grid, block);
  const completedRows = Object(_grid_fs__WEBPACK_IMPORTED_MODULE_2__["countCompletedRows"])(newGrid) | 0;
  let patternInput;
  const state = gameState$$1.shapeGeneratorState;
  patternInput = Object(_randomShapeGenerator_fs__WEBPACK_IMPORTED_MODULE_6__["getNext"])(state);
  const nextShape = patternInput[0];
  const generatorState = patternInput[1];
  let block$$1;
  const shapeName = gameState$$1.nextShape;
  block$$1 = Object(_block_fs__WEBPACK_IMPORTED_MODULE_1__["create"])(gameState$$1.grid.width, shapeName);
  const grid = Object(_grid_fs__WEBPACK_IMPORTED_MODULE_2__["removeCompletedRows"])(newGrid);
  const score = Object(_score_fs__WEBPACK_IMPORTED_MODULE_5__["update"])(gameState$$1.score, completedRows);
  return new GameState(block$$1, grid, false, gameState$$1.isPaused, currentFrame, gameState$$1.lastMoveFrame, gameState$$1.moveDelta, nextShape, score, generatorState);
}
function placeCurrentBlock(currentFrame$$1, gameState$$2) {
  return placeBlock(currentFrame$$1, gameState$$2.block, gameState$$2);
}
function moveBlockDown(currentFrame$$2, gameState$$3) {
  const movedBlock = Object(_block_fs__WEBPACK_IMPORTED_MODULE_1__["moveBy"])(0, 1, gameState$$3.block);

  if (Object(_grid_fs__WEBPACK_IMPORTED_MODULE_2__["isBlockValid"])(gameState$$3.grid, movedBlock)) {
    return new GameState(movedBlock, gameState$$3.grid, gameState$$3.isFastFallEnabled, gameState$$3.isPaused, currentFrame$$2, gameState$$3.lastMoveFrame, gameState$$3.moveDelta, gameState$$3.nextShape, gameState$$3.score, gameState$$3.shapeGeneratorState);
  } else {
    return placeCurrentBlock(currentFrame$$2, gameState$$3);
  }
}
function offsetOutOfBoundsBlock(gridWidth, block$$2) {
  let bounds;
  const block$$3 = block$$2;
  bounds = Object(_block_fs__WEBPACK_IMPORTED_MODULE_1__["getBoundingRect"])(block$$3);

  if (bounds.left < 0) {
    const block$$4 = block$$2;
    const dx = Object(_fable_fable_library_2_13_0_Int32_js__WEBPACK_IMPORTED_MODULE_7__["op_UnaryNegation_Int32"])(bounds.left) | 0;
    return Object(_block_fs__WEBPACK_IMPORTED_MODULE_1__["moveBy"])(dx, 0, block$$4);
  } else if (bounds.right >= gridWidth) {
    const block$$5 = block$$2;
    const dx$$1 = gridWidth - bounds.right - 1 | 0;
    return Object(_block_fs__WEBPACK_IMPORTED_MODULE_1__["moveBy"])(dx$$1, 0, block$$5);
  } else {
    return block$$2;
  }
}
function processInput(currentFrame$$3, inputs, gameState$$4) {
  const processAction = function processAction(gameState$$5, action) {
    const rotateBlock = function rotateBlock(gameState$$6) {
      const updater$$1 = function updater$$1($arg$$1) {
        let block$$7;
        const block$$6 = $arg$$1;
        block$$7 = Object(_block_fs__WEBPACK_IMPORTED_MODULE_1__["rotate"])(block$$6);
        return offsetOutOfBoundsBlock(gameState$$6.grid.width, block$$7);
      };

      return updateBlockIfValid(gameState$$6, updater$$1);
    };

    const placeBlock$$1 = function placeBlock$$1(gameState$$7) {
      const droppedBlock = Object(_grid_fs__WEBPACK_IMPORTED_MODULE_2__["moveBlockToBottom"])(gameState$$7.grid, gameState$$7.block);
      return placeBlock(currentFrame$$3, droppedBlock, gameState$$7);
    };

    const setMovement = function setMovement(dx$$2, gameState$$8) {
      const moveDelta = dx$$2;
      return new GameState(gameState$$8.block, gameState$$8.grid, gameState$$8.isFastFallEnabled, gameState$$8.isPaused, gameState$$8.lastBlockFallFrame, gameState$$8.lastMoveFrame, moveDelta, gameState$$8.nextShape, gameState$$8.score, gameState$$8.shapeGeneratorState);
    };

    const stopMovement = function stopMovement(gameState$$9) {
      const moveDelta$$1 = undefined;
      return new GameState(gameState$$9.block, gameState$$9.grid, gameState$$9.isFastFallEnabled, gameState$$9.isPaused, gameState$$9.lastBlockFallFrame, gameState$$9.lastMoveFrame, moveDelta$$1, gameState$$9.nextShape, gameState$$9.score, gameState$$9.shapeGeneratorState);
    };

    const enableFastFall = function enableFastFall(enabled, gameState$$10) {
      return new GameState(gameState$$10.block, gameState$$10.grid, enabled, gameState$$10.isPaused, gameState$$10.lastBlockFallFrame, gameState$$10.lastMoveFrame, gameState$$10.moveDelta, gameState$$10.nextShape, gameState$$10.score, gameState$$10.shapeGeneratorState);
    };

    const togglePause = function togglePause(gameState$$11) {
      const isPaused = !gameState$$11.isPaused;
      return new GameState(gameState$$11.block, gameState$$11.grid, gameState$$11.isFastFallEnabled, isPaused, gameState$$11.lastBlockFallFrame, gameState$$11.lastMoveFrame, gameState$$11.moveDelta, gameState$$11.nextShape, gameState$$11.score, gameState$$11.shapeGeneratorState);
    };

    return (action.tag === 1 ? Object(_fable_fable_library_2_13_0_Util_js__WEBPACK_IMPORTED_MODULE_8__["partialApply"])(1, setMovement, [1]) : action.tag === 2 ? stopMovement : action.tag === 5 ? Object(_fable_fable_library_2_13_0_Util_js__WEBPACK_IMPORTED_MODULE_8__["partialApply"])(1, enableFastFall, [true]) : action.tag === 6 ? Object(_fable_fable_library_2_13_0_Util_js__WEBPACK_IMPORTED_MODULE_8__["partialApply"])(1, enableFastFall, [false]) : action.tag === 3 ? rotateBlock : action.tag === 4 ? placeBlock$$1 : action.tag === 7 ? togglePause : Object(_fable_fable_library_2_13_0_Util_js__WEBPACK_IMPORTED_MODULE_8__["partialApply"])(1, setMovement, [-1]))(gameState$$5);
  };

  let updatedGameState;
  const source = inputs;
  updatedGameState = Object(_fable_fable_library_2_13_0_Seq_js__WEBPACK_IMPORTED_MODULE_9__["fold"])(processAction, gameState$$4, source);
  return updatedGameState;
}
function moveBlock(dx$$3, gameState$$12) {
  const updater$$2 = function updater$$2(block$$8) {
    return Object(_block_fs__WEBPACK_IMPORTED_MODULE_1__["moveBy"])(dx$$3, 0, block$$8);
  };

  return updateBlockIfValid(gameState$$12, updater$$2);
}
function processMovement(currentFrame$$4, gameState$$13) {
  if (gameState$$13.moveDelta == null) {
    return gameState$$13;
  } else {
    const dx$$4 = gameState$$13.moveDelta | 0;
    const cellsToMove = ~~((currentFrame$$4 - gameState$$13.lastMoveFrame) / moveInterval) | 0;

    if (cellsToMove >= 1) {
      const newGameState = moveBlock(dx$$4, gameState$$13);
      return new GameState(newGameState.block, newGameState.grid, newGameState.isFastFallEnabled, newGameState.isPaused, newGameState.lastBlockFallFrame, currentFrame$$4, newGameState.moveDelta, newGameState.nextShape, newGameState.score, newGameState.shapeGeneratorState);
    } else {
      return gameState$$13;
    }
  }
}
function calculateFallInterval(isFastFallEnabled$$1, level) {
  let normalFallInterval;

  if (level <= 9) {
    normalFallInterval = (48 - level * 5) * 1;
  } else {
    const framesPerCell = 5 - ~~((level - 10) / 3) | 0;
    normalFallInterval = Object(_fable_fable_library_2_13_0_Util_js__WEBPACK_IMPORTED_MODULE_8__["max"])(_fable_fable_library_2_13_0_Util_js__WEBPACK_IMPORTED_MODULE_8__["comparePrimitives"], framesPerCell, 1) * 1;
  }

  if (isFastFallEnabled$$1) {
    return Object(_fable_fable_library_2_13_0_Util_js__WEBPACK_IMPORTED_MODULE_8__["min"])(_fable_fable_library_2_13_0_Util_js__WEBPACK_IMPORTED_MODULE_8__["comparePrimitives"], fastFallInterval, normalFallInterval) | 0;
  } else {
    return normalFallInterval | 0;
  }
}
function processFalling(currentFrame$$5, gameState$$14) {
  const frameDelta = currentFrame$$5 - gameState$$14.lastBlockFallFrame | 0;
  const fallInterval = calculateFallInterval(gameState$$14.isFastFallEnabled, gameState$$14.score.level) | 0;
  const cellsToFall = ~~(frameDelta / fallInterval) | 0;

  if (cellsToFall >= 1) {
    return moveBlockDown(currentFrame$$5, gameState$$14);
  } else {
    return gameState$$14;
  }
}
function checkGameOver(gameState$$15) {
  if (Object(_grid_fs__WEBPACK_IMPORTED_MODULE_2__["isBlockValid"])(gameState$$15.grid, gameState$$15.block)) {
    return new Game(0, "RunningGame", gameState$$15);
  } else {
    return new Game(1, "FinishedGame", gameState$$15.score);
  }
}
function update(currentFrame$$6, game) {
  var gameState$$18, inputs$$1;

  const ifNotPaused = function ifNotPaused(action$$1, gameState$$16) {
    if (!gameState$$16.isPaused) {
      return action$$1(gameState$$16);
    } else {
      return gameState$$16;
    }
  };

  if (game.tag === 1) {
    return game;
  } else {
    const gameState$$17 = game.fields[0];
    const gameState$$21 = ifNotPaused(function (gameState$$20) {
      return processFalling(currentFrame$$6, gameState$$20);
    }, ifNotPaused(function (gameState$$19) {
      return processMovement(currentFrame$$6, gameState$$19);
    }, (gameState$$18 = gameState$$17, (inputs$$1 = Object(_input_fs__WEBPACK_IMPORTED_MODULE_10__["getActions"])(), processInput(currentFrame$$6, inputs$$1, gameState$$18)))));
    return checkGameOver(gameState$$21);
  }
}
function newGame(gridWidth$$2, gridHeight, currentTime) {
  var shapeName$$1;
  const grid$$1 = Object(_grid_fs__WEBPACK_IMPORTED_MODULE_2__["create"])(gridWidth$$2, gridHeight);
  let patternInput$$1;
  const state$$1 = Object(_randomShapeGenerator_fs__WEBPACK_IMPORTED_MODULE_6__["initialize"])();
  patternInput$$1 = Object(_randomShapeGenerator_fs__WEBPACK_IMPORTED_MODULE_6__["getList"])(2, state$$1);
  const randomGeneratorState = patternInput$$1[1];
  const initialShapes = patternInput$$1[0];
  const state$$2 = new GameState((shapeName$$1 = Object(_fable_fable_library_2_13_0_List_js__WEBPACK_IMPORTED_MODULE_11__["item"])(0, initialShapes), (Object(_block_fs__WEBPACK_IMPORTED_MODULE_1__["create"])(grid$$1.width, shapeName$$1))), grid$$1, false, false, 0, 0, undefined, Object(_fable_fable_library_2_13_0_List_js__WEBPACK_IMPORTED_MODULE_11__["item"])(1, initialShapes), _score_fs__WEBPACK_IMPORTED_MODULE_5__["initial"], randomGeneratorState);
  return new Game(0, "RunningGame", state$$2);
}

/***/ }),

/***/ "./src/gameLoop.fs":
/*!*************************!*\
  !*** ./src/gameLoop.fs ***!
  \*************************/
/*! exports provided: framesPerSecond, msPerFrame, frameDuration, onNextFrame, updateFrame, mainLoop, run */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "framesPerSecond", function() { return framesPerSecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "msPerFrame", function() { return msPerFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frameDuration", function() { return frameDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onNextFrame", function() { return onNextFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateFrame", function() { return updateFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainLoop", function() { return mainLoop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run", function() { return run; });
/* harmony import */ var _unitsOfMeasure_fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unitsOfMeasure.fs */ "./src/unitsOfMeasure.fs");
/* harmony import */ var _time_fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./time.fs */ "./src/time.fs");
/* harmony import */ var _game_fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.fs */ "./src/game.fs");
/* harmony import */ var _fable_fable_library_2_13_0_Util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/Util.js */ "./.fable/fable-library.2.13.0/Util.js");




const framesPerSecond = 60;
const msPerFrame = (() => {
  const seconds = 1 / framesPerSecond;
  return Object(_unitsOfMeasure_fs__WEBPACK_IMPORTED_MODULE_0__["secondsToMilliseconds"])(seconds);
})();
const frameDuration = Object(_time_fs__WEBPACK_IMPORTED_MODULE_1__["fromMilliseconds"])(msPerFrame);
function onNextFrame(callback) {
  const value = window.requestAnimationFrame(callback);
  void value;
}
function updateFrame($state$$2, $lastFrameNumber$$3, $currentTime$$4, $lastFrameTime$$5) {
  updateFrame: while (true) {
    const state = $state$$2,
          lastFrameNumber = $lastFrameNumber$$3,
          currentTime = $currentTime$$4,
          lastFrameTime = $lastFrameTime$$5;
    const frameNumber = lastFrameNumber + 1 | 0;
    const frameTime = Object(_time_fs__WEBPACK_IMPORTED_MODULE_1__["add"])(lastFrameTime, frameDuration);

    if (frameTime.CompareTo(currentTime) < 0) {
      let updatedState;
      const game = state;
      updatedState = Object(_game_fs__WEBPACK_IMPORTED_MODULE_2__["update"])(frameNumber, game);
      $state$$2 = updatedState;
      $lastFrameNumber$$3 = frameNumber;
      $currentTime$$4 = currentTime;
      $lastFrameTime$$5 = frameTime;
      continue updateFrame;
    } else {
      return [state, lastFrameNumber, lastFrameTime];
    }

    break;
  }
}
function mainLoop(game$$1, updateUI, lastFrameNumber$$1, lastFrameTime$$1, lastGameTime, lastRealTime) {
  const realTime = Object(_time_fs__WEBPACK_IMPORTED_MODULE_1__["getCurrent"])();
  const realTimeDelta = Object(_time_fs__WEBPACK_IMPORTED_MODULE_1__["difference"])(realTime, lastRealTime);
  const gameTime = Object(_time_fs__WEBPACK_IMPORTED_MODULE_1__["add"])(lastGameTime, realTimeDelta);
  const patternInput = updateFrame(game$$1, lastFrameNumber$$1, gameTime, lastFrameTime$$1);
  const updatedLastFrameTime = patternInput[2];
  const updatedGame = patternInput[0];
  const frameNumber$$1 = patternInput[1] | 0;

  if (!Object(_fable_fable_library_2_13_0_Util_js__WEBPACK_IMPORTED_MODULE_3__["equals"])(updatedGame, game$$1)) {
    updateUI(game$$1, updatedGame);
  } else {
    void null;
  }

  if (updatedGame.tag === 0) {
    onNextFrame(function (_arg1) {
      mainLoop(updatedGame, updateUI, frameNumber$$1, updatedLastFrameTime, gameTime, realTime);
    });
  } else {
    void null;
  }
}
function run(game$$2, updateUI$$1) {
  const realTime$$1 = Object(_time_fs__WEBPACK_IMPORTED_MODULE_1__["getCurrent"])();
  const gameTime$$1 = _time_fs__WEBPACK_IMPORTED_MODULE_1__["zero"];
  const frameTime$$1 = _time_fs__WEBPACK_IMPORTED_MODULE_1__["zero"];
  const frameNumber$$2 = 0;
  onNextFrame(function (_arg1$$1) {
    mainLoop(game$$2, updateUI$$1, frameNumber$$2, frameTime$$1, gameTime$$1, realTime$$1);
  });
}

/***/ }),

/***/ "./src/grid.fs":
/*!*********************!*\
  !*** ./src/grid.fs ***!
  \*********************/
/*! exports provided: Grid, Grid$reflection, create, getFilledCellCoords, isBlockValid, countCompletedRows, removeCompletedRows, placeBlock, moveBlockToBottom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid$reflection", function() { return Grid$reflection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilledCellCoords", function() { return getFilledCellCoords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBlockValid", function() { return isBlockValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countCompletedRows", function() { return countCompletedRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCompletedRows", function() { return removeCompletedRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placeBlock", function() { return placeBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveBlockToBottom", function() { return moveBlockToBottom; });
/* harmony import */ var _fable_fable_library_2_13_0_Types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/Types.js */ "./.fable/fable-library.2.13.0/Types.js");
/* harmony import */ var _shape_fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shape.fs */ "./src/shape.fs");
/* harmony import */ var _matrix_fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./matrix.fs */ "./src/matrix.fs");
/* harmony import */ var _fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/Reflection.js */ "./.fable/fable-library.2.13.0/Reflection.js");
/* harmony import */ var _fable_fable_library_2_13_0_Util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/Util.js */ "./.fable/fable-library.2.13.0/Util.js");
/* harmony import */ var _fable_fable_library_2_13_0_Seq_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/Seq.js */ "./.fable/fable-library.2.13.0/Seq.js");
/* harmony import */ var _block_fs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./block.fs */ "./src/block.fs");
/* harmony import */ var _coord_fs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./coord.fs */ "./src/coord.fs");
/* harmony import */ var _fable_fable_library_2_13_0_List_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/List.js */ "./.fable/fable-library.2.13.0/List.js");
/* harmony import */ var _fable_fable_library_2_13_0_Option_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/Option.js */ "./.fable/fable-library.2.13.0/Option.js");










const Grid = Object(_fable_fable_library_2_13_0_Types_js__WEBPACK_IMPORTED_MODULE_0__["declare"])(function FBlocks_Grid_Grid(cells, height, width) {
  this.cells = cells;
  this.height = height | 0;
  this.width = width | 0;
}, _fable_fable_library_2_13_0_Types_js__WEBPACK_IMPORTED_MODULE_0__["Record"]);
function Grid$reflection() {
  return Object(_fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_3__["record_type"])("FBlocks.Grid.Grid", [], Grid, () => [["cells", Object(_matrix_fs__WEBPACK_IMPORTED_MODULE_2__["Matrix$00601$reflection"])(Object(_shape_fs__WEBPACK_IMPORTED_MODULE_1__["ShapeCell$reflection"])())], ["height", _fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_3__["int32_type"]], ["width", _fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_3__["int32_type"]]]);
}
function create(width, height) {
  return new Grid(Object(_matrix_fs__WEBPACK_IMPORTED_MODULE_2__["create"])(width, height, new _shape_fs__WEBPACK_IMPORTED_MODULE_1__["ShapeCell"](0, "EmptyCell")), height, width);
}
function getFilledCellCoords(grid) {
  const matrix = grid.cells;
  return Object(_matrix_fs__WEBPACK_IMPORTED_MODULE_2__["coordsWhere"])(_shape_fs__WEBPACK_IMPORTED_MODULE_1__["isCellFilled"], matrix);
}
function isBlockValid(grid$$1, block) {
  const isCellInBounds = function isCellInBounds(coord) {
    if (coord.x >= 0 ? coord.x < grid$$1.width : false) {
      return coord.y < grid$$1.height;
    } else {
      return false;
    }
  };

  const isCellOverlappingFilledGrid = function isCellOverlappingFilledGrid(cellCoord) {
    let source;
    const grid$$2 = grid$$1;
    source = getFilledCellCoords(grid$$2);
    return Object(_fable_fable_library_2_13_0_Seq_js__WEBPACK_IMPORTED_MODULE_5__["exists"])(function predicate(gridCoord) {
      return Object(_fable_fable_library_2_13_0_Util_js__WEBPACK_IMPORTED_MODULE_4__["equals"])(gridCoord, cellCoord);
    }, source);
  };

  const isCellValid = function isCellValid(cell$$1) {
    if (isCellInBounds(cell$$1)) {
      return !isCellOverlappingFilledGrid(cell$$1);
    } else {
      return false;
    }
  };

  let source$$1;
  const block$$1 = block;
  source$$1 = Object(_block_fs__WEBPACK_IMPORTED_MODULE_6__["getSquareCoords"])(block$$1);
  return Object(_fable_fable_library_2_13_0_Seq_js__WEBPACK_IMPORTED_MODULE_5__["forAll"])(isCellValid, source$$1);
}
function countCompletedRows(grid$$3) {
  const isRowCompleted = function isRowCompleted(row) {
    const source$$2 = row;
    return Object(_fable_fable_library_2_13_0_Seq_js__WEBPACK_IMPORTED_MODULE_5__["forAll"])(_shape_fs__WEBPACK_IMPORTED_MODULE_1__["isCellFilled"], source$$2);
  };

  let source$$4;
  let source$$3;
  const matrix$$1 = grid$$3.cells;
  source$$3 = Object(_matrix_fs__WEBPACK_IMPORTED_MODULE_2__["rows"])(matrix$$1);
  source$$4 = Object(_fable_fable_library_2_13_0_Seq_js__WEBPACK_IMPORTED_MODULE_5__["filter"])(function predicate$$1(arg00) {
    return isRowCompleted(arg00);
  }, source$$3);
  return Object(_fable_fable_library_2_13_0_Seq_js__WEBPACK_IMPORTED_MODULE_5__["length"])(source$$4) | 0;
}
function removeCompletedRows(grid$$4) {
  const matrix$$2 = grid$$4.cells;
  let completeRowIndices;

  const isRowComplete = function isRowComplete(rowIndex) {
    let source$$5;
    const matrix$$3 = matrix$$2;
    source$$5 = Object(_matrix_fs__WEBPACK_IMPORTED_MODULE_2__["getRow"])(rowIndex, matrix$$3);
    return Object(_fable_fable_library_2_13_0_Seq_js__WEBPACK_IMPORTED_MODULE_5__["forAll"])(_shape_fs__WEBPACK_IMPORTED_MODULE_1__["isCellFilled"], source$$5);
  };

  const source$$6 = Object(_fable_fable_library_2_13_0_Seq_js__WEBPACK_IMPORTED_MODULE_5__["rangeNumber"])(0, 1, matrix$$2.rowCount - 1);
  completeRowIndices = Object(_fable_fable_library_2_13_0_Seq_js__WEBPACK_IMPORTED_MODULE_5__["filter"])(isRowComplete, source$$6);

  const removeRow = function removeRow(matrix$$4, rowIndex$$1) {
    const mapCell = function mapCell(x, y, value) {
      if (y === 0) {
        return new _shape_fs__WEBPACK_IMPORTED_MODULE_1__["ShapeCell"](0, "EmptyCell");
      } else if (y <= rowIndex$$1) {
        return Object(_matrix_fs__WEBPACK_IMPORTED_MODULE_2__["getAt"])(x, y - 1, matrix$$4);
      } else {
        return value;
      }
    };

    return Object(_matrix_fs__WEBPACK_IMPORTED_MODULE_2__["mapi"])(mapCell, matrix$$4);
  };

  let updatedCells;
  const source$$7 = completeRowIndices;
  updatedCells = Object(_fable_fable_library_2_13_0_Seq_js__WEBPACK_IMPORTED_MODULE_5__["fold"])(removeRow, matrix$$2, source$$7);
  return new Grid(updatedCells, grid$$4.height, grid$$4.width);
}
function placeBlock(grid$$5, block$$2) {
  const filledCells = Object(_block_fs__WEBPACK_IMPORTED_MODULE_6__["getFilledCells"])(block$$2);
  let gridCells;
  const matrix$$5 = grid$$5.cells;
  gridCells = Object(_matrix_fs__WEBPACK_IMPORTED_MODULE_2__["mapi"])(function mapping(x$$1, y$$1, value$$1) {
    const matchingCell = Object(_fable_fable_library_2_13_0_Seq_js__WEBPACK_IMPORTED_MODULE_5__["tryFind"])(function (tupledArg) {
      const coord$$1 = tupledArg[0];
      return Object(_fable_fable_library_2_13_0_Util_js__WEBPACK_IMPORTED_MODULE_4__["equals"])(coord$$1, Object(_coord_fs__WEBPACK_IMPORTED_MODULE_7__["create"])(x$$1, y$$1));
    }, filledCells);

    if (matchingCell != null) {
      const cell$$4 = matchingCell[1];
      return cell$$4;
    } else {
      return value$$1;
    }
  }, matrix$$5);
  return new Grid(gridCells, grid$$5.height, grid$$5.width);
}
function moveBlockToBottom(grid$$6, block$$3) {
  const maxMoveY = grid$$6.height - 1 - block$$3.position.y | 0;
  let option;
  let source$$10;
  let source$$9;
  const source$$8 = Object(_fable_fable_library_2_13_0_List_js__WEBPACK_IMPORTED_MODULE_8__["ofSeq"])(Object(_fable_fable_library_2_13_0_Seq_js__WEBPACK_IMPORTED_MODULE_5__["rangeNumber"])(0, 1, maxMoveY));
  source$$9 = Object(_fable_fable_library_2_13_0_Seq_js__WEBPACK_IMPORTED_MODULE_5__["map"])(function mapping$$1(dy) {
    return Object(_block_fs__WEBPACK_IMPORTED_MODULE_6__["moveBy"])(0, dy, block$$3);
  }, source$$8);
  source$$10 = Object(_fable_fable_library_2_13_0_Seq_js__WEBPACK_IMPORTED_MODULE_5__["takeWhile"])(function predicate$$2(block$$4) {
    return isBlockValid(grid$$6, block$$4);
  }, source$$9);
  option = Object(_fable_fable_library_2_13_0_Seq_js__WEBPACK_IMPORTED_MODULE_5__["tryLast"])(source$$10);
  return Object(_fable_fable_library_2_13_0_Option_js__WEBPACK_IMPORTED_MODULE_9__["defaultArg"])(option, block$$3);
}

/***/ }),

/***/ "./src/input.fs":
/*!**********************!*\
  !*** ./src/input.fs ***!
  \**********************/
/*! exports provided: InputAction, InputAction$reflection, inputActionQueue, getActions, handleInput, onKeyDown, onKeyUp, addEventListeners */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputAction", function() { return InputAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputAction$reflection", function() { return InputAction$reflection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputActionQueue", function() { return inputActionQueue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActions", function() { return getActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleInput", function() { return handleInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onKeyDown", function() { return onKeyDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onKeyUp", function() { return onKeyUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEventListeners", function() { return addEventListeners; });
/* harmony import */ var _fable_fable_library_2_13_0_Types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/Types.js */ "./.fable/fable-library.2.13.0/Types.js");
/* harmony import */ var _fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/Reflection.js */ "./.fable/fable-library.2.13.0/Reflection.js");
/* harmony import */ var _fable_fable_library_2_13_0_Util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/Util.js */ "./.fable/fable-library.2.13.0/Util.js");
/* harmony import */ var _fable_fable_library_2_13_0_List_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/List.js */ "./.fable/fable-library.2.13.0/List.js");




const InputAction = Object(_fable_fable_library_2_13_0_Types_js__WEBPACK_IMPORTED_MODULE_0__["declare"])(function FBlocks_Input_InputAction(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, _fable_fable_library_2_13_0_Types_js__WEBPACK_IMPORTED_MODULE_0__["Union"]);
function InputAction$reflection() {
  return Object(_fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["union_type"])("FBlocks.Input.InputAction", [], InputAction, () => ["MoveLeft", "MoveRight", "StopMovement", "Rotate", "PlaceBlock", "IncreaseFallSpeed", "DecreaseFallSpeed", "TogglePause"]);
}
const inputActionQueue = Object(_fable_fable_library_2_13_0_Util_js__WEBPACK_IMPORTED_MODULE_2__["createAtom"])(new _fable_fable_library_2_13_0_Types_js__WEBPACK_IMPORTED_MODULE_0__["List"]());
function getActions() {
  const inputs = Object(_fable_fable_library_2_13_0_List_js__WEBPACK_IMPORTED_MODULE_3__["reverse"])(inputActionQueue());
  inputActionQueue(new _fable_fable_library_2_13_0_Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](), true);
  return inputs;
}
function handleInput(mapping, event) {
  if (!event.repeat) {
    let maybeAction;
    const matchValue = Object(_fable_fable_library_2_13_0_Util_js__WEBPACK_IMPORTED_MODULE_2__["tryGetValue"])(mapping, event.key, null);

    if (matchValue[0]) {
      const action = matchValue[1];
      maybeAction = action;
    } else {
      maybeAction = undefined;
    }

    if (maybeAction == null) {
      void null;
    } else {
      const action$$1 = maybeAction;
      inputActionQueue(new _fable_fable_library_2_13_0_Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](action$$1, inputActionQueue()), true);
    }
  } else {
    void null;
  }
}
const onKeyDown = (() => {
  const mapping$$1 = new Map([["ArrowLeft", new InputAction(0, "MoveLeft")], ["ArrowRight", new InputAction(1, "MoveRight")], ["ArrowDown", new InputAction(5, "IncreaseFallSpeed")], ["ArrowUp", new InputAction(3, "Rotate")], [" ", new InputAction(4, "PlaceBlock")]]);
  return function (event$$1) {
    handleInput(mapping$$1, event$$1);
  };
})();
const onKeyUp = (() => {
  const mapping$$2 = new Map([["ArrowLeft", new InputAction(2, "StopMovement")], ["ArrowRight", new InputAction(2, "StopMovement")], ["ArrowDown", new InputAction(6, "DecreaseFallSpeed")], ["p", new InputAction(7, "TogglePause")]]);
  return function (event$$2) {
    handleInput(mapping$$2, event$$2);
  };
})();
function addEventListeners() {
  window.addEventListener("keydown", onKeyDown);
  window.addEventListener("keyup", onKeyUp);
}

/***/ }),

/***/ "./src/matrix.fs":
/*!***********************!*\
  !*** ./src/matrix.fs ***!
  \***********************/
/*! exports provided: Matrix$00601, Matrix$00601$reflection, create, fromArray, getAt, getRow, rows, exists, iter, iteri, flatmapi, map, mapi, coordsWithValue, coordsWhere, rotateClockwise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Matrix$00601", function() { return Matrix$00601; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Matrix$00601$reflection", function() { return Matrix$00601$reflection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromArray", function() { return fromArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAt", function() { return getAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRow", function() { return getRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rows", function() { return rows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exists", function() { return exists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iter", function() { return iter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iteri", function() { return iteri; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatmapi", function() { return flatmapi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapi", function() { return mapi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coordsWithValue", function() { return coordsWithValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coordsWhere", function() { return coordsWhere; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateClockwise", function() { return rotateClockwise; });
/* harmony import */ var _fable_fable_library_2_13_0_Types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/Types.js */ "./.fable/fable-library.2.13.0/Types.js");
/* harmony import */ var _fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/Reflection.js */ "./.fable/fable-library.2.13.0/Reflection.js");
/* harmony import */ var _fable_fable_library_2_13_0_Array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/Array.js */ "./.fable/fable-library.2.13.0/Array.js");
/* harmony import */ var _fable_fable_library_2_13_0_Seq_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/Seq.js */ "./.fable/fable-library.2.13.0/Seq.js");
/* harmony import */ var _fable_fable_library_2_13_0_Util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/Util.js */ "./.fable/fable-library.2.13.0/Util.js");
/* harmony import */ var _coord_fs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./coord.fs */ "./src/coord.fs");






const Matrix$00601 = Object(_fable_fable_library_2_13_0_Types_js__WEBPACK_IMPORTED_MODULE_0__["declare"])(function FBlocks_Matrix_Matrix(cells, columnCount, rowCount) {
  this.cells = cells;
  this.columnCount = columnCount | 0;
  this.rowCount = rowCount | 0;
}, _fable_fable_library_2_13_0_Types_js__WEBPACK_IMPORTED_MODULE_0__["Record"]);
function Matrix$00601$reflection($gen$$1) {
  return Object(_fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["record_type"])("FBlocks.Matrix.Matrix`1", [$gen$$1], Matrix$00601, () => [["cells", Object(_fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["array_type"])($gen$$1)], ["columnCount", _fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["int32_type"]], ["rowCount", _fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["int32_type"]]]);
}
function create(columnCount, rowCount, value) {
  return new Matrix$00601(Object(_fable_fable_library_2_13_0_Array_js__WEBPACK_IMPORTED_MODULE_2__["replicate"])(columnCount * rowCount, value, Array), columnCount, rowCount);
}
function fromArray(input) {
  var arrays;

  if (input.length === 0) {
    throw new Error("Input array can't have zero length\\nParameter name: input");
  } else {
    void null;
  }

  const rowCount$$1 = input.length | 0;
  const columnCount$$1 = input[0].length | 0;
  let areSubarraysSameLength;
  const source = input;
  areSubarraysSameLength = Object(_fable_fable_library_2_13_0_Seq_js__WEBPACK_IMPORTED_MODULE_3__["forAll"])(function predicate(subarray) {
    return subarray.length === columnCount$$1;
  }, source);

  if (!areSubarraysSameLength) {
    throw new Error("All subarrays in matrix must have same length\\nParameter name: input");
  } else {
    void null;
  }

  return new Matrix$00601((arrays = input, (Object(_fable_fable_library_2_13_0_Array_js__WEBPACK_IMPORTED_MODULE_2__["concat"])(arrays, Array))), columnCount$$1, rowCount$$1);
}
function getAt(x, y, matrix) {
  return matrix.cells[x + y * matrix.columnCount];
}
function getRow(y$$1, matrix$$1) {
  return matrix$$1.cells.slice(y$$1 * matrix$$1.columnCount, matrix$$1.columnCount + y$$1 * matrix$$1.columnCount - 1 + 1);
}
function rows(matrix$$2) {
  const source$$1 = Object(_fable_fable_library_2_13_0_Seq_js__WEBPACK_IMPORTED_MODULE_3__["rangeNumber"])(0, 1, matrix$$2.rowCount - 1);
  return Object(_fable_fable_library_2_13_0_Seq_js__WEBPACK_IMPORTED_MODULE_3__["map"])(function mapping(y$$2) {
    return getRow(y$$2, matrix$$2);
  }, source$$1);
}
function exists(predicate$$1, matrix$$3) {
  return matrix$$3.cells.some(predicate$$1);
}
function iter(action, matrix$$4) {
  matrix$$4.cells.forEach(action);
}
function iteri(action$$1, matrix$$5) {
  const action$0027 = function action$0027(i, x$$1) {
    action$$1(i % matrix$$5.columnCount, ~~(i / matrix$$5.columnCount), x$$1);
  };

  Object(_fable_fable_library_2_13_0_Array_js__WEBPACK_IMPORTED_MODULE_2__["iterateIndexed"])(action$0027, matrix$$5.cells);
}
function flatmapi(mapping$$1, matrix$$6) {
  const mapping$0027 = function mapping$0027(i$$1, x$$2) {
    return mapping$$1(i$$1 % matrix$$6.columnCount, ~~(i$$1 / matrix$$6.columnCount), x$$2);
  };

  return Object(_fable_fable_library_2_13_0_Array_js__WEBPACK_IMPORTED_MODULE_2__["mapIndexed"])(mapping$0027, matrix$$6.cells, Array);
}
function map(mapping$$2, matrix$$7) {
  var array;
  return new Matrix$00601((array = matrix$$7.cells, (Object(_fable_fable_library_2_13_0_Array_js__WEBPACK_IMPORTED_MODULE_2__["map"])(mapping$$2, array, Array))), matrix$$7.columnCount, matrix$$7.rowCount);
}
function mapi(mapping$$3, matrix$$8) {
  var array$$1;

  const mapping$0027$$1 = function mapping$0027$$1(i$$2, x$$3) {
    return mapping$$3(i$$2 % matrix$$8.columnCount, ~~(i$$2 / matrix$$8.columnCount), x$$3);
  };

  return new Matrix$00601((array$$1 = matrix$$8.cells, (Object(_fable_fable_library_2_13_0_Array_js__WEBPACK_IMPORTED_MODULE_2__["mapIndexed"])(mapping$0027$$1, array$$1, Array))), matrix$$8.columnCount, matrix$$8.rowCount);
}
function coordsWithValue(value$$1, matrix$$9) {
  let source$$3;
  let source$$2;
  const matrix$$10 = matrix$$9;
  source$$2 = flatmapi(function mapping$$4(x$$4, y$$3, v) {
    return [x$$4, y$$3, v];
  }, matrix$$10);
  source$$3 = Object(_fable_fable_library_2_13_0_Seq_js__WEBPACK_IMPORTED_MODULE_3__["filter"])(function predicate$$2(tupledArg) {
    const v$$1 = tupledArg[2];
    return Object(_fable_fable_library_2_13_0_Util_js__WEBPACK_IMPORTED_MODULE_4__["equals"])(v$$1, value$$1);
  }, source$$2);
  return Object(_fable_fable_library_2_13_0_Seq_js__WEBPACK_IMPORTED_MODULE_3__["map"])(function mapping$$5(tupledArg$$1) {
    const x$$5 = tupledArg$$1[0] | 0;
    const y$$4 = tupledArg$$1[1] | 0;
    return Object(_coord_fs__WEBPACK_IMPORTED_MODULE_5__["create"])(x$$5, y$$4);
  }, source$$3);
}
function coordsWhere(predicate$$3, matrix$$11) {
  let source$$5;
  let source$$4;
  const matrix$$12 = matrix$$11;
  source$$4 = flatmapi(function mapping$$6(x$$6, y$$5, v$$2) {
    return [x$$6, y$$5, v$$2];
  }, matrix$$12);
  source$$5 = Object(_fable_fable_library_2_13_0_Seq_js__WEBPACK_IMPORTED_MODULE_3__["filter"])(function predicate$$4(tupledArg$$2) {
    const v$$3 = tupledArg$$2[2];
    return predicate$$3(v$$3);
  }, source$$4);
  return Object(_fable_fable_library_2_13_0_Seq_js__WEBPACK_IMPORTED_MODULE_3__["map"])(function mapping$$7(tupledArg$$3) {
    const x$$7 = tupledArg$$3[0] | 0;
    const y$$6 = tupledArg$$3[1] | 0;
    return Object(_coord_fs__WEBPACK_IMPORTED_MODULE_5__["create"])(x$$7, y$$6);
  }, source$$5);
}
function rotateClockwise(matrix$$13) {
  const rotateCell = function rotateCell(x$$8, y$$7, _arg1$$2) {
    return getAt(y$$7, matrix$$13.rowCount - 1 - x$$8, matrix$$13);
  };

  const matrix$$14 = create(matrix$$13.rowCount, matrix$$13.columnCount, getAt(0, 0, matrix$$13));
  return mapi(rotateCell, matrix$$14);
}

/***/ }),

/***/ "./src/randomShapeGenerator.fs":
/*!*************************************!*\
  !*** ./src/randomShapeGenerator.fs ***!
  \*************************************/
/*! exports provided: GeneratorState, GeneratorState$reflection, random, allShapes, shuffleList, getShuffledShapes, getNext, getList, initialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneratorState", function() { return GeneratorState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneratorState$reflection", function() { return GeneratorState$reflection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allShapes", function() { return allShapes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffleList", function() { return shuffleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShuffledShapes", function() { return getShuffledShapes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNext", function() { return getNext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getList", function() { return getList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
/* harmony import */ var _fable_fable_library_2_13_0_Types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/Types.js */ "./.fable/fable-library.2.13.0/Types.js");
/* harmony import */ var _shape_fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shape.fs */ "./src/shape.fs");
/* harmony import */ var _fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/Reflection.js */ "./.fable/fable-library.2.13.0/Reflection.js");
/* harmony import */ var _fable_fable_library_2_13_0_Array_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/Array.js */ "./.fable/fable-library.2.13.0/Array.js");
/* harmony import */ var _fable_fable_library_2_13_0_Util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/Util.js */ "./.fable/fable-library.2.13.0/Util.js");
/* harmony import */ var _fable_fable_library_2_13_0_List_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/List.js */ "./.fable/fable-library.2.13.0/List.js");
/* harmony import */ var _fable_fable_library_2_13_0_Seq_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/Seq.js */ "./.fable/fable-library.2.13.0/Seq.js");







const GeneratorState = Object(_fable_fable_library_2_13_0_Types_js__WEBPACK_IMPORTED_MODULE_0__["declare"])(function FBlocks_RandomShapeGenerator_GeneratorState(nextShapes) {
  this.nextShapes = nextShapes;
}, _fable_fable_library_2_13_0_Types_js__WEBPACK_IMPORTED_MODULE_0__["Record"]);
function GeneratorState$reflection() {
  return Object(_fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_2__["record_type"])("FBlocks.RandomShapeGenerator.GeneratorState", [], GeneratorState, () => [["nextShapes", Object(_fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_2__["list_type"])(Object(_shape_fs__WEBPACK_IMPORTED_MODULE_1__["ShapeName$reflection"])())]]);
}
const random = {};
const allShapes = [new _shape_fs__WEBPACK_IMPORTED_MODULE_1__["ShapeName"](0, "D"), new _shape_fs__WEBPACK_IMPORTED_MODULE_1__["ShapeName"](1, "I"), new _shape_fs__WEBPACK_IMPORTED_MODULE_1__["ShapeName"](2, "J"), new _shape_fs__WEBPACK_IMPORTED_MODULE_1__["ShapeName"](3, "L"), new _shape_fs__WEBPACK_IMPORTED_MODULE_1__["ShapeName"](4, "O"), new _shape_fs__WEBPACK_IMPORTED_MODULE_1__["ShapeName"](5, "S"), new _shape_fs__WEBPACK_IMPORTED_MODULE_1__["ShapeName"](6, "Z")];
function shuffleList(array) {
  const arrayCopy = Object(_fable_fable_library_2_13_0_Array_js__WEBPACK_IMPORTED_MODULE_3__["copy"])(array, Array);

  for (let i = arrayCopy.length - 1; i >= 0; i--) {
    const j = Object(_fable_fable_library_2_13_0_Util_js__WEBPACK_IMPORTED_MODULE_4__["randomNext"])(0, i + 1) | 0;
    const temp = arrayCopy[i];
    arrayCopy[i] = arrayCopy[j];
    arrayCopy[j] = temp;
  }

  const array$$1 = arrayCopy;
  return Object(_fable_fable_library_2_13_0_Array_js__WEBPACK_IMPORTED_MODULE_3__["toList"])(array$$1);
}
function getShuffledShapes() {
  const array$$2 = allShapes;
  return shuffleList(array$$2);
}
function getNext(state) {
  if (state.nextShapes.tail != null) {
    if (state.nextShapes.tail.tail == null) {
      const next = state.nextShapes.head;
      return [next, new GeneratorState(getShuffledShapes())];
    } else {
      const next$$1 = state.nextShapes.head;
      const remaining = state.nextShapes.tail;
      return [next$$1, new GeneratorState(remaining)];
    }
  } else {
    throw new Error("Unexpected empty list of next shapes");
  }
}
function getList(count, state$$1) {
  let initialState;
  const patternInput = getNext(state$$1);
  const shape = patternInput[0];
  const nextState = patternInput[1];
  initialState = [new _fable_fable_library_2_13_0_Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](shape, new _fable_fable_library_2_13_0_Types_js__WEBPACK_IMPORTED_MODULE_0__["List"]()), nextState];

  const folder = function folder(tupledArg) {
    const shapes = tupledArg[0];
    const lastState = tupledArg[1];
    return function (_arg1) {
      const patternInput$$1 = getNext(lastState);
      const nextState$$1 = patternInput$$1[1];
      const nextShape = patternInput$$1[0];
      return [Object(_fable_fable_library_2_13_0_List_js__WEBPACK_IMPORTED_MODULE_5__["append"])(shapes, new _fable_fable_library_2_13_0_Types_js__WEBPACK_IMPORTED_MODULE_0__["List"](nextShape, new _fable_fable_library_2_13_0_Types_js__WEBPACK_IMPORTED_MODULE_0__["List"]())), nextState$$1];
    };
  };

  const source = Object(_fable_fable_library_2_13_0_Seq_js__WEBPACK_IMPORTED_MODULE_6__["rangeNumber"])(1, 1, count);
  return Object(_fable_fable_library_2_13_0_Seq_js__WEBPACK_IMPORTED_MODULE_6__["fold"])(Object(_fable_fable_library_2_13_0_Util_js__WEBPACK_IMPORTED_MODULE_4__["uncurry"])(2, folder), initialState, source);
}
function initialize() {
  return new GeneratorState(getShuffledShapes());
}

/***/ }),

/***/ "./src/renderer.fs":
/*!*************************!*\
  !*** ./src/renderer.fs ***!
  \*************************/
/*! exports provided: Renderer, Renderer$reflection, blockSize, setAlpha, create, clearCanvas, drawSquare, drawGrid, drawShape, drawBlock, redraw, drawNextBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Renderer", function() { return Renderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Renderer$reflection", function() { return Renderer$reflection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockSize", function() { return blockSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAlpha", function() { return setAlpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCanvas", function() { return clearCanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawSquare", function() { return drawSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawGrid", function() { return drawGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawShape", function() { return drawShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawBlock", function() { return drawBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redraw", function() { return redraw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawNextBlock", function() { return drawNextBlock; });
/* harmony import */ var _fable_fable_library_2_13_0_Types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/Types.js */ "./.fable/fable-library.2.13.0/Types.js");
/* harmony import */ var _fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/Reflection.js */ "./.fable/fable-library.2.13.0/Reflection.js");
/* harmony import */ var _fable_fable_library_2_13_0_String_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/String.js */ "./.fable/fable-library.2.13.0/String.js");
/* harmony import */ var _matrix_fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./matrix.fs */ "./src/matrix.fs");
/* harmony import */ var _grid_fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./grid.fs */ "./src/grid.fs");
/* harmony import */ var _shape_fs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shape.fs */ "./src/shape.fs");






const Renderer = Object(_fable_fable_library_2_13_0_Types_js__WEBPACK_IMPORTED_MODULE_0__["declare"])(function FBlocks_Renderer_Renderer(canvas) {
  this.canvas = canvas;
}, _fable_fable_library_2_13_0_Types_js__WEBPACK_IMPORTED_MODULE_0__["Record"]);
function Renderer$reflection() {
  return Object(_fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["record_type"])("FBlocks.Renderer.Renderer", [], Renderer, () => [["canvas", Object(_fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["class_type"])("Fable.Import.Browser.HTMLCanvasElement")]]);
}
const blockSize = 24;
function setAlpha(alpha, color) {
  const arg10 = color;
  const arg20 = alpha | 0;
  const clo1 = Object(_fable_fable_library_2_13_0_String_js__WEBPACK_IMPORTED_MODULE_2__["toText"])(Object(_fable_fable_library_2_13_0_String_js__WEBPACK_IMPORTED_MODULE_2__["printf"])("%s%X"));
  const clo2 = clo1(arg10);
  return clo2(arg20);
}
function create(containerElementId, width, height) {
  const elem = document.getElementById(containerElementId);
  const canvas = document.createElement("canvas");
  canvas.width = width * blockSize;
  canvas.height = height * blockSize;
  const value = elem.appendChild(canvas);
  void value;
  return new Renderer(canvas);
}
function clearCanvas(canvas$$1) {
  const context = canvas$$1.getContext("2d");
  context.fillStyle = "#246";
  context.fillRect(0, 0, canvas$$1.width, canvas$$1.height);
}
function drawSquare(x, y, color$$1, canvas$$2) {
  const context$$1 = canvas$$2.getContext("2d");
  context$$1.fillStyle = color$$1;
  context$$1.fillRect(x * blockSize + 0.5, y * blockSize + 0.5, blockSize - 1, blockSize - 1);
}
function drawGrid(grid, canvas$$3) {
  const matrix = grid.cells;
  Object(_matrix_fs__WEBPACK_IMPORTED_MODULE_3__["iteri"])(function action(cellX, cellY, cell) {
    if (cell.tag === 1) {
      const color$$2 = cell.fields[0];
      drawSquare(cellX, cellY, color$$2, canvas$$3);
    } else {
      void null;
    }
  }, matrix);
}
function drawShape(x$$1, y$$1, shape, alpha$$1, canvas$$4) {
  const matrix$$1 = shape;
  Object(_matrix_fs__WEBPACK_IMPORTED_MODULE_3__["iteri"])(function action$$1(cellX$$1, cellY$$1, cell$$1) {
    if (cell$$1.tag === 0) {
      void null;
    } else {
      const color$$3 = cell$$1.fields[0];
      drawSquare(x$$1 + cellX$$1, y$$1 + cellY$$1, setAlpha(alpha$$1, color$$3), canvas$$4);
    }
  }, matrix$$1);
}
function drawBlock(renderer, alpha$$2, block) {
  drawShape(block.position.x, block.position.y, block.shape, alpha$$2, renderer.canvas);
}
function redraw(renderer$$1, grid$$1, block$$1) {
  clearCanvas(renderer$$1.canvas);
  drawGrid(grid$$1, renderer$$1.canvas);
  const ghost = Object(_grid_fs__WEBPACK_IMPORTED_MODULE_4__["moveBlockToBottom"])(grid$$1, block$$1);
  drawBlock(renderer$$1, 64, ghost);
  drawBlock(renderer$$1, 255, block$$1);
}
function drawNextBlock(renderer$$2, shape$$1) {
  clearCanvas(renderer$$2.canvas);
  let shapeMatrix;
  const shapeName = shape$$1;
  shapeMatrix = Object(_shape_fs__WEBPACK_IMPORTED_MODULE_5__["getShapeMatrix"])(shapeName);
  drawShape(0, 0, shapeMatrix, 255, renderer$$2.canvas);
}

/***/ }),

/***/ "./src/score.fs":
/*!**********************!*\
  !*** ./src/score.fs ***!
  \**********************/
/*! exports provided: Score, Score$reflection, initial, linesToNextLevel, calculatePoints, calculateLevel, update, difference */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Score", function() { return Score; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Score$reflection", function() { return Score$reflection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initial", function() { return initial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linesToNextLevel", function() { return linesToNextLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculatePoints", function() { return calculatePoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateLevel", function() { return calculateLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "difference", function() { return difference; });
/* harmony import */ var _fable_fable_library_2_13_0_Types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/Types.js */ "./.fable/fable-library.2.13.0/Types.js");
/* harmony import */ var _fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/Reflection.js */ "./.fable/fable-library.2.13.0/Reflection.js");
/* harmony import */ var _fable_fable_library_2_13_0_String_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/String.js */ "./.fable/fable-library.2.13.0/String.js");



const Score = Object(_fable_fable_library_2_13_0_Types_js__WEBPACK_IMPORTED_MODULE_0__["declare"])(function FBlocks_Score_Score(level, linesCompleted, points) {
  this.level = level | 0;
  this.linesCompleted = linesCompleted | 0;
  this.points = points | 0;
}, _fable_fable_library_2_13_0_Types_js__WEBPACK_IMPORTED_MODULE_0__["Record"]);
function Score$reflection() {
  return Object(_fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["record_type"])("FBlocks.Score.Score", [], Score, () => [["level", _fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["int32_type"]], ["linesCompleted", _fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["int32_type"]], ["points", _fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["int32_type"]]]);
}
const initial = new Score(0, 0, 0);
function linesToNextLevel(currentLevel) {
  return (currentLevel + 1) * 10;
}
function calculatePoints(linesCompleted) {
  var arg10, clo1;

  switch (linesCompleted) {
    case 0:
      {
        return 0;
      }

    case 1:
      {
        return 40;
      }

    case 2:
      {
        return 100;
      }

    case 3:
      {
        return 300;
      }

    case 4:
      {
        return 1200;
      }

    default:
      {
        throw new Error((arg10 = linesCompleted | 0, (clo1 = Object(_fable_fable_library_2_13_0_String_js__WEBPACK_IMPORTED_MODULE_2__["toText"])(Object(_fable_fable_library_2_13_0_String_js__WEBPACK_IMPORTED_MODULE_2__["printf"])("Invalid number of lines completed: %i")), clo1(arg10))) + "\\nParameter name: " + "linesCompleted");
      }
  }
}
function calculateLevel(level, totalLinesCompleted) {
  const linesNeeded = linesToNextLevel(level) | 0;

  if (totalLinesCompleted >= linesNeeded) {
    return level + 1 | 0;
  } else {
    return level | 0;
  }
}
function update(score, linesCompleted$$1) {
  const totalLinesCompleted$$1 = score.linesCompleted + linesCompleted$$1 | 0;
  return new Score(calculateLevel(score.level, totalLinesCompleted$$1), totalLinesCompleted$$1, score.points + calculatePoints(linesCompleted$$1));
}
function difference(previous, current) {
  return new Score(current.level - previous.level, current.linesCompleted - previous.linesCompleted, current.points - previous.points);
}

/***/ }),

/***/ "./src/shape.fs":
/*!**********************!*\
  !*** ./src/shape.fs ***!
  \**********************/
/*! exports provided: ShapeCell, ShapeCell$reflection, ShapeName, ShapeName$reflection, isCellFilled, getShapeColor, getShapeMatrix, filledCellCoords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapeCell", function() { return ShapeCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapeCell$reflection", function() { return ShapeCell$reflection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapeName", function() { return ShapeName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapeName$reflection", function() { return ShapeName$reflection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCellFilled", function() { return isCellFilled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShapeColor", function() { return getShapeColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShapeMatrix", function() { return getShapeMatrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filledCellCoords", function() { return filledCellCoords; });
/* harmony import */ var _fable_fable_library_2_13_0_Types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/Types.js */ "./.fable/fable-library.2.13.0/Types.js");
/* harmony import */ var _fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/Reflection.js */ "./.fable/fable-library.2.13.0/Reflection.js");
/* harmony import */ var _matrix_fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./matrix.fs */ "./src/matrix.fs");
/* harmony import */ var _coord_fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coord.fs */ "./src/coord.fs");
/* harmony import */ var _fable_fable_library_2_13_0_Seq_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/Seq.js */ "./.fable/fable-library.2.13.0/Seq.js");





const ShapeCell = Object(_fable_fable_library_2_13_0_Types_js__WEBPACK_IMPORTED_MODULE_0__["declare"])(function FBlocks_Shape_ShapeCell(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, _fable_fable_library_2_13_0_Types_js__WEBPACK_IMPORTED_MODULE_0__["Union"]);
function ShapeCell$reflection() {
  return Object(_fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["union_type"])("FBlocks.Shape.ShapeCell", [], ShapeCell, () => ["EmptyCell", ["FilledCell", [["Item", _fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["string_type"]]]]]);
}
const ShapeName = Object(_fable_fable_library_2_13_0_Types_js__WEBPACK_IMPORTED_MODULE_0__["declare"])(function FBlocks_Shape_ShapeName(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, _fable_fable_library_2_13_0_Types_js__WEBPACK_IMPORTED_MODULE_0__["Union"]);
function ShapeName$reflection() {
  return Object(_fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["union_type"])("FBlocks.Shape.ShapeName", [], ShapeName, () => ["D", "I", "J", "L", "O", "S", "Z"]);
}
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
      {
        return "#8080FF";
      }

    case 2:
      {
        return "#FFFF80";
      }

    case 3:
      {
        return "#FFB080";
      }

    case 4:
      {
        return "#80FF80";
      }

    case 5:
      {
        return "#FF80FF";
      }

    case 6:
      {
        return "#B080FF";
      }

    default:
      {
        return "#FF8080";
      }
  }
}
function getShapeMatrix(shapeName$$1) {
  const x = 1;
  const matrixDefinition = shapeName$$1.tag === 1 ? [new Int32Array([0, 0, 0, 0]), new Int32Array([x, x, x, x]), new Int32Array([0, 0, 0, 0]), new Int32Array([0, 0, 0, 0])] : shapeName$$1.tag === 2 ? [new Int32Array([x, 0, 0]), new Int32Array([x, x, x]), new Int32Array([0, 0, 0])] : shapeName$$1.tag === 3 ? [new Int32Array([0, 0, x]), new Int32Array([x, x, x]), new Int32Array([0, 0, 0])] : shapeName$$1.tag === 4 ? [new Int32Array([x, x]), new Int32Array([x, x])] : shapeName$$1.tag === 5 ? [new Int32Array([0, x, x]), new Int32Array([x, x, 0]), new Int32Array([0, 0, 0])] : shapeName$$1.tag === 6 ? [new Int32Array([x, x, 0]), new Int32Array([0, x, x]), new Int32Array([0, 0, 0])] : [new Int32Array([0, x, 0]), new Int32Array([x, x, x]), new Int32Array([0, 0, 0])];
  const color = getShapeColor(shapeName$$1);
  let matrix;
  const input = matrixDefinition;
  matrix = Object(_matrix_fs__WEBPACK_IMPORTED_MODULE_2__["fromArray"])(input);
  return Object(_matrix_fs__WEBPACK_IMPORTED_MODULE_2__["map"])(function mapping(x$$1) {
    if (x$$1 === 1) {
      return new ShapeCell(1, "FilledCell", color);
    } else {
      return new ShapeCell(0, "EmptyCell");
    }
  }, matrix);
}
function filledCellCoords(shape) {
  let source$$1;
  let source;
  const matrix$$1 = shape;
  source = Object(_matrix_fs__WEBPACK_IMPORTED_MODULE_2__["flatmapi"])(function mapping$$1(x$$2, y, v) {
    return [Object(_coord_fs__WEBPACK_IMPORTED_MODULE_3__["create"])(x$$2, y), v];
  }, matrix$$1);
  source$$1 = Object(_fable_fable_library_2_13_0_Seq_js__WEBPACK_IMPORTED_MODULE_4__["filter"])(function predicate(tupledArg) {
    const v$$1 = tupledArg[1];
    return isCellFilled(v$$1);
  }, source);
  return Object(_fable_fable_library_2_13_0_Seq_js__WEBPACK_IMPORTED_MODULE_4__["map"])(function mapping$$2(tupledArg$$1) {
    const coord = tupledArg$$1[0];
    return coord;
  }, source$$1);
}

/***/ }),

/***/ "./src/time.fs":
/*!*********************!*\
  !*** ./src/time.fs ***!
  \*********************/
/*! exports provided: Time, Time$reflection, zero, add, difference, fromMilliseconds, getCurrent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Time", function() { return Time; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Time$reflection", function() { return Time$reflection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zero", function() { return zero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "difference", function() { return difference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMilliseconds", function() { return fromMilliseconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrent", function() { return getCurrent; });
/* harmony import */ var _fable_fable_library_2_13_0_Types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/Types.js */ "./.fable/fable-library.2.13.0/Types.js");
/* harmony import */ var _fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.fable/fable-library.2.13.0/Reflection.js */ "./.fable/fable-library.2.13.0/Reflection.js");


const Time = Object(_fable_fable_library_2_13_0_Types_js__WEBPACK_IMPORTED_MODULE_0__["declare"])(function FBlocks_Time_Time(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, _fable_fable_library_2_13_0_Types_js__WEBPACK_IMPORTED_MODULE_0__["Union"]);
function Time$reflection() {
  return Object(_fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["union_type"])("FBlocks.Time.Time", [], Time, () => [["Time", [["ms", _fable_fable_library_2_13_0_Reflection_js__WEBPACK_IMPORTED_MODULE_1__["float64_type"]]]]]);
}
const zero = new Time(0, "Time", 0);
function add(_arg2, _arg1) {
  const t1 = _arg2.fields[0];
  const t2 = _arg1.fields[0];
  return new Time(0, "Time", t1 + t2);
}
function difference(_arg2$$1, _arg1$$1) {
  const t1$$1 = _arg2$$1.fields[0];
  const t2$$1 = _arg1$$1.fields[0];
  return new Time(0, "Time", t1$$1 - t2$$1);
}
function fromMilliseconds(ms) {
  return new Time(0, "Time", ms);
}
function getCurrent() {
  const ms$$1 = performance.now() * 1;
  return fromMilliseconds(ms$$1);
}

/***/ }),

/***/ "./src/unitsOfMeasure.fs":
/*!*******************************!*\
  !*** ./src/unitsOfMeasure.fs ***!
  \*******************************/
/*! exports provided: millisecondsPerSecond, secondsToMilliseconds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "millisecondsPerSecond", function() { return millisecondsPerSecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secondsToMilliseconds", function() { return secondsToMilliseconds; });
const millisecondsPerSecond = 1000;
function secondsToMilliseconds(seconds) {
  return seconds * millisecondsPerSecond;
}

/***/ })

/******/ });
//# sourceMappingURL=bundle.generated.js.map