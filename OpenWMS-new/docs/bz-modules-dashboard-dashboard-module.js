(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bz-modules-dashboard-dashboard-module"],{

/***/ "./src/app/bz-modules/dashboard/dashboard.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/bz-modules/dashboard/dashboard.module.ts ***!
  \**********************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _common_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/shared.module */ "./src/app/common/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/bz-modules/dashboard/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.routes */ "./src/app/bz-modules/dashboard/dashboard.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _common_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_dashboard_routes__WEBPACK_IMPORTED_MODULE_5__["dashboardRoutes"])
            ],
            declarations: [
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/bz-modules/dashboard/dashboard.routes.ts":
/*!**********************************************************!*\
  !*** ./src/app/bz-modules/dashboard/dashboard.routes.ts ***!
  \**********************************************************/
/*! exports provided: dashboardRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dashboardRoutes", function() { return dashboardRoutes; });
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/bz-modules/dashboard/dashboard/dashboard.component.ts");

var dashboardRoutes = [{
        path: '',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"]
    }];


/***/ }),

/***/ "./src/app/bz-modules/dashboard/dashboard/dashboard.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/bz-modules/dashboard/dashboard/dashboard.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <h3 class=\"dashboard-title\">{{'dashboard.title' | translate}}</h3>\n    <div class=\"row\">\n      <div class=\"col-sm-3\">\n        <div class=\"top-rect top-rect-blue\">\n          <p>65535 PV/Day</p>\n        </div>\n      </div>\n      <div class=\"col-sm-3\">\n        <div class=\"top-rect top-rect-green\">\n          <p>123,456K</p>\n        </div>\n      </div>\n      <div class=\"col-sm-3\">\n        <div class=\"top-rect top-rect-orange\">\n          <p>$123,456</p>\n        </div>\n      </div>\n      <div class=\"col-sm-3\">\n        <div class=\"top-rect top-rect-pink\">\n          <p>123,456</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <div class=\"chart-container line-container\">\n          <div echarts [options]=\"lineChart\" class=\"nf-chart\" #line></div>\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <div class=\"chart-container bar-container\">\n          <div echarts [options]=\"barChart\" class=\"nf-chart\" #bar></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/bz-modules/dashboard/dashboard/dashboard.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/bz-modules/dashboard/dashboard/dashboard.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard-title {\n  margin-top: 0px; }\n\n.top-rect {\n  width: 100%;\n  height: 90px;\n  color: #fff; }\n\n.top-rect p {\n    font-size: 24px;\n    margin: 0px;\n    text-align: center;\n    line-height: 90px; }\n\n.top-rect-blue {\n  background-color: #25859e !important; }\n\n.top-rect-green {\n  background-color: #6acece !important; }\n\n.top-rect-orange {\n  background-color: #eabc7f !important; }\n\n.top-rect-pink {\n  background-color: #6acece !important; }\n\n.chart-container {\n  width: 100%;\n  height: 485px;\n  margin-top: 30px;\n  background-color: #fff;\n  padding-top: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnotbW9kdWxlcy9kYXNoYm9hcmQvZGFzaGJvYXJkL0Y6XFxSb2Nrd29vZFxcd29ya3NwYWNlXFxPcGVuV01TLW5ldy9zcmNcXGFwcFxcYnotbW9kdWxlc1xcZGFzaGJvYXJkXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFIYjtJQUtJLGVBQWU7SUFDZixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQixFQUFBOztBQUlyQjtFQUNFLG9DQUFvQyxFQUFBOztBQUd0QztFQUNFLG9DQUFvQyxFQUFBOztBQUd0QztFQUNFLG9DQUFvQyxFQUFBOztBQUd0QztFQUNFLG9DQUFvQyxFQUFBOztBQUd0QztFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2J6LW1vZHVsZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGFzaGJvYXJkLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4udG9wLXJlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgcCB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogOTBweDtcbiAgfVxufVxuXG4udG9wLXJlY3QtYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTg1OWUgIWltcG9ydGFudDtcbn1cblxuLnRvcC1yZWN0LWdyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZhY2VjZSAhaW1wb3J0YW50O1xufVxuXG4udG9wLXJlY3Qtb3JhbmdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VhYmM3ZiAhaW1wb3J0YW50O1xufVxuXG4udG9wLXJlY3QtcGluayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2YWNlY2UgIWltcG9ydGFudDtcbn1cblxuLmNoYXJ0LWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ4NXB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/bz-modules/dashboard/dashboard/dashboard.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/bz-modules/dashboard/dashboard/dashboard.component.ts ***!
  \***********************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_color_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/color.util */ "./src/app/utils/color.util.ts");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        var _this = this;
        this.barChart = {
            title: {
                text: '库存金额变化',
                subtext: '纯属虚构',
                x: 'center'
            },
            color: _utils_color_util__WEBPACK_IMPORTED_MODULE_1__["default"].baseColor,
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                },
                formatter: '{b}月{a}:{c}'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '访问量',
                    type: 'bar',
                    barWidth: '60%',
                    itemStyle: {
                        normal: {
                            color: function (params) {
                                var color = _utils_color_util__WEBPACK_IMPORTED_MODULE_1__["default"].genColor(_this.barChart.series[0].data);
                                return color[params.dataIndex];
                            }
                        }
                    },
                    data: [100, 520, 200, 334, 390, 330, 220, 1000, 500, 444, 999, 110]
                }
            ]
        };
        this.lineChart = {
            title: {
                text: '库存量变化',
                subtext: '纯属虚构',
                x: 'center'
            },
            color: _utils_color_util__WEBPACK_IMPORTED_MODULE_1__["default"].baseColor,
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value} 次'
                }
            },
            series: [
                {
                    name: '访问量',
                    type: 'line',
                    data: [11, 11, 15, 13, 12, 13, 10, 123, 100, 39, 16, 199]
                },
                {
                    name: '访问量',
                    type: 'line',
                    data: [21, 21, 25, 23, 22, 23, 20, 223, 200, 109, 26, 299]
                },
                {
                    name: '访问量',
                    type: 'line',
                    data: [31, 31, 35, 33, 32, 33, 30, 323, 300, 209, 36, 399]
                },
                {
                    name: '访问量1',
                    type: 'line',
                    data: [41, 41, 45, 43, 42, 43, 40, 423, 400, 309, 46, 499]
                },
                {
                    name: '访问量2',
                    type: 'line',
                    data: [51, 51, 55, 53, 52, 53, 50, 523, 500, 409, 56, 599]
                },
                {
                    name: '访问量3',
                    type: 'line',
                    data: [61, 61, 65, 63, 62, 63, 60, 623, 600, 509, 66, 699]
                },
                {
                    name: '访问量4',
                    type: 'line',
                    data: [71, 71, 75, 73, 72, 73, 70, 723, 700, 609, 76, 799]
                },
                {
                    name: '访问量5',
                    type: 'line',
                    data: [81, 81, 85, 83, 82, 83, 80, 823, 800, 709, 86, 899]
                },
                {
                    name: '访问量6',
                    type: 'line',
                    data: [91, 91, 95, 93, 92, 93, 90, 923, 900, 809, 96, 999]
                },
                {
                    name: '访问量7',
                    type: 'line',
                    data: [101, 101, 105, 103, 102, 103, 100, 1000, 1000, 909, 106, 1099]
                },
                {
                    name: '访问量8',
                    type: 'line',
                    data: [111, 111, 115, 113, 112, 113, 110, 1100, 1100, 1009, 116, 1199]
                },
                {
                    name: '访问量9',
                    type: 'line',
                    data: [121, 121, 125, 123, 122, 123, 120, 1200, 1200, 1109, 126, 1299]
                },
                {
                    name: '访问量10',
                    type: 'line',
                    data: [131, 131, 135, 133, 132, 133, 130, 1300, 1300, 1209, 136, 1399]
                }
            ]
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.lineEchart = echarts__WEBPACK_IMPORTED_MODULE_2__["init"](this.line.nativeElement);
        this.lineEchart.setOption(this.lineChart);
        this.barEchart = echarts__WEBPACK_IMPORTED_MODULE_2__["init"](this.bar.nativeElement);
        this.barEchart.setOption(this.barChart);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('line'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DashboardComponent.prototype, "line", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('bar'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DashboardComponent.prototype, "bar", void 0);
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/bz-modules/dashboard/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/bz-modules/dashboard/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ })

}]);
//# sourceMappingURL=bz-modules-dashboard-dashboard-module.js.map