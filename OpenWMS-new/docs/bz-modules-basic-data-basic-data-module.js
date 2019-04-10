(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bz-modules-basic-data-basic-data-module"],{

/***/ "./node_modules/ngx-bootstrap/chronos/fesm5/ngx-bootstrap-chronos.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/chronos/fesm5/ngx-bootstrap-chronos.js ***!
  \***************************************************************************/
/*! exports provided: add, subtract, getDay, isFirstDayOfWeek, isSameYear, isSameDay, isSameMonth, getFullYear, getFirstDayOfMonth, getMonth, parseDate, formatDate, listLocales, getLocale, updateLocale, defineLocale, getSetGlobalLocale, isAfter, isBefore, isDisabledDay, isSame, isArray, isDateValid, isDate, shiftDate, setFullDate, endOf, startOf, arLocale, bgLocale, caLocale, csLocale, daLocale, deLocale, enGbLocale, esDoLocale, esLocale, esUsLocale, fiLocale, frLocale, glLocale, heLocale, hiLocale, huLocale, idLocale, itLocale, jaLocale, koLocale, ltLocale, mnLocale, nbLocale, nlBeLocale, nlLocale, plLocale, ptBrLocale, roLocale, ruLocale, skLocale, slLocale, svLocale, thLocale, trLocale, zhCnLocale, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDay", function() { return getDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFirstDayOfWeek", function() { return isFirstDayOfWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSameYear", function() { return isSameYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSameDay", function() { return isSameDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSameMonth", function() { return isSameMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFullYear", function() { return getFullYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstDayOfMonth", function() { return getFirstDayOfMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMonth", function() { return getMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseDate", function() { return parseDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listLocales", function() { return listLocales; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocale", function() { return getLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLocale", function() { return updateLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineLocale", function() { return defineLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetGlobalLocale", function() { return getSetGlobalLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAfter", function() { return isAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBefore", function() { return isBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDisabledDay", function() { return isDisabledDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSame", function() { return isSame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDateValid", function() { return isDateValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return isDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shiftDate", function() { return shiftDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFullDate", function() { return setFullDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endOf", function() { return endOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startOf", function() { return startOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arLocale", function() { return arLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bgLocale", function() { return bgLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caLocale", function() { return caLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "csLocale", function() { return csLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "daLocale", function() { return daLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deLocale", function() { return deLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enGbLocale", function() { return enGbLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "esDoLocale", function() { return esDoLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "esLocale", function() { return esLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "esUsLocale", function() { return esUsLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fiLocale", function() { return fiLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frLocale", function() { return frLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glLocale", function() { return glLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heLocale", function() { return heLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hiLocale", function() { return hiLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "huLocale", function() { return huLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "idLocale", function() { return idLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itLocale", function() { return itLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jaLocale", function() { return jaLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "koLocale", function() { return koLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ltLocale", function() { return ltLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mnLocale", function() { return mnLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nbLocale", function() { return nbLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nlBeLocale", function() { return nlBeLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nlLocale", function() { return nlLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plLocale", function() { return plLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ptBrLocale", function() { return ptBrLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roLocale", function() { return roLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ruLocale", function() { return ruLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skLocale", function() { return skLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slLocale", function() { return slLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svLocale", function() { return svLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thLocale", function() { return thLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trLocale", function() { return trLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zhCnLocale", function() { return zhCnLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return createDate; });
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} n
 * @param {?} x
 * @return {?}
 */
function mod(n, x) {
    return (n % x + x) % x;
}
/**
 * @param {?} num
 * @return {?}
 */
function absFloor(num) {
    return num < 0 ? Math.ceil(num) || 0 : Math.floor(num);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} str
 * @return {?}
 */
function isString(str) {
    return typeof str === 'string';
}
/**
 * @param {?} value
 * @return {?}
 */
function isDate(value) {
    return value instanceof Date || Object.prototype.toString.call(value) === '[object Date]';
}
/**
 * @param {?} date
 * @return {?}
 */
function isDateValid(date) {
    return date && date.getTime && !isNaN(date.getTime());
}
/**
 * @param {?} fn
 * @return {?}
 */
function isFunction(fn) {
    return (fn instanceof Function ||
        Object.prototype.toString.call(fn) === '[object Function]');
}
/**
 * @param {?=} value
 * @return {?}
 */
function isNumber(value) {
    return typeof value === 'number' || Object.prototype.toString.call(value) === '[object Number]';
}
/**
 * @template T
 * @param {?=} input
 * @return {?}
 */
function isArray(input) {
    return (input instanceof Array ||
        Object.prototype.toString.call(input) === '[object Array]');
}
/**
 * @template T
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function hasOwnProp(a /*object*/, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
}
/**
 * @template T
 * @param {?} input
 * @return {?}
 */
function isObject(input /*object*/) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return (input != null && Object.prototype.toString.call(input) === '[object Object]');
}
/**
 * @param {?} obj
 * @return {?}
 */
function isObjectEmpty(obj) {
    if (Object.getOwnPropertyNames) {
        return (Object.getOwnPropertyNames(obj).length === 0);
    }
    /** @type {?} */
    var k;
    for (k in obj) {
        if (obj.hasOwnProperty(k)) {
            return false;
        }
    }
    return true;
}
/**
 * @param {?} input
 * @return {?}
 */
function isUndefined(input) {
    return input === void 0;
}
/**
 * @template T
 * @param {?} argumentForCoercion
 * @return {?}
 */
function toInt(argumentForCoercion) {
    /** @type {?} */
    var coercedNumber = +argumentForCoercion;
    /** @type {?} */
    var value = 0;
    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
    }
    return value;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var aliases = {};
/** @type {?} */
var _mapUnits = {
    date: 'day',
    hour: 'hours',
    minute: 'minutes',
    second: 'seconds',
    millisecond: 'milliseconds'
};
/**
 * @param {?} unit
 * @param {?} shorthand
 * @return {?}
 */
function addUnitAlias(unit, shorthand) {
    /** @type {?} */
    var lowerCase = unit.toLowerCase();
    /** @type {?} */
    var _unit = unit;
    if (lowerCase in _mapUnits) {
        _unit = _mapUnits[lowerCase];
    }
    aliases[lowerCase] = aliases[lowerCase + "s"] = aliases[shorthand] = _unit;
}
/**
 * @param {?} units
 * @return {?}
 */
function normalizeUnits(units) {
    return isString(units) ? aliases[units] || aliases[units.toLowerCase()] : undefined;
}
/**
 * @param {?} inputObject
 * @return {?}
 */
function normalizeObjectUnits(inputObject) {
    /** @type {?} */
    var normalizedInput = {};
    /** @type {?} */
    var normalizedProp;
    /** @type {?} */
    var prop;
    for (prop in inputObject) {
        if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
            }
        }
    }
    return (/** @type {?} */ (normalizedInput));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// place in new Date([array])
/** @type {?} */
var YEAR = 0;
/** @type {?} */
var MONTH = 1;
/** @type {?} */
var DATE = 2;
/** @type {?} */
var HOUR = 3;
/** @type {?} */
var MINUTE = 4;
/** @type {?} */
var SECOND = 5;
/** @type {?} */
var MILLISECOND = 6;
/** @type {?} */
var WEEK = 7;
/** @type {?} */
var WEEKDAY = 8;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} num
 * @param {?} targetLength
 * @param {?=} forceSign
 * @return {?}
 */
function zeroFill(num, targetLength, forceSign) {
    /** @type {?} */
    var absNumber = "" + Math.abs(num);
    /** @type {?} */
    var zerosToFill = targetLength - absNumber.length;
    /** @type {?} */
    var sign = num >= 0;
    /** @type {?} */
    var _sign = sign ? (forceSign ? '+' : '') : '-';
    // todo: this is crazy slow
    /** @type {?} */
    var _zeros = Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1);
    return (_sign + _zeros + absNumber);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var formatFunctions = {};
/** @type {?} */
var formatTokenFunctions = {};
// tslint:disable-next-line
/** @type {?} */
var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
/**
 * @param {?} token
 * @param {?} padded
 * @param {?} ordinal
 * @param {?} callback
 * @return {?}
 */
function addFormatToken(token, padded, ordinal, callback) {
    if (token) {
        formatTokenFunctions[token] = callback;
    }
    if (padded) {
        formatTokenFunctions[padded[0]] = function () {
            return zeroFill(callback.apply(null, arguments), padded[1], padded[2]);
        };
    }
    if (ordinal) {
        formatTokenFunctions[ordinal] = function (date, opts) {
            return opts.locale.ordinal(callback.apply(null, arguments), token);
        };
    }
}
/**
 * @param {?} format
 * @return {?}
 */
function makeFormatFunction(format) {
    /** @type {?} */
    var array = format.match(formattingTokens);
    /** @type {?} */
    var length = array.length;
    /** @type {?} */
    var formatArr = new Array(length);
    for (var i = 0; i < length; i++) {
        formatArr[i] = formatTokenFunctions[array[i]]
            ? formatTokenFunctions[array[i]]
            : removeFormattingTokens(array[i]);
    }
    return function (date, locale, isUTC, offset) {
        if (offset === void 0) { offset = 0; }
        /** @type {?} */
        var output = '';
        for (var j = 0; j < length; j++) {
            output += isFunction(formatArr[j])
                ? ((/** @type {?} */ (formatArr[j]))).call(null, date, { format: format, locale: locale, isUTC: isUTC, offset: offset })
                : formatArr[j];
        }
        return output;
    };
}
/**
 * @param {?} input
 * @return {?}
 */
function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?=} y
 * @param {?=} m
 * @param {?=} d
 * @return {?}
 */
function createUTCDate(y, m, d) {
    /** @type {?} */
    var date = new Date(Date.UTC.apply(null, arguments));
    // the Date.UTC function remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
        date.setUTCFullYear(y);
    }
    return date;
}
/**
 * @param {?=} y
 * @param {?=} m
 * @param {?=} d
 * @param {?=} h
 * @param {?=} M
 * @param {?=} s
 * @param {?=} ms
 * @return {?}
 */
function createDate(y, m, d, h, M, s, ms) {
    if (m === void 0) { m = 0; }
    if (d === void 0) { d = 1; }
    if (h === void 0) { h = 0; }
    if (M === void 0) { M = 0; }
    if (s === void 0) { s = 0; }
    if (ms === void 0) { ms = 0; }
    /** @type {?} */
    var date = new Date(y, m, d, h, M, s, ms);
    // the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
        date.setFullYear(y);
    }
    return date;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getHours(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCHours() : date.getHours();
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getMinutes(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCMinutes() : date.getMinutes();
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getSeconds(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCSeconds() : date.getSeconds();
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getMilliseconds(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCMilliseconds() : date.getMilliseconds();
}
/**
 * @param {?} date
 * @return {?}
 */
function getTime(date) {
    return date.getTime();
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getDay(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCDay() : date.getDay();
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getDate(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCDate() : date.getDate();
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getMonth(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCMonth() : date.getMonth();
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getFullYear(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCFullYear() : date.getFullYear();
}
/**
 * @param {?} date
 * @return {?}
 */
function unix(date) {
    return Math.floor(date.valueOf() / 1000);
}
/**
 * @param {?} date
 * @return {?}
 */
function getFirstDayOfMonth(date) {
    return createDate(date.getFullYear(), date.getMonth(), 1, date.getHours(), date.getMinutes(), date.getSeconds());
}
/**
 * @param {?} date
 * @param {?} firstDayOfWeek
 * @return {?}
 */
function isFirstDayOfWeek(date, firstDayOfWeek) {
    return date.getDay() === firstDayOfWeek;
}
/**
 * @param {?} date1
 * @param {?} date2
 * @return {?}
 */
function isSameMonth(date1, date2) {
    if (!date1 || !date2) {
        return false;
    }
    return isSameYear(date1, date2) && getMonth(date1) === getMonth(date2);
}
/**
 * @param {?} date1
 * @param {?} date2
 * @return {?}
 */
function isSameYear(date1, date2) {
    if (!date1 || !date2) {
        return false;
    }
    return getFullYear(date1) === getFullYear(date2);
}
/**
 * @param {?} date1
 * @param {?} date2
 * @return {?}
 */
function isSameDay(date1, date2) {
    if (!date1 || !date2) {
        return false;
    }
    return (isSameYear(date1, date2) &&
        isSameMonth(date1, date2) &&
        getDate(date1) === getDate(date2));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var match1 = /\d/;
//       0 - 9
/** @type {?} */
var match2 = /\d\d/;
//      00 - 99
/** @type {?} */
var match3 = /\d{3}/;
//     000 - 999
/** @type {?} */
var match4 = /\d{4}/;
//    0000 - 9999
/** @type {?} */
var match6 = /[+-]?\d{6}/;
// -999999 - 999999
/** @type {?} */
var match1to2 = /\d\d?/;
//       0 - 99
/** @type {?} */
var match3to4 = /\d\d\d\d?/;
//     999 - 9999
/** @type {?} */
var match5to6 = /\d\d\d\d\d\d?/;
//   99999 - 999999
/** @type {?} */
var match1to3 = /\d{1,3}/;
//       0 - 999
/** @type {?} */
var match1to4 = /\d{1,4}/;
//       0 - 9999
/** @type {?} */
var match1to6 = /[+-]?\d{1,6}/;
// -999999 - 999999
/** @type {?} */
var matchUnsigned = /\d+/;
//       0 - inf
/** @type {?} */
var matchSigned = /[+-]?\d+/;
// +00:00 -00:00 +0000 -0000 or Z
/** @type {?} */
var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi;
// +00 -00 +00:00 -00:00 +0000 -0000 or Z
/** @type {?} */
var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/;
// 123456789 123456789.123
// any word (or two) characters or numbers including two/three word month in arabic.
// includes scottish gaelic two word and hyphenated months
// tslint:disable-next-line
/** @type {?} */
var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
/** @type {?} */
var regexes = {};
/**
 * @param {?} token
 * @param {?} regex
 * @param {?=} strictRegex
 * @return {?}
 */
function addRegexToken(token, regex, strictRegex) {
    if (isFunction(regex)) {
        regexes[token] = regex;
        return;
    }
    regexes[token] = function (isStrict, locale) {
        return (isStrict && strictRegex) ? strictRegex : regex;
    };
}
/**
 * @param {?} token
 * @param {?} locale
 * @return {?}
 */
function getParseRegexForToken(token, locale) {
    /** @type {?} */
    var _strict = false;
    if (!hasOwnProp(regexes, token)) {
        return new RegExp(unescapeFormat(token));
    }
    return regexes[token](_strict, locale);
}
// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
/**
 * @param {?} str
 * @return {?}
 */
function unescapeFormat(str) {
    // tslint:disable-next-line
    return regexEscape(str
        .replace('\\', '')
        .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) { return p1 || p2 || p3 || p4; }));
}
/**
 * @param {?} str
 * @return {?}
 */
function regexEscape(str) {
    return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var tokens = {};
/**
 * @param {?} token
 * @param {?} callback
 * @return {?}
 */
function addParseToken(token, callback) {
    /** @type {?} */
    var _token = isString(token) ? [token] : token;
    /** @type {?} */
    var func = callback;
    if (isNumber(callback)) {
        func = function (input, array, config) {
            array[callback] = toInt(input);
            return config;
        };
    }
    if (isArray(_token) && isFunction(func)) {
        /** @type {?} */
        var i = void 0;
        for (i = 0; i < _token.length; i++) {
            tokens[_token[i]] = func;
        }
    }
}
/**
 * @param {?} token
 * @param {?} callback
 * @return {?}
 */
function addWeekParseToken(token, callback) {
    addParseToken(token, function (input, array, config, _token) {
        config._w = config._w || {};
        return callback(input, config._w, config, _token);
    });
}
/**
 * @param {?} token
 * @param {?} input
 * @param {?} config
 * @return {?}
 */
function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
        tokens[token](input, config._a, config, token);
    }
    return config;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function initDayOfMonth() {
    // FORMATTING
    addFormatToken('D', ['DD', 2, false], 'Do', function (date, opts) {
        return getDate(date, opts.isUTC)
            .toString(10);
    });
    // ALIASES
    addUnitAlias('date', 'D');
    // PARSING
    addRegexToken('D', match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        return locale._dayOfMonthOrdinalParse || locale._ordinalParse;
    });
    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array, config) {
        array[DATE] = toInt(input.match(match1to2)[0]);
        return config;
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
        empty: false,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: false,
        invalidMonth: null,
        invalidFormat: false,
        userInvalidated: false,
        iso: false,
        parsedDateParts: [],
        meridiem: null,
        rfc2822: false,
        weekdayMismatch: false
    };
}
/**
 * @param {?} config
 * @return {?}
 */
function getParsingFlags(config) {
    if (config._pf == null) {
        config._pf = defaultParsingFlags();
    }
    return config._pf;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// FORMATTING
/**
 * @param {?} date
 * @param {?} opts
 * @return {?}
 */
function getYear(date, opts) {
    return getFullYear(date, opts.isUTC).toString();
}
/**
 * @return {?}
 */
function initYear() {
    addFormatToken('Y', null, null, function (date, opts) {
        /** @type {?} */
        var y = getFullYear(date, opts.isUTC);
        return y <= 9999 ? y.toString(10) : "+" + y;
    });
    addFormatToken(null, ['YY', 2, false], null, function (date, opts) {
        return (getFullYear(date, opts.isUTC) % 100).toString(10);
    });
    addFormatToken(null, ['YYYY', 4, false], null, getYear);
    addFormatToken(null, ['YYYYY', 5, false], null, getYear);
    addFormatToken(null, ['YYYYYY', 6, true], null, getYear);
    // ALIASES
    addUnitAlias('year', 'y');
    // PARSING
    addRegexToken('Y', matchSigned);
    addRegexToken('YY', match1to2, match2);
    addRegexToken('YYYY', match1to4, match4);
    addRegexToken('YYYYY', match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);
    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array, config) {
        array[YEAR] = input.length === 2 ? parseTwoDigitYear(input) : toInt(input);
        return config;
    });
    addParseToken('YY', function (input, array, config) {
        array[YEAR] = parseTwoDigitYear(input);
        return config;
    });
    addParseToken('Y', function (input, array, config) {
        array[YEAR] = parseInt(input, 10);
        return config;
    });
}
/**
 * @param {?} input
 * @return {?}
 */
function parseTwoDigitYear(input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
}
/**
 * @param {?} year
 * @return {?}
 */
function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
}
/**
 * @param {?} year
 * @return {?}
 */
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// todo: this is duplicate, source in date-getters.ts
/**
 * @param {?} year
 * @param {?} month
 * @return {?}
 */
function daysInMonth$1(year, month) {
    if (isNaN(year) || isNaN(month)) {
        return NaN;
    }
    /** @type {?} */
    var modMonth = mod(month, 12);
    /** @type {?} */
    var _year = year + (month - modMonth) / 12;
    return modMonth === 1
        ? isLeapYear(_year) ? 29 : 28
        : (31 - modMonth % 7 % 2);
}
/**
 * @return {?}
 */
function initMonth() {
    // FORMATTING
    addFormatToken('M', ['MM', 2, false], 'Mo', function (date, opts) {
        return (getMonth(date, opts.isUTC) + 1).toString(10);
    });
    addFormatToken('MMM', null, null, function (date, opts) {
        return opts.locale.monthsShort(date, opts.format, opts.isUTC);
    });
    addFormatToken('MMMM', null, null, function (date, opts) {
        return opts.locale.months(date, opts.format, opts.isUTC);
    });
    // ALIASES
    addUnitAlias('month', 'M');
    // PARSING
    addRegexToken('M', match1to2);
    addRegexToken('MM', match1to2, match2);
    addRegexToken('MMM', function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });
    addParseToken(['M', 'MM'], function (input, array, config) {
        array[MONTH] = toInt(input) - 1;
        return config;
    });
    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        /** @type {?} */
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        }
        else {
            getParsingFlags(config).invalidMonth = !!input;
        }
        return config;
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var defaultTimeUnit = {
    year: 0,
    month: 0,
    day: 0,
    hour: 0,
    minute: 0,
    seconds: 0
};
/**
 * @param {?} date
 * @param {?} unit
 * @return {?}
 */
function shiftDate(date, unit) {
    /** @type {?} */
    var _unit = Object.assign({}, defaultTimeUnit, unit);
    /** @type {?} */
    var year = date.getFullYear() + (_unit.year || 0);
    /** @type {?} */
    var month = date.getMonth() + (_unit.month || 0);
    /** @type {?} */
    var day = date.getDate() + (_unit.day || 0);
    if (_unit.month && !_unit.day) {
        day = Math.min(day, daysInMonth$1(year, month));
    }
    return createDate(year, month, day, date.getHours() + (_unit.hour || 0), date.getMinutes() + (_unit.minute || 0), date.getSeconds() + (_unit.seconds || 0));
}
/**
 * @param {?} date
 * @param {?} unit
 * @return {?}
 */
function setFullDate(date, unit) {
    return createDate(getNum(date.getFullYear(), unit.year), getNum(date.getMonth(), unit.month), getNum(date.getDate(), unit.day), getNum(date.getHours(), unit.hour), getNum(date.getMinutes(), unit.minute), getNum(date.getSeconds(), unit.seconds), getNum(date.getMilliseconds(), unit.milliseconds));
}
/**
 * @param {?} def
 * @param {?=} num
 * @return {?}
 */
function getNum(def, num) {
    return isNumber(num) ? num : def;
}
/**
 * @param {?} date
 * @param {?} value
 * @param {?=} isUTC
 * @return {?}
 */
function setMonth(date, value, isUTC) {
    /** @type {?} */
    var dayOfMonth = Math.min(getDate(date), daysInMonth$1(getFullYear(date), value));
    isUTC ? date.setUTCMonth(value, dayOfMonth) : date.setMonth(value, dayOfMonth);
    return date;
}
/**
 * @param {?} date
 * @param {?} value
 * @param {?=} isUTC
 * @return {?}
 */
function setHours(date, value, isUTC) {
    isUTC ? date.setUTCHours(value) : date.setHours(value);
    return date;
}
/**
 * @param {?} date
 * @param {?} value
 * @param {?=} isUTC
 * @return {?}
 */
function setMinutes(date, value, isUTC) {
    isUTC ? date.setUTCMinutes(value) : date.setMinutes(value);
    return date;
}
/**
 * @param {?} date
 * @param {?} value
 * @param {?=} isUTC
 * @return {?}
 */
function setSeconds(date, value, isUTC) {
    isUTC ? date.setUTCSeconds(value) : date.setSeconds(value);
    return date;
}
/**
 * @param {?} date
 * @param {?} value
 * @param {?=} isUTC
 * @return {?}
 */
function setMilliseconds(date, value, isUTC) {
    isUTC ? date.setUTCMilliseconds(value) : date.setMilliseconds(value);
    return date;
}
/**
 * @param {?} date
 * @param {?} value
 * @param {?=} isUTC
 * @return {?}
 */
function setDate(date, value, isUTC) {
    isUTC ? date.setUTCDate(value) : date.setDate(value);
    return date;
}
/**
 * @param {?} date
 * @param {?} value
 * @return {?}
 */
function setTime(date, value) {
    date.setTime(value);
    return date;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// fastest way to clone date
// https://jsperf.com/clone-date-object2
/**
 * @param {?} date
 * @return {?}
 */
function cloneDate(date) {
    return new Date(date.getTime());
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} date
 * @param {?} unit
 * @param {?=} isUTC
 * @return {?}
 */
function startOf(date, unit, isUTC) {
    /** @type {?} */
    var _date = cloneDate(date);
    // the following switch intentionally omits break keywords
    // to utilize falling through the cases.
    switch (unit) {
        case 'year':
            setMonth(_date, 0, isUTC);
        /* falls through */
        case 'quarter':
        case 'month':
            setDate(_date, 1, isUTC);
        /* falls through */
        case 'week':
        case 'isoWeek':
        case 'day':
        case 'date':
            setHours(_date, 0, isUTC);
        /* falls through */
        case 'hours':
            setMinutes(_date, 0, isUTC);
        /* falls through */
        case 'minutes':
            setSeconds(_date, 0, isUTC);
        /* falls through */
        case 'seconds':
            setMilliseconds(_date, 0, isUTC);
    }
    // weeks are a special case
    if (unit === 'week') {
        setLocaleDayOfWeek(_date, 0, { isUTC: isUTC });
    }
    if (unit === 'isoWeek') {
        setISODayOfWeek(_date, 1);
    }
    // quarters are also special
    if (unit === 'quarter') {
        setMonth(_date, Math.floor(getMonth(_date, isUTC) / 3) * 3, isUTC);
    }
    return _date;
}
/**
 * @param {?} date
 * @param {?} unit
 * @param {?=} isUTC
 * @return {?}
 */
function endOf(date, unit, isUTC) {
    /** @type {?} */
    var _unit = unit;
    // 'date' is an alias for 'day', so it should be considered as such.
    if (_unit === 'date') {
        _unit = 'day';
    }
    /** @type {?} */
    var start = startOf(date, _unit, isUTC);
    /** @type {?} */
    var _step = add(start, 1, _unit === 'isoWeek' ? 'week' : _unit, isUTC);
    /** @type {?} */
    var res = subtract(_step, 1, 'milliseconds', isUTC);
    return res;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function initDayOfYear() {
    // FORMATTING
    addFormatToken('DDD', ['DDDD', 3, false], 'DDDo', function (date) {
        return getDayOfYear(date)
            .toString(10);
    });
    // ALIASES
    addUnitAlias('dayOfYear', 'DDD');
    addRegexToken('DDD', match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
        return config;
    });
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getDayOfYear(date, isUTC) {
    /** @type {?} */
    var date1 = +startOf(date, 'day', isUTC);
    /** @type {?} */
    var date2 = +startOf(date, 'year', isUTC);
    /** @type {?} */
    var someDate = date1 - date2;
    /** @type {?} */
    var oneDay = 1000 * 60 * 60 * 24;
    return Math.round(someDate / oneDay) + 1;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} year
 * @param {?} dow
 * @param {?} doy
 * @return {?}
 */
function firstWeekOffset(year, dow, doy) {
    // first-week day -- which january is always in the first week (4 for iso, 1 for other)
    /** @type {?} */
    var fwd = dow - doy + 7;
    // first-week day local weekday -- which local weekday is fwd
    /** @type {?} */
    var fwdlw = (createUTCDate(year, 0, fwd).getUTCDay() - dow + 7) % 7;
    return -fwdlw + fwd - 1;
}
// https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
/**
 * @param {?} year
 * @param {?} week
 * @param {?} weekday
 * @param {?} dow
 * @param {?} doy
 * @return {?}
 */
function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    /** @type {?} */
    var localWeekday = (7 + weekday - dow) % 7;
    /** @type {?} */
    var weekOffset = firstWeekOffset(year, dow, doy);
    /** @type {?} */
    var dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset;
    /** @type {?} */
    var resYear;
    /** @type {?} */
    var resDayOfYear;
    if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = daysInYear(resYear) + dayOfYear;
    }
    else if (dayOfYear > daysInYear(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - daysInYear(year);
    }
    else {
        resYear = year;
        resDayOfYear = dayOfYear;
    }
    return {
        year: resYear,
        dayOfYear: resDayOfYear
    };
}
/**
 * @param {?} date
 * @param {?} dow
 * @param {?} doy
 * @param {?=} isUTC
 * @return {?}
 */
function weekOfYear(date, dow, doy, isUTC) {
    /** @type {?} */
    var weekOffset = firstWeekOffset(getFullYear(date, isUTC), dow, doy);
    /** @type {?} */
    var week = Math.floor((getDayOfYear(date, isUTC) - weekOffset - 1) / 7) + 1;
    /** @type {?} */
    var resWeek;
    /** @type {?} */
    var resYear;
    if (week < 1) {
        resYear = getFullYear(date, isUTC) - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
    }
    else if (week > weeksInYear(getFullYear(date, isUTC), dow, doy)) {
        resWeek = week - weeksInYear(getFullYear(date, isUTC), dow, doy);
        resYear = getFullYear(date, isUTC) + 1;
    }
    else {
        resYear = getFullYear(date, isUTC);
        resWeek = week;
    }
    return {
        week: resWeek,
        year: resYear
    };
}
/**
 * @param {?} year
 * @param {?} dow
 * @param {?} doy
 * @return {?}
 */
function weeksInYear(year, dow, doy) {
    /** @type {?} */
    var weekOffset = firstWeekOffset(year, dow, doy);
    /** @type {?} */
    var weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
/** @type {?} */
var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
/** @type {?} */
var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
/** @type {?} */
var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
/** @type {?} */
var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
/** @type {?} */
var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
/** @type {?} */
var defaultLongDateFormat = {
    LTS: 'h:mm:ss A',
    LT: 'h:mm A',
    L: 'MM/DD/YYYY',
    LL: 'MMMM D, YYYY',
    LLL: 'MMMM D, YYYY h:mm A',
    LLLL: 'dddd, MMMM D, YYYY h:mm A'
};
/** @type {?} */
var defaultOrdinal = '%d';
/** @type {?} */
var defaultDayOfMonthOrdinalParse = /\d{1,2}/;
/** @type {?} */
var defaultMonthsShortRegex = matchWord;
/** @type {?} */
var defaultMonthsRegex = matchWord;
var Locale = /** @class */ (function () {
    function Locale(config) {
        if (!!config) {
            this.set(config);
        }
    }
    /**
     * @param {?} config
     * @return {?}
     */
    Locale.prototype.set = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var confKey;
        for (confKey in config) {
            if (!config.hasOwnProperty(confKey)) {
                continue;
            }
            /** @type {?} */
            var prop = config[(/** @type {?} */ (confKey))];
            /** @type {?} */
            var key = (/** @type {?} */ ((isFunction(prop) ? confKey : "_" + confKey)));
            this[key] = (/** @type {?} */ (prop));
        }
        this._config = config;
    };
    /**
     * @param {?} key
     * @param {?} date
     * @param {?} now
     * @return {?}
     */
    Locale.prototype.calendar = /**
     * @param {?} key
     * @param {?} date
     * @param {?} now
     * @return {?}
     */
    function (key, date, now) {
        /** @type {?} */
        var output = this._calendar[key] || this._calendar.sameElse;
        return isFunction(output) ? output.call(null, date, now) : output;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    Locale.prototype.longDateFormat = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var format = this._longDateFormat[key];
        /** @type {?} */
        var formatUpper = this._longDateFormat[key.toUpperCase()];
        if (format || !formatUpper) {
            return format;
        }
        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });
        return this._longDateFormat[key];
    };
    Object.defineProperty(Locale.prototype, "invalidDate", {
        get: /**
         * @return {?}
         */
        function () {
            return this._invalidDate;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._invalidDate = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} num
     * @param {?=} token
     * @return {?}
     */
    Locale.prototype.ordinal = /**
     * @param {?} num
     * @param {?=} token
     * @return {?}
     */
    function (num, token) {
        return this._ordinal.replace('%d', num.toString(10));
    };
    /**
     * @param {?} str
     * @return {?}
     */
    Locale.prototype.preparse = /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        return str;
    };
    /**
     * @param {?} str
     * @return {?}
     */
    Locale.prototype.postformat = /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        return str;
    };
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} str
     * @param {?} isFuture
     * @return {?}
     */
    Locale.prototype.relativeTime = /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} str
     * @param {?} isFuture
     * @return {?}
     */
    function (num, withoutSuffix, str, isFuture) {
        /** @type {?} */
        var output = this._relativeTime[str];
        return (isFunction(output)) ?
            output(num, withoutSuffix, str, isFuture) :
            output.replace(/%d/i, num.toString(10));
    };
    /**
     * @param {?} diff
     * @param {?} output
     * @return {?}
     */
    Locale.prototype.pastFuture = /**
     * @param {?} diff
     * @param {?} output
     * @return {?}
     */
    function (diff, output) {
        /** @type {?} */
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    };
    /**
     * @param {?=} date
     * @param {?=} format
     * @param {?=} isUTC
     * @return {?}
     */
    Locale.prototype.months = /**
     * @param {?=} date
     * @param {?=} format
     * @param {?=} isUTC
     * @return {?}
     */
    function (date, format, isUTC) {
        if (isUTC === void 0) { isUTC = false; }
        if (!date) {
            return isArray(this._months)
                ? this._months
                : this._months.standalone;
        }
        if (isArray(this._months)) {
            return this._months[getMonth(date, isUTC)];
        }
        /** @type {?} */
        var key = (this._months.isFormat || MONTHS_IN_FORMAT).test(format)
            ? 'format'
            : 'standalone';
        return this._months[key][getMonth(date, isUTC)];
    };
    /**
     * @param {?=} date
     * @param {?=} format
     * @param {?=} isUTC
     * @return {?}
     */
    Locale.prototype.monthsShort = /**
     * @param {?=} date
     * @param {?=} format
     * @param {?=} isUTC
     * @return {?}
     */
    function (date, format, isUTC) {
        if (isUTC === void 0) { isUTC = false; }
        if (!date) {
            return isArray(this._monthsShort)
                ? this._monthsShort
                : this._monthsShort.standalone;
        }
        if (isArray(this._monthsShort)) {
            return this._monthsShort[getMonth(date, isUTC)];
        }
        /** @type {?} */
        var key = MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone';
        return this._monthsShort[key][getMonth(date, isUTC)];
    };
    /**
     * @param {?} monthName
     * @param {?=} format
     * @param {?=} strict
     * @return {?}
     */
    Locale.prototype.monthsParse = /**
     * @param {?} monthName
     * @param {?=} format
     * @param {?=} strict
     * @return {?}
     */
    function (monthName, format, strict) {
        /** @type {?} */
        var date;
        /** @type {?} */
        var regex;
        if (this._monthsParseExact) {
            return this.handleMonthStrictParse(monthName, format, strict);
        }
        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }
        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        /** @type {?} */
        var i;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            date = new Date(Date.UTC(2000, i));
            if (strict && !this._longMonthsParse[i]) {
                /** @type {?} */
                var _months = this.months(date, '', true).replace('.', '');
                /** @type {?} */
                var _shortMonths = this.monthsShort(date, '', true).replace('.', '');
                this._longMonthsParse[i] = new RegExp("^" + _months + "$", 'i');
                this._shortMonthsParse[i] = new RegExp("^" + _shortMonths + "$", 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = "^" + this.months(date, '', true) + "|^" + this.monthsShort(date, '', true);
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && ((/** @type {?} */ (this._longMonthsParse[i]))).test(monthName)) {
                return i;
            }
            if (strict && format === 'MMM' && ((/** @type {?} */ (this._shortMonthsParse[i]))).test(monthName)) {
                return i;
            }
            if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    };
    /**
     * @param {?} isStrict
     * @return {?}
     */
    Locale.prototype.monthsRegex = /**
     * @param {?} isStrict
     * @return {?}
     */
    function (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this.computeMonthsParse();
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            }
            return this._monthsRegex;
        }
        if (!hasOwnProp(this, '_monthsRegex')) {
            this._monthsRegex = defaultMonthsRegex;
        }
        return this._monthsStrictRegex && isStrict ?
            this._monthsStrictRegex : this._monthsRegex;
    };
    /**
     * @param {?} isStrict
     * @return {?}
     */
    Locale.prototype.monthsShortRegex = /**
     * @param {?} isStrict
     * @return {?}
     */
    function (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this.computeMonthsParse();
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            }
            return this._monthsShortRegex;
        }
        if (!hasOwnProp(this, '_monthsShortRegex')) {
            this._monthsShortRegex = defaultMonthsShortRegex;
        }
        return this._monthsShortStrictRegex && isStrict ?
            this._monthsShortStrictRegex : this._monthsShortRegex;
    };
    /** Week */
    /**
     * Week
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    Locale.prototype.week = /**
     * Week
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function (date, isUTC) {
        return weekOfYear(date, this._week.dow, this._week.doy, isUTC).week;
    };
    /**
     * @return {?}
     */
    Locale.prototype.firstDayOfWeek = /**
     * @return {?}
     */
    function () {
        return this._week.dow;
    };
    /**
     * @return {?}
     */
    Locale.prototype.firstDayOfYear = /**
     * @return {?}
     */
    function () {
        return this._week.doy;
    };
    /**
     * @param {?=} date
     * @param {?=} format
     * @param {?=} isUTC
     * @return {?}
     */
    Locale.prototype.weekdays = /**
     * @param {?=} date
     * @param {?=} format
     * @param {?=} isUTC
     * @return {?}
     */
    function (date, format, isUTC) {
        if (!date) {
            return isArray(this._weekdays)
                ? this._weekdays
                : this._weekdays.standalone;
        }
        if (isArray(this._weekdays)) {
            return this._weekdays[getDay(date, isUTC)];
        }
        /** @type {?} */
        var _key = this._weekdays.isFormat.test(format)
            ? 'format'
            : 'standalone';
        return this._weekdays[_key][getDay(date, isUTC)];
    };
    /**
     * @param {?=} date
     * @param {?=} format
     * @param {?=} isUTC
     * @return {?}
     */
    Locale.prototype.weekdaysMin = /**
     * @param {?=} date
     * @param {?=} format
     * @param {?=} isUTC
     * @return {?}
     */
    function (date, format, isUTC) {
        return date ? this._weekdaysMin[getDay(date, isUTC)] : this._weekdaysMin;
    };
    /**
     * @param {?=} date
     * @param {?=} format
     * @param {?=} isUTC
     * @return {?}
     */
    Locale.prototype.weekdaysShort = /**
     * @param {?=} date
     * @param {?=} format
     * @param {?=} isUTC
     * @return {?}
     */
    function (date, format, isUTC) {
        return date ? this._weekdaysShort[getDay(date, isUTC)] : this._weekdaysShort;
    };
    // proto.weekdaysParse  =        localeWeekdaysParse;
    // proto.weekdaysParse  =        localeWeekdaysParse;
    /**
     * @param {?=} weekdayName
     * @param {?=} format
     * @param {?=} strict
     * @return {?}
     */
    Locale.prototype.weekdaysParse = 
    // proto.weekdaysParse  =        localeWeekdaysParse;
    /**
     * @param {?=} weekdayName
     * @param {?=} format
     * @param {?=} strict
     * @return {?}
     */
    function (weekdayName, format, strict) {
        /** @type {?} */
        var i;
        /** @type {?} */
        var regex;
        if (this._weekdaysParseExact) {
            return this.handleWeekStrictParse(weekdayName, format, strict);
        }
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            // fix: here is the issue
            /** @type {?} */
            var date = setDayOfWeek(new Date(Date.UTC(2000, 1)), i, null, true);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(date, '', true).replace('.', '\.?') + "$", 'i');
                this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(date, '', true).replace('.', '\.?') + "$", 'i');
                this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(date, '', true).replace('.', '\.?') + "$", 'i');
            }
            if (!this._weekdaysParse[i]) {
                regex = "^" + this.weekdays(date, '', true) + "|^" + this.weekdaysShort(date, '', true) + "|^" + this.weekdaysMin(date, '', true);
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            if (!isArray(this._fullWeekdaysParse)
                || !isArray(this._shortWeekdaysParse)
                || !isArray(this._minWeekdaysParse)
                || !isArray(this._weekdaysParse)) {
                return;
            }
            // test the regex
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
                return i;
            }
            else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
                return i;
            }
            else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
                return i;
            }
            else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    };
    // proto.weekdaysRegex       =        weekdaysRegex;
    // proto.weekdaysRegex       =        weekdaysRegex;
    /**
     * @param {?} isStrict
     * @return {?}
     */
    Locale.prototype.weekdaysRegex = 
    // proto.weekdaysRegex       =        weekdaysRegex;
    /**
     * @param {?} isStrict
     * @return {?}
     */
    function (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this.computeWeekdaysParse();
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            }
            else {
                return this._weekdaysRegex;
            }
        }
        else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this._weekdaysRegex = matchWord;
            }
            return this._weekdaysStrictRegex && isStrict ?
                this._weekdaysStrictRegex : this._weekdaysRegex;
        }
    };
    // proto.weekdaysShortRegex  =        weekdaysShortRegex;
    // proto.weekdaysMinRegex    =        weekdaysMinRegex;
    // proto.weekdaysShortRegex  =        weekdaysShortRegex;
    // proto.weekdaysMinRegex    =        weekdaysMinRegex;
    /**
     * @param {?=} isStrict
     * @return {?}
     */
    Locale.prototype.weekdaysShortRegex = 
    // proto.weekdaysShortRegex  =        weekdaysShortRegex;
    // proto.weekdaysMinRegex    =        weekdaysMinRegex;
    /**
     * @param {?=} isStrict
     * @return {?}
     */
    function (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this.computeWeekdaysParse();
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            }
            else {
                return this._weekdaysShortRegex;
            }
        }
        else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = matchWord;
            }
            return this._weekdaysShortStrictRegex && isStrict ?
                this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
    };
    /**
     * @param {?=} isStrict
     * @return {?}
     */
    Locale.prototype.weekdaysMinRegex = /**
     * @param {?=} isStrict
     * @return {?}
     */
    function (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this.computeWeekdaysParse();
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            }
            else {
                return this._weekdaysMinRegex;
            }
        }
        else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = matchWord;
            }
            return this._weekdaysMinStrictRegex && isStrict ?
                this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
    };
    /**
     * @param {?} input
     * @return {?}
     */
    Locale.prototype.isPM = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return input.toLowerCase().charAt(0) === 'p';
    };
    /**
     * @param {?} hours
     * @param {?} minutes
     * @param {?} isLower
     * @return {?}
     */
    Locale.prototype.meridiem = /**
     * @param {?} hours
     * @param {?} minutes
     * @param {?} isLower
     * @return {?}
     */
    function (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        }
        return isLower ? 'am' : 'AM';
    };
    /**
     * @param {?} key
     * @return {?}
     */
    Locale.prototype.formatLongDate = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        this._longDateFormat = this._longDateFormat ? this._longDateFormat : defaultLongDateFormat;
        /** @type {?} */
        var format = this._longDateFormat[key];
        /** @type {?} */
        var formatUpper = this._longDateFormat[key.toUpperCase()];
        if (format || !formatUpper) {
            return format;
        }
        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });
        return this._longDateFormat[key];
    };
    /**
     * @private
     * @param {?} monthName
     * @param {?} format
     * @param {?=} strict
     * @return {?}
     */
    Locale.prototype.handleMonthStrictParse = /**
     * @private
     * @param {?} monthName
     * @param {?} format
     * @param {?=} strict
     * @return {?}
     */
    function (monthName, format, strict) {
        /** @type {?} */
        var llc = monthName.toLocaleLowerCase();
        /** @type {?} */
        var i;
        /** @type {?} */
        var ii;
        /** @type {?} */
        var mom;
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = new Date(2000, i);
                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }
        if (strict) {
            if (format === 'MMM') {
                ii = ((/** @type {?} */ (this._shortMonthsParse))).indexOf(llc);
                return ii !== -1 ? ii : null;
            }
            ii = ((/** @type {?} */ (this._longMonthsParse))).indexOf(llc);
            return ii !== -1 ? ii : null;
        }
        if (format === 'MMM') {
            ii = ((/** @type {?} */ (this._shortMonthsParse))).indexOf(llc);
            if (ii !== -1) {
                return ii;
            }
            ii = ((/** @type {?} */ (this._longMonthsParse))).indexOf(llc);
            return ii !== -1 ? ii : null;
        }
        ii = ((/** @type {?} */ (this._longMonthsParse))).indexOf(llc);
        if (ii !== -1) {
            return ii;
        }
        ii = ((/** @type {?} */ (this._shortMonthsParse))).indexOf(llc);
        return ii !== -1 ? ii : null;
    };
    /**
     * @private
     * @param {?} weekdayName
     * @param {?} format
     * @param {?} strict
     * @return {?}
     */
    Locale.prototype.handleWeekStrictParse = /**
     * @private
     * @param {?} weekdayName
     * @param {?} format
     * @param {?} strict
     * @return {?}
     */
    function (weekdayName, format, strict) {
        /** @type {?} */
        var ii;
        /** @type {?} */
        var llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];
            /** @type {?} */
            var i = void 0;
            for (i = 0; i < 7; ++i) {
                /** @type {?} */
                var date = setDayOfWeek(new Date(Date.UTC(2000, 1)), i, null, true);
                this._minWeekdaysParse[i] = this.weekdaysMin(date).toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(date).toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(date, '').toLocaleLowerCase();
            }
        }
        if (!isArray(this._weekdaysParse)
            || !isArray(this._shortWeekdaysParse)
            || !isArray(this._minWeekdaysParse)) {
            return;
        }
        if (strict) {
            if (format === 'dddd') {
                ii = this._weekdaysParse.indexOf(llc);
                return ii !== -1 ? ii : null;
            }
            else if (format === 'ddd') {
                ii = this._shortWeekdaysParse.indexOf(llc);
                return ii !== -1 ? ii : null;
            }
            else {
                ii = this._minWeekdaysParse.indexOf(llc);
                return ii !== -1 ? ii : null;
            }
        }
        else {
            if (format === 'dddd') {
                ii = this._weekdaysParse.indexOf(llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = this._shortWeekdaysParse.indexOf(llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = this._minWeekdaysParse.indexOf(llc);
                return ii !== -1 ? ii : null;
            }
            else if (format === 'ddd') {
                ii = this._shortWeekdaysParse.indexOf(llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = this._weekdaysParse.indexOf(llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = this._minWeekdaysParse.indexOf(llc);
                return ii !== -1 ? ii : null;
            }
            else {
                ii = this._minWeekdaysParse.indexOf(llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = this._weekdaysParse.indexOf(llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = this._shortWeekdaysParse.indexOf(llc);
                return ii !== -1 ? ii : null;
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    Locale.prototype.computeMonthsParse = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var shortPieces = [];
        /** @type {?} */
        var longPieces = [];
        /** @type {?} */
        var mixedPieces = [];
        /** @type {?} */
        var date;
        /** @type {?} */
        var i;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            date = new Date(2000, i);
            shortPieces.push(this.monthsShort(date, ''));
            longPieces.push(this.months(date, ''));
            mixedPieces.push(this.months(date, ''));
            mixedPieces.push(this.monthsShort(date, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }
        this._monthsRegex = new RegExp("^(" + mixedPieces.join('|') + ")", 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp("^(" + longPieces.join('|') + ")", 'i');
        this._monthsShortStrictRegex = new RegExp("^(" + shortPieces.join('|') + ")", 'i');
    };
    /**
     * @private
     * @return {?}
     */
    Locale.prototype.computeWeekdaysParse = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var minPieces = [];
        /** @type {?} */
        var shortPieces = [];
        /** @type {?} */
        var longPieces = [];
        /** @type {?} */
        var mixedPieces = [];
        /** @type {?} */
        var i;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            // let mom = createUTC([2000, 1]).day(i);
            /** @type {?} */
            var date = setDayOfWeek(new Date(Date.UTC(2000, 1)), i, null, true);
            /** @type {?} */
            var minp = this.weekdaysMin(date);
            /** @type {?} */
            var shortp = this.weekdaysShort(date);
            /** @type {?} */
            var longp = this.weekdays(date);
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 7; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }
        this._weekdaysRegex = new RegExp("^(" + mixedPieces.join('|') + ")", 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;
        this._weekdaysStrictRegex = new RegExp("^(" + longPieces.join('|') + ")", 'i');
        this._weekdaysShortStrictRegex = new RegExp("^(" + shortPieces.join('|') + ")", 'i');
        this._weekdaysMinStrictRegex = new RegExp("^(" + minPieces.join('|') + ")", 'i');
    };
    return Locale;
}());
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function cmpLenRev(a, b) {
    return b.length - a.length;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var defaultCalendar = {
    sameDay: '[Today at] LT',
    nextDay: '[Tomorrow at] LT',
    nextWeek: 'dddd [at] LT',
    lastDay: '[Yesterday at] LT',
    lastWeek: '[Last] dddd [at] LT',
    sameElse: 'L'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var defaultInvalidDate = 'Invalid date';
/** @type {?} */
var defaultLocaleWeek = {
    dow: 0,
    // Sunday is the first day of the week.
    doy: 6 // The week that contains Jan 1st is the first week of the year.
};
/** @type {?} */
var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
/** @type {?} */
var defaultRelativeTime = {
    future: 'in %s',
    past: '%s ago',
    s: 'a few seconds',
    ss: '%d seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years'
};
/** @type {?} */
var baseConfig = {
    calendar: defaultCalendar,
    longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    ordinal: defaultOrdinal,
    dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
    relativeTime: defaultRelativeTime,
    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,
    week: defaultLocaleWeek,
    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,
    meridiemParse: defaultLocaleMeridiemParse
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} array1
 * @param {?} array2
 * @param {?} dontConvert
 * @return {?}
 */
function compareArrays(array1, array2, dontConvert) {
    /** @type {?} */
    var len = Math.min(array1.length, array2.length);
    /** @type {?} */
    var lengthDiff = Math.abs(array1.length - array2.length);
    /** @type {?} */
    var diffs = 0;
    /** @type {?} */
    var i;
    for (i = 0; i < len; i++) {
        if ((dontConvert && array1[i] !== array2[i])
            || (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
            diffs++;
        }
    }
    return diffs + lengthDiff;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// FORMATTING
/**
 * @return {?}
 */
function initWeek() {
    addFormatToken('w', ['ww', 2, false], 'wo', function (date, opts) {
        return getWeek(date, opts.locale)
            .toString(10);
    });
    addFormatToken('W', ['WW', 2, false], 'Wo', function (date) {
        return getISOWeek(date)
            .toString(10);
    });
    // ALIASES
    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');
    // PARSING
    addRegexToken('w', match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W', match1to2);
    addRegexToken('WW', match1to2, match2);
    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
        return config;
    });
    // export function getSetWeek (input) {
    //   var week = this.localeData().week(this);
    //   return input == null ? week : this.add((input - week) * 7, 'd');
    // }
}
/**
 * @param {?} date
 * @param {?=} locale
 * @param {?=} isUTC
 * @return {?}
 */
function getWeek(date, locale, isUTC) {
    if (locale === void 0) { locale = getLocale(); }
    return locale.week(date, isUTC);
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getISOWeek(date, isUTC) {
    return weekOfYear(date, 1, 4, isUTC).week;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// FORMATTING
/**
 * @return {?}
 */
function initWeekYear() {
    addFormatToken(null, ['gg', 2, false], null, function (date, opts) {
        // return this.weekYear() % 100;
        return (getWeekYear(date, opts.locale) % 100).toString();
    });
    addFormatToken(null, ['GG', 2, false], null, function (date) {
        // return this.isoWeekYear() % 100;
        return (getISOWeekYear(date) % 100).toString();
    });
    addWeekYearFormatToken('gggg', _getWeekYearFormatCb);
    addWeekYearFormatToken('ggggg', _getWeekYearFormatCb);
    addWeekYearFormatToken('GGGG', _getISOWeekYearFormatCb);
    addWeekYearFormatToken('GGGGG', _getISOWeekYearFormatCb);
    // ALIASES
    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');
    // PARSING
    addRegexToken('G', matchSigned);
    addRegexToken('g', matchSigned);
    addRegexToken('GG', match1to2, match2);
    addRegexToken('gg', match1to2, match2);
    addRegexToken('GGGG', match1to4, match4);
    addRegexToken('gggg', match1to4, match4);
    addRegexToken('GGGGG', match1to6, match6);
    addRegexToken('ggggg', match1to6, match6);
    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
        return config;
    });
    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = parseTwoDigitYear(input);
        return config;
    });
}
/**
 * @param {?} token
 * @param {?} getter
 * @return {?}
 */
function addWeekYearFormatToken(token, getter) {
    addFormatToken(null, [token, token.length, false], null, getter);
}
/**
 * @param {?} date
 * @param {?} opts
 * @return {?}
 */
function _getWeekYearFormatCb(date, opts) {
    return getWeekYear(date, opts.locale).toString();
}
/**
 * @param {?} date
 * @return {?}
 */
function _getISOWeekYearFormatCb(date) {
    return getISOWeekYear(date).toString();
}
/**
 * @param {?} date
 * @param {?=} locale
 * @param {?=} isUTC
 * @return {?}
 */
function getWeekYear(date, locale, isUTC) {
    if (locale === void 0) { locale = getLocale(); }
    return weekOfYear(date, locale.firstDayOfWeek(), locale.firstDayOfYear(), isUTC).year;
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getISOWeekYear(date, isUTC) {
    return weekOfYear(date, 1, 4, isUTC).year;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// todo: add support for timezones
/**
 * @return {?}
 */
function initTimezone() {
    // FORMATTING
    addFormatToken('z', null, null, function (date, opts) {
        return opts.isUTC ? 'UTC' : '';
    });
    addFormatToken('zz', null, null, function (date, opts) {
        return opts.isUTC ? 'Coordinated Universal Time' : '';
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function initTimestamp() {
    // FORMATTING
    addFormatToken('X', null, null, function (date) {
        return unix(date)
            .toString(10);
    });
    addFormatToken('x', null, null, function (date) {
        return date.valueOf()
            .toString(10);
    });
    // PARSING
    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input) * 1000);
        return config;
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
        return config;
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function initSecond() {
    // FORMATTING
    addFormatToken('s', ['ss', 2, false], null, function (date, opts) {
        return getSeconds(date, opts.isUTC)
            .toString(10);
    });
    // ALIASES
    addUnitAlias('second', 's');
    // PARSING
    addRegexToken('s', match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function initQuarter() {
    // FORMATTING
    addFormatToken('Q', null, 'Qo', function (date, opts) {
        return getQuarter(date, opts.isUTC)
            .toString(10);
    });
    // ALIASES
    addUnitAlias('quarter', 'Q');
    // PARSING
    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array, config) {
        array[MONTH] = (toInt(input) - 1) * 3;
        return config;
    });
}
// MOMENTS
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getQuarter(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return Math.ceil((getMonth(date, isUTC) + 1) / 3);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} token
 * @param {?} separator
 * @return {?}
 */
function addOffsetFormatToken(token, separator) {
    addFormatToken(token, null, null, function (date, config) {
        /** @type {?} */
        var offset = getUTCOffset(date, { _isUTC: config.isUTC, _offset: config.offset });
        /** @type {?} */
        var sign = '+';
        if (offset < 0) {
            offset = -offset;
            sign = '-';
        }
        return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
    });
}
/**
 * @return {?}
 */
function initOffset() {
    addOffsetFormatToken('Z', ':');
    addOffsetFormatToken('ZZ', '');
    // PARSING
    addRegexToken('Z', matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
        return config;
    });
}
// HELPERS
// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
/** @type {?} */
var chunkOffset = /([\+\-]|\d\d)/gi;
/**
 * @param {?} matcher
 * @param {?} str
 * @return {?}
 */
function offsetFromString(matcher, str) {
    /** @type {?} */
    var matches = (str || '').match(matcher);
    if (matches === null) {
        return null;
    }
    /** @type {?} */
    var chunk = matches[matches.length - 1];
    /** @type {?} */
    var parts = chunk.match(chunkOffset) || ['-', '0', '0'];
    /** @type {?} */
    var minutes = parseInt(parts[1], 10) * 60 + toInt(parts[2]);
    /** @type {?} */
    var _min = parts[0] === '+' ? minutes : -minutes;
    return minutes === 0 ? 0 : _min;
}
// Return a moment from input, that is local/utc/zone equivalent to model.
/**
 * @param {?} input
 * @param {?} date
 * @param {?=} config
 * @return {?}
 */
function cloneWithOffset(input, date, config) {
    if (config === void 0) { config = {}; }
    if (!config._isUTC) {
        return input;
    }
    /** @type {?} */
    var res = cloneDate(date);
    // todo: input._d - res._d + ((res._offset || 0) - (input._offset || 0))*60000
    /** @type {?} */
    var offsetDiff = (config._offset || 0) * 60000;
    /** @type {?} */
    var diff = input.valueOf() - res.valueOf() + offsetDiff;
    // Use low-level api, because this fn is low-level api.
    res.setTime(res.valueOf() + diff);
    // todo: add timezone handling
    // hooks.updateOffset(res, false);
    return res;
}
/**
 * @param {?} date
 * @return {?}
 */
function getDateOffset(date) {
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
    // https://github.com/moment/moment/pull/1871
    return -Math.round(date.getTimezoneOffset() / 15) * 15;
}
// HOOKS
// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
// todo: it's from moment timezones
// hooks.updateOffset = function () {
// };
// MOMENTS
// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
/**
 * @param {?} date
 * @param {?=} config
 * @return {?}
 */
function getUTCOffset(date, config) {
    if (config === void 0) { config = {}; }
    /** @type {?} */
    var _offset = config._offset || 0;
    return config._isUTC ? _offset : getDateOffset(date);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function initMinute() {
    // FORMATTING
    addFormatToken('m', ['mm', 2, false], null, function (date, opts) {
        return getMinutes(date, opts.isUTC)
            .toString(10);
    });
    // ALIASES
    addUnitAlias('minute', 'm');
    // PARSING
    addRegexToken('m', match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function initMillisecond() {
    addFormatToken('S', null, null, function (date, opts) {
        return (~~(getMilliseconds(date, opts.isUTC) / 100)).toString(10);
    });
    addFormatToken(null, ['SS', 2, false], null, function (date, opts) {
        return (~~(getMilliseconds(date, opts.isUTC) / 10)).toString(10);
    });
    addFormatToken(null, ['SSS', 3, false], null, function (date, opts) {
        return (getMilliseconds(date, opts.isUTC)).toString(10);
    });
    addFormatToken(null, ['SSSS', 4, false], null, function (date, opts) {
        return (getMilliseconds(date, opts.isUTC) * 10).toString(10);
    });
    addFormatToken(null, ['SSSSS', 5, false], null, function (date, opts) {
        return (getMilliseconds(date, opts.isUTC) * 100).toString(10);
    });
    addFormatToken(null, ['SSSSSS', 6, false], null, function (date, opts) {
        return (getMilliseconds(date, opts.isUTC) * 1000).toString(10);
    });
    addFormatToken(null, ['SSSSSSS', 7, false], null, function (date, opts) {
        return (getMilliseconds(date, opts.isUTC) * 10000).toString(10);
    });
    addFormatToken(null, ['SSSSSSSS', 8, false], null, function (date, opts) {
        return (getMilliseconds(date, opts.isUTC) * 100000).toString(10);
    });
    addFormatToken(null, ['SSSSSSSSS', 9, false], null, function (date, opts) {
        return (getMilliseconds(date, opts.isUTC) * 1000000).toString(10);
    });
    // ALIASES
    addUnitAlias('millisecond', 'ms');
    // PARSING
    addRegexToken('S', match1to3, match1);
    addRegexToken('SS', match1to3, match2);
    addRegexToken('SSS', match1to3, match3);
    /** @type {?} */
    var token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }
    /**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */
    function parseMs(input, array, config) {
        array[MILLISECOND] = toInt(parseFloat("0." + input) * 1000);
        return config;
    }
    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }
    // MOMENTS
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function initHour() {
    // FORMATTING
    // FORMATTING
    /**
     * @param {?} date
     * @param {?} isUTC
     * @return {?}
     */
    function hFormat(date, isUTC) {
        return getHours(date, isUTC) % 12 || 12;
    }
    /**
     * @param {?} date
     * @param {?} isUTC
     * @return {?}
     */
    function kFormat(date, isUTC) {
        return getHours(date, isUTC) || 24;
    }
    addFormatToken('H', ['HH', 2, false], null, function (date, opts) {
        return getHours(date, opts.isUTC)
            .toString(10);
    });
    addFormatToken('h', ['hh', 2, false], null, function (date, opts) {
        return hFormat(date, opts.isUTC)
            .toString(10);
    });
    addFormatToken('k', ['kk', 2, false], null, function (date, opts) {
        return kFormat(date, opts.isUTC)
            .toString(10);
    });
    addFormatToken('hmm', null, null, function (date, opts) {
        /** @type {?} */
        var _h = hFormat(date, opts.isUTC);
        /** @type {?} */
        var _mm = zeroFill(getMinutes(date, opts.isUTC), 2);
        return "" + _h + _mm;
    });
    addFormatToken('hmmss', null, null, function (date, opts) {
        /** @type {?} */
        var _h = hFormat(date, opts.isUTC);
        /** @type {?} */
        var _mm = zeroFill(getMinutes(date, opts.isUTC), 2);
        /** @type {?} */
        var _ss = zeroFill(getSeconds(date, opts.isUTC), 2);
        return "" + _h + _mm + _ss;
    });
    addFormatToken('Hmm', null, null, function (date, opts) {
        /** @type {?} */
        var _H = getHours(date, opts.isUTC);
        /** @type {?} */
        var _mm = zeroFill(getMinutes(date, opts.isUTC), 2);
        return "" + _H + _mm;
    });
    addFormatToken('Hmmss', null, null, function (date, opts) {
        /** @type {?} */
        var _H = getHours(date, opts.isUTC);
        /** @type {?} */
        var _mm = zeroFill(getMinutes(date, opts.isUTC), 2);
        /** @type {?} */
        var _ss = zeroFill(getSeconds(date, opts.isUTC), 2);
        return "" + _H + _mm + _ss;
    });
    /**
     * @param {?} token
     * @param {?} lowercase
     * @return {?}
     */
    function meridiem(token, lowercase) {
        addFormatToken(token, null, null, function (date, opts) {
            return opts.locale.meridiem(getHours(date, opts.isUTC), getMinutes(date, opts.isUTC), lowercase);
        });
    }
    meridiem('a', true);
    meridiem('A', false);
    // ALIASES
    addUnitAlias('hour', 'h');
    // PARSING
    /**
     * @param {?} isStrict
     * @param {?} locale
     * @return {?}
     */
    function matchMeridiem(isStrict, locale) {
        return locale._meridiemParse;
    }
    addRegexToken('a', matchMeridiem);
    addRegexToken('A', matchMeridiem);
    addRegexToken('H', match1to2);
    addRegexToken('h', match1to2);
    addRegexToken('k', match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);
    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);
    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], function (input, array, config) {
        /** @type {?} */
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
        return config;
    });
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
        return config;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
        return config;
    });
    addParseToken('hmm', function (input, array, config) {
        /** @type {?} */
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
        return config;
    });
    addParseToken('hmmss', function (input, array, config) {
        /** @type {?} */
        var pos1 = input.length - 4;
        /** @type {?} */
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
        return config;
    });
    addParseToken('Hmm', function (input, array, config) {
        /** @type {?} */
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        return config;
    });
    addParseToken('Hmmss', function (input, array, config) {
        /** @type {?} */
        var pos1 = input.length - 4;
        /** @type {?} */
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        return config;
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var locales = {};
/** @type {?} */
var localeFamilies = {};
/** @type {?} */
var globalLocale;
/**
 * @param {?} key
 * @return {?}
 */
function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
}
// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least,
// but move to the next array item if it's a more specific variant than the current root
/**
 * @param {?} names
 * @return {?}
 */
function chooseLocale(names) {
    /** @type {?} */
    var next;
    /** @type {?} */
    var locale;
    /** @type {?} */
    var i = 0;
    while (i < names.length) {
        /** @type {?} */
        var split = normalizeLocale(names[i]).split('-');
        /** @type {?} */
        var j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split('-') : null;
        while (j > 0) {
            locale = loadLocale(split.slice(0, j).join('-'));
            if (locale) {
                return locale;
            }
            if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                // the next array item is better than a shallower substring of this one
                break;
            }
            j--;
        }
        i++;
    }
    return null;
}
/**
 * @param {?} parentConfig
 * @param {?} childConfig
 * @return {?}
 */
function mergeConfigs(parentConfig, childConfig) {
    /** @type {?} */
    var res = Object.assign({}, parentConfig);
    for (var childProp in childConfig) {
        if (!hasOwnProp(childConfig, childProp)) {
            continue;
        }
        if (isObject(parentConfig[childProp]) && isObject(childConfig[childProp])) {
            res[childProp] = {};
            Object.assign(res[childProp], parentConfig[childProp]);
            Object.assign(res[childProp], childConfig[childProp]);
        }
        else if (childConfig[childProp] != null) {
            res[childProp] = childConfig[childProp];
        }
        else {
            delete res[childProp];
        }
    }
    /** @type {?} */
    var parentProp;
    for (parentProp in parentConfig) {
        if (hasOwnProp(parentConfig, parentProp) &&
            !hasOwnProp(childConfig, parentProp) &&
            isObject(parentConfig[(/** @type {?} */ (parentProp))])) {
            // make sure changes to properties don't modify parent config
            res[(/** @type {?} */ (parentProp))] = Object.assign({}, res[(/** @type {?} */ (parentProp))]);
        }
    }
    return res;
}
/**
 * @param {?} name
 * @return {?}
 */
function loadLocale(name) {
    // no way!
    /* var oldLocale = null;
     // TODO: Find a better way to register and load all the locales in Node
     if (!locales[name] && (typeof module !== 'undefined') &&
       module && module.exports) {
       try {
         oldLocale = globalLocale._abbr;
         var aliasedRequire = require;
         aliasedRequire('./locale/' + name);
         getSetGlobalLocale(oldLocale);
       } catch (e) {}
     }*/
    if (!locales[name]) {
        // tslint:disable-next-line
        console.error("Khronos locale error: please load locale \"" + name + "\" before using it");
        // throw new Error(`Khronos locale error: please load locale "${name}" before using it`);
    }
    return locales[name];
}
// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
/**
 * @param {?=} key
 * @param {?=} values
 * @return {?}
 */
function getSetGlobalLocale(key, values) {
    /** @type {?} */
    var data;
    if (key) {
        if (isUndefined(values)) {
            data = getLocale(key);
        }
        else if (isString(key)) {
            data = defineLocale(key, values);
        }
        if (data) {
            globalLocale = data;
        }
    }
    return globalLocale && globalLocale._abbr;
}
/**
 * @param {?} name
 * @param {?=} config
 * @return {?}
 */
function defineLocale(name, config) {
    if (config === null) {
        // useful for testing
        delete locales[name];
        globalLocale = getLocale('en');
        return null;
    }
    if (!config) {
        return;
    }
    /** @type {?} */
    var parentConfig = baseConfig;
    config.abbr = name;
    if (config.parentLocale != null) {
        if (locales[config.parentLocale] != null) {
            parentConfig = locales[config.parentLocale]._config;
        }
        else {
            if (!localeFamilies[config.parentLocale]) {
                localeFamilies[config.parentLocale] = [];
            }
            localeFamilies[config.parentLocale].push({ name: name, config: config });
            return null;
        }
    }
    locales[name] = new Locale(mergeConfigs(parentConfig, config));
    if (localeFamilies[name]) {
        localeFamilies[name].forEach(function (x) {
            defineLocale(x.name, x.config);
        });
    }
    // backwards compat for now: also set the locale
    // make sure we set the locale AFTER all child locales have been
    // created, so we won't end up with the child locale set.
    getSetGlobalLocale(name);
    return locales[name];
}
/**
 * @param {?} name
 * @param {?=} config
 * @return {?}
 */
function updateLocale(name, config) {
    /** @type {?} */
    var _config = config;
    if (_config != null) {
        /** @type {?} */
        var parentConfig = baseConfig;
        // MERGE
        /** @type {?} */
        var tmpLocale = loadLocale(name);
        if (tmpLocale != null) {
            parentConfig = tmpLocale._config;
        }
        _config = mergeConfigs(parentConfig, _config);
        /** @type {?} */
        var locale = new Locale(_config);
        locale.parentLocale = locales[name];
        locales[name] = locale;
        // backwards compat for now: also set the locale
        getSetGlobalLocale(name);
    }
    else {
        // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
            }
            else if (locales[name] != null) {
                delete locales[name];
            }
        }
    }
    return locales[name];
}
// returns locale data
/**
 * @param {?=} key
 * @return {?}
 */
function getLocale(key) {
    setDefaultLocale();
    if (!key) {
        return globalLocale;
    }
    // let locale;
    /** @type {?} */
    var _key = isArray(key) ? key : [key];
    return chooseLocale(_key);
}
/**
 * @return {?}
 */
function listLocales() {
    return Object.keys(locales);
}
/**
 * @return {?}
 */
function setDefaultLocale() {
    if (locales["en"]) {
        return undefined;
    }
    getSetGlobalLocale('en', {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: /**
         * @param {?} num
         * @return {?}
         */
        function (num) {
            /** @type {?} */
            var b = num % 10;
            /** @type {?} */
            var output = toInt((num % 100) / 10) === 1
                ? 'th'
                : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
            return num + output;
        }
    });
    initWeek();
    initWeekYear();
    initYear();
    initTimezone();
    initTimestamp();
    initSecond();
    initQuarter();
    initOffset();
    initMonth();
    initMinute();
    initMillisecond();
    initHour();
    initDayOfYear();
    initDayOfWeek();
    initDayOfMonth();
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hours', 'minutes', 'seconds', 'milliseconds'];
var ɵ0 = function (mem, order) {
    mem[order] = true;
    return mem;
};
/** @type {?} */
var orderingHash = ordering.reduce(ɵ0, {});
/**
 * @param {?} duration
 * @return {?}
 */
function isDurationValid(duration) {
    /** @type {?} */
    var durationKeys = Object.keys(duration);
    if (durationKeys
        .some(function (key) {
        return (key in orderingHash)
            && duration[key] === null
            || isNaN(duration[key]);
    })) {
        return false;
    }
    // for (let key in duration) {
    //   if (!(indexOf.call(ordering, key) !== -1 && (duration[key] == null || !isNaN(duration[key])))) {
    //     return false;
    //   }
    // }
    /** @type {?} */
    var unitHasDecimal = false;
    for (var i = 0; i < ordering.length; ++i) {
        if (duration[ordering[i]]) {
            // only allow non-integers for smallest unit
            if (unitHasDecimal) {
                return false;
            }
            if (duration[ordering[i]] !== toInt(duration[ordering[i]])) {
                unitHasDecimal = true;
            }
        }
    }
    return true;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} number
 * @return {?}
 */
function absCeil(number) {
    return number < 0 ? Math.floor(number) : Math.ceil(number);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} dur
 * @return {?}
 */
function bubble(dur) {
    /** @type {?} */
    var milliseconds = dur._milliseconds;
    /** @type {?} */
    var days = dur._days;
    /** @type {?} */
    var months = dur._months;
    /** @type {?} */
    var data = dur._data;
    // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166
    if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
        (milliseconds <= 0 && days <= 0 && months <= 0))) {
        milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
    }
    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;
    /** @type {?} */
    var seconds = absFloor(milliseconds / 1000);
    data.seconds = seconds % 60;
    /** @type {?} */
    var minutes = absFloor(seconds / 60);
    data.minutes = minutes % 60;
    /** @type {?} */
    var hours = absFloor(minutes / 60);
    data.hours = hours % 24;
    days += absFloor(hours / 24);
    // convert days to months
    /** @type {?} */
    var monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays));
    // 12 months -> 1 year
    /** @type {?} */
    var years = absFloor(months / 12);
    months %= 12;
    data.day = days;
    data.month = months;
    data.year = years;
    return dur;
}
/**
 * @param {?} day
 * @return {?}
 */
function daysToMonths(day) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return day * 4800 / 146097;
}
/**
 * @param {?} month
 * @return {?}
 */
function monthsToDays(month) {
    // the reverse of daysToMonths
    return month * 146097 / 4800;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var round = Math.round;
/** @type {?} */
var thresholds = {
    ss: 44,
    // a few seconds to seconds
    s: 45,
    // seconds to minute
    m: 45,
    // minutes to hour
    h: 22,
    // hours to day
    d: 26,
    // days to month
    M: 11 // months to year
};
// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
/**
 * @param {?} str
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} isFuture
 * @param {?} locale
 * @return {?}
 */
function substituteTimeAgo(str, num, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(num || 1, !!withoutSuffix, str, isFuture);
}
/**
 * @param {?} posNegDuration
 * @param {?} withoutSuffix
 * @param {?} locale
 * @return {?}
 */
function relativeTime(posNegDuration, withoutSuffix, locale) {
    /** @type {?} */
    var duration = createDuration(posNegDuration).abs();
    /** @type {?} */
    var seconds = round(duration.as('s'));
    /** @type {?} */
    var minutes = round(duration.as('m'));
    /** @type {?} */
    var hours = round(duration.as('h'));
    /** @type {?} */
    var days = round(duration.as('d'));
    /** @type {?} */
    var months = round(duration.as('M'));
    /** @type {?} */
    var years = round(duration.as('y'));
    /** @type {?} */
    var a = seconds <= thresholds.ss && ['s', seconds] ||
        seconds < thresholds.s && ['ss', seconds] ||
        minutes <= 1 && ['m'] ||
        minutes < thresholds.m && ['mm', minutes] ||
        hours <= 1 && ['h'] ||
        hours < thresholds.h && ['hh', hours] ||
        days <= 1 && ['d'] ||
        days < thresholds.d && ['dd', days] ||
        months <= 1 && ['M'] ||
        months < thresholds.M && ['MM', months] ||
        years <= 1 && ['y'] || ['yy', years];
    /** @type {?} */
    var b = [a[0], a[1], withoutSuffix, +posNegDuration > 0, locale];
    // a[2] = withoutSuffix;
    // a[3] = +posNegDuration > 0;
    // a[4] = locale;
    return substituteTimeAgo.apply(null, b);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Duration = /** @class */ (function () {
    function Duration(duration, config) {
        if (config === void 0) { config = {}; }
        this._data = {};
        this._locale = getLocale();
        this._locale = config && config._locale || getLocale();
        // const normalizedInput = normalizeObjectUnits(duration);
        /** @type {?} */
        var normalizedInput = duration;
        /** @type {?} */
        var years = normalizedInput.year || 0;
        /** @type {?} */
        var quarters = normalizedInput.quarter || 0;
        /** @type {?} */
        var months = normalizedInput.month || 0;
        /** @type {?} */
        var weeks = normalizedInput.week || 0;
        /** @type {?} */
        var days = normalizedInput.day || 0;
        /** @type {?} */
        var hours = normalizedInput.hours || 0;
        /** @type {?} */
        var minutes = normalizedInput.minutes || 0;
        /** @type {?} */
        var seconds = normalizedInput.seconds || 0;
        /** @type {?} */
        var milliseconds = normalizedInput.milliseconds || 0;
        this._isValid = isDurationValid(normalizedInput);
        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1000 +
            minutes * 60 * 1000 + // 1000 * 60
            hours * 1000 * 60 * 60; // using 1000 * 60 * 60
        // instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;
        // this._data = {};
        // this._locale = getLocale();
        // this._bubble();
        return bubble(this);
    }
    /**
     * @return {?}
     */
    Duration.prototype.isValid = /**
     * @return {?}
     */
    function () {
        return this._isValid;
    };
    /**
     * @param {?=} withSuffix
     * @return {?}
     */
    Duration.prototype.humanize = /**
     * @param {?=} withSuffix
     * @return {?}
     */
    function (withSuffix) {
        // throw new Error(`TODO: implement`);
        if (!this.isValid()) {
            return this.localeData().invalidDate;
        }
        /** @type {?} */
        var locale = this.localeData();
        /** @type {?} */
        var output = relativeTime(this, !withSuffix, locale);
        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }
        return locale.postformat(output);
    };
    /**
     * @return {?}
     */
    Duration.prototype.localeData = /**
     * @return {?}
     */
    function () {
        return this._locale;
    };
    /**
     * @param {?=} localeKey
     * @return {?}
     */
    Duration.prototype.locale = /**
     * @param {?=} localeKey
     * @return {?}
     */
    function (localeKey) {
        if (!localeKey) {
            return this._locale._abbr;
        }
        this._locale = getLocale(localeKey) || this._locale;
        return this;
    };
    /**
     * @return {?}
     */
    Duration.prototype.abs = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var mathAbs = Math.abs;
        /** @type {?} */
        var data = this._data;
        this._milliseconds = mathAbs(this._milliseconds);
        this._days = mathAbs(this._days);
        this._months = mathAbs(this._months);
        data.milliseconds = mathAbs(data.milliseconds);
        data.seconds = mathAbs(data.seconds);
        data.minutes = mathAbs(data.minutes);
        data.hours = mathAbs(data.hours);
        data.month = mathAbs(data.month);
        data.year = mathAbs(data.year);
        return this;
    };
    /**
     * @param {?} _units
     * @return {?}
     */
    Duration.prototype.as = /**
     * @param {?} _units
     * @return {?}
     */
    function (_units) {
        if (!this.isValid()) {
            return NaN;
        }
        /** @type {?} */
        var days;
        /** @type {?} */
        var months;
        /** @type {?} */
        var milliseconds = this._milliseconds;
        /** @type {?} */
        var units = normalizeUnits(_units);
        if (units === 'month' || units === 'year') {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            return units === 'month' ? months : months / 12;
        }
        // handle milliseconds separately because of floating point math errors (issue #1867)
        days = this._days + Math.round(monthsToDays(this._months));
        switch (units) {
            case 'week':
                return days / 7 + milliseconds / 6048e5;
            case 'day':
                return days + milliseconds / 864e5;
            case 'hours':
                return days * 24 + milliseconds / 36e5;
            case 'minutes':
                return days * 1440 + milliseconds / 6e4;
            case 'seconds':
                return days * 86400 + milliseconds / 1000;
            // Math.floor prevents floating point math errors here
            case 'milliseconds':
                return Math.floor(days * 864e5) + milliseconds;
            default:
                throw new Error("Unknown unit " + units);
        }
    };
    /**
     * @return {?}
     */
    Duration.prototype.valueOf = /**
     * @return {?}
     */
    function () {
        if (!this.isValid()) {
            return NaN;
        }
        return (this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6);
    };
    return Duration;
}());
/**
 * @param {?} obj
 * @return {?}
 */
function isDuration(obj) {
    return obj instanceof Duration;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} config
 * @return {?}
 */
function isValid(config) {
    if (config._isValid == null) {
        /** @type {?} */
        var flags = getParsingFlags(config);
        /** @type {?} */
        var parsedParts = Array.prototype.some.call(flags.parsedDateParts, function (i) {
            return i != null;
        });
        /** @type {?} */
        var isNowValid = !isNaN(config._d && config._d.getTime()) &&
            flags.overflow < 0 &&
            !flags.empty &&
            !flags.invalidMonth &&
            !flags.invalidWeekday &&
            !flags.weekdayMismatch &&
            !flags.nullInput &&
            !flags.invalidFormat &&
            !flags.userInvalidated &&
            (!flags.meridiem || (flags.meridiem && parsedParts));
        if (config._strict) {
            isNowValid = isNowValid &&
                flags.charsLeftOver === 0 &&
                flags.unusedTokens.length === 0 &&
                flags.bigHour === undefined;
        }
        if (Object.isFrozen == null || !Object.isFrozen(config)) {
            config._isValid = isNowValid;
        }
        else {
            return isNowValid;
        }
    }
    return config._isValid;
}
/**
 * @param {?} config
 * @param {?=} flags
 * @return {?}
 */
function createInvalid(config, flags) {
    config._d = new Date(NaN);
    Object.assign(getParsingFlags(config), flags || { userInvalidated: true });
    return config;
}
/**
 * @param {?} config
 * @return {?}
 */
function markInvalid(config) {
    config._isValid = false;
    return config;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// iso 8601 regex
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
// tslint:disable-next-line
/** @type {?} */
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
// tslint:disable-next-line
/** @type {?} */
var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
/** @type {?} */
var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;
/** @type {?} */
var isoDates = [
    ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/, true],
    ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/, true],
    ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/, true],
    ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
    ['YYYY-DDD', /\d{4}-\d{3}/, true],
    ['YYYY-MM', /\d{4}-\d\d/, false],
    ['YYYYYYMMDD', /[+-]\d{10}/, true],
    ['YYYYMMDD', /\d{8}/, true],
    // YYYYMM is NOT allowed by the standard
    ['GGGG[W]WWE', /\d{4}W\d{3}/, true],
    ['GGGG[W]WW', /\d{4}W\d{2}/, false],
    ['YYYYDDD', /\d{7}/, true]
];
// iso time formats and regexes
/** @type {?} */
var isoTimes = [
    ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
    ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
    ['HH:mm:ss', /\d\d:\d\d:\d\d/],
    ['HH:mm', /\d\d:\d\d/],
    ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
    ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
    ['HHmmss', /\d\d\d\d\d\d/],
    ['HHmm', /\d\d\d\d/],
    ['HH', /\d\d/]
];
/** @type {?} */
var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;
/** @type {?} */
var obsOffsets = {
    UT: 0,
    GMT: 0,
    EDT: -4 * 60,
    EST: -5 * 60,
    CDT: -5 * 60,
    CST: -6 * 60,
    MDT: -6 * 60,
    MST: -7 * 60,
    PDT: -7 * 60,
    PST: -8 * 60
};
// RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
// tslint:disable-next-line
/** @type {?} */
var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
// date from iso format
/**
 * @param {?} config
 * @return {?}
 */
function configFromISO(config) {
    if (!isString(config._i)) {
        return config;
    }
    /** @type {?} */
    var input = config._i;
    /** @type {?} */
    var match = extendedIsoRegex.exec(input) || basicIsoRegex.exec(input);
    /** @type {?} */
    var allowTime;
    /** @type {?} */
    var dateFormat;
    /** @type {?} */
    var timeFormat;
    /** @type {?} */
    var tzFormat;
    if (!match) {
        config._isValid = false;
        return config;
    }
    // getParsingFlags(config).iso = true;
    /** @type {?} */
    var i;
    /** @type {?} */
    var l;
    for (i = 0, l = isoDates.length; i < l; i++) {
        if (isoDates[i][1].exec(match[1])) {
            dateFormat = isoDates[i][0];
            allowTime = isoDates[i][2] !== false;
            break;
        }
    }
    if (dateFormat == null) {
        config._isValid = false;
        return config;
    }
    if (match[3]) {
        for (i = 0, l = isoTimes.length; i < l; i++) {
            if (isoTimes[i][1].exec(match[3])) {
                // match[2] should be 'T' or space
                timeFormat = (match[2] || ' ') + isoTimes[i][0];
                break;
            }
        }
        if (timeFormat == null) {
            config._isValid = false;
            return config;
        }
    }
    if (!allowTime && timeFormat != null) {
        config._isValid = false;
        return config;
    }
    if (match[4]) {
        if (tzRegex.exec(match[4])) {
            tzFormat = 'Z';
        }
        else {
            config._isValid = false;
            return config;
        }
    }
    config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
    return configFromStringAndFormat(config);
}
// tslint:disable-next-line
/**
 * @param {?} yearStr
 * @param {?} monthStr
 * @param {?} dayStr
 * @param {?} hourStr
 * @param {?} minuteStr
 * @param {?} secondStr
 * @return {?}
 */
function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
    /** @type {?} */
    var result = [
        untruncateYear(yearStr),
        defaultLocaleMonthsShort.indexOf(monthStr),
        parseInt(dayStr, 10),
        parseInt(hourStr, 10),
        parseInt(minuteStr, 10)
    ];
    if (secondStr) {
        result.push(parseInt(secondStr, 10));
    }
    return result;
}
/**
 * @param {?} yearStr
 * @return {?}
 */
function untruncateYear(yearStr) {
    /** @type {?} */
    var year = parseInt(yearStr, 10);
    return year <= 49 ? year + 2000 : year;
}
/**
 * @param {?} str
 * @return {?}
 */
function preprocessRFC2822(str) {
    // Remove comments and folding whitespace and replace multiple-spaces with a single space
    return str
        .replace(/\([^)]*\)|[\n\t]/g, ' ')
        .replace(/(\s\s+)/g, ' ').trim();
}
/**
 * @param {?} weekdayStr
 * @param {?} parsedInput
 * @param {?} config
 * @return {?}
 */
function checkWeekday(weekdayStr, parsedInput, config) {
    if (weekdayStr) {
        // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
        /** @type {?} */
        var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr);
        /** @type {?} */
        var weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
        if (weekdayProvided !== weekdayActual) {
            getParsingFlags(config).weekdayMismatch = true;
            config._isValid = false;
            return false;
        }
    }
    return true;
}
/**
 * @param {?} obsOffset
 * @param {?} militaryOffset
 * @param {?} numOffset
 * @return {?}
 */
function calculateOffset(obsOffset, militaryOffset, numOffset) {
    if (obsOffset) {
        return obsOffsets[obsOffset];
    }
    else if (militaryOffset) {
        // the only allowed military tz is Z
        return 0;
    }
    else {
        /** @type {?} */
        var hm = parseInt(numOffset, 10);
        /** @type {?} */
        var m = hm % 100;
        /** @type {?} */
        var h = (hm - m) / 100;
        return h * 60 + m;
    }
}
// date and time from ref 2822 format
/**
 * @param {?} config
 * @return {?}
 */
function configFromRFC2822(config) {
    if (!isString(config._i)) {
        return config;
    }
    /** @type {?} */
    var match = rfc2822.exec(preprocessRFC2822(config._i));
    if (!match) {
        return markInvalid(config);
    }
    /** @type {?} */
    var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
    if (!checkWeekday(match[1], parsedArray, config)) {
        return config;
    }
    config._a = parsedArray;
    config._tzm = calculateOffset(match[8], match[9], match[10]);
    config._d = createUTCDate.apply(null, config._a);
    config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    getParsingFlags(config).rfc2822 = true;
    return config;
}
// date from iso format or fallback
/**
 * @param {?} config
 * @return {?}
 */
function configFromString(config) {
    if (!isString(config._i)) {
        return config;
    }
    /** @type {?} */
    var matched = aspNetJsonRegex.exec(config._i);
    if (matched !== null) {
        config._d = new Date(+matched[1]);
        return config;
    }
    // todo: update logic processing
    // isISO -> configFromISO
    // isRFC -> configFromRFC
    configFromISO(config);
    if (config._isValid === false) {
        delete config._isValid;
    }
    else {
        return config;
    }
    configFromRFC2822(config);
    if (config._isValid === false) {
        delete config._isValid;
    }
    else {
        return config;
    }
    // Final attempt, use Input Fallback
    // hooks.createFromInputFallback(config);
    return createInvalid(config);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} date
 * @param {?} format
 * @param {?=} locale
 * @param {?=} isUTC
 * @param {?=} offset
 * @return {?}
 */
function formatDate(date, format, locale, isUTC, offset) {
    if (offset === void 0) { offset = 0; }
    /** @type {?} */
    var _locale = getLocale(locale || 'en');
    if (!_locale) {
        throw new Error("Locale \"" + locale + "\" is not defined, please add it with \"defineLocale(...)\"");
    }
    /** @type {?} */
    var _format = format || (isUTC ? 'YYYY-MM-DDTHH:mm:ss[Z]' : 'YYYY-MM-DDTHH:mm:ssZ');
    /** @type {?} */
    var output = formatMoment(date, _format, _locale, isUTC, offset);
    if (!output) {
        return output;
    }
    return _locale.postformat(output);
}
// format date using native date object
/**
 * @param {?} date
 * @param {?} _format
 * @param {?} locale
 * @param {?=} isUTC
 * @param {?=} offset
 * @return {?}
 */
function formatMoment(date, _format, locale, isUTC, offset) {
    if (offset === void 0) { offset = 0; }
    if (!isDateValid(date)) {
        return locale.invalidDate;
    }
    /** @type {?} */
    var format = expandFormat(_format, locale);
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
    return formatFunctions[format](date, locale, isUTC, offset);
}
/**
 * @param {?} _format
 * @param {?} locale
 * @return {?}
 */
function expandFormat(_format, locale) {
    /** @type {?} */
    var format = _format;
    /** @type {?} */
    var i = 5;
    /** @type {?} */
    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
    /** @type {?} */
    var replaceLongDateFormatTokens = function (input) {
        return locale.formatLongDate(input) || input;
    };
    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        localFormattingTokens.lastIndex = 0;
        i -= 1;
    }
    return format;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Pick the first defined of two or three arguments.
/**
 * @template T
 * @param {?=} a
 * @param {?=} b
 * @param {?=} c
 * @return {?}
 */
function defaults(a, b, c) {
    if (a != null) {
        return a;
    }
    if (b != null) {
        return b;
    }
    return c;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} config
 * @return {?}
 */
function currentDateArray(config) {
    /** @type {?} */
    var nowValue = new Date();
    if (config._useUTC) {
        return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
}
// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
/**
 * @param {?} config
 * @return {?}
 */
function configFromArray(config) {
    /** @type {?} */
    var input = [];
    /** @type {?} */
    var i;
    /** @type {?} */
    var date;
    /** @type {?} */
    var currentDate;
    /** @type {?} */
    var expectedWeekday;
    /** @type {?} */
    var yearToUse;
    if (config._d) {
        return config;
    }
    currentDate = currentDateArray(config);
    // compute day of the year from weeks and weekdays
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
        dayOfYearFromWeekInfo(config);
    }
    // if the day of the year is set, figure out what it is
    if (config._dayOfYear != null) {
        yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
        if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
            getParsingFlags(config)._overflowDayOfYear = true;
        }
        date = new Date(Date.UTC(yearToUse, 0, config._dayOfYear));
        config._a[MONTH] = date.getUTCMonth();
        config._a[DATE] = date.getUTCDate();
    }
    // Default to current date.
    // * if no year, month, day of month are given, default to today
    // * if day of month is given, default month and year
    // * if month is given, default only year
    // * if year is given, don't default anything
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
        config._a[i] = input[i] = currentDate[i];
    }
    // Zero out whatever was not defaulted, including time
    for (; i < 7; i++) {
        config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
    }
    // Check for 24:00:00.000
    if (config._a[HOUR] === 24 &&
        config._a[MINUTE] === 0 &&
        config._a[SECOND] === 0 &&
        config._a[MILLISECOND] === 0) {
        config._nextDay = true;
        config._a[HOUR] = 0;
    }
    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
    expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
    // Apply timezone offset from input. The actual utcOffset can be changed
    // with parseZone.
    if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }
    if (config._nextDay) {
        config._a[HOUR] = 24;
    }
    // check for mismatching day of week
    if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
        getParsingFlags(config).weekdayMismatch = true;
    }
    return config;
}
/**
 * @param {?} config
 * @return {?}
 */
function dayOfYearFromWeekInfo(config) {
    /** @type {?} */
    var w;
    /** @type {?} */
    var weekYear;
    /** @type {?} */
    var week;
    /** @type {?} */
    var weekday;
    /** @type {?} */
    var dow;
    /** @type {?} */
    var doy;
    /** @type {?} */
    var temp;
    /** @type {?} */
    var weekdayOverflow;
    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
        dow = 1;
        doy = 4;
        // TODO: We need to take the current isoWeekYear, but that depends on
        // how we interpret now (local, utc, fixed offset). So create
        // a now version of current config (take local/utc/offset flags, and
        // create now).
        weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(new Date(), 1, 4).year);
        week = defaults(w.W, 1);
        weekday = defaults(w.E, 1);
        if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
        }
    }
    else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;
        /** @type {?} */
        var curWeek = weekOfYear(new Date(), dow, doy);
        weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);
        // Default to current week.
        week = defaults(w.w, curWeek.week);
        if (w.d != null) {
            // weekday -- low day numbers are considered next week
            weekday = w.d;
            if (weekday < 0 || weekday > 6) {
                weekdayOverflow = true;
            }
        }
        else if (w.e != null) {
            // local weekday -- counting starts from begining of week
            weekday = w.e + dow;
            if (w.e < 0 || w.e > 6) {
                weekdayOverflow = true;
            }
        }
        else {
            // default to begining of week
            weekday = dow;
        }
    }
    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
        getParsingFlags(config)._overflowWeeks = true;
    }
    else if (weekdayOverflow != null) {
        getParsingFlags(config)._overflowWeekday = true;
    }
    else {
        temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }
    return config;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} config
 * @return {?}
 */
function checkOverflow(config) {
    /** @type {?} */
    var overflow;
    /** @type {?} */
    var a = config._a;
    if (a && getParsingFlags(config).overflow === -2) {
        // todo: fix this sh*t
        overflow =
            a[MONTH] < 0 || a[MONTH] > 11 ? MONTH :
                a[DATE] < 1 || a[DATE] > daysInMonth$1(a[YEAR], a[MONTH]) ? DATE :
                    a[HOUR] < 0 || a[HOUR] > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                        a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE :
                            a[SECOND] < 0 || a[SECOND] > 59 ? SECOND :
                                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
                                    -1;
        if (getParsingFlags(config)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
            overflow = DATE;
        }
        if (getParsingFlags(config)._overflowWeeks && overflow === -1) {
            overflow = WEEK;
        }
        if (getParsingFlags(config)._overflowWeekday && overflow === -1) {
            overflow = WEEKDAY;
        }
        getParsingFlags(config).overflow = overflow;
    }
    return config;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// constant that refers to the ISO standard
// hooks.ISO_8601 = function () {};
/** @type {?} */
var ISO_8601 = 'ISO_8601';
// constant that refers to the RFC 2822 form
// hooks.RFC_2822 = function () {};
/** @type {?} */
var RFC_2822 = 'RFC_2822';
// date from string and format string
/**
 * @param {?} config
 * @return {?}
 */
function configFromStringAndFormat(config) {
    // TODO: Move this to another part of the creation flow to prevent circular deps
    if (config._f === ISO_8601) {
        return configFromISO(config);
    }
    if (config._f === RFC_2822) {
        return configFromRFC2822(config);
    }
    config._a = [];
    getParsingFlags(config).empty = true;
    if (isArray(config._f) || (!config._i && config._i !== 0)) {
        return config;
    }
    // This array is used to make a Date, either with `new Date` or `Date.UTC`
    /** @type {?} */
    var input = config._i.toString();
    /** @type {?} */
    var totalParsedInputLength = 0;
    /** @type {?} */
    var inputLength = input.length;
    /** @type {?} */
    var tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];
    /** @type {?} */
    var i;
    /** @type {?} */
    var token;
    /** @type {?} */
    var parsedInput;
    /** @type {?} */
    var skipped;
    for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        parsedInput = (input.match(getParseRegexForToken(token, config._locale)) || [])[0];
        if (parsedInput) {
            skipped = input.substr(0, input.indexOf(parsedInput));
            if (skipped.length > 0) {
                getParsingFlags(config).unusedInput.push(skipped);
            }
            input = input.slice(input.indexOf(parsedInput) + parsedInput.length);
            totalParsedInputLength += parsedInput.length;
        }
        // don't parse if it's not a known token
        if (formatTokenFunctions[token]) {
            if (parsedInput) {
                getParsingFlags(config).empty = false;
            }
            else {
                getParsingFlags(config).unusedTokens.push(token);
            }
            addTimeToArrayFromToken(token, parsedInput, config);
        }
        else if (config._strict && !parsedInput) {
            getParsingFlags(config).unusedTokens.push(token);
        }
    }
    // add remaining unparsed input length to the string
    getParsingFlags(config).charsLeftOver = inputLength - totalParsedInputLength;
    if (input.length > 0) {
        getParsingFlags(config).unusedInput.push(input);
    }
    // clear _12h flag if hour is <= 12
    if (config._a[HOUR] <= 12 &&
        getParsingFlags(config).bigHour === true &&
        config._a[HOUR] > 0) {
        getParsingFlags(config).bigHour = void 0;
    }
    getParsingFlags(config).parsedDateParts = config._a.slice(0);
    getParsingFlags(config).meridiem = config._meridiem;
    // handle meridiem
    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
    configFromArray(config);
    return checkOverflow(config);
}
/**
 * @param {?} locale
 * @param {?} _hour
 * @param {?} meridiem
 * @return {?}
 */
function meridiemFixWrap(locale, _hour, meridiem) {
    /** @type {?} */
    var hour = _hour;
    if (meridiem == null) {
        // nothing to do
        return hour;
    }
    if (locale.meridiemHour != null) {
        return locale.meridiemHour(hour, meridiem);
    }
    if (locale.isPM == null) {
        // this is not supposed to happen
        return hour;
    }
    // Fallback
    /** @type {?} */
    var isPm = locale.isPM(meridiem);
    if (isPm && hour < 12) {
        hour += 12;
    }
    if (!isPm && hour === 12) {
        hour = 0;
    }
    return hour;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// date from string and array of format strings
/**
 * @param {?} config
 * @return {?}
 */
function configFromStringAndArray(config) {
    /** @type {?} */
    var tempConfig;
    /** @type {?} */
    var bestMoment;
    /** @type {?} */
    var scoreToBeat;
    /** @type {?} */
    var currentScore;
    if (!config._f || config._f.length === 0) {
        getParsingFlags(config).invalidFormat = true;
        return createInvalid(config);
    }
    /** @type {?} */
    var i;
    for (i = 0; i < config._f.length; i++) {
        currentScore = 0;
        tempConfig = Object.assign({}, config);
        if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
        }
        tempConfig._f = config._f[i];
        configFromStringAndFormat(tempConfig);
        if (!isValid(tempConfig)) {
            continue;
        }
        // if there is any input that was not parsed add a penalty for that format
        currentScore += getParsingFlags(tempConfig).charsLeftOver;
        // or tokens
        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
        getParsingFlags(tempConfig).score = currentScore;
        if (scoreToBeat == null || currentScore < scoreToBeat) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
        }
    }
    return Object.assign(config, bestMoment || tempConfig);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} config
 * @return {?}
 */
function configFromObject(config) {
    if (config._d) {
        return config;
    }
    /** @type {?} */
    var input = config._i;
    if (isObject(input)) {
        /** @type {?} */
        var i = normalizeObjectUnits((/** @type {?} */ (input)));
        config._a = [i.year, i.month, i.day, i.hours, i.minutes, i.seconds, i.milliseconds]
            // todo: obsolete -> remove it
            .map(function (obj) { return isString(obj) ? parseInt(obj, 10) : obj; });
    }
    return configFromArray(config);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} config
 * @return {?}
 */
function createFromConfig(config) {
    /** @type {?} */
    var res = checkOverflow(prepareConfig(config));
    // todo: remove, in moment.js it's never called cuz of moment constructor
    res._d = new Date(res._d != null ? res._d.getTime() : NaN);
    if (!isValid(Object.assign({}, res, { _isValid: null }))) {
        res._d = new Date(NaN);
    }
    // todo: update offset
    /*if (res._nextDay) {
      // Adding is smart enough around DST
      res._d = add(res._d, 1, 'day');
      res._nextDay = undefined;
    }*/
    return res;
}
/**
 * @param {?} config
 * @return {?}
 */
function prepareConfig(config) {
    /** @type {?} */
    var input = config._i;
    /** @type {?} */
    var format = config._f;
    config._locale = config._locale || getLocale(config._l);
    if (input === null || (format === undefined && input === '')) {
        return createInvalid(config, { nullInput: true });
    }
    if (isString(input)) {
        config._i = input = config._locale.preparse(input);
    }
    if (isDate(input)) {
        config._d = cloneDate(input);
        return config;
    }
    // todo: add check for recursion
    if (isArray(format)) {
        configFromStringAndArray(config);
    }
    else if (format) {
        configFromStringAndFormat(config);
    }
    else {
        configFromInput(config);
    }
    if (!isValid(config)) {
        config._d = null;
    }
    return config;
}
/**
 * @param {?} config
 * @return {?}
 */
function configFromInput(config) {
    /** @type {?} */
    var input = config._i;
    if (isUndefined(input)) {
        config._d = new Date();
    }
    else if (isDate(input)) {
        config._d = cloneDate(input);
    }
    else if (isString(input)) {
        configFromString(config);
    }
    else if (isArray(input) && input.length) {
        /** @type {?} */
        var _arr = input.slice(0);
        config._a = _arr.map(function (obj) { return isString(obj) ? parseInt(obj, 10) : obj; });
        configFromArray(config);
    }
    else if (isObject(input)) {
        configFromObject(config);
    }
    else if (isNumber(input)) {
        // from milliseconds
        config._d = new Date(input);
    }
    else {
        //   hooks.createFromInputFallback(config);
        return createInvalid(config);
    }
    return config;
}
/**
 * @param {?} input
 * @param {?=} format
 * @param {?=} localeKey
 * @param {?=} strict
 * @param {?=} isUTC
 * @return {?}
 */
function createLocalOrUTC(input, format, localeKey, strict, isUTC) {
    /** @type {?} */
    var config = {};
    /** @type {?} */
    var _input = input;
    // params switch -> skip; test it well
    // if (localeKey === true || localeKey === false) {
    //     strict = localeKey;
    //     localeKey = undefined;
    // }
    // todo: fail fast and return not valid date
    if ((isObject(_input) && isObjectEmpty(_input)) || (isArray(_input) && _input.length === 0)) {
        _input = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    // config._isAMomentObject = true;
    config._useUTC = config._isUTC = isUTC;
    config._l = localeKey;
    config._i = _input;
    config._f = format;
    config._strict = strict;
    return createFromConfig(config);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} input
 * @param {?=} format
 * @param {?=} localeKey
 * @param {?=} strict
 * @param {?=} isUTC
 * @return {?}
 */
function parseDate(input, format, localeKey, strict, isUTC) {
    if (isDate(input)) {
        return input;
    }
    /** @type {?} */
    var config = createLocalOrUTC(input, format, localeKey, strict, isUTC);
    return config._d;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} num
 * @return {?}
 */
function absRound(num) {
    return num < 0 ? Math.round(num * -1) * -1 : Math.round(num);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} date1
 * @param {?} date2
 * @param {?=} units
 * @return {?}
 */
function isAfter(date1, date2, units) {
    if (units === void 0) { units = 'milliseconds'; }
    if (!date1 || !date2) {
        return false;
    }
    if (units === 'milliseconds') {
        return date1.valueOf() > date2.valueOf();
    }
    return date2.valueOf() < startOf(date1, units).valueOf();
}
/**
 * @param {?} date1
 * @param {?} date2
 * @param {?=} units
 * @return {?}
 */
function isBefore(date1, date2, units) {
    if (units === void 0) { units = 'milliseconds'; }
    if (!date1 || !date2) {
        return false;
    }
    if (units === 'milliseconds') {
        return date1.valueOf() < date2.valueOf();
    }
    return endOf(date1, units).valueOf() < date2.valueOf();
}
/**
 * @param {?} date
 * @param {?} daysDisabled
 * @return {?}
 */
function isDisabledDay(date, daysDisabled) {
    if (daysDisabled === undefined || !daysDisabled || !daysDisabled.length) {
        return false;
    }
    return daysDisabled.some(function (day) { return day === date.getDay(); });
}
/**
 * @param {?} date1
 * @param {?} date2
 * @param {?=} units
 * @return {?}
 */
function isSame(date1, date2, units) {
    if (units === void 0) { units = 'milliseconds'; }
    if (!date1 || !date2) {
        return false;
    }
    if (units === 'milliseconds') {
        return date1.valueOf() === date2.valueOf();
    }
    /** @type {?} */
    var inputMs = date2.valueOf();
    return (startOf(date1, units).valueOf() <= inputMs &&
        inputMs <= endOf(date1, units).valueOf());
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;
// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
// and further modified to allow for strings containing both week and day
// tslint:disable-next-line
/** @type {?} */
var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
/**
 * @param {?=} input
 * @param {?=} key
 * @param {?=} config
 * @return {?}
 */
function createDuration(input, key, config) {
    if (config === void 0) { config = {}; }
    /** @type {?} */
    var duration = convertDuration(input, key);
    // matching against regexp is expensive, do it on demand
    return new Duration(duration, config);
}
/**
 * @param {?} input
 * @param {?} key
 * @return {?}
 */
function convertDuration(input, key) {
    var _a;
    // checks for null or undefined
    if (input == null) {
        return {};
    }
    if (isDuration(input)) {
        return {
            milliseconds: input._milliseconds,
            day: input._days,
            month: input._months
        };
    }
    if (isNumber(input)) {
        // duration = {};
        return key ? (_a = {}, _a[key] = input, _a) : { milliseconds: input };
    }
    if (isString(input)) {
        /** @type {?} */
        var match = aspNetRegex.exec(input);
        if (match) {
            /** @type {?} */
            var sign = (match[1] === '-') ? -1 : 1;
            return {
                year: 0,
                day: toInt(match[DATE]) * sign,
                hours: toInt(match[HOUR]) * sign,
                minutes: toInt(match[MINUTE]) * sign,
                seconds: toInt(match[SECOND]) * sign,
                // the millisecond decimal point is included in the match
                milliseconds: toInt(absRound(toInt(match[MILLISECOND]) * 1000)) * sign
            };
        }
        match = isoRegex.exec(input);
        if (match) {
            /** @type {?} */
            var sign = (match[1] === '-') ? -1 : (match[1] === '+') ? 1 : 1;
            return {
                year: parseIso(match[2], sign),
                month: parseIso(match[3], sign),
                week: parseIso(match[4], sign),
                day: parseIso(match[5], sign),
                hours: parseIso(match[6], sign),
                minutes: parseIso(match[7], sign),
                seconds: parseIso(match[8], sign)
            };
        }
    }
    if (isObject(input) && ('from' in input || 'to' in input)) {
        /** @type {?} */
        var diffRes = momentsDifference(parseDate(input.from), parseDate(input.to));
        return {
            milliseconds: diffRes.milliseconds,
            month: diffRes.months
        };
    }
    return input;
}
// createDuration.fn = Duration.prototype;
// createDuration.invalid = invalid;
/**
 * @param {?} inp
 * @param {?} sign
 * @return {?}
 */
function parseIso(inp, sign) {
    // We'd normally use ~~inp for this, but unfortunately it also
    // converts floats to ints.
    // inp may be undefined, so careful calling replace on it.
    /** @type {?} */
    var res = inp && parseFloat(inp.replace(',', '.'));
    // apply sign while we're at it
    return (isNaN(res) ? 0 : res) * sign;
}
/**
 * @param {?} base
 * @param {?} other
 * @return {?}
 */
function positiveMomentsDifference(base, other) {
    /** @type {?} */
    var res = { milliseconds: 0, months: 0 };
    res.months = getMonth(other) - getMonth(base) +
        (getFullYear(other) - getFullYear(base)) * 12;
    /** @type {?} */
    var _basePlus = add(cloneDate(base), res.months, 'month');
    if (isAfter(_basePlus, other)) {
        --res.months;
    }
    res.milliseconds = +other - +(add(cloneDate(base), res.months, 'month'));
    return res;
}
/**
 * @param {?} base
 * @param {?} other
 * @return {?}
 */
function momentsDifference(base, other) {
    if (!(isDateValid(base) && isDateValid(other))) {
        return { milliseconds: 0, months: 0 };
    }
    /** @type {?} */
    var res;
    /** @type {?} */
    var _other = cloneWithOffset(other, base, { _offset: base.getTimezoneOffset() });
    if (isBefore(base, _other)) {
        res = positiveMomentsDifference(base, _other);
    }
    else {
        res = positiveMomentsDifference(_other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
    }
    return res;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} date
 * @param {?} val
 * @param {?} period
 * @param {?=} isUTC
 * @return {?}
 */
function add(date, val, period, isUTC) {
    /** @type {?} */
    var dur = createDuration(val, period);
    return addSubtract(date, dur, 1, isUTC);
}
/**
 * @param {?} date
 * @param {?} val
 * @param {?} period
 * @param {?=} isUTC
 * @return {?}
 */
function subtract(date, val, period, isUTC) {
    /** @type {?} */
    var dur = createDuration(val, period);
    return addSubtract(date, dur, -1, isUTC);
}
/**
 * @param {?} date
 * @param {?} duration
 * @param {?} isAdding
 * @param {?=} isUTC
 * @return {?}
 */
function addSubtract(date, duration, isAdding, isUTC) {
    /** @type {?} */
    var milliseconds = duration._milliseconds;
    /** @type {?} */
    var days = absRound(duration._days);
    /** @type {?} */
    var months = absRound(duration._months);
    // todo: add timezones support
    // const _updateOffset = updateOffset == null ? true : updateOffset;
    if (months) {
        setMonth(date, getMonth(date, isUTC) + months * isAdding, isUTC);
    }
    if (days) {
        setDate(date, getDate(date, isUTC) + days * isAdding, isUTC);
    }
    if (milliseconds) {
        setTime(date, getTime(date) + milliseconds * isAdding);
    }
    return cloneDate(date);
    // todo: add timezones support
    // if (_updateOffset) {
    //   hooks.updateOffset(date, days || months);
    // }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function initDayOfWeek() {
    // FORMATTING
    addFormatToken('d', null, 'do', function (date, opts) {
        return getDay(date, opts.isUTC)
            .toString(10);
    });
    addFormatToken('dd', null, null, function (date, opts) {
        return opts.locale.weekdaysMin(date, opts.format, opts.isUTC);
    });
    addFormatToken('ddd', null, null, function (date, opts) {
        return opts.locale.weekdaysShort(date, opts.format, opts.isUTC);
    });
    addFormatToken('dddd', null, null, function (date, opts) {
        return opts.locale.weekdays(date, opts.format, opts.isUTC);
    });
    addFormatToken('e', null, null, function (date, opts) {
        return getLocaleDayOfWeek(date, opts.locale, opts.isUTC)
            .toString(10);
        // return getDay(date, opts.isUTC).toString(10);
    });
    addFormatToken('E', null, null, function (date, opts) {
        return getISODayOfWeek(date, opts.isUTC)
            .toString(10);
    });
    // ALIASES
    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');
    // PARSING
    addRegexToken('d', match1to2);
    addRegexToken('e', match1to2);
    addRegexToken('E', match1to2);
    addRegexToken('dd', function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd', function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd', function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });
    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        /** @type {?} */
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        }
        else {
            getParsingFlags(config).invalidWeekday = !!input;
        }
        return config;
    });
    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
        return config;
    });
}
// HELPERS
/**
 * @param {?} input
 * @param {?} locale
 * @return {?}
 */
function parseWeekday(input, locale) {
    if (!isString(input)) {
        return input;
    }
    /** @type {?} */
    var _num = parseInt(input, 10);
    if (!isNaN(_num)) {
        return _num;
    }
    /** @type {?} */
    var _weekDay = locale.weekdaysParse(input);
    if (isNumber(_weekDay)) {
        return _weekDay;
    }
    return null;
}
/**
 * @param {?} input
 * @param {?=} locale
 * @return {?}
 */
function parseIsoWeekday(input, locale) {
    if (locale === void 0) { locale = getLocale(); }
    if (isString(input)) {
        return locale.weekdaysParse(input) % 7 || 7;
    }
    return isNumber(input) && isNaN(input) ? null : input;
}
/**
 * @param {?} date
 * @param {?} input
 * @param {?=} locale
 * @param {?=} isUTC
 * @return {?}
 */
function setDayOfWeek(date, input, locale, isUTC) {
    if (locale === void 0) { locale = getLocale(); }
    /** @type {?} */
    var day = getDay(date, isUTC);
    /** @type {?} */
    var _input = parseWeekday(input, locale);
    return add(date, _input - day, 'day');
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getDayOfWeek(date, isUTC) {
    return getDay(date, isUTC);
}
/**
 * ****************************************
 * @param {?} date
 * @param {?=} locale
 * @param {?=} isUTC
 * @return {?}
 */
// todo: utc
// getSetLocaleDayOfWeek
function getLocaleDayOfWeek(date, locale, isUTC) {
    if (locale === void 0) { locale = getLocale(); }
    return (getDay(date, isUTC) + 7 - locale.firstDayOfWeek()) % 7;
}
/**
 * @param {?} date
 * @param {?} input
 * @param {?=} opts
 * @return {?}
 */
function setLocaleDayOfWeek(date, input, opts) {
    if (opts === void 0) { opts = {}; }
    /** @type {?} */
    var weekday = getLocaleDayOfWeek(date, opts.locale, opts.isUTC);
    return add(date, input - weekday, 'day');
}
// getSetISODayOfWeek
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getISODayOfWeek(date, isUTC) {
    return getDay(date, isUTC) || 7;
}
/**
 * @param {?} date
 * @param {?} input
 * @param {?=} opts
 * @return {?}
 */
function setISODayOfWeek(date, input, opts) {
    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.
    if (opts === void 0) { opts = {}; }
    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.
    /** @type {?} */
    var weekday = parseIsoWeekday(input, opts.locale);
    return setDayOfWeek(date, getDayOfWeek(date) % 7 ? weekday : weekday - 7);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
//! moment.js locale configuration
//! locale : Arabic [ar]
//! author : Abdel Said: https://github.com/abdelsaid
//! author : Ahmed Elkhatib
//! author : forabi https://github.com/forabi
/** @type {?} */
var symbolMap = {
    1: '١',
    2: '٢',
    3: '٣',
    4: '٤',
    5: '٥',
    6: '٦',
    7: '٧',
    8: '٨',
    9: '٩',
    0: '٠'
};
/** @type {?} */
var numberMap = {
    '١': '1',
    '٢': '2',
    '٣': '3',
    '٤': '4',
    '٥': '5',
    '٦': '6',
    '٧': '7',
    '٨': '8',
    '٩': '9',
    '٠': '0'
};
/** @type {?} */
var pluralForm = function (num) {
    return num === 0 ? 0 : num === 1 ? 1 : num === 2 ? 2 : num % 100 >= 3 && num % 100 <= 10 ? 3 : num % 100 >= 11 ? 4 : 5;
};
/** @type {?} */
var plurals = {
    s: ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
    m: ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
    h: ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
    d: ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
    M: ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
    y: ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
};
/** @type {?} */
var pluralize = function (u) {
    return function (num, withoutSuffix) {
        /** @type {?} */
        var f = pluralForm(num);
        /** @type {?} */
        var str = plurals[u][pluralForm(num)];
        if (f === 2) {
            str = str[withoutSuffix ? 0 : 1];
        }
        return ((/** @type {?} */ (str))).replace(/%d/i, num.toString());
    };
};
/** @type {?} */
var months = [
    'يناير',
    'فبراير',
    'مارس',
    'أبريل',
    'مايو',
    'يونيو',
    'يوليو',
    'أغسطس',
    'سبتمبر',
    'أكتوبر',
    'نوفمبر',
    'ديسمبر'
];
/** @type {?} */
var arLocale = {
    abbr: 'ar',
    months: months,
    monthsShort: months,
    weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
    weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
    weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'D/\u200FM/\u200FYYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    meridiemParse: /ص|م/,
    isPM: /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return 'م' === input;
    },
    meridiem: /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    function (hour, minute, isLower) {
        if (hour < 12) {
            return 'ص';
        }
        else {
            return 'م';
        }
    },
    calendar: {
        sameDay: '[اليوم عند الساعة] LT',
        nextDay: '[غدًا عند الساعة] LT',
        nextWeek: 'dddd [عند الساعة] LT',
        lastDay: '[أمس عند الساعة] LT',
        lastWeek: 'dddd [عند الساعة] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'بعد %s',
        past: 'منذ %s',
        s: pluralize('s'),
        ss: pluralize('s'),
        m: pluralize('m'),
        mm: pluralize('m'),
        h: pluralize('h'),
        hh: pluralize('h'),
        d: pluralize('d'),
        dd: pluralize('d'),
        M: pluralize('M'),
        MM: pluralize('M'),
        y: pluralize('y'),
        yy: pluralize('y')
    },
    preparse: /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        return str.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
            return numberMap[match];
        }).replace(/،/g, ',');
    },
    postformat: /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        return str.replace(/\d/g, function (match) {
            return symbolMap[match];
        }).replace(/,/g, '،');
    },
    week: {
        dow: 6,
        // Saturday is the first day of the week.
        doy: 12 // The week that contains Jan 1st is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Bulgarian [bg]
//! author : Iskren Ivov Chernev : https://github.com/ichernev
//! author : Kunal Marwaha : https://github.com/marwahaha
//! author : Matt Grande : https://github.com/mattgrande
//! author : Isaac Cambron : https://github.com/icambron
//! author : Venelin Manchev : https://github.com/vmanchev
/** @type {?} */
var bgLocale = {
    abbr: 'bg',
    months: 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
    monthsShort: 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
    weekdays: 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
    weekdaysShort: 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
    weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'D.MM.YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY H:mm',
        LLLL: 'dddd, D MMMM YYYY H:mm'
    },
    calendar: {
        sameDay: '[Днес в] LT',
        nextDay: '[Утре в] LT',
        nextWeek: 'dddd [в] LT',
        lastDay: '[Вчера в] LT',
        lastWeek: function (d) {
            switch (d) {
                case 0:
                case 3:
                case 6:
                    return '[В изминалата] dddd [в] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[В изминалия] dddd [в] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'след %s',
        past: 'преди %s',
        s: 'няколко секунди',
        ss: '%d секунди',
        m: 'минута',
        mm: '%d минути',
        h: 'час',
        hh: '%d часа',
        d: 'ден',
        dd: '%d дни',
        M: 'месец',
        MM: '%d месеца',
        y: 'година',
        yy: '%d години'
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
    ordinal: function (_num) {
        /** @type {?} */
        var number = Number(_num);
        /** @type {?} */
        var lastDigit = number % 10;
        /** @type {?} */
        var last2Digits = number % 100;
        if (number === 0) {
            return number + '-ев';
        }
        else if (last2Digits === 0) {
            return number + '-ен';
        }
        else if (last2Digits > 10 && last2Digits < 20) {
            return number + '-ти';
        }
        else if (lastDigit === 1) {
            return number + '-ви';
        }
        else if (lastDigit === 2) {
            return number + '-ри';
        }
        else if (lastDigit === 7 || lastDigit === 8) {
            return number + '-ми';
        }
        else {
            return number + '-ти';
        }
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//! moment.js locale configuration
//! locale : Catalan [ca]
//! author : Xavier Arbat : https://github.com/XavisaurusRex
/** @type {?} */
var monthsShortDot = 'gen._feb._mar._abr._mai._jun._jul._ago._set._oct._nov._des.'.split('_');
/** @type {?} */
var monthsShort = 'ene_feb_mar_abr_mai_jun_jul_ago_set_oct_nov_des'.split('_');
/** @type {?} */
var monthsParse = [/^gen/i, /^feb/i, /^mar/i, /^abr/i, /^mai/i, /^jun/i, /^jul/i, /^ago/i, /^set/i, /^oct/i, /^nov/i, /^des/i];
/** @type {?} */
var monthsRegex = /^(gener|febrer|març|abril|maig|juny|juliol|agost|setembre|octubre|novembre|desembre|gen\.?|feb\.?|mar\.?|abr\.?|mai\.?|jun\.?|jul\.?|ago\.?|set\.?|oct\.?|nov\.?|des\.?)/i;
/** @type {?} */
var caLocale = {
    abbr: 'ca',
    months: 'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'),
    monthsShort: /**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */
    function (date, format, isUTC) {
        if (!date) {
            return monthsShortDot;
        }
        if (/-MMM-/.test(format)) {
            return monthsShort[getMonth(date, isUTC)];
        }
        return monthsShortDot[getMonth(date, isUTC)];
    },
    monthsRegex: monthsRegex,
    monthsShortRegex: monthsRegex,
    monthsStrictRegex: /^(gener|febrer|març|abril|maig|juny|juliol|agost|setembre|octubre|novembre|desembre)/i,
    monthsShortStrictRegex: /^(gen\.?|feb\.?|mar\.?|abr\.?|mai\.?|jun\.?|jul\.?|ago\.?|set\.?|oct\.?|nov\.?|des\.?)/i,
    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    weekdays: 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
    weekdaysShort: 'diu._dil._dim._dix._dij._div._dis.'.split('_'),
    weekdaysMin: 'dg_dl_dt_dc_dj_dv_ds'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D [de] MMMM [de] YYYY',
        LLL: 'D [de] MMMM [de] YYYY H:mm',
        LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
    },
    calendar: {
        sameDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[avui a ' + ( true ? 'les' : undefined) + '] LT';
        },
        nextDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[dema a ' + ( true ? 'les' : undefined) + '] LT';
        },
        nextWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return 'dddd [a ' + ( true ? 'les' : undefined) + '] LT';
        },
        lastDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[ahir a ' + ( true ? 'les' : undefined) + '] LT';
        },
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[el] dddd [' + ( true ? 'passades les' : undefined) + '] LT';
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'en %s',
        past: 'fa %s',
        s: 'uns segons',
        ss: '%d segons',
        m: 'un minut',
        mm: '%d minuts',
        h: 'una hora',
        hh: '%d hores',
        d: 'un dia',
        dd: '%d dies',
        M: 'un mes',
        MM: '%d mesos',
        y: 'un any',
        yy: '%d anys'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(er|on|er|rt|é)/,
    ordinal: /**
     * @param {?} _num
     * @return {?}
     */
    function (_num) {
        /** @type {?} */
        var num = Number(_num);
        /** @type {?} */
        var output = (num > 4) ? 'é' :
            (num === 1 || num === 3) ? 'r' :
                (num === 2) ? 'n' :
                    (num === 4) ? 't' : 'é';
        return num + output;
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//! moment.js locale configuration
//! locale : Czech [cs]
//! author : petrbela : https://github.com/petrbela
/** @type {?} */
var months$1 = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_');
/** @type {?} */
var monthsShort$1 = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_');
/**
 * @param {?} num
 * @return {?}
 */
function plural(num) {
    return (num > 1) && (num < 5) && (~~(num / 10) !== 1);
}
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function translate(num, withoutSuffix, key, isFuture) {
    /** @type {?} */
    var result = num + ' ';
    switch (key) {
        case 's': // a few seconds / in a few seconds / a few seconds ago
            return (withoutSuffix || isFuture) ? 'pár sekund' : 'pár sekundami';
        case 'ss': // 9 seconds / in 9 seconds / 9 seconds ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'sekundy' : 'sekund');
            }
            else {
                return result + 'sekundami';
            }
        // break;
        case 'm': // a minute / in a minute / a minute ago
            return withoutSuffix ? 'minuta' : (isFuture ? 'minutu' : 'minutou');
        case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'minuty' : 'minut');
            }
            else {
                return result + 'minutami';
            }
        // break;
        case 'h': // an hour / in an hour / an hour ago
            return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
        case 'hh': // 9 hours / in 9 hours / 9 hours ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'hodiny' : 'hodin');
            }
            else {
                return result + 'hodinami';
            }
        // break;
        case 'd': // a day / in a day / a day ago
            return (withoutSuffix || isFuture) ? 'den' : 'dnem';
        case 'dd': // 9 days / in 9 days / 9 days ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'dny' : 'dní');
            }
            else {
                return result + 'dny';
            }
        // break;
        case 'M': // a month / in a month / a month ago
            return (withoutSuffix || isFuture) ? 'měsíc' : 'měsícem';
        case 'MM': // 9 months / in 9 months / 9 months ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'měsíce' : 'měsíců');
            }
            else {
                return result + 'měsíci';
            }
        // break;
        case 'y': // a year / in a year / a year ago
            return (withoutSuffix || isFuture) ? 'rok' : 'rokem';
        case 'yy': // 9 years / in 9 years / 9 years ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'roky' : 'let');
            }
            else {
                return result + 'lety';
            }
        // break;
    }
}
/** @type {?} */
var csLocale = {
    abbr: 'cs',
    months: months$1,
    monthsShort: monthsShort$1,
    monthsParse: (function (months, monthsShort) {
        /** @type {?} */
        var i;
        /** @type {?} */
        var _monthsParse = [];
        for (i = 0; i < 12; i++) {
            // use custom parser to solve problem with July (červenec)
            _monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');
        }
        return _monthsParse;
    }(months$1, monthsShort$1)),
    shortMonthsParse: (function (monthsShort) {
        /** @type {?} */
        var i;
        /** @type {?} */
        var _shortMonthsParse = [];
        for (i = 0; i < 12; i++) {
            _shortMonthsParse[i] = new RegExp('^' + monthsShort[i] + '$', 'i');
        }
        return _shortMonthsParse;
    }(monthsShort$1)),
    longMonthsParse: (function (months) {
        /** @type {?} */
        var i;
        /** @type {?} */
        var _longMonthsParse = [];
        for (i = 0; i < 12; i++) {
            _longMonthsParse[i] = new RegExp('^' + months[i] + '$', 'i');
        }
        return _longMonthsParse;
    }(months$1)),
    weekdays: 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
    weekdaysShort: 'ne_po_út_st_čt_pá_so'.split('_'),
    weekdaysMin: 'ne_po_út_st_čt_pá_so'.split('_'),
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY H:mm',
        LLLL: 'dddd D. MMMM YYYY H:mm',
        l: 'D. M. YYYY'
    },
    calendar: {
        sameDay: '[dnes v] LT',
        nextDay: '[zítra v] LT',
        nextWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            switch (getDayOfWeek(date)) {
                case 0:
                    return '[v neděli v] LT';
                case 1:
                case 2:
                    return '[v] dddd [v] LT';
                case 3:
                    return '[ve středu v] LT';
                case 4:
                    return '[ve čtvrtek v] LT';
                case 5:
                    return '[v pátek v] LT';
                case 6:
                    return '[v sobotu v] LT';
            }
        },
        lastDay: '[včera v] LT',
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            switch (getDayOfWeek(date)) {
                case 0:
                    return '[minulou neděli v] LT';
                case 1:
                case 2:
                    return '[minulé] dddd [v] LT';
                case 3:
                    return '[minulou středu v] LT';
                case 4:
                case 5:
                    return '[minulý] dddd [v] LT';
                case 6:
                    return '[minulou sobotu v] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'za %s',
        past: 'před %s',
        s: translate,
        ss: translate,
        m: translate,
        mm: translate,
        h: translate,
        hh: translate,
        d: translate,
        dd: translate,
        M: translate,
        MM: translate,
        y: translate,
        yy: translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format
//! moment.js locale configuration
//! locale : Danish (Denmark) [da]
//! author : Per Hansen : https://github.com/perhp
/** @type {?} */
var daLocale = {
    abbr: 'da',
    months: 'Januar_Februar_Marts_April_Maj_Juni_Juli_August_September_Oktober_November_December'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_Maj_Jun_Jul_Aug_Sep_Okt_Nov_Dec'.split('_'),
    weekdays: 'Søndag_Mandag_Tirsdag_Onsdag_Torsdag_Fredag_Lørdag'.split('_'),
    weekdaysShort: 'Søn_Man_Tir_Ons_Tor_Fre_Lør'.split('_'),
    weekdaysMin: 'Sø_Ma_Ti_On_To_Fr_Lø'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY HH:mm',
        LLLL: 'dddd [d.] D. MMMM YYYY [kl.] HH:mm'
    },
    calendar: {
        sameDay: '[i dag kl.] LT',
        nextDay: '[i morgen kl.] LT',
        nextWeek: 'på dddd [kl.] LT',
        lastDay: '[i går kl.] LT',
        lastWeek: '[i] dddd[s kl.] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'om %s',
        past: '%s siden',
        s: 'få sekunder',
        m: 'et minut',
        mm: '%d minutter',
        h: 'en time',
        hh: '%d timer',
        d: 'en dag',
        dd: '%d dage',
        M: 'en måned',
        MM: '%d måneder',
        y: 'et år',
        yy: '%d år'
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// tslint:disable:object-literal-key-quotes
//! moment.js locale configuration
//! locale : German [de]
//! author : lluchs : https://github.com/lluchs
//! author: Menelion Elensúle: https://github.com/Oire
//! author : Mikolaj Dadela : https://github.com/mik01aj
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function processRelativeTime(num, withoutSuffix, key, isFuture) {
    /** @type {?} */
    var format = {
        'm': ['eine Minute', 'einer Minute'],
        'h': ['eine Stunde', 'einer Stunde'],
        'd': ['ein Tag', 'einem Tag'],
        'dd': [num + ' Tage', num + ' Tagen'],
        'M': ['ein Monat', 'einem Monat'],
        'MM': [num + ' Monate', num + ' Monaten'],
        'y': ['ein Jahr', 'einem Jahr'],
        'yy': [num + ' Jahre', num + ' Jahren']
    };
    return withoutSuffix ? format[key][0] : format[key][1];
}
/** @type {?} */
var deLocale = {
    abbr: 'de',
    months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
    monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
    monthsParseExact: true,
    weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
    weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
    weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY HH:mm',
        LLLL: 'dddd, D. MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[heute um] LT [Uhr]',
        sameElse: 'L',
        nextDay: '[morgen um] LT [Uhr]',
        nextWeek: 'dddd [um] LT [Uhr]',
        lastDay: '[gestern um] LT [Uhr]',
        lastWeek: '[letzten] dddd [um] LT [Uhr]'
    },
    relativeTime: {
        future: 'in %s',
        past: 'vor %s',
        s: 'ein paar Sekunden',
        ss: '%d Sekunden',
        m: processRelativeTime,
        mm: '%d Minuten',
        h: processRelativeTime,
        hh: '%d Stunden',
        d: processRelativeTime,
        dd: processRelativeTime,
        M: processRelativeTime,
        MM: processRelativeTime,
        y: processRelativeTime,
        yy: processRelativeTime
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : English (United Kingdom) [en-gb]
//! author : Chris Gedrim : https://github.com/chrisgedrim
/** @type {?} */
var enGbLocale = {
    abbr: 'en-gb',
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        ss: '%d seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: /**
     * @param {?} _num
     * @return {?}
     */
    function (_num) {
        /** @type {?} */
        var num = Number(_num);
        /** @type {?} */
        var b = num % 10;
        /** @type {?} */
        var output = (~~(num % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                    (b === 3) ? 'rd' : 'th';
        return num + output;
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//! moment.js locale configuration
//! locale : Spanish (Dominican Republic) [es-do]
/** @type {?} */
var monthsShortDot$1 = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_');
/** @type {?} */
var monthsShort$2 = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');
/** @type {?} */
var monthsParse$1 = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
/** @type {?} */
var monthsRegex$1 = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
/** @type {?} */
var esDoLocale = {
    abbr: 'es-do',
    months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
    monthsShort: /**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */
    function (date, format, isUTC) {
        if (!date) {
            return monthsShortDot$1;
        }
        else if (/-MMM-/.test(format)) {
            return monthsShort$2[getMonth(date, isUTC)];
        }
        else {
            return monthsShortDot$1[getMonth(date, isUTC)];
        }
    },
    monthsRegex: monthsRegex$1,
    monthsShortRegex: monthsRegex$1,
    monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
    monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
    monthsParse: monthsParse$1,
    longMonthsParse: monthsParse$1,
    shortMonthsParse: monthsParse$1,
    weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
    weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
    weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'h:mm A',
        LTS: 'h:mm:ss A',
        L: 'DD/MM/YYYY',
        LL: 'D [de] MMMM [de] YYYY',
        LLL: 'D [de] MMMM [de] YYYY h:mm A',
        LLLL: 'dddd, D [de] MMMM [de] YYYY h:mm A'
    },
    calendar: {
        sameDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[hoy a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        nextDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[mañana a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        nextWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return 'dddd [a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        lastDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[ayer a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[el] dddd [pasado a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'en %s',
        past: 'hace %s',
        s: 'unos segundos',
        ss: '%d segundos',
        m: 'un minuto',
        mm: '%d minutos',
        h: 'una hora',
        hh: '%d horas',
        d: 'un día',
        dd: '%d días',
        M: 'un mes',
        MM: '%d meses',
        y: 'un año',
        yy: '%d años'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//! moment.js locale configuration
//! locale : Spanish [es]
//! author : Julio Napurí : https://github.com/julionc
/** @type {?} */
var monthsShortDot$2 = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_');
/** @type {?} */
var monthsShort$3 = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');
/** @type {?} */
var monthsParse$2 = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
/** @type {?} */
var monthsRegex$2 = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
/** @type {?} */
var esLocale = {
    abbr: 'es',
    months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
    monthsShort: /**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */
    function (date, format, isUTC) {
        if (!date) {
            return monthsShortDot$2;
        }
        if (/-MMM-/.test(format)) {
            return monthsShort$3[getMonth(date, isUTC)];
        }
        return monthsShortDot$2[getMonth(date, isUTC)];
    },
    monthsRegex: monthsRegex$2,
    monthsShortRegex: monthsRegex$2,
    monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
    monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
    monthsParse: monthsParse$2,
    longMonthsParse: monthsParse$2,
    shortMonthsParse: monthsParse$2,
    weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
    weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
    weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D [de] MMMM [de] YYYY',
        LLL: 'D [de] MMMM [de] YYYY H:mm',
        LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
    },
    calendar: {
        sameDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[hoy a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        nextDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[mañana a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        nextWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return 'dddd [a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        lastDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[ayer a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[el] dddd [pasado a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'en %s',
        past: 'hace %s',
        s: 'unos segundos',
        ss: '%d segundos',
        m: 'un minuto',
        mm: '%d minutos',
        h: 'una hora',
        hh: '%d horas',
        d: 'un día',
        dd: '%d días',
        M: 'un mes',
        MM: '%d meses',
        y: 'un año',
        yy: '%d años'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//! moment.js locale configuration
//! locale : Spanish (United States) [es-us]
//! author : bustta : https://github.com/bustta
/** @type {?} */
var monthsShortDot$3 = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_');
/** @type {?} */
var monthsShort$4 = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');
/** @type {?} */
var esUsLocale = {
    abbr: 'es-us',
    months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
    monthsShort: /**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */
    function (date, format, isUTC) {
        if (!date) {
            return monthsShortDot$3;
        }
        else if (/-MMM-/.test(format)) {
            return monthsShort$4[getMonth(date, isUTC)];
        }
        else {
            return monthsShortDot$3[getMonth(date, isUTC)];
        }
    },
    monthsParseExact: true,
    weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
    weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
    weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'h:mm A',
        LTS: 'h:mm:ss A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM [de] D [de] YYYY',
        LLL: 'MMMM [de] D [de] YYYY h:mm A',
        LLLL: 'dddd, MMMM [de] D [de] YYYY h:mm A'
    },
    calendar: {
        sameDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[hoy a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        nextDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[mañana a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        nextWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return 'dddd [a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        lastDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[ayer a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[el] dddd [pasado a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'en %s',
        past: 'hace %s',
        s: 'unos segundos',
        ss: '%d segundos',
        m: 'un minuto',
        mm: '%d minutos',
        h: 'una hora',
        hh: '%d horas',
        d: 'un día',
        dd: '%d días',
        M: 'un mes',
        MM: '%d meses',
        y: 'un año',
        yy: '%d años'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
        dow: 0,
        // Sunday is the first day of the week.
        doy: 6 // The week that contains Jan 1st is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
// https://github.com/moment/moment/blob/develop/locale/fi.js
/** @type {?} */
var numbersPast = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' ');
/** @type {?} */
var numbersFuture = [
    'nolla', 'yhden', 'kahden', 'kolmen', 'neljän', 'viiden', 'kuuden',
    numbersPast[7], numbersPast[8], numbersPast[9]
];
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function translate$1(num, withoutSuffix, key, isFuture) {
    /** @type {?} */
    var result = '';
    switch (key) {
        case 's':
            return isFuture ? 'muutaman sekunnin' : 'muutama sekunti';
        case 'ss':
            return isFuture ? 'sekunnin' : 'sekuntia';
        case 'm':
            return isFuture ? 'minuutin' : 'minuutti';
        case 'mm':
            result = isFuture ? 'minuutin' : 'minuuttia';
            break;
        case 'h':
            return isFuture ? 'tunnin' : 'tunti';
        case 'hh':
            result = isFuture ? 'tunnin' : 'tuntia';
            break;
        case 'd':
            return isFuture ? 'päivän' : 'päivä';
        case 'dd':
            result = isFuture ? 'päivän' : 'päivää';
            break;
        case 'M':
            return isFuture ? 'kuukauden' : 'kuukausi';
        case 'MM':
            result = isFuture ? 'kuukauden' : 'kuukautta';
            break;
        case 'y':
            return isFuture ? 'vuoden' : 'vuosi';
        case 'yy':
            result = isFuture ? 'vuoden' : 'vuotta';
            break;
    }
    result = verbalNumber(num, isFuture) + ' ' + result;
    return result;
}
/**
 * @param {?} num
 * @param {?} isFuture
 * @return {?}
 */
function verbalNumber(num, isFuture) {
    return num < 10 ? (isFuture ? numbersFuture[num] : numbersPast[num]) : num;
}
/** @type {?} */
var fiLocale = {
    abbr: 'fi',
    months: 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
    monthsShort: 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_'),
    weekdays: 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
    weekdaysShort: 'su_ma_ti_ke_to_pe_la'.split('_'),
    weekdaysMin: 'su_ma_ti_ke_to_pe_la'.split('_'),
    longDateFormat: {
        LT: 'HH.mm',
        LTS: 'HH.mm.ss',
        L: 'DD.MM.YYYY',
        LL: 'Do MMMM[ta] YYYY',
        LLL: 'Do MMMM[ta] YYYY, [klo] HH.mm',
        LLLL: 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm',
        l: 'D.M.YYYY',
        ll: 'Do MMM YYYY',
        lll: 'Do MMM YYYY, [klo] HH.mm',
        llll: 'ddd, Do MMM YYYY, [klo] HH.mm'
    },
    calendar: {
        sameDay: '[tänään] [klo] LT',
        nextDay: '[huomenna] [klo] LT',
        nextWeek: 'dddd [klo] LT',
        lastDay: '[eilen] [klo] LT',
        lastWeek: '[viime] dddd[na] [klo] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s päästä',
        past: '%s sitten',
        s: translate$1,
        ss: translate$1,
        m: translate$1,
        mm: translate$1,
        h: translate$1,
        hh: translate$1,
        d: translate$1,
        dd: translate$1,
        M: translate$1,
        MM: translate$1,
        y: translate$1,
        yy: translate$1
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : French [fr]
//! author : John Fischer : https://github.com/jfroffice
/** @type {?} */
var frLocale = {
    abbr: 'fr',
    months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
    monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
    monthsParseExact: true,
    weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
    weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
    weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Aujourd’hui à] LT',
        nextDay: '[Demain à] LT',
        nextWeek: 'dddd [à] LT',
        lastDay: '[Hier à] LT',
        lastWeek: 'dddd [dernier à] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'dans %s',
        past: 'il y a %s',
        s: 'quelques secondes',
        ss: '%d secondes',
        m: 'une minute',
        mm: '%d minutes',
        h: 'une heure',
        hh: '%d heures',
        d: 'un jour',
        dd: '%d jours',
        M: 'un mois',
        MM: '%d mois',
        y: 'un an',
        yy: '%d ans'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
    ordinal: /**
     * @param {?} _num
     * @param {?} period
     * @return {?}
     */
    function (_num, period) {
        /** @type {?} */
        var num = Number(_num);
        switch (period) {
            // TODO: Return 'e' when day of month > 1. Move this case inside
            // block for masculine words below.
            // See https://github.com/moment/moment/issues/3375
            case 'D':
                return num + (num === 1 ? 'er' : '');
            // Words with masculine grammatical gender: mois, trimestre, jour
            default:
            case 'M':
            case 'Q':
            case 'DDD':
            case 'd':
                return num + (num === 1 ? 'er' : 'e');
            // Words with feminine grammatical gender: semaine
            case 'w':
            case 'W':
                return num + (num === 1 ? 're' : 'e');
        }
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//! moment.js locale configuration
//! locale : Galician [gl]
//! author : Darío Beiró : https://github.com/quinobravo
/** @type {?} */
var monthsShortDot$4 = 'xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.'.split('_');
/** @type {?} */
var monthsShort$5 = 'xan_feb_mar_abr_mai_xuñ_xul_ago_set_out_nov_dec'.split('_');
/** @type {?} */
var monthsParse$3 = [/^xan/i, /^feb/i, /^mar/i, /^abr/i, /^mai/i, /^xuñ/i, /^xul/i, /^ago/i, /^set/i, /^out/i, /^nov/i, /^dec/i];
/** @type {?} */
var monthsRegex$3 = /^(xaneiro|febreiro|marzo|abril|maio|xuño|xullo|agosto|setembro|outubro|novembro|decembro|xan\.?|feb\.?|mar\.?|abr\.?|mai\.?|xuñ\.?|xul\.?|ago\.?|set\.?|out\.?|nov\.?|dec\.?)/i;
/** @type {?} */
var glLocale = {
    abbr: 'gl',
    months: 'xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro'.split('_'),
    monthsShort: /**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */
    function (date, format, isUTC) {
        if (!date) {
            return monthsShortDot$4;
        }
        if (/-MMM-/.test(format)) {
            return monthsShort$5[getMonth(date, isUTC)];
        }
        return monthsShortDot$4[getMonth(date, isUTC)];
    },
    monthsRegex: monthsRegex$3,
    monthsShortRegex: monthsRegex$3,
    monthsStrictRegex: /^(xaneiro|febreiro|marzo|abril|maio|xuño|xullo|agosto|setembro|outubro|novembro|decembro)/i,
    monthsShortStrictRegex: /^(xan\.?|feb\.?|mar\.?|abr\.?|mai\.?|xuñ\.?|xul\.?|ago\.?|set\.?|out\.?|nov\.?|dec\.?)/i,
    monthsParse: monthsParse$3,
    longMonthsParse: monthsParse$3,
    shortMonthsParse: monthsParse$3,
    weekdays: 'domingo_luns_martes_mércores_xoves_venres_sábado'.split('_'),
    weekdaysShort: 'dom._lun._mar._mér._xov._ven._sáb.'.split('_'),
    weekdaysMin: 'do_lu_ma_mé_xo_ve_sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D [de] MMMM [de] YYYY',
        LLL: 'D [de] MMMM [de] YYYY H:mm',
        LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
    },
    calendar: {
        sameDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[hoxe á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        nextDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[mañan á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        nextWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return 'dddd [á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        lastDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[onte á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[o] dddd [pasado á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'en %s',
        past: 'fai %s',
        s: 'uns segundos',
        ss: '%d segundos',
        m: 'un minuto',
        mm: '%d minutos',
        h: 'unha hora',
        hh: '%d horas',
        d: 'un día',
        dd: '%d días',
        M: 'un mes',
        MM: '%d meses',
        y: 'un ano',
        yy: '%d anos'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Hebrew [he]
//! author : Tomer Cohen : https://github.com/tomer
//! author : Moshe Simantov : https://github.com/DevelopmentIL
//! author : Tal Ater : https://github.com/TalAter
/** @type {?} */
var heLocale = {
    abbr: 'he',
    months: 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
    monthsShort: 'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split('_'),
    weekdays: 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
    weekdaysShort: 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
    weekdaysMin: 'א_ב_ג_ד_ה_ו_ש'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D [ב]MMMM YYYY',
        LLL: 'D [ב]MMMM YYYY HH:mm',
        LLLL: 'dddd, D [ב]MMMM YYYY HH:mm',
        l: 'D/M/YYYY',
        ll: 'D MMM YYYY',
        lll: 'D MMM YYYY HH:mm',
        llll: 'ddd, D MMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[היום ב־]LT',
        nextDay: '[מחר ב־]LT',
        nextWeek: 'dddd [בשעה] LT',
        lastDay: '[אתמול ב־]LT',
        lastWeek: '[ביום] dddd [האחרון בשעה] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'בעוד %s',
        past: 'לפני %s',
        s: 'מספר שניות',
        ss: '%d שניות',
        m: 'דקה',
        mm: '%d דקות',
        h: 'שעה',
        hh: /**
         * @param {?} num
         * @return {?}
         */
        function (num) {
            if (num === 2) {
                return 'שעתיים';
            }
            return num + ' שעות';
        },
        d: 'יום',
        dd: /**
         * @param {?} num
         * @return {?}
         */
        function (num) {
            if (num === 2) {
                return 'יומיים';
            }
            return num + ' ימים';
        },
        M: 'חודש',
        MM: /**
         * @param {?} num
         * @return {?}
         */
        function (num) {
            if (num === 2) {
                return 'חודשיים';
            }
            return num + ' חודשים';
        },
        y: 'שנה',
        yy: /**
         * @param {?} num
         * @return {?}
         */
        function (num) {
            if (num === 2) {
                return 'שנתיים';
            }
            else if (num % 10 === 0 && num !== 10) {
                return num + ' שנה';
            }
            return num + ' שנים';
        }
    },
    meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
    isPM: /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(input);
    },
    meridiem: /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    function (hour, minute, isLower) {
        if (hour < 5) {
            return 'לפנות בוקר';
        }
        else if (hour < 10) {
            return 'בבוקר';
        }
        else if (hour < 12) {
            return isLower ? 'לפנה"צ' : 'לפני הצהריים';
        }
        else if (hour < 18) {
            return isLower ? 'אחה"צ' : 'אחרי הצהריים';
        }
        else {
            return 'בערב';
        }
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// tslint:disable:no-parameter-reassignment prefer-switch
//! moment.js locale configuration
//! locale : Hindi [hi]
//! author : Mayank Singhal : https://github.com/mayanksinghal
/** @type {?} */
var symbolMap$1 = {
    1: '१',
    2: '२',
    3: '३',
    4: '४',
    5: '५',
    6: '६',
    7: '७',
    8: '८',
    9: '९',
    0: '०'
};
/** @type {?} */
var numberMap$1 = {
    '१': '1',
    '२': '2',
    '३': '3',
    '४': '4',
    '५': '5',
    '६': '6',
    '७': '7',
    '८': '8',
    '९': '9',
    '०': '0'
};
/** @type {?} */
var hiLocale = {
    abbr: 'hi',
    months: 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split('_'),
    monthsShort: 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
    monthsParseExact: true,
    weekdays: 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
    weekdaysShort: 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
    weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
    longDateFormat: {
        LT: 'A h:mm बजे',
        LTS: 'A h:mm:ss बजे',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY, A h:mm बजे',
        LLLL: 'dddd, D MMMM YYYY, A h:mm बजे'
    },
    calendar: {
        sameDay: '[आज] LT',
        nextDay: '[कल] LT',
        nextWeek: 'dddd, LT',
        lastDay: '[कल] LT',
        lastWeek: '[पिछले] dddd, LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s में',
        past: '%s पहले',
        s: 'कुछ ही क्षण',
        ss: '%d सेकंड',
        m: 'एक मिनट',
        mm: '%d मिनट',
        h: 'एक घंटा',
        hh: '%d घंटे',
        d: 'एक दिन',
        dd: '%d दिन',
        M: 'एक महीने',
        MM: '%d महीने',
        y: 'एक वर्ष',
        yy: '%d वर्ष'
    },
    preparse: /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        return str.replace(/[१२३४५६७८९०]/g, function (match) {
            return numberMap$1[match];
        });
    },
    postformat: /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        return str.replace(/\d/g, function (match) {
            return symbolMap$1[match];
        });
    },
    // Hindi notation for meridiems are quite fuzzy in practice. While there exists
    // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
    meridiemParse: /रात|सुबह|दोपहर|शाम/,
    meridiemHour: /**
     * @param {?} hour
     * @param {?} meridiem
     * @return {?}
     */
    function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'रात') {
            return hour < 4 ? hour : hour + 12;
        }
        else if (meridiem === 'सुबह') {
            return hour;
        }
        else if (meridiem === 'दोपहर') {
            return hour >= 10 ? hour : hour + 12;
        }
        else if (meridiem === 'शाम') {
            return hour + 12;
        }
    },
    meridiem: /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    function (hour, minute, isLower) {
        if (hour < 4) {
            return 'रात';
        }
        else if (hour < 10) {
            return 'सुबह';
        }
        else if (hour < 17) {
            return 'दोपहर';
        }
        else if (hour < 20) {
            return 'शाम';
        }
        else {
            return 'रात';
        }
    },
    week: {
        dow: 0,
        // Sunday is the first day of the week.
        doy: 6 // The week that contains Jan 1st is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//! moment.js locale configuration
//! locale : Hungarian [hu]
//! author : Adam Brunner : https://github.com/adambrunner
/** @type {?} */
var weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function translate$2(num, withoutSuffix, key, isFuture) {
    switch (key) {
        case 's':
            return (isFuture || withoutSuffix) ? 'néhány másodperc' : 'néhány másodperce';
        case 'ss':
            return num + ((isFuture || withoutSuffix) ? ' másodperc' : ' másodperce');
        case 'm':
            return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');
        case 'mm':
            return num + (isFuture || withoutSuffix ? ' perc' : ' perce');
        case 'h':
            return 'egy' + (isFuture || withoutSuffix ? ' óra' : ' órája');
        case 'hh':
            return num + (isFuture || withoutSuffix ? ' óra' : ' órája');
        case 'd':
            return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');
        case 'dd':
            return num + (isFuture || withoutSuffix ? ' nap' : ' napja');
        case 'M':
            return 'egy' + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
        case 'MM':
            return num + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
        case 'y':
            return 'egy' + (isFuture || withoutSuffix ? ' év' : ' éve');
        case 'yy':
            return num + (isFuture || withoutSuffix ? ' év' : ' éve');
    }
    return '';
}
/**
 * @param {?} date
 * @param {?} isFuture
 * @return {?}
 */
function week(date, isFuture) {
    return (isFuture ? '' : '[múlt] ') + '[' + weekEndings[getDayOfWeek(date)] + '] LT[-kor]';
}
/** @type {?} */
var huLocale = {
    abbr: 'hu',
    months: 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
    monthsShort: 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
    weekdays: 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
    weekdaysShort: 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
    weekdaysMin: 'v_h_k_sze_cs_p_szo'.split('_'),
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'YYYY.MM.DD.',
        LL: 'YYYY. MMMM D.',
        LLL: 'YYYY. MMMM D. H:mm',
        LLLL: 'YYYY. MMMM D., dddd H:mm'
    },
    meridiemParse: /de|du/i,
    isPM: /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return input.charAt(1).toLowerCase() === 'u';
    },
    meridiem: /**
     * @param {?} hours
     * @param {?} minutes
     * @param {?} isLower
     * @return {?}
     */
    function (hours, minutes, isLower) {
        if (hours < 12) {
            return isLower === true ? 'de' : 'DE';
        }
        else {
            return isLower === true ? 'du' : 'DU';
        }
    },
    calendar: {
        sameDay: '[ma] LT[-kor]',
        nextDay: '[holnap] LT[-kor]',
        nextWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return week(date, true);
        },
        lastDay: '[tegnap] LT[-kor]',
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return week(date, false);
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s múlva',
        past: '%s',
        s: translate$2,
        ss: translate$2,
        m: translate$2,
        mm: translate$2,
        h: translate$2,
        hh: translate$2,
        d: translate$2,
        dd: translate$2,
        M: translate$2,
        MM: translate$2,
        y: translate$2,
        yy: translate$2
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// tslint:disable:no-parameter-reassignment prefer-switch
//! moment.js locale configuration
//! locale : Indonesia [id]
//! author : Romy Kusuma : https://github.com/rkusuma
//! reference: https://github.com/moment/moment/blob/develop/locale/id.js
/** @type {?} */
var idLocale = {
    abbr: 'id',
    months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des'.split('_'),
    weekdays: 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
    weekdaysShort: 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
    weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
    longDateFormat: {
        LT: 'HH.mm',
        LTS: 'HH.mm.ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY [pukul] HH.mm',
        LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
    },
    meridiemParse: /pagi|siang|sore|malam/,
    meridiemHour: /**
     * @param {?} hour
     * @param {?} meridiem
     * @return {?}
     */
    function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'pagi') {
            return hour;
        }
        else if (meridiem === 'siang') {
            return hour >= 11 ? hour : hour + 12;
        }
        else if (meridiem === 'sore' || meridiem === 'malam') {
            return hour + 12;
        }
    },
    meridiem: /**
     * @param {?} hours
     * @param {?} minutes
     * @param {?} isLower
     * @return {?}
     */
    function (hours, minutes, isLower) {
        if (hours < 11) {
            return 'pagi';
        }
        else if (hours < 15) {
            return 'siang';
        }
        else if (hours < 19) {
            return 'sore';
        }
        else {
            return 'malam';
        }
    },
    calendar: {
        sameDay: '[Hari ini pukul] LT',
        nextDay: '[Besok pukul] LT',
        nextWeek: 'dddd [pukul] LT',
        lastDay: '[Kemarin pukul] LT',
        lastWeek: 'dddd [lalu pukul] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'dalam %s',
        past: '%s yang lalu',
        s: 'beberapa detik',
        ss: '%d detik',
        m: 'semenit',
        mm: '%d menit',
        h: 'sejam',
        hh: '%d jam',
        d: 'sehari',
        dd: '%d hari',
        M: 'sebulan',
        MM: '%d bulan',
        y: 'setahun',
        yy: '%d tahun'
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//! moment.js locale configuration
//! locale : Italian [it]
//! author : Lorenzo : https://github.com/aliem
//! author: Mattia Larentis: https://github.com/nostalgiaz
/** @type {?} */
var itLocale = {
    abbr: 'it',
    months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
    monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
    weekdays: 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
    weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
    weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Oggi alle] LT',
        nextDay: '[Domani alle] LT',
        nextWeek: 'dddd [alle] LT',
        lastDay: '[Ieri alle] LT',
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            switch (getDayOfWeek(date)) {
                case 0:
                    return '[la scorsa] dddd [alle] LT';
                default:
                    return '[lo scorso] dddd [alle] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: /**
         * @param {?} num
         * @return {?}
         */
        function (num) {
            return ((/^[0-9].+$/).test(num.toString(10)) ? 'tra' : 'in') + ' ' + num;
        },
        past: '%s fa',
        s: 'alcuni secondi',
        ss: '%d secondi',
        m: 'un minuto',
        mm: '%d minuti',
        h: 'un\'ora',
        hh: '%d ore',
        d: 'un giorno',
        dd: '%d giorni',
        M: 'un mese',
        MM: '%d mesi',
        y: 'un anno',
        yy: '%d anni'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Japanese [ja]
//! author : LI Long : https://github.com/baryon
/** @type {?} */
var jaLocale = {
    abbr: 'ja',
    months: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays: '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
    weekdaysShort: '日_月_火_水_木_金_土'.split('_'),
    weekdaysMin: '日_月_火_水_木_金_土'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'YYYY/MM/DD',
        LL: 'YYYY年M月D日',
        LLL: 'YYYY年M月D日 HH:mm',
        LLLL: 'YYYY年M月D日 HH:mm dddd',
        l: 'YYYY/MM/DD',
        ll: 'YYYY年M月D日',
        lll: 'YYYY年M月D日 HH:mm',
        llll: 'YYYY年M月D日 HH:mm dddd'
    },
    meridiemParse: /午前|午後/i,
    isPM: /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return input === '午後';
    },
    meridiem: /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    function (hour, minute, isLower) {
        if (hour < 12) {
            return '午前';
        }
        else {
            return '午後';
        }
    },
    calendar: {
        sameDay: '[今日] LT',
        nextDay: '[明日] LT',
        nextWeek: '[来週]dddd LT',
        lastDay: '[昨日] LT',
        lastWeek: '[前週]dddd LT',
        sameElse: 'L'
    },
    dayOfMonthOrdinalParse: /\d{1,2}日/,
    ordinal: /**
     * @param {?} num
     * @param {?} period
     * @return {?}
     */
    function (num, period) {
        switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
                return num + '日';
            default:
                return num.toString(10);
        }
    },
    relativeTime: {
        future: '%s後',
        past: '%s前',
        s: '数秒',
        ss: '%d秒',
        m: '1分',
        mm: '%d分',
        h: '1時間',
        hh: '%d時間',
        d: '1日',
        dd: '%d日',
        M: '1ヶ月',
        MM: '%dヶ月',
        y: '1年',
        yy: '%d年'
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// tslint:disable:object-literal-shorthand
//! moment.js locale configuration
//! locale : Korean [ko]
//! author : Kyungwook, Park : https://github.com/kyungw00k
//! author : Jeeeyul Lee <jeeeyul@gmail.com>
/** @type {?} */
var koLocale = {
    abbr: 'ko',
    months: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
    monthsShort: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
    weekdays: '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
    weekdaysShort: '일_월_화_수_목_금_토'.split('_'),
    weekdaysMin: '일_월_화_수_목_금_토'.split('_'),
    longDateFormat: {
        LT: 'A h:mm',
        LTS: 'A h:mm:ss',
        L: 'YYYY.MM.DD',
        LL: 'YYYY년 MMMM D일',
        LLL: 'YYYY년 MMMM D일 A h:mm',
        LLLL: 'YYYY년 MMMM D일 dddd A h:mm',
        l: 'YYYY.MM.DD',
        ll: 'YYYY년 MMMM D일',
        lll: 'YYYY년 MMMM D일 A h:mm',
        llll: 'YYYY년 MMMM D일 dddd A h:mm'
    },
    calendar: {
        sameDay: '오늘 LT',
        nextDay: '내일 LT',
        nextWeek: 'dddd LT',
        lastDay: '어제 LT',
        lastWeek: '지난주 dddd LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s 후',
        past: '%s 전',
        s: '몇 초',
        ss: '%d초',
        m: '1분',
        mm: '%d분',
        h: '한 시간',
        hh: '%d시간',
        d: '하루',
        dd: '%d일',
        M: '한 달',
        MM: '%d달',
        y: '일 년',
        yy: '%d년'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
    ordinal: function (num, period) {
        switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
                return num + '일';
            case 'M':
                return num + '월';
            case 'w':
            case 'W':
                return num + '주';
            default:
                return num.toString(10);
        }
    },
    meridiemParse: /오전|오후/,
    isPM: function (token) {
        return token === '오후';
    },
    meridiem: function (hour, minute, isUpper) {
        return hour < 12 ? '오전' : '오후';
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Lithuanian [lt]
//! author : Stanislavas Guk : https://github.com/ixoster
/** @type {?} */
var units = {
    ss: 'sekundė_sekundžių_sekundes',
    m: 'minutė_minutės_minutę',
    mm: 'minutės_minučių_minutes',
    h: 'valanda_valandos_valandą',
    hh: 'valandos_valandų_valandas',
    d: 'diena_dienos_dieną',
    dd: 'dienos_dienų_dienas',
    M: 'mėnuo_mėnesio_mėnesį',
    MM: 'mėnesiai_mėnesių_mėnesius',
    y: 'metai_metų_metus',
    yy: 'metai_metų_metus'
};
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function translateSeconds(num, withoutSuffix, key, isFuture) {
    if (withoutSuffix) {
        return 'kelios sekundės';
    }
    else {
        return isFuture ? 'kelių sekundžių' : 'kelias sekundes';
    }
}
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function translateSingular(num, withoutSuffix, key, isFuture) {
    return withoutSuffix ? forms(key)[0] : (isFuture ? forms(key)[1] : forms(key)[2]);
}
/**
 * @param {?} num
 * @return {?}
 */
function special(num) {
    return num % 10 === 0 || (num > 10 && num < 20);
}
/**
 * @param {?} key
 * @return {?}
 */
function forms(key) {
    return ((/** @type {?} */ (units)))[key].split('_');
}
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function translate$3(num, withoutSuffix, key, isFuture) {
    /** @type {?} */
    var result = num + ' ';
    if (num === 1) {
        return result + translateSingular(num, withoutSuffix, key[0], isFuture);
    }
    else if (withoutSuffix) {
        return result + (special(num) ? forms(key)[1] : forms(key)[0]);
    }
    else {
        if (isFuture) {
            return result + forms(key)[1];
        }
        else {
            return result + (special(num) ? forms(key)[1] : forms(key)[2]);
        }
    }
}
/** @type {?} */
var ltLocale = {
    abbr: 'lt',
    months: {
        format: 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_'),
        standalone: 'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split('_'),
        isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
    },
    monthsShort: 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
    weekdays: {
        format: 'sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį'.split('_'),
        standalone: 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split('_'),
        isFormat: /dddd HH:mm/
    },
    weekdaysShort: 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
    weekdaysMin: 'S_P_A_T_K_Pn_Š'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'YYYY-MM-DD',
        LL: 'YYYY [m.] MMMM D [d.]',
        LLL: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
        LLLL: 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
        l: 'YYYY-MM-DD',
        ll: 'YYYY [m.] MMMM D [d.]',
        lll: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
        llll: 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]'
    },
    calendar: {
        sameDay: '[Šiandien] LT',
        nextDay: '[Rytoj] LT',
        nextWeek: 'dddd LT',
        lastDay: '[Vakar] LT',
        lastWeek: '[Praėjusį] dddd LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'po %s',
        past: 'prieš %s',
        s: translateSeconds,
        ss: translate$3,
        m: translateSingular,
        mm: translate$3,
        h: translateSingular,
        hh: translate$3,
        d: translateSingular,
        dd: translate$3,
        M: translateSingular,
        MM: translate$3,
        y: translateSingular,
        yy: translate$3
    },
    dayOfMonthOrdinalParse: /\d{1,2}-oji/,
    ordinal: /**
     * @param {?} num
     * @return {?}
     */
    function (num) {
        return num + '-oji';
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// tslint:disable:object-literal-shorthand
//! moment.js locale configuration
//! locale : Mongolian [mn]
//! author : Javkhlantugs Nyamdorj : https://github.com/javkhaanj7
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function translate$4(num, withoutSuffix, key, isFuture) {
    switch (key) {
        case 's':
            return withoutSuffix ? 'хэдхэн секунд' : 'хэдхэн секундын';
        case 'ss':
            return num + (withoutSuffix ? ' секунд' : ' секундын');
        case 'm':
        case 'mm':
            return num + (withoutSuffix ? ' минут' : ' минутын');
        case 'h':
        case 'hh':
            return num + (withoutSuffix ? ' цаг' : ' цагийн');
        case 'd':
        case 'dd':
            return num + (withoutSuffix ? ' өдөр' : ' өдрийн');
        case 'M':
        case 'MM':
            return num + (withoutSuffix ? ' сар' : ' сарын');
        case 'y':
        case 'yy':
            return num + (withoutSuffix ? ' жил' : ' жилийн');
        default:
            return num.toString(10);
    }
}
/** @type {?} */
var mnLocale = {
    abbr: 'mn',
    months: 'Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар'.split('_'),
    monthsShort: '1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар'.split('_'),
    monthsParseExact: true,
    weekdays: 'Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба'.split('_'),
    weekdaysShort: 'Ням_Дав_Мяг_Лха_Пүр_Баа_Бям'.split('_'),
    weekdaysMin: 'Ня_Да_Мя_Лх_Пү_Ба_Бя'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'YYYY-MM-DD',
        LL: 'YYYY оны MMMMын D',
        LLL: 'YYYY оны MMMMын D HH:mm',
        LLLL: 'dddd, YYYY оны MMMMын D HH:mm'
    },
    meridiemParse: /ҮӨ|ҮХ/i,
    isPM: function (input) {
        return input === 'ҮХ';
    },
    meridiem: function (hour, minute, isLower) {
        if (hour < 12) {
            return 'ҮӨ';
        }
        else {
            return 'ҮХ';
        }
    },
    calendar: {
        sameDay: '[Өнөөдөр] LT',
        nextDay: '[Маргааш] LT',
        nextWeek: '[Ирэх] dddd LT',
        lastDay: '[Өчигдөр] LT',
        lastWeek: '[Өнгөрсөн] dddd LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s дараа',
        past: '%s өмнө',
        s: translate$4,
        ss: translate$4,
        m: translate$4,
        mm: translate$4,
        h: translate$4,
        hh: translate$4,
        d: translate$4,
        dd: translate$4,
        M: translate$4,
        MM: translate$4,
        y: translate$4,
        yy: translate$4
    },
    dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
    ordinal: function (num, period) {
        switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
                return num + ' өдөр';
            default:
                return num.toString(10);
        }
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//! moment.js locale configuration
//! locale : Norwegian Bokmål [nb]
//! authors : Espen Hovlandsdal : https://github.com/rexxars
//!           Sigurd Gartmann : https://github.com/sigurdga
/** @type {?} */
var nbLocale = {
    abbr: 'nb',
    months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
    monthsShort: 'jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
    monthsParseExact: true,
    weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
    weekdaysShort: 'sø._ma._ti._on._to._fr._lø.'.split('_'),
    weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY [kl.] HH:mm',
        LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm'
    },
    calendar: {
        sameDay: '[i dag kl.] LT',
        nextDay: '[i morgen kl.] LT',
        nextWeek: 'dddd [kl.] LT',
        lastDay: '[i går kl.] LT',
        lastWeek: '[forrige] dddd [kl.] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'om %s',
        past: '%s siden',
        s: 'noen sekunder',
        ss: '%d sekunder',
        m: 'ett minutt',
        mm: '%d minutter',
        h: 'en time',
        hh: '%d timer',
        d: 'en dag',
        dd: '%d dager',
        M: 'en måned',
        MM: '%d måneder',
        y: 'ett år',
        yy: '%d år'
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//! moment.js locale configuration
//! locale : Dutch (Belgium) [nl-be]
//! author : Joris Röling : https://github.com/jorisroling
//! author : Jacob Middag : https://github.com/middagj
/** @type {?} */
var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_');
/** @type {?} */
var monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');
/** @type {?} */
var monthsParse$4 = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
/** @type {?} */
var monthsRegex$4 = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
/** @type {?} */
var nlBeLocale = {
    abbr: 'nl-be',
    months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
    monthsShort: /**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */
    function (date, format, isUTC) {
        if (!date) {
            return monthsShortWithDots;
        }
        else if (/-MMM-/.test(format)) {
            return monthsShortWithoutDots[getMonth(date, isUTC)];
        }
        else {
            return monthsShortWithDots[getMonth(date, isUTC)];
        }
    },
    monthsRegex: monthsRegex$4,
    monthsShortRegex: monthsRegex$4,
    monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
    monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
    monthsParse: monthsParse$4,
    longMonthsParse: monthsParse$4,
    shortMonthsParse: monthsParse$4,
    weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
    weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
    weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[vandaag om] LT',
        nextDay: '[morgen om] LT',
        nextWeek: 'dddd [om] LT',
        lastDay: '[gisteren om] LT',
        lastWeek: '[afgelopen] dddd [om] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'over %s',
        past: '%s geleden',
        s: 'een paar seconden',
        ss: '%d seconden',
        m: 'één minuut',
        mm: '%d minuten',
        h: 'één uur',
        hh: '%d uur',
        d: 'één dag',
        dd: '%d dagen',
        M: 'één maand',
        MM: '%d maanden',
        y: 'één jaar',
        yy: '%d jaar'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
    ordinal: /**
     * @param {?} _num
     * @return {?}
     */
    function (_num) {
        /** @type {?} */
        var num = Number(_num);
        return num + ((num === 1 || num === 8 || num >= 20) ? 'ste' : 'de');
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//! moment.js locale configuration
//! locale : Dutch [nl]
//! author : Joris Röling : https://github.com/jorisroling
//! author : Jacob Middag : https://github.com/middagj
/** @type {?} */
var monthsShortWithDots$1 = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_');
/** @type {?} */
var monthsShortWithoutDots$1 = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');
/** @type {?} */
var monthsParse$5 = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
/** @type {?} */
var monthsRegex$5 = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
/** @type {?} */
var nlLocale = {
    abbr: 'nl',
    months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
    monthsShort: /**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */
    function (date, format, isUTC) {
        if (!date) {
            return monthsShortWithDots$1;
        }
        else if (/-MMM-/.test(format)) {
            return monthsShortWithoutDots$1[getMonth(date, isUTC)];
        }
        else {
            return monthsShortWithDots$1[getMonth(date, isUTC)];
        }
    },
    monthsRegex: monthsRegex$5,
    monthsShortRegex: monthsRegex$5,
    monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
    monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
    monthsParse: monthsParse$5,
    longMonthsParse: monthsParse$5,
    shortMonthsParse: monthsParse$5,
    weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
    weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
    weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD-MM-YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[vandaag om] LT',
        nextDay: '[morgen om] LT',
        nextWeek: 'dddd [om] LT',
        lastDay: '[gisteren om] LT',
        lastWeek: '[afgelopen] dddd [om] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'over %s',
        past: '%s geleden',
        s: 'een paar seconden',
        ss: '%d seconden',
        m: 'één minuut',
        mm: '%d minuten',
        h: 'één uur',
        hh: '%d uur',
        d: 'één dag',
        dd: '%d dagen',
        M: 'één maand',
        MM: '%d maanden',
        y: 'één jaar',
        yy: '%d jaar'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
    ordinal: /**
     * @param {?} _num
     * @return {?}
     */
    function (_num) {
        /** @type {?} */
        var num = Number(_num);
        return num + ((num === 1 || num === 8 || num >= 20) ? 'ste' : 'de');
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//! moment.js locale configuration
//! locale : Polish [pl]
//! author : Rafal Hirsz : https://github.com/evoL
/** @type {?} */
var monthsNominative = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_');
/** @type {?} */
var monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_');
/**
 * @param {?} num
 * @return {?}
 */
function plural$1(num) {
    return (num % 10 < 5) && (num % 10 > 1) && ((~~(num / 10) % 10) !== 1);
}
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @return {?}
 */
function translate$5(num, withoutSuffix, key) {
    /** @type {?} */
    var result = num + ' ';
    switch (key) {
        case 'ss':
            return result + (plural$1(num) ? 'sekundy' : 'sekund');
        case 'm':
            return withoutSuffix ? 'minuta' : 'minutę';
        case 'mm':
            return result + (plural$1(num) ? 'minuty' : 'minut');
        case 'h':
            return withoutSuffix ? 'godzina' : 'godzinę';
        case 'hh':
            return result + (plural$1(num) ? 'godziny' : 'godzin');
        case 'MM':
            return result + (plural$1(num) ? 'miesiące' : 'miesięcy');
        case 'yy':
            return result + (plural$1(num) ? 'lata' : 'lat');
    }
}
/** @type {?} */
var plLocale = {
    abbr: 'pl',
    months: /**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */
    function (date, format, isUTC) {
        if (!date) {
            return monthsNominative;
        }
        else if (format === '') {
            // Hack: if format empty we know this is used to generate
            // RegExp by moment. Give then back both valid forms of months
            // in RegExp ready format.
            return '(' + monthsSubjective[getMonth(date, isUTC)] + '|' + monthsNominative[getMonth(date, isUTC)] + ')';
        }
        else if (/D MMMM/.test(format)) {
            return monthsSubjective[getMonth(date, isUTC)];
        }
        else {
            return monthsNominative[getMonth(date, isUTC)];
        }
    },
    monthsShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
    weekdays: 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
    weekdaysShort: 'ndz_pon_wt_śr_czw_pt_sob'.split('_'),
    weekdaysMin: 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Dziś o] LT',
        nextDay: '[Jutro o] LT',
        nextWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            switch (getDayOfWeek(date)) {
                case 0:
                    return '[W niedzielę o] LT';
                case 2:
                    return '[We wtorek o] LT';
                case 3:
                    return '[W środę o] LT';
                case 5:
                    return '[W piątek o] LT';
                case 6:
                    return '[W sobotę o] LT';
                default:
                    return '[W] dddd [o] LT';
            }
        },
        lastDay: '[Wczoraj o] LT',
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            switch (getDayOfWeek(date)) {
                case 0:
                    return '[W zeszłą niedzielę o] LT';
                case 3:
                    return '[W zeszłą środę o] LT';
                case 4:
                    return '[W zeszłą czwartek o] LT';
                case 5:
                    return '[W zeszłą piątek o] LT';
                case 6:
                    return '[W zeszłą sobotę o] LT';
                default:
                    return '[W zeszły] dddd [o] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'za %s',
        past: '%s temu',
        s: 'kilka sekund',
        ss: translate$5,
        m: translate$5,
        mm: translate$5,
        h: translate$5,
        hh: translate$5,
        d: '1 dzień',
        dd: '%d dni',
        M: 'miesiąc',
        MM: translate$5,
        y: 'rok',
        yy: translate$5
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//! moment.js locale configuration
//! locale : Portuguese (Brazil) [pt-br]
//! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira
/** @type {?} */
var ptBrLocale = {
    abbr: 'pt-br',
    months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
    monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
    weekdays: 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
    weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
    weekdaysMin: 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D [de] MMMM [de] YYYY',
        LLL: 'D [de] MMMM [de] YYYY [às] HH:mm',
        LLLL: 'dddd, D [de] MMMM [de] YYYY [às] HH:mm'
    },
    calendar: {
        sameDay: '[Hoje às] LT',
        nextDay: '[Amanhã às] LT',
        nextWeek: 'dddd [às] LT',
        lastDay: '[Ontem às] LT',
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return (getDayOfWeek(date) === 0 || getDayOfWeek(date) === 6) ?
                '[Último] dddd [às] LT' : // Saturday + Sunday
                '[Última] dddd [às] LT'; // Monday - Friday
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'em %s',
        past: '%s atrás',
        s: 'poucos segundos',
        ss: '%d segundos',
        m: 'um minuto',
        mm: '%d minutos',
        h: 'uma hora',
        hh: '%d horas',
        d: 'um dia',
        dd: '%d dias',
        M: 'um mês',
        MM: '%d meses',
        y: 'um ano',
        yy: '%d anos'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// ! moment.js locale configuration
// ! locale : Romanian [ro]
//! author : Vlad Gurdiga : https://github.com/gurdiga
//! author : Valentin Agachi : https://github.com/avaly
// ! author : Earle white: https://github.com/5earle
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @return {?}
 */
function relativeTimeWithPlural(num, withoutSuffix, key) {
    /** @type {?} */
    var format = {
        ss: 'secunde',
        mm: 'minute',
        hh: 'ore',
        dd: 'zile',
        MM: 'luni',
        yy: 'ani'
    };
    /** @type {?} */
    var separator = ' ';
    if (num % 100 >= 20 || (num >= 100 && num % 100 === 0)) {
        separator = ' de ';
    }
    return num + separator + format[key];
}
/** @type {?} */
var roLocale = {
    abbr: 'ro',
    months: 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),
    monthsShort: 'ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
    monthsParseExact: true,
    weekdays: 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
    weekdaysShort: 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
    weekdaysMin: 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY H:mm',
        LLLL: 'dddd, D MMMM YYYY H:mm'
    },
    calendar: {
        sameDay: '[azi la] LT',
        nextDay: '[mâine la] LT',
        nextWeek: 'dddd [la] LT',
        lastDay: '[ieri la] LT',
        lastWeek: '[fosta] dddd [la] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'peste %s',
        past: '%s în urmă',
        s: 'câteva secunde',
        ss: relativeTimeWithPlural,
        m: 'un minut',
        mm: relativeTimeWithPlural,
        h: 'o oră',
        hh: relativeTimeWithPlural,
        d: 'o zi',
        dd: relativeTimeWithPlural,
        M: 'o lună',
        MM: relativeTimeWithPlural,
        y: 'un an',
        yy: relativeTimeWithPlural
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//! moment.js locale configuration
//! locale : Russian [ru]
//! author : Viktorminator : https://github.com/Viktorminator
//! Author : Menelion Elensúle : https://github.com/Oire
//! author : Коренберг Марк : https://github.com/socketpair
/**
 * @param {?} word
 * @param {?} num
 * @return {?}
 */
function plural$2(word, num) {
    /** @type {?} */
    var forms = word.split('_');
    return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
}
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @return {?}
 */
function relativeTimeWithPlural$1(num, withoutSuffix, key) {
    /** @type {?} */
    var format = {
        ss: withoutSuffix ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
        mm: withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
        hh: 'час_часа_часов',
        dd: 'день_дня_дней',
        MM: 'месяц_месяца_месяцев',
        yy: 'год_года_лет'
    };
    if (key === 'm') {
        return withoutSuffix ? 'минута' : 'минуту';
    }
    return num + ' ' + plural$2(format[key], +num);
}
/** @type {?} */
var monthsParse$6 = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
// http://new.gramota.ru/spravka/rules/139-prop : § 103
// Сокращения месяцев: http://new.gramota.ru/spravka/buro/search-answer?s=242637
// CLDR data:          http://www.unicode.org/cldr/charts/28/summary/ru.html#1753
/** @type {?} */
var ruLocale = {
    abbr: 'ru',
    months: {
        format: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_'),
        standalone: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_')
    },
    monthsShort: {
        // по CLDR именно "июл." и "июн.", но какой смысл менять букву на точку ?
        format: 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split('_'),
        standalone: 'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split('_')
    },
    weekdays: {
        standalone: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
        format: 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_'),
        isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
    },
    weekdaysShort: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
    weekdaysMin: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
    monthsParse: monthsParse$6,
    longMonthsParse: monthsParse$6,
    shortMonthsParse: monthsParse$6,
    // полные названия с падежами, по три буквы, для некоторых, по 4 буквы, сокращения с точкой и без точки
    monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
    // копия предыдущего
    monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
    // полные названия с падежами
    monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
    // Выражение, которое соотвествует только сокращённым формам
    monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY г.',
        LLL: 'D MMMM YYYY г., H:mm',
        LLLL: 'dddd, D MMMM YYYY г., H:mm'
    },
    calendar: {
        sameDay: '[Сегодня в] LT',
        nextDay: '[Завтра в] LT',
        lastDay: '[Вчера в] LT',
        nextWeek: /**
         * @param {?} date
         * @param {?} now
         * @return {?}
         */
        function (date, now) {
            if (getWeek(now) !== getWeek(date)) {
                switch (getDayOfWeek(date)) {
                    case 0:
                        return '[В следующее] dddd [в] LT';
                    case 1:
                    case 2:
                    case 4:
                        return '[В следующий] dddd [в] LT';
                    case 3:
                    case 5:
                    case 6:
                        return '[В следующую] dddd [в] LT';
                }
            }
            else {
                if (getDayOfWeek(date) === 2) {
                    return '[Во] dddd [в] LT';
                }
                else {
                    return '[В] dddd [в] LT';
                }
            }
        },
        lastWeek: /**
         * @param {?} date
         * @param {?} now
         * @return {?}
         */
        function (date, now) {
            if (getWeek(now) !== getWeek(date)) {
                switch (getDayOfWeek(date)) {
                    case 0:
                        return '[В прошлое] dddd [в] LT';
                    case 1:
                    case 2:
                    case 4:
                        return '[В прошлый] dddd [в] LT';
                    case 3:
                    case 5:
                    case 6:
                        return '[В прошлую] dddd [в] LT';
                }
            }
            else {
                if (getDayOfWeek(date) === 2) {
                    return '[Во] dddd [в] LT';
                }
                else {
                    return '[В] dddd [в] LT';
                }
            }
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'через %s',
        past: '%s назад',
        s: 'несколько секунд',
        ss: relativeTimeWithPlural$1,
        m: relativeTimeWithPlural$1,
        mm: relativeTimeWithPlural$1,
        h: 'час',
        hh: relativeTimeWithPlural$1,
        d: 'день',
        dd: relativeTimeWithPlural$1,
        M: 'месяц',
        MM: relativeTimeWithPlural$1,
        y: 'год',
        yy: relativeTimeWithPlural$1
    },
    meridiemParse: /ночи|утра|дня|вечера/i,
    isPM: /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return /^(дня|вечера)$/.test(input);
    },
    meridiem: /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    function (hour, minute, isLower) {
        if (hour < 4) {
            return 'ночи';
        }
        else if (hour < 12) {
            return 'утра';
        }
        else if (hour < 17) {
            return 'дня';
        }
        else {
            return 'вечера';
        }
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
    ordinal: /**
     * @param {?} _num
     * @param {?} period
     * @return {?}
     */
    function (_num, period) {
        /** @type {?} */
        var num = Number(_num);
        switch (period) {
            case 'M':
            case 'd':
            case 'DDD':
                return num + '-й';
            case 'D':
                return num + '-го';
            case 'w':
            case 'W':
                return num + '-я';
            default:
                return num.toString(10);
        }
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//! moment.js locale configuration
//! locale : Slovak [sk]
//! author : Jozef Pažin : https://github.com/atiris
/** @type {?} */
var months$2 = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_');
/** @type {?} */
var monthsShort$6 = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_');
/**
 * @param {?} num
 * @return {?}
 */
function plural$3(num) {
    return (num > 1) && (num < 5) && (~~(num / 10) !== 1);
}
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function translate$6(num, withoutSuffix, key, isFuture) {
    /** @type {?} */
    var result = num + ' ';
    switch (key) {
        case 's': // a few seconds / in a few seconds / a few seconds ago
            return (withoutSuffix || isFuture) ? 'pár sekúnd' : 'pár sekundami';
        case 'ss': // 9 seconds / in 9 seconds / 9 seconds ago
            if (withoutSuffix || isFuture) {
                return result + (plural$3(num) ? 'sekundy' : 'sekúnd');
            }
            else {
                return result + 'sekundami';
            }
        // break;
        case 'm': // a minute / in a minute / a minute ago
            return withoutSuffix ? 'minúta' : (isFuture ? 'minútu' : 'minútou');
        case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
            if (withoutSuffix || isFuture) {
                return result + (plural$3(num) ? 'minúty' : 'minút');
            }
            else {
                return result + 'minútami';
            }
        // break;
        case 'h': // an hour / in an hour / an hour ago
            return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
        case 'hh': // 9 hours / in 9 hours / 9 hours ago
            if (withoutSuffix || isFuture) {
                return result + (plural$3(num) ? 'hodiny' : 'hodín');
            }
            else {
                return result + 'hodinami';
            }
        // break;
        case 'd': // a day / in a day / a day ago
            return (withoutSuffix || isFuture) ? 'deň' : 'dňom';
        case 'dd': // 9 days / in 9 days / 9 days ago
            if (withoutSuffix || isFuture) {
                return result + (plural$3(num) ? 'dni' : 'dní');
            }
            else {
                return result + 'dňami';
            }
        // break;
        case 'M': // a month / in a month / a month ago
            return (withoutSuffix || isFuture) ? 'mesiac' : 'mesiacom';
        case 'MM': // 9 months / in 9 months / 9 months ago
            if (withoutSuffix || isFuture) {
                return result + (plural$3(num) ? 'mesiace' : 'mesiacov');
            }
            else {
                return result + 'mesiacmi';
            }
        // break;
        case 'y': // a year / in a year / a year ago
            return (withoutSuffix || isFuture) ? 'rok' : 'rokom';
        case 'yy': // 9 years / in 9 years / 9 years ago
            if (withoutSuffix || isFuture) {
                return result + (plural$3(num) ? 'roky' : 'rokov');
            }
            else {
                return result + 'rokmi';
            }
        // break;
    }
}
/** @type {?} */
var skLocale = {
    abbr: 'sk',
    months: months$2,
    monthsShort: monthsShort$6,
    weekdays: 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),
    weekdaysShort: 'ne_po_ut_st_št_pi_so'.split('_'),
    weekdaysMin: 'ne_po_ut_st_št_pi_so'.split('_'),
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY H:mm',
        LLLL: 'dddd D. MMMM YYYY H:mm',
        l: 'D. M. YYYY'
    },
    calendar: {
        sameDay: '[dnes o] LT',
        nextDay: '[zajtra o] LT',
        nextWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            switch (getDayOfWeek(date)) {
                case 0:
                    return '[v nedeľu o] LT';
                case 1:
                case 2:
                    return '[v] dddd [o] LT';
                case 3:
                    return '[v stredu o] LT';
                case 4:
                    return '[vo štvrtok o] LT';
                case 5:
                    return '[v piatok o] LT';
                case 6:
                    return '[v sobotu o] LT';
            }
        },
        lastDay: '[včera o] LT',
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            switch (getDayOfWeek(date)) {
                case 0:
                    return '[minulú nedeľu o] LT';
                case 1:
                case 2:
                    return '[minulý] dddd [o] LT';
                case 3:
                    return '[minulú stredu o] LT';
                case 4:
                case 5:
                    return '[minulý] dddd [o] LT';
                case 6:
                    return '[minulú sobotu o] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'o %s',
        past: 'pred %s',
        s: translate$6,
        ss: translate$6,
        m: translate$6,
        mm: translate$6,
        h: translate$6,
        hh: translate$6,
        d: translate$6,
        dd: translate$6,
        M: translate$6,
        MM: translate$6,
        y: translate$6,
        yy: translate$6
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//! moment.js locale configuration
//! locale : Slovenian [sl]
//! author : mihan : https://github.com/mihan
/**
 * @param {?} number
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function processRelativeTime$1(number, withoutSuffix, key, isFuture) {
    /** @type {?} */
    var result = number + ' ';
    switch (key) {
        case 's':
            return withoutSuffix || isFuture ? 'nekaj sekund' : 'nekaj sekundami';
        case 'ss':
            if (number === 1) {
                result += withoutSuffix ? 'sekundo' : 'sekundi';
            }
            else if (number === 2) {
                result += withoutSuffix || isFuture ? 'sekundi' : 'sekundah';
            }
            else if (number < 5) {
                result += withoutSuffix || isFuture ? 'sekunde' : 'sekundah';
            }
            else {
                result += withoutSuffix || isFuture ? 'sekund' : 'sekund';
            }
            return result;
        case 'm':
            return withoutSuffix ? 'ena minuta' : 'eno minuto';
        case 'mm':
            if (number === 1) {
                result += withoutSuffix ? 'minuta' : 'minuto';
            }
            else if (number === 2) {
                result += withoutSuffix || isFuture ? 'minuti' : 'minutama';
            }
            else if (number < 5) {
                result += withoutSuffix || isFuture ? 'minute' : 'minutami';
            }
            else {
                result += withoutSuffix || isFuture ? 'minut' : 'minutami';
            }
            return result;
        case 'h':
            return withoutSuffix ? 'ena ura' : 'eno uro';
        case 'hh':
            if (number === 1) {
                result += withoutSuffix ? 'ura' : 'uro';
            }
            else if (number === 2) {
                result += withoutSuffix || isFuture ? 'uri' : 'urama';
            }
            else if (number < 5) {
                result += withoutSuffix || isFuture ? 'ure' : 'urami';
            }
            else {
                result += withoutSuffix || isFuture ? 'ur' : 'urami';
            }
            return result;
        case 'd':
            return withoutSuffix || isFuture ? 'en dan' : 'enim dnem';
        case 'dd':
            if (number === 1) {
                result += withoutSuffix || isFuture ? 'dan' : 'dnem';
            }
            else if (number === 2) {
                result += withoutSuffix || isFuture ? 'dni' : 'dnevoma';
            }
            else {
                result += withoutSuffix || isFuture ? 'dni' : 'dnevi';
            }
            return result;
        case 'M':
            return withoutSuffix || isFuture ? 'en mesec' : 'enim mesecem';
        case 'MM':
            if (number === 1) {
                result += withoutSuffix || isFuture ? 'mesec' : 'mesecem';
            }
            else if (number === 2) {
                result += withoutSuffix || isFuture ? 'meseca' : 'mesecema';
            }
            else if (number < 5) {
                result += withoutSuffix || isFuture ? 'mesece' : 'meseci';
            }
            else {
                result += withoutSuffix || isFuture ? 'mesecev' : 'meseci';
            }
            return result;
        case 'y':
            return withoutSuffix || isFuture ? 'eno leto' : 'enim letom';
        case 'yy':
            if (number === 1) {
                result += withoutSuffix || isFuture ? 'leto' : 'letom';
            }
            else if (number === 2) {
                result += withoutSuffix || isFuture ? 'leti' : 'letoma';
            }
            else if (number < 5) {
                result += withoutSuffix || isFuture ? 'leta' : 'leti';
            }
            else {
                result += withoutSuffix || isFuture ? 'let' : 'leti';
            }
            return result;
    }
}
/** @type {?} */
var slLocale = {
    abbr: 'sl',
    months: 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
    monthsShort: 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
    monthsParseExact: true,
    weekdays: 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
    weekdaysShort: 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
    weekdaysMin: 'ne_po_to_sr_če_pe_so'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY H:mm',
        LLLL: 'dddd, D. MMMM YYYY H:mm'
    },
    calendar: {
        sameDay: '[danes ob] LT',
        nextDay: '[jutri ob] LT',
        nextWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            switch (getDayOfWeek(date)) {
                case 0:
                    return '[v] [nedeljo] [ob] LT';
                case 3:
                    return '[v] [sredo] [ob] LT';
                case 6:
                    return '[v] [soboto] [ob] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[v] dddd [ob] LT';
            }
        },
        lastDay: '[včeraj ob] LT',
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            switch (getDayOfWeek(date)) {
                case 0:
                    return '[prejšnjo] [nedeljo] [ob] LT';
                case 3:
                    return '[prejšnjo] [sredo] [ob] LT';
                case 6:
                    return '[prejšnjo] [soboto] [ob] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[prejšnji] dddd [ob] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'čez %s',
        past: 'pred %s',
        s: processRelativeTime$1,
        ss: processRelativeTime$1,
        m: processRelativeTime$1,
        mm: processRelativeTime$1,
        h: processRelativeTime$1,
        hh: processRelativeTime$1,
        d: processRelativeTime$1,
        dd: processRelativeTime$1,
        M: processRelativeTime$1,
        MM: processRelativeTime$1,
        y: processRelativeTime$1,
        yy: processRelativeTime$1
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Swedish [sv]
//! author : Jens Alm : https://github.com/ulmus
/** @type {?} */
var svLocale = {
    abbr: 'sv',
    months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
    monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
    weekdays: 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
    weekdaysShort: 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
    weekdaysMin: 'sö_må_ti_on_to_fr_lö'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'YYYY-MM-DD',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY [kl.] HH:mm',
        LLLL: 'dddd D MMMM YYYY [kl.] HH:mm',
        lll: 'D MMM YYYY HH:mm',
        llll: 'ddd D MMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Idag] LT',
        nextDay: '[Imorgon] LT',
        lastDay: '[Igår] LT',
        nextWeek: '[På] dddd LT',
        lastWeek: '[I] dddd[s] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'om %s',
        past: 'för %s sedan',
        s: 'några sekunder',
        ss: '%d sekunder',
        m: 'en minut',
        mm: '%d minuter',
        h: 'en timme',
        hh: '%d timmar',
        d: 'en dag',
        dd: '%d dagar',
        M: 'en månad',
        MM: '%d månader',
        y: 'ett år',
        yy: '%d år'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
    ordinal: /**
     * @param {?} _num
     * @return {?}
     */
    function (_num) {
        /** @type {?} */
        var num = Number(_num);
        /** @type {?} */
        var b = num % 10;
        /** @type {?} */
        var output = (~~(num % 100 / 10) === 1) ? 'e' :
            (b === 1) ? 'a' :
                (b === 2) ? 'a' :
                    (b === 3) ? 'e' : 'e';
        return num + output;
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// moment.js locale configuration
// locale : Thai [th]
// author : Watcharapol Sanitwong : https://github.com/tumit
/** @type {?} */
var thLocale = {
    abbr: 'th',
    months: 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
    monthsShort: 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'.split('_'),
    monthsParseExact: true,
    weekdays: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
    weekdaysShort: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'),
    // yes, three characters difference
    weekdaysMin: 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY เวลา H:mm',
        LLLL: 'วันddddที่ D MMMM YYYY เวลา H:mm'
    },
    meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
    isPM: /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return input === 'หลังเที่ยง';
    },
    meridiem: /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    function (hour, minute, isLower) {
        if (hour < 12) {
            return 'ก่อนเที่ยง';
        }
        else {
            return 'หลังเที่ยง';
        }
    },
    calendar: {
        sameDay: '[วันนี้ เวลา] LT',
        nextDay: '[พรุ่งนี้ เวลา] LT',
        nextWeek: 'dddd[หน้า เวลา] LT',
        lastDay: '[เมื่อวานนี้ เวลา] LT',
        lastWeek: '[วัน]dddd[ที่แล้ว เวลา] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'อีก %s',
        past: '%sที่แล้ว',
        s: 'ไม่กี่วินาที',
        ss: '%d วินาที',
        m: '1 นาที',
        mm: '%d นาที',
        h: '1 ชั่วโมง',
        hh: '%d ชั่วโมง',
        d: '1 วัน',
        dd: '%d วัน',
        M: '1 เดือน',
        MM: '%d เดือน',
        y: '1 ปี',
        yy: '%d ปี'
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Turkish [tr]
//! authors : Erhan Gundogan : https://github.com/erhangundogan,
//!           Burak Yiğit Kaya: https://github.com/BYK
/** @type {?} */
var suffixes = {
    1: '\'inci',
    5: '\'inci',
    8: '\'inci',
    70: '\'inci',
    80: '\'inci',
    2: '\'nci',
    7: '\'nci',
    20: '\'nci',
    50: '\'nci',
    3: '\'üncü',
    4: '\'üncü',
    100: '\'üncü',
    6: '\'ncı',
    9: '\'uncu',
    10: '\'uncu',
    30: '\'uncu',
    60: '\'ıncı',
    90: '\'ıncı'
};
/** @type {?} */
var trLocale = {
    abbr: 'tr',
    months: 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
    monthsShort: 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
    weekdays: 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
    weekdaysShort: 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
    weekdaysMin: 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[bugün saat] LT',
        nextDay: '[yarın saat] LT',
        nextWeek: '[gelecek] dddd [saat] LT',
        lastDay: '[dün] LT',
        lastWeek: '[geçen] dddd [saat] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s sonra',
        past: '%s önce',
        s: 'birkaç saniye',
        ss: '%d saniye',
        m: 'bir dakika',
        mm: '%d dakika',
        h: 'bir saat',
        hh: '%d saat',
        d: 'bir gün',
        dd: '%d gün',
        M: 'bir ay',
        MM: '%d ay',
        y: 'bir yıl',
        yy: '%d yıl'
    },
    dayOfMonthOrdinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
    ordinal: /**
     * @param {?} _num
     * @return {?}
     */
    function (_num) {
        /** @type {?} */
        var num = Number(_num);
        if (num === 0) { // special case for zero
            return num + '\'ıncı';
        }
        /** @type {?} */
        var a = num % 10;
        /** @type {?} */
        var b = num % 100 - a;
        /** @type {?} */
        var c = num >= 100 ? 100 : null;
        return num + (suffixes[a] || suffixes[b] || suffixes[c]);
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// tslint:disable:no-parameter-reassignment prefer-switch
//! moment.js locale configuration
//! locale : Chinese (China) [zh-cn]
//! author : suupic : https://github.com/suupic
//! author : Zeno Zeng : https://github.com/zenozeng
/** @type {?} */
var zhCnLocale = {
    abbr: 'zh-cn',
    months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
    monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
    weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
    weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'YYYY/MM/DD',
        LL: 'YYYY年M月D日',
        LLL: 'YYYY年M月D日Ah点mm分',
        LLLL: 'YYYY年M月D日ddddAh点mm分',
        l: 'YYYY/M/D',
        ll: 'YYYY年M月D日',
        lll: 'YYYY年M月D日 HH:mm',
        llll: 'YYYY年M月D日dddd HH:mm'
    },
    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
    meridiemHour: /**
     * @param {?} hour
     * @param {?} meridiem
     * @return {?}
     */
    function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === '凌晨' || meridiem === '早上' ||
            meridiem === '上午') {
            return hour;
        }
        else if (meridiem === '下午' || meridiem === '晚上') {
            return hour + 12;
        }
        else {
            // '中午'
            return hour >= 11 ? hour : hour + 12;
        }
    },
    meridiem: /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    function (hour, minute, isLower) {
        /** @type {?} */
        var hm = hour * 100 + minute;
        if (hm < 600) {
            return '凌晨';
        }
        else if (hm < 900) {
            return '早上';
        }
        else if (hm < 1130) {
            return '上午';
        }
        else if (hm < 1230) {
            return '中午';
        }
        else if (hm < 1800) {
            return '下午';
        }
        else {
            return '晚上';
        }
    },
    calendar: {
        sameDay: '[今天]LT',
        nextDay: '[明天]LT',
        nextWeek: '[下]ddddLT',
        lastDay: '[昨天]LT',
        lastWeek: '[上]ddddLT',
        sameElse: 'L'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
    ordinal: /**
     * @param {?} _num
     * @param {?} period
     * @return {?}
     */
    function (_num, period) {
        /** @type {?} */
        var num = Number(_num);
        switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
                return num + '日';
            case 'M':
                return num + '月';
            case 'w':
            case 'W':
                return num + '周';
            default:
                return num.toString();
        }
    },
    relativeTime: {
        future: '%s内',
        past: '%s前',
        s: '几秒',
        ss: '%d 秒',
        m: '1 分钟',
        mm: '%d 分钟',
        h: '1 小时',
        hh: '%d 小时',
        d: '1 天',
        dd: '%d 天',
        M: '1 个月',
        MM: '%d 个月',
        y: '1 年',
        yy: '%d 年'
    },
    week: {
        // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-bootstrap-chronos.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/component-loader/fesm5/ngx-bootstrap-component-loader.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/component-loader/fesm5/ngx-bootstrap-component-loader.js ***!
  \*********************************************************************************************/
/*! exports provided: BsComponentRef, ComponentLoader, ComponentLoaderFactory, ContentRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsComponentRef", function() { return BsComponentRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentLoader", function() { return ComponentLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentLoaderFactory", function() { return ComponentLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentRef", function() { return ContentRef; });
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/utils/fesm5/ngx-bootstrap-utils.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/positioning */ "./node_modules/ngx-bootstrap/positioning/fesm5/ngx-bootstrap-positioning.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
BsComponentRef = /** @class */ (function () {
    function BsComponentRef() {
    }
    return BsComponentRef;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var ContentRef = /** @class */ (function () {
    function ContentRef(
    /* tslint:disable-next-line: no-any */
    nodes, viewRef, 
    /* tslint:disable-next-line: no-any */
    componentRef) {
        this.nodes = nodes;
        this.viewRef = viewRef;
        this.componentRef = componentRef;
    }
    return ContentRef;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
ComponentLoader = /** @class */ (function () {
    /**
     * Do not use this directly, it should be instanced via
     * `ComponentLoadFactory.attach`
     * @internal
     */
    // tslint:disable-next-line
    function ComponentLoader(_viewContainerRef, _renderer, _elementRef, _injector, _componentFactoryResolver, _ngZone, _applicationRef, _posService) {
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._injector = _injector;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._applicationRef = _applicationRef;
        this._posService = _posService;
        this.onBeforeShow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /* tslint:disable-next-line: no-any*/
        this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /* tslint:disable-next-line: no-any*/
        this.onBeforeHide = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._providers = [];
        this._isHiding = false;
        this._listenOpts = {};
        this._globalListener = Function.prototype;
    }
    Object.defineProperty(ComponentLoader.prototype, "isShown", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._isHiding) {
                return false;
            }
            return !!this._componentRef;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} compType
     * @return {?}
     */
    ComponentLoader.prototype.attach = /**
     * @param {?} compType
     * @return {?}
     */
    function (compType) {
        this._componentFactory = this._componentFactoryResolver
            .resolveComponentFactory(compType);
        return this;
    };
    // todo: add behaviour: to target element, `body`, custom element
    // todo: add behaviour: to target element, `body`, custom element
    /**
     * @param {?=} container
     * @return {?}
     */
    ComponentLoader.prototype.to = 
    // todo: add behaviour: to target element, `body`, custom element
    /**
     * @param {?=} container
     * @return {?}
     */
    function (container) {
        this.container = container || this.container;
        return this;
    };
    /**
     * @param {?=} opts
     * @return {?}
     */
    ComponentLoader.prototype.position = /**
     * @param {?=} opts
     * @return {?}
     */
    function (opts) {
        this.attachment = opts.attachment || this.attachment;
        this._elementRef = ((/** @type {?} */ (opts.target))) || this._elementRef;
        return this;
    };
    /**
     * @param {?} provider
     * @return {?}
     */
    ComponentLoader.prototype.provide = /**
     * @param {?} provider
     * @return {?}
     */
    function (provider) {
        this._providers.push(provider);
        return this;
    };
    // todo: appendChild to element or document.querySelector(this.container)
    // todo: appendChild to element or document.querySelector(this.container)
    /**
     * @param {?=} opts
     * @return {?}
     */
    ComponentLoader.prototype.show = 
    // todo: appendChild to element or document.querySelector(this.container)
    /**
     * @param {?=} opts
     * @return {?}
     */
    function (opts) {
        if (opts === void 0) { opts = {}; }
        this._subscribePositioning();
        this._innerComponent = null;
        if (!this._componentRef) {
            this.onBeforeShow.emit();
            this._contentRef = this._getContentRef(opts.content, opts.context, opts.initialState);
            /** @type {?} */
            var injector = _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"].create({
                providers: this._providers,
                parent: this._injector
            });
            this._componentRef = this._componentFactory.create(injector, this._contentRef.nodes);
            this._applicationRef.attachView(this._componentRef.hostView);
            // this._componentRef = this._viewContainerRef
            //   .createComponent(this._componentFactory, 0, injector, this._contentRef.nodes);
            this.instance = this._componentRef.instance;
            Object.assign(this._componentRef.instance, opts);
            if (this.container instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]) {
                this.container.nativeElement.appendChild(this._componentRef.location.nativeElement);
            }
            if (this.container === 'body' && typeof document !== 'undefined') {
                document
                    .querySelector((/** @type {?} */ (this.container)))
                    .appendChild(this._componentRef.location.nativeElement);
            }
            if (!this.container &&
                this._elementRef &&
                this._elementRef.nativeElement.parentElement) {
                this._elementRef.nativeElement.parentElement.appendChild(this._componentRef.location.nativeElement);
            }
            // we need to manually invoke change detection since events registered
            // via
            // Renderer::listen() are not picked up by change detection with the
            // OnPush strategy
            if (this._contentRef.componentRef) {
                this._innerComponent = this._contentRef.componentRef.instance;
                this._contentRef.componentRef.changeDetectorRef.markForCheck();
                this._contentRef.componentRef.changeDetectorRef.detectChanges();
            }
            this._componentRef.changeDetectorRef.markForCheck();
            this._componentRef.changeDetectorRef.detectChanges();
            this.onShown.emit(this._componentRef.instance);
        }
        this._registerOutsideClick();
        return this._componentRef;
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype.hide = /**
     * @return {?}
     */
    function () {
        if (!this._componentRef) {
            return this;
        }
        this._posService.deletePositionElement(this._componentRef.location);
        this.onBeforeHide.emit(this._componentRef.instance);
        /** @type {?} */
        var componentEl = this._componentRef.location.nativeElement;
        componentEl.parentNode.removeChild(componentEl);
        if (this._contentRef.componentRef) {
            this._contentRef.componentRef.destroy();
        }
        this._componentRef.destroy();
        if (this._viewContainerRef && this._contentRef.viewRef) {
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
        }
        if (this._contentRef.viewRef) {
            this._contentRef.viewRef.destroy();
        }
        this._contentRef = null;
        this._componentRef = null;
        this._removeGlobalListener();
        this.onHidden.emit();
        return this;
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype.toggle = /**
     * @return {?}
     */
    function () {
        if (this.isShown) {
            this.hide();
            return;
        }
        this.show();
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype.dispose = /**
     * @return {?}
     */
    function () {
        if (this.isShown) {
            this.hide();
        }
        this._unsubscribePositioning();
        if (this._unregisterListenersFn) {
            this._unregisterListenersFn();
        }
    };
    /**
     * @param {?} listenOpts
     * @return {?}
     */
    ComponentLoader.prototype.listen = /**
     * @param {?} listenOpts
     * @return {?}
     */
    function (listenOpts) {
        var _this = this;
        this.triggers = listenOpts.triggers || this.triggers;
        this._listenOpts.outsideClick = listenOpts.outsideClick;
        this._listenOpts.outsideEsc = listenOpts.outsideEsc;
        listenOpts.target = listenOpts.target || this._elementRef.nativeElement;
        /** @type {?} */
        var hide = (this._listenOpts.hide = function () {
            return listenOpts.hide ? listenOpts.hide() : void _this.hide();
        });
        /** @type {?} */
        var show = (this._listenOpts.show = function (registerHide) {
            listenOpts.show ? listenOpts.show(registerHide) : _this.show(registerHide);
            registerHide();
        });
        /** @type {?} */
        var toggle = function (registerHide) {
            _this.isShown ? hide() : show(registerHide);
        };
        this._unregisterListenersFn = Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__["listenToTriggersV2"])(this._renderer, {
            target: listenOpts.target,
            triggers: listenOpts.triggers,
            show: show,
            hide: hide,
            toggle: toggle
        });
        return this;
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype._removeGlobalListener = /**
     * @return {?}
     */
    function () {
        if (this._globalListener) {
            this._globalListener();
            this._globalListener = null;
        }
    };
    /**
     * @param {?} vRef
     * @param {?} template
     * @return {?}
     */
    ComponentLoader.prototype.attachInline = /**
     * @param {?} vRef
     * @param {?} template
     * @return {?}
     */
    function (vRef, 
    /* tslint:disable-next-line: no-any*/
    template) {
        this._inlineViewRef = vRef.createEmbeddedView(template);
        return this;
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype._registerOutsideClick = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._componentRef || !this._componentRef.location) {
            return;
        }
        // why: should run after first event bubble
        if (this._listenOpts.outsideClick) {
            /** @type {?} */
            var target_1 = this._componentRef.location.nativeElement;
            setTimeout(function () {
                _this._globalListener = Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__["registerOutsideClick"])(_this._renderer, {
                    targets: [target_1, _this._elementRef.nativeElement],
                    outsideClick: _this._listenOpts.outsideClick,
                    hide: function () { return _this._listenOpts.hide(); }
                });
            });
        }
        if (this._listenOpts.outsideEsc) {
            /** @type {?} */
            var target = this._componentRef.location.nativeElement;
            this._globalListener = Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_0__["registerEscClick"])(this._renderer, {
                targets: [target, this._elementRef.nativeElement],
                outsideEsc: this._listenOpts.outsideEsc,
                hide: function () { return _this._listenOpts.hide(); }
            });
        }
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype.getInnerComponent = /**
     * @return {?}
     */
    function () {
        return this._innerComponent;
    };
    /**
     * @private
     * @return {?}
     */
    ComponentLoader.prototype._subscribePositioning = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._zoneSubscription || !this.attachment) {
            return;
        }
        this._zoneSubscription = this._ngZone.onStable.subscribe(function () {
            if (!_this._componentRef) {
                return;
            }
            _this._posService.position({
                element: _this._componentRef.location,
                target: _this._elementRef,
                attachment: _this.attachment,
                appendToBody: _this.container === 'body'
            });
        });
    };
    /**
     * @private
     * @return {?}
     */
    ComponentLoader.prototype._unsubscribePositioning = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this._zoneSubscription) {
            return;
        }
        this._zoneSubscription.unsubscribe();
        this._zoneSubscription = null;
    };
    /**
     * @private
     * @param {?} content
     * @param {?=} context
     * @param {?=} initialState
     * @return {?}
     */
    ComponentLoader.prototype._getContentRef = /**
     * @private
     * @param {?} content
     * @param {?=} context
     * @param {?=} initialState
     * @return {?}
     */
    function (
    /* tslint:disable-next-line: no-any*/
    content, 
    /* tslint:disable-next-line: no-any*/
    context, 
    /* tslint:disable-next-line: no-any*/
    initialState) {
        if (!content) {
            return new ContentRef([]);
        }
        if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]) {
            if (this._viewContainerRef) {
                /** @type {?} */
                var _viewRef = this._viewContainerRef
                    .createEmbeddedView(content, context);
                _viewRef.markForCheck();
                return new ContentRef([_viewRef.rootNodes], _viewRef);
            }
            /** @type {?} */
            var viewRef = content.createEmbeddedView({});
            this._applicationRef.attachView(viewRef);
            return new ContentRef([viewRef.rootNodes], viewRef);
        }
        if (typeof content === 'function') {
            /** @type {?} */
            var contentCmptFactory = this._componentFactoryResolver.resolveComponentFactory(content);
            /** @type {?} */
            var modalContentInjector = _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"].create({
                providers: this._providers,
                parent: this._injector
            });
            /** @type {?} */
            var componentRef = contentCmptFactory.create(modalContentInjector);
            Object.assign(componentRef.instance, initialState);
            this._applicationRef.attachView(componentRef.hostView);
            return new ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
        }
        return new ContentRef([[this._renderer.createText("" + content)]]);
    };
    return ComponentLoader;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ComponentLoaderFactory = /** @class */ (function () {
    function ComponentLoaderFactory(_componentFactoryResolver, _ngZone, _injector, _posService, _applicationRef) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._injector = _injector;
        this._posService = _posService;
        this._applicationRef = _applicationRef;
    }
    /**
     *
     * @param _elementRef
     * @param _viewContainerRef
     * @param _renderer
     */
    /**
     *
     * @template T
     * @param {?} _elementRef
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @return {?}
     */
    ComponentLoaderFactory.prototype.createLoader = /**
     *
     * @template T
     * @param {?} _elementRef
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @return {?}
     */
    function (_elementRef, _viewContainerRef, _renderer) {
        return new ComponentLoader(_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._applicationRef, this._posService);
    };
    ComponentLoaderFactory.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
    ];
    /** @nocollapse */
    ComponentLoaderFactory.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_2__["PositioningService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] }
    ]; };
    return ComponentLoaderFactory;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-bootstrap-component-loader.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js ***!
  \*********************************************************************************/
/*! exports provided: BsDatepickerConfig, BsDatepickerDirective, BsDatepickerInlineConfig, BsDatepickerInlineDirective, BsDatepickerModule, BsDaterangepickerConfig, BsDaterangepickerDirective, BsLocaleService, DateFormatter, DatePickerComponent, DatepickerConfig, DatepickerModule, DayPickerComponent, MonthPickerComponent, YearPickerComponent, ɵl, ɵr, ɵs, ɵt, ɵa, ɵo, ɵn, ɵm, ɵf, ɵc, ɵj, ɵk, ɵb, ɵq, ɵd, ɵp, ɵg, ɵh, ɵe, ɵi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerConfig", function() { return BsDatepickerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerDirective", function() { return BsDatepickerDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerInlineConfig", function() { return BsDatepickerInlineConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerInlineDirective", function() { return BsDatepickerInlineDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDatepickerModule", function() { return BsDatepickerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDaterangepickerConfig", function() { return BsDaterangepickerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsDaterangepickerDirective", function() { return BsDaterangepickerDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsLocaleService", function() { return BsLocaleService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateFormatter", function() { return DateFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerComponent", function() { return DatePickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerConfig", function() { return DatepickerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerModule", function() { return DatepickerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayPickerComponent", function() { return DayPickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthPickerComponent", function() { return MonthPickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YearPickerComponent", function() { return YearPickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return BsDatepickerAbstractComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return BsDatepickerInputDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return BsDaterangepickerInputDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵt", function() { return DatePickerInnerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DATEPICKER_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return BsDatepickerActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return BsDatepickerEffects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return BsDatepickerStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return BsCalendarLayoutComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return BsCurrentDateViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return BsCustomDatesViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return BsDatepickerContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return BsDatepickerDayDecoratorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return BsDatepickerInlineContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return BsDatepickerNavigationViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return BsDaterangepickerContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return BsDaysCalendarViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return BsMonthCalendarViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return BsTimepickerViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return BsYearsCalendarViewComponent; });
/* harmony import */ var ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/mini-ngrx */ "./node_modules/ngx-bootstrap/mini-ngrx/fesm5/ngx-bootstrap-mini-ngrx.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/positioning */ "./node_modules/ngx-bootstrap/positioning/fesm5/ngx-bootstrap-positioning.js");
/* harmony import */ var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/component-loader */ "./node_modules/ngx-bootstrap/component-loader/fesm5/ngx-bootstrap-component-loader.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "./node_modules/ngx-bootstrap/chronos/fesm5/ngx-bootstrap-chronos.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/utils/fesm5/ngx-bootstrap-utils.js");












/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * For date range picker there are `BsDaterangepickerConfig` which inherits all properties,
 * except `displayMonths`, for range picker it default to `2`
 */
var BsDatepickerConfig = /** @class */ (function () {
    function BsDatepickerConfig() {
        /**
         * sets use adaptive position
         */
        this.adaptivePosition = false;
        /**
         * CSS class which will be applied to datepicker container,
         * usually used to set color theme
         */
        this.containerClass = 'theme-green';
        // DatepickerRenderOptions
        this.displayMonths = 1;
        /**
         * Allows to hide week numbers in datepicker
         */
        this.showWeekNumbers = true;
        this.dateInputFormat = 'L';
        // range picker
        this.rangeSeparator = ' - ';
        /**
         * Date format for date range input field
         */
        this.rangeInputFormat = 'L';
        // DatepickerFormatOptions
        this.monthTitle = 'MMMM';
        this.yearTitle = 'YYYY';
        this.dayLabel = 'D';
        this.monthLabel = 'MMMM';
        this.yearLabel = 'YYYY';
        this.weekNumbers = 'w';
    }
    BsDatepickerConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"] }
    ];
    return BsDatepickerConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
BsDatepickerAbstractComponent = /** @class */ (function () {
    function BsDatepickerAbstractComponent() {
        this._customRangesFish = [];
    }
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "minDate", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setMinDate(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "maxDate", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setMaxDate(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "daysDisabled", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setDaysDisabled(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "datesDisabled", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setDatesDisabled(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "isDisabled", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setDisabled(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.setViewMode = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.navigateTo = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.dayHoverHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.weekHoverHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.monthHoverHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.yearHoverHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} day
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.daySelectHandler = /**
     * @param {?} day
     * @return {?}
     */
    function (day) { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.monthSelectHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.yearSelectHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /* tslint:disable-next-line: no-any */
    /* tslint:disable-next-line: no-any */
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype._stopPropagation = /* tslint:disable-next-line: no-any */
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
    };
    return BsDatepickerAbstractComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsDatepickerActions = /** @class */ (function () {
    function BsDatepickerActions() {
    }
    /**
     * @return {?}
     */
    BsDatepickerActions.prototype.calculate = /**
     * @return {?}
     */
    function () {
        return { type: BsDatepickerActions.CALCULATE };
    };
    /**
     * @return {?}
     */
    BsDatepickerActions.prototype.format = /**
     * @return {?}
     */
    function () {
        return { type: BsDatepickerActions.FORMAT };
    };
    /**
     * @return {?}
     */
    BsDatepickerActions.prototype.flag = /**
     * @return {?}
     */
    function () {
        return { type: BsDatepickerActions.FLAG };
    };
    /**
     * @param {?} date
     * @return {?}
     */
    BsDatepickerActions.prototype.select = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return {
            type: BsDatepickerActions.SELECT,
            payload: date
        };
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerActions.prototype.changeViewMode = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return {
            type: BsDatepickerActions.CHANGE_VIEWMODE,
            payload: event
        };
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerActions.prototype.navigateTo = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return {
            type: BsDatepickerActions.NAVIGATE_TO,
            payload: event
        };
    };
    /**
     * @param {?} step
     * @return {?}
     */
    BsDatepickerActions.prototype.navigateStep = /**
     * @param {?} step
     * @return {?}
     */
    function (step) {
        return {
            type: BsDatepickerActions.NAVIGATE_OFFSET,
            payload: step
        };
    };
    /**
     * @param {?} options
     * @return {?}
     */
    BsDatepickerActions.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return {
            type: BsDatepickerActions.SET_OPTIONS,
            payload: options
        };
    };
    // date range picker
    // date range picker
    /**
     * @param {?} value
     * @return {?}
     */
    BsDatepickerActions.prototype.selectRange = 
    // date range picker
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return {
            type: BsDatepickerActions.SELECT_RANGE,
            payload: value
        };
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerActions.prototype.hoverDay = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return {
            type: BsDatepickerActions.HOVER,
            payload: event.isHovered ? event.cell.date : null
        };
    };
    /**
     * @param {?} date
     * @return {?}
     */
    BsDatepickerActions.prototype.minDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return {
            type: BsDatepickerActions.SET_MIN_DATE,
            payload: date
        };
    };
    /**
     * @param {?} date
     * @return {?}
     */
    BsDatepickerActions.prototype.maxDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return {
            type: BsDatepickerActions.SET_MAX_DATE,
            payload: date
        };
    };
    /**
     * @param {?} days
     * @return {?}
     */
    BsDatepickerActions.prototype.daysDisabled = /**
     * @param {?} days
     * @return {?}
     */
    function (days) {
        return {
            type: BsDatepickerActions.SET_DAYSDISABLED,
            payload: days
        };
    };
    /**
     * @param {?} dates
     * @return {?}
     */
    BsDatepickerActions.prototype.datesDisabled = /**
     * @param {?} dates
     * @return {?}
     */
    function (dates) {
        return {
            type: BsDatepickerActions.SET_DATESDISABLED,
            payload: dates
        };
    };
    /**
     * @param {?} value
     * @return {?}
     */
    BsDatepickerActions.prototype.isDisabled = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return {
            type: BsDatepickerActions.SET_IS_DISABLED,
            payload: value
        };
    };
    /**
     * @param {?} locale
     * @return {?}
     */
    BsDatepickerActions.prototype.setLocale = /**
     * @param {?} locale
     * @return {?}
     */
    function (locale) {
        return {
            type: BsDatepickerActions.SET_LOCALE,
            payload: locale
        };
    };
    BsDatepickerActions.CALCULATE = '[datepicker] calculate dates matrix';
    BsDatepickerActions.FORMAT = '[datepicker] format datepicker values';
    BsDatepickerActions.FLAG = '[datepicker] set flags';
    BsDatepickerActions.SELECT = '[datepicker] select date';
    BsDatepickerActions.NAVIGATE_OFFSET = '[datepicker] shift view date';
    BsDatepickerActions.NAVIGATE_TO = '[datepicker] change view date';
    BsDatepickerActions.SET_OPTIONS = '[datepicker] update render options';
    BsDatepickerActions.HOVER = '[datepicker] hover date';
    BsDatepickerActions.CHANGE_VIEWMODE = '[datepicker] switch view mode';
    BsDatepickerActions.SET_MIN_DATE = '[datepicker] set min date';
    BsDatepickerActions.SET_MAX_DATE = '[datepicker] set max date';
    BsDatepickerActions.SET_DAYSDISABLED = '[datepicker] set days disabled';
    BsDatepickerActions.SET_DATESDISABLED = '[datepicker] set dates disabled';
    BsDatepickerActions.SET_IS_DISABLED = '[datepicker] set is disabled';
    BsDatepickerActions.SET_LOCALE = '[datepicker] set datepicker locale';
    BsDatepickerActions.SELECT_RANGE = '[daterangepicker] select dates range';
    BsDatepickerActions.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"] }
    ];
    return BsDatepickerActions;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsLocaleService = /** @class */ (function () {
    function BsLocaleService() {
        this._defaultLocale = 'en';
        this._locale = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this._defaultLocale);
        this._localeChange = this._locale.asObservable();
    }
    Object.defineProperty(BsLocaleService.prototype, "locale", {
        get: /**
         * @return {?}
         */
        function () {
            return this._locale;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsLocaleService.prototype, "localeChange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._localeChange;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsLocaleService.prototype, "currentLocale", {
        get: /**
         * @return {?}
         */
        function () {
            return this._locale.getValue();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} locale
     * @return {?}
     */
    BsLocaleService.prototype.use = /**
     * @param {?} locale
     * @return {?}
     */
    function (locale) {
        if (locale === this.currentLocale) {
            return;
        }
        this._locale.next(locale);
    };
    BsLocaleService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"] }
    ];
    return BsLocaleService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsDatepickerEffects = /** @class */ (function () {
    function BsDatepickerEffects(_actions, _localeService) {
        this._actions = _actions;
        this._localeService = _localeService;
        this._subs = [];
    }
    /**
     * @param {?} _bsDatepickerStore
     * @return {?}
     */
    BsDatepickerEffects.prototype.init = /**
     * @param {?} _bsDatepickerStore
     * @return {?}
     */
    function (_bsDatepickerStore) {
        this._store = _bsDatepickerStore;
        return this;
    };
    /** setters */
    /**
     * setters
     * @param {?} value
     * @return {?}
     */
    BsDatepickerEffects.prototype.setValue = /**
     * setters
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._store.dispatch(this._actions.select(value));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    BsDatepickerEffects.prototype.setRangeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._store.dispatch(this._actions.selectRange(value));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    BsDatepickerEffects.prototype.setMinDate = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._store.dispatch(this._actions.minDate(value));
        return this;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    BsDatepickerEffects.prototype.setMaxDate = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._store.dispatch(this._actions.maxDate(value));
        return this;
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @return {THIS}
     */
    BsDatepickerEffects.prototype.setDaysDisabled = /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @return {THIS}
     */
    function (value) {
        (/** @type {?} */ (this))._store.dispatch((/** @type {?} */ (this))._actions.daysDisabled(value));
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @return {THIS}
     */
    BsDatepickerEffects.prototype.setDatesDisabled = /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @return {THIS}
     */
    function (value) {
        (/** @type {?} */ (this))._store.dispatch((/** @type {?} */ (this))._actions.datesDisabled(value));
        return (/** @type {?} */ (this));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    BsDatepickerEffects.prototype.setDisabled = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._store.dispatch(this._actions.isDisabled(value));
        return this;
    };
    /* Set rendering options */
    /* Set rendering options */
    /**
     * @param {?} _config
     * @return {?}
     */
    BsDatepickerEffects.prototype.setOptions = /* Set rendering options */
    /**
     * @param {?} _config
     * @return {?}
     */
    function (_config) {
        /** @type {?} */
        var _options = Object.assign({ locale: this._localeService.currentLocale }, _config);
        this._store.dispatch(this._actions.setOptions(_options));
        return this;
    };
    /** view to mode bindings */
    /**
     * view to mode bindings
     * @param {?} container
     * @return {?}
     */
    BsDatepickerEffects.prototype.setBindings = /**
     * view to mode bindings
     * @param {?} container
     * @return {?}
     */
    function (container) {
        container.daysCalendar = this._store
            .select(function (state) { return state.flaggedMonths; })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (months) { return !!months; }));
        // month calendar
        container.monthsCalendar = this._store
            .select(function (state) { return state.flaggedMonthsCalendar; })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (months) { return !!months; }));
        // year calendar
        container.yearsCalendar = this._store
            .select(function (state) { return state.yearsCalendarFlagged; })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (years) { return !!years; }));
        container.viewMode = this._store.select(function (state) { return state.view.mode; });
        container.options = this._store
            .select(function (state) { return state.showWeekNumbers; })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (showWeekNumbers) { return ({ showWeekNumbers: showWeekNumbers }); }));
        return this;
    };
    /** event handlers */
    /**
     * event handlers
     * @param {?} container
     * @return {?}
     */
    BsDatepickerEffects.prototype.setEventHandlers = /**
     * event handlers
     * @param {?} container
     * @return {?}
     */
    function (container) {
        var _this = this;
        container.setViewMode = function (event) {
            _this._store.dispatch(_this._actions.changeViewMode(event));
        };
        container.navigateTo = function (event) {
            _this._store.dispatch(_this._actions.navigateStep(event.step));
        };
        container.dayHoverHandler = function (event) {
            /** @type {?} */
            var _cell = (/** @type {?} */ (event.cell));
            if (_cell.isOtherMonth || _cell.isDisabled) {
                return;
            }
            _this._store.dispatch(_this._actions.hoverDay(event));
            _cell.isHovered = event.isHovered;
        };
        container.monthHoverHandler = function (event) {
            event.cell.isHovered = event.isHovered;
        };
        container.yearHoverHandler = function (event) {
            event.cell.isHovered = event.isHovered;
        };
        container.monthSelectHandler = function (event) {
            if (event.isDisabled) {
                return;
            }
            _this._store.dispatch(_this._actions.navigateTo({
                unit: {
                    month: Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["getMonth"])(event.date),
                    year: Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["getFullYear"])(event.date)
                },
                viewMode: 'day'
            }));
        };
        container.yearSelectHandler = function (event) {
            if (event.isDisabled) {
                return;
            }
            _this._store.dispatch(_this._actions.navigateTo({
                unit: {
                    year: Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["getFullYear"])(event.date)
                },
                viewMode: 'month'
            }));
        };
        return this;
    };
    /**
     * @return {?}
     */
    BsDatepickerEffects.prototype.registerDatepickerSideEffects = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._subs.push(this._store.select(function (state) { return state.view; }).subscribe(function (view) {
            _this._store.dispatch(_this._actions.calculate());
        }));
        // format calendar values on month model change
        this._subs.push(this._store
            .select(function (state) { return state.monthsModel; })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (monthModel) { return !!monthModel; }))
            .subscribe(function (month) { return _this._store.dispatch(_this._actions.format()); }));
        // flag day values
        this._subs.push(this._store
            .select(function (state) { return state.formattedMonths; })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (month) { return !!month; }))
            .subscribe(function (month) { return _this._store.dispatch(_this._actions.flag()); }));
        // flag day values
        this._subs.push(this._store
            .select(function (state) { return state.selectedDate; })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (selectedDate) { return !!selectedDate; }))
            .subscribe(function (selectedDate) { return _this._store.dispatch(_this._actions.flag()); }));
        // flag for date range picker
        this._subs.push(this._store
            .select(function (state) { return state.selectedRange; })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (selectedRange) { return !!selectedRange; }))
            .subscribe(function (selectedRange) { return _this._store.dispatch(_this._actions.flag()); }));
        // monthsCalendar
        this._subs.push(this._store
            .select(function (state) { return state.monthsCalendar; })
            .subscribe(function () { return _this._store.dispatch(_this._actions.flag()); }));
        // years calendar
        this._subs.push(this._store
            .select(function (state) { return state.yearsCalendarModel; })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (state) { return !!state; }))
            .subscribe(function () { return _this._store.dispatch(_this._actions.flag()); }));
        // on hover
        this._subs.push(this._store
            .select(function (state) { return state.hoveredDate; })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (hoveredDate) { return !!hoveredDate; }))
            .subscribe(function (hoveredDate) { return _this._store.dispatch(_this._actions.flag()); }));
        // on locale change
        this._subs.push(this._localeService.localeChange
            .subscribe(function (locale) { return _this._store.dispatch(_this._actions.setLocale(locale)); }));
        return this;
    };
    /**
     * @return {?}
     */
    BsDatepickerEffects.prototype.destroy = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__values"])(this._subs), _c = _b.next(); !_c.done; _c = _b.next()) {
                var sub = _c.value;
                sub.unsubscribe();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    BsDatepickerEffects.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"] }
    ];
    /** @nocollapse */
    BsDatepickerEffects.ctorParameters = function () { return [
        { type: BsDatepickerActions },
        { type: BsLocaleService }
    ]; };
    return BsDatepickerEffects;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var defaultMonthOptions = {
    width: 7,
    height: 6
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var _initialView = { date: new Date(), mode: 'day' };
/** @type {?} */
var initialDatepickerState = Object.assign(new BsDatepickerConfig(), {
    locale: 'en',
    view: _initialView,
    selectedRange: [],
    monthViewOptions: defaultMonthOptions
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} date
 * @param {?} options
 * @return {?}
 */
function getStartingDayOfCalendar(date, options) {
    if (Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["isFirstDayOfWeek"])(date, options.firstDayOfWeek)) {
        return date;
    }
    /** @type {?} */
    var weekDay = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["getDay"])(date);
    /** @type {?} */
    var offset = calculateDateOffset(weekDay, options.firstDayOfWeek);
    return Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["shiftDate"])(date, { day: -offset });
}
/**
 * @param {?} weekday
 * @param {?} startingDayOffset
 * @return {?}
 */
function calculateDateOffset(weekday, startingDayOffset) {
    if (startingDayOffset === 0) {
        return weekday;
    }
    /** @type {?} */
    var offset = weekday - startingDayOffset % 7;
    return offset < 0 ? offset + 7 : offset;
}
/**
 * @param {?} date
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function isMonthDisabled(date, min, max) {
    /** @type {?} */
    var minBound = min && Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["isBefore"])(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["endOf"])(date, 'month'), min, 'day');
    /** @type {?} */
    var maxBound = max && Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["isAfter"])(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["startOf"])(date, 'month'), max, 'day');
    return minBound || maxBound;
}
/**
 * @param {?} date
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function isYearDisabled(date, min, max) {
    /** @type {?} */
    var minBound = min && Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["isBefore"])(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["endOf"])(date, 'year'), min, 'day');
    /** @type {?} */
    var maxBound = max && Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["isAfter"])(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["startOf"])(date, 'year'), max, 'day');
    return minBound || maxBound;
}
/**
 * @param {?} date
 * @param {?} datesDisabled
 * @return {?}
 */
function isDisabledDate(date, datesDisabled) {
    if (datesDisabled === undefined || !datesDisabled || !datesDisabled.length) {
        return false;
    }
    return datesDisabled.some(function (dateDisabled) { return Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["isSame"])(date, dateDisabled, 'date'); });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} options
 * @param {?} fn
 * @return {?}
 */
function createMatrix(options, fn) {
    /** @type {?} */
    var prevValue = options.initialDate;
    /** @type {?} */
    var matrix = new Array(options.height);
    for (var i = 0; i < options.height; i++) {
        matrix[i] = new Array(options.width);
        for (var j = 0; j < options.width; j++) {
            matrix[i][j] = fn(prevValue);
            prevValue = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["shiftDate"])(prevValue, options.shift);
        }
    }
    return matrix;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} startingDate
 * @param {?} options
 * @return {?}
 */
function calcDaysCalendar(startingDate, options) {
    /** @type {?} */
    var firstDay = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["getFirstDayOfMonth"])(startingDate);
    /** @type {?} */
    var initialDate = getStartingDayOfCalendar(firstDay, options);
    /** @type {?} */
    var matrixOptions = {
        width: options.width,
        height: options.height,
        initialDate: initialDate,
        shift: { day: 1 }
    };
    /** @type {?} */
    var daysMatrix = createMatrix(matrixOptions, function (date) { return date; });
    return {
        daysMatrix: daysMatrix,
        month: firstDay
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} daysCalendar
 * @param {?} formatOptions
 * @param {?} monthIndex
 * @return {?}
 */
function formatDaysCalendar(daysCalendar, formatOptions, monthIndex) {
    return {
        month: daysCalendar.month,
        monthTitle: Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(daysCalendar.month, formatOptions.monthTitle, formatOptions.locale),
        yearTitle: Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(daysCalendar.month, formatOptions.yearTitle, formatOptions.locale),
        weekNumbers: getWeekNumbers(daysCalendar.daysMatrix, formatOptions.weekNumbers, formatOptions.locale),
        weekdays: getShiftedWeekdays(formatOptions.locale),
        weeks: daysCalendar.daysMatrix.map(function (week, weekIndex) { return ({
            days: week.map(function (date, dayIndex) { return ({
                date: date,
                label: Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(date, formatOptions.dayLabel, formatOptions.locale),
                monthIndex: monthIndex,
                weekIndex: weekIndex,
                dayIndex: dayIndex
            }); })
        }); })
    };
}
/**
 * @param {?} daysMatrix
 * @param {?} format
 * @param {?} locale
 * @return {?}
 */
function getWeekNumbers(daysMatrix, format, locale) {
    return daysMatrix.map(function (days) { return (days[0] ? Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(days[0], format, locale) : ''); });
}
/**
 * @param {?} locale
 * @return {?}
 */
function getShiftedWeekdays(locale) {
    /** @type {?} */
    var _locale = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["getLocale"])(locale);
    /** @type {?} */
    var weekdays = (/** @type {?} */ (_locale.weekdaysShort()));
    /** @type {?} */
    var firstDayOfWeek = _locale.firstDayOfWeek();
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spread"])(weekdays.slice(firstDayOfWeek), weekdays.slice(0, firstDayOfWeek));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} formattedMonth
 * @param {?} options
 * @return {?}
 */
function flagDaysCalendar(formattedMonth, options) {
    formattedMonth.weeks.forEach(function (week) {
        /* tslint:disable-next-line: cyclomatic-complexity */
        week.days.forEach(function (day, dayIndex) {
            // datepicker
            /** @type {?} */
            var isOtherMonth = !Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["isSameMonth"])(day.date, formattedMonth.month);
            /** @type {?} */
            var isHovered = !isOtherMonth && Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["isSameDay"])(day.date, options.hoveredDate);
            // date range picker
            /** @type {?} */
            var isSelectionStart = !isOtherMonth &&
                options.selectedRange &&
                Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["isSameDay"])(day.date, options.selectedRange[0]);
            /** @type {?} */
            var isSelectionEnd = !isOtherMonth &&
                options.selectedRange &&
                Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["isSameDay"])(day.date, options.selectedRange[1]);
            /** @type {?} */
            var isSelected = (!isOtherMonth && Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["isSameDay"])(day.date, options.selectedDate)) ||
                isSelectionStart ||
                isSelectionEnd;
            /** @type {?} */
            var isInRange = !isOtherMonth &&
                options.selectedRange &&
                isDateInRange(day.date, options.selectedRange, options.hoveredDate);
            /** @type {?} */
            var isDisabled = options.isDisabled ||
                Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["isBefore"])(day.date, options.minDate, 'day') ||
                Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["isAfter"])(day.date, options.maxDate, 'day') ||
                Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["isDisabledDay"])(day.date, options.daysDisabled) ||
                isDisabledDate(day.date, options.datesDisabled);
            /** @type {?} */
            var currentDate = new Date();
            /** @type {?} */
            var isToday = !isOtherMonth && Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["isSameDay"])(day.date, currentDate);
            // decide update or not
            /** @type {?} */
            var newDay = Object.assign({}, day, {
                isOtherMonth: isOtherMonth,
                isHovered: isHovered,
                isSelected: isSelected,
                isSelectionStart: isSelectionStart,
                isSelectionEnd: isSelectionEnd,
                isInRange: isInRange,
                isDisabled: isDisabled,
                isToday: isToday
            });
            if (day.isOtherMonth !== newDay.isOtherMonth ||
                day.isHovered !== newDay.isHovered ||
                day.isSelected !== newDay.isSelected ||
                day.isSelectionStart !== newDay.isSelectionStart ||
                day.isSelectionEnd !== newDay.isSelectionEnd ||
                day.isDisabled !== newDay.isDisabled ||
                day.isInRange !== newDay.isInRange) {
                week.days[dayIndex] = newDay;
            }
        });
    });
    // todo: add check for linked calendars
    formattedMonth.hideLeftArrow =
        options.isDisabled ||
            (options.monthIndex > 0 && options.monthIndex !== options.displayMonths);
    formattedMonth.hideRightArrow =
        options.isDisabled ||
            (options.monthIndex < options.displayMonths &&
                options.monthIndex + 1 !== options.displayMonths);
    formattedMonth.disableLeftArrow = isMonthDisabled(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["shiftDate"])(formattedMonth.month, { month: -1 }), options.minDate, options.maxDate);
    formattedMonth.disableRightArrow = isMonthDisabled(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["shiftDate"])(formattedMonth.month, { month: 1 }), options.minDate, options.maxDate);
    return formattedMonth;
}
/**
 * @param {?} date
 * @param {?} selectedRange
 * @param {?} hoveredDate
 * @return {?}
 */
function isDateInRange(date, selectedRange, hoveredDate) {
    if (!date || !selectedRange[0]) {
        return false;
    }
    if (selectedRange[1]) {
        return date > selectedRange[0] && date <= selectedRange[1];
    }
    if (hoveredDate) {
        return date > selectedRange[0] && date <= hoveredDate;
    }
    return false;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} mode
 * @param {?=} minMode
 * @return {?}
 */
function canSwitchMode(mode, minMode) {
    return minMode ? mode >= minMode : true;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var height = 4;
/** @type {?} */
var width = 3;
/** @type {?} */
var shift = { month: 1 };
/**
 * @param {?} viewDate
 * @param {?} formatOptions
 * @return {?}
 */
function formatMonthsCalendar(viewDate, formatOptions) {
    /** @type {?} */
    var initialDate = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["startOf"])(viewDate, 'year');
    /** @type {?} */
    var matrixOptions = { width: width, height: height, initialDate: initialDate, shift: shift };
    /** @type {?} */
    var monthMatrix = createMatrix(matrixOptions, function (date) { return ({
        date: date,
        label: Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(date, formatOptions.monthLabel, formatOptions.locale)
    }); });
    return {
        months: monthMatrix,
        monthTitle: '',
        yearTitle: Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(viewDate, formatOptions.yearTitle, formatOptions.locale)
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} monthCalendar
 * @param {?} options
 * @return {?}
 */
function flagMonthsCalendar(monthCalendar, options) {
    monthCalendar.months.forEach(function (months, rowIndex) {
        months.forEach(function (month, monthIndex) {
            /** @type {?} */
            var isHovered = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["isSameMonth"])(month.date, options.hoveredMonth);
            /** @type {?} */
            var isDisabled = options.isDisabled ||
                isMonthDisabled(month.date, options.minDate, options.maxDate);
            /** @type {?} */
            var newMonth = Object.assign(/*{},*/ month, {
                isHovered: isHovered,
                isDisabled: isDisabled
            });
            if (month.isHovered !== newMonth.isHovered ||
                month.isDisabled !== newMonth.isDisabled) {
                monthCalendar.months[rowIndex][monthIndex] = newMonth;
            }
        });
    });
    // todo: add check for linked calendars
    monthCalendar.hideLeftArrow =
        options.monthIndex > 0 && options.monthIndex !== options.displayMonths;
    monthCalendar.hideRightArrow =
        options.monthIndex < options.displayMonths &&
            options.monthIndex + 1 !== options.displayMonths;
    monthCalendar.disableLeftArrow = isYearDisabled(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["shiftDate"])(monthCalendar.months[0][0].date, { year: -1 }), options.minDate, options.maxDate);
    monthCalendar.disableRightArrow = isYearDisabled(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["shiftDate"])(monthCalendar.months[0][0].date, { year: 1 }), options.minDate, options.maxDate);
    return monthCalendar;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var height$1 = 4;
/** @type {?} */
var width$1 = 4;
/** @type {?} */
var yearsPerCalendar = height$1 * width$1;
/** @type {?} */
var initialShift = (Math.floor(yearsPerCalendar / 2) - 1) * -1;
/** @type {?} */
var shift$1 = { year: 1 };
/**
 * @param {?} viewDate
 * @param {?} formatOptions
 * @return {?}
 */
function formatYearsCalendar(viewDate, formatOptions) {
    /** @type {?} */
    var initialDate = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["shiftDate"])(viewDate, { year: initialShift });
    /** @type {?} */
    var matrixOptions = { width: width$1, height: height$1, initialDate: initialDate, shift: shift$1 };
    /** @type {?} */
    var yearsMatrix = createMatrix(matrixOptions, function (date) { return ({
        date: date,
        label: Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(date, formatOptions.yearLabel, formatOptions.locale)
    }); });
    /** @type {?} */
    var yearTitle = formatYearRangeTitle(yearsMatrix, formatOptions);
    return {
        years: yearsMatrix,
        monthTitle: '',
        yearTitle: yearTitle
    };
}
/**
 * @param {?} yearsMatrix
 * @param {?} formatOptions
 * @return {?}
 */
function formatYearRangeTitle(yearsMatrix, formatOptions) {
    /** @type {?} */
    var from = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(yearsMatrix[0][0].date, formatOptions.yearTitle, formatOptions.locale);
    /** @type {?} */
    var to = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(yearsMatrix[height$1 - 1][width$1 - 1].date, formatOptions.yearTitle, formatOptions.locale);
    return from + " - " + to;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} yearsCalendar
 * @param {?} options
 * @return {?}
 */
function flagYearsCalendar(yearsCalendar, options) {
    yearsCalendar.years.forEach(function (years, rowIndex) {
        years.forEach(function (year, yearIndex) {
            /** @type {?} */
            var isHovered = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["isSameYear"])(year.date, options.hoveredYear);
            /** @type {?} */
            var isDisabled = options.isDisabled ||
                isYearDisabled(year.date, options.minDate, options.maxDate);
            /** @type {?} */
            var newMonth = Object.assign(/*{},*/ year, { isHovered: isHovered, isDisabled: isDisabled });
            if (year.isHovered !== newMonth.isHovered ||
                year.isDisabled !== newMonth.isDisabled) {
                yearsCalendar.years[rowIndex][yearIndex] = newMonth;
            }
        });
    });
    // todo: add check for linked calendars
    yearsCalendar.hideLeftArrow =
        options.yearIndex > 0 && options.yearIndex !== options.displayMonths;
    yearsCalendar.hideRightArrow =
        options.yearIndex < options.displayMonths &&
            options.yearIndex + 1 !== options.displayMonths;
    yearsCalendar.disableLeftArrow = isYearDisabled(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["shiftDate"])(yearsCalendar.years[0][0].date, { year: -1 }), options.minDate, options.maxDate);
    /** @type {?} */
    var i = yearsCalendar.years.length - 1;
    /** @type {?} */
    var j = yearsCalendar.years[i].length - 1;
    yearsCalendar.disableRightArrow = isYearDisabled(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["shiftDate"])(yearsCalendar.years[i][j].date, { year: 1 }), options.minDate, options.maxDate);
    return yearsCalendar;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable-next-line: cyclomatic-complexity */
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function bsDatepickerReducer(state, action) {
    if (state === void 0) { state = initialDatepickerState; }
    switch (action.type) {
        case BsDatepickerActions.CALCULATE: {
            return calculateReducer(state);
        }
        case BsDatepickerActions.FORMAT: {
            return formatReducer(state, action);
        }
        case BsDatepickerActions.FLAG: {
            return flagReducer(state, action);
        }
        case BsDatepickerActions.NAVIGATE_OFFSET: {
            /** @type {?} */
            var date = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["shiftDate"])(Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["startOf"])(state.view.date, 'month'), action.payload);
            /** @type {?} */
            var newState = {
                view: {
                    mode: state.view.mode,
                    date: date
                }
            };
            return Object.assign({}, state, newState);
        }
        case BsDatepickerActions.NAVIGATE_TO: {
            /** @type {?} */
            var payload = action.payload;
            /** @type {?} */
            var date = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["setFullDate"])(state.view.date, payload.unit);
            /** @type {?} */
            var newState = void 0;
            /** @type {?} */
            var mode = void 0;
            if (canSwitchMode(payload.viewMode, state.minMode)) {
                mode = payload.viewMode;
                newState = { view: { date: date, mode: mode } };
            }
            else {
                mode = state.view.mode;
                newState = { selectedDate: date, view: { date: date, mode: mode } };
            }
            return Object.assign({}, state, newState);
        }
        case BsDatepickerActions.CHANGE_VIEWMODE: {
            if (!canSwitchMode(action.payload, state.minMode)) {
                return state;
            }
            /** @type {?} */
            var date = state.view.date;
            /** @type {?} */
            var mode = action.payload;
            /** @type {?} */
            var newState = { view: { date: date, mode: mode } };
            return Object.assign({}, state, newState);
        }
        case BsDatepickerActions.HOVER: {
            return Object.assign({}, state, { hoveredDate: action.payload });
        }
        case BsDatepickerActions.SELECT: {
            /** @type {?} */
            var newState = {
                selectedDate: action.payload,
                view: state.view
            };
            /** @type {?} */
            var mode = state.view.mode;
            /** @type {?} */
            var _date = action.payload || state.view.date;
            /** @type {?} */
            var date = getViewDate(_date, state.minDate, state.maxDate);
            newState.view = { mode: mode, date: date };
            return Object.assign({}, state, newState);
        }
        case BsDatepickerActions.SET_OPTIONS: {
            /** @type {?} */
            var newState = action.payload;
            // preserve view mode
            /** @type {?} */
            var mode = newState.minMode ? newState.minMode : state.view.mode;
            /** @type {?} */
            var _viewDate = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["isDateValid"])(newState.value) && newState.value
                || Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["isArray"])(newState.value) && Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["isDateValid"])(newState.value[0]) && newState.value[0]
                || state.view.date;
            /** @type {?} */
            var date = getViewDate(_viewDate, newState.minDate, newState.maxDate);
            newState.view = { mode: mode, date: date };
            // update selected value
            if (newState.value) {
                // if new value is array we work with date range
                if (Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["isArray"])(newState.value)) {
                    newState.selectedRange = newState.value;
                }
                // if new value is a date -> datepicker
                if (newState.value instanceof Date) {
                    newState.selectedDate = newState.value;
                }
                // provided value is not supported :)
                // need to report it somehow
            }
            return Object.assign({}, state, newState);
        }
        // date range picker
        case BsDatepickerActions.SELECT_RANGE: {
            /** @type {?} */
            var newState = {
                selectedRange: action.payload,
                view: state.view
            };
            /** @type {?} */
            var mode = state.view.mode;
            /** @type {?} */
            var _date = action.payload && action.payload[0] || state.view.date;
            /** @type {?} */
            var date = getViewDate(_date, state.minDate, state.maxDate);
            newState.view = { mode: mode, date: date };
            return Object.assign({}, state, newState);
        }
        case BsDatepickerActions.SET_MIN_DATE: {
            return Object.assign({}, state, {
                minDate: action.payload
            });
        }
        case BsDatepickerActions.SET_MAX_DATE: {
            return Object.assign({}, state, {
                maxDate: action.payload
            });
        }
        case BsDatepickerActions.SET_IS_DISABLED: {
            return Object.assign({}, state, {
                isDisabled: action.payload
            });
        }
        default:
            return state;
    }
}
/**
 * @param {?} state
 * @return {?}
 */
function calculateReducer(state) {
    // how many calendars
    /** @type {?} */
    var displayMonths = state.displayMonths;
    // use selected date on initial rendering if set
    /** @type {?} */
    var viewDate = state.view.date;
    if (state.view.mode === 'day') {
        state.monthViewOptions.firstDayOfWeek = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["getLocale"])(state.locale).firstDayOfWeek();
        /** @type {?} */
        var monthsModel = new Array(displayMonths);
        for (var monthIndex = 0; monthIndex < displayMonths; monthIndex++) {
            // todo: for unlinked calendars it will be harder
            monthsModel[monthIndex] = calcDaysCalendar(viewDate, state.monthViewOptions);
            viewDate = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["shiftDate"])(viewDate, { month: 1 });
        }
        return Object.assign({}, state, { monthsModel: monthsModel });
    }
    if (state.view.mode === 'month') {
        /** @type {?} */
        var monthsCalendar = new Array(displayMonths);
        for (var calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
            // todo: for unlinked calendars it will be harder
            monthsCalendar[calendarIndex] = formatMonthsCalendar(viewDate, getFormatOptions(state));
            viewDate = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["shiftDate"])(viewDate, { year: 1 });
        }
        return Object.assign({}, state, { monthsCalendar: monthsCalendar });
    }
    if (state.view.mode === 'year') {
        /** @type {?} */
        var yearsCalendarModel = new Array(displayMonths);
        for (var calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
            // todo: for unlinked calendars it will be harder
            yearsCalendarModel[calendarIndex] = formatYearsCalendar(viewDate, getFormatOptions(state));
            viewDate = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["shiftDate"])(viewDate, { year: yearsPerCalendar });
        }
        return Object.assign({}, state, { yearsCalendarModel: yearsCalendarModel });
    }
    return state;
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function formatReducer(state, action) {
    if (state.view.mode === 'day') {
        /** @type {?} */
        var formattedMonths = state.monthsModel.map(function (month, monthIndex) {
            return formatDaysCalendar(month, getFormatOptions(state), monthIndex);
        });
        return Object.assign({}, state, { formattedMonths: formattedMonths });
    }
    // how many calendars
    /** @type {?} */
    var displayMonths = state.displayMonths;
    // check initial rendering
    // use selected date on initial rendering if set
    /** @type {?} */
    var viewDate = state.view.date;
    if (state.view.mode === 'month') {
        /** @type {?} */
        var monthsCalendar = new Array(displayMonths);
        for (var calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
            // todo: for unlinked calendars it will be harder
            monthsCalendar[calendarIndex] = formatMonthsCalendar(viewDate, getFormatOptions(state));
            viewDate = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["shiftDate"])(viewDate, { year: 1 });
        }
        return Object.assign({}, state, { monthsCalendar: monthsCalendar });
    }
    if (state.view.mode === 'year') {
        /** @type {?} */
        var yearsCalendarModel = new Array(displayMonths);
        for (var calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
            // todo: for unlinked calendars it will be harder
            yearsCalendarModel[calendarIndex] = formatYearsCalendar(viewDate, getFormatOptions(state));
            viewDate = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["shiftDate"])(viewDate, { year: 16 });
        }
        return Object.assign({}, state, { yearsCalendarModel: yearsCalendarModel });
    }
    return state;
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function flagReducer(state, action) {
    if (state.view.mode === 'day') {
        /** @type {?} */
        var flaggedMonths = state.formattedMonths.map(function (formattedMonth, monthIndex) {
            return flagDaysCalendar(formattedMonth, {
                isDisabled: state.isDisabled,
                minDate: state.minDate,
                maxDate: state.maxDate,
                daysDisabled: state.daysDisabled,
                datesDisabled: state.datesDisabled,
                hoveredDate: state.hoveredDate,
                selectedDate: state.selectedDate,
                selectedRange: state.selectedRange,
                displayMonths: state.displayMonths,
                monthIndex: monthIndex
            });
        });
        return Object.assign({}, state, { flaggedMonths: flaggedMonths });
    }
    if (state.view.mode === 'month') {
        /** @type {?} */
        var flaggedMonthsCalendar = state.monthsCalendar.map(function (formattedMonth, monthIndex) {
            return flagMonthsCalendar(formattedMonth, {
                isDisabled: state.isDisabled,
                minDate: state.minDate,
                maxDate: state.maxDate,
                hoveredMonth: state.hoveredMonth,
                displayMonths: state.displayMonths,
                monthIndex: monthIndex
            });
        });
        return Object.assign({}, state, { flaggedMonthsCalendar: flaggedMonthsCalendar });
    }
    if (state.view.mode === 'year') {
        /** @type {?} */
        var yearsCalendarFlagged = state.yearsCalendarModel.map(function (formattedMonth, yearIndex) {
            return flagYearsCalendar(formattedMonth, {
                isDisabled: state.isDisabled,
                minDate: state.minDate,
                maxDate: state.maxDate,
                hoveredYear: state.hoveredYear,
                displayMonths: state.displayMonths,
                yearIndex: yearIndex
            });
        });
        return Object.assign({}, state, { yearsCalendarFlagged: yearsCalendarFlagged });
    }
    return state;
}
/**
 * @param {?} state
 * @return {?}
 */
function getFormatOptions(state) {
    return {
        locale: state.locale,
        monthTitle: state.monthTitle,
        yearTitle: state.yearTitle,
        dayLabel: state.dayLabel,
        monthLabel: state.monthLabel,
        yearLabel: state.yearLabel,
        weekNumbers: state.weekNumbers
    };
}
/**
 * if view date is provided (bsValue|ngModel) it should be shown
 * if view date is not provider:
 * if minDate>currentDate (default view value), show minDate
 * if maxDate<currentDate(default view value) show maxDate
 * @param {?} viewDate
 * @param {?} minDate
 * @param {?} maxDate
 * @return {?}
 */
function getViewDate(viewDate, minDate, maxDate) {
    /** @type {?} */
    var _date = Array.isArray(viewDate) ? viewDate[0] : viewDate;
    if (minDate && Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["isAfter"])(minDate, _date, 'day')) {
        return minDate;
    }
    if (maxDate && Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["isBefore"])(maxDate, _date, 'day')) {
        return maxDate;
    }
    return _date;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsDatepickerStore = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(BsDatepickerStore, _super);
    function BsDatepickerStore() {
        var _this = this;
        /** @type {?} */
        var _dispatcher = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
            type: '[datepicker] dispatcher init'
        });
        /** @type {?} */
        var state = new ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_0__["MiniState"](initialDatepickerState, _dispatcher, bsDatepickerReducer);
        _this = _super.call(this, _dispatcher, bsDatepickerReducer, state) || this;
        return _this;
    }
    BsDatepickerStore.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"] }
    ];
    /** @nocollapse */
    BsDatepickerStore.ctorParameters = function () { return []; };
    return BsDatepickerStore;
}(ngx_bootstrap_mini_ngrx__WEBPACK_IMPORTED_MODULE_0__["MiniStore"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsDatepickerContainerComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(BsDatepickerContainerComponent, _super);
    function BsDatepickerContainerComponent(_config, _store, _actions, _effects, _positionService) {
        var _this = _super.call(this) || this;
        _this._config = _config;
        _this._store = _store;
        _this._actions = _actions;
        _this._positionService = _positionService;
        _this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
        _this._subs = [];
        _this._effects = _effects;
        return _this;
    }
    Object.defineProperty(BsDatepickerContainerComponent.prototype, "value", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setValue(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BsDatepickerContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._positionService.setOptions({
            modifiers: {
                flip: {
                    enabled: this._config.adaptivePosition
                }
            }
        });
        this.isOtherMonthsActive = this._config.selectFromOtherMonth;
        this.containerClass = this._config.containerClass;
        this._effects
            .init(this._store)
            // intial state options
            .setOptions(this._config)
            // data binding view --> model
            .setBindings(this)
            // set event handlers
            .setEventHandlers(this)
            .registerDatepickerSideEffects();
        // todo: move it somewhere else
        // on selected date change
        this._subs.push(this._store
            /* tslint:disable-next-line: no-any */
            .select(function (state) { return state.selectedDate; })
            /* tslint:disable-next-line: no-any */
            .subscribe(function (date) { return _this.valueChange.emit(date); }));
    };
    /**
     * @param {?} day
     * @return {?}
     */
    BsDatepickerContainerComponent.prototype.daySelectHandler = /**
     * @param {?} day
     * @return {?}
     */
    function (day) {
        /** @type {?} */
        var isDisabled = this.isOtherMonthsActive ? day.isDisabled : (day.isOtherMonth || day.isDisabled);
        if (isDisabled) {
            return;
        }
        this._store.dispatch(this._actions.select(day.date));
    };
    /**
     * @return {?}
     */
    BsDatepickerContainerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__values"])(this._subs), _c = _b.next(); !_c.done; _c = _b.next()) {
                var sub = _c.value;
                sub.unsubscribe();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this._effects.destroy();
    };
    BsDatepickerContainerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"], args: [{
                    selector: 'bs-datepicker-container',
                    providers: [BsDatepickerStore, BsDatepickerEffects],
                    template: "<!-- days calendar view mode -->\n<div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\">\n  <div class=\"bs-datepicker-container\">\n\n    <!--calendars-->\n    <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\">\n      <!--days calendar-->\n      <div *ngSwitchCase=\"'day'\" class=\"bs-media-container\">\n        <bs-days-calendar-view\n          *ngFor=\"let calendar of (daysCalendar | async)\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          [options]=\"options | async\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"dayHoverHandler($event)\"\n          (onHoverWeek)=\"weekHoverHandler($event)\"\n          (onSelect)=\"daySelectHandler($event)\"\n        ></bs-days-calendar-view>\n      </div>\n\n      <!--months calendar-->\n      <div *ngSwitchCase=\"'month'\" class=\"bs-media-container\">\n        <bs-month-calendar-view\n          *ngFor=\"let calendar of (monthsCalendar | async)\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"monthHoverHandler($event)\"\n          (onSelect)=\"monthSelectHandler($event)\"\n        ></bs-month-calendar-view>\n      </div>\n\n      <!--years calendar-->\n      <div *ngSwitchCase=\"'year'\" class=\"bs-media-container\">\n        <bs-years-calendar-view\n        *ngFor=\"let calendar of (yearsCalendar | async)\"\n        [class.bs-datepicker-multiple]=\"(daysCalendar | async )?.length > 1\"\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"setViewMode($event)\"\n        (onHover)=\"yearHoverHandler($event)\"\n        (onSelect)=\"yearSelectHandler($event)\"\n      ></bs-years-calendar-view>\n    </div>\n\n  </div>\n\n  <!--applycancel buttons-->\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"false\">\n      <button class=\"btn btn-success\">Apply</button>\n      <button class=\"btn btn-default\">Cancel</button>\n    </div>\n\n  </div>\n\n  <!--custom dates or date ranges picker-->\n  <div class=\"bs-datepicker-custom-range\" *ngIf=\"false\">\n    <bs-custom-date-view [ranges]=\"_customRangesFish\"></bs-custom-date-view>\n  </div>\n</div>\n",
                    host: {
                        '(click)': '_stopPropagation($event)',
                        style: 'position: absolute; display: block;',
                        role: 'dialog',
                        'aria-label': 'calendar'
                    }
                }] }
    ];
    /** @nocollapse */
    BsDatepickerContainerComponent.ctorParameters = function () { return [
        { type: BsDatepickerConfig },
        { type: BsDatepickerStore },
        { type: BsDatepickerActions },
        { type: BsDatepickerEffects },
        { type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"] }
    ]; };
    return BsDatepickerContainerComponent;
}(BsDatepickerAbstractComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsDatepickerDirective = /** @class */ (function () {
    function BsDatepickerDirective(_config, _elementRef, _renderer, _viewContainerRef, cis) {
        this._config = _config;
        /**
         * Placement of a datepicker. Accepts: "top", "bottom", "left", "right"
         */
        this.placement = 'bottom';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
        /**
         * Close datepicker on outside click
         */
        this.outsideClick = true;
        /**
         * A selector specifying the element the datepicker should be appended to.
         * Currently only supports "body".
         */
        this.container = 'body';
        this.outsideEsc = true;
        /**
         * Emits when datepicker value has been changed
         */
        this.bsValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
        this._subs = [];
        // todo: assign only subset of fields
        Object.assign(this, this._config);
        this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
        this.onShown = this._datepicker.onShown;
        this.onHidden = this._datepicker.onHidden;
    }
    Object.defineProperty(BsDatepickerDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the datepicker is currently being shown
         */
        get: /**
         * Returns whether or not the datepicker is currently being shown
         * @return {?}
         */
        function () {
            return this._datepicker.isShown;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDatepickerDirective.prototype, "bsValue", {
        /**
         * Initial value of datepicker
         */
        set: /**
         * Initial value of datepicker
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._bsValue === value) {
                return;
            }
            this._bsValue = value;
            this.bsValueChange.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BsDatepickerDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._datepicker.listen({
            outsideClick: this.outsideClick,
            outsideEsc: this.outsideEsc,
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        this.setConfig();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    BsDatepickerDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!this._datepickerRef || !this._datepickerRef.instance) {
            return;
        }
        if (changes.minDate) {
            this._datepickerRef.instance.minDate = this.minDate;
        }
        if (changes.maxDate) {
            this._datepickerRef.instance.maxDate = this.maxDate;
        }
        if (changes.daysDisabled) {
            this._datepickerRef.instance.daysDisabled = this.daysDisabled;
        }
        if (changes.datesDisabled) {
            this._datepickerRef.instance.datesDisabled = this.datesDisabled;
        }
        if (changes.isDisabled) {
            this._datepickerRef.instance.isDisabled = this.isDisabled;
        }
    };
    /**
     * Opens an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     */
    /**
     * Opens an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     * @return {?}
     */
    BsDatepickerDirective.prototype.show = /**
     * Opens an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._datepicker.isShown) {
            return;
        }
        this.setConfig();
        this._datepickerRef = this._datepicker
            .provide({ provide: BsDatepickerConfig, useValue: this._config })
            .attach(BsDatepickerContainerComponent)
            .to(this.container)
            .position({ attachment: this.placement })
            .show({ placement: this.placement });
        // if date changes from external source (model -> view)
        this._subs.push(this.bsValueChange.subscribe(function (value) {
            _this._datepickerRef.instance.value = value;
        }));
        // if date changes from picker (view -> model)
        this._subs.push(this._datepickerRef.instance.valueChange.subscribe(function (value) {
            _this.bsValue = value;
            _this.hide();
        }));
    };
    /**
     * Closes an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     */
    /**
     * Closes an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     * @return {?}
     */
    BsDatepickerDirective.prototype.hide = /**
     * Closes an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     * @return {?}
     */
    function () {
        var e_1, _a;
        if (this.isOpen) {
            this._datepicker.hide();
        }
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__values"])(this._subs), _c = _b.next(); !_c.done; _c = _b.next()) {
                var sub = _c.value;
                sub.unsubscribe();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * Toggles an element’s datepicker. This is considered a “manual” triggering
     * of the datepicker.
     */
    /**
     * Toggles an element’s datepicker. This is considered a “manual” triggering
     * of the datepicker.
     * @return {?}
     */
    BsDatepickerDirective.prototype.toggle = /**
     * Toggles an element’s datepicker. This is considered a “manual” triggering
     * of the datepicker.
     * @return {?}
     */
    function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    /**
     * Set config for datepicker
     */
    /**
     * Set config for datepicker
     * @return {?}
     */
    BsDatepickerDirective.prototype.setConfig = /**
     * Set config for datepicker
     * @return {?}
     */
    function () {
        this._config = Object.assign({}, this._config, this.bsConfig, {
            value: this._bsValue,
            isDisabled: this.isDisabled,
            minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
            maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
            daysDisabled: this.daysDisabled || this.bsConfig && this.bsConfig.daysDisabled,
            datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
            minMode: this.minMode || this.bsConfig && this.bsConfig.minMode
        });
    };
    /**
     * @return {?}
     */
    BsDatepickerDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._datepicker.dispose();
    };
    BsDatepickerDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"], args: [{
                    selector: '[bsDatepicker]',
                    exportAs: 'bsDatepicker'
                },] }
    ];
    /** @nocollapse */
    BsDatepickerDirective.ctorParameters = function () { return [
        { type: BsDatepickerConfig },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewContainerRef"] },
        { type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_4__["ComponentLoaderFactory"] }
    ]; };
    BsDatepickerDirective.propDecorators = {
        placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        triggers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        outsideClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        outsideEsc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        onShown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"] }],
        onHidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"] }],
        bsValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        bsConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        minMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        daysDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        datesDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        bsValueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"] }]
    };
    return BsDatepickerDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsDatepickerInlineConfig = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(BsDatepickerInlineConfig, _super);
    function BsDatepickerInlineConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BsDatepickerInlineConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"] }
    ];
    return BsDatepickerInlineConfig;
}(BsDatepickerConfig));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsDatepickerInlineContainerComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(BsDatepickerInlineContainerComponent, _super);
    function BsDatepickerInlineContainerComponent(_config, _store, _actions, _effects, _positioningService) {
        return _super.call(this, _config, _store, _actions, _effects, _positioningService) || this;
    }
    BsDatepickerInlineContainerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"], args: [{
                    selector: 'bs-datepicker-inline-container',
                    providers: [BsDatepickerStore, BsDatepickerEffects],
                    template: "<!-- days calendar view mode -->\n<div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\">\n  <div class=\"bs-datepicker-container\">\n\n    <!--calendars-->\n    <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\">\n      <!--days calendar-->\n      <div *ngSwitchCase=\"'day'\" class=\"bs-media-container\">\n        <bs-days-calendar-view\n          *ngFor=\"let calendar of (daysCalendar | async)\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          [options]=\"options | async\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"dayHoverHandler($event)\"\n          (onHoverWeek)=\"weekHoverHandler($event)\"\n          (onSelect)=\"daySelectHandler($event)\"\n        ></bs-days-calendar-view>\n      </div>\n\n      <!--months calendar-->\n      <div *ngSwitchCase=\"'month'\" class=\"bs-media-container\">\n        <bs-month-calendar-view\n          *ngFor=\"let calendar of (monthsCalendar | async)\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"monthHoverHandler($event)\"\n          (onSelect)=\"monthSelectHandler($event)\"\n        ></bs-month-calendar-view>\n      </div>\n\n      <!--years calendar-->\n      <div *ngSwitchCase=\"'year'\" class=\"bs-media-container\">\n        <bs-years-calendar-view\n        *ngFor=\"let calendar of (yearsCalendar | async)\"\n        [class.bs-datepicker-multiple]=\"(daysCalendar | async )?.length > 1\"\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"setViewMode($event)\"\n        (onHover)=\"yearHoverHandler($event)\"\n        (onSelect)=\"yearSelectHandler($event)\"\n      ></bs-years-calendar-view>\n    </div>\n\n  </div>\n\n  <!--applycancel buttons-->\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"false\">\n      <button class=\"btn btn-success\">Apply</button>\n      <button class=\"btn btn-default\">Cancel</button>\n    </div>\n\n  </div>\n\n  <!--custom dates or date ranges picker-->\n  <div class=\"bs-datepicker-custom-range\" *ngIf=\"false\">\n    <bs-custom-date-view [ranges]=\"_customRangesFish\"></bs-custom-date-view>\n  </div>\n</div>\n",
                    host: {
                        '(click)': '_stopPropagation($event)',
                        style: 'display: inline-block;'
                    }
                }] }
    ];
    /** @nocollapse */
    BsDatepickerInlineContainerComponent.ctorParameters = function () { return [
        { type: BsDatepickerConfig },
        { type: BsDatepickerStore },
        { type: BsDatepickerActions },
        { type: BsDatepickerEffects },
        { type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"] }
    ]; };
    return BsDatepickerInlineContainerComponent;
}(BsDatepickerContainerComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsDatepickerInlineDirective = /** @class */ (function () {
    function BsDatepickerInlineDirective(_config, _elementRef, _renderer, _viewContainerRef, cis) {
        this._config = _config;
        this._elementRef = _elementRef;
        /**
         * Emits when datepicker value has been changed
         */
        this.bsValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
        this._subs = [];
        // todo: assign only subset of fields
        Object.assign(this, this._config);
        this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
    }
    Object.defineProperty(BsDatepickerInlineDirective.prototype, "bsValue", {
        /**
         * Initial value of datepicker
         */
        set: /**
         * Initial value of datepicker
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._bsValue === value) {
                return;
            }
            this._bsValue = value;
            this.bsValueChange.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BsDatepickerInlineDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.setConfig();
        this._datepickerRef = this._datepicker
            .provide({ provide: BsDatepickerConfig, useValue: this._config })
            .attach(BsDatepickerInlineContainerComponent)
            .to(this._elementRef)
            .show();
        // if date changes from external source (model -> view)
        this._subs.push(this.bsValueChange.subscribe(function (value) {
            _this._datepickerRef.instance.value = value;
        }));
        // if date changes from picker (view -> model)
        this._subs.push(this._datepickerRef.instance.valueChange.subscribe(function (value) {
            _this.bsValue = value;
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    BsDatepickerInlineDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!this._datepickerRef || !this._datepickerRef.instance) {
            return;
        }
        if (changes.minDate) {
            this._datepickerRef.instance.minDate = this.minDate;
        }
        if (changes.maxDate) {
            this._datepickerRef.instance.maxDate = this.maxDate;
        }
        if (changes.datesDisabled) {
            this._datepickerRef.instance.datesDisabled = this.datesDisabled;
        }
        if (changes.isDisabled) {
            this._datepickerRef.instance.isDisabled = this.isDisabled;
        }
    };
    /**
     * Set config for datepicker
     */
    /**
     * Set config for datepicker
     * @return {?}
     */
    BsDatepickerInlineDirective.prototype.setConfig = /**
     * Set config for datepicker
     * @return {?}
     */
    function () {
        this._config = Object.assign({}, this._config, this.bsConfig, {
            value: this._bsValue,
            isDisabled: this.isDisabled,
            minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
            maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
            datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled
        });
    };
    /**
     * @return {?}
     */
    BsDatepickerInlineDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._datepicker.dispose();
    };
    BsDatepickerInlineDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"], args: [{
                    selector: 'bs-datepicker-inline',
                    exportAs: 'bsDatepickerInline'
                },] }
    ];
    /** @nocollapse */
    BsDatepickerInlineDirective.ctorParameters = function () { return [
        { type: BsDatepickerInlineConfig },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewContainerRef"] },
        { type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_4__["ComponentLoaderFactory"] }
    ]; };
    BsDatepickerInlineDirective.propDecorators = {
        bsValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        bsConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        datesDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        bsValueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"] }]
    };
    return BsDatepickerInlineDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var BS_DATEPICKER_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function () { return BsDatepickerInputDirective; }),
    multi: true
};
/** @type {?} */
var BS_DATEPICKER_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALIDATORS"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function () { return BsDatepickerInputDirective; }),
    multi: true
};
var BsDatepickerInputDirective = /** @class */ (function () {
    function BsDatepickerInputDirective(_picker, _localeService, _renderer, _elRef, changeDetection) {
        var _this = this;
        this._picker = _picker;
        this._localeService = _localeService;
        this._renderer = _renderer;
        this._elRef = _elRef;
        this.changeDetection = changeDetection;
        this._onChange = Function.prototype;
        this._onTouched = Function.prototype;
        /* tslint:disable-next-line: no-unused-variable */
        this._validatorChange = Function.prototype;
        // update input value on datepicker value update
        this._picker.bsValueChange.subscribe(function (value) {
            _this._setInputValue(value);
            if (_this._value !== value) {
                _this._value = value;
                _this._onChange(value);
                _this._onTouched();
            }
            _this.changeDetection.markForCheck();
        });
        // update input value on locale change
        this._localeService.localeChange.subscribe(function () {
            _this._setInputValue(_this._value);
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    BsDatepickerInputDirective.prototype._setInputValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var initialDate = !value ? ''
            : Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(value, this._picker._config.dateInputFormat, this._localeService.currentLocale);
        this._renderer.setProperty(this._elRef.nativeElement, 'value', initialDate);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerInputDirective.prototype.onChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /* tslint:disable-next-line: no-any*/
        this.writeValue(((/** @type {?} */ (event.target))).value);
        this._onChange(this._value);
        this._onTouched();
    };
    /**
     * @param {?} c
     * @return {?}
     */
    BsDatepickerInputDirective.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        /** @type {?} */
        var _value = c.value;
        /* tslint:disable-next-line: prefer-switch */
        if (_value === null || _value === undefined || _value === '') {
            return null;
        }
        if (Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["isDate"])(_value)) {
            /** @type {?} */
            var _isDateValid = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["isDateValid"])(_value);
            if (!_isDateValid) {
                return { bsDate: { invalid: _value } };
            }
            if (this._picker && this._picker.minDate && Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["isBefore"])(_value, this._picker.minDate, 'date')) {
                return { bsDate: { minDate: this._picker.minDate } };
            }
            if (this._picker && this._picker.maxDate && Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["isAfter"])(_value, this._picker.maxDate, 'date')) {
                return { bsDate: { maxDate: this._picker.maxDate } };
            }
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    BsDatepickerInputDirective.prototype.registerOnValidatorChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._validatorChange = fn;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    BsDatepickerInputDirective.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!value) {
            this._value = null;
        }
        else {
            /** @type {?} */
            var _localeKey = this._localeService.currentLocale;
            /** @type {?} */
            var _locale = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["getLocale"])(_localeKey);
            if (!_locale) {
                throw new Error("Locale \"" + _localeKey + "\" is not defined, please add it with \"defineLocale(...)\"");
            }
            this._value = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["parseDate"])(value, this._picker._config.dateInputFormat, this._localeService.currentLocale);
        }
        this._picker.bsValue = this._value;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    BsDatepickerInputDirective.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this._picker.isDisabled = isDisabled;
        if (isDisabled) {
            this._renderer.setAttribute(this._elRef.nativeElement, 'disabled', 'disabled');
            return;
        }
        this._renderer.removeAttribute(this._elRef.nativeElement, 'disabled');
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    BsDatepickerInputDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    BsDatepickerInputDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    /**
     * @return {?}
     */
    BsDatepickerInputDirective.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this._onTouched();
    };
    /**
     * @return {?}
     */
    BsDatepickerInputDirective.prototype.hide = /**
     * @return {?}
     */
    function () {
        this._picker.hide();
        this._renderer.selectRootElement(this._elRef.nativeElement).blur();
    };
    BsDatepickerInputDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"], args: [{
                    selector: "input[bsDatepicker]",
                    host: {
                        '(change)': 'onChange($event)',
                        '(keyup.esc)': 'hide()',
                        '(blur)': 'onBlur()'
                    },
                    providers: [BS_DATEPICKER_VALUE_ACCESSOR, BS_DATEPICKER_VALIDATOR]
                },] }
    ];
    /** @nocollapse */
    BsDatepickerInputDirective.ctorParameters = function () { return [
        { type: BsDatepickerDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Host"] }] },
        { type: BsLocaleService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"] }
    ]; };
    return BsDatepickerInputDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsDaterangepickerConfig = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(BsDaterangepickerConfig, _super);
    function BsDaterangepickerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // DatepickerRenderOptions
        _this.displayMonths = 2;
        return _this;
    }
    BsDaterangepickerConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"] }
    ];
    return BsDaterangepickerConfig;
}(BsDatepickerConfig));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsDaterangepickerContainerComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(BsDaterangepickerContainerComponent, _super);
    function BsDaterangepickerContainerComponent(_effects, _actions, _config, _store, _positionService) {
        var _this = _super.call(this) || this;
        _this._actions = _actions;
        _this._config = _config;
        _this._store = _store;
        _this._positionService = _positionService;
        _this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
        _this._rangeStack = [];
        _this._subs = [];
        _this._effects = _effects;
        return _this;
    }
    Object.defineProperty(BsDaterangepickerContainerComponent.prototype, "value", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setRangeValue(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BsDaterangepickerContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._positionService.setOptions({
            modifiers: {
                flip: {
                    enabled: this._config.adaptivePosition
                }
            }
        });
        this.containerClass = this._config.containerClass;
        this.isOtherMonthsActive = this._config.selectFromOtherMonth;
        this._effects
            .init(this._store)
            // intial state options
            // todo: fix this, split configs
            .setOptions(this._config)
            // data binding view --> model
            .setBindings(this)
            // set event handlers
            .setEventHandlers(this)
            .registerDatepickerSideEffects();
        // todo: move it somewhere else
        // on selected date change
        this._subs.push(this._store
            .select(function (state) { return state.selectedRange; })
            .subscribe(function (date) { return _this.valueChange.emit(date); }));
    };
    /**
     * @param {?} day
     * @return {?}
     */
    BsDaterangepickerContainerComponent.prototype.daySelectHandler = /**
     * @param {?} day
     * @return {?}
     */
    function (day) {
        /** @type {?} */
        var isDisabled = this.isOtherMonthsActive ? day.isDisabled : (day.isOtherMonth || day.isDisabled);
        if (isDisabled) {
            return;
        }
        // if only one date is already selected
        // and user clicks on previous date
        // start selection from new date
        // but if new date is after initial one
        // than finish selection
        if (this._rangeStack.length === 1) {
            this._rangeStack =
                day.date >= this._rangeStack[0]
                    ? [this._rangeStack[0], day.date]
                    : [day.date];
        }
        if (this._rangeStack.length === 0) {
            this._rangeStack = [day.date];
        }
        this._store.dispatch(this._actions.selectRange(this._rangeStack));
        if (this._rangeStack.length === 2) {
            this._rangeStack = [];
        }
    };
    /**
     * @return {?}
     */
    BsDaterangepickerContainerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__values"])(this._subs), _c = _b.next(); !_c.done; _c = _b.next()) {
                var sub = _c.value;
                sub.unsubscribe();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this._effects.destroy();
    };
    BsDaterangepickerContainerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"], args: [{
                    selector: 'bs-daterangepicker-container',
                    providers: [BsDatepickerStore, BsDatepickerEffects],
                    template: "<!-- days calendar view mode -->\n<div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\">\n  <div class=\"bs-datepicker-container\">\n\n    <!--calendars-->\n    <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\">\n      <!--days calendar-->\n      <div *ngSwitchCase=\"'day'\" class=\"bs-media-container\">\n        <bs-days-calendar-view\n          *ngFor=\"let calendar of (daysCalendar | async)\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          [options]=\"options | async\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"dayHoverHandler($event)\"\n          (onHoverWeek)=\"weekHoverHandler($event)\"\n          (onSelect)=\"daySelectHandler($event)\"\n        ></bs-days-calendar-view>\n      </div>\n\n      <!--months calendar-->\n      <div *ngSwitchCase=\"'month'\" class=\"bs-media-container\">\n        <bs-month-calendar-view\n          *ngFor=\"let calendar of (monthsCalendar | async)\"\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\n          [calendar]=\"calendar\"\n          (onNavigate)=\"navigateTo($event)\"\n          (onViewMode)=\"setViewMode($event)\"\n          (onHover)=\"monthHoverHandler($event)\"\n          (onSelect)=\"monthSelectHandler($event)\"\n        ></bs-month-calendar-view>\n      </div>\n\n      <!--years calendar-->\n      <div *ngSwitchCase=\"'year'\" class=\"bs-media-container\">\n        <bs-years-calendar-view\n        *ngFor=\"let calendar of (yearsCalendar | async)\"\n        [class.bs-datepicker-multiple]=\"(daysCalendar | async )?.length > 1\"\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"setViewMode($event)\"\n        (onHover)=\"yearHoverHandler($event)\"\n        (onSelect)=\"yearSelectHandler($event)\"\n      ></bs-years-calendar-view>\n    </div>\n\n  </div>\n\n  <!--applycancel buttons-->\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"false\">\n      <button class=\"btn btn-success\">Apply</button>\n      <button class=\"btn btn-default\">Cancel</button>\n    </div>\n\n  </div>\n\n  <!--custom dates or date ranges picker-->\n  <div class=\"bs-datepicker-custom-range\" *ngIf=\"false\">\n    <bs-custom-date-view [ranges]=\"_customRangesFish\"></bs-custom-date-view>\n  </div>\n</div>\n",
                    host: {
                        '(click)': '_stopPropagation($event)',
                        style: 'position: absolute; display: block;',
                        role: 'dialog',
                        'aria-label': 'calendar'
                    }
                }] }
    ];
    /** @nocollapse */
    BsDaterangepickerContainerComponent.ctorParameters = function () { return [
        { type: BsDatepickerEffects },
        { type: BsDatepickerActions },
        { type: BsDatepickerConfig },
        { type: BsDatepickerStore },
        { type: ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"] }
    ]; };
    return BsDaterangepickerContainerComponent;
}(BsDatepickerAbstractComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsDaterangepickerDirective = /** @class */ (function () {
    function BsDaterangepickerDirective(_config, _elementRef, _renderer, _viewContainerRef, cis) {
        this._config = _config;
        /**
         * Placement of a daterangepicker. Accepts: "top", "bottom", "left", "right"
         */
        this.placement = 'bottom';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
        /**
         * Close daterangepicker on outside click
         */
        this.outsideClick = true;
        /**
         * A selector specifying the element the daterangepicker should be appended
         * to. Currently only supports "body".
         */
        this.container = 'body';
        this.outsideEsc = true;
        /**
         * Emits when daterangepicker value has been changed
         */
        this.bsValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
        this._subs = [];
        this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
        Object.assign(this, _config);
        this.onShown = this._datepicker.onShown;
        this.onHidden = this._datepicker.onHidden;
    }
    Object.defineProperty(BsDaterangepickerDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the daterangepicker is currently being shown
         */
        get: /**
         * Returns whether or not the daterangepicker is currently being shown
         * @return {?}
         */
        function () {
            return this._datepicker.isShown;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDaterangepickerDirective.prototype, "bsValue", {
        /**
         * Initial value of daterangepicker
         */
        set: /**
         * Initial value of daterangepicker
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._bsValue === value) {
                return;
            }
            this._bsValue = value;
            this.bsValueChange.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BsDaterangepickerDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._datepicker.listen({
            outsideClick: this.outsideClick,
            outsideEsc: this.outsideEsc,
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        this.setConfig();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    BsDaterangepickerDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!this._datepickerRef || !this._datepickerRef.instance) {
            return;
        }
        if (changes.minDate) {
            this._datepickerRef.instance.minDate = this.minDate;
        }
        if (changes.maxDate) {
            this._datepickerRef.instance.maxDate = this.maxDate;
        }
        if (changes.datesDisabled) {
            this._datepickerRef.instance.datesDisabled = this.datesDisabled;
        }
        if (changes.isDisabled) {
            this._datepickerRef.instance.isDisabled = this.isDisabled;
        }
    };
    /**
     * Opens an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     */
    /**
     * Opens an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     * @return {?}
     */
    BsDaterangepickerDirective.prototype.show = /**
     * Opens an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._datepicker.isShown) {
            return;
        }
        this.setConfig();
        this._datepickerRef = this._datepicker
            .provide({ provide: BsDatepickerConfig, useValue: this._config })
            .attach(BsDaterangepickerContainerComponent)
            .to(this.container)
            .position({ attachment: this.placement })
            .show({ placement: this.placement });
        // if date changes from external source (model -> view)
        this._subs.push(this.bsValueChange.subscribe(function (value) {
            _this._datepickerRef.instance.value = value;
        }));
        // if date changes from picker (view -> model)
        this._subs.push(this._datepickerRef.instance.valueChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (range) { return range && range[0] && !!range[1]; }))
            .subscribe(function (value) {
            _this.bsValue = value;
            _this.hide();
        }));
    };
    /**
     * Set config for daterangepicker
     */
    /**
     * Set config for daterangepicker
     * @return {?}
     */
    BsDaterangepickerDirective.prototype.setConfig = /**
     * Set config for daterangepicker
     * @return {?}
     */
    function () {
        this._config = Object.assign({}, this._config, this.bsConfig, {
            value: this._bsValue,
            isDisabled: this.isDisabled,
            minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
            maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
            datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled
        });
    };
    /**
     * Closes an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     */
    /**
     * Closes an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     * @return {?}
     */
    BsDaterangepickerDirective.prototype.hide = /**
     * Closes an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     * @return {?}
     */
    function () {
        var e_1, _a;
        if (this.isOpen) {
            this._datepicker.hide();
        }
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__values"])(this._subs), _c = _b.next(); !_c.done; _c = _b.next()) {
                var sub = _c.value;
                sub.unsubscribe();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * Toggles an element’s datepicker. This is considered a “manual” triggering
     * of the datepicker.
     */
    /**
     * Toggles an element’s datepicker. This is considered a “manual” triggering
     * of the datepicker.
     * @return {?}
     */
    BsDaterangepickerDirective.prototype.toggle = /**
     * Toggles an element’s datepicker. This is considered a “manual” triggering
     * of the datepicker.
     * @return {?}
     */
    function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    /**
     * @return {?}
     */
    BsDaterangepickerDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._datepicker.dispose();
    };
    BsDaterangepickerDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"], args: [{
                    selector: '[bsDaterangepicker]',
                    exportAs: 'bsDaterangepicker'
                },] }
    ];
    /** @nocollapse */
    BsDaterangepickerDirective.ctorParameters = function () { return [
        { type: BsDaterangepickerConfig },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewContainerRef"] },
        { type: ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_4__["ComponentLoaderFactory"] }
    ]; };
    BsDaterangepickerDirective.propDecorators = {
        placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        triggers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        outsideClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        container: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        outsideEsc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        onShown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"] }],
        onHidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"] }],
        bsValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        bsConfig: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        isDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        datesDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        bsValueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"] }]
    };
    return BsDaterangepickerDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var BS_DATERANGEPICKER_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function () { return BsDaterangepickerInputDirective; }),
    multi: true
};
/** @type {?} */
var BS_DATERANGEPICKER_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALIDATORS"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function () { return BsDaterangepickerInputDirective; }),
    multi: true
};
var BsDaterangepickerInputDirective = /** @class */ (function () {
    function BsDaterangepickerInputDirective(_picker, _localeService, _renderer, _elRef, changeDetection) {
        var _this = this;
        this._picker = _picker;
        this._localeService = _localeService;
        this._renderer = _renderer;
        this._elRef = _elRef;
        this.changeDetection = changeDetection;
        this._onChange = Function.prototype;
        this._onTouched = Function.prototype;
        /* tslint:disable-next-line: no-unused-variable */
        this._validatorChange = Function.prototype;
        // update input value on datepicker value update
        this._picker.bsValueChange.subscribe(function (value) {
            _this._setInputValue(value);
            if (_this._value !== value) {
                _this._value = value;
                _this._onChange(value);
                _this._onTouched();
            }
            _this.changeDetection.markForCheck();
        });
        // update input value on locale change
        this._localeService.localeChange.subscribe(function () {
            _this._setInputValue(_this._value);
        });
    }
    /**
     * @param {?} date
     * @return {?}
     */
    BsDaterangepickerInputDirective.prototype._setInputValue = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var range = '';
        if (date) {
            /** @type {?} */
            var start = !date[0] ? ''
                : Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(date[0], this._picker._config.rangeInputFormat, this._localeService.currentLocale);
            /** @type {?} */
            var end = !date[1] ? ''
                : Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(date[1], this._picker._config.rangeInputFormat, this._localeService.currentLocale);
            range = (start && end) ? start + this._picker._config.rangeSeparator + end : '';
        }
        this._renderer.setProperty(this._elRef.nativeElement, 'value', range);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDaterangepickerInputDirective.prototype.onChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /* tslint:disable-next-line: no-any*/
        this.writeValue(((/** @type {?} */ (event.target))).value);
        this._onChange(this._value);
        this._onTouched();
    };
    /**
     * @param {?} c
     * @return {?}
     */
    BsDaterangepickerInputDirective.prototype.validate = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
        /** @type {?} */
        var _value = c.value;
        if (_value === null || _value === undefined || !Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["isArray"])(_value)) {
            return null;
        }
        /** @type {?} */
        var _isFirstDateValid = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["isDateValid"])(_value[0]);
        /** @type {?} */
        var _isSecondDateValid = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["isDateValid"])(_value[1]);
        if (!_isFirstDateValid) {
            return { bsDate: { invalid: _value[0] } };
        }
        if (!_isSecondDateValid) {
            return { bsDate: { invalid: _value[1] } };
        }
        if (this._picker && this._picker.minDate && Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["isBefore"])(_value[0], this._picker.minDate, 'date')) {
            return { bsDate: { minDate: this._picker.minDate } };
        }
        if (this._picker && this._picker.maxDate && Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["isAfter"])(_value[1], this._picker.maxDate, 'date')) {
            return { bsDate: { maxDate: this._picker.maxDate } };
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    BsDaterangepickerInputDirective.prototype.registerOnValidatorChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._validatorChange = fn;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    BsDaterangepickerInputDirective.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        if (!value) {
            this._value = null;
        }
        else {
            /** @type {?} */
            var _localeKey = this._localeService.currentLocale;
            /** @type {?} */
            var _locale = Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["getLocale"])(_localeKey);
            if (!_locale) {
                throw new Error("Locale \"" + _localeKey + "\" is not defined, please add it with \"defineLocale(...)\"");
            }
            /** @type {?} */
            var _input = [];
            if (typeof value === 'string') {
                _input = value.split(this._picker._config.rangeSeparator);
            }
            if (Array.isArray(value)) {
                _input = value;
            }
            this._value = ((/** @type {?} */ (_input)))
                .map(function (_val) {
                return Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["parseDate"])(_val, _this._picker._config.dateInputFormat, _this._localeService.currentLocale);
            })
                .map(function (date) { return (isNaN(date.valueOf()) ? null : date); });
        }
        this._picker.bsValue = this._value;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    BsDaterangepickerInputDirective.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this._picker.isDisabled = isDisabled;
        if (isDisabled) {
            this._renderer.setAttribute(this._elRef.nativeElement, 'disabled', 'disabled');
            return;
        }
        this._renderer.removeAttribute(this._elRef.nativeElement, 'disabled');
    };
    /* tslint:disable-next-line: no-any*/
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} fn
     * @return {?}
     */
    BsDaterangepickerInputDirective.prototype.registerOnChange = /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /* tslint:disable-next-line: no-any*/
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} fn
     * @return {?}
     */
    BsDaterangepickerInputDirective.prototype.registerOnTouched = /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    /**
     * @return {?}
     */
    BsDaterangepickerInputDirective.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this._onTouched();
    };
    /**
     * @return {?}
     */
    BsDaterangepickerInputDirective.prototype.hide = /**
     * @return {?}
     */
    function () {
        this._picker.hide();
        this._renderer.selectRootElement(this._elRef.nativeElement).blur();
    };
    BsDaterangepickerInputDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"], args: [{
                    selector: "input[bsDaterangepicker]",
                    host: {
                        '(change)': 'onChange($event)',
                        '(keyup.esc)': 'hide()',
                        '(blur)': 'onBlur()'
                    },
                    providers: [BS_DATERANGEPICKER_VALUE_ACCESSOR, BS_DATERANGEPICKER_VALIDATOR]
                },] }
    ];
    /** @nocollapse */
    BsDaterangepickerInputDirective.ctorParameters = function () { return [
        { type: BsDaterangepickerDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Host"] }] },
        { type: BsLocaleService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"] }
    ]; };
    return BsDaterangepickerInputDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsCalendarLayoutComponent = /** @class */ (function () {
    function BsCalendarLayoutComponent() {
    }
    BsCalendarLayoutComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"], args: [{
                    selector: 'bs-calendar-layout',
                    template: "\n    <!-- current date, will be added in nearest releases -->\n    <bs-current-date title=\"hey there\" *ngIf=\"false\"></bs-current-date>\n\n    <!--navigation-->\n    <div class=\"bs-datepicker-head\">\n      <ng-content select=\"bs-datepicker-navigation-view\"></ng-content>\n    </div>\n\n    <div class=\"bs-datepicker-body\">\n      <ng-content></ng-content>\n    </div>\n\n    <!--timepicker-->\n    <bs-timepicker *ngIf=\"false\"></bs-timepicker>\n  "
                }] }
    ];
    return BsCalendarLayoutComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsCurrentDateViewComponent = /** @class */ (function () {
    function BsCurrentDateViewComponent() {
    }
    BsCurrentDateViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"], args: [{
                    selector: 'bs-current-date',
                    template: "<div class=\"current-timedate\"><span>{{ title }}</span></div>"
                }] }
    ];
    BsCurrentDateViewComponent.propDecorators = {
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }]
    };
    return BsCurrentDateViewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsCustomDatesViewComponent = /** @class */ (function () {
    function BsCustomDatesViewComponent() {
    }
    BsCustomDatesViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"], args: [{
                    selector: 'bs-custom-date-view',
                    template: "\n    <div class=\"bs-datepicker-predefined-btns\">\n      <button *ngFor=\"let range of ranges\">{{ range.label }}</button>\n      <button *ngIf=\"isCustomRangeShown\">Custom Range</button>\n    </div>\n  ",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectionStrategy"].OnPush
                }] }
    ];
    BsCustomDatesViewComponent.propDecorators = {
        isCustomRangeShown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        ranges: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }]
    };
    return BsCustomDatesViewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsDatepickerDayDecoratorComponent = /** @class */ (function () {
    function BsDatepickerDayDecoratorComponent(_config, _elRef, _renderer) {
        this._config = _config;
        this._elRef = _elRef;
        this._renderer = _renderer;
    }
    /**
     * @return {?}
     */
    BsDatepickerDayDecoratorComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.day.isToday && this._config && this._config.customTodayClass) {
            this._renderer.addClass(this._elRef.nativeElement, this._config.customTodayClass);
        }
    };
    BsDatepickerDayDecoratorComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"], args: [{
                    selector: '[bsDatepickerDayDecorator]',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectionStrategy"].OnPush,
                    host: {
                        '[class.disabled]': 'day.isDisabled',
                        '[class.is-highlighted]': 'day.isHovered',
                        '[class.is-other-month]': 'day.isOtherMonth',
                        '[class.is-active-other-month]': 'day.isOtherMonthHovered',
                        '[class.in-range]': 'day.isInRange',
                        '[class.select-start]': 'day.isSelectionStart',
                        '[class.select-end]': 'day.isSelectionEnd',
                        '[class.selected]': 'day.isSelected'
                    },
                    template: "{{ day.label }}"
                }] }
    ];
    /** @nocollapse */
    BsDatepickerDayDecoratorComponent.ctorParameters = function () { return [
        { type: BsDatepickerConfig },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Renderer2"] }
    ]; };
    BsDatepickerDayDecoratorComponent.propDecorators = {
        day: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }]
    };
    return BsDatepickerDayDecoratorComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var BsNavigationDirection = {
    UP: 0,
    DOWN: 1,
};
BsNavigationDirection[BsNavigationDirection.UP] = 'UP';
BsNavigationDirection[BsNavigationDirection.DOWN] = 'DOWN';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsDatepickerNavigationViewComponent = /** @class */ (function () {
    function BsDatepickerNavigationViewComponent() {
        this.onNavigate = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
        this.onViewMode = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
    }
    /**
     * @param {?} down
     * @return {?}
     */
    BsDatepickerNavigationViewComponent.prototype.navTo = /**
     * @param {?} down
     * @return {?}
     */
    function (down) {
        this.onNavigate.emit(down ? BsNavigationDirection.DOWN : BsNavigationDirection.UP);
    };
    /**
     * @param {?} viewMode
     * @return {?}
     */
    BsDatepickerNavigationViewComponent.prototype.view = /**
     * @param {?} viewMode
     * @return {?}
     */
    function (viewMode) {
        this.onViewMode.emit(viewMode);
    };
    BsDatepickerNavigationViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"], args: [{
                    selector: 'bs-datepicker-navigation-view',
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectionStrategy"].OnPush,
                    template: "\n    <button class=\"previous\"\n            [disabled]=\"calendar.disableLeftArrow\"\n            [style.visibility]=\"calendar.hideLeftArrow ? 'hidden' : 'visible'\"\n            (click)=\"navTo(true)\"><span>&lsaquo;</span>\n    </button>\n\n    &#8203;  <!-- zero-width space needed for correct alignement\n                  with preserveWhitespaces: false in Angular -->\n\n    <button class=\"current\"\n            *ngIf=\"calendar.monthTitle\"\n            (click)=\"view('month')\"\n    ><span>{{ calendar.monthTitle }}</span>\n    </button>\n\n    &#8203;  <!-- zero-width space needed for correct alignement\n                  with preserveWhitespaces: false in Angular -->\n\n    <button class=\"current\" (click)=\"view('year')\"\n    ><span>{{ calendar.yearTitle }}</span></button>\n\n    &#8203;  <!-- zero-width space needed for correct alignement\n                  with preserveWhitespaces: false in Angular -->\n\n    <button class=\"next\"\n            [disabled]=\"calendar.disableRightArrow\"\n            [style.visibility]=\"calendar.hideRightArrow ? 'hidden' : 'visible'\"\n            (click)=\"navTo(false)\"><span>&rsaquo;</span>\n    </button>\n  "
                }] }
    ];
    BsDatepickerNavigationViewComponent.propDecorators = {
        calendar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        onNavigate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"] }],
        onViewMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"] }]
    };
    return BsDatepickerNavigationViewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsDaysCalendarViewComponent = /** @class */ (function () {
    function BsDaysCalendarViewComponent(_config) {
        this._config = _config;
        this.onNavigate = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
        this.onViewMode = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
        this.onHover = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
        this.onHoverWeek = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    BsDaysCalendarViewComponent.prototype.navigateTo = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var step = BsNavigationDirection.DOWN === event ? -1 : 1;
        this.onNavigate.emit({ step: { month: step } });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDaysCalendarViewComponent.prototype.changeViewMode = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onViewMode.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDaysCalendarViewComponent.prototype.selectDay = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onSelect.emit(event);
    };
    /**
     * @param {?} week
     * @return {?}
     */
    BsDaysCalendarViewComponent.prototype.selectWeek = /**
     * @param {?} week
     * @return {?}
     */
    function (week) {
        var _this = this;
        if (!this._config.selectWeek) {
            return;
        }
        if (week.days
            && week.days[0]
            && !week.days[0].isDisabled
            && this._config.selectFromOtherMonth) {
            this.onSelect.emit(week.days[0]);
            return;
        }
        if (week.days.length === 0) {
            return;
        }
        /** @type {?} */
        var selectedDay = week.days.find(function (day) {
            return _this._config.selectFromOtherMonth
                ? !day.isDisabled
                : !day.isOtherMonth && !day.isDisabled;
        });
        this.onSelect.emit(selectedDay);
    };
    /**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */
    BsDaysCalendarViewComponent.prototype.weekHoverHandler = /**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */
    function (cell, isHovered) {
        var _this = this;
        if (!this._config.selectWeek) {
            return;
        }
        /** @type {?} */
        var hasActiveDays = cell.days.find(function (day) {
            return _this._config.selectFromOtherMonth
                ? !day.isDisabled
                : !day.isOtherMonth && !day.isDisabled;
        });
        if (hasActiveDays) {
            cell.isHovered = isHovered;
            this.isWeekHovered = isHovered;
            this.onHoverWeek.emit(cell);
        }
    };
    /**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */
    BsDaysCalendarViewComponent.prototype.hoverDay = /**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */
    function (cell, isHovered) {
        if (this._config.selectFromOtherMonth && cell.isOtherMonth) {
            cell.isOtherMonthHovered = isHovered;
        }
        this.onHover.emit({ cell: cell, isHovered: isHovered });
    };
    BsDaysCalendarViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"], args: [{
                    selector: 'bs-days-calendar-view',
                    // changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <bs-calendar-layout>\n      <bs-datepicker-navigation-view\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"changeViewMode($event)\"\n      ></bs-datepicker-navigation-view>\n\n      <!--days matrix-->\n      <table role=\"grid\" class=\"days weeks\">\n        <thead>\n        <tr>\n          <!--if show weeks-->\n          <th *ngIf=\"options.showWeekNumbers\"></th>\n          <th *ngFor=\"let weekday of calendar.weekdays; let i = index\"\n              aria-label=\"weekday\">{{ calendar.weekdays[i] }}\n          </th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let week of calendar.weeks; let i = index\">\n          <td class=\"week\" [class.active-week]=\"isWeekHovered\"  *ngIf=\"options.showWeekNumbers\">\n            <span\n                (click)=\"selectWeek(week)\"\n                (mouseenter)=\"weekHoverHandler(week, true)\"\n                (mouseleave)=\"weekHoverHandler(week, false)\">{{ calendar.weekNumbers[i] }}</span>\n          </td>\n          <td *ngFor=\"let day of week.days\" role=\"gridcell\">\n          <span bsDatepickerDayDecorator\n                [day]=\"day\"\n                (click)=\"selectDay(day)\"\n                (mouseenter)=\"hoverDay(day, true)\"\n                (mouseleave)=\"hoverDay(day, false)\">{{ day.label }}</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n\n    </bs-calendar-layout>\n  "
                }] }
    ];
    /** @nocollapse */
    BsDaysCalendarViewComponent.ctorParameters = function () { return [
        { type: BsDatepickerConfig }
    ]; };
    BsDaysCalendarViewComponent.propDecorators = {
        calendar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        onNavigate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"] }],
        onViewMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"] }],
        onSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"] }],
        onHover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"] }],
        onHoverWeek: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"] }]
    };
    return BsDaysCalendarViewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsMonthCalendarViewComponent = /** @class */ (function () {
    function BsMonthCalendarViewComponent() {
        this.onNavigate = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
        this.onViewMode = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
        this.onHover = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    BsMonthCalendarViewComponent.prototype.navigateTo = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var step = BsNavigationDirection.DOWN === event ? -1 : 1;
        this.onNavigate.emit({ step: { year: step } });
    };
    /**
     * @param {?} month
     * @return {?}
     */
    BsMonthCalendarViewComponent.prototype.viewMonth = /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        this.onSelect.emit(month);
    };
    /**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */
    BsMonthCalendarViewComponent.prototype.hoverMonth = /**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */
    function (cell, isHovered) {
        this.onHover.emit({ cell: cell, isHovered: isHovered });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BsMonthCalendarViewComponent.prototype.changeViewMode = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onViewMode.emit(event);
    };
    BsMonthCalendarViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"], args: [{
                    selector: 'bs-month-calendar-view',
                    template: "\n    <bs-calendar-layout>\n      <bs-datepicker-navigation-view\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"changeViewMode($event)\"\n      ></bs-datepicker-navigation-view>\n\n      <table role=\"grid\" class=\"months\">\n        <tbody>\n        <tr *ngFor=\"let row of calendar.months\">\n          <td *ngFor=\"let month of row\" role=\"gridcell\"\n              (click)=\"viewMonth(month)\"\n              (mouseenter)=\"hoverMonth(month, true)\"\n              (mouseleave)=\"hoverMonth(month, false)\"\n              [class.disabled]=\"month.isDisabled\"\n              [class.is-highlighted]=\"month.isHovered\">\n            <span>{{ month.label }}</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </bs-calendar-layout>\n  "
                }] }
    ];
    BsMonthCalendarViewComponent.propDecorators = {
        calendar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        onNavigate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"] }],
        onViewMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"] }],
        onSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"] }],
        onHover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"] }]
    };
    return BsMonthCalendarViewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsTimepickerViewComponent = /** @class */ (function () {
    function BsTimepickerViewComponent() {
        this.ampm = 'ok';
        this.hours = 0;
        this.minutes = 0;
    }
    BsTimepickerViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"], args: [{
                    selector: 'bs-timepicker',
                    template: "\n    <div class=\"bs-timepicker-container\">\n      <div class=\"bs-timepicker-controls\">\n        <button class=\"bs-decrease\">-</button>\n        <input type=\"text\" [value]=\"hours\" placeholder=\"00\">\n        <button class=\"bs-increase\">+</button>\n      </div>\n      <div class=\"bs-timepicker-controls\">\n        <button class=\"bs-decrease\">-</button>\n        <input type=\"text\" [value]=\"minutes\" placeholder=\"00\">\n        <button class=\"bs-increase\">+</button>\n      </div>\n      <button class=\"switch-time-format\">{{ ampm }}\n        <img\n          src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAABSElEQVQYV3XQPUvDUBQG4HNuagtVqc6KgouCv6GIuIntYBLB9hcIQpLStCAIV7DYmpTcRWcXqZio3Vwc/UCc/QEqfgyKGbr0I7nS1EiHeqYzPO/h5SD0jaxUZjmSLCB+OFb+UFINFwASAEAdpu9gaGXVyAHHFQBkHpKHc6a9dzECvADyY9sqlAMsK9W0jzxDXqeytr3mhQckxSji27TJJ5/rPmIpwJJq3HrtduriYOurv1a4i1p5HnhkG9OFymi0ReoO05cGwb+ayv4dysVygjeFmsP05f8wpZQ8fsdvfmuY9zjWSNqUtgYFVnOVReILYoBFzdQI5/GGFzNHhGbeZnopDGU29sZbscgldmC99w35VOATTycIMMcBXIfpSVGzZhA6C8hh00conln6VQ9TGgV32OEAKQC4DrBq7CJwd0ggR7Vq/rPrfgB+C3sGypY5DAAAAABJRU5ErkJggg==\"\n          alt=\"\">\n      </button>\n    </div>\n  "
                }] }
    ];
    return BsTimepickerViewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BsYearsCalendarViewComponent = /** @class */ (function () {
    function BsYearsCalendarViewComponent() {
        this.onNavigate = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
        this.onViewMode = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
        this.onHover = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    BsYearsCalendarViewComponent.prototype.navigateTo = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var step = BsNavigationDirection.DOWN === event ? -1 : 1;
        this.onNavigate.emit({ step: { year: step * yearsPerCalendar } });
    };
    /**
     * @param {?} year
     * @return {?}
     */
    BsYearsCalendarViewComponent.prototype.viewYear = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        this.onSelect.emit(year);
    };
    /**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */
    BsYearsCalendarViewComponent.prototype.hoverYear = /**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */
    function (cell, isHovered) {
        this.onHover.emit({ cell: cell, isHovered: isHovered });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BsYearsCalendarViewComponent.prototype.changeViewMode = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onViewMode.emit(event);
    };
    BsYearsCalendarViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"], args: [{
                    selector: 'bs-years-calendar-view',
                    template: "\n    <bs-calendar-layout>\n      <bs-datepicker-navigation-view\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"changeViewMode($event)\"\n      ></bs-datepicker-navigation-view>\n\n      <table role=\"grid\" class=\"years\">\n        <tbody>\n        <tr *ngFor=\"let row of calendar.years\">\n          <td *ngFor=\"let year of row\" role=\"gridcell\"\n              (click)=\"viewYear(year)\"\n              (mouseenter)=\"hoverYear(year, true)\"\n              (mouseleave)=\"hoverYear(year, false)\"\n              [class.disabled]=\"year.isDisabled\"\n              [class.is-highlighted]=\"year.isHovered\">\n            <span>{{ year.label }}</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </bs-calendar-layout>\n  "
                }] }
    ];
    BsYearsCalendarViewComponent.propDecorators = {
        calendar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        onNavigate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"] }],
        onViewMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"] }],
        onSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"] }],
        onHover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"] }]
    };
    return BsYearsCalendarViewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var _exports = [
    BsDatepickerContainerComponent,
    BsDaterangepickerContainerComponent,
    BsDatepickerInlineContainerComponent,
    BsDatepickerDirective,
    BsDatepickerInputDirective,
    BsDaterangepickerInputDirective,
    BsDaterangepickerDirective,
    BsDatepickerInlineDirective
];
var BsDatepickerModule = /** @class */ (function () {
    function BsDatepickerModule() {
    }
    /**
     * @return {?}
     */
    BsDatepickerModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: BsDatepickerModule,
            providers: [
                ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_4__["ComponentLoaderFactory"],
                ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_3__["PositioningService"],
                BsDatepickerStore,
                BsDatepickerActions,
                BsDatepickerConfig,
                BsDaterangepickerConfig,
                BsDatepickerInlineConfig,
                BsDatepickerEffects,
                BsLocaleService
            ]
        };
    };
    BsDatepickerModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"]],
                    declarations: Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spread"])([
                        BsDatepickerDayDecoratorComponent,
                        BsCurrentDateViewComponent,
                        BsDatepickerNavigationViewComponent,
                        BsTimepickerViewComponent,
                        BsCalendarLayoutComponent,
                        BsDaysCalendarViewComponent,
                        BsMonthCalendarViewComponent,
                        BsYearsCalendarViewComponent,
                        BsCustomDatesViewComponent
                    ], _exports),
                    entryComponents: [
                        BsDatepickerContainerComponent,
                        BsDaterangepickerContainerComponent,
                        BsDatepickerInlineContainerComponent
                    ],
                    exports: _exports
                },] }
    ];
    return BsDatepickerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DateFormatter = /** @class */ (function () {
    function DateFormatter() {
    }
    /**
     * @param {?} date
     * @param {?} format
     * @param {?} locale
     * @return {?}
     */
    DateFormatter.prototype.format = /**
     * @param {?} date
     * @param {?} format
     * @param {?} locale
     * @return {?}
     */
    function (date, format, locale) {
        return Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(date, format, locale);
    };
    return DateFormatter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DatePickerInnerComponent = /** @class */ (function () {
    function DatePickerInnerComponent() {
        this.selectionDone = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"](undefined);
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"](false);
        this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"](undefined);
        /* tslint:disable-next-line: no-any*/
        this.stepDay = {};
        /* tslint:disable-next-line: no-any*/
        this.stepMonth = {};
        /* tslint:disable-next-line: no-any*/
        this.stepYear = {};
        this.modes = ['day', 'month', 'year'];
        this.dateFormatter = new DateFormatter();
    }
    Object.defineProperty(DatePickerInnerComponent.prototype, "activeDate", {
        get: /**
         * @return {?}
         */
        function () {
            return this._activeDate;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._activeDate = value;
        },
        enumerable: true,
        configurable: true
    });
    // todo: add formatter value to Date object
    // todo: add formatter value to Date object
    /**
     * @return {?}
     */
    DatePickerInnerComponent.prototype.ngOnInit = 
    // todo: add formatter value to Date object
    /**
     * @return {?}
     */
    function () {
        // todo: use date for unique value
        this.uniqueId = "datepicker--" + Math.floor(Math.random() * 10000);
        if (this.initDate) {
            this.activeDate = this.initDate;
            this.selectedDate = new Date(this.activeDate.valueOf());
            this.update.emit(this.activeDate);
        }
        else if (this.activeDate === undefined) {
            this.activeDate = new Date();
        }
    };
    // this.refreshView should be called here to reflect the changes on the fly
    // tslint:disable-next-line:no-unused-variable
    // this.refreshView should be called here to reflect the changes on the fly
    // tslint:disable-next-line:no-unused-variable
    /**
     * @param {?} changes
     * @return {?}
     */
    DatePickerInnerComponent.prototype.ngOnChanges = 
    // this.refreshView should be called here to reflect the changes on the fly
    // tslint:disable-next-line:no-unused-variable
    /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.refreshView();
        this.checkIfActiveDateGotUpdated(changes.activeDate);
    };
    // Check if activeDate has been update and then emit the activeDateChange with the new date
    /* tslint:disable-next-line: no-any */
    // Check if activeDate has been update and then emit the activeDateChange with the new date
    /* tslint:disable-next-line: no-any */
    /**
     * @param {?} activeDate
     * @return {?}
     */
    DatePickerInnerComponent.prototype.checkIfActiveDateGotUpdated = 
    // Check if activeDate has been update and then emit the activeDateChange with the new date
    /* tslint:disable-next-line: no-any */
    /**
     * @param {?} activeDate
     * @return {?}
     */
    function (activeDate) {
        if (activeDate && !activeDate.firstChange) {
            /** @type {?} */
            var previousValue = activeDate.previousValue;
            if (previousValue &&
                previousValue instanceof Date &&
                previousValue.getTime() !== activeDate.currentValue.getTime()) {
                this.activeDateChange.emit(this.activeDate);
            }
        }
    };
    /**
     * @param {?} handler
     * @param {?} type
     * @return {?}
     */
    DatePickerInnerComponent.prototype.setCompareHandler = /**
     * @param {?} handler
     * @param {?} type
     * @return {?}
     */
    function (handler, type) {
        if (type === 'day') {
            this.compareHandlerDay = handler;
        }
        if (type === 'month') {
            this.compareHandlerMonth = handler;
        }
        if (type === 'year') {
            this.compareHandlerYear = handler;
        }
    };
    /**
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */
    DatePickerInnerComponent.prototype.compare = /**
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */
    function (date1, date2) {
        if (date1 === undefined || date2 === undefined) {
            return undefined;
        }
        if (this.datepickerMode === 'day' && this.compareHandlerDay) {
            return this.compareHandlerDay(date1, date2);
        }
        if (this.datepickerMode === 'month' && this.compareHandlerMonth) {
            return this.compareHandlerMonth(date1, date2);
        }
        if (this.datepickerMode === 'year' && this.compareHandlerYear) {
            return this.compareHandlerYear(date1, date2);
        }
        return void 0;
    };
    /**
     * @param {?} handler
     * @param {?} type
     * @return {?}
     */
    DatePickerInnerComponent.prototype.setRefreshViewHandler = /**
     * @param {?} handler
     * @param {?} type
     * @return {?}
     */
    function (handler, type) {
        if (type === 'day') {
            this.refreshViewHandlerDay = handler;
        }
        if (type === 'month') {
            this.refreshViewHandlerMonth = handler;
        }
        if (type === 'year') {
            this.refreshViewHandlerYear = handler;
        }
    };
    /**
     * @return {?}
     */
    DatePickerInnerComponent.prototype.refreshView = /**
     * @return {?}
     */
    function () {
        if (this.datepickerMode === 'day' && this.refreshViewHandlerDay) {
            this.refreshViewHandlerDay();
        }
        if (this.datepickerMode === 'month' && this.refreshViewHandlerMonth) {
            this.refreshViewHandlerMonth();
        }
        if (this.datepickerMode === 'year' && this.refreshViewHandlerYear) {
            this.refreshViewHandlerYear();
        }
    };
    /**
     * @param {?} date
     * @param {?} format
     * @return {?}
     */
    DatePickerInnerComponent.prototype.dateFilter = /**
     * @param {?} date
     * @param {?} format
     * @return {?}
     */
    function (date, format) {
        return this.dateFormatter.format(date, format, this.locale);
    };
    /* tslint:disable-next-line: no-any*/
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} dateObject
     * @return {?}
     */
    DatePickerInnerComponent.prototype.isActive = /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} dateObject
     * @return {?}
     */
    function (dateObject) {
        if (this.compare(dateObject.date, this.activeDate) === 0) {
            this.activeDateId = dateObject.uid;
            return true;
        }
        return false;
    };
    /* tslint:disable-next-line: no-any*/
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} date
     * @param {?} format
     * @return {?}
     */
    DatePickerInnerComponent.prototype.createDateObject = /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} date
     * @param {?} format
     * @return {?}
     */
    function (date, format) {
        /* tslint:disable-next-line: no-any*/
        /** @type {?} */
        var dateObject = {};
        dateObject.date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        dateObject.date = this.fixTimeZone(dateObject.date);
        dateObject.label = this.dateFilter(date, format);
        dateObject.selected = this.compare(date, this.selectedDate) === 0;
        dateObject.disabled = this.isDisabled(date);
        dateObject.current = this.compare(date, new Date()) === 0;
        dateObject.customClass = this.getCustomClassForDate(dateObject.date);
        return dateObject;
    };
    /* tslint:disable-next-line: no-any*/
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} arr
     * @param {?} size
     * @return {?}
     */
    DatePickerInnerComponent.prototype.split = /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} arr
     * @param {?} size
     * @return {?}
     */
    function (arr, size) {
        /* tslint:disable-next-line: no-any*/
        /** @type {?} */
        var arrays = [];
        while (arr.length > 0) {
            arrays.push(arr.splice(0, size));
        }
        return arrays;
    };
    // Fix a hard-reproducible bug with timezones
    // The bug depends on OS, browser, current timezone and current date
    // i.e.
    // var date = new Date(2014, 0, 1);
    // console.log(date.getFullYear(), date.getMonth(), date.getDate(),
    // date.getHours()); can result in "2013 11 31 23" because of the bug.
    // Fix a hard-reproducible bug with timezones
    // The bug depends on OS, browser, current timezone and current date
    // i.e.
    // var date = new Date(2014, 0, 1);
    // console.log(date.getFullYear(), date.getMonth(), date.getDate(),
    // date.getHours()); can result in "2013 11 31 23" because of the bug.
    /**
     * @param {?} date
     * @return {?}
     */
    DatePickerInnerComponent.prototype.fixTimeZone = 
    // Fix a hard-reproducible bug with timezones
    // The bug depends on OS, browser, current timezone and current date
    // i.e.
    // var date = new Date(2014, 0, 1);
    // console.log(date.getFullYear(), date.getMonth(), date.getDate(),
    // date.getHours()); can result in "2013 11 31 23" because of the bug.
    /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var hours = date.getHours();
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), hours === 23 ? hours + 2 : 0);
    };
    /**
     * @param {?} date
     * @param {?=} isManual
     * @return {?}
     */
    DatePickerInnerComponent.prototype.select = /**
     * @param {?} date
     * @param {?=} isManual
     * @return {?}
     */
    function (date, isManual) {
        if (isManual === void 0) { isManual = true; }
        if (this.datepickerMode === this.minMode) {
            if (!this.activeDate) {
                this.activeDate = new Date(0, 0, 0, 0, 0, 0, 0);
            }
            this.activeDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            this.activeDate = this.fixTimeZone(this.activeDate);
            if (isManual) {
                this.selectionDone.emit(this.activeDate);
            }
        }
        else {
            this.activeDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            this.activeDate = this.fixTimeZone(this.activeDate);
            if (isManual) {
                this.datepickerMode = this.modes[this.modes.indexOf(this.datepickerMode) - 1];
            }
        }
        this.selectedDate = new Date(this.activeDate.valueOf());
        this.update.emit(this.activeDate);
        this.refreshView();
    };
    /**
     * @param {?} direction
     * @return {?}
     */
    DatePickerInnerComponent.prototype.move = /**
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        /* tslint:disable-next-line: no-any*/
        /** @type {?} */
        var expectedStep;
        if (this.datepickerMode === 'day') {
            expectedStep = this.stepDay;
        }
        if (this.datepickerMode === 'month') {
            expectedStep = this.stepMonth;
        }
        if (this.datepickerMode === 'year') {
            expectedStep = this.stepYear;
        }
        if (expectedStep) {
            /** @type {?} */
            var year = this.activeDate.getFullYear() + direction * (expectedStep.years || 0);
            /** @type {?} */
            var month = this.activeDate.getMonth() + direction * (expectedStep.months || 0);
            this.activeDate = new Date(year, month, 1);
            this.refreshView();
            this.activeDateChange.emit(this.activeDate);
        }
    };
    /**
     * @param {?} _direction
     * @return {?}
     */
    DatePickerInnerComponent.prototype.toggleMode = /**
     * @param {?} _direction
     * @return {?}
     */
    function (_direction) {
        /** @type {?} */
        var direction = _direction || 1;
        if ((this.datepickerMode === this.maxMode && direction === 1) ||
            (this.datepickerMode === this.minMode && direction === -1)) {
            return;
        }
        this.datepickerMode = this.modes[this.modes.indexOf(this.datepickerMode) + direction];
        this.refreshView();
    };
    /**
     * @protected
     * @param {?} date
     * @return {?}
     */
    DatePickerInnerComponent.prototype.getCustomClassForDate = /**
     * @protected
     * @param {?} date
     * @return {?}
     */
    function (date) {
        var _this = this;
        if (!this.customClass) {
            return '';
        }
        // todo: build a hash of custom classes, it will work faster
        /** @type {?} */
        var customClassObject = this.customClass.find(function (customClass) {
            return (customClass.date.valueOf() === date.valueOf() &&
                customClass.mode === _this.datepickerMode);
        }, this);
        return customClassObject === undefined ? '' : customClassObject.clazz;
    };
    /**
     * @protected
     * @param {?} date1Disabled
     * @param {?} date2
     * @return {?}
     */
    DatePickerInnerComponent.prototype.compareDateDisabled = /**
     * @protected
     * @param {?} date1Disabled
     * @param {?} date2
     * @return {?}
     */
    function (date1Disabled, date2) {
        if (date1Disabled === undefined || date2 === undefined) {
            return undefined;
        }
        if (date1Disabled.mode === 'day' && this.compareHandlerDay) {
            return this.compareHandlerDay(date1Disabled.date, date2);
        }
        if (date1Disabled.mode === 'month' && this.compareHandlerMonth) {
            return this.compareHandlerMonth(date1Disabled.date, date2);
        }
        if (date1Disabled.mode === 'year' && this.compareHandlerYear) {
            return this.compareHandlerYear(date1Disabled.date, date2);
        }
        return undefined;
    };
    /**
     * @protected
     * @param {?} date
     * @return {?}
     */
    DatePickerInnerComponent.prototype.isDisabled = /**
     * @protected
     * @param {?} date
     * @return {?}
     */
    function (date) {
        var _this = this;
        /** @type {?} */
        var isDateDisabled = false;
        if (this.dateDisabled) {
            this.dateDisabled.forEach(function (disabledDate) {
                if (_this.compareDateDisabled(disabledDate, date) === 0) {
                    isDateDisabled = true;
                }
            });
        }
        if (this.dayDisabled) {
            isDateDisabled =
                isDateDisabled ||
                    this.dayDisabled.indexOf(date.getDay()) > -1;
        }
        return (isDateDisabled ||
            (this.minDate && this.compare(date, this.minDate) < 0) ||
            (this.maxDate && this.compare(date, this.maxDate) > 0));
    };
    DatePickerInnerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"], args: [{
                    selector: 'datepicker-inner',
                    template: "\n    <!--&lt;!&ndash;ng-keydown=\"keydown($event)\"&ndash;&gt;-->\n    <div *ngIf=\"datepickerMode\" class=\"well well-sm bg-faded p-a card\" role=\"application\" >\n      <ng-content></ng-content>\n    </div>\n  "
                }] }
    ];
    DatePickerInnerComponent.propDecorators = {
        locale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        datepickerMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        startingDay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        yearRange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        minMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        maxMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        showWeeks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        formatDay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        formatMonth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        formatYear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        formatDayHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        formatDayTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        formatMonthTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        onlyCurrentMonth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        shortcutPropagation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        customClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        monthColLimit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        yearColLimit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        dateDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        dayDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        initDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        selectionDone: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"] }],
        update: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"] }],
        activeDateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"] }],
        activeDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }]
    };
    return DatePickerInnerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DatepickerConfig = /** @class */ (function () {
    function DatepickerConfig() {
        this.locale = 'en';
        this.datepickerMode = 'day';
        this.startingDay = 0;
        this.yearRange = 20;
        this.minMode = 'day';
        this.maxMode = 'year';
        this.showWeeks = true;
        this.formatDay = 'DD';
        this.formatMonth = 'MMMM';
        this.formatYear = 'YYYY';
        this.formatDayHeader = 'dd';
        this.formatDayTitle = 'MMMM YYYY';
        this.formatMonthTitle = 'YYYY';
        this.onlyCurrentMonth = false;
        this.monthColLimit = 3;
        this.yearColLimit = 5;
        this.shortcutPropagation = false;
    }
    DatepickerConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Injectable"] }
    ];
    return DatepickerConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DATEPICKER_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["forwardRef"])(function () { return DatePickerComponent; }),
    multi: true
};
/* tslint:disable:component-selector-name component-selector-type */
var DatePickerComponent = /** @class */ (function () {
    function DatePickerComponent(config) {
        /**
         * sets datepicker mode, supports: `day`, `month`, `year`
         */
        this.datepickerMode = 'day';
        /**
         * if false week numbers will be hidden
         */
        this.showWeeks = true;
        this.selectionDone = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"](undefined);
        /**
         * callback to invoke when the activeDate is changed.
         */
        this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"](undefined);
        /* tslint:disable-next-line: no-any*/
        this.onChange = Function.prototype;
        /* tslint:disable-next-line: no-any*/
        this.onTouched = Function.prototype;
        this._now = new Date();
        this.config = config;
        this.configureOptions();
    }
    Object.defineProperty(DatePickerComponent.prototype, "activeDate", {
        /** currently active date */
        get: /**
         * currently active date
         * @return {?}
         */
        function () {
            return this._activeDate || this._now;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._activeDate = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DatePickerComponent.prototype.configureOptions = /**
     * @return {?}
     */
    function () {
        Object.assign(this, this.config);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DatePickerComponent.prototype.onUpdate = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.activeDate = event;
        this.onChange(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DatePickerComponent.prototype.onSelectionDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.selectionDone.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    DatePickerComponent.prototype.onActiveDateChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.activeDateChange.emit(event);
    };
    // todo: support null value
    /* tslint:disable-next-line: no-any*/
    // todo: support null value
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} value
     * @return {?}
     */
    DatePickerComponent.prototype.writeValue = 
    // todo: support null value
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this._datePicker.compare(value, this._activeDate) === 0) {
            return;
        }
        if (value && value instanceof Date) {
            this.activeDate = value;
            this._datePicker.select(value, false);
            return;
        }
        this.activeDate = value ? new Date(value) : void 0;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DatePickerComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    DatePickerComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    DatePickerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"], args: [{
                    selector: 'datepicker',
                    template: "\n    <datepicker-inner [activeDate]=\"activeDate\"\n                      (update)=\"onUpdate($event)\"\n                      [locale]=\"config.locale\"\n                      [datepickerMode]=\"datepickerMode\"\n                      [initDate]=\"initDate\"\n                      [minDate]=\"minDate\"\n                      [maxDate]=\"maxDate\"\n                      [minMode]=\"minMode\"\n                      [maxMode]=\"maxMode\"\n                      [showWeeks]=\"showWeeks\"\n                      [formatDay]=\"formatDay\"\n                      [formatMonth]=\"formatMonth\"\n                      [formatYear]=\"formatYear\"\n                      [formatDayHeader]=\"formatDayHeader\"\n                      [formatDayTitle]=\"formatDayTitle\"\n                      [formatMonthTitle]=\"formatMonthTitle\"\n                      [startingDay]=\"startingDay\"\n                      [yearRange]=\"yearRange\"\n                      [customClass]=\"customClass\"\n                      [dateDisabled]=\"dateDisabled\"\n                      [dayDisabled]=\"dayDisabled\"\n                      [onlyCurrentMonth]=\"onlyCurrentMonth\"\n                      [shortcutPropagation]=\"shortcutPropagation\"\n                      [monthColLimit]=\"monthColLimit\"\n                      [yearColLimit]=\"yearColLimit\"\n                      (selectionDone)=\"onSelectionDone($event)\"\n                      (activeDateChange)=\"onActiveDateChange($event)\">\n      <daypicker tabindex=\"0\"></daypicker>\n      <monthpicker tabindex=\"0\"></monthpicker>\n      <yearpicker tabindex=\"0\"></yearpicker>\n    </datepicker-inner>\n    ",
                    providers: [DATEPICKER_CONTROL_VALUE_ACCESSOR]
                }] }
    ];
    /** @nocollapse */
    DatePickerComponent.ctorParameters = function () { return [
        { type: DatepickerConfig }
    ]; };
    DatePickerComponent.propDecorators = {
        datepickerMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        initDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        minMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        maxMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        showWeeks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        formatDay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        formatMonth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        formatYear: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        formatDayHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        formatDayTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        formatMonthTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        startingDay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        yearRange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        onlyCurrentMonth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        shortcutPropagation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        monthColLimit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        yearColLimit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        customClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        dateDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        dayDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        activeDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"] }],
        selectionDone: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"] }],
        activeDateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"] }],
        _datePicker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewChild"], args: [DatePickerInnerComponent,] }]
    };
    return DatePickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DayPickerComponent = /** @class */ (function () {
    function DayPickerComponent(datePicker) {
        this.labels = [];
        this.rows = [];
        this.weekNumbers = [];
        this.datePicker = datePicker;
    }
    Object.defineProperty(DayPickerComponent.prototype, "isBs4", {
        get: /**
         * @return {?}
         */
        function () {
            return !Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_10__["isBs3"])();
        },
        enumerable: true,
        configurable: true
    });
    /*protected getDaysInMonth(year:number, month:number) {
     return ((month === 1) && (year % 4 === 0) &&
     ((year % 100 !== 0) || (year % 400 === 0))) ? 29 : DAYS_IN_MONTH[month];
     }*/
    /*protected getDaysInMonth(year:number, month:number) {
       return ((month === 1) && (year % 4 === 0) &&
       ((year % 100 !== 0) || (year % 400 === 0))) ? 29 : DAYS_IN_MONTH[month];
       }*/
    /**
     * @return {?}
     */
    DayPickerComponent.prototype.ngOnInit = /*protected getDaysInMonth(year:number, month:number) {
       return ((month === 1) && (year % 4 === 0) &&
       ((year % 100 !== 0) || (year % 400 === 0))) ? 29 : DAYS_IN_MONTH[month];
       }*/
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var self = this;
        this.datePicker.stepDay = { months: 1 };
        this.datePicker.setRefreshViewHandler(function () {
            /** @type {?} */
            var year = this.activeDate.getFullYear();
            /** @type {?} */
            var month = this.activeDate.getMonth();
            /** @type {?} */
            var firstDayOfMonth = new Date(year, month, 1);
            /** @type {?} */
            var difference = this.startingDay - firstDayOfMonth.getDay();
            /** @type {?} */
            var numDisplayedFromPreviousMonth = difference > 0 ? 7 - difference : -difference;
            /** @type {?} */
            var firstDate = new Date(firstDayOfMonth.getTime());
            if (numDisplayedFromPreviousMonth > 0) {
                firstDate.setDate(-numDisplayedFromPreviousMonth + 1);
            }
            // 42 is the number of days on a six-week calendar
            /** @type {?} */
            var _days = self.getDates(firstDate, 42);
            /** @type {?} */
            var days = [];
            for (var i = 0; i < 42; i++) {
                /** @type {?} */
                var _dateObject = this.createDateObject(_days[i], this.formatDay);
                _dateObject.secondary = _days[i].getMonth() !== month;
                _dateObject.uid = this.uniqueId + '-' + i;
                days[i] = _dateObject;
            }
            self.labels = [];
            for (var j = 0; j < 7; j++) {
                self.labels[j] = {};
                self.labels[j].abbr = this.dateFilter(days[j].date, this.formatDayHeader);
                self.labels[j].full = this.dateFilter(days[j].date, 'EEEE');
            }
            self.title = this.dateFilter(this.activeDate, this.formatDayTitle);
            self.rows = this.split(days, 7);
            if (this.showWeeks) {
                self.weekNumbers = [];
                /** @type {?} */
                var thursdayIndex = (4 + 7 - this.startingDay) % 7;
                /** @type {?} */
                var numWeeks = self.rows.length;
                for (var curWeek = 0; curWeek < numWeeks; curWeek++) {
                    self.weekNumbers.push(self.getISO8601WeekNumber(self.rows[curWeek][thursdayIndex].date));
                }
            }
        }, 'day');
        this.datePicker.setCompareHandler(function (date1, date2) {
            /** @type {?} */
            var d1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
            /** @type {?} */
            var d2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
            return d1.getTime() - d2.getTime();
        }, 'day');
        this.datePicker.refreshView();
    };
    /**
     * @protected
     * @param {?} startDate
     * @param {?} n
     * @return {?}
     */
    DayPickerComponent.prototype.getDates = /**
     * @protected
     * @param {?} startDate
     * @param {?} n
     * @return {?}
     */
    function (startDate, n) {
        /** @type {?} */
        var dates = new Array(n);
        /** @type {?} */
        var current = new Date(startDate.getTime());
        /** @type {?} */
        var i = 0;
        /** @type {?} */
        var date;
        while (i < n) {
            date = new Date(current.getTime());
            date = this.datePicker.fixTimeZone(date);
            dates[i++] = date;
            current = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
        }
        return dates;
    };
    /**
     * @protected
     * @param {?} date
     * @return {?}
     */
    DayPickerComponent.prototype.getISO8601WeekNumber = /**
     * @protected
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var checkDate = new Date(date.getTime());
        // Thursday
        checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
        /** @type {?} */
        var time = checkDate.getTime();
        // Compare with Jan 1
        checkDate.setMonth(0);
        checkDate.setDate(1);
        return (Math.floor(Math.round((time - checkDate.getTime()) / 86400000) / 7) + 1);
    };
    DayPickerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"], args: [{
                    selector: 'daypicker',
                    template: "\n<table *ngIf=\"datePicker.datepickerMode === 'day'\" role=\"grid\" [attr.aria-labelledby]=\"datePicker.uniqueId + '-title'\" aria-activedescendant=\"activeDateId\">\n  <thead>\n    <tr>\n      <th>\n        <button *ngIf=\"!isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\"\n                tabindex=\"-1\">\u2039</button>\n        <button *ngIf=\"isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\"\n                tabindex=\"-1\">&lt;</button>\n      </th>\n      <th [attr.colspan]=\"5 + (datePicker.showWeeks ? 1 : 0)\">\n        <button [id]=\"datePicker.uniqueId + '-title'\"\n                type=\"button\" class=\"btn btn-default btn-secondary btn-sm\"\n                (click)=\"datePicker.toggleMode(0)\"\n                [disabled]=\"datePicker.datepickerMode === datePicker.maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === datePicker.maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{ title }}</strong>\n        </button>\n      </th>\n      <th>\n        <button *ngIf=\"!isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\"\n                tabindex=\"-1\">\u203A</button>\n        <button *ngIf=\"isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\"\n                tabindex=\"-1\">&gt;\n        </button>\n      </th>\n    </tr>\n    <tr>\n      <th *ngIf=\"datePicker.showWeeks\"></th>\n      <th *ngFor=\"let labelz of labels\" class=\"text-center\">\n        <small aria-label=\"labelz.full\"><b>{{ labelz.abbr }}</b></small>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-template ngFor [ngForOf]=\"rows\" let-rowz=\"$implicit\" let-index=\"index\">\n      <tr *ngIf=\"!(datePicker.onlyCurrentMonth && rowz[0].secondary && rowz[6].secondary)\">\n        <td *ngIf=\"datePicker.showWeeks\" class=\"h6\" class=\"text-center\">\n          <em>{{ weekNumbers[index] }}</em>\n        </td>\n        <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\" [id]=\"dtz.uid\">\n          <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-sm {{dtz.customClass}}\"\n                  *ngIf=\"!(datePicker.onlyCurrentMonth && dtz.secondary)\"\n                  [ngClass]=\"{'btn-secondary': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected, disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz), 'btn-default': !isBs4}\"\n                  [disabled]=\"dtz.disabled\"\n                  (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n            <span [ngClass]=\"{'text-muted': dtz.secondary || dtz.current, 'text-info': !isBs4 && dtz.current}\">{{ dtz.label }}</span>\n          </button>\n        </td>\n      </tr>\n    </ng-template>\n  </tbody>\n</table>\n  ",
                    styles: ["\n    :host .btn-secondary {\n      color: #292b2c;\n      background-color: #fff;\n      border-color: #ccc;\n    }\n    :host .btn-info .text-muted {\n      color: #292b2c !important;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    DayPickerComponent.ctorParameters = function () { return [
        { type: DatePickerInnerComponent }
    ]; };
    return DayPickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MonthPickerComponent = /** @class */ (function () {
    function MonthPickerComponent(datePicker) {
        this.rows = [];
        this.datePicker = datePicker;
    }
    Object.defineProperty(MonthPickerComponent.prototype, "isBs4", {
        get: /**
         * @return {?}
         */
        function () {
            return !Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_10__["isBs3"])();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MonthPickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var self = this;
        this.datePicker.stepMonth = { years: 1 };
        this.datePicker.setRefreshViewHandler(function () {
            /** @type {?} */
            var months = new Array(12);
            /** @type {?} */
            var year = this.activeDate.getFullYear();
            /** @type {?} */
            var date;
            for (var i = 0; i < 12; i++) {
                date = new Date(year, i, 1);
                date = this.fixTimeZone(date);
                months[i] = this.createDateObject(date, this.formatMonth);
                months[i].uid = this.uniqueId + '-' + i;
            }
            self.title = this.dateFilter(this.activeDate, this.formatMonthTitle);
            self.rows = this.split(months, self.datePicker.monthColLimit);
        }, 'month');
        this.datePicker.setCompareHandler(function (date1, date2) {
            /** @type {?} */
            var d1 = new Date(date1.getFullYear(), date1.getMonth());
            /** @type {?} */
            var d2 = new Date(date2.getFullYear(), date2.getMonth());
            return d1.getTime() - d2.getTime();
        }, 'month');
        this.datePicker.refreshView();
    };
    MonthPickerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"], args: [{
                    selector: 'monthpicker',
                    template: "\n<table *ngIf=\"datePicker.datepickerMode==='month'\" role=\"grid\">\n  <thead>\n    <tr>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\" tabindex=\"-1\">\u2039</button></th>\n      <th [attr.colspan]=\"((datePicker.monthColLimit - 2) <= 0) ? 1 : datePicker.monthColLimit - 2\">\n        <button [id]=\"datePicker.uniqueId + '-title'\"\n                type=\"button\" class=\"btn btn-default btn-sm\"\n                (click)=\"datePicker.toggleMode(0)\"\n                [disabled]=\"datePicker.datepickerMode === maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{ title }}</strong> \n        </button>\n      </th>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\" tabindex=\"-1\">\u203A</button>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let rowz of rows\">\n      <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\" [attr.id]=\"dtz.uid\" [ngClass]=\"dtz.customClass\">\n        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default\"\n                [ngClass]=\"{'btn-link': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected || (isBs4 && !dtz.selected && datePicker.isActive(dtz)), disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz)}\"\n                [disabled]=\"dtz.disabled\"\n                (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n          <span [ngClass]=\"{'text-success': isBs4 && dtz.current, 'text-info': !isBs4 && dtz.current}\">{{ dtz.label }}</span>\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n  ",
                    styles: ["\n    :host .btn-info .text-success {\n      color: #fff !important;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    MonthPickerComponent.ctorParameters = function () { return [
        { type: DatePickerInnerComponent }
    ]; };
    return MonthPickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var YearPickerComponent = /** @class */ (function () {
    function YearPickerComponent(datePicker) {
        this.rows = [];
        this.datePicker = datePicker;
    }
    Object.defineProperty(YearPickerComponent.prototype, "isBs4", {
        get: /**
         * @return {?}
         */
        function () {
            return !Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_10__["isBs3"])();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    YearPickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var self = this;
        this.datePicker.stepYear = { years: this.datePicker.yearRange };
        this.datePicker.setRefreshViewHandler(function () {
            /** @type {?} */
            var years = new Array(this.yearRange);
            /** @type {?} */
            var date;
            /** @type {?} */
            var start = self.getStartingYear(this.activeDate.getFullYear());
            for (var i = 0; i < this.yearRange; i++) {
                date = new Date(start + i, 0, 1);
                date = this.fixTimeZone(date);
                years[i] = this.createDateObject(date, this.formatYear);
                years[i].uid = this.uniqueId + '-' + i;
            }
            self.title = [years[0].label, years[this.yearRange - 1].label].join(' - ');
            self.rows = this.split(years, self.datePicker.yearColLimit);
        }, 'year');
        this.datePicker.setCompareHandler(function (date1, date2) {
            return date1.getFullYear() - date2.getFullYear();
        }, 'year');
        this.datePicker.refreshView();
    };
    /**
     * @protected
     * @param {?} year
     * @return {?}
     */
    YearPickerComponent.prototype.getStartingYear = /**
     * @protected
     * @param {?} year
     * @return {?}
     */
    function (year) {
        // todo: parseInt
        return ((year - 1) / this.datePicker.yearRange * this.datePicker.yearRange + 1);
    };
    YearPickerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"], args: [{
                    selector: 'yearpicker',
                    template: "\n<table *ngIf=\"datePicker.datepickerMode==='year'\" role=\"grid\">\n  <thead>\n    <tr>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\" tabindex=\"-1\">\u2039</button>\n      </th>\n      <th [attr.colspan]=\"((datePicker.yearColLimit - 2) <= 0) ? 1 : datePicker.yearColLimit - 2\">\n        <button [id]=\"datePicker.uniqueId + '-title'\" role=\"heading\"\n                type=\"button\" class=\"btn btn-default btn-sm\"\n                (click)=\"datePicker.toggleMode(0)\"\n                [disabled]=\"datePicker.datepickerMode === datePicker.maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === datePicker.maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{ title }}</strong>\n        </button>\n      </th>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\" tabindex=\"-1\">\u203A</button>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let rowz of rows\">\n      <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\" [attr.id]=\"dtz.uid\">\n        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default\"\n                [ngClass]=\"{'btn-link': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected || (isBs4 && !dtz.selected && datePicker.isActive(dtz)), disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz)}\"\n                [disabled]=\"dtz.disabled\"\n                (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n          <span [ngClass]=\"{'text-success': isBs4 && dtz.current, 'text-info': !isBs4 && dtz.current}\">{{ dtz.label }}</span>\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n  ",
                    styles: ["\n    :host .btn-info .text-success {\n      color: #fff !important;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    YearPickerComponent.ctorParameters = function () { return [
        { type: DatePickerInnerComponent }
    ]; };
    return YearPickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DatepickerModule = /** @class */ (function () {
    function DatepickerModule() {
    }
    /**
     * @return {?}
     */
    DatepickerModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: DatepickerModule, providers: [DatepickerConfig] };
    };
    DatepickerModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]],
                    declarations: [
                        DatePickerComponent,
                        DatePickerInnerComponent,
                        DayPickerComponent,
                        MonthPickerComponent,
                        YearPickerComponent
                    ],
                    exports: [
                        DatePickerComponent,
                        DatePickerInnerComponent,
                        DayPickerComponent,
                        MonthPickerComponent,
                        YearPickerComponent
                    ],
                    entryComponents: [DatePickerComponent]
                },] }
    ];
    return DatepickerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-bootstrap-datepicker.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/locale/fesm5/ngx-bootstrap-locale.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/locale/fesm5/ngx-bootstrap-locale.js ***!
  \*************************************************************************/
/*! exports provided: arLocale, bgLocale, caLocale, csLocale, daLocale, deLocale, enGbLocale, esDoLocale, esLocale, esUsLocale, fiLocale, frLocale, glLocale, heLocale, hiLocale, huLocale, idLocale, itLocale, jaLocale, koLocale, ltLocale, mnLocale, nbLocale, nlBeLocale, nlLocale, plLocale, ptBrLocale, roLocale, ruLocale, skLocale, slLocale, svLocale, thLocale, trLocale, zhCnLocale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "./node_modules/ngx-bootstrap/chronos/fesm5/ngx-bootstrap-chronos.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["arLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bgLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["bgLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "caLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["caLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "csLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["csLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "daLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["daLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["deLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enGbLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["enGbLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "esDoLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["esDoLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "esLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["esLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "esUsLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["esUsLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fiLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["fiLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "frLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["frLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "glLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["glLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "heLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["heLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hiLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["hiLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "huLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["huLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "idLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["idLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "itLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["itLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jaLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["jaLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "koLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["koLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ltLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["ltLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mnLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["mnLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nbLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["nbLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nlBeLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["nlBeLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nlLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["nlLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "plLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["plLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ptBrLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["ptBrLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "roLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["roLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ruLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["ruLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["skLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["slLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["svLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["thLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["trLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zhCnLocale", function() { return ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_0__["zhCnLocale"]; });



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

//# sourceMappingURL=ngx-bootstrap-locale.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/mini-ngrx/fesm5/ngx-bootstrap-mini-ngrx.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/mini-ngrx/fesm5/ngx-bootstrap-mini-ngrx.js ***!
  \*******************************************************************************/
/*! exports provided: MiniState, MiniStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniState", function() { return MiniState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniStore", function() { return MiniStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
MiniState = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MiniState, _super);
    function MiniState(_initialState, actionsDispatcher$, reducer) {
        var _this = _super.call(this, _initialState) || this;
        /** @type {?} */
        var actionInQueue$ = actionsDispatcher$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["observeOn"])(rxjs__WEBPACK_IMPORTED_MODULE_1__["queueScheduler"]));
        /** @type {?} */
        var state$ = actionInQueue$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])(function (state, action) {
            if (!action) {
                return state;
            }
            return reducer(state, action);
        }, _initialState));
        state$.subscribe(function (value) { return _this.next(value); });
        return _this;
    }
    return MiniState;
}(rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
MiniStore = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MiniStore, _super);
    function MiniStore(_dispatcher, _reducer, 
    /* tslint:disable-next-line: no-any */
    state$) {
        var _this = _super.call(this) || this;
        _this._dispatcher = _dispatcher;
        _this._reducer = _reducer;
        /* tslint:disable-next-line: deprecation */
        _this.source = state$;
        return _this;
    }
    /**
     * @template R
     * @param {?} pathOrMapFn
     * @return {?}
     */
    MiniStore.prototype.select = /**
     * @template R
     * @param {?} pathOrMapFn
     * @return {?}
     */
    function (pathOrMapFn) {
        /* tslint:disable-next-line: deprecation */
        /** @type {?} */
        var mapped$ = this.source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(pathOrMapFn));
        return mapped$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])());
    };
    /**
     * @template R
     * @param {?} operator
     * @return {?}
     */
    MiniStore.prototype.lift = /**
     * @template R
     * @param {?} operator
     * @return {?}
     */
    function (operator) {
        /** @type {?} */
        var store = new MiniStore(this._dispatcher, this._reducer, this);
        /* tslint:disable-next-line: deprecation */
        store.operator = operator;
        return store;
    };
    /**
     * @param {?} action
     * @return {?}
     */
    MiniStore.prototype.dispatch = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        this._dispatcher.next(action);
    };
    /**
     * @param {?} action
     * @return {?}
     */
    MiniStore.prototype.next = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        this._dispatcher.next(action);
    };
    /* tslint:disable-next-line: no-any */
    /* tslint:disable-next-line: no-any */
    /**
     * @param {?} err
     * @return {?}
     */
    MiniStore.prototype.error = /* tslint:disable-next-line: no-any */
    /**
     * @param {?} err
     * @return {?}
     */
    function (err) {
        this._dispatcher.error(err);
    };
    /**
     * @return {?}
     */
    MiniStore.prototype.complete = /**
     * @return {?}
     */
    function () {
        /*noop*/
    };
    return MiniStore;
}(rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-bootstrap-mini-ngrx.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/positioning/fesm5/ngx-bootstrap-positioning.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/positioning/fesm5/ngx-bootstrap-positioning.js ***!
  \***********************************************************************************/
/*! exports provided: positionElements, Positioning, PositioningService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionElements", function() { return positionElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Positioning", function() { return Positioning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositioningService", function() { return PositioningService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Get CSS computed property of the given element
 * @param {?} element
 * @param {?=} property
 * @return {?}
 */
function getStyleComputedProperty(element, property) {
    if (element.nodeType !== 1) {
        return [];
    }
    // NOTE: 1 DOM access here
    /** @type {?} */
    var window = element.ownerDocument.defaultView;
    /** @type {?} */
    var css = window.getComputedStyle(element, null);
    return property ? css[(/** @type {?} */ (property))] : css;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Returns the parentNode or the host of the element
 * @param {?} element
 * @return {?}
 */
function getParentNode(element) {
    if (element.nodeName === 'HTML') {
        return element;
    }
    return element.parentNode || element.host;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} element
 * @return {?}
 */
function getScrollParent(element) {
    // Return body, `getScroll` will take care to get the correct `scrollTop` from it
    if (!element) {
        return document.body;
    }
    switch (element.nodeName) {
        case 'HTML':
        case 'BODY':
            return element.ownerDocument.body;
        case '#document':
            return element.body;
        default:
    }
    // Firefox want us to check `-x` and `-y` variations as well
    var _a = getStyleComputedProperty(element), overflow = _a.overflow, overflowX = _a.overflowX, overflowY = _a.overflowY;
    if (/(auto|scroll|overlay)/.test(String(overflow) + String(overflowY) + String(overflowX))) {
        return element;
    }
    return getScrollParent(getParentNode(element));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var isIE11 = isBrowser && !!(((/** @type {?} */ (window))).MSInputMethodContext && ((/** @type {?} */ (document))).documentMode);
/** @type {?} */
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);
/**
 * @param {?=} version
 * @return {?}
 */
function isIE(version) {
    if (version === 11) {
        return isIE11;
    }
    if (version === 10) {
        return isIE10;
    }
    return isIE11 || isIE10;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} element
 * @return {?}
 */
function getOffsetParent(element) {
    if (!element) {
        return document.documentElement;
    }
    /** @type {?} */
    var noOffsetParent = isIE(10) ? document.body : null;
    // NOTE: 1 DOM access here
    /** @type {?} */
    var offsetParent = element.offsetParent || null;
    // Skip hidden elements which don't have an offsetParent
    /** @type {?} */
    var sibling;
    while (offsetParent === noOffsetParent && element.nextElementSibling && element.nodeName !== 'BODY') {
        sibling = element.nextElementSibling;
        offsetParent = sibling.offsetParent;
    }
    /** @type {?} */
    var nodeName = offsetParent && offsetParent.nodeName;
    if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
        return sibling ? sibling.ownerDocument.documentElement : document.documentElement;
    }
    // .offsetParent will return the closest TH, TD or TABLE in case
    // no offsetParent is present, I hate this job...
    if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 &&
        getStyleComputedProperty(offsetParent, 'position') === 'static') {
        return getOffsetParent(offsetParent);
    }
    return offsetParent;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} element
 * @return {?}
 */
function isOffsetContainer(element) {
    var nodeName = element.nodeName;
    if (nodeName === 'BODY') {
        return false;
    }
    return (nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @param {?} node
 * @return {?}
 */
function getRoot(node) {
    if (node.parentNode !== null) {
        return getRoot(node.parentNode);
    }
    return node;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} element1
 * @param {?} element2
 * @return {?}
 */
function findCommonOffsetParent(element1, element2) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
        return document.documentElement;
    }
    // Here we make sure to give as "start" the element that comes first in the DOM
    /* tslint:disable-next-line: no-bitwise */
    /** @type {?} */
    var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
    /** @type {?} */
    var start = order ? element1 : element2;
    /** @type {?} */
    var end = order ? element2 : element1;
    // Get common ancestor container
    /** @type {?} */
    var range = document.createRange();
    range.setStart(start, 0);
    range.setEnd(end, 0);
    var commonAncestorContainer = range.commonAncestorContainer;
    // Both nodes are inside #document
    if ((element1 !== commonAncestorContainer &&
        element2 !== commonAncestorContainer) ||
        start.contains(end)) {
        if (isOffsetContainer(commonAncestorContainer)) {
            return commonAncestorContainer;
        }
        return getOffsetParent(commonAncestorContainer);
    }
    // one of the nodes is inside shadowDOM, find which one
    /** @type {?} */
    var element1root = getRoot(element1);
    if (element1root.host) {
        return findCommonOffsetParent(element1root.host, element2);
    }
    else {
        return findCommonOffsetParent(element1, getRoot(element2).host);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Helper to detect borders of a given element
 */
/**
 * @param {?} styles
 * @param {?} axis
 * @return {?}
 */
function getBordersSize(styles, axis) {
    /** @type {?} */
    var sideA = axis === 'x' ? 'Left' : 'Top';
    /** @type {?} */
    var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
    return (parseFloat(styles[(/** @type {?} */ ("border" + sideA + "Width"))]) +
        parseFloat(styles[(/** @type {?} */ ("border" + sideB + "Width"))]));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} axis
 * @param {?} body
 * @param {?} html
 * @param {?} computedStyle
 * @return {?}
 */
function getSize(axis, body, html, computedStyle) {
    return Math.max(((/** @type {?} */ (body)))["offset" + axis], ((/** @type {?} */ (body)))["scroll" + axis], ((/** @type {?} */ (html)))["client" + axis], ((/** @type {?} */ (html)))["offset" + axis], ((/** @type {?} */ (html)))["scroll" + axis], isIE(10)
        ? (parseInt(((/** @type {?} */ (html)))["offset" + axis], 10) +
            parseInt(computedStyle[(/** @type {?} */ ("margin" + (axis === 'Height' ? 'Top' : 'Left')))], 10) +
            parseInt(computedStyle[(/** @type {?} */ ("margin" + (axis === 'Height' ? 'Bottom' : 'Right')))], 10))
        : 0);
}
/**
 * @param {?} document
 * @return {?}
 */
function getWindowSizes(document) {
    /** @type {?} */
    var body = document.body;
    /** @type {?} */
    var html = document.documentElement;
    /** @type {?} */
    var computedStyle = isIE(10) && getComputedStyle(html);
    return {
        height: getSize('Height', body, html, computedStyle),
        width: getSize('Width', body, html, computedStyle)
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @param {?} element
 * @param {?=} side
 * @return {?}
 */
function getScroll(element, side) {
    if (side === void 0) { side = 'top'; }
    /** @type {?} */
    var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
    /** @type {?} */
    var nodeName = element.nodeName;
    if (nodeName === 'BODY' || nodeName === 'HTML') {
        /** @type {?} */
        var html = element.ownerDocument.documentElement;
        /** @type {?} */
        var scrollingElement = element.ownerDocument.scrollingElement || html;
        return scrollingElement[upperSide];
    }
    return element[upperSide];
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} offsets
 * @return {?}
 */
function getClientRect(offsets) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, offsets, { right: offsets.left + offsets.width, bottom: offsets.top + offsets.height });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} element
 * @return {?}
 */
function getBoundingClientRect(element) {
    /** @type {?} */
    var rect = {};
    // IE10 10 FIX: Please, don't ask, the element isn't
    // considered in DOM in some circumstances...
    // This isn't reproducible in IE10 compatibility mode of IE11
    try {
        if (isIE(10)) {
            rect = element.getBoundingClientRect();
            /** @type {?} */
            var scrollTop = getScroll(element, 'top');
            /** @type {?} */
            var scrollLeft = getScroll(element, 'left');
            rect.top += scrollTop;
            rect.left += scrollLeft;
            rect.bottom += scrollTop;
            rect.right += scrollLeft;
        }
        else {
            rect = element.getBoundingClientRect();
        }
    }
    catch (e) {
        return undefined;
    }
    /** @type {?} */
    var result = {
        left: rect.left,
        top: rect.top,
        width: rect.right - rect.left,
        height: rect.bottom - rect.top
    };
    // subtract scrollbar size from sizes
    /** @type {?} */
    var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
    /** @type {?} */
    var width = sizes.width || element.clientWidth || result.right - result.left;
    /** @type {?} */
    var height = sizes.height || element.clientHeight || result.bottom - result.top;
    /** @type {?} */
    var horizScrollbar = element.offsetWidth - width;
    /** @type {?} */
    var vertScrollbar = element.offsetHeight - height;
    // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
    // we make this check conditional for performance reasons
    if (horizScrollbar || vertScrollbar) {
        /** @type {?} */
        var styles = getStyleComputedProperty(element);
        horizScrollbar -= getBordersSize(styles, 'x');
        vertScrollbar -= getBordersSize(styles, 'y');
        result.width -= horizScrollbar;
        result.height -= vertScrollbar;
    }
    return getClientRect(result);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} rect
 * @param {?} element
 * @param {?=} subtract
 * @return {?}
 */
function includeScroll(rect, element, subtract) {
    if (subtract === void 0) { subtract = false; }
    /** @type {?} */
    var scrollTop = getScroll(element, 'top');
    /** @type {?} */
    var scrollLeft = getScroll(element, 'left');
    /** @type {?} */
    var modifier = subtract ? -1 : 1;
    rect.top += scrollTop * modifier;
    rect.bottom += scrollTop * modifier;
    rect.left += scrollLeft * modifier;
    rect.right += scrollLeft * modifier;
    return rect;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} children
 * @param {?} parent
 * @param {?=} fixedPosition
 * @return {?}
 */
function getOffsetRectRelativeToArbitraryNode(children, parent, fixedPosition) {
    if (fixedPosition === void 0) { fixedPosition = false; }
    /** @type {?} */
    var isIE10 = isIE(10);
    /** @type {?} */
    var isHTML = parent.nodeName === 'HTML';
    /** @type {?} */
    var childrenRect = getBoundingClientRect(children);
    /** @type {?} */
    var parentRect = getBoundingClientRect(parent);
    /** @type {?} */
    var scrollParent = getScrollParent(children);
    /** @type {?} */
    var styles = getStyleComputedProperty(parent);
    /** @type {?} */
    var borderTopWidth = parseFloat(styles.borderTopWidth);
    /** @type {?} */
    var borderLeftWidth = parseFloat(styles.borderLeftWidth);
    // In cases where the parent is fixed, we must ignore negative scroll in offset calc
    if (fixedPosition && isHTML) {
        parentRect.top = Math.max(parentRect.top, 0);
        parentRect.left = Math.max(parentRect.left, 0);
    }
    /** @type {?} */
    var offsets = getClientRect({
        top: childrenRect.top - parentRect.top - borderTopWidth,
        left: childrenRect.left - parentRect.left - borderLeftWidth,
        width: childrenRect.width,
        height: childrenRect.height
    });
    offsets.marginTop = 0;
    offsets.marginLeft = 0;
    // Subtract margins of documentElement in case it's being used as parent
    // we do this only on HTML because it's the only element that behaves
    // differently when margins are applied to it. The margins are included in
    // the box of the documentElement, in the other cases not.
    if (!isIE10 && isHTML) {
        /** @type {?} */
        var marginTop = parseFloat(styles.marginTop);
        /** @type {?} */
        var marginLeft = parseFloat(styles.marginLeft);
        offsets.top -= borderTopWidth - marginTop;
        offsets.bottom -= borderTopWidth - marginTop;
        offsets.left -= borderLeftWidth - marginLeft;
        offsets.right -= borderLeftWidth - marginLeft;
        // Attach marginTop and marginLeft because in some circumstances we may need them
        offsets.marginTop = marginTop;
        offsets.marginLeft = marginLeft;
    }
    if (isIE10 && !fixedPosition
        ? parent.contains(scrollParent)
        : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
        offsets = includeScroll(offsets, parent);
    }
    return offsets;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} element
 * @param {?=} excludeScroll
 * @return {?}
 */
function getViewportOffsetRectRelativeToArtbitraryNode(element, excludeScroll) {
    if (excludeScroll === void 0) { excludeScroll = false; }
    /** @type {?} */
    var html = element.ownerDocument.documentElement;
    /** @type {?} */
    var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
    /** @type {?} */
    var width = Math.max(html.clientWidth, window.innerWidth || 0);
    /** @type {?} */
    var height = Math.max(html.clientHeight, window.innerHeight || 0);
    /** @type {?} */
    var scrollTop = !excludeScroll ? getScroll(html) : 0;
    /** @type {?} */
    var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
    /** @type {?} */
    var offset = {
        top: scrollTop - Number(relativeOffset.top) + Number(relativeOffset.marginTop),
        left: scrollLeft - Number(relativeOffset.left) + Number(relativeOffset.marginLeft),
        width: width,
        height: height
    };
    return getClientRect(offset);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} element
 * @return {?}
 */
function isFixed(element) {
    /** @type {?} */
    var nodeName = element.nodeName;
    if (nodeName === 'BODY' || nodeName === 'HTML') {
        return false;
    }
    if (getStyleComputedProperty(element, 'position') === 'fixed') {
        return true;
    }
    return isFixed(getParentNode(element));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} element
 * @return {?}
 */
function getFixedPositionOffsetParent(element) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element || !element.parentElement || isIE()) {
        return document.documentElement;
    }
    /** @type {?} */
    var el = element.parentElement;
    while (el && getStyleComputedProperty(el, 'transform') === 'none') {
        el = el.parentElement;
    }
    return el || document.documentElement;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} target
 * @param {?} host
 * @param {?=} padding
 * @param {?=} boundariesElement
 * @param {?=} fixedPosition
 * @return {?}
 */
function getBoundaries(target, host, padding, boundariesElement, fixedPosition) {
    // NOTE: 1 DOM access here
    if (padding === void 0) { padding = 0; }
    if (fixedPosition === void 0) { fixedPosition = false; }
    // NOTE: 1 DOM access here
    /** @type {?} */
    var boundaries = { top: 0, left: 0 };
    /** @type {?} */
    var offsetParent = fixedPosition ? getFixedPositionOffsetParent(target) : findCommonOffsetParent(target, host);
    // Handle viewport case
    if (boundariesElement === 'viewport') {
        boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
    }
    else {
        // Handle other cases based on DOM element used as boundaries
        /** @type {?} */
        var boundariesNode = void 0;
        if (boundariesElement === 'scrollParent') {
            boundariesNode = getScrollParent(getParentNode(host));
            if (boundariesNode.nodeName === 'BODY') {
                boundariesNode = target.ownerDocument.documentElement;
            }
        }
        else if (boundariesElement === 'window') {
            boundariesNode = target.ownerDocument.documentElement;
        }
        else {
            boundariesNode = boundariesElement;
        }
        /** @type {?} */
        var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);
        // In case of HTML, we need a different computation
        if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
            var _a = getWindowSizes(target.ownerDocument), height = _a.height, width = _a.width;
            boundaries.top += offsets.top - offsets.marginTop;
            boundaries.bottom = Number(height) + Number(offsets.top);
            boundaries.left += offsets.left - offsets.marginLeft;
            boundaries.right = Number(width) + Number(offsets.left);
        }
        else {
            // for all the other DOM elements, this one is good
            boundaries = offsets;
        }
    }
    // Add paddings
    boundaries.left += padding;
    boundaries.top += padding;
    boundaries.right -= padding;
    boundaries.bottom -= padding;
    return boundaries;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} __0
 * @return {?}
 */
function getArea(_a) {
    var width = _a.width, height = _a.height;
    return width * height;
}
/**
 * @param {?} placement
 * @param {?} refRect
 * @param {?} target
 * @param {?} host
 * @param {?=} allowedPositions
 * @param {?=} boundariesElement
 * @param {?=} padding
 * @return {?}
 */
function computeAutoPlacement(placement, refRect, target, host, allowedPositions, boundariesElement, padding) {
    if (allowedPositions === void 0) { allowedPositions = ['top', 'left', 'bottom', 'right']; }
    if (boundariesElement === void 0) { boundariesElement = 'viewport'; }
    if (padding === void 0) { padding = 0; }
    if (placement.indexOf('auto') === -1) {
        return placement;
    }
    /** @type {?} */
    var boundaries = getBoundaries(target, host, padding, boundariesElement);
    /** @type {?} */
    var rects = {
        top: {
            width: boundaries.width,
            height: refRect.top - boundaries.top
        },
        right: {
            width: boundaries.right - refRect.right,
            height: boundaries.height
        },
        bottom: {
            width: boundaries.width,
            height: boundaries.bottom - refRect.bottom
        },
        left: {
            width: refRect.left - boundaries.left,
            height: boundaries.height
        }
    };
    /** @type {?} */
    var sortedAreas = Object.keys(rects)
        .map(function (key) { return (Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ key: key }, rects[key], { area: getArea(rects[key]) })); })
        .sort(function (a, b) { return b.area - a.area; });
    /** @type {?} */
    var filteredAreas = sortedAreas.filter(function (_a) {
        var width = _a.width, height = _a.height;
        return width >= target.clientWidth && height >= target.clientHeight;
    });
    filteredAreas = allowedPositions
        .reduce(function (obj, key) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, obj, (_a = {}, _a[key] = filteredAreas[key], _a));
    }, {});
    /** @type {?} */
    var computedPlacement = filteredAreas.length > 0
        ? filteredAreas[0].key
        : sortedAreas[0].key;
    /** @type {?} */
    var variation = placement.split(' ')[1];
    target.className = target.className.replace(/auto/g, computedPlacement);
    return computedPlacement + (variation ? "-" + variation : '');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} data
 * @return {?}
 */
function getOffsets(data) {
    return {
        width: data.offsets.target.width,
        height: data.offsets.target.height,
        left: Math.floor(data.offsets.target.left),
        top: Math.round(data.offsets.target.top),
        bottom: Math.round(data.offsets.target.bottom),
        right: Math.floor(data.offsets.target.right)
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Get the opposite placement of the given one
 * @param {?} placement
 * @return {?}
 */
function getOppositePlacement(placement) {
    /** @type {?} */
    var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
    return placement.replace(/left|right|bottom|top/g, function (matched) { return ((/** @type {?} */ (hash)))[matched]; });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Get the opposite placement variation of the given one
 * @param {?} variation
 * @return {?}
 */
function getOppositeVariation(variation) {
    if (variation === 'right') {
        return 'left';
    }
    else if (variation === 'left') {
        return 'right';
    }
    return variation;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Get the outer sizes of the given element (offset size + margins)
 * @param {?} element
 * @return {?}
 */
function getOuterSizes(element) {
    /** @type {?} */
    var window = element.ownerDocument.defaultView;
    /** @type {?} */
    var styles = window.getComputedStyle(element);
    /** @type {?} */
    var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
    /** @type {?} */
    var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
    return {
        width: Number(element.offsetWidth) + y,
        height: Number(element.offsetHeight) + x
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} target
 * @param {?} host
 * @param {?=} fixedPosition
 * @return {?}
 */
function getReferenceOffsets(target, host, fixedPosition) {
    if (fixedPosition === void 0) { fixedPosition = null; }
    /** @type {?} */
    var commonOffsetParent = fixedPosition
        ? getFixedPositionOffsetParent(target)
        : findCommonOffsetParent(target, host);
    return getOffsetRectRelativeToArbitraryNode(host, commonOffsetParent, fixedPosition);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} target
 * @param {?} hostOffsets
 * @param {?} position
 * @return {?}
 */
function getTargetOffsets(target, hostOffsets, position) {
    /** @type {?} */
    var placement = position.split(' ')[0];
    // Get target node sizes
    /** @type {?} */
    var targetRect = getOuterSizes(target);
    // Add position, width and height to our offsets object
    /** @type {?} */
    var targetOffsets = {
        width: targetRect.width,
        height: targetRect.height
    };
    // depending by the target placement we have to compute its offsets slightly differently
    /** @type {?} */
    var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
    /** @type {?} */
    var mainSide = isHoriz ? 'top' : 'left';
    /** @type {?} */
    var secondarySide = isHoriz ? 'left' : 'top';
    /** @type {?} */
    var measurement = isHoriz ? 'height' : 'width';
    /** @type {?} */
    var secondaryMeasurement = !isHoriz ? 'height' : 'width';
    ((/** @type {?} */ (targetOffsets)))[mainSide] =
        hostOffsets[mainSide] +
            hostOffsets[measurement] / 2 -
            targetRect[measurement] / 2;
    ((/** @type {?} */ (targetOffsets)))[secondarySide] = placement === secondarySide
        ? hostOffsets[secondarySide] - targetRect[secondaryMeasurement]
        : ((/** @type {?} */ (hostOffsets)))[getOppositePlacement(secondarySide)];
    return targetOffsets;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Helper used to know if the given modifier is enabled.
 * @param {?} options
 * @param {?} modifierName
 * @return {?}
 */
function isModifierEnabled(options, modifierName) {
    return options
        && options.modifiers
        && options.modifiers[modifierName]
        && options.modifiers[modifierName].enabled;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Tells if a given input is a number
 * @param {?} n
 * @return {?}
 */
function isNumeric(n) {
    return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} data
 * @param {?=} renderer
 * @return {?}
 */
function setAllStyles$$1(data, renderer) {
    /** @type {?} */
    var target = data.instance.target;
    /** @type {?} */
    var offsets = getOffsets(data);
    setStyles(target, {
        'will-change': 'transform',
        top: '0px',
        left: '0px',
        transform: "translate3d(" + offsets.left + "px, " + offsets.top + "px, 0px)"
    }, renderer);
    if (data.instance.arrow) {
        setStyles(data.instance.arrow, data.offsets.arrow, renderer);
    }
    if (data.placementAuto) {
        if (renderer) {
            renderer.setAttribute(target, 'class', target.className.replace(/bs-popover-auto/g, "bs-popover-" + data.placement));
            renderer.setAttribute(target, 'class', target.className.replace(/bs-tooltip-auto/g, "bs-tooltip-" + data.placement));
            renderer.setAttribute(target, 'class', target.className.replace(/\sauto/g, "s" + data.placement));
            if (target.className.match(/popover/g)) {
                renderer.addClass(target, 'popover-auto');
            }
            if (target.className.match(/tooltip/g)) {
                renderer.addClass(target, 'tooltip-auto');
            }
        }
        else {
            target.className = target.className.replace(/bs-popover-auto/g, "bs-popover-" + data.placement);
            target.className = target.className.replace(/bs-tooltip-auto/g, "bs-tooltip-" + data.placement);
            target.className = target.className.replace(/\sauto/g, "s" + data.placement);
            if (target.className.match(/popover/g)) {
                target.classList.add('popover-auto');
            }
            if (target.className.match(/tooltip/g)) {
                target.classList.add('tooltip-auto');
            }
        }
    }
    if (renderer) {
        renderer.setAttribute(target, 'class', target.className.replace(/left|right|top|bottom/g, "" + data.placement));
    }
    else {
        target.className = target.className.replace(/left|right|top|bottom/g, "" + data.placement);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} element
 * @param {?} styles
 * @param {?=} renderer
 * @return {?}
 */
function setStyles(element, styles, renderer) {
    Object.keys(styles).forEach(function (prop) {
        /** @type {?} */
        var unit = '';
        // add unit if the value is numeric and is one of the following
        if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 &&
            isNumeric(styles[prop])) {
            unit = 'px';
        }
        if (renderer) {
            renderer.setStyle(element, prop, "" + String(styles[prop]) + unit);
            return;
        }
        element.style[prop] = String(styles[prop]) + unit;
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} data
 * @return {?}
 */
function arrow(data) {
    var _a;
    /** @type {?} */
    var targetOffsets = data.offsets.target;
    // if arrowElement is a string, suppose it's a CSS selector
    /** @type {?} */
    var arrowElement = data.instance.target.querySelector('.arrow');
    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
        return data;
    }
    /** @type {?} */
    var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
    /** @type {?} */
    var len = isVertical ? 'height' : 'width';
    /** @type {?} */
    var sideCapitalized = isVertical ? 'Top' : 'Left';
    /** @type {?} */
    var side = sideCapitalized.toLowerCase();
    /** @type {?} */
    var altSide = isVertical ? 'left' : 'top';
    /** @type {?} */
    var opSide = isVertical ? 'bottom' : 'right';
    /** @type {?} */
    var arrowElementSize = getOuterSizes(arrowElement)[len];
    // top/left side
    if (data.offsets.host[opSide] - arrowElementSize < ((/** @type {?} */ (targetOffsets)))[side]) {
        ((/** @type {?} */ (targetOffsets)))[side] -=
            ((/** @type {?} */ (targetOffsets)))[side] - (data.offsets.host[opSide] - arrowElementSize);
    }
    // bottom/right side
    if (Number(((/** @type {?} */ (data))).offsets.host[side]) + Number(arrowElementSize) > ((/** @type {?} */ (targetOffsets)))[opSide]) {
        ((/** @type {?} */ (targetOffsets)))[side] +=
            Number(((/** @type {?} */ (data))).offsets.host[side]) + Number(arrowElementSize) - Number(((/** @type {?} */ (targetOffsets)))[opSide]);
    }
    targetOffsets = getClientRect(targetOffsets);
    // compute center of the target
    /** @type {?} */
    var center = Number(((/** @type {?} */ (data))).offsets.host[side]) + Number(data.offsets.host[len] / 2 - arrowElementSize / 2);
    // Compute the sideValue using the updated target offsets
    // take target margin in account because we don't have this info available
    /** @type {?} */
    var css = getStyleComputedProperty(data.instance.target);
    /** @type {?} */
    var targetMarginSide = parseFloat(css["margin" + sideCapitalized]);
    /** @type {?} */
    var targetBorderSide = parseFloat(css["border" + sideCapitalized + "Width"]);
    /** @type {?} */
    var sideValue = center - ((/** @type {?} */ (targetOffsets)))[side] - targetMarginSide - targetBorderSide;
    // prevent arrowElement from being placed not contiguously to its target
    sideValue = Math.max(Math.min(targetOffsets[len] - arrowElementSize, sideValue), 0);
    data.offsets.arrow = (_a = {},
        _a[side] = Math.round(sideValue),
        _a[altSide] = '' // make sure to unset any eventual altSide value from the DOM node
    ,
        _a);
    data.instance.arrow = arrowElement;
    return data;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} data
 * @return {?}
 */
function flip(data) {
    data.offsets.target = getClientRect(data.offsets.target);
    if (!isModifierEnabled(data.options, 'flip')) {
        data.offsets.target = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, data.offsets.target, getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
        return data;
    }
    /** @type {?} */
    var boundaries = getBoundaries(data.instance.target, data.instance.host, 0, // padding
    'viewport', false // positionFixed
    );
    /** @type {?} */
    var placement = data.placement.split(' ')[0];
    /** @type {?} */
    var variation = data.placement.split(' ')[1] || '';
    /** @type {?} */
    var offsetsHost = data.offsets.host;
    /** @type {?} */
    var target = data.instance.target;
    /** @type {?} */
    var host = data.instance.host;
    /** @type {?} */
    var adaptivePosition = variation
        ? computeAutoPlacement('auto', offsetsHost, target, host, ['top', 'bottom'])
        : computeAutoPlacement('auto', offsetsHost, target, host);
    /** @type {?} */
    var flipOrder = [placement, adaptivePosition];
    /* tslint:disable-next-line: cyclomatic-complexity */
    flipOrder.forEach(function (step, index) {
        if (placement !== step || flipOrder.length === index + 1) {
            return data;
        }
        placement = data.placement.split(' ')[0];
        // using floor because the host offsets may contain decimals we are not going to consider here
        /** @type {?} */
        var overlapsRef = (placement === 'left' &&
            Math.floor(data.offsets.target.right) > Math.floor(data.offsets.host.left)) ||
            (placement === 'right' &&
                Math.floor(data.offsets.target.left) < Math.floor(data.offsets.host.right)) ||
            (placement === 'top' &&
                Math.floor(data.offsets.target.bottom) > Math.floor(data.offsets.host.top)) ||
            (placement === 'bottom' &&
                Math.floor(data.offsets.target.top) < Math.floor(data.offsets.host.bottom));
        /** @type {?} */
        var overflowsLeft = Math.floor(data.offsets.target.left) < Math.floor(boundaries.left);
        /** @type {?} */
        var overflowsRight = Math.floor(data.offsets.target.right) > Math.floor(boundaries.right);
        /** @type {?} */
        var overflowsTop = Math.floor(data.offsets.target.top) < Math.floor(boundaries.top);
        /** @type {?} */
        var overflowsBottom = Math.floor(data.offsets.target.bottom) > Math.floor(boundaries.bottom);
        /** @type {?} */
        var overflowsBoundaries = (placement === 'left' && overflowsLeft) ||
            (placement === 'right' && overflowsRight) ||
            (placement === 'top' && overflowsTop) ||
            (placement === 'bottom' && overflowsBottom);
        // flip the variation if required
        /** @type {?} */
        var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
        /** @type {?} */
        var flippedVariation = ((isVertical && variation === 'left' && overflowsLeft) ||
            (isVertical && variation === 'right' && overflowsRight) ||
            (!isVertical && variation === 'left' && overflowsTop) ||
            (!isVertical && variation === 'right' && overflowsBottom));
        if (overlapsRef || overflowsBoundaries || flippedVariation) {
            if (overlapsRef || overflowsBoundaries) {
                placement = flipOrder[index + 1];
            }
            if (flippedVariation) {
                variation = getOppositeVariation(variation);
            }
            data.placement = placement + (variation ? " " + variation : '');
            data.offsets.target = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, data.offsets.target, getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
        }
    });
    return data;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} targetElement
 * @param {?} hostElement
 * @param {?} position
 * @param {?} options
 * @return {?}
 */
function initData(targetElement, hostElement, position, options) {
    /** @type {?} */
    var hostElPosition = getReferenceOffsets(targetElement, hostElement);
    /** @type {?} */
    var placementAuto = !!position.match(/auto/g);
    // support old placements 'auto left|right|top|bottom'
    /** @type {?} */
    var placement = !!position.match(/auto\s(left|right|top|bottom)/g)
        ? position.split(' ')[1] || ''
        : position;
    /** @type {?} */
    var targetOffset = getTargetOffsets(targetElement, hostElPosition, placement);
    placement = computeAutoPlacement(placement, hostElPosition, targetElement, hostElement);
    return {
        options: options,
        instance: {
            target: targetElement,
            host: hostElement,
            arrow: null
        },
        offsets: {
            target: targetOffset,
            host: hostElPosition,
            arrow: null
        },
        positionFixed: false,
        placement: placement,
        placementAuto: placementAuto
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} data
 * @return {?}
 */
function preventOverflow(data) {
    // NOTE: DOM access here
    // resets the targetOffsets's position so that the document size can be calculated excluding
    // the size of the targetOffsets element itself
    /** @type {?} */
    var transformProp = 'transform';
    /** @type {?} */
    var targetStyles = data.instance.target.style;
    // assignment to help minification
    var top = targetStyles.top, left = targetStyles.left, _a = transformProp, transform = targetStyles[_a];
    targetStyles.top = '';
    targetStyles.left = '';
    targetStyles[transformProp] = '';
    /** @type {?} */
    var boundaries = getBoundaries(data.instance.target, data.instance.host, 0, // padding
    'scrollParent', false // positionFixed
    );
    // NOTE: DOM access here
    // restores the original style properties after the offsets have been computed
    targetStyles.top = top;
    targetStyles.left = left;
    targetStyles[transformProp] = transform;
    /** @type {?} */
    var order = ['left', 'right', 'top', 'bottom'];
    /** @type {?} */
    var check = {
        primary: /**
         * @param {?} placement
         * @return {?}
         */
        function (placement) {
            var _a;
            /** @type {?} */
            var value = ((/** @type {?} */ (data))).offsets.target[placement];
            if (((/** @type {?} */ (data))).offsets.target[placement] < boundaries[placement] &&
                !false // options.escapeWithReference
            ) {
                value = Math.max(((/** @type {?} */ (data))).offsets.target[placement], boundaries[placement]);
            }
            return _a = {}, _a[placement] = value, _a;
        },
        secondary: /**
         * @param {?} placement
         * @return {?}
         */
        function (placement) {
            var _a;
            /** @type {?} */
            var mainSide = placement === 'right' ? 'left' : 'top';
            /** @type {?} */
            var value = data.offsets.target[mainSide];
            if (((/** @type {?} */ (data))).offsets.target[placement] > boundaries[placement] &&
                !false // escapeWithReference
            ) {
                value = Math.min(data.offsets.target[mainSide], boundaries[placement] -
                    (placement === 'right' ? data.offsets.target.width : data.offsets.target.height));
            }
            return _a = {}, _a[mainSide] = value, _a;
        }
    };
    /** @type {?} */
    var side;
    order.forEach(function (placement) {
        side = ['left', 'top']
            .indexOf(placement) !== -1
            ? 'primary'
            : 'secondary';
        data.offsets.target = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, data.offsets.target, ((/** @type {?} */ (check)))[side](placement));
    });
    return data;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} data
 * @return {?}
 */
function shift(data) {
    var _a, _b;
    /** @type {?} */
    var placement = data.placement;
    /** @type {?} */
    var basePlacement = placement.split(' ')[0];
    /** @type {?} */
    var shiftvariation = placement.split(' ')[1];
    if (shiftvariation) {
        var _c = data.offsets, host = _c.host, target = _c.target;
        /** @type {?} */
        var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
        /** @type {?} */
        var side = isVertical ? 'left' : 'top';
        /** @type {?} */
        var measurement = isVertical ? 'width' : 'height';
        /** @type {?} */
        var shiftOffsets = {
            left: (_a = {}, _a[side] = host[side], _a),
            right: (_b = {},
                _b[side] = host[side] + host[measurement] - host[measurement],
                _b)
        };
        data.offsets.target = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, target, ((/** @type {?} */ (shiftOffsets)))[shiftvariation]);
    }
    return data;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Positioning = /** @class */ (function () {
    function Positioning() {
    }
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?=} round
     * @return {?}
     */
    Positioning.prototype.position = /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?=} round
     * @return {?}
     */
    function (hostElement, targetElement, round) {
        if (round === void 0) { round = true; }
        return this.offset(hostElement, targetElement, false);
    };
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?=} round
     * @return {?}
     */
    Positioning.prototype.offset = /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?=} round
     * @return {?}
     */
    function (hostElement, targetElement, round) {
        if (round === void 0) { round = true; }
        return getReferenceOffsets(targetElement, hostElement);
    };
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?} position
     * @param {?=} appendToBody
     * @param {?=} options
     * @return {?}
     */
    Positioning.prototype.positionElements = /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?} position
     * @param {?=} appendToBody
     * @param {?=} options
     * @return {?}
     */
    function (hostElement, targetElement, position, appendToBody, options) {
        /** @type {?} */
        var chainOfModifiers = [flip, shift, preventOverflow, arrow];
        return chainOfModifiers.reduce(function (modifiedData, modifier) { return modifier(modifiedData); }, initData(targetElement, hostElement, position, options));
    };
    return Positioning;
}());
/** @type {?} */
var positionService = new Positioning();
/**
 * @param {?} hostElement
 * @param {?} targetElement
 * @param {?} placement
 * @param {?=} appendToBody
 * @param {?=} options
 * @param {?=} renderer
 * @return {?}
 */
function positionElements(hostElement, targetElement, placement, appendToBody, options, renderer) {
    /** @type {?} */
    var data = positionService.positionElements(hostElement, targetElement, placement, appendToBody, options);
    setAllStyles$$1(data, renderer);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PositioningService = /** @class */ (function () {
    function PositioningService(rendererFactory, platformId) {
        var _this = this;
        this.update$$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.positionElements = new Map();
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(platformId)) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(window, 'scroll'), Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(window, 'resize'), Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(0, rxjs__WEBPACK_IMPORTED_MODULE_3__["animationFrameScheduler"]), this.update$$)
                .subscribe(function () {
                _this.positionElements
                    .forEach(function (positionElement) {
                    positionElements(_getHtmlElement(positionElement.target), _getHtmlElement(positionElement.element), positionElement.attachment, positionElement.appendToBody, _this.options, rendererFactory.createRenderer(null, null));
                });
            });
        }
    }
    /**
     * @param {?} options
     * @return {?}
     */
    PositioningService.prototype.position = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.addPositionElement(options);
        this.update$$.next();
    };
    /**
     * @param {?} options
     * @return {?}
     */
    PositioningService.prototype.addPositionElement = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.positionElements.set(_getHtmlElement(options.element), options);
    };
    /**
     * @param {?} elRef
     * @return {?}
     */
    PositioningService.prototype.deletePositionElement = /**
     * @param {?} elRef
     * @return {?}
     */
    function (elRef) {
        this.positionElements.delete(_getHtmlElement(elRef));
    };
    /**
     * @param {?} options
     * @return {?}
     */
    PositioningService.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.options = options;
    };
    PositioningService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] }
    ];
    /** @nocollapse */
    PositioningService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory2"] },
        { type: Number, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] }
    ]; };
    return PositioningService;
}());
/**
 * @param {?} element
 * @return {?}
 */
function _getHtmlElement(element) {
    // it means that we got a selector
    if (typeof element === 'string') {
        return document.querySelector(element);
    }
    if (element instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]) {
        return element.nativeElement;
    }
    return element;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-bootstrap-positioning.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/utils/fesm5/ngx-bootstrap-utils.js":
/*!***********************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/utils/fesm5/ngx-bootstrap-utils.js ***!
  \***********************************************************************/
/*! exports provided: isBs3, LinkedList, listenToTriggersV2, registerOutsideClick, registerEscClick, OnChange, setTheme, Trigger, Utils, window, document, warnOnce, parseTriggers, listenToTriggers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBs3", function() { return isBs3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkedList", function() { return LinkedList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listenToTriggersV2", function() { return listenToTriggersV2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerOutsideClick", function() { return registerOutsideClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerEscClick", function() { return registerEscClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnChange", function() { return OnChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTheme", function() { return setTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trigger", function() { return Trigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "window", function() { return win; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "document", function() { return document$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warnOnce", function() { return warnOnce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseTriggers", function() { return parseTriggers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listenToTriggers", function() { return listenToTriggers; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var Trigger = /** @class */ (function () {
    function Trigger(open, close) {
        this.open = open;
        this.close = close || open;
    }
    /**
     * @return {?}
     */
    Trigger.prototype.isManual = /**
     * @return {?}
     */
    function () {
        return this.open === 'manual' || this.close === 'manual';
    };
    return Trigger;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_ALIASES = {
    hover: ['mouseover', 'mouseout'],
    focus: ['focusin', 'focusout']
};
/* tslint:disable-next-line: no-any */
/**
 * @param {?} triggers
 * @param {?=} aliases
 * @return {?}
 */
function parseTriggers(triggers, aliases) {
    if (aliases === void 0) { aliases = DEFAULT_ALIASES; }
    /** @type {?} */
    var trimmedTriggers = (triggers || '').trim();
    if (trimmedTriggers.length === 0) {
        return [];
    }
    /** @type {?} */
    var parsedTriggers = trimmedTriggers
        .split(/\s+/)
        .map(function (trigger) { return trigger.split(':'); })
        .map(function (triggerPair) {
        /** @type {?} */
        var alias = aliases[triggerPair[0]] || triggerPair;
        return new Trigger(alias[0], alias[1]);
    });
    /** @type {?} */
    var manualTriggers = parsedTriggers.filter(function (triggerPair) {
        return triggerPair.isManual();
    });
    if (manualTriggers.length > 1) {
        throw new Error('Triggers parse error: only one manual trigger is allowed');
    }
    if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
        throw new Error('Triggers parse error: manual trigger can\'t be mixed with other triggers');
    }
    return parsedTriggers;
}
/**
 * @param {?} renderer
 * @param {?} target
 * @param {?} triggers
 * @param {?} showFn
 * @param {?} hideFn
 * @param {?} toggleFn
 * @return {?}
 */
function listenToTriggers(renderer, 
/* tslint:disable-next-line: no-any */
target, triggers, showFn, hideFn, toggleFn) {
    /** @type {?} */
    var parsedTriggers = parseTriggers(triggers);
    /* tslint:disable-next-line: no-any */
    /** @type {?} */
    var listeners = [];
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
    }
    parsedTriggers.forEach(function (trigger) {
        if (trigger.open === trigger.close) {
            listeners.push(renderer.listen(target, trigger.open, toggleFn));
            return;
        }
        listeners.push(renderer.listen(target, trigger.open, showFn), renderer.listen(target, trigger.close, hideFn));
    });
    return function () {
        listeners.forEach(function (unsubscribeFn) { return unsubscribeFn(); });
    };
}
/**
 * @param {?} renderer
 * @param {?} options
 * @return {?}
 */
function listenToTriggersV2(renderer, options) {
    /** @type {?} */
    var parsedTriggers = parseTriggers(options.triggers);
    /** @type {?} */
    var target = options.target;
    // do nothing
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
    }
    // all listeners
    /* tslint:disable-next-line: no-any */
    /** @type {?} */
    var listeners = [];
    // lazy listeners registration
    /** @type {?} */
    var _registerHide = [];
    /** @type {?} */
    var registerHide = function () {
        // add hide listeners to unregister array
        _registerHide.forEach(function (fn) { return listeners.push(fn()); });
        // register hide events only once
        _registerHide.length = 0;
    };
    // register open\close\toggle listeners
    parsedTriggers.forEach(function (trigger) {
        /** @type {?} */
        var useToggle = trigger.open === trigger.close;
        /** @type {?} */
        var showFn = useToggle ? options.toggle : options.show;
        if (!useToggle) {
            _registerHide.push(function () {
                return renderer.listen(target, trigger.close, options.hide);
            });
        }
        listeners.push(renderer.listen(target, trigger.open, function () { return showFn(registerHide); }));
    });
    return function () {
        listeners.forEach(function (unsubscribeFn) { return unsubscribeFn(); });
    };
}
/**
 * @param {?} renderer
 * @param {?} options
 * @return {?}
 */
function registerOutsideClick(renderer, options) {
    if (!options.outsideClick) {
        return Function.prototype;
    }
    /* tslint:disable-next-line: no-any */
    return renderer.listen('document', 'click', function (event) {
        if (options.target && options.target.contains(event.target)) {
            return undefined;
        }
        if (options.targets &&
            options.targets.some(function (target) { return target.contains(event.target); })) {
            return undefined;
        }
        options.hide();
    });
}
/**
 * @param {?} renderer
 * @param {?} options
 * @return {?}
 */
function registerEscClick(renderer, options) {
    if (!options.outsideEsc) {
        return Function.prototype;
    }
    return renderer.listen('document', 'keyup.esc', function (event) {
        if (options.target && options.target.contains(event.target)) {
            return undefined;
        }
        if (options.targets &&
            options.targets.some(function (target) { return target.contains(event.target); })) {
            return undefined;
        }
        options.hide();
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * JS version of browser APIs. This library can only run in the browser.
 * @type {?}
 */
var win = (typeof window !== 'undefined' && window) || (/** @type {?} */ ({}));
/** @type {?} */
var document$1 = win.document;
/** @type {?} */
var location = win.location;
/** @type {?} */
var gc = win.gc ? function () { return win.gc(); } : function () { return null; };
/** @type {?} */
var performance = win.performance ? win.performance : null;
/** @type {?} */
var Event = win.Event;
/** @type {?} */
var MouseEvent = win.MouseEvent;
/** @type {?} */
var KeyboardEvent = win.KeyboardEvent;
/** @type {?} */
var EventTarget = win.EventTarget;
/** @type {?} */
var History = win.History;
/** @type {?} */
var Location = win.Location;
/** @type {?} */
var EventListener = win.EventListener;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var guessedVersion;
/**
 * @return {?}
 */
function _guessBsVersion() {
    if (typeof document === 'undefined') {
        return null;
    }
    /** @type {?} */
    var spanEl = document.createElement('span');
    spanEl.innerText = 'test bs version';
    document.body.appendChild(spanEl);
    spanEl.classList.add('d-none');
    /** @type {?} */
    var rect = spanEl.getBoundingClientRect();
    document.body.removeChild(spanEl);
    if (!rect) {
        return 'bs3';
    }
    return rect.top === 0 ? 'bs4' : 'bs3';
}
/**
 * @param {?} theme
 * @return {?}
 */
function setTheme(theme) {
    guessedVersion = theme;
}
// todo: in ngx-bootstrap, bs4 will became a default one
/**
 * @return {?}
 */
function isBs3() {
    if (typeof win === 'undefined') {
        return true;
    }
    if (typeof win.__theme === 'undefined') {
        if (guessedVersion) {
            return guessedVersion === 'bs3';
        }
        guessedVersion = _guessBsVersion();
        return guessedVersion === 'bs3';
    }
    return win.__theme !== 'bs4';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.length = 0;
        this.asArray = [];
        // Array methods overriding END
    }
    /**
     * @param {?} position
     * @return {?}
     */
    LinkedList.prototype.get = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            return void 0;
        }
        /** @type {?} */
        var current = this.head;
        for (var index = 0; index < position; index++) {
            current = current.next;
        }
        return current.value;
    };
    /**
     * @param {?} value
     * @param {?=} position
     * @return {?}
     */
    LinkedList.prototype.add = /**
     * @param {?} value
     * @param {?=} position
     * @return {?}
     */
    function (value, position) {
        if (position === void 0) { position = this.length; }
        if (position < 0 || position > this.length) {
            throw new Error('Position is out of the list');
        }
        /* tslint:disable-next-line: no-any*/
        /** @type {?} */
        var node = {
            value: value,
            next: undefined,
            previous: undefined
        };
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
            this.current = node;
        }
        else {
            if (position === 0) {
                // first node
                node.next = this.head;
                this.head.previous = node;
                this.head = node;
            }
            else if (position === this.length) {
                // last node
                this.tail.next = node;
                node.previous = this.tail;
                this.tail = node;
            }
            else {
                // node in middle
                /** @type {?} */
                var currentPreviousNode = this.getNode(position - 1);
                /** @type {?} */
                var currentNextNode = currentPreviousNode.next;
                currentPreviousNode.next = node;
                currentNextNode.previous = node;
                node.previous = currentPreviousNode;
                node.next = currentNextNode;
            }
        }
        this.length++;
        this.createInternalArrayRepresentation();
    };
    /**
     * @param {?=} position
     * @return {?}
     */
    LinkedList.prototype.remove = /**
     * @param {?=} position
     * @return {?}
     */
    function (position) {
        if (position === void 0) { position = 0; }
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        if (position === 0) {
            // first node
            this.head = this.head.next;
            if (this.head) {
                // there is no second node
                this.head.previous = undefined;
            }
            else {
                // there is no second node
                this.tail = undefined;
            }
        }
        else if (position === this.length - 1) {
            // last node
            this.tail = this.tail.previous;
            this.tail.next = undefined;
        }
        else {
            // middle node
            /** @type {?} */
            var removedNode = this.getNode(position);
            removedNode.next.previous = removedNode.previous;
            removedNode.previous.next = removedNode.next;
        }
        this.length--;
        this.createInternalArrayRepresentation();
    };
    /**
     * @param {?} position
     * @param {?} value
     * @return {?}
     */
    LinkedList.prototype.set = /**
     * @param {?} position
     * @param {?} value
     * @return {?}
     */
    function (position, value) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        /** @type {?} */
        var node = this.getNode(position);
        node.value = value;
        this.createInternalArrayRepresentation();
    };
    /**
     * @return {?}
     */
    LinkedList.prototype.toArray = /**
     * @return {?}
     */
    function () {
        return this.asArray;
    };
    /* tslint:disable-next-line: no-any*/
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.findAll = /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        /** @type {?} */
        var current = this.head;
        /* tslint:disable-next-line: no-any*/
        /** @type {?} */
        var result = [];
        for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result.push({ index: index, value: current.value });
            }
            current = current.next;
        }
        return result;
    };
    // Array methods overriding start
    // Array methods overriding start
    /**
     * @param {...?} args
     * @return {?}
     */
    LinkedList.prototype.push = 
    // Array methods overriding start
    /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        /* tslint:disable-next-line: no-any*/
        args.forEach(function (arg) {
            _this.add(arg);
        });
        return this.length;
    };
    /**
     * @return {?}
     */
    LinkedList.prototype.pop = /**
     * @return {?}
     */
    function () {
        if (this.length === 0) {
            return undefined;
        }
        /** @type {?} */
        var last = this.tail;
        this.remove(this.length - 1);
        return last.value;
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    LinkedList.prototype.unshift = /**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args.reverse();
        /* tslint:disable-next-line: no-any*/
        args.forEach(function (arg) {
            _this.add(arg, 0);
        });
        return this.length;
    };
    /**
     * @return {?}
     */
    LinkedList.prototype.shift = /**
     * @return {?}
     */
    function () {
        if (this.length === 0) {
            return undefined;
        }
        /** @type {?} */
        var lastItem = this.head.value;
        this.remove();
        return lastItem;
    };
    /* tslint:disable-next-line: no-any*/
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.forEach = /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        /** @type {?} */
        var current = this.head;
        for (var index = 0; index < this.length; index++) {
            fn(current.value, index);
            current = current.next;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    LinkedList.prototype.indexOf = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var current = this.head;
        /** @type {?} */
        var position = 0;
        for (var index = 0; index < this.length; index++) {
            if (current.value === value) {
                position = index;
                break;
            }
            current = current.next;
        }
        return position;
    };
    /* tslint:disable-next-line: no-any*/
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.some = /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        /** @type {?} */
        var current = this.head;
        /** @type {?} */
        var result = false;
        while (current && !result) {
            if (fn(current.value)) {
                result = true;
                break;
            }
            current = current.next;
        }
        return result;
    };
    /* tslint:disable-next-line: no-any*/
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.every = /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        /** @type {?} */
        var current = this.head;
        /** @type {?} */
        var result = true;
        while (current && result) {
            if (!fn(current.value)) {
                result = false;
            }
            current = current.next;
        }
        return result;
    };
    /**
     * @return {?}
     */
    LinkedList.prototype.toString = /**
     * @return {?}
     */
    function () {
        return '[Linked List]';
    };
    /* tslint:disable-next-line: no-any*/
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.find = /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        /** @type {?} */
        var current = this.head;
        /** @type {?} */
        var result;
        for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = current.value;
                break;
            }
            current = current.next;
        }
        return result;
    };
    /* tslint:disable-next-line: no-any*/
    /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.findIndex = /* tslint:disable-next-line: no-any*/
    /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        /** @type {?} */
        var current = this.head;
        /** @type {?} */
        var result;
        for (var index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = index;
                break;
            }
            current = current.next;
        }
        return result;
    };
    /* tslint:disable-next-line: no-any*/
    /* tslint:disable-next-line: no-any*/
    /**
     * @protected
     * @param {?} position
     * @return {?}
     */
    LinkedList.prototype.getNode = /* tslint:disable-next-line: no-any*/
    /**
     * @protected
     * @param {?} position
     * @return {?}
     */
    function (position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        /** @type {?} */
        var current = this.head;
        for (var index = 0; index < position; index++) {
            current = current.next;
        }
        return current;
    };
    /**
     * @protected
     * @return {?}
     */
    LinkedList.prototype.createInternalArrayRepresentation = /**
     * @protected
     * @return {?}
     */
    function () {
        /* tslint:disable-next-line: no-any*/
        /** @type {?} */
        var outArray = [];
        /** @type {?} */
        var current = this.head;
        while (current) {
            outArray.push(current.value);
            current = current.next;
        }
        this.asArray = outArray;
    };
    return LinkedList;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*tslint:disable:no-invalid-this */
/* tslint:disable-next-line: no-any */
/**
 * @param {?=} defaultValue
 * @return {?}
 */
function OnChange(defaultValue) {
    /** @type {?} */
    var sufix = 'Change';
    /* tslint:disable-next-line: no-any */
    return function OnChangeHandler(target, propertyKey) {
        /** @type {?} */
        var _key = " __" + propertyKey + "Value";
        Object.defineProperty(target, propertyKey, {
            /* tslint:disable-next-line: no-any */
            get: /* tslint:disable-next-line: no-any */
            /**
             * @return {?}
             */
            function () {
                return this[_key];
            },
            /* tslint:disable-next-line: no-any */
            set: /* tslint:disable-next-line: no-any */
            /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                /** @type {?} */
                var prevValue = this[_key];
                this[_key] = value;
                if (prevValue !== value && this[propertyKey + sufix]) {
                    this[propertyKey + sufix].emit(value);
                }
            }
        });
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Utils = /** @class */ (function () {
    function Utils() {
    }
    /* tslint:disable-next-line: no-any */
    /* tslint:disable-next-line: no-any */
    /**
     * @param {?} element
     * @return {?}
     */
    Utils.reflow = /* tslint:disable-next-line: no-any */
    /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /* tslint:disable-next-line: no-any */
        (function (bs) { return bs; })(element.offsetHeight);
    };
    // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
    /* tslint:disable-next-line: no-any */
    // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
    /* tslint:disable-next-line: no-any */
    /**
     * @param {?} elem
     * @return {?}
     */
    Utils.getStyles = 
    // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
    /* tslint:disable-next-line: no-any */
    /**
     * @param {?} elem
     * @return {?}
     */
    function (elem) {
        // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        /** @type {?} */
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
            view = win;
        }
        return view.getComputedStyle(elem);
    };
    return Utils;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var _messagesHash = {};
/** @type {?} */
var _hideMsg = typeof console === 'undefined' || !('warn' in console);
/**
 * @param {?} msg
 * @return {?}
 */
function warnOnce(msg) {
    if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() || _hideMsg || msg in _messagesHash) {
        return;
    }
    _messagesHash[msg] = true;
    /*tslint:disable-next-line*/
    console.warn(msg);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-bootstrap-utils.js.map

/***/ }),

/***/ "./node_modules/primeng/api.js":
/*!*************************************!*\
  !*** ./node_modules/primeng/api.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/common/api */ "./node_modules/primeng/components/common/api.js"));

/***/ }),

/***/ "./src/app/bz-modules/basic-data/add-match/add-match.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/bz-modules/basic-data/add-match/add-match.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <form [formGroup]=\"newLocationForm\" autocomplete=\"off\">\n    <p-accordion [multiple]=\"true\">\n        <p-accordionTab header=\"基本信息\" [selected]=\"true\">\n            <div class=\"ui-g\">\n                <div class=\"ui-g-6 fydd-new-location-input-container\">\n            <span class=\"ui-float-label\">\n              <input class=\"fydd-new-location-input\" type=\"text\" size=\"30\" pInputText formControlName=\"locationId\">\n              <label><span class=\"is-must\">*</span>账号</label>\n            </span>\n          </div>\n\n          <div class=\"ui-g-6 fydd-new-location-input-container\">\n            <span class=\"ui-float-label\">\n              <input class=\"fydd-new-location-input\" type=\"text\" size=\"30\" pInputText formControlName=\"locationName\">\n              <label><span class=\"is-must\">*</span>用户名称</label>\n            </span>\n          </div>\n          <div class=\"ui-g-6 fydd-new-location-input-container\">\n            <span class=\"ui-float-label\">\n              <input class=\"fydd-new-location-input\" type=\"text\" size=\"30\" pInputText formControlName=\"locationName\">\n              <label><span class=\"is-must\">*</span>客户姓名</label>\n            </span>\n          </div>\n          <div class=\"ui-g-6 fydd-new-location-input-container\">\n            <span class=\"ui-float-label\">\n              <input class=\"fydd-new-location-input\" type=\"text\" size=\"30\" pInputText formControlName=\"address\">\n              <label><span class=\"is-must\">*</span>用户地址</label>\n            </span>\n          </div>\n          <div class=\"ui-g-6 fydd-new-location-input-container\">\n            <span class=\"ui-float-label\">\n              <input class=\"fydd-new-location-input\" type=\"text\" size=\"30\" pInputText formControlName=\"locationCross\">\n              <label><span class=\"is-must\">*</span>详细交叉路</label>\n            </span>\n          </div>\n            </div>\n        </p-accordionTab>\n    </p-accordion>\n</form> -->\n\n\n<h2>人员登记系统</h2>\n\n<div class=\"people_list\">\n  <ul>\n    <li>姓 名：<input type=\"text\" id=\"username\" [(ngModel)]=\"peopleInfo.username\" value=\"fonm_input\" /></li>\n    <li>性 别：\n      <input type=\"radio\" value=\"1\" name=\"sex\" id=\"sex1\" [(ngModel)]=\"peopleInfo.sex\"> <label for=\"sex1\">男 </label>　　　\n      <input type=\"radio\" value=\"2\" name=\"sex\"  id=\"sex2\" [(ngModel)]=\"peopleInfo.sex\"> <label for=\"sex2\">女 </label>\n    </li>\n   <li>\n    城 市：\n      <select name=\"city\" id=\"city\" [(ngModel)]=\"peopleInfo.city\">\n          <option [value]=\"item\" *ngFor=\"let item of peopleInfo.cityList\">{{item}}</option>\n      </select>\n    </li>\n    <li>\n        爱 好：\n        <span *ngFor=\"let item of peopleInfo.hobby;let key=index;\">\n            <input type=\"checkbox\"  [id]=\"'check'+key\" [(ngModel)]=\"item.checked\"/> <label [for]=\"'check'+key\"> {{item.title}}</label>\n            &nbsp;&nbsp;\n        </span>\n     </li>\n     <li>\n       备 注：\n       <textarea name=\"mark\" id=\"mark\" cols=\"30\" rows=\"10\" [(ngModel)]=\"peopleInfo.mark\"></textarea>\n     </li>\n  </ul>\n\n  <button (click)=\"doSubmit()\" class=\"submit\">获取表单的内容</button>\n  <br>\n  <br>\n  <br>\n  <br>\n\n  <pre>\n    {{peopleInfo | json}}\n  </pre>\n</div>\n"

/***/ }),

/***/ "./src/app/bz-modules/basic-data/add-match/add-match.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/bz-modules/basic-data/add-match/add-match.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  text-align: center; }\n\n.people_list {\n  width: 400px;\n  margin: 40px auto;\n  padding: 20px;\n  border: 1px solid #eee; }\n\n.people_list li {\n    height: 50px;\n    line-height: 50px; }\n\n.people_list li .fonm_input {\n      width: 300px;\n      height: 28px; }\n\n.people_list .submit {\n    width: 100px;\n    height: 30px;\n    float: right;\n    margin-right: 50px;\n    margin-top: 120px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnotbW9kdWxlcy9iYXNpYy1kYXRhL2FkZC1tYXRjaC9GOlxcUm9ja3dvb2RcXHdvcmtzcGFjZVxcT3BlbldNUy1uZXcvc3JjXFxhcHBcXGJ6LW1vZHVsZXNcXGJhc2ljLWRhdGFcXGFkZC1tYXRjaFxcYWRkLW1hdGNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixhQUFZO0VBQ1osc0JBQXFCLEVBQUE7O0FBSnZCO0lBTU0sWUFBWTtJQUNaLGlCQUFpQixFQUFBOztBQVB2QjtNQVNVLFlBQVk7TUFDWixZQUFZLEVBQUE7O0FBVnRCO0lBZU0sWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYnotbW9kdWxlcy9iYXNpYy1kYXRhL2FkZC1tYXRjaC9hZGQtbWF0Y2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnBlb3BsZV9saXN0e1xuICB3aWR0aDogNDAwcHg7XG4gIG1hcmdpbjogNDBweCBhdXRvO1xuICBwYWRkaW5nOjIwcHg7XG4gIGJvcmRlcjoxcHggc29saWQgI2VlZTtcbiAgbGl7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgIC5mb25tX2lucHV0e1xuICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICB9XG4gIH1cblxuICAuc3VibWl0e1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICAgICAgbWFyZ2luLXRvcDoxMjBweDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/bz-modules/basic-data/add-match/add-match.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/bz-modules/basic-data/add-match/add-match.component.ts ***!
  \************************************************************************/
/*! exports provided: AddMatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMatchComponent", function() { return AddMatchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddMatchComponent = /** @class */ (function () {
    function AddMatchComponent() {
        this.peopleInfo = {
            username: '',
            sex: '2',
            cityList: ['北京', '上海', '深圳'],
            city: '上海',
            hobby: [{
                    title: '吃饭',
                    checked: false
                }, {
                    title: '睡觉',
                    checked: false
                }, {
                    title: '敲代码',
                    checked: true
                }],
            mark: ''
        };
    }
    AddMatchComponent.prototype.ngOnInit = function () {
    };
    AddMatchComponent.prototype.doSubmit = function () {
        /*
        jquery  dom操作
          <input type="text" id="username" />
          let usernameDom:any=document.getElementById('username');
          console.log(usernameDom.value);
        */
        console.log(this.peopleInfo);
    };
    AddMatchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'add-match',
            template: __webpack_require__(/*! ./add-match.component.html */ "./src/app/bz-modules/basic-data/add-match/add-match.component.html"),
            styles: [__webpack_require__(/*! ./add-match.component.scss */ "./src/app/bz-modules/basic-data/add-match/add-match.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AddMatchComponent);
    return AddMatchComponent;
}());



/***/ }),

/***/ "./src/app/bz-modules/basic-data/basic-data.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/bz-modules/basic-data/basic-data.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/bz-modules/basic-data/basic-data.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/bz-modules/basic-data/basic-data.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\nol,\nul,\nli {\n  list-style: none;\n  text-align: left; }\n/*公共类*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnotbW9kdWxlcy9iYXNpYy1kYXRhL2Jhc2ljLWRhdGEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2J6LW1vZHVsZXMvYmFzaWMtZGF0YS9GOlxcUm9ja3dvb2RcXHdvcmtzcGFjZVxcT3BlbldNUy1uZXcvc3JjXFxhcHBcXGJ6LW1vZHVsZXNcXGJhc2ljLWRhdGFcXGJhc2ljLWRhdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7RUFHRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7QUFFakIsTUFBQSIsImZpbGUiOiJzcmMvYXBwL2J6LW1vZHVsZXMvYmFzaWMtZGF0YS9iYXNpYy1kYXRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xub2wsXG51bCxcbmxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxuXG4vKuWFrOWFseexuyovXG4iLCJvbCxcclxudWwsXHJcbmxpIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuIC8q5YWs5YWx57G7Ki8iXX0= */"

/***/ }),

/***/ "./src/app/bz-modules/basic-data/basic-data.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/bz-modules/basic-data/basic-data.component.ts ***!
  \***************************************************************/
/*! exports provided: BasicDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicDataComponent", function() { return BasicDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BasicDataComponent = /** @class */ (function () {
    function BasicDataComponent() {
    }
    BasicDataComponent.prototype.ngOnInit = function () {
    };
    BasicDataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'basic-data',
            template: __webpack_require__(/*! ./basic-data.component.html */ "./src/app/bz-modules/basic-data/basic-data.component.html"),
            styles: [__webpack_require__(/*! ./basic-data.component.scss */ "./src/app/bz-modules/basic-data/basic-data.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicDataComponent);
    return BasicDataComponent;
}());



/***/ }),

/***/ "./src/app/bz-modules/basic-data/basic-data.module.ts":
/*!************************************************************!*\
  !*** ./src/app/bz-modules/basic-data/basic-data.module.ts ***!
  \************************************************************/
/*! exports provided: BasicDataModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicDataModule", function() { return BasicDataModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_components_datatable_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/components/datatable/datatable */ "./node_modules/primeng/components/datatable/datatable.js");
/* harmony import */ var primeng_components_datatable_datatable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_components_datatable_datatable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_components_calendar_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/components/calendar/calendar */ "./node_modules/primeng/components/calendar/calendar.js");
/* harmony import */ var primeng_components_calendar_calendar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_components_calendar_calendar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primeng_components_tree_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/components/tree/tree */ "./node_modules/primeng/components/tree/tree.js");
/* harmony import */ var primeng_components_tree_tree__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_components_tree_tree__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/shared.module */ "./src/app/common/shared.module.ts");
/* harmony import */ var _basic_data_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./basic-data.component */ "./src/app/bz-modules/basic-data/basic-data.component.ts");
/* harmony import */ var _warehouse_table_warehouse_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./warehouse-table/warehouse-table.component */ "./src/app/bz-modules/basic-data/warehouse-table/warehouse-table.component.ts");
/* harmony import */ var _warehouse_form_warehouse_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./warehouse-form/warehouse-form.component */ "./src/app/bz-modules/basic-data/warehouse-form/warehouse-form.component.ts");
/* harmony import */ var _warehouse_map_warehouse_map_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./warehouse-map/warehouse-map.component */ "./src/app/bz-modules/basic-data/warehouse-map/warehouse-map.component.ts");
/* harmony import */ var _category_table_category_table_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./category-table/category-table.component */ "./src/app/bz-modules/basic-data/category-table/category-table.component.ts");
/* harmony import */ var _category_form_category_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./category-form/category-form.component */ "./src/app/bz-modules/basic-data/category-form/category-form.component.ts");
/* harmony import */ var _vendor_table_vendor_table_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./vendor-table/vendor-table.component */ "./src/app/bz-modules/basic-data/vendor-table/vendor-table.component.ts");
/* harmony import */ var _vendor_form_vendor_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./vendor-form/vendor-form.component */ "./src/app/bz-modules/basic-data/vendor-form/vendor-form.component.ts");
/* harmony import */ var _customer_table_customer_table_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./customer-table/customer-table.component */ "./src/app/bz-modules/basic-data/customer-table/customer-table.component.ts");
/* harmony import */ var _customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./customer-form/customer-form.component */ "./src/app/bz-modules/basic-data/customer-form/customer-form.component.ts");
/* harmony import */ var _staff_table_staff_table_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./staff-table/staff-table.component */ "./src/app/bz-modules/basic-data/staff-table/staff-table.component.ts");
/* harmony import */ var _staff_form_staff_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./staff-form/staff-form.component */ "./src/app/bz-modules/basic-data/staff-form/staff-form.component.ts");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _components_multiSelect_multiSelect_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../components/multiSelect/multiSelect.component */ "./src/app/components/multiSelect/multiSelect.component.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "./node_modules/ngx-bootstrap/chronos/fesm5/ngx-bootstrap-chronos.js");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-bootstrap/locale */ "./node_modules/ngx-bootstrap/locale/fesm5/ngx-bootstrap-locale.js");
/* harmony import */ var _basic_data_routes__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./basic-data.routes */ "./src/app/bz-modules/basic-data/basic-data.routes.ts");
/* harmony import */ var _match_operation_match_operation_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./match-operation/match-operation.component */ "./src/app/bz-modules/basic-data/match-operation/match-operation.component.ts");
/* harmony import */ var _add_match_add_match_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./add-match/add-match.component */ "./src/app/bz-modules/basic-data/add-match/add-match.component.ts");
/* harmony import */ var _common_services_auth_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../common/services/auth.service */ "./src/app/common/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_26__["defineLocale"])('zh-cn', ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_27__["zhCnLocale"]); // 日历显示中文
var BasicDataModule = /** @class */ (function () {
    function BasicDataModule() {
    }
    BasicDataModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _common_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                primeng_components_datatable_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableModule"],
                primeng_components_calendar_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["DropdownModule"],
                primeng_components_tree_tree__WEBPACK_IMPORTED_MODULE_7__["TreeModule"],
                primeng_checkbox__WEBPACK_IMPORTED_MODULE_21__["CheckboxModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_22__["DialogModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_23__["TableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_25__["BsDatepickerModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_basic_data_routes__WEBPACK_IMPORTED_MODULE_28__["basicDataRoutes"])
            ],
            declarations: [
                _basic_data_component__WEBPACK_IMPORTED_MODULE_9__["BasicDataComponent"],
                _components_multiSelect_multiSelect_component__WEBPACK_IMPORTED_MODULE_24__["multiSelectComponent"],
                _warehouse_table_warehouse_table_component__WEBPACK_IMPORTED_MODULE_10__["WarehouseTableComponent"],
                _warehouse_form_warehouse_form_component__WEBPACK_IMPORTED_MODULE_11__["WarehouseFormComponent"],
                _warehouse_map_warehouse_map_component__WEBPACK_IMPORTED_MODULE_12__["WarehouseMapComponent"],
                _category_table_category_table_component__WEBPACK_IMPORTED_MODULE_13__["CategoryTableComponent"],
                _category_form_category_form_component__WEBPACK_IMPORTED_MODULE_14__["CategoryFormComponent"],
                _vendor_table_vendor_table_component__WEBPACK_IMPORTED_MODULE_15__["VendorTableComponent"],
                _vendor_form_vendor_form_component__WEBPACK_IMPORTED_MODULE_16__["VendorFormComponent"],
                _customer_table_customer_table_component__WEBPACK_IMPORTED_MODULE_17__["CustomerTableComponent"],
                _customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_18__["CustomerFormComponent"],
                _staff_table_staff_table_component__WEBPACK_IMPORTED_MODULE_19__["StaffTableComponent"],
                _staff_form_staff_form_component__WEBPACK_IMPORTED_MODULE_20__["StaffFormComponent"],
                _add_match_add_match_component__WEBPACK_IMPORTED_MODULE_30__["AddMatchComponent"],
                _match_operation_match_operation_component__WEBPACK_IMPORTED_MODULE_29__["MatchOperationComponent"]
            ],
            providers: [_common_services_auth_service__WEBPACK_IMPORTED_MODULE_31__["AuthService"]]
        })
    ], BasicDataModule);
    return BasicDataModule;
}());



/***/ }),

/***/ "./src/app/bz-modules/basic-data/basic-data.routes.ts":
/*!************************************************************!*\
  !*** ./src/app/bz-modules/basic-data/basic-data.routes.ts ***!
  \************************************************************/
/*! exports provided: basicDataRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basicDataRoutes", function() { return basicDataRoutes; });
/* harmony import */ var _basic_data_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic-data.component */ "./src/app/bz-modules/basic-data/basic-data.component.ts");
/* harmony import */ var _warehouse_table_warehouse_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./warehouse-table/warehouse-table.component */ "./src/app/bz-modules/basic-data/warehouse-table/warehouse-table.component.ts");
/* harmony import */ var _warehouse_form_warehouse_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./warehouse-form/warehouse-form.component */ "./src/app/bz-modules/basic-data/warehouse-form/warehouse-form.component.ts");
/* harmony import */ var _category_table_category_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category-table/category-table.component */ "./src/app/bz-modules/basic-data/category-table/category-table.component.ts");
/* harmony import */ var _category_form_category_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category-form/category-form.component */ "./src/app/bz-modules/basic-data/category-form/category-form.component.ts");
/* harmony import */ var _vendor_table_vendor_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vendor-table/vendor-table.component */ "./src/app/bz-modules/basic-data/vendor-table/vendor-table.component.ts");
/* harmony import */ var _vendor_form_vendor_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vendor-form/vendor-form.component */ "./src/app/bz-modules/basic-data/vendor-form/vendor-form.component.ts");
/* harmony import */ var _customer_table_customer_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customer-table/customer-table.component */ "./src/app/bz-modules/basic-data/customer-table/customer-table.component.ts");
/* harmony import */ var _customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customer-form/customer-form.component */ "./src/app/bz-modules/basic-data/customer-form/customer-form.component.ts");
/* harmony import */ var _staff_table_staff_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./staff-table/staff-table.component */ "./src/app/bz-modules/basic-data/staff-table/staff-table.component.ts");
/* harmony import */ var _staff_form_staff_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./staff-form/staff-form.component */ "./src/app/bz-modules/basic-data/staff-form/staff-form.component.ts");
/* harmony import */ var _match_operation_match_operation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./match-operation/match-operation.component */ "./src/app/bz-modules/basic-data/match-operation/match-operation.component.ts");
/* harmony import */ var _add_match_add_match_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-match/add-match.component */ "./src/app/bz-modules/basic-data/add-match/add-match.component.ts");













var basicDataRoutes = [{
        path: '',
        component: _basic_data_component__WEBPACK_IMPORTED_MODULE_0__["BasicDataComponent"],
        children: [
            { path: '', redirectTo: 'warehouse-table/page/1', pathMatch: 'full' },
            { path: 'warehouse-table/page/:page', component: _warehouse_table_warehouse_table_component__WEBPACK_IMPORTED_MODULE_1__["WarehouseTableComponent"] },
            { path: 'category-table/page/:page', component: _category_table_category_table_component__WEBPACK_IMPORTED_MODULE_3__["CategoryTableComponent"] },
            { path: 'vendor-table/page/:page', component: _vendor_table_vendor_table_component__WEBPACK_IMPORTED_MODULE_5__["VendorTableComponent"] },
            { path: 'customer-table/page/:page', component: _customer_table_customer_table_component__WEBPACK_IMPORTED_MODULE_7__["CustomerTableComponent"] },
            { path: 'staff-table/page/:page', component: _staff_table_staff_table_component__WEBPACK_IMPORTED_MODULE_9__["StaffTableComponent"] },
            { path: 'warehouse-form', component: _warehouse_form_warehouse_form_component__WEBPACK_IMPORTED_MODULE_2__["WarehouseFormComponent"] },
            { path: 'category-form', component: _category_form_category_form_component__WEBPACK_IMPORTED_MODULE_4__["CategoryFormComponent"] },
            { path: 'vendor-form', component: _vendor_form_vendor_form_component__WEBPACK_IMPORTED_MODULE_6__["VendorFormComponent"] },
            { path: 'customer-form', component: _customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_8__["CustomerFormComponent"] },
            { path: 'staff-form', component: _staff_form_staff_form_component__WEBPACK_IMPORTED_MODULE_10__["StaffFormComponent"] },
            { path: 'add-match', component: _add_match_add_match_component__WEBPACK_IMPORTED_MODULE_12__["AddMatchComponent"] },
            { path: 'match-competition', component: _match_operation_match_operation_component__WEBPACK_IMPORTED_MODULE_11__["MatchOperationComponent"] }
        ]
    }];


/***/ }),

/***/ "./src/app/bz-modules/basic-data/category-form/category-form.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/bz-modules/basic-data/category-form/category-form.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"header-no-margin margin-bottom-1rem\">{{'categoryTable.categoryData' | translate}}</h3>\n<form class=\"form-horizontal form-bgcolor \">\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\">{{'categoryTable.creator' | translate}}：</label>\n    <div class=\"col-sm-4\">\n      <p class=\"form-control-static\">Admin</p>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\">{{'categoryTable.createTime' | translate}}：</label>\n    <div class=\"col-sm-4\">\n      <p class=\"form-control-static\">{{createTime | date:'yyyy-MM-dd HH:mm:ss'}}</p>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\">{{'categoryTable.categoryName' | translate}}：</label>\n    <div class=\"col-sm-4\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\">{{'categoryTable.remarks' | translate}}：</label>\n    <div class=\"col-sm-4\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <div class=\"col-sm-offset-3 col-sm-4\">\n      <button type=\"button\" class=\"btn btn-primary btn-margin-1rem\" (click)=\"saveCategory()\">{{'save' | translate}}</button>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"backToTable()\">{{'return' | translate}}</button>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/bz-modules/basic-data/category-form/category-form.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/bz-modules/basic-data/category-form/category-form.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J6LW1vZHVsZXMvYmFzaWMtZGF0YS9jYXRlZ29yeS1mb3JtL2NhdGVnb3J5LWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/bz-modules/basic-data/category-form/category-form.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/bz-modules/basic-data/category-form/category-form.component.ts ***!
  \********************************************************************************/
/*! exports provided: CategoryFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryFormComponent", function() { return CategoryFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryFormComponent = /** @class */ (function () {
    function CategoryFormComponent(router, activeRoute) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.createTime = new Date();
    }
    CategoryFormComponent.prototype.ngOnInit = function () {
    };
    CategoryFormComponent.prototype.saveCategory = function () {
    };
    CategoryFormComponent.prototype.backToTable = function () {
        this.router.navigateByUrl('/workspace/basic-data/category-table/page/1');
    };
    CategoryFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'category-form',
            template: __webpack_require__(/*! ./category-form.component.html */ "./src/app/bz-modules/basic-data/category-form/category-form.component.html"),
            styles: [__webpack_require__(/*! ./category-form.component.scss */ "./src/app/bz-modules/basic-data/category-form/category-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CategoryFormComponent);
    return CategoryFormComponent;
}());



/***/ }),

/***/ "./src/app/bz-modules/basic-data/category-table/category-table.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/bz-modules/basic-data/category-table/category-table.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-table-container\">\n    <p-confirmDialog header=\"{{'confirm' | translate}}\" icon=\"fa fa-question-circle\" #cd>\n        <p-footer>\n            <button type=\"button\" icon=\"fa-check\" class=\"btn btn-primary btn-margin-1rem\" (click)=\"cd.accept()\">{{'accept' | translate}}</button>\n            <button type=\"button\" icon=\"fa-close\" class=\"btn btn-default\" (click)=\"cd.reject()\">{{'reject' | translate}}</button>\n        </p-footer>\n    </p-confirmDialog>\n\n    <h3 class=\"header-no-margin\">{{'categoryTable.categoryData' | translate}}</h3>\n    <form class=\"form-inline top-filter-form form-bgcolor\" role=\"form\">\n        <div class=\"form-group btn-margin-1rem\">\n            <div class=\"input-group\">\n                <input type=\"text\" class=\"form-control\">\n                <span class=\"input-group-btn\">\n                    <button class=\"btn btn-primary\" type=\"button\">\n                        <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                    </button>\n                </span>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <button class=\"btn btn-primary\" type=\"button\" (click)=\"newCategory()\">\n                <i class=\"fa fa-user\" aria-hidden=\"true\"></i> {{'categoryTable.newCategory' | translate}}\n            </button>\n        </div>\n    </form>\n    <div class=\"row no-margin\">\n        <div class=\"col-xs-12 form-bgcolor col-padding \">\n            <div class=\"user-item-container\">\n                <p-dataTable expandableRows=\"true\" [value]=\"categories\" [rows]=\"10\" [paginator]=\"true\" [pageLinks]=\"3\" [rowsPerPageOptions]=\"[5,10,20]\"\n                    dataKey=\"index\">\n                    <p-column expander=\"true\" styleClass=\"col-icon\" [style]=\"{'width':'50px'}\"></p-column>\n                    <p-column field=\"name\" header=\"{{'categoryTable.categoryName' | translate}}\" [sortable]=\"true\"></p-column>\n                    <p-column field=\"creator\" header=\"{{'categoryTable.creator' | translate}}\" [sortable]=\"true\" [editable]=\"true\"></p-column>\n                    <p-column field=\"createTime\" header=\"{{'categoryTable.createTime' | translate}}\" [sortable]=\"true\" [editable]=\"true\">\n                        <ng-template let-col let-category=\"rowData\" pTemplate=\"body\">\n                            <span>{{category[col.field] | date:'yyyy-MM-dd HH:mm:ss'}}</span>\n                        </ng-template>\n                    </p-column>\n                    <p-column header=\"{{'operate' | translate}}\" [style]=\"{'width':'80px'}\">\n                        <ng-template let-item=\"rowData\" pTemplate=\"body\">\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"delCategory(item)\">{{'delItem' | translate}}</button>\n                        </ng-template>\n                    </p-column>\n                    <ng-template let-category pTemplate=\"rowexpansion\">\n                        <div class=\"ui-grid ui-grid-responsive ui-fluid\">\n                            <div class=\"ui-grid-row\">\n                                <div class=\"ui-grid-col-12\">\n                                    <div class=\"ui-grid ui-grid-responsive ui-grid-pad\">\n                                        <div class=\"ui-grid-row\">\n                                            <div class=\"ui-grid-col-2\">{{'categoryTable.name' | translate}}：</div>\n                                            <div class=\"ui-grid-col-10\">{{category.name}}</div>\n                                        </div>\n                                        <div class=\"ui-grid-row\">\n                                            <div class=\"ui-grid-col-2\">{{'categoryTable.creator' | translate}}：</div>\n                                            <div class=\"ui-grid-col-10\">{{category.creator}}</div>\n                                        </div>\n                                        <div class=\"ui-grid-row\">\n                                            <div class=\"ui-grid-col-2\">{{'categoryTable.createTime' | translate}}：</div>\n                                            <div class=\"ui-grid-col-10\">{{category.createTime | date:'yyyy-MM-dd HH:mm:ss'}}</div>\n                                        </div>\n                                        <div class=\"ui-grid-row\">\n                                            <div class=\"ui-grid-col-2\">{{'categoryTable.remarks' | translate}}：</div>\n                                            <div class=\"ui-grid-col-10\">{{category.remark}}</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </ng-template>\n                </p-dataTable>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/bz-modules/basic-data/category-table/category-table.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/bz-modules/basic-data/category-table/category-table.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J6LW1vZHVsZXMvYmFzaWMtZGF0YS9jYXRlZ29yeS10YWJsZS9jYXRlZ29yeS10YWJsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/bz-modules/basic-data/category-table/category-table.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/bz-modules/basic-data/category-table/category-table.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CategoryTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryTableComponent", function() { return CategoryTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/services/category.service */ "./src/app/common/services/category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoryTableComponent = /** @class */ (function () {
    function CategoryTableComponent(router, activeRoute, categoryService, confirmationService, messageService) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.categoryService = categoryService;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
    }
    CategoryTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryService.getCategories().subscribe(function (categories) {
            _this.categories = categories;
        });
    };
    CategoryTableComponent.prototype.newCategory = function (item) {
        this.router.navigateByUrl('/workspace/basic-data/category-form');
    };
    CategoryTableComponent.prototype.editCategory = function (item) {
        this.newCategory(item);
    };
    CategoryTableComponent.prototype.delCategory = function (item) {
        var _this = this;
        this.confirmationService.confirm({
            message: '确定要删除吗？',
            accept: function () {
                console.log(item);
                _this.messageService.add({ severity: 'success', summary: '成功', detail: '删除数据成功' });
            }
        });
    };
    CategoryTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'category-table',
            template: __webpack_require__(/*! ./category-table.component.html */ "./src/app/bz-modules/basic-data/category-table/category-table.component.html"),
            styles: [__webpack_require__(/*! ./category-table.component.scss */ "./src/app/bz-modules/basic-data/category-table/category-table.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _common_services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
    ], CategoryTableComponent);
    return CategoryTableComponent;
}());



/***/ }),

/***/ "./src/app/bz-modules/basic-data/customer-form/customer-form.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/bz-modules/basic-data/customer-form/customer-form.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"header-no-margin margin-bottom-1rem\">{{'customerTabel.customerData' | translate}}</h3>\n<form class=\"form-horizontal form-bgcolor\">\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\">{{'customerTabel.fullName' | translate}}：</label>\n    <div class=\"col-sm-6\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"{{'placeholder.maxlength64' | translate}}\" #customerName=\"ngModel\" [(ngModel)]=\"customer.customerName\"\n        name=\"customerName\" required minlength=\"2\" maxlength=\"64\" />\n      <div *ngIf=\"customerName.invalid && (customerName.dirty || customerName.touched)\" class=\"text-danger\">\n        <div *ngIf=\"customerName.errors.required\">\n          {{'errorsTip.customerNameEmpty' | translate}}\n        </div>\n        <div *ngIf=\"customerName.errors.minlength\">\n          {{'errorsTip.minlength' | translate}}\n        </div>\n        <div *ngIf=\"customerName.errors.maxlength\">\n          {{'errorsTip.maxlength64' | translate}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\">{{'customerTabel.shortName' | translate}}：</label>\n    <div class=\"col-sm-6\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"{{'placeholder.maxlength64' | translate}}\" #shortName=\"ngModel\" [(ngModel)]=\"customer.shortName\" name=\"shortName\"\n        required minlength=\"2\" maxlength=\"64\" />\n      <div *ngIf=\"shortName.invalid && (shortName.dirty || shortName.touched)\" class=\"text-danger\">\n        <div *ngIf=\"shortName.errors.required\">\n          {{'errorsTip.shortNameEmpty' | translate}}\n        </div>\n        <div *ngIf=\"shortName.errors.minlength\">\n          {{'errorsTip.minlength' | translate}}\n        </div>\n        <div *ngIf=\"shortName.errors.maxlength\">\n          {{'errorsTip.maxlength64' | translate}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\">{{'personalInfo.address' | translate}}：</label>\n    <div class=\"col-sm-6\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"{{'placeholder.maxlength128' | translate}}\" #addr=\"ngModel\" [(ngModel)]=\"customer.addr\" name=\"addr\"\n        required minlength=\"2\" maxlength=\"128\" />\n      <div *ngIf=\"addr.invalid && (addr.dirty || addr.touched)\" class=\"text-danger\">\n        <div *ngIf=\"addr.errors.required\">\n          {{'errorsTip.addressEmpty' | translate}}\n        </div>\n        <div *ngIf=\"addr.errors.minlength\">\n          {{'errorsTip.minlength' | translate}}\n        </div>\n        <div *ngIf=\"addr.errors.maxlength\">\n          {{'errorsTip.maxlength128' | translate}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\">{{'personalInfo.postCode' | translate}}：</label>\n    <div class=\"col-sm-6\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"{{'placeholder.postCode' | translate}}\" #postCode=\"ngModel\" [(ngModel)]=\"customer.postCode\" name=\"postCode\"\n        pattern=\"[1-9]\\d{5}(?!\\d)\" />\n      <div *ngIf=\"postCode.invalid && (postCode.dirty || postCode.touched)\" class=\"text-danger\">\n        <div *ngIf=\"postCode.errors.pattern\">\n          {{'errorsTip.postCodeIncorrect' | translate}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\">{{'personalInfo.telephone' | translate}}：</label>\n    <div class=\"col-sm-6\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"{{'placeholder.telephone' | translate}}\" #telephone=\"ngModel\" [(ngModel)]=\"customer.telephone\" name=\"telephone\"\n        pattern=\"^(0[0-9]{2,3}/-)?([2-9][0-9]{6,7})+(/-[0-9]{1,4})?$\" />\n      <div *ngIf=\"telephone.invalid && (telephone.dirty || telephone.touched)\" class=\"text-danger\">\n        <div *ngIf=\"telephone.errors.pattern\">\n          {{'errorsTip.telephoneIncorrect' | translate}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\">{{'personalInfo.fax' | translate}}：</label>\n    <div class=\"col-sm-6\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"{{'placeholder.fax' | translate}}\" #fax=\"ngModel\" [(ngModel)]=\"customer.fax\" name=\"fax\" pattern=\"^[+]{0,1}(\\d){1,3}[ ]?([-]?((\\d)|[ ]){1,12})+$\"\n      />\n      <div *ngIf=\"fax.invalid && (fax.dirty || fax.touched)\" class=\"text-danger\">\n        <div *ngIf=\"fax.errors.pattern\">\n          {{'errorsTip.faxIncorrect' | translate}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\">{{'personalInfo.email' | translate}}：</label>\n    <div class=\"col-sm-6\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"{{'placeholder.email' | translate}}\" #email=\"ngModel\" [(ngModel)]=\"customer.email\" name=\"email\" pattern=\"^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$\"\n      />\n      <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"text-danger\">\n        <div *ngIf=\"email.errors.pattern\">\n          {{'errorsTip.emailIncorrect' | translate}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\">{{'personalInfo.contact' | translate}}：</label>\n    <div class=\"col-sm-6\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"{{'placeholder.contact' | translate}}\" #contact=\"ngModel\" [(ngModel)]=\"customer.contact\" name=\"contact\"\n        required minlength=\"2\" maxlength=\"32\" />\n      <div *ngIf=\"contact.invalid && (contact.dirty || contact.touched)\" class=\"text-danger\">\n        <div *ngIf=\"contact.errors.required\">\n          {{'errorsTip.peopleNameEmpty' | translate}}\n        </div>\n        <div *ngIf=\"contact.errors.minlength\">\n          {{'errorsTip.minlength' | translate}}\n        </div>\n        <div *ngIf=\"contact.errors.maxlength\">\n          {{'errorsTip.maxlength32' | translate}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\">{{'personalInfo.sex' | translate}}：</label>\n    <div class=\"col-sm-6\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"{{'placeholder.sex' | translate}}\" #gender=\"ngModel\" [(ngModel)]=\"customer.gender\" name=\"gender\"\n        required />\n      <div *ngIf=\"gender.invalid && (gender.dirty || gender.touched)\" class=\"text-danger\">\n        <div *ngIf=\"gender.errors.required\">\n          {{'errorsTip.sexEmpty' | translate}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\">{{'personalInfo.duty' | translate}}：</label>\n    <div class=\"col-sm-6\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"{{'placeholder.duty' | translate}}\" #duty=\"ngModel\" [(ngModel)]=\"customer.duty\" name=\"duty\" required\n        minlength=\"2\" maxlength=\"32\" />\n      <div *ngIf=\"duty.invalid && (duty.dirty || duty.touched)\" class=\"text-danger\">\n        <div *ngIf=\"duty.errors.required\">\n          {{'errorsTip.dutyEmpry' | translate}}\n        </div>\n        <div *ngIf=\"duty.errors.minlength\">\n          {{'errorsTip.minlength' | translate}}\n        </div>\n        <div *ngIf=\"duty.errors.maxlength\">\n          {{'errorsTip.maxlength32' | translate}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\">{{'personalInfo.cellphone' | translate}}：</label>\n    <div class=\"col-sm-6\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"{{'placeholder.cellphone' | translate}}\" #cellphone=\"ngModel\" [(ngModel)]=\"customer.cellphone\"\n        name=\"cellphone\" required pattern=\"^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\\d{8}$\" />\n      <div *ngIf=\"cellphone.invalid && (cellphone.dirty || cellphone.touched)\" class=\"text-danger\">\n        <div *ngIf=\"cellphone.errors.required\">\n          {{'errorsTip.cellphoneEmpty' | translate}}\n        </div>\n        <div *ngIf=\"cellphone.errors.pattern\">\n          {{'errorsTip.cellphoneIncorrect' | translate}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\">{{'remarks' | translate}}：</label>\n    <div class=\"col-sm-6\">\n      <textarea class=\"form-control\" rows=\"3\" placeholder=\"{{'placeholder.maxlength256' | translate}}\" #remark=\"ngModel\" [(ngModel)]=\"customer.remark\" name=\"remark\"\n        required minlength=\"2\" maxlength=\"256\"></textarea>\n      <div *ngIf=\"remark.invalid && (remark.dirty || remark.touched)\" class=\"text-danger\">\n        <div *ngIf=\"remark.errors.minlength\">\n          {{'errorsTip.minlength' | translate}}\n        </div>\n        <div *ngIf=\"remark.errors.maxlength\">\n          {{'errorsTip.maxlength256' | translate}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <div class=\"col-sm-offset-3 col-sm-4\">\n      <button type=\"button\" class=\"btn btn-primary btn-margin-1rem\">{{'save' | translate}}</button>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"backToTable()\">{{'return' | translate}}</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/bz-modules/basic-data/customer-form/customer-form.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/bz-modules/basic-data/customer-form/customer-form.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J6LW1vZHVsZXMvYmFzaWMtZGF0YS9jdXN0b21lci1mb3JtL2N1c3RvbWVyLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/bz-modules/basic-data/customer-form/customer-form.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/bz-modules/basic-data/customer-form/customer-form.component.ts ***!
  \********************************************************************************/
/*! exports provided: CustomerFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerFormComponent", function() { return CustomerFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_model_customer_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/model/customer-model */ "./src/app/common/model/customer-model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerFormComponent = /** @class */ (function () {
    function CustomerFormComponent(router, activeRoute) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.customer = new _common_model_customer_model__WEBPACK_IMPORTED_MODULE_2__["CustomerModel"]();
    }
    CustomerFormComponent.prototype.ngOnInit = function () {
    };
    CustomerFormComponent.prototype.backToTable = function () {
        this.router.navigateByUrl('/workspace/basic-data/customer-table/page/1');
    };
    CustomerFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'customer-form',
            template: __webpack_require__(/*! ./customer-form.component.html */ "./src/app/bz-modules/basic-data/customer-form/customer-form.component.html"),
            styles: [__webpack_require__(/*! ./customer-form.component.scss */ "./src/app/bz-modules/basic-data/customer-form/customer-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CustomerFormComponent);
    return CustomerFormComponent;
}());



/***/ }),

/***/ "./src/app/bz-modules/basic-data/customer-table/customer-table.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/bz-modules/basic-data/customer-table/customer-table.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-table-container\">\n    <p-confirmDialog header=\"{{'confirm' | translate}}\" icon=\"fa fa-question-circle\" #cd>\n        <p-footer>\n            <button type=\"button\" icon=\"fa-check\" class=\"btn btn-primary btn-margin-1rem\" (click)=\"cd.accept()\">{{'accept' | translate}}</button>\n            <button type=\"button\" icon=\"fa-close\" class=\"btn btn-default\" (click)=\"cd.reject()\">{{'reject' | translate}}</button>\n        </p-footer>\n    </p-confirmDialog>\n\n    <h3 class=\"header-no-margin\">{{'customerTabel.customerData' | translate}}</h3>\n    <form class=\"form-inline top-filter-form form-bgcolor \" role=\"form\">\n        <div class=\"form-group btn-margin-1rem\">\n            <div class=\"input-group\">\n                <input type=\"text\" class=\"form-control\">\n                <span class=\"input-group-btn\">\n                    <button class=\"btn btn-primary\" type=\"button\">\n                        <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                    </button>\n                </span>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <button class=\"btn btn-primary\" type=\"button\" (click)=\"newCustomerForm()\">\n                <i class=\"fa fa-user\" aria-hidden=\"true\"></i> {{'customerTabel.newCustomer' | translate}}\n            </button>\n        </div>\n    </form>\n    <div class=\"row no-margin\">\n        <div class=\"col-xs-12 form-bgcolor col-padding\">\n            <div class=\"user-item-container\">\n                <p-dataTable expandableRows=\"true\" [value]=\"customers\" [rows]=\"10\" [paginator]=\"true\" [pageLinks]=\"3\" [rowsPerPageOptions]=\"[5,10,20]\"\n                    dataKey=\"index\">\n                    <p-column expander=\"true\" styleClass=\"col-icon\" [style]=\"{'width':'50px'}\"></p-column>\n                    <p-column field=\"customerName\" header=\"{{'customerTabel.customerName' | translate}}\" [sortable]=\"true\" [style]=\"{'width':'250px'}\"></p-column>\n                    <p-column field=\"addr\" header=\"{{'personalInfo.address' | translate}}\" [sortable]=\"true\"></p-column>\n                    <p-column field=\"contact\" header=\"{{'personalInfo.contact' | translate}}\" [sortable]=\"true\" [style]=\"{'width':'80px'}\"></p-column>\n                    <p-column field=\"cellphone\" header=\"{{'personalInfo.cellphone' | translate}}\" [sortable]=\"true\" [style]=\"{'width':'120px'}\"></p-column>\n                    <p-column header=\"{{'operate' | translate}}\" [style]=\"{'width':'80px','text-align':'center'}\">\n                        <ng-template let-item=\"rowData\" pTemplate=\"body\">\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"delCustomer(item)\">{{'delItem' | translate}}</button>\n                        </ng-template>\n                    </p-column>\n                    <ng-template let-customer pTemplate=\"rowexpansion\">\n                        <div class=\"ui-grid ui-grid-responsive ui-fluid\">\n                            <div class=\"ui-grid-row\">\n                                <div class=\"ui-grid-col-12\">\n                                    <div class=\"ui-grid ui-grid-responsive ui-grid-pad\">\n                                        <div class=\"ui-grid-row\">\n                                            <div class=\"ui-grid-col-2\">名称：</div>\n                                            <div class=\"ui-grid-col-10\">{{customer.customerName}}</div>\n                                        </div>\n                                        <div class=\"ui-grid-row\">\n                                            <div class=\"ui-grid-col-2\">地址：</div>\n                                            <div class=\"ui-grid-col-10\">{{customer.addr}}</div>\n                                        </div>\n                                        <div class=\"ui-grid-row\">\n                                            <div class=\"ui-grid-col-2\">联系人：</div>\n                                            <div class=\"ui-grid-col-10\">{{customer.contact}}</div>\n                                        </div>\n                                        <div class=\"ui-grid-row\">\n                                            <div class=\"ui-grid-col-2\">职务：</div>\n                                            <div class=\"ui-grid-col-10\">{{customer.duty}}</div>\n                                        </div>\n                                        <div class=\"ui-grid-row\">\n                                            <div class=\"ui-grid-col-2\">手机号：</div>\n                                            <div class=\"ui-grid-col-10\">{{customer.cellphone}}</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </ng-template>\n                </p-dataTable>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/bz-modules/basic-data/customer-table/customer-table.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/bz-modules/basic-data/customer-table/customer-table.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J6LW1vZHVsZXMvYmFzaWMtZGF0YS9jdXN0b21lci10YWJsZS9jdXN0b21lci10YWJsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/bz-modules/basic-data/customer-table/customer-table.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/bz-modules/basic-data/customer-table/customer-table.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CustomerTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerTableComponent", function() { return CustomerTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/services/customer.service */ "./src/app/common/services/customer.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomerTableComponent = /** @class */ (function () {
    function CustomerTableComponent(router, activeRoute, customerService, confirmationService, messageService) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.customerService = customerService;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
    }
    CustomerTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customerService.getCustomers().subscribe(function (customers) {
            _this.customers = customers;
        });
    };
    CustomerTableComponent.prototype.newCustomerForm = function (item) {
        this.router.navigateByUrl('/workspace/basic-data/customer-form');
    };
    CustomerTableComponent.prototype.delCustomer = function (item) {
        var _this = this;
        this.confirmationService.confirm({
            message: '确定要删除吗？',
            accept: function () {
                console.log(item);
                _this.messageService.add({ severity: 'success', summary: '成功', detail: '删除数据成功' });
            }
        });
    };
    CustomerTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'customer-table',
            template: __webpack_require__(/*! ./customer-table.component.html */ "./src/app/bz-modules/basic-data/customer-table/customer-table.component.html"),
            styles: [__webpack_require__(/*! ./customer-table.component.scss */ "./src/app/bz-modules/basic-data/customer-table/customer-table.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _common_services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"],
            primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], CustomerTableComponent);
    return CustomerTableComponent;
}());



/***/ }),

/***/ "./src/app/bz-modules/basic-data/match-operation/match-operation.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/bz-modules/basic-data/match-operation/match-operation.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-table-container\">\n  <form\n    class=\"form-inline top-filter-form form-bgcolor col-padding\"\n    role=\"form\"\n  >\n    <div class=\"form-group btn-margin-1rem\">\n      <div>赛事起止时间：</div>\n    </div>\n    <div class=\"form-group btn-margin-1rem\">\n      <input\n        class=\"form-control\"\n        type=\"text\"\n        name=\"begin_time\"\n        placeholder=\"请选择开始日期\"\n        bsDatepicker\n        [(ngModel)]=\"beginTime\"\n      />\n    </div>\n    <div class=\"form-group btn-margin-1rem\">\n      <div>至</div>\n    </div>\n    <div class=\"form-group btn-margin-1rem\">\n      <input\n        class=\"form-control\"\n        type=\"text\"\n        name=\"end_time\"\n        placeholder=\"请选择结束日期\"\n        bsDatepicker\n        [(ngModel)]=\"endTime\"\n      />\n    </div>\n    <div class=\"form-group btn-margin-1rem\">\n      <button class=\"btn btn-primary\" type=\"button\">\n        报名付费\n      </button>\n    </div>\n    <div class=\"form-group btn-margin-1rem\">\n      <button class=\"btn btn-primary\" type=\"button\" (click)=\"addMatch()\">\n        添加赛事\n      </button>\n    </div>\n    <div class=\"form-group btn-margin-1rem\">\n      <button class=\"btn btn-primary\" type=\"button\" (click)=\"modifyMatch()\">\n        编辑赛事\n      </button>\n    </div>\n    <div class=\"form-group btn-margin-1rem\">\n      <button class=\"btn btn-primary\" type=\"button\" (click)=\"entryResult()\">\n        录入成绩\n      </button>\n    </div>\n    <br/>\n    <br/>\n    <div class=\"form-group btn-margin-1rem\"></div>\n    <div class=\"form-group btn-margin-1rem\">\n      <input class=\"form-control\" type=\"text\" placeholder=\"输入名称查询\" name=\"search_text\" [(ngModel)]=\"searchText\"/>\n    </div>\n    <!-- 全部赛事状态选择 -->\n    <div class=\"form-group btn-margin-1rem\">\n      <select\n        class=\"form-control\"\n        name=\"match_state_select\"\n        id=\"match_state_select\"\n        [(ngModel)]=\"matchStateId\"\n        (ngModelChange)=\"selectChange()\"\n      >\n        <option selected value=\"\">全部状态</option>\n        <option [value]=\"item.id\" *ngFor=\"let item of matchStateList\">\n          {{ item.desc }}\n        </option>\n      </select>\n    </div>\n    <!-- 全部报名条件 -->\n    <div class=\"form-group btn-margin-1rem\">\n      <select\n        class=\"form-control\"\n        name=\"match_type_select\"\n        id=\"match_type_select\"\n        [(ngModel)]=\"matchTypeId\"\n        (ngModelChange)=\"selectChange()\"\n      >\n        <option selected value=\"\">全部报名条件</option>\n        <option [value]=\"item.id\" *ngFor=\"let item of matchTypeList\">\n          {{ item.desc }}\n        </option>\n      </select>\n    </div>\n    <div class=\"form-group btn-margin-1rem\"></div>\n    <div class=\"form-group btn-margin-1rem\"></div>\n    <div class=\"form-group btn-margin-1rem\"></div>\n    <div class=\"form-group btn-margin-1rem\"></div>\n    <div class=\"form-group btn-margin-1rem\"></div>\n    <div class=\"form-group btn-margin-1rem\">\n      <button class=\"btn btn-primary\" type=\"button\" (click)=\"search()\">\n        查&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;询\n      </button>\n    </div>\n    <div class=\"form-group btn-margin-1rem\">\n      <button class=\"btn btn-primary\" type=\"button\" (click)=\"deleteMatch()\">\n        删除赛事\n      </button>\n    </div>\n    <div class=\"form-group btn-margin-1rem\">\n      <button class=\"btn btn-primary\" type=\"button\" (click)=\"detailMatch()\">\n        赛事详情\n      </button>\n    </div>\n    <div class=\"form-group btn-margin-1rem\">\n        <button class=\"btn btn-primary\" type=\"button\" (click)=\"derivedForm()\">\n          导出表格\n        </button>\n      </div>\n  </form>\n  <div class=\"tdiv\"></div>\n  <div class=\"row no-margin\">\n    <div class=\"col-xs-12 form-bgcolor col-padding\">\n      <div class=\"user-item-container\">\n        <p-table [value]=\"matchList\">\n          <ng-template pTemplate=\"header\">\n            <tr>\n              <th>\n                <p-checkbox (onChange)=\"checks($event)\" label=\"\"></p-checkbox>\n              </th>\n              <th>序号</th>\n              <th>赛事名称</th>\n              <th>赛事门票</th>\n              <th>报名条件</th>\n              <th>人数/球队限制</th>\n              <th>已报名</th>\n              <th>报名起止时间</th>\n              <th>活动起止时间</th>\n              <th>赛事状态</th>\n            </tr>\n          </ng-template>\n          <ng-template pTemplate=\"body\" let-match>\n            <tr>\n              <!--  *ngFor=\"let match of matchList;let i=index\" -->\n              <td>\n                <p-checkbox\n                  value=\"{{ match.match_id }}\"\n                  [(ngModel)]=\"selectedOperation\"\n                ></p-checkbox>\n              </td>\n              <td>{{ match.match_id }}</td>\n              <td>{{ match.match_name }}</td>\n              <td>{{ match.enlis_price }}</td>\n              <!-- <td>{{match.match_type}}</td> -->\n              <td>\n                <ul [ngSwitch]=\"match.match_type\">\n                  <li *ngSwitchCase=\"1\">个人赛</li>\n                  <li *ngSwitchCase=\"2\">球队赛</li>\n                  <li *ngSwitchDefault></li>\n                </ul>\n              </td>\n              <td>{{ match.match_num }}</td>\n              <td>{{ match.enroll_num }}</td>\n              <td>\n                {{ match.enlist_start_date | date: \"yyyy-MM-dd\"\n                }}<br />{{\n                  match.enlist_end_date | date: \"yyyy-MM-dd\"\n                }}\n              </td>\n              <td>\n                {{ match.match_start_date | date: \"yyyy-MM-dd\"\n                }}<br />{{ match.match_end_date | date: \"yyyy-MM-dd\" }}\n              </td>\n              <!-- <td>{{match.match_state}}</td> -->\n              <td>\n                <ul [ngSwitch]=\"match.match_state\">\n                  <li *ngSwitchCase=\"1\">登记</li>\n                  <li *ngSwitchCase=\"2\">挂网</li>\n                  <li *ngSwitchCase=\"3\">报名</li>\n                  <li *ngSwitchCase=\"4\">报名截止</li>\n                  <li *ngSwitchCase=\"5\">开始</li>\n                  <li *ngSwitchCase=\"6\">结束</li>\n                  <li *ngSwitchCase=\"8\">特殊挂起</li>\n                  <li *ngSwitchCase=\"9\">异常终止</li>\n                  <li *ngSwitchDefault></li>\n                </ul>\n              </td>\n              <!-- 赛事状态：match_state\n                 1：登记  2：挂网  3：报名 4：报名截止 5：开始  6：结束  8：特殊挂起 9：异常终止 -->\n            </tr>\n          </ng-template>\n        </p-table>\n        <p-paginator\n          rows=\"{{ pageSize }}\"\n          totalRecords=\"{{ totalSize }}\"\n          [rowsPerPageOptions]=\"[15, 20, 30]\"\n          (onPageChange)=\"onPage($event)\"\n        ></p-paginator>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- <p-dialog [(visible)]=\"display\" [width]=\"500\" [height]=\"600\"> -->\n"

/***/ }),

/***/ "./src/app/bz-modules/basic-data/match-operation/match-operation.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/bz-modules/basic-data/match-operation/match-operation.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ptable {\n  width: 100%;\n  height: 600px;\n  overflow-y: scroll;\n  border: 1px solid red; }\n\n.input_table td {\n  padding: 10px 0; }\n\n.input_table td input {\n  width: 250px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnotbW9kdWxlcy9iYXNpYy1kYXRhL21hdGNoLW9wZXJhdGlvbi9GOlxcUm9ja3dvb2RcXHdvcmtzcGFjZVxcT3BlbldNUy1uZXcvc3JjXFxhcHBcXGJ6LW1vZHVsZXNcXGJhc2ljLWRhdGFcXG1hdGNoLW9wZXJhdGlvblxcbWF0Y2gtb3BlcmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIscUJBQXFCLEVBQUE7O0FBRXpCO0VBQ0ksZUFBZSxFQUFBOztBQUVuQjtFQUNJLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2J6LW1vZHVsZXMvYmFzaWMtZGF0YS9tYXRjaC1vcGVyYXRpb24vbWF0Y2gtb3BlcmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2MDBweDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgYm9yZGVyIDoxcHggc29saWQgcmVkO1xufVxuLmlucHV0X3RhYmxlIHRke1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbn1cbi5pbnB1dF90YWJsZSB0ZCBpbnB1dHtcbiAgICB3aWR0aDogMjUwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/bz-modules/basic-data/match-operation/match-operation.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/bz-modules/basic-data/match-operation/match-operation.component.ts ***!
  \************************************************************************************/
/*! exports provided: MatchOperationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchOperationComponent", function() { return MatchOperationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_soap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-soap */ "./node_modules/ngx-soap/fesm5/ngx-soap.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_model_user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/model/user.model */ "./src/app/common/model/user.model.ts");
/* harmony import */ var _common_model_match_mode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/model/match.mode */ "./src/app/common/model/match.mode.ts");
/* harmony import */ var _common_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/services/auth.service */ "./src/app/common/services/auth.service.ts");
/* harmony import */ var _common_services_utility_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/services/utility.service */ "./src/app/common/services/utility.service.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { GroundSchedulingModel } from '../../../../common/model/ground.scheduling-model';









// import { RoleService } from '../../../../common/services/role.service';

var MatchOperationComponent = /** @class */ (function () {
    function MatchOperationComponent(localeService, soap, router, activatedRoute, authService, confirmationService, http, uti) {
        this.localeService = localeService;
        this.soap = soap;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.confirmationService = confirmationService;
        this.http = http;
        this.uti = uti;
        this.locale = "zh-cn";
        this.user = new _common_model_user_model__WEBPACK_IMPORTED_MODULE_6__["UserModel"]();
        this.matchList = [];
        this.match = new _common_model_match_mode__WEBPACK_IMPORTED_MODULE_7__["MatchModel"]();
        this.a = new Map();
        /*  matchStateId: "";
        matchTypeId: ""; */
        this.matchStateId = "";
        this.matchTypeId = "";
        this.searchText = "";
        /*  searchText:"";
        beginTime: "";
        endTime:""; */
        this.display = false;
        this.display1 = false;
        this.current = 1;
        this.pageSize = 6;
        this.totalSize = 20;
        this.gymId = "";
        this.test = 1;
        this.msg = "";
        this.testFlag = 1;
        this.matchTypeObj = {
            1: "个人赛",
            2: "球队赛"
        };
        this.selectedOperation = [];
        this.selectedId = [];
    }
    // 充值表单
    MatchOperationComponent.prototype.resetForm = function () {
        this.matchTypeList = [
            {
                desc: "个人赛",
                id: 1
            },
            {
                desc: "球队赛",
                id: 2
            }
        ];
        this.matchStateList = [
            {
                desc: "登记",
                id: 1
            },
            {
                desc: "挂网",
                id: 2
            },
            {
                desc: "报名",
                id: 3
            },
            {
                desc: "报名截止",
                id: 4
            },
            {
                desc: "开始",
                id: 5
            },
            {
                desc: "结束",
                id: 6
            },
            {
                desc: "特殊挂起",
                id: 8
            },
            {
                desc: "异常终止",
                id: 9
            }
        ];
    };
    MatchOperationComponent.prototype.selectHobby = function (data) {
        console.log("选择兴趣", data);
    };
    MatchOperationComponent.prototype.load = function () {
        var _this = this;
        console.log("load");
        this.a = new Map();
        this.a.set(this.user.user_name, "");
        this.a.set(this.user.user_password, "");
        var body = this.uti.getParams("LYPC00001", this.a);
        console.log("this.client : " + this.client);
        this.client.service(body).subscribe(function (res) {
            var message = res.result.return;
            var result = _this.uti.parsXml(message);
            _this.conven(result);
        }, function (error) {
            console.log(error);
        });
    };
    MatchOperationComponent.prototype.ngOnInit = function () {
        var _this = this;
        //日期配置
        this.bsConfig = Object.assign({}, { dateInputFormat: "YYYY-MM-DD", showWeekNumbers: false });
        //日期使用中文
        this.localeService.use(this.locale);
        this.onSearch();
        this.resetForm();
        /* imp 自测调试用的测试数据 */
        if (this.testFlag == 1) {
            var testList = [
                {
                    match_id: "1",
                    match_name: "赛事名字",
                    match_start_date: 1554393600000,
                    match_end_date: 1554566400000,
                    match_type: "1",
                    match_writing: "这是文案介绍",
                    match_num: 20,
                    enlist_start_date: 1554134400000,
                    enlist_end_date: 1554307200000,
                    enlist_mode: "0",
                    enlis_phone: "1111111",
                    enlis_person: "联系人",
                    enlis_picture: null,
                    enlis_big_picture: null,
                    enlis_price: 20.0,
                    match_state: 5,
                    enroll_num: 102,
                    Is_enable: 0,
                    creator_id: "",
                    create_date: 1554170855000,
                    modifier_id: null,
                    modify_date: 1554134400000
                },
                {
                    match_id: "2",
                    match_name: "这是第二个赛事名字",
                    match_start_date: 1554393600000,
                    match_end_date: 1554566400000,
                    match_type: "2",
                    match_writing: "这是球队赛的文案介绍",
                    match_num: 20,
                    enlist_start_date: 1554134400000,
                    enlist_end_date: 1554307200000,
                    enlist_mode: "0",
                    enlis_phone: "222222",
                    enlis_person: "联系人2",
                    enlis_picture: "",
                    enlis_big_picture: "",
                    enlis_price: 30.0,
                    match_state: 3,
                    enroll_num: 120,
                    Is_enable: 0,
                    creator_id: "fdasfsdf",
                    create_date: 1553744410000,
                    modifier_id: "dfsdffdsgfd",
                    modify_date: 1553702400000
                },
                {
                    match_id: "3",
                    match_name: "这是第三个赛事名字",
                    match_start_date: 1554393600000,
                    match_end_date: 1554566400000,
                    match_type: "2",
                    match_writing: "这是球队赛的文案介绍",
                    match_num: 20,
                    enlist_start_date: 1554134400000,
                    enlist_end_date: 1554307200000,
                    enlist_mode: "0",
                    enlis_phone: "3333333",
                    enlis_person: "联系人3",
                    enlis_picture: "",
                    enlis_big_picture: "",
                    enlis_price: 30.0,
                    match_state: 1,
                    enroll_num: 12,
                    Is_enable: 0,
                    creator_id: "fdasfsdf",
                    create_date: 1553744770000,
                    modifier_id: "dfsdffdsgfd",
                    modify_date: 1553702400000
                }
            ];
            for (var index = 0; index < 2; index++) {
                testList.push(testList[testList.length - 1]);
            }
            this.conven(testList);
            return;
        }
        var headerss = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();
        headerss.append("Access-Control-Allow-Origin", "*");
        headerss.append("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        headerss.append("Access-Control-Allow-Headers", "Accept, X-Requested-With");
        headerss.append("Access-Control-Allow-Credentials", "true");
        this.soap
            .createClient("../../assets/hsWebService.wsdl", { headers: headerss })
            .then(function (client) {
            _this.client = client;
            console.log("Client", client);
            _this.load();
        })
            .catch(function (err) { return console.log("Error", err); });
    };
    MatchOperationComponent.prototype.conven = function (result) {
        console.log(result);
        // this.js = JSON.parse(result);
        this.matchList = result;
        // this.preloadId(this.matchList);
        /* IMP  */
    };
    MatchOperationComponent.prototype.showList = function () { };
    MatchOperationComponent.prototype.onSearch = function () {
        this.gymId = sessionStorage.getItem("gymId");
        console.log("onsearch");
        /*  this.authService.showFeild(this.gymId).subscribe(
              res => {
                  this.gruadList = res['data'];
                  this.preloadId(this.gruadList);
                  console.log(res);
              }, error => {
                  console.log(error);
              }
          ) */
    };
    MatchOperationComponent.prototype.add = function () {
        // this.gruadone = new GroundSchedulingModel;
        this.display = true;
        this.test = 1;
    };
    MatchOperationComponent.prototype.addOper = function () {
        /*  this.authService.addFeild(this.gruadone).subscribe(
                res => {
                    this.display = false;
                    this.onSearch();
                    console.log(res);
                }, error => {
                    console.log(error);
                }
            ); */
    };
    MatchOperationComponent.prototype.modifyOper = function () {
        this.test = 2;
        if (this.selectedOperation.length > 1) {
            this.msg = "只能选择单个场地修改信息！";
            this.display1 = true;
        }
        else if (this.selectedOperation.length === 0) {
            this.msg = "请选择需要修改的场地！";
            this.display1 = true;
        }
        else {
            /*  this.authService.selectFeild(this.selectedOperation[0]).subscribe(
                      res => {
                          this.gruadone = res['data'];
                          console.log(res);
                          this.display = true;
                      }, error => {
                          console.log(error);
                      }
                  ) */
        }
        console.log(this.selectedOperation);
    };
    MatchOperationComponent.prototype.modifyOk = function () {
        /*  this.authService.modifFeild(this.gruadone).subscribe(
                res => {
                    console.log(res);
                    this.display = false;
                    this.onSearch();
                }, error => {
                    console.log(error);
                }
            ) */
    };
    MatchOperationComponent.prototype.addSite = function () {
        /*  this.authService.addFeild(this.gruadone).subscribe(
                res => {
                    console.log(res);
                    this.display = false;
                    this.onSearch();
                }, error => {
                    console.log(error);
                }
            ) */
    };
    MatchOperationComponent.prototype.checks = function (e) {
        if (e) {
            this.selectedOperation = this.selectedId;
        }
        else {
            this.selectedOperation = [];
        }
        console.log(e);
    };
    MatchOperationComponent.prototype.preloadId = function (matchList) {
        var _this = this;
        matchList.forEach(function (res) {
            _this.selectedId.push(res.match_id);
        });
    };
    MatchOperationComponent.prototype.deleteOper = function () {
        this.msg = "";
        if (this.selectedOperation.length > 0) {
            this.confirmationService.confirm({
                message: "您是否确定删除选中场地?",
                header: "删除场地",
                accept: function () {
                    /*  this.authService.deleteFeild(this.selectedOperation).subscribe(
                                  res => {
                                      console.log(res);
                                      this.selectedOperation = [];
                                      this.onSearch();
                                  }, error => {
                                      console.log(error);
                                  }
                              ) */
                },
                reject: function () { }
            });
        }
        else {
            this.msg = "未选中场地！";
            this.display1 = true;
        }
    };
    /* 报名付费 */
    /*  添加赛事 */
    MatchOperationComponent.prototype.addMatch = function () {
        console.log("添加赛事");
        this.router.navigateByUrl('/workspace/basic-data/add-match');
    };
    /*  编辑赛事 */
    MatchOperationComponent.prototype.modifyMatch = function () {
        console.log("编辑赛事");
    };
    /*  录入成绩 */
    MatchOperationComponent.prototype.entryResult = function () { };
    /*  查询 */
    MatchOperationComponent.prototype.search = function () {
        console.log("查询");
    };
    /* 删除赛事 */
    MatchOperationComponent.prototype.deleteMatch = function () {
        console.log("查询");
    };
    /* 赛事详情 */
    MatchOperationComponent.prototype.detailMatch = function () {
        console.log("赛事详情");
    };
    /* 导出表格 */
    MatchOperationComponent.prototype.derivedForm = function () {
        console.log("导出表格");
    };
    MatchOperationComponent.prototype.showInfo = function () {
        this.msg = "";
        if (this.selectedOperation.length > 1) {
            this.msg = "只能选择单个场地查看信息！";
            this.display1 = true;
        }
        else if (this.selectedOperation.length === 0) {
            this.msg = "请选择需要查看的场地！";
            this.display1 = true;
        }
        else {
            this.test = 3;
            /*  this.authService.selectFeild(this.selectedOperation[0]).subscribe(
                      res => {
                          this.gruadone = res['data'];
                          console.log(res);
                          this.display = true;
                      }, error => {
                          console.log(error);
                      }
                  ) */
        }
        console.log(this.selectedOperation);
    };
    MatchOperationComponent.prototype.selectChange = function () {
        alert(new Date(this.endTime).getTime() +
            "|" +
            new Date(this.beginTime).getTime() +
            "|" +
            this.searchText +
            "|" +
            this.matchStateId +
            "|" +
            this.matchTypeId);
    };
    MatchOperationComponent.prototype.onPage = function (e) {
        if (this.current !== e.page) {
            this.current = e.page;
            this.pageSize = e.rows;
            alert(this.matchStateId + "|" + this.matchTypeId);
            // console.log(this.current + "|" + this.pageSize + "|" + this.totalSize);
        }
    };
    MatchOperationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "match-operation",
            template: __webpack_require__(/*! ./match-operation.component.html */ "./src/app/bz-modules/basic-data/match-operation/match-operation.component.html"),
            styles: [__webpack_require__(/*! ./match-operation.component.scss */ "./src/app/bz-modules/basic-data/match-operation/match-operation.component.scss"), __webpack_require__(/*! ../basic-data.component.scss */ "./src/app/bz-modules/basic-data/basic-data.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsLocaleService"],
            ngx_soap__WEBPACK_IMPORTED_MODULE_3__["NgxSoapService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _common_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"],
            _common_services_utility_service__WEBPACK_IMPORTED_MODULE_9__["UtilityService"]])
    ], MatchOperationComponent);
    return MatchOperationComponent;
}());



/***/ }),

/***/ "./src/app/bz-modules/basic-data/staff-form/staff-form.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/bz-modules/basic-data/staff-form/staff-form.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"header-no-margin margin-bottom-1rem\">{{'staffTable.staffData' | translate}}</h3>\n<form class=\"form-horizontal form-bgcolor\">\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\">{{'staffTable.staffCode' | translate}}：</label>\n    <div class=\"col-sm-6\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"{{'placeholder.staffCode' | translate}}\" #staffCode=\"ngModel\" [(ngModel)]=\"staff.staffCode\" name=\"staffCode\"\n        required minlength=\"2\" maxlength=\"64\" />\n      <div *ngIf=\"staffCode.invalid && (staffCode.dirty || staffCode.touched)\" class=\"text-danger\">\n        <div *ngIf=\"staffCode.errors.required\">\n          {{'errorsTip.staffCodeEmpty' | translate}}\n        </div>\n        <div *ngIf=\"staffCode.errors.minlength\">\n          {{'errorsTip.minlength' | translate}}\n        </div>\n        <div *ngIf=\"staffCode.errors.maxlength\">\n          {{'errorsTip.maxlength64' | translate}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\">{{'personalInfo.name' | translate}}：</label>\n    <div class=\"col-sm-6\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"{{'placeholder.maxlength64' | translate}}\" #staffName=\"ngModel\" [(ngModel)]=\"staff.staffName\" name=\"staffName\"\n        required minlength=\"2\" maxlength=\"64\" />\n      <div *ngIf=\"staffName.invalid && (staffName.dirty || staffName.touched)\" class=\"text-danger\">\n        <div *ngIf=\"staffName.errors.required\">\n          {{'errorsTip.peopleNameEmpty' | translate}}\n        </div>\n        <div *ngIf=\"staffName.errors.minlength\">\n          {{'errorsTip.minlength' | translate}}\n        </div>\n        <div *ngIf=\"staffName.errors.maxlength\">\n          {{'errorsTip.maxlength64' | translate}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\">{{'personalInfo.sex' | translate}}：</label>\n    <div class=\"col-sm-6\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"{{'placeholder.sex' | translate}}\" #gender=\"ngModel\" [(ngModel)]=\"staff.gender\" name=\"gender\" required\n      />\n      <div *ngIf=\"gender.invalid && (gender.dirty || gender.touched)\" class=\"text-danger\">\n        <div *ngIf=\"gender.errors.required\">\n          {{'errorsTip.sexEmpty' | translate}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\">{{'personalInfo.cellphone' | translate}}：</label>\n    <div class=\"col-sm-6\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"{{'placeholder.cellphone' | translate}}\" #cellphone=\"ngModel\" [(ngModel)]=\"staff.cellphone\" name=\"cellphone\"\n        required pattern=\"^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\\d{8}$\" />\n      <div *ngIf=\"cellphone.invalid && (cellphone.dirty || cellphone.touched)\" class=\"text-danger\">\n        <div *ngIf=\"cellphone.errors.required\">\n          {{'errorsTip.cellphoneEmpty' | translate}}\n        </div>\n        <div *ngIf=\"cellphone.errors.pattern\">\n          {{'errorsTip.cellphoneIncorrect' | translate}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\">{{'personalInfo.qqNumber' | translate}}：</label>\n    <div class=\"col-sm-6\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"{{'placeholder.qqNumber' | translate}}\" #qqNumber=\"ngModel\" [(ngModel)]=\"staff.qqNumber\" name=\"qqNumber\"\n        pattern=\"[1-9][0-9]{4,14}\" />\n      <div *ngIf=\"qqNumber.invalid && (qqNumber.dirty || qqNumber.touched)\" class=\"text-danger\">\n        <div *ngIf=\"qqNumber.errors.pattern\">\n          {{'errorsTip.qqIncorrect' | translate}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\">{{'personalInfo.email' | translate}}：</label>\n    <div class=\"col-sm-6\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"{{'placeholder.email' | translate}}\" #email=\"ngModel\" [(ngModel)]=\"staff.email\" name=\"email\" pattern=\"^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$\">\n      <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"text-danger\">\n        <div *ngIf=\"email.errors.pattern\">\n          {{'errorsTip.emailIncorrect' | translate}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\">{{'personalInfo.duty' | translate}}：</label>\n    <div class=\"col-sm-6\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"{{'placeholder.duty' | translate}}\" #duty=\"ngModel\" [(ngModel)]=\"staff.duty\" name=\"duty\" required\n        minlength=\"2\" maxlength=\"32\" />\n      <div *ngIf=\"duty.invalid && (duty.dirty || duty.touched)\" class=\"text-danger\">\n        <div *ngIf=\"duty.errors.required\">\n          {{'errorsTip.dutyEmpry' | translate}}\n        </div>\n        <div *ngIf=\"duty.errors.minlength\">\n          {{'errorsTip.minlength' | translate}}\n        </div>\n        <div *ngIf=\"duty.errors.maxlength\">\n          {{'errorsTip.maxlength32' | translate}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\">{{'remarks' | translate}}：</label>\n    <div class=\"col-sm-6\">\n      <textarea class=\"form-control\" rows=\"3\" placeholder=\"{{'placeholder.maxlength256' | translate}}\" #remark=\"ngModel\" [(ngModel)]=\"staff.remark\" name=\"remark\"\n        required minlength=\"2\" maxlength=\"256\"></textarea>\n      <div *ngIf=\"remark.invalid && (remark.dirty || remark.touched)\" class=\"text-danger\">\n        <div *ngIf=\"remark.errors.minlength\">\n          {{'errorsTip.minlength' | translate}}\n        </div>\n        <div *ngIf=\"remark.errors.maxlength\">\n          {{'errorsTip.maxlength256' | translate}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <div class=\"col-sm-offset-3 col-sm-4\">\n      <button type=\"button\" class=\"btn btn-primary btn-margin-1rem\">{{'save' | translate}}</button>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"backToTable()\">{{'return' | translate}}</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/bz-modules/basic-data/staff-form/staff-form.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/bz-modules/basic-data/staff-form/staff-form.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J6LW1vZHVsZXMvYmFzaWMtZGF0YS9zdGFmZi1mb3JtL3N0YWZmLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/bz-modules/basic-data/staff-form/staff-form.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/bz-modules/basic-data/staff-form/staff-form.component.ts ***!
  \**************************************************************************/
/*! exports provided: StaffFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffFormComponent", function() { return StaffFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_model_staff_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/model/staff-model */ "./src/app/common/model/staff-model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StaffFormComponent = /** @class */ (function () {
    function StaffFormComponent(router, activeRoute) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.staff = new _common_model_staff_model__WEBPACK_IMPORTED_MODULE_2__["StaffModel"]();
    }
    StaffFormComponent.prototype.ngOnInit = function () {
    };
    StaffFormComponent.prototype.backToTable = function () {
        this.router.navigateByUrl('/workspace/basic-data/staff-table/page/1');
    };
    StaffFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'staff-form',
            template: __webpack_require__(/*! ./staff-form.component.html */ "./src/app/bz-modules/basic-data/staff-form/staff-form.component.html"),
            styles: [__webpack_require__(/*! ./staff-form.component.scss */ "./src/app/bz-modules/basic-data/staff-form/staff-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], StaffFormComponent);
    return StaffFormComponent;
}());



/***/ }),

/***/ "./src/app/bz-modules/basic-data/staff-table/staff-table.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/bz-modules/basic-data/staff-table/staff-table.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-table-container\">\n    <p-confirmDialog header=\"{{'confirm' | translate}}\" icon=\"fa fa-question-circle\" #cd>\n        <p-footer>\n            <button type=\"button\" icon=\"fa-check\" class=\"btn btn-primary btn-margin-1rem\" (click)=\"cd.accept()\">{{'accept' | translate}}</button>\n            <button type=\"button\" icon=\"fa-close\" class=\"btn btn-default\" (click)=\"cd.reject()\">{{'reject' | translate}}</button>\n        </p-footer>\n    </p-confirmDialog>\n\n    <h3 class=\"header-no-margin\">{{'staffTable.staffData' | translate}}</h3>\n    <form class=\"form-inline top-filter-form form-bgcolor \" role=\"form\">\n        <div class=\"form-group btn-margin-1rem\">\n            <div class=\"input-group\">\n                <input type=\"text\" class=\"form-control\">\n                <span class=\"input-group-btn\">\n                    <button class=\"btn btn-primary\" type=\"button\">\n                        <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                    </button>\n                </span>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <button class=\"btn btn-primary\" type=\"button\" (click)=\"newStaffForm()\">\n                <i class=\"fa fa-user\" aria-hidden=\"true\"></i> {{'staffTable.newStaff' | translate}}\n            </button>\n        </div>\n    </form>\n    <div class=\"row no-margin\">\n        <div class=\"col-xs-12 form-bgcolor col-padding\">\n            <div class=\"user-item-container\">\n                <p-dataTable expandableRows=\"true\" [value]=\"staffs\" [rows]=\"10\" [paginator]=\"true\" [pageLinks]=\"3\" [rowsPerPageOptions]=\"[5,10,20]\" dataKey=\"index\">\n                    <p-column expander=\"true\" styleClass=\"col-icon\" [style]=\"{'width':'50px'}\"></p-column>\n                    <p-column field=\"staffCode\" header=\"{{'staffTable.staffCode' | translate}}\"></p-column>\n                    <p-column field=\"staffName\" header=\"{{'personalInfo.name' | translate}}\"></p-column>\n                    <p-column field=\"gender\" header=\"{{'personalInfo.sex' | translate}}\"></p-column>\n                    <p-column field=\"cellphone\" header=\"{{'personalInfo.cellphone' | translate}}\" [sortable]=\"true\"></p-column>\n                    <p-column header=\"{{'operate' | translate}}\" [style]=\"{'width':'80px','text-align':'center'}\">\n                        <ng-template let-item=\"rowData\" pTemplate=\"body\">\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"delStaff(item)\">{{'delItem' | translate}}</button>\n                        </ng-template>\n                    </p-column>\n                    <ng-template let-staff pTemplate=\"rowexpansion\">\n                        <div class=\"ui-grid ui-grid-responsive ui-fluid\">\n                            <div class=\"ui-grid-row\">\n                                <div class=\"ui-grid-col-12\">\n                                    <div class=\"ui-grid ui-grid-responsive ui-grid-pad\">\n                                        <div class=\"ui-grid-row\">\n                                            <div class=\"ui-grid-col-2\">工号：</div>\n                                            <div class=\"ui-grid-col-10\">{{staff.staffCode}}</div>\n                                        </div>\n                                        <div class=\"ui-grid-row\">\n                                            <div class=\"ui-grid-col-2\">姓名：</div>\n                                            <div class=\"ui-grid-col-10\">{{staff.staffName}}</div>\n                                        </div>\n                                        <div class=\"ui-grid-row\">\n                                            <div class=\"ui-grid-col-2\">性别：</div>\n                                            <div class=\"ui-grid-col-10\">{{staff.gender}}</div>\n                                        </div>\n                                        <div class=\"ui-grid-row\">\n                                            <div class=\"ui-grid-col-2\">手机号：</div>\n                                            <div class=\"ui-grid-col-10\">{{staff.cellphone}}</div>\n                                        </div>\n                                        <div class=\"ui-grid-row\">\n                                            <div class=\"ui-grid-col-2\">职务：</div>\n                                            <div class=\"ui-grid-col-10\">{{staff.duty}}</div>\n                                        </div>\n                                        <div class=\"ui-grid-row\">\n                                            <div class=\"ui-grid-col-2\">备注：</div>\n                                            <div class=\"ui-grid-col-10\">{{staff.remark}}</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </ng-template>\n                </p-dataTable>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/bz-modules/basic-data/staff-table/staff-table.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/bz-modules/basic-data/staff-table/staff-table.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J6LW1vZHVsZXMvYmFzaWMtZGF0YS9zdGFmZi10YWJsZS9zdGFmZi10YWJsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/bz-modules/basic-data/staff-table/staff-table.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/bz-modules/basic-data/staff-table/staff-table.component.ts ***!
  \****************************************************************************/
/*! exports provided: StaffTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffTableComponent", function() { return StaffTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_staff_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/services/staff.service */ "./src/app/common/services/staff.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StaffTableComponent = /** @class */ (function () {
    function StaffTableComponent(router, activeRoute, staffService, confirmationService, messageService) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.staffService = staffService;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
    }
    StaffTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.staffService.getStaffs().subscribe(function (staffs) {
            _this.staffs = staffs;
        });
    };
    StaffTableComponent.prototype.newStaffForm = function (item) {
        this.router.navigateByUrl('/workspace/basic-data/staff-form');
    };
    StaffTableComponent.prototype.editStaff = function (item) {
        this.newStaffForm(item);
    };
    StaffTableComponent.prototype.delStaff = function (item) {
        var _this = this;
        this.confirmationService.confirm({
            message: '确定要删除吗？',
            accept: function () {
                console.log(item);
                _this.messageService.add({ severity: 'success', summary: '成功', detail: '删除数据成功' });
            }
        });
    };
    StaffTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'staff-table',
            template: __webpack_require__(/*! ./staff-table.component.html */ "./src/app/bz-modules/basic-data/staff-table/staff-table.component.html"),
            styles: [__webpack_require__(/*! ./staff-table.component.scss */ "./src/app/bz-modules/basic-data/staff-table/staff-table.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _common_services_staff_service__WEBPACK_IMPORTED_MODULE_2__["StaffService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"],
            primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], StaffTableComponent);
    return StaffTableComponent;
}());



/***/ }),

/***/ "./src/app/bz-modules/basic-data/vendor-form/vendor-form.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/bz-modules/basic-data/vendor-form/vendor-form.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"header-no-margin margin-bottom-1rem\">{{'vendorTable.vendorData' | translate}}</h3>\n<form class=\"form-horizontal form-bgcolor\" #vendorForm=\"ngForm\">\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\">{{'vendorTable.vendorName' | translate}}：</label>\n    <div class=\"col-sm-6\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"{{'placeholder.maxlength64' | translate}}\" #vendorName=\"ngModel\" [(ngModel)]=\"vendor.vendorName\" name=\"vendorName\"\n        required minlength=\"2\" maxlength=\"64\" />\n      <div *ngIf=\"vendorName.invalid && (vendorName.dirty || vendorName.touched)\" class=\"text-danger\">\n        <div *ngIf=\"vendorName.errors.required\">\n          {{'errorsTip.nameEmpty' | translate}}\n        </div>\n        <div *ngIf=\"vendorName.errors.minlength\">\n          {{'errorsTip.minlength' | translate}}\n        </div>\n        <div *ngIf=\"vendorName.errors.maxlength\">\n          {{'errorsTip.maxlength64' | translate}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\">{{'personalInfo.address' | translate}}：</label>\n    <div class=\"col-sm-6\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"{{'placeholder.maxlength128' | translate}}\" #addr=\"ngModel\" [(ngModel)]=\"vendor.addr\" name=\"addr\" required\n        minlength=\"2\" maxlength=\"128\">\n      <div *ngIf=\"addr.invalid && (addr.dirty || addr.touched)\" class=\"text-danger\">\n        <div *ngIf=\"addr.errors.required\">\n          {{'errorsTip.addressEmpty' | translate}}\n        </div>\n        <div *ngIf=\"addr.errors.minlength\">\n          {{'errorsTip.minlength' | translate}}\n        </div>\n        <div *ngIf=\"addr.errors.maxlength\">\n          {{'errorsTip.maxlength128' | translate}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\">{{'personalInfo.postCode' | translate}}：</label>\n    <div class=\"col-sm-6\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"{{'placeholder.postCode' | translate}}\" #postCode=\"ngModel\" [(ngModel)]=\"vendor.postCode\" name=\"postCode\"\n        pattern=\"[1-9]\\d{5}(?!\\d)\">\n      <div *ngIf=\"postCode.invalid && (postCode.dirty || postCode.touched)\" class=\"text-danger\">\n        <div *ngIf=\"postCode.errors.pattern\">\n          {{'errorsTip.postCodeIncorrect' | translate}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\">{{'personalInfo.telephone' | translate}}：</label>\n    <div class=\"col-sm-6\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"{{'placeholder.telephone' | translate}}\" #telephone=\"ngModel\" [(ngModel)]=\"vendor.telephone\" name=\"telephone\"\n        pattern=\"^(0[0-9]{2,3}/-)?([2-9][0-9]{6,7})+(/-[0-9]{1,4})?$\">\n      <div *ngIf=\"telephone.invalid && (telephone.dirty || telephone.touched)\" class=\"text-danger\">\n        <div *ngIf=\"telephone.errors.pattern\">\n          {{'errorsTip.telephoneIncorrect' | translate}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\">{{'personalInfo.fax' | translate}}：</label>\n    <div class=\"col-sm-6\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"{{'placeholder.fax' | translate}}\" #fax=\"ngModel\" [(ngModel)]=\"vendor.fax\" name=\"fax\" pattern=\"^[+]{0,1}(\\d){1,3}[ ]?([-]?((\\d)|[ ]){1,12})+$\">\n      <div *ngIf=\"fax.invalid && (fax.dirty || fax.touched)\" class=\"text-danger\">\n        <div *ngIf=\"fax.errors.pattern\">\n          {{'errorsTip.faxIncorrect' | translate}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\">{{'personalInfo.email' | translate}}：</label>\n    <div class=\"col-sm-6\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"{{'placeholder.email' | translate}}\" #email=\"ngModel\" [(ngModel)]=\"vendor.email\" name=\"email\" pattern=\"^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$\">\n      <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"text-danger\">\n        <div *ngIf=\"email.errors.pattern\">\n          {{'errorsTip.emailIncorrect' | translate}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\">{{'personalInfo.contact' | translate}}：</label>\n    <div class=\"col-sm-6\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"{{'placeholder.contact' | translate}}\" #contact=\"ngModel\" [(ngModel)]=\"vendor.contact\" name=\"contact\"\n        required minlength=\"2\" maxlength=\"32\" />\n      <div *ngIf=\"contact.invalid && (contact.dirty || contact.touched)\" class=\"text-danger\">\n        <div *ngIf=\"contact.errors.required\">\n          {{'errorsTip.peopleNameEmpty' | translate}}\n        </div>\n        <div *ngIf=\"contact.errors.minlength\">\n          {{'errorsTip.minlength' | translate}}\n        </div>\n        <div *ngIf=\"contact.errors.maxlength\">\n          {{'errorsTip.maxlength32' | translate}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\">{{'personalInfo.duty' | translate}}：</label>\n    <div class=\"col-sm-6\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"{{'placeholder.duty' | translate}}\" #duty=\"ngModel\" [(ngModel)]=\"vendor.duty\" name=\"duty\" required\n        minlength=\"2\" maxlength=\"32\" />\n      <div *ngIf=\"duty.invalid && (duty.dirty || duty.touched)\" class=\"text-danger\">\n        <div *ngIf=\"duty.errors.required\">\n          {{'errorsTip.dutyEmpry' | translate}}\n        </div>\n        <div *ngIf=\"duty.errors.minlength\">\n          {{'errorsTip.minlength' | translate}}\n        </div>\n        <div *ngIf=\"duty.errors.maxlength\">\n          {{'errorsTip.maxlength32' | translate}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\">{{'personalInfo.cellphone' | translate}}：</label>\n    <div class=\"col-sm-6\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"{{'placeholder.cellphone' | translate}}\" #cellphone=\"ngModel\" [(ngModel)]=\"vendor.cellphone\" name=\"cellphone\"\n        required pattern=\"^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\\d{8}$\" />\n      <div *ngIf=\"cellphone.invalid && (cellphone.dirty || cellphone.touched)\" class=\"text-danger\">\n        <div *ngIf=\"cellphone.errors.required\">\n          {{'errorsTip.cellphoneEmpty' | translate}}\n        </div>\n        <div *ngIf=\"cellphone.errors.pattern\">\n          {{'errorsTip.cellphoneIncorrect' | translate}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\">{{'remarks' | translate}}：</label>\n    <div class=\"col-sm-6\">\n      <textarea class=\"form-control\" rows=\"3\" placeholder=\"{{'placeholder.maxlength256' | translate}}\" #remark=\"ngModel\" [(ngModel)]=\"vendor.remark\" name=\"remark\"\n        required minlength=\"2\" maxlength=\"256\"></textarea>\n      <div *ngIf=\"remark.invalid && (remark.dirty || remark.touched)\" class=\"text-danger\">\n        <div *ngIf=\"remark.errors.minlength\">\n          {{'errorsTip.minlength' | translate}}\n        </div>\n        <div *ngIf=\"remark.errors.maxlength\">\n          {{'errorsTip.maxlength256' | translate}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <div class=\"col-sm-offset-3 col-sm-6\">\n      <button type=\"button\" class=\"btn btn-primary btn-margin-1rem\">{{'save' | translate}}</button>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"backToTable()\">{{'return' | translate}}</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/bz-modules/basic-data/vendor-form/vendor-form.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/bz-modules/basic-data/vendor-form/vendor-form.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J6LW1vZHVsZXMvYmFzaWMtZGF0YS92ZW5kb3ItZm9ybS92ZW5kb3ItZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/bz-modules/basic-data/vendor-form/vendor-form.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/bz-modules/basic-data/vendor-form/vendor-form.component.ts ***!
  \****************************************************************************/
/*! exports provided: VendorFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorFormComponent", function() { return VendorFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_model_vendor_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/model/vendor-model */ "./src/app/common/model/vendor-model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VendorFormComponent = /** @class */ (function () {
    function VendorFormComponent(router, activeRoute) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.vendor = new _common_model_vendor_model__WEBPACK_IMPORTED_MODULE_2__["VendorModel"]();
    }
    VendorFormComponent.prototype.ngOnInit = function () {
    };
    VendorFormComponent.prototype.backToTable = function () {
        this.router.navigateByUrl('/workspace/basic-data/vendor-table/page/1');
    };
    VendorFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vendor-form',
            template: __webpack_require__(/*! ./vendor-form.component.html */ "./src/app/bz-modules/basic-data/vendor-form/vendor-form.component.html"),
            styles: [__webpack_require__(/*! ./vendor-form.component.scss */ "./src/app/bz-modules/basic-data/vendor-form/vendor-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], VendorFormComponent);
    return VendorFormComponent;
}());



/***/ }),

/***/ "./src/app/bz-modules/basic-data/vendor-table/vendor-table.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/bz-modules/basic-data/vendor-table/vendor-table.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-table-container\">\n    <p-confirmDialog header=\"{{'confirm' | translate}}\" icon=\"fa fa-question-circle\" #cd>\n        <p-footer>\n            <button type=\"button\" icon=\"fa-check\" class=\"btn btn-primary btn-margin-1rem\" (click)=\"cd.accept()\">{{'accept' | translate}}</button>\n            <button type=\"button\" icon=\"fa-close\" class=\"btn btn-default\" (click)=\"cd.reject()\">{{'reject' | translate}}</button>\n        </p-footer>\n    </p-confirmDialog>\n\n    <h3 class=\"header-no-margin\">{{'vendorTable.vendorData' | translate}}</h3>\n    <form class=\"form-inline top-filter-form form-bgcolor\" role=\"form\">\n        <div class=\"form-group btn-margin-1rem\">\n            <div class=\"input-group\">\n                <input type=\"text\" class=\"form-control\">\n                <span class=\"input-group-btn\">\n                    <button class=\"btn btn-primary\" type=\"button\">\n                        <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                    </button>\n                </span>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <button class=\"btn btn-primary\" type=\"button\" (click)=\"newVendorForm()\">\n                <i class=\"fa fa-user\" aria-hidden=\"true\"></i>{{'vendorTable.newVendor' | translate}}\n            </button>\n        </div>\n    </form>\n    <div class=\"row no-margin\">\n        <div class=\"col-xs-12 form-bgcolor col-padding\">\n            <div class=\"user-item-container\">\n                <p-dataTable expandableRows=\"true\" [value]=\"vendors\" [rows]=\"10\" [paginator]=\"true\" [pageLinks]=\"3\" [rowsPerPageOptions]=\"[5,10,20]\"\n                    dataKey=\"index\">\n                    <p-column expander=\"true\" styleClass=\"col-icon\" [style]=\"{'width':'50px'}\"></p-column>\n                    <p-column field=\"vendorName\" header=\"{{'vendorTable.vendorName' | translate}}\" [style]=\"{'width':'250px'}\"></p-column>\n                    <p-column field=\"addr\" header=\"{{'personalInfo.address' | translate}}\"></p-column>\n                    <p-column field=\"contact\" header=\"{{'personalInfo.contact' | translate}}\" [style]=\"{'width':'80px'}\"></p-column>\n                    <p-column field=\"cellphone\" header=\"{{'personalInfo.cellphone' | translate}}\" [style]=\"{'width':'120px'}\"></p-column>\n                    <p-column header=\"{{'operate' | translate}}\" [style]=\"{'width':'80px','text-align':'center'}\">\n                        <ng-template let-item=\"rowData\" pTemplate=\"body\">\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"delVendor(item)\">{{'delItem' | translate}}</button>\n                        </ng-template>\n                    </p-column>\n                    <ng-template let-vendor pTemplate=\"rowexpansion\">\n                        <div class=\"ui-grid ui-grid-responsive ui-fluid\">\n                            <div class=\"ui-grid-row\">\n                                <div class=\"ui-grid-col-12\">\n                                    <div class=\"ui-grid ui-grid-responsive ui-grid-pad\">\n                                        <div class=\"ui-grid-row\">\n                                            <div class=\"ui-grid-col-2\">名称：</div>\n                                            <div class=\"ui-grid-col-10\">{{vendor.vendorName}}</div>\n                                        </div>\n                                        <div class=\"ui-grid-row\">\n                                            <div class=\"ui-grid-col-2\">地址：</div>\n                                            <div class=\"ui-grid-col-10\">{{vendor.addr}}</div>\n                                        </div>\n                                        <div class=\"ui-grid-row\">\n                                            <div class=\"ui-grid-col-2\">电话：</div>\n                                            <div class=\"ui-grid-col-10\">{{vendor.telephone}}</div>\n                                        </div>\n                                        <div class=\"ui-grid-row\">\n                                            <div class=\"ui-grid-col-2\">传真：</div>\n                                            <div class=\"ui-grid-col-10\">{{vendor.fax}}</div>\n                                        </div>\n                                        <div class=\"ui-grid-row\">\n                                            <div class=\"ui-grid-col-2\">邮编：</div>\n                                            <div class=\"ui-grid-col-10\">{{vendor.postCode}}</div>\n                                        </div>\n                                        <div class=\"ui-grid-row\">\n                                            <div class=\"ui-grid-col-2\">Email：</div>\n                                            <div class=\"ui-grid-col-10\">{{vendor.email}}</div>\n                                        </div>\n                                        <div class=\"ui-grid-row\">\n                                            <div class=\"ui-grid-col-2\">联系人：</div>\n                                            <div class=\"ui-grid-col-10\">{{vendor.contact}}</div>\n                                        </div>\n                                        <div class=\"ui-grid-row\">\n                                            <div class=\"ui-grid-col-2\">手机号：</div>\n                                            <div class=\"ui-grid-col-10\">{{vendor.cellphone}}</div>\n                                        </div>\n                                        <div class=\"ui-grid-row\">\n                                            <div class=\"ui-grid-col-2\">职务：</div>\n                                            <div class=\"ui-grid-col-10\">{{vendor.duty}}</div>\n                                        </div>\n                                        <div class=\"ui-grid-row\">\n                                            <div class=\"ui-grid-col-2\">创建时间：</div>\n                                            <div class=\"ui-grid-col-10\">{{vendor.createTime | date:'yyyy-MM-dd HH:mm:ss'}}</div>\n                                        </div>\n                                        <div class=\"ui-grid-row\">\n                                            <div class=\"ui-grid-col-2\">备注：</div>\n                                            <div class=\"ui-grid-col-10\">{{vendor.remark}}</div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </ng-template>\n                </p-dataTable>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/bz-modules/basic-data/vendor-table/vendor-table.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/bz-modules/basic-data/vendor-table/vendor-table.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J6LW1vZHVsZXMvYmFzaWMtZGF0YS92ZW5kb3ItdGFibGUvdmVuZG9yLXRhYmxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/bz-modules/basic-data/vendor-table/vendor-table.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/bz-modules/basic-data/vendor-table/vendor-table.component.ts ***!
  \******************************************************************************/
/*! exports provided: VendorTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorTableComponent", function() { return VendorTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_services_vendor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/services/vendor.service */ "./src/app/common/services/vendor.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VendorTableComponent = /** @class */ (function () {
    function VendorTableComponent(router, activeRoute, vendorService, confirmationService, messageService) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.vendorService = vendorService;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
    }
    VendorTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vendorService.getVendors().subscribe(function (vendors) {
            _this.vendors = vendors;
        });
    };
    VendorTableComponent.prototype.newVendorForm = function (item) {
        this.router.navigateByUrl('/workspace/basic-data/vendor-form');
    };
    VendorTableComponent.prototype.editVendor = function (item) {
        this.newVendorForm(item);
    };
    VendorTableComponent.prototype.delVendor = function (item) {
        var _this = this;
        this.confirmationService.confirm({
            message: '确定要删除吗？',
            accept: function () {
                console.log(item);
                _this.messageService.add({ severity: 'success', summary: '成功', detail: '删除数据成功' });
            }
        });
    };
    VendorTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'vendor-table',
            template: __webpack_require__(/*! ./vendor-table.component.html */ "./src/app/bz-modules/basic-data/vendor-table/vendor-table.component.html"),
            styles: [__webpack_require__(/*! ./vendor-table.component.scss */ "./src/app/bz-modules/basic-data/vendor-table/vendor-table.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _common_services_vendor_service__WEBPACK_IMPORTED_MODULE_4__["VendorService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
    ], VendorTableComponent);
    return VendorTableComponent;
}());



/***/ }),

/***/ "./src/app/bz-modules/basic-data/warehouse-form/warehouse-form.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/bz-modules/basic-data/warehouse-form/warehouse-form.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"header-no-margin margin-bottom-1rem\">{{'warehouseTable.warehouseData' | translate}}</h3>\n<form class=\"form-horizontal form-bgcolor\">\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\">{{'warehouseTable.warehouseName' | translate}}：</label>\n    <div class=\"col-sm-4\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\">{{'warehouseTable.responsible' | translate}}：</label>\n    <div class=\"col-sm-4\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\">{{'personalInfo.mobilePhone' | translate}}：</label>\n    <div class=\"col-sm-4\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\">{{'personalInfo.telephone' | translate}}：</label>\n    <div class=\"col-sm-4\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\">{{'warehouseTable.warehouseAddress' | translate}}：</label>\n    <div class=\"col-sm-4\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-3 control-label\">{{'warehouseTable.remarks' | translate}}：</label>\n    <div class=\"col-sm-4\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <div class=\"col-sm-offset-3 col-sm-4\">\n      <button type=\"button\" class=\"btn btn-primary btn-margin-1rem\">{{'save' | translate}}</button>\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"backToTable()\">{{'return' | translate}}</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/bz-modules/basic-data/warehouse-form/warehouse-form.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/bz-modules/basic-data/warehouse-form/warehouse-form.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J6LW1vZHVsZXMvYmFzaWMtZGF0YS93YXJlaG91c2UtZm9ybS93YXJlaG91c2UtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/bz-modules/basic-data/warehouse-form/warehouse-form.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/bz-modules/basic-data/warehouse-form/warehouse-form.component.ts ***!
  \**********************************************************************************/
/*! exports provided: WarehouseFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseFormComponent", function() { return WarehouseFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WarehouseFormComponent = /** @class */ (function () {
    function WarehouseFormComponent(router, activeRoute) {
        this.router = router;
        this.activeRoute = activeRoute;
    }
    WarehouseFormComponent.prototype.ngOnInit = function () { };
    WarehouseFormComponent.prototype.backToTable = function () {
        this.router.navigateByUrl("/workspace/basic-data/warehouse-table/page/1");
    };
    WarehouseFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "warehouse-form",
            template: __webpack_require__(/*! ./warehouse-form.component.html */ "./src/app/bz-modules/basic-data/warehouse-form/warehouse-form.component.html"),
            styles: [__webpack_require__(/*! ./warehouse-form.component.scss */ "./src/app/bz-modules/basic-data/warehouse-form/warehouse-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], WarehouseFormComponent);
    return WarehouseFormComponent;
}());



/***/ }),

/***/ "./src/app/bz-modules/basic-data/warehouse-map/warehouse-map.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/bz-modules/basic-data/warehouse-map/warehouse-map.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xs-12\">\r\n    <div echarts [options]=\"options\" class=\"nf-chart\" (chartInit)=\"onChartInit($event)\" (chartClick)=\"onChartClick($event)\"></div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/bz-modules/basic-data/warehouse-map/warehouse-map.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/bz-modules/basic-data/warehouse-map/warehouse-map.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nf-chart {\n  width: 100%;\n  height: 500px;\n  float: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnotbW9kdWxlcy9iYXNpYy1kYXRhL3dhcmVob3VzZS1tYXAvRjpcXFJvY2t3b29kXFx3b3Jrc3BhY2VcXE9wZW5XTVMtbmV3L3NyY1xcYXBwXFxiei1tb2R1bGVzXFxiYXNpYy1kYXRhXFx3YXJlaG91c2UtbWFwXFx3YXJlaG91c2UtbWFwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVTtFQUNWLGFBQVk7RUFDWixXQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9iei1tb2R1bGVzL2Jhc2ljLWRhdGEvd2FyZWhvdXNlLW1hcC93YXJlaG91c2UtbWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5mLWNoYXJ0e1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDo1MDBweDtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/bz-modules/basic-data/warehouse-map/warehouse-map.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/bz-modules/basic-data/warehouse-map/warehouse-map.component.ts ***!
  \********************************************************************************/
/*! exports provided: WarehouseMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseMapComponent", function() { return WarehouseMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WarehouseMapComponent = /** @class */ (function () {
    function WarehouseMapComponent() {
        this.options = {}; //不可设置为null，设置为null会导致图表不能渲染
    }
    WarehouseMapComponent.prototype.ngOnInit = function () { };
    WarehouseMapComponent.prototype.onChartInit = function (ec) {
        this.echartInstance = ec;
        this.options = {
            title: [
                {
                    textStyle: {
                        color: "#000",
                        fontSize: 18
                    },
                    subtext: "",
                    text: "仓库分布图",
                    top: "auto",
                    subtextStyle: {
                        color: "#333",
                        fontSize: 12
                    },
                    left: "auto"
                }
            ],
            legend: [
                {
                    selectedMode: "multiple",
                    top: "top",
                    orient: "horizontal",
                    data: [""],
                    left: "center",
                    show: true
                }
            ],
            backgroundColor: "#fff",
            series: [
                {
                    mapType: "中国",
                    data: [],
                    name: "",
                    symbol: "circle",
                    type: "map",
                    roam: true
                }
            ]
        };
    };
    WarehouseMapComponent.prototype.onChartClick = function ($event) {
        console.log($event);
    };
    WarehouseMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "warehouse-map",
            template: __webpack_require__(/*! ./warehouse-map.component.html */ "./src/app/bz-modules/basic-data/warehouse-map/warehouse-map.component.html"),
            styles: [__webpack_require__(/*! ./warehouse-map.component.scss */ "./src/app/bz-modules/basic-data/warehouse-map/warehouse-map.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WarehouseMapComponent);
    return WarehouseMapComponent;
}());



/***/ }),

/***/ "./src/app/bz-modules/basic-data/warehouse-table/warehouse-table.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/bz-modules/basic-data/warehouse-table/warehouse-table.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-table-container\">\n    <h3 class=\"header-no-margin margin-bottom-1rem\">{{'warehouseTable.baseData' | translate}}</h3>\n    <div class=\"row form-bgcolor  no-margin\">\n        <div class=\"col-xs-3\">\n            <div class=\"warehouse-left-tree-container\">\n                <p-tree [value]=\"warehouses\" selectionMode=\"single\" [(selection)]=\"selected\"></p-tree>\n            </div>\n        </div>\n        <div class=\"col-xs-9\">\n            <form class=\"form-inline top-filter-form\" role=\"form\">\n                <div class=\"form-group\">\n                    <label>{{'warehouseTable.name' | translate}}：</label>\n                    <p class=\"form-control-static\">京东南京一号仓</p>\n                </div>\n                <div class=\"form-group\">\n                    <label>{{'warehouseTable.address' | translate}}：</label>\n                    <p class=\"form-control-static\">江苏省南京市江宁区</p>\n                </div>\n                <div class=\"form-group\">\n                    <label>{{'warehouseTable.responsible' | translate}}：</label>\n                    <p class=\"form-control-static\">Admin</p>\n                </div>\n                <div class=\"form-group pull-right\">\n                    <button class=\"btn btn-primary btn-margin-1rem\" (click)=\"editWarehouse()\">{{'edit' | translate}}</button>\n                    <button class=\"btn btn-primary\" (click)=\"newWarehouse()\">{{'warehouseTable.createWarehouse' | translate}}</button>\n                </div>\n            </form>\n            <div class=\"storage-location-container\">\n                <h4>京东南京一号库</h4>\n                <div class=\"storage-partition\">\n                    <div class=\"storage-title-container\">A区1层</div>\n                    <div class=\"storage-row-container\">\n                        <div class=\"storage-row\">\n                            <div class=\"storage-col storage-col-empty\">A1001</div>\n                            <div class=\"storage-col storage-col-empty\">A1002</div>\n                            <div class=\"storage-col storage-col-empty\">A1003</div>\n                            <div class=\"storage-col storage-col-empty\">A1004</div>\n                            <div class=\"storage-col storage-col-full\">A1005</div>\n                            <div class=\"storage-col storage-col-empty\">A1006</div>\n                            <div class=\"storage-col storage-col-empty\">A1007</div>\n                            <div class=\"storage-col storage-col-empty\">A1008</div>\n                            <div class=\"storage-col storage-col-empty\">A1009</div>\n                            <div class=\"storage-col storage-col-empty\">A1010</div>\n                            <div class=\"storage-col storage-col-full\">A1011</div>\n                        </div>\n                        <div class=\"storage-row\">\n                            <div class=\"storage-col storage-col-empty\">A1012</div>\n                            <div class=\"storage-col storage-col-empty\">A1013</div>\n                            <div class=\"storage-col storage-col-empty\">A1014</div>\n                            <div class=\"storage-col storage-col-full\">A1015</div>\n                            <div class=\"storage-col storage-col-full\">A1016</div>\n                            <div class=\"storage-col storage-col-empty\">A1017</div>\n                            <div class=\"storage-col storage-col-empty\">A1018</div>\n                            <div class=\"storage-col storage-col-full\">A1019</div>\n                            <div class=\"storage-col storage-col-full\">A1020</div>\n                            <div class=\"storage-col storage-col-empty\">A1021</div>\n                            <div class=\"storage-col storage-col-empty\">A1022</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"storage-partition\">\n                    <div class=\"storage-title-container\">A区2层</div>\n                    <div class=\"storage-row-container\">\n                        <div class=\"storage-row\">\n                            <div class=\"storage-col storage-col-empty\">A2001</div>\n                            <div class=\"storage-col storage-col-empty\">A2002</div>\n                            <div class=\"storage-col storage-col-empty\">A2003</div>\n                            <div class=\"storage-col storage-col-empty\">A2004</div>\n                            <div class=\"storage-col storage-col-empty\">A2005</div>\n                            <div class=\"storage-col storage-col-empty\">A2006</div>\n                            <div class=\"storage-col storage-col-full\">A2007</div>\n                            <div class=\"storage-col storage-col-empty\">A2008</div>\n                            <div class=\"storage-col storage-col-empty\">A2009</div>\n                            <div class=\"storage-col storage-col-empty\">A2010</div>\n                            <div class=\"storage-col storage-col-empty\">A2011</div>\n                        </div>\n                        <div class=\"storage-row\">\n                            <div class=\"storage-col storage-col-full\">A2012</div>\n                            <div class=\"storage-col storage-col-empty\">A2013</div>\n                            <div class=\"storage-col storage-col-empty\">A2014</div>\n                            <div class=\"storage-col storage-col-empty\">A2015</div>\n                            <div class=\"storage-col storage-col-empty\">A2016</div>\n                            <div class=\"storage-col storage-col-full\">A2017</div>\n                            <div class=\"storage-col storage-col-empty\">A2018</div>\n                            <div class=\"storage-col storage-col-empty\">A2019</div>\n                            <div class=\"storage-col storage-col-empty\">A2020</div>\n                            <div class=\"storage-col storage-col-empty\">A2021</div>\n                            <div class=\"storage-col storage-col-empty\">A2022</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"storage-partition\">\n                    <div class=\"storage-title-container\">A区3层</div>\n                    <div class=\"storage-row-container\">\n                        <div class=\"storage-row\">\n                            <div class=\"storage-col storage-col-empty\">A3001</div>\n                            <div class=\"storage-col storage-col-empty\">A3002</div>\n                            <div class=\"storage-col storage-col-empty\">A3003</div>\n                            <div class=\"storage-col storage-col-empty\">A3004</div>\n                            <div class=\"storage-col storage-col-empty\">A3005</div>\n                            <div class=\"storage-col storage-col-full\">A3006</div>\n                            <div class=\"storage-col storage-col-empty\">A3007</div>\n                            <div class=\"storage-col storage-col-empty\">A3008</div>\n                            <div class=\"storage-col storage-col-full\">A3009</div>\n                            <div class=\"storage-col storage-col-empty\">A3010</div>\n                            <div class=\"storage-col storage-col-empty\">A3011</div>\n                        </div>\n                        <div class=\"storage-row\">\n                            <div class=\"storage-col storage-col-full\">A3012</div>\n                            <div class=\"storage-col storage-col-empty\">A3013</div>\n                            <div class=\"storage-col storage-col-empty\">A3014</div>\n                            <div class=\"storage-col storage-col-empty\">A3015</div>\n                            <div class=\"storage-col storage-col-full\">A3016</div>\n                            <div class=\"storage-col storage-col-empty\">A3017</div>\n                            <div class=\"storage-col storage-col-empty\">A3018</div>\n                            <div class=\"storage-col storage-col-full\">A3019</div>\n                            <div class=\"storage-col storage-col-empty\">A3020</div>\n                            <div class=\"storage-col storage-col-empty\">A3021</div>\n                            <div class=\"storage-col storage-col-empty\">A3022</div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/bz-modules/basic-data/warehouse-table/warehouse-table.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/bz-modules/basic-data/warehouse-table/warehouse-table.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".warehouse-left-tree-container {\n  padding: 15px 0px; }\n\n.storage-location-container {\n  border: 1px #ccc solid;\n  min-height: 600px;\n  background-color: #fafafa;\n  padding: 0px 15px;\n  margin-top: 15px; }\n\n.storage-location-container .storage-partition {\n    width: 100%;\n    height: 62px;\n    margin: 15px 0px; }\n\n.storage-location-container .storage-partition .storage-title-container {\n      float: left;\n      width: 100px;\n      height: 60px;\n      vertical-align: middle;\n      text-align: center;\n      line-height: 4;\n      border: 1px #ccc solid;\n      font-weight: bold; }\n\n.storage-location-container .storage-partition .storage-row-container {\n      width: 100%; }\n\n.storage-location-container .storage-partition .storage-row-container .storage-row {\n        width: 100%;\n        height: 100%; }\n\n.storage-location-container .storage-partition .storage-row-container .storage-row .storage-col {\n          border: 1px #ccc solid;\n          width: 50px;\n          height: 30px;\n          float: left;\n          text-align: center;\n          vertical-align: middle;\n          line-height: 30px;\n          font-weight: bold;\n          color: #fff; }\n\n.storage-location-container .storage-partition .storage-row-container .storage-row .storage-col-empty {\n          background-color: #eabc7f; }\n\n.storage-location-container .storage-partition .storage-row-container .storage-row .storage-col-full {\n          background-color: #39b9c6; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnotbW9kdWxlcy9iYXNpYy1kYXRhL3dhcmVob3VzZS10YWJsZS9GOlxcUm9ja3dvb2RcXHdvcmtzcGFjZVxcT3BlbldNUy1uZXcvc3JjXFxhcHBcXGJ6LW1vZHVsZXNcXGJhc2ljLWRhdGFcXHdhcmVob3VzZS10YWJsZVxcd2FyZWhvdXNlLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUxwQjtJQU9RLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCLEVBQUE7O0FBVHhCO01BV1ksV0FBVztNQUNYLFlBQVk7TUFDWixZQUFZO01BQ1osc0JBQXNCO01BQ3RCLGtCQUFrQjtNQUNsQixjQUFjO01BQ2Qsc0JBQXNCO01BQ3RCLGlCQUFpQixFQUFBOztBQWxCN0I7TUFxQlksV0FBVyxFQUFBOztBQXJCdkI7UUF1QmdCLFdBQVc7UUFDWCxZQUFZLEVBQUE7O0FBeEI1QjtVQTBCb0Isc0JBQXNCO1VBQ3RCLFdBQVc7VUFDWCxZQUFZO1VBQ1osV0FBVztVQUNYLGtCQUFrQjtVQUNsQixzQkFBc0I7VUFDdEIsaUJBQWlCO1VBQ2pCLGlCQUFpQjtVQUNqQixXQUFXLEVBQUE7O0FBbEMvQjtVQXFDb0IseUJBQXlCLEVBQUE7O0FBckM3QztVQXdDb0IseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9iei1tb2R1bGVzL2Jhc2ljLWRhdGEvd2FyZWhvdXNlLXRhYmxlL3dhcmVob3VzZS10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53YXJlaG91c2UtbGVmdC10cmVlLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTVweCAwcHg7XG59XG5cbi5zdG9yYWdlLWxvY2F0aW9uLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyOiAxcHggI2NjYyBzb2xpZDtcbiAgICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgLnN0b3JhZ2UtcGFydGl0aW9ue1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA2MnB4O1xuICAgICAgICBtYXJnaW46IDE1cHggMHB4O1xuICAgICAgICAuc3RvcmFnZS10aXRsZS1jb250YWluZXIge1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQ7XG4gICAgICAgICAgICBib3JkZXI6IDFweCAjY2NjIHNvbGlkO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgLnN0b3JhZ2Utcm93LWNvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIC5zdG9yYWdlLXJvd3tcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgLnN0b3JhZ2UtY29sIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggI2NjYyBzb2xpZDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnN0b3JhZ2UtY29sLWVtcHR5e1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFiYzdmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc3RvcmFnZS1jb2wtZnVsbHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM5YjljNjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/bz-modules/basic-data/warehouse-table/warehouse-table.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/bz-modules/basic-data/warehouse-table/warehouse-table.component.ts ***!
  \************************************************************************************/
/*! exports provided: WarehouseTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseTableComponent", function() { return WarehouseTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_warehouse_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/services/warehouse.service */ "./src/app/common/services/warehouse.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WarehouseTableComponent = /** @class */ (function () {
    function WarehouseTableComponent(router, activeRoute, warehouseService) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.warehouseService = warehouseService;
    }
    WarehouseTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.warehouseService.getWarehouses().subscribe(function (warehouses) {
            _this.warehouses = warehouses;
        });
    };
    WarehouseTableComponent.prototype.newWarehouse = function () {
        this.router.navigateByUrl('/workspace/basic-data/warehouse-form');
    };
    WarehouseTableComponent.prototype.editWarehouse = function () {
        this.newWarehouse();
    };
    WarehouseTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'warehouse-table',
            template: __webpack_require__(/*! ./warehouse-table.component.html */ "./src/app/bz-modules/basic-data/warehouse-table/warehouse-table.component.html"),
            styles: [__webpack_require__(/*! ./warehouse-table.component.scss */ "./src/app/bz-modules/basic-data/warehouse-table/warehouse-table.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _common_services_warehouse_service__WEBPACK_IMPORTED_MODULE_2__["WarehouseService"]])
    ], WarehouseTableComponent);
    return WarehouseTableComponent;
}());



/***/ }),

/***/ "./src/app/common/model/customer-model.ts":
/*!************************************************!*\
  !*** ./src/app/common/model/customer-model.ts ***!
  \************************************************/
/*! exports provided: CustomerModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModel", function() { return CustomerModel; });
var CustomerModel = /** @class */ (function () {
    function CustomerModel() {
    }
    return CustomerModel;
}());



/***/ }),

/***/ "./src/app/common/model/match.mode.ts":
/*!********************************************!*\
  !*** ./src/app/common/model/match.mode.ts ***!
  \********************************************/
/*! exports provided: MatchModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchModel", function() { return MatchModel; });
var MatchModel = /** @class */ (function () {
    function MatchModel() {
    }
    return MatchModel;
}());



/***/ }),

/***/ "./src/app/common/model/staff-model.ts":
/*!*********************************************!*\
  !*** ./src/app/common/model/staff-model.ts ***!
  \*********************************************/
/*! exports provided: StaffModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffModel", function() { return StaffModel; });
var StaffModel = /** @class */ (function () {
    function StaffModel() {
    }
    return StaffModel;
}());



/***/ }),

/***/ "./src/app/common/model/vendor-model.ts":
/*!**********************************************!*\
  !*** ./src/app/common/model/vendor-model.ts ***!
  \**********************************************/
/*! exports provided: VendorModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorModel", function() { return VendorModel; });
var VendorModel = /** @class */ (function () {
    function VendorModel() {
    }
    return VendorModel;
}());



/***/ }),

/***/ "./src/app/components/multiSelect/multiSelect.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/multiSelect/multiSelect.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".select-component {\r\n  position: relative;\r\n  height: 50px;\r\n}\r\n\r\n.select {\r\n  width: 100%;\r\n  border: 1px solid #dfe3eb;\r\n  border-radius: 5px;\r\n  font-size: 14px;\r\n  line-height: 30px;\r\n  padding: 5px 10px;\r\n  height: 30px;\r\n  background: #fff;\r\n}\r\n\r\n.select-box {\r\n  position: absolute;\r\n  width: 370px;\r\n  text-align: center;\r\n  font-size: 14px;\r\n  line-height: 28px;\r\n  background: #fff;\r\n  z-index: 1000;\r\n  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);\r\n}\r\n\r\n.data-list {\r\n  width: 120px;\r\n  height: 200px;\r\n  overflow: auto;\r\n  border: 1px solid #ccc;\r\n  float: left;\r\n}\r\n\r\n.data-list:nth-child(2), .data-list:nth-child(3) {\r\n  margin-left: -1px;\r\n}\r\n\r\n.data-list span {\r\n  cursor: pointer;\r\n  width: 100%;\r\n  display: inline-block;\r\n}\r\n\r\n.data-list span:hover {\r\n  background: #dfe3eb;\r\n  color: #333;\r\n}\r\n\r\n.selected {\r\n  background: #ff893e;\r\n  color: #fff;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tdWx0aVNlbGVjdC9tdWx0aVNlbGVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL211bHRpU2VsZWN0L211bHRpU2VsZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0LWNvbXBvbmVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLnNlbGVjdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RmZTNlYjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG4uc2VsZWN0LWJveCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAzNzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBib3gtc2hhZG93OiAwIDJweCAxMnB4IDAgcmdiYSgwLDAsMCwuMSk7XHJcbn1cclxuXHJcbi5kYXRhLWxpc3Qge1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5kYXRhLWxpc3Q6bnRoLWNoaWxkKDIpLCAuZGF0YS1saXN0Om50aC1jaGlsZCgzKSB7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XHJcbn1cclxuXHJcbi5kYXRhLWxpc3Qgc3BhbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmRhdGEtbGlzdCBzcGFuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZGZlM2ViO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4uc2VsZWN0ZWQge1xyXG4gIGJhY2tncm91bmQ6ICNmZjg5M2U7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/multiSelect/multiSelect.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/multiSelect/multiSelect.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"select-component\" (mouseleave)=\"mouseHide?showStatus=false:''\" (click)=\"showStatus=true\">\r\n  <div class=\"select\" [ngStyle]=\"{'width':firstWidth? firstWidth-10+'px' : '350px'}\">\r\n    {{firstSelectedShowName}}\r\n    {{secondSelectedShowName?('/ '+secondSelectedShowName):''}}\r\n    {{thirdSelectedShowName?('/ '+thirdSelectedShowName):''}}\r\n  </div>\r\n  <div class=\"select-box\" *ngIf=\"showStatus\" [ngStyle]=\"{'width':firstWidth? firstWidth+'px' : '370px'}\">\r\n    <div class=\"data-list\"\r\n         [ngStyle]=\"{'width':firstWidth? firstWidth+'px' : '120px'}\">\r\n      <span *ngFor=\"let first of data\" (click)=\"selected(1,first)\"\r\n            [ngClass]=\"{'selected':firstValue==first[firstLabel]}\">{{first[firstName]}}</span>\r\n    </div>\r\n    <div class=\"data-list\" *ngIf=\"secondList && secondList.length\">\r\n    <span *ngFor=\"let second of secondList\" (click)=\"selected(2,second)\"\r\n          [ngClass]=\"{'selected':secondValue==second[secondLabel]}\">{{second[secondName]}}</span>\r\n    </div>\r\n    <div class=\"data-list\" *ngIf=\"thirdList && thirdList.length\">\r\n    <span *ngFor=\"let third of thirdList\" (click)=\"selected(3,third)\"\r\n          [ngClass]=\"{'selected':thirdValue==third[thirdLabel]}\">{{third[thirdName]}}</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/multiSelect/multiSelect.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/multiSelect/multiSelect.component.ts ***!
  \*****************************************************************/
/*! exports provided: multiSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiSelectComponent", function() { return multiSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var multiSelectComponent = /** @class */ (function () {
    function multiSelectComponent() {
        this.data = []; // 级联数组
        /*data = [{
          province: '北京',
          provinceCode: 1,
          cities: [
            {
              city: '北京市',
              cityCode: 2,
              areas: [
                {
                  area: '东城区',
                  areaCode: 3
                }
              ]
            }
          ]
        }];*/
        this.firstName = ''; // 用于展示给用户的标签字段名 如 province
        this.secondName = ''; // 用于展示给用户的标签字段名，如 city
        this.thirdName = ''; // 用于展示给用户的标签字段名，如 area
        this.secondChild = ''; // 存放第二个数组的属性名，如 cities
        this.thirdChild = ''; // 存放第三个数组的属性名，如 areas
        this.firstLabel = ''; // 第一个数组的值的字段名，如 provinceCode
        this.firstValue = ''; // 初始化第一个数组选中的值
        this.secondLabel = ''; // 第二个数组的值的字段名，如 cityCode
        this.secondValue = ''; // 初始化第二个数组选中的值
        this.thirdLabel = ''; // 第三个数组的值的字段名，如 areaCode
        this.thirdValue = ''; // 初始化第三个数组选中的值
        this.mouseHide = false; // 鼠标离开立即消失
        this.getValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.secondList = [];
        this.thirdList = [];
        this.firstSelectedShowName = '';
        this.secondSelectedShowName = '';
        this.thirdSelectedShowName = '';
        this.showStatus = false;
    }
    multiSelectComponent.prototype.ngDoCheck = function () {
        if (!this.firstSelectedShowName && !this.secondSelectedShowName && !this.thirdSelectedShowName) {
            if (this.firstValue && this.firstLabel && this.data) {
                for (var i = 0; i < this.data.length; i++) { // 初始化第一层
                    if (this.data[i][this.firstLabel] == this.firstValue) {
                        this.firstSelectedShowName = this.data[i][this.firstName];
                        console.log('匹配到第1层', this.firstSelectedShowName);
                        if (this.secondChild) {
                            this.secondList = this.data[i][this.secondChild] ? this.data[i][this.secondChild] : [];
                            if (this.secondLabel && this.secondValue) {
                                for (var j = 0; j < this.secondList.length; j++) { // 初始化第二层
                                    if (this.secondList[j][this.secondLabel] == this.secondValue) {
                                        this.secondSelectedShowName = this.secondList[j][this.secondName];
                                        console.log('匹配到第2层', this.secondSelectedShowName);
                                        if (this.thirdChild) {
                                            this.thirdList = this.secondList[j][this.thirdChild] ? this.secondList[j][this.thirdChild] : [];
                                            if (this.thirdLabel && this.thirdValue) {
                                                for (var k = 0; k < this.thirdList.length; k++) { // 初始化第三层
                                                    if (this.thirdList[k][this.thirdLabel] == this.thirdValue) {
                                                        this.thirdSelectedShowName = this.thirdList[k][this.thirdName];
                                                        console.log('匹配到第3层', this.thirdSelectedShowName);
                                                        break;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    break;
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    multiSelectComponent.prototype.selected = function (level, item) {
        if (level == 1) {
            this.firstValue = item[this.firstLabel];
            this.firstSelectedShowName = item[this.firstName];
            this.secondSelectedShowName = '';
            this.thirdSelectedShowName = '';
            this.secondList = item[this.secondChild];
            this.thirdList = [];
            this.secondValue = '';
            this.thirdValue = '';
            if (!this.secondList || !this.secondList.length) {
                this.showStatus = false;
            }
        }
        else if (level == 2) {
            this.secondValue = item[this.secondLabel];
            this.secondSelectedShowName = item[this.secondName];
            this.thirdSelectedShowName = '';
            this.thirdList = item[this.thirdChild];
            this.thirdValue = '';
            if (!this.thirdList || !this.thirdList.length) {
                this.showStatus = false;
            }
        }
        else if (level == 3) {
            this.thirdValue = item[this.thirdLabel];
            this.thirdSelectedShowName = item[this.thirdName];
            this.showStatus = false;
        }
        // console.log('当前选中值', this.firstValue, this.secondValue, this.thirdValue);
        this.getValue.emit([this.firstValue, this.secondValue, this.thirdValue]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], multiSelectComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], multiSelectComponent.prototype, "firstName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], multiSelectComponent.prototype, "secondName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], multiSelectComponent.prototype, "thirdName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], multiSelectComponent.prototype, "secondChild", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], multiSelectComponent.prototype, "thirdChild", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], multiSelectComponent.prototype, "firstLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], multiSelectComponent.prototype, "firstValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], multiSelectComponent.prototype, "secondLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], multiSelectComponent.prototype, "secondValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], multiSelectComponent.prototype, "thirdLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], multiSelectComponent.prototype, "thirdValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], multiSelectComponent.prototype, "mouseHide", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], multiSelectComponent.prototype, "getValue", void 0);
    multiSelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'multi-select',
            template: __webpack_require__(/*! ./multiSelect.component.html */ "./src/app/components/multiSelect/multiSelect.component.html"),
            styles: [__webpack_require__(/*! ./multiSelect.component.css */ "./src/app/components/multiSelect/multiSelect.component.css")]
        })
    ], multiSelectComponent);
    return multiSelectComponent;
}());



/***/ })

}]);
//# sourceMappingURL=bz-modules-basic-data-basic-data-module.js.map