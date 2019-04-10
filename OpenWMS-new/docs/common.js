(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/primeng/checkbox.js":
/*!******************************************!*\
  !*** ./node_modules/primeng/checkbox.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/checkbox/checkbox */ "./node_modules/primeng/components/checkbox/checkbox.js"));

/***/ }),

/***/ "./node_modules/primeng/dialog.js":
/*!****************************************!*\
  !*** ./node_modules/primeng/dialog.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/dialog/dialog */ "./node_modules/primeng/components/dialog/dialog.js"));

/***/ }),

/***/ "./src/app/utils/color.util.ts":
/*!*************************************!*\
  !*** ./src/app/utils/color.util.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var baseColor = [
    '#25859e',
    '#6acece',
    '#e78816',
    '#eabc7f',
    '#12619d',
    '#ad2532',
    '#15938d',
    '#b3aa9b',
    '#042d4c'
];
var genColor = function (arr) {
    var num = 0;
    var color = [];
    for (var i = 0; i < arr.length; i++) {
        if (num < baseColor.length) {
            color[i] = baseColor[num++];
        }
        else {
            num = 0;
            color[i] = baseColor[num++];
        }
    }
    return color;
};
/* harmony default export */ __webpack_exports__["default"] = ({
    baseColor: baseColor,
    genColor: genColor
});


/***/ })

}]);
//# sourceMappingURL=common.js.map