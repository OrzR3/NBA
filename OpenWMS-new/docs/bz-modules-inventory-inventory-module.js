(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bz-modules-inventory-inventory-module"],{

/***/ "./src/app/bz-modules/inventory/inbound-receipt-detail/inbound-receipt-detail.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/inbound-receipt-detail/inbound-receipt-detail.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-margin\">\n  <div class=\"col-xs-12 form-bgcolor col-padding\">\n    <h3 class=\"text-center\">{{inboundDetail.title}}</h3>\n    <form class=\"form-inline\">\n      <div class=\"form-group col-xs-4\">\n        <label>{{'inboundAndOutbound.receiptNo' | translate}}：</label>\n        <p class=\"form-control-static\">{{inboundDetail.receiptNo}}</p>\n      </div>\n      <div class=\"form-group col-xs-4\">\n        <label>{{'inboundAndOutbound.waybillNo' | translate}}：</label>\n        <p class=\"form-control-static\">{{inboundDetail.waybillNo}}</p>\n      </div>\n      <div class=\"form-group col-xs-4\">\n        <label>{{'inboundAndOutbound.inboundTime' | translate}}：</label>\n        <p class=\"form-control-static\">{{inboundDetail.inboundTime | date:'yyyy-MM-dd HH:mm:ss'}}</p>\n      </div>\n    </form>\n\n    <div>\n      <button>hAHhhh</button>\n      <button>13123</button>\n      <button>31414</button>\n      <button>141111</button>\n      <button>14111</button>\n    </div>\n\n    <table class=\"table table-bordered detail-table\">\n      <thead>\n        <tr>\n          <th> {{'inboundAndOutbound.index' | translate}}</th>\n          <th>{{'inboundAndOutbound.vendor' | translate}}</th>\n          <th>{{'inboundAndOutbound.productName' | translate}}</th>\n          <th>{{'inboundAndOutbound.specificat' | translate}}</th>\n          <th>{{'inboundAndOutbound.model' | translate}}</th>\n          <th>{{'inboundAndOutbound.origin' | translate}}</th>\n          <th>{{'inboundAndOutbound.number' | translate}}</th>\n          <th>{{'inboundAndOutbound.itemUnit' | translate}}</th>\n          <th>{{'inboundAndOutbound.price' | translate}}</th>\n          <th>{{'inboundAndOutbound.sum' | translate}}</th>\n          <th>{{'inboundAndOutbound.warehouse' | translate}}</th>\n          <th>{{'inboundAndOutbound.cellNo' | translate}}</th>\n        </tr>\n      </thead>\n      <tbody>\n\n        <tr *ngFor=\"let item of inboundDetail.items\">\n          <th scope=\"row\">11{{item.index}}</th>\n          <td>{{item.vendor}}</td>\n          <td>{{item.itemName}}</td>\n          <td>{{item.spec}}</td>\n          <td>{{item.model}}</td>\n          <td>{{item.producerLocation}}</td>\n          <td>{{item.num}}</td>\n          <td>{{item.unit}}</td>\n          <td>{{item.price}}</td>\n          <td>{{item.sum}}</td>\n          <td>{{item.warehouse}}</td>\n          <td>{{item.storeCell}}</td>\n        </tr>\n\n        <tr>\n          <td colspan=\"12\">{{'inboundAndOutbound.totalNum' | translate}}：{{inboundDetail.totalNum}}</td>\n        </tr>\n      </tbody>\n    </table>\n\n    <form class=\"form-inline\">\n      <div class=\"form-group col-xs-4\">\n        <label>{{'inboundAndOutbound.handlerName' | translate}}：</label>\n        <label class=\"form-control-static\">{{inboundDetail.handlerName}}</label>\n      </div>\n      <div class=\"form-group col-xs-4\">\n        <label>{{'inboundAndOutbound.acceptor' | translate}}：</label>\n        <label class=\"form-control-static\">{{inboundDetail.acceptor}}</label>\n      </div>\n      <div class=\"form-group col-xs-4\">\n        <label>{{'inboundAndOutbound.deliveryman' | translate}}：</label>\n        <label class=\"form-control-static\">{{inboundDetail.deliveryman}}</label>\n      </div>\n    </form>\n\n    <form class=\"form-inline\">\n      <div class=\"form-group col-xs-12\">\n        <button type=\"button\" class=\"btn btn-primary btn-margin-1rem\" (click)=\"returnToTable()\">{{'return' | translate}}</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"printReceipt()\">{{'print' | translate}}</button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/bz-modules/inventory/inbound-receipt-detail/inbound-receipt-detail.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/inbound-receipt-detail/inbound-receipt-detail.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detail-table {\n  margin: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnotbW9kdWxlcy9pbnZlbnRvcnkvaW5ib3VuZC1yZWNlaXB0LWRldGFpbC9GOlxcUm9ja3dvb2RcXHdvcmtzcGFjZVxcT3BlbldNUy1uZXcvc3JjXFxhcHBcXGJ6LW1vZHVsZXNcXGludmVudG9yeVxcaW5ib3VuZC1yZWNlaXB0LWRldGFpbFxcaW5ib3VuZC1yZWNlaXB0LWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2J6LW1vZHVsZXMvaW52ZW50b3J5L2luYm91bmQtcmVjZWlwdC1kZXRhaWwvaW5ib3VuZC1yZWNlaXB0LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWwtdGFibGV7XHJcbiAgICBtYXJnaW46MTVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/bz-modules/inventory/inbound-receipt-detail/inbound-receipt-detail.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/inbound-receipt-detail/inbound-receipt-detail.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: InboundReceiptDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboundReceiptDetailComponent", function() { return InboundReceiptDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_inbound_receipt_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/services/inbound-receipt-detail.service */ "./src/app/common/services/inbound-receipt-detail.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InboundReceiptDetailComponent = /** @class */ (function () {
    function InboundReceiptDetailComponent(router, inboundReceiptDetailService) {
        this.router = router;
        this.inboundReceiptDetailService = inboundReceiptDetailService;
    }
    InboundReceiptDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inboundReceiptDetailService.getInboundDetail().subscribe(function (inboundDetail) {
            _this.inboundDetail = inboundDetail;
        });
    };
    InboundReceiptDetailComponent.prototype.returnToTable = function () {
        this.router.navigateByUrl("/workspace/inventory/inbound-receipt-table/page/1");
    };
    InboundReceiptDetailComponent.prototype.printReceipt = function () {
        window.print();
    };
    InboundReceiptDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "inbound-receipt-detail",
            template: __webpack_require__(/*! ./inbound-receipt-detail.component.html */ "./src/app/bz-modules/inventory/inbound-receipt-detail/inbound-receipt-detail.component.html"),
            styles: [__webpack_require__(/*! ./inbound-receipt-detail.component.scss */ "./src/app/bz-modules/inventory/inbound-receipt-detail/inbound-receipt-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _common_services_inbound_receipt_detail_service__WEBPACK_IMPORTED_MODULE_2__["InboundReceiptDetailService"]])
    ], InboundReceiptDetailComponent);
    return InboundReceiptDetailComponent;
}());



/***/ }),

/***/ "./src/app/bz-modules/inventory/inbound-receipt-table/inbound-receipt-table.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/inbound-receipt-table/inbound-receipt-table.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-table-container\">\n  <h3 class=\"header-no-margin\">{{'inboundAndOutbound.inboundControl' | translate}}</h3>\n  <form class=\"form-inline top-filter-form form-bgcolor col-padding\" role=\"form\">\n    <div class=\"form-group btn-margin-1rem\">\n      <label>{{'inboundAndOutbound.selectedInventory' | translate}}：</label>\n      <p-dropdown [options]=\"warehouses\" optionLabel=\"name\" [(ngModel)]=\"selectedInbentory\" name=\"warehouse\" [style]=\"{'width':'150px'}\"></p-dropdown>\n    </div>\n    <div class=\"form-group btn-margin-1rem\">\n      <label>{{'inboundAndOutbound.startDate' | translate}}：</label>\n      <p-calendar [(ngModel)]=\"startDate\" dateFormat=\"yy-mm-dd\" hourFormat=\"24\" name=\"startDate\"></p-calendar>\n    </div>\n    <div class=\"form-group btn-margin-1rem\">\n      <label>{{'inboundAndOutbound.endDate' | translate}}：</label>\n      <p-calendar [(ngModel)]=\"endDate\" dateFormat=\"yy-mm-dd\" hourFormat=\"24\" name=\"endDate\"></p-calendar>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-primary\" type=\"button\" (click)=\"newReceipt()\">\n        <i class=\"fa fa-user\" aria-hidden=\"true\"></i>{{'inboundAndOutbound.newInbound' | translate}}\n      </button>\n    </div>\n    <div><button>打印</button>\n      <button>预定</button>\n      <button>下载</button></div>\n  </form>\n  <div>\n    <button>打印</button>\n    <button>预定</button>\n    <button>下载</button>\n  </div>\n  <div class=\"row no-margin\">\n    <div class=\"col-xs-12 form-bgcolor col-padding\">\n      <div class=\"user-item-container\">\n        <p-dataTable [value]=\"items\" [rows]=\"10\" [paginator]=\"true\" [pageLinks]=\"3\" [rowsPerPageOptions]=\"[5,10,20]\" dataKey=\"index\">\n          <p-column field=\"index\" header=\"{{'inboundAndOutbound.index' | translate}}\" [sortable]=\"true\" [style]=\"{'width':'80px'}\"></p-column>\n          <p-column field=\"warehouseName\" header=\"{{'inboundAndOutbound.warehouseName' | translate}}\" [sortable]=\"true\"></p-column>\n          <p-column field=\"receiptNo\" header=\"{{'inboundAndOutbound.receiptNo' | translate}}\" [sortable]=\"true\"></p-column>\n          <p-column field=\"waybillNo\" header=\"{{'inboundAndOutbound.waybillNo' | translate}}\" [sortable]=\"true\"></p-column>\n          <p-column field=\"enterDate\" header=\"{{'inboundAndOutbound.enterDate' | translate}}\" [sortable]=\"true\"></p-column>\n          <p-column header=\"{{'operate' | translate}}\">\n              <ng-template let-item=\"rowData\" pTemplate=\"body\">\n                  <button type=\"button\" class=\"btn btn-primary btn-margin-1rem\" (click)=\"receiptDetail()\">{{'editItem' | translate}}</button>\n                  <button type=\"button\" class=\"btn btn-primary\" (click)=\"printReceipt()\">{{'print' | translate}}</button>\n              </ng-template>\n          </p-column>\n        </p-dataTable>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/bz-modules/inventory/inbound-receipt-table/inbound-receipt-table.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/inbound-receipt-table/inbound-receipt-table.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J6LW1vZHVsZXMvaW52ZW50b3J5L2luYm91bmQtcmVjZWlwdC10YWJsZS9pbmJvdW5kLXJlY2VpcHQtdGFibGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/bz-modules/inventory/inbound-receipt-table/inbound-receipt-table.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/inbound-receipt-table/inbound-receipt-table.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: InboundReceiptTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboundReceiptTableComponent", function() { return InboundReceiptTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_warehouse_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/services/warehouse.service */ "./src/app/common/services/warehouse.service.ts");
/* harmony import */ var _common_services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/services/category.service */ "./src/app/common/services/category.service.ts");
/* harmony import */ var _common_services_inbound_receipt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/services/inbound-receipt.service */ "./src/app/common/services/inbound-receipt.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InboundReceiptTableComponent = /** @class */ (function () {
    function InboundReceiptTableComponent(router, activeRoute, warehouseService, categoryService, inboundReceiptService) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.warehouseService = warehouseService;
        this.categoryService = categoryService;
        this.inboundReceiptService = inboundReceiptService;
    }
    InboundReceiptTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.startDate = new Date();
        this.endDate = new Date();
        this.warehouseService.getWarehouses().subscribe(function (warehouses) {
            _this.warehouses = warehouses;
        });
        // this.inboundReceiptService.inboundRecords.subscribe((items) => {
        //   this.items = items;
        // });
        this.inboundReceiptService.getInboundRecords().subscribe(function (items) {
            _this.items = items;
        });
    };
    InboundReceiptTableComponent.prototype.newReceipt = function () {
        this.router.navigateByUrl("/workspace/inventory/new-inbound-receipt/receipt-no/IN-1-333333");
    };
    InboundReceiptTableComponent.prototype.receiptDetail = function () {
        this.router.navigateByUrl("/workspace/inventory/inbound-receipt-detail/receipt-no/IN-1-2222222");
    };
    InboundReceiptTableComponent.prototype.printReceipt = function () {
        window.print();
    };
    InboundReceiptTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "inbound-receipt-table",
            template: __webpack_require__(/*! ./inbound-receipt-table.component.html */ "./src/app/bz-modules/inventory/inbound-receipt-table/inbound-receipt-table.component.html"),
            styles: [__webpack_require__(/*! ./inbound-receipt-table.component.scss */ "./src/app/bz-modules/inventory/inbound-receipt-table/inbound-receipt-table.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _common_services_warehouse_service__WEBPACK_IMPORTED_MODULE_2__["WarehouseService"],
            _common_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"],
            _common_services_inbound_receipt_service__WEBPACK_IMPORTED_MODULE_4__["InboundReceiptService"]])
    ], InboundReceiptTableComponent);
    return InboundReceiptTableComponent;
}());



/***/ }),

/***/ "./src/app/bz-modules/inventory/inventory-item-detail/inventory-item-detail.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/inventory-item-detail/inventory-item-detail.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"header-no-margin margin-bottom-1rem\">\n  {{ \"inventoryControl.inventoryDetails\" | translate }}---iPhone X\n</h3>\n<p-tabView>\n  <p-tabPanel header=\"{{ 'inventoryControl.inventoryCurve' | translate }}\">\n    <div class=\"btn-group\" role=\"group\" aria-label=\"Default button group\">\n      <button type=\"button\" class=\"btn btn-primary\">\n        {{ \"inventoryControl.week\" | translate }}\n      </button>\n      <button type=\"button\" class=\"btn btn-primary\">\n        {{ \"inventoryControl.month\" | translate }}\n      </button>\n      <button type=\"button\" class=\"btn btn-primary\">\n        {{ \"inventoryControl.quarter\" | translate }}\n      </button>\n      <button type=\"button\" class=\"btn btn-primary\">\n        {{ \"inventoryControl.year\" | translate }}\n      </button>\n    </div>\n<div class=\"chart-container\" >\n  <div\n  echarts\n  [options]=\"options\"\n  class=\"nf-chart\"\n  #line\n></div>\n</div>\n\n  </p-tabPanel>\n  <p-tabPanel header=\"{{ 'inventoryControl.summary' | translate }}\">\n    <form class=\"form-horizontal\">\n      <div class=\"form-group\">\n        <label class=\"col-xs-3 control-label\"\n          >{{ \"inventoryControl.warehouse\" | translate }}：</label\n        >\n        <div class=\"col-xs-9\">\n          <p class=\"form-control-static\">京东南京一号仓</p>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-xs-3 control-label\"\n          >{{ \"inventoryControl.StorageLocation\" | translate }}：</label\n        >\n        <div class=\"col-xs-9\">\n          <p class=\"form-control-static\">A1001、A1002</p>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-xs-3 control-label\"\n          >{{ \"inventoryControl.category\" | translate }}：</label\n        >\n        <div class=\"col-xs-9\">\n          <p class=\"form-control-static\">消费电子产品</p>\n        </div>\n      </div>\n      <div class=\"h-divider\"></div>\n      <div class=\"form-group\">\n        <label class=\"col-xs-3 control-label\"\n          >{{ \"inventoryControl.productName\" | translate }}：</label\n        >\n        <div class=\"col-xs-9\"><p class=\"form-control-static\">iPhone-X</p></div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-xs-3 control-label\"\n          >{{ \"inventoryControl.barCode\" | translate }}：</label\n        >\n        <div class=\"col-xs-9\">\n          <p class=\"form-control-static\">0x0010abcd</p>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-xs-3 control-label\"\n          >{{ \"inventoryControl.model\" | translate }}：</label\n        >\n        <div class=\"col-xs-9\"><p class=\"form-control-static\">A1661</p></div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-xs-3 control-label\"\n          >{{ \"inventoryControl.specificat\" | translate }}：</label\n        >\n        <div class=\"col-xs-9\">\n          <p class=\"form-control-static\">\n            全面屏，黑色，重量500g，20cm×20cm×20cm\n          </p>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-xs-3 control-label\"\n          >{{ \"inventoryControl.vendor\" | translate }}：</label\n        >\n        <div class=\"col-xs-9\"><p class=\"form-control-static\">Apple</p></div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-xs-3 control-label\"\n          >{{ \"inventoryControl.origin\" | translate }}：</label\n        >\n        <div class=\"col-xs-9\">\n          <p class=\"form-control-static\">深圳富士康龙华科技园</p>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-xs-3 control-label\"\n          >{{ \"inventoryControl.shelfLife\" | translate }}：</label\n        >\n        <div class=\"col-xs-9\"><p class=\"form-control-static\">18个月</p></div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-xs-3 control-label\"\n          >{{ \"inventoryControl.breakable\" | translate }}：</label\n        >\n        <div class=\"col-xs-9\"><p class=\"form-control-static\">是</p></div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-xs-3 control-label\"\n          >{{ \"inventoryControl.perishable\" | translate }}：</label\n        >\n        <div class=\"col-xs-9\"><p class=\"form-control-static\">是</p></div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-xs-3 control-label\"\n          >{{ \"inventoryControl.productDetail\" | translate }}：</label\n        >\n        <div class=\"col-xs-9\">\n          <p class=\"form-control-static\">这里是关于商品的各种具体描述</p>\n        </div>\n      </div>\n      <div class=\"h-divider\"></div>\n      <div class=\"form-group\">\n        <label class=\"col-xs-3 control-label\"\n          >{{ \"inventoryControl.pickStrategy\" | translate }}：</label\n        >\n        <div class=\"col-xs-9\"><p class=\"form-control-static\">FIFO</p></div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-xs-3 control-label\"\n          >{{ \"inventoryControl.bookInventory\" | translate }}：</label\n        >\n        <div class=\"col-xs-9\"><p class=\"form-control-static\">1000个</p></div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-xs-3 control-label\"\n          >{{ \"inventoryControl.realInventory\" | translate }}：</label\n        >\n        <div class=\"col-xs-9\"><p class=\"form-control-static\">999个</p></div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-xs-3 control-label\"\n          >{{ \"inventoryControl.variance\" | translate }}：</label\n        >\n        <div class=\"col-xs-9\"><p class=\"form-control-static\">-1个</p></div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-xs-3 control-label\"\n          >{{ \"inventoryControl.maxInventory\" | translate }}：</label\n        >\n        <div class=\"col-xs-9\"><p class=\"form-control-static\">5000个</p></div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-xs-3 control-label\"\n          >{{ \"inventoryControl.minInventory\" | translate }}：</label\n        >\n        <div class=\"col-xs-9\"><p class=\"form-control-static\">100个</p></div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-xs-3 control-label\"\n          >{{ \"inventoryControl.itemUnit\" | translate }}：</label\n        >\n        <div class=\"col-xs-9\"><p class=\"form-control-static\">个</p></div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-xs-3 control-label\"\n          >{{ \"inventoryControl.unitPrice\" | translate }}：</label\n        >\n        <div class=\"col-xs-9\"><p class=\"form-control-static\">2000元</p></div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-xs-3 control-label\"\n          >{{ \"inventoryControl.inventorySum\" | translate }}：</label\n        >\n        <div class=\"col-xs-9\"><p class=\"form-control-static\">200万元</p></div>\n      </div>\n    </form>\n  </p-tabPanel>\n</p-tabView>\n<form class=\"form-horizontal\">\n  <div class=\"form-bgcolor col-padding \">\n    <button\n      type=\"button\"\n      class=\"btn btn-primary btn-margin-1rem\"\n      (click)=\"backToList()\"\n    >\n      {{ \"return\" | translate }}\n    </button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"printBill()\">\n      {{ \"print\" | translate }}\n    </button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/bz-modules/inventory/inventory-item-detail/inventory-item-detail.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/inventory-item-detail/inventory-item-detail.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".h-divider {\n  width: 100%;\n  height: 0px;\n  border: 0.5px solid #ccc; }\n\n.chart-container {\n  position: relative;\n  width: 100%;\n  height: 485px;\n  margin-top: 30px;\n  background-color: #fff;\n  padding-top: 15px; }\n\n:host /deep/ .ui-widget {\n  padding: 1rem; }\n\n.btn-group {\n  position: relative;\n  left: -.9rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnotbW9kdWxlcy9pbnZlbnRvcnkvaW52ZW50b3J5LWl0ZW0tZGV0YWlsL0Y6XFxSb2Nrd29vZFxcd29ya3NwYWNlXFxPcGVuV01TLW5ldy9zcmNcXGFwcFxcYnotbW9kdWxlc1xcaW52ZW50b3J5XFxpbnZlbnRvcnktaXRlbS1kZXRhaWxcXGludmVudG9yeS1pdGVtLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVU7RUFDVixXQUFVO0VBQ1Ysd0JBQXVCLEVBQUE7O0FBRTNCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxhQUFhLEVBQUE7O0FBRWY7RUFDRSxrQkFBa0I7RUFDbEIsWUFBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYnotbW9kdWxlcy9pbnZlbnRvcnkvaW52ZW50b3J5LWl0ZW0tZGV0YWlsL2ludmVudG9yeS1pdGVtLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oLWRpdmlkZXJ7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MHB4O1xuICAgIGJvcmRlcjowLjVweCBzb2xpZCAjY2NjO1xufVxuLmNoYXJ0LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDg1cHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuXG46aG9zdCAvZGVlcC8udWktd2lkZ2V0e1xuICBwYWRkaW5nOiAxcmVtO1xufVxuLmJ0bi1ncm91cHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0Oi0uOXJlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/bz-modules/inventory/inventory-item-detail/inventory-item-detail.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/inventory-item-detail/inventory-item-detail.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: InventoryItemDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryItemDetailComponent", function() { return InventoryItemDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_color_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/color.util */ "./src/app/utils/color.util.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InventoryItemDetailComponent = /** @class */ (function () {
    function InventoryItemDetailComponent(router, activeRoute) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.options = {
            title: {
                text: '库存变化曲线',
                subtext: '纯属虚构',
                x: "center"
            },
            tooltip: {
                trigger: 'axis'
            },
            color: _utils_color_util__WEBPACK_IMPORTED_MODULE_3__["default"].baseColor,
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value} 个'
                }
            },
            series: [
                {
                    name: '入库',
                    type: 'line',
                    data: [11, 11, 15, 13, 12, 13, 10, 123, 100, 99, 66, 199]
                },
                {
                    name: '出库',
                    type: 'line',
                    data: [110, 110, 150, 130, 120, 130, 100, 1230, 1000, 990, 660, 1990]
                },
                {
                    name: '进库',
                    type: 'line',
                    data: [210, 310, 250, 230, 220, 230, 200, 230, 1500, 990, 660, 590]
                },
                {
                    name: '库1',
                    type: 'line',
                    data: [410, 310, 250, 330, 20, 230, 300, 830, 600, 590, 760, 1590]
                },
                {
                    name: '库2',
                    type: 'line',
                    data: [410, 310, 250, 330, 20, 230, 300, 830, 600, 590, 760, 1590]
                },
                {
                    name: '库3',
                    type: 'line',
                    data: [410, 310, 250, 330, 20, 230, 300, 830, 600, 590, 760, 1590]
                },
                {
                    name: '库4',
                    type: 'line',
                    data: [410, 310, 250, 330, 20, 230, 300, 830, 600, 590, 760, 1590]
                },
                {
                    name: '库5',
                    type: 'line',
                    data: [410, 310, 250, 330, 20, 230, 300, 830, 600, 590, 760, 1590]
                },
                {
                    name: '库6',
                    type: 'line',
                    data: [510, 370, 290, 390, 420, 230, 300, 830, 600, 590, 760, 1590]
                }
            ]
        };
    }
    InventoryItemDetailComponent.prototype.ngOnInit = function () {
        this.lineEchart = echarts__WEBPACK_IMPORTED_MODULE_2__["init"](this.line.nativeElement);
        this.lineEchart.setOption(this.options);
    };
    InventoryItemDetailComponent.prototype.backToList = function () {
        this.router.navigateByUrl('/workspace/inventory/inventory-table/page/1');
    };
    InventoryItemDetailComponent.prototype.printBill = function () {
        window.print();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('line'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], InventoryItemDetailComponent.prototype, "line", void 0);
    InventoryItemDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'inventory-item-detail',
            template: __webpack_require__(/*! ./inventory-item-detail.component.html */ "./src/app/bz-modules/inventory/inventory-item-detail/inventory-item-detail.component.html"),
            styles: [__webpack_require__(/*! ./inventory-item-detail.component.scss */ "./src/app/bz-modules/inventory/inventory-item-detail/inventory-item-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], InventoryItemDetailComponent);
    return InventoryItemDetailComponent;
}());



/***/ }),

/***/ "./src/app/bz-modules/inventory/inventory-table/inventory-table.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/inventory-table/inventory-table.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-table-container\">\n  <p-confirmDialog\n    header=\"{{ 'confirm' | translate }}\"\n    icon=\"fa fa-question-circle\"\n    #cd\n  >\n    <p-footer>\n      <button\n        type=\"button\"\n        icon=\"fa-check\"\n        class=\"btn btn-primary btn-margin-1rem\"\n        (click)=\"cd.accept()\"\n      >\n        {{ \"accept\" | translate }}\n      </button>\n      <button\n        type=\"button\"\n        icon=\"fa-close\"\n        class=\"btn btn-default\"\n        (click)=\"cd.reject()\"\n      >\n        {{ \"reject\" | translate }}\n      </button>\n    </p-footer>\n  </p-confirmDialog>\n\n  <h3 class=\"header-no-margin\">\n    {{ \"inventoryControl.inventoryControl\" | translate }}\n  </h3>\n  <form class=\"form-inline top-filter-form form-bgcolor\" role=\"form\">\n    <div class=\"form-group btn-margin-1rem\">\n      <label>{{ \"inventoryControl.selectedInventory\" | translate }}：</label>\n      <p-dropdown\n        [options]=\"warehouses\"\n        optionLabel=\"name\"\n        [(ngModel)]=\"selectedInbentory\"\n        name=\"warehouse\"\n        [style]=\"{ width: '150px' }\"\n      ></p-dropdown>\n    </div>\n    <div class=\"form-group btn-margin-1rem\">\n      <label>{{ \"inventoryControl.selectedCategory\" | translate }}：</label>\n      <p-dropdown\n        [options]=\"categories\"\n        optionLabel=\"name\"\n        [(ngModel)]=\"selectedCategory\"\n        name=\"category\"\n        [style]=\"{ width: '150px' }\"\n      ></p-dropdown>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" />\n        <span class=\"input-group-btn\">\n          <button class=\"btn btn-primary\" type=\"button\">\n            <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n          </button>\n        </span>\n      </div>\n    </div>\n  </form>\n  <div class=\"row no-margin\">\n    <div class=\"col-xs-12 form-bgcolor col-padding\">\n      <div class=\"user-item-container\">\n        <p-dataTable [value]=\"items\" [rows]=\"10\" [paginator]=\"true\" [pageLinks]=\"3\" [rowsPerPageOptions]=\"[5,10,20]\" dataKey=\"index\"> -->\n        <!-- <p-column [style]=\"{'width':'38px'}\" selectionMode=\"multiple\" field=\"index\"></p-column> -->\n         <p-column field=\"index\" header=\"{{'inventoryControl.index' | translate}}\" [sortable]=\"true\" ></p-column>\n                    <p-column field=\"itemName\" header=\"{{'inventoryControl.itemName' | translate}}\" [sortable]=\"true\"></p-column>\n                    <p-column field=\"itemUnit\" header=\"{{'inventoryControl.itemUnit' | translate}}\" [sortable]=\"true\"></p-column>\n                    <p-column field=\"bookInventory\" header=\"{{'inventoryControl.bookInventory' | translate}}\" [sortable]=\"true\"></p-column>\n                    <p-column field=\"realInventory\" header=\"{{'inventoryControl.realInventory' | translate}}\" [sortable]=\"true\"></p-column>\n                    <p-column field=\"diffInventory\" header=\"{{'inventoryControl.diffInventory' | translate}}\" [sortable]=\"true\"></p-column>\n                    <p-column field=\"costPrice\" header=\"{{'inventoryControl.costPrice' | translate}}\" [sortable]=\"true\"></p-column>\n                    <p-column field=\"total\" header=\"{{'inventoryControl.total' | translate}}\" [sortable]=\"true\"></p-column>\n                    <p-column field=\"warehouseName\" header=\"{{'inventoryControl.warehouseName' | translate}}\" [sortable]=\"true\"></p-column>\n                    <p-column field=\"cellNo\" header=\"{{'inventoryControl.cellNo' | translate}}\" [sortable]=\"true\"></p-column>\n                    <p-column header=\"{{'operate' | translate}}\">\n                        <ng-template let-item=\"rowData\" pTemplate=\"body\">\n                            <button type=\"button\" class=\"btn btn-primary btn-margin-1rem\" (click)=\"editItem(item)\">{{'editItem' | translate}}</button>\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"delItem(item)\">{{'delItem' | translate}}</button>\n                        </ng-template>\n                    </p-column>\n        </p-dataTable>\n        <!-- <p-table\n          [columns]=\"cols\"\n          [rows]=\"10\"\n          [paginator]=\"true\"\n          [value]=\"items\"\n          [responsive]=\"true\"\n        >\n          <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n              <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\" >\n                {{ col.header }}\n                <p-sortIcon [field]=\"col.field\"></p-sortIcon>\n              </th>\n            </tr>\n          </ng-template>\n          <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr [pSelectableRow]=\"rowData\">\n              <td *ngFor=\"let col of columns\">\n                {{rowData[col.field]}}\n              </td>\n            </tr>\n         </ng-template>\n        </p-table> -->\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/bz-modules/inventory/inventory-table/inventory-table.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/inventory-table/inventory-table.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-item-container /deep/ table thead tr th:last-child {\n  width: 15%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnotbW9kdWxlcy9pbnZlbnRvcnkvaW52ZW50b3J5LXRhYmxlL0Y6XFxSb2Nrd29vZFxcd29ya3NwYWNlXFxPcGVuV01TLW5ldy9zcmNcXGFwcFxcYnotbW9kdWxlc1xcaW52ZW50b3J5XFxpbnZlbnRvcnktdGFibGVcXGludmVudG9yeS10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVHLFVBQ0QsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2J6LW1vZHVsZXMvaW52ZW50b3J5L2ludmVudG9yeS10YWJsZS9pbnZlbnRvcnktdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1pdGVtLWNvbnRhaW5lciAvZGVlcC8ge1xuICB0YWJsZSB0aGVhZCB0ciB0aDpsYXN0LWNoaWxke1xuICAgd2lkdGg6MTUlXG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/bz-modules/inventory/inventory-table/inventory-table.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/inventory-table/inventory-table.component.ts ***!
  \***********************************************************************************/
/*! exports provided: InventoryTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryTableComponent", function() { return InventoryTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_services_warehouse_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/services/warehouse.service */ "./src/app/common/services/warehouse.service.ts");
/* harmony import */ var _common_services_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/services/category.service */ "./src/app/common/services/category.service.ts");
/* harmony import */ var _common_services_inventory_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/services/inventory.service */ "./src/app/common/services/inventory.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var InventoryTableComponent = /** @class */ (function () {
    function InventoryTableComponent(router, activeRoute, confirmationService, messageService, warehouseService, categoryService, inventoryService) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.confirmationService = confirmationService;
        this.messageService = messageService;
        this.warehouseService = warehouseService;
        this.categoryService = categoryService;
        this.inventoryService = inventoryService;
    }
    InventoryTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.startDate = new Date();
        this.endDate = new Date();
        this.cols = [
            { field: 'index', header: 'index' },
            { field: 'itemName', header: 'itemName' },
            { field: 'bookInventory', header: 'bookInventory' },
            { field: 'realInventory', header: 'realInventory' },
            { field: 'diffInventory', header: 'diffInventory' },
            { field: 'costPrice', header: 'costPrice' },
            { field: 'total', header: 'total' },
            { field: 'warehouseName', header: 'warehouseName' },
            { field: 'cellNo', header: 'cellNo' },
            { field: 'warehouseName', header: 'warehouseName' },
        ];
        this.warehouseService.getWarehouses().subscribe(function (warehouses) {
            _this.warehouses = warehouses;
        });
        this.categoryService.getCategories().subscribe(function (categories) {
            _this.categories = categories;
        });
        this.inventoryService.getInventories('-1').subscribe(function (items) {
            _this.items = items;
        });
    };
    InventoryTableComponent.prototype.editItem = function (item) {
        console.log(item);
        this.router.navigateByUrl('/workspace/inventory/inventory-item-detail/item-id/1111');
    };
    InventoryTableComponent.prototype.delItem = function (item) {
        var _this = this;
        console.log(item);
        this.confirmationService.confirm({
            message: '确定要删除吗？',
            accept: function () {
                console.log(item);
                _this.messageService.add({ severity: 'success', summary: '成功', detail: '删除数据成功' });
            }
        });
    };
    InventoryTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'inventory-table',
            template: __webpack_require__(/*! ./inventory-table.component.html */ "./src/app/bz-modules/inventory/inventory-table/inventory-table.component.html"),
            styles: [__webpack_require__(/*! ./inventory-table.component.scss */ "./src/app/bz-modules/inventory/inventory-table/inventory-table.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            _common_services_warehouse_service__WEBPACK_IMPORTED_MODULE_4__["WarehouseService"],
            _common_services_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"],
            _common_services_inventory_service__WEBPACK_IMPORTED_MODULE_6__["InventoryService"]])
    ], InventoryTableComponent);
    return InventoryTableComponent;
}());



/***/ }),

/***/ "./src/app/bz-modules/inventory/inventory.component.html":
/*!***************************************************************!*\
  !*** ./src/app/bz-modules/inventory/inventory.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/bz-modules/inventory/inventory.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/bz-modules/inventory/inventory.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J6LW1vZHVsZXMvaW52ZW50b3J5L2ludmVudG9yeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/bz-modules/inventory/inventory.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/bz-modules/inventory/inventory.component.ts ***!
  \*************************************************************/
/*! exports provided: InventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryComponent", function() { return InventoryComponent; });
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

var InventoryComponent = /** @class */ (function () {
    function InventoryComponent() {
    }
    InventoryComponent.prototype.ngOnInit = function () {
    };
    InventoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'inventory',
            template: __webpack_require__(/*! ./inventory.component.html */ "./src/app/bz-modules/inventory/inventory.component.html"),
            styles: [__webpack_require__(/*! ./inventory.component.scss */ "./src/app/bz-modules/inventory/inventory.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InventoryComponent);
    return InventoryComponent;
}());



/***/ }),

/***/ "./src/app/bz-modules/inventory/inventory.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/bz-modules/inventory/inventory.module.ts ***!
  \**********************************************************/
/*! exports provided: InventoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryModule", function() { return InventoryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/shared.module */ "./src/app/common/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_components_datatable_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/components/datatable/datatable */ "./node_modules/primeng/components/datatable/datatable.js");
/* harmony import */ var primeng_components_datatable_datatable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_components_datatable_datatable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_components_calendar_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/components/calendar/calendar */ "./node_modules/primeng/components/calendar/calendar.js");
/* harmony import */ var primeng_components_calendar_calendar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_components_calendar_calendar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/components/dropdown/dropdown */ "./node_modules/primeng/components/dropdown/dropdown.js");
/* harmony import */ var primeng_components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/components/tabview/tabview */ "./node_modules/primeng/components/tabview/tabview.js");
/* harmony import */ var primeng_components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _inventory_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inventory.component */ "./src/app/bz-modules/inventory/inventory.component.ts");
/* harmony import */ var _inventory_table_inventory_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inventory-table/inventory-table.component */ "./src/app/bz-modules/inventory/inventory-table/inventory-table.component.ts");
/* harmony import */ var _inventory_item_detail_inventory_item_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./inventory-item-detail/inventory-item-detail.component */ "./src/app/bz-modules/inventory/inventory-item-detail/inventory-item-detail.component.ts");
/* harmony import */ var _inbound_receipt_table_inbound_receipt_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./inbound-receipt-table/inbound-receipt-table.component */ "./src/app/bz-modules/inventory/inbound-receipt-table/inbound-receipt-table.component.ts");
/* harmony import */ var _inbound_receipt_detail_inbound_receipt_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./inbound-receipt-detail/inbound-receipt-detail.component */ "./src/app/bz-modules/inventory/inbound-receipt-detail/inbound-receipt-detail.component.ts");
/* harmony import */ var _outbound_receipt_table_outbound_receipt_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./outbound-receipt-table/outbound-receipt-table.component */ "./src/app/bz-modules/inventory/outbound-receipt-table/outbound-receipt-table.component.ts");
/* harmony import */ var _outbound_receipt_detail_outbound_receipt_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./outbound-receipt-detail/outbound-receipt-detail.component */ "./src/app/bz-modules/inventory/outbound-receipt-detail/outbound-receipt-detail.component.ts");
/* harmony import */ var _new_inbound_receipt_new_inbound_receipt_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./new-inbound-receipt/new-inbound-receipt.component */ "./src/app/bz-modules/inventory/new-inbound-receipt/new-inbound-receipt.component.ts");
/* harmony import */ var _common_services_inventory_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/services/inventory.service */ "./src/app/common/services/inventory.service.ts");
/* harmony import */ var _new_outbound_receipt_new_outbound_receipt_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./new-outbound-receipt/new-outbound-receipt.component */ "./src/app/bz-modules/inventory/new-outbound-receipt/new-outbound-receipt.component.ts");
/* harmony import */ var _inventory_routes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./inventory.routes */ "./src/app/bz-modules/inventory/inventory.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var InventoryModule = /** @class */ (function () {
    function InventoryModule() {
    }
    InventoryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _common_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                _common_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                primeng_components_datatable_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableModule"],
                primeng_components_calendar_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarModule"],
                primeng_components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_5__["DropdownModule"],
                primeng_components_tabview_tabview__WEBPACK_IMPORTED_MODULE_6__["TabViewModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_inventory_routes__WEBPACK_IMPORTED_MODULE_17__["inventoryRoutes"])
            ],
            declarations: [
                _inventory_component__WEBPACK_IMPORTED_MODULE_7__["InventoryComponent"],
                _inventory_table_inventory_table_component__WEBPACK_IMPORTED_MODULE_8__["InventoryTableComponent"],
                _inventory_item_detail_inventory_item_detail_component__WEBPACK_IMPORTED_MODULE_9__["InventoryItemDetailComponent"],
                _inbound_receipt_table_inbound_receipt_table_component__WEBPACK_IMPORTED_MODULE_10__["InboundReceiptTableComponent"],
                _inbound_receipt_detail_inbound_receipt_detail_component__WEBPACK_IMPORTED_MODULE_11__["InboundReceiptDetailComponent"],
                _outbound_receipt_table_outbound_receipt_table_component__WEBPACK_IMPORTED_MODULE_12__["OutboundReceiptTableComponent"],
                _outbound_receipt_detail_outbound_receipt_detail_component__WEBPACK_IMPORTED_MODULE_13__["OutboundReceiptDetailComponent"],
                _new_inbound_receipt_new_inbound_receipt_component__WEBPACK_IMPORTED_MODULE_14__["NewInboundReceiptComponent"],
                _new_outbound_receipt_new_outbound_receipt_component__WEBPACK_IMPORTED_MODULE_16__["NewOutboundReceiptComponent"]
            ],
            providers: [
                _common_services_inventory_service__WEBPACK_IMPORTED_MODULE_15__["InventoryService"]
            ]
        })
    ], InventoryModule);
    return InventoryModule;
}());



/***/ }),

/***/ "./src/app/bz-modules/inventory/inventory.routes.ts":
/*!**********************************************************!*\
  !*** ./src/app/bz-modules/inventory/inventory.routes.ts ***!
  \**********************************************************/
/*! exports provided: inventoryRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inventoryRoutes", function() { return inventoryRoutes; });
/* harmony import */ var _inventory_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inventory.component */ "./src/app/bz-modules/inventory/inventory.component.ts");
/* harmony import */ var _inventory_table_inventory_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inventory-table/inventory-table.component */ "./src/app/bz-modules/inventory/inventory-table/inventory-table.component.ts");
/* harmony import */ var _inventory_item_detail_inventory_item_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inventory-item-detail/inventory-item-detail.component */ "./src/app/bz-modules/inventory/inventory-item-detail/inventory-item-detail.component.ts");
/* harmony import */ var _inbound_receipt_table_inbound_receipt_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inbound-receipt-table/inbound-receipt-table.component */ "./src/app/bz-modules/inventory/inbound-receipt-table/inbound-receipt-table.component.ts");
/* harmony import */ var _inbound_receipt_detail_inbound_receipt_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inbound-receipt-detail/inbound-receipt-detail.component */ "./src/app/bz-modules/inventory/inbound-receipt-detail/inbound-receipt-detail.component.ts");
/* harmony import */ var _outbound_receipt_table_outbound_receipt_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./outbound-receipt-table/outbound-receipt-table.component */ "./src/app/bz-modules/inventory/outbound-receipt-table/outbound-receipt-table.component.ts");
/* harmony import */ var _outbound_receipt_detail_outbound_receipt_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./outbound-receipt-detail/outbound-receipt-detail.component */ "./src/app/bz-modules/inventory/outbound-receipt-detail/outbound-receipt-detail.component.ts");
/* harmony import */ var _new_inbound_receipt_new_inbound_receipt_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new-inbound-receipt/new-inbound-receipt.component */ "./src/app/bz-modules/inventory/new-inbound-receipt/new-inbound-receipt.component.ts");
/* harmony import */ var _new_outbound_receipt_new_outbound_receipt_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./new-outbound-receipt/new-outbound-receipt.component */ "./src/app/bz-modules/inventory/new-outbound-receipt/new-outbound-receipt.component.ts");









var inventoryRoutes = [{
        path: '',
        component: _inventory_component__WEBPACK_IMPORTED_MODULE_0__["InventoryComponent"],
        children: [
            { path: '', redirectTo: 'inventorytable/page/1', pathMatch: 'full' },
            { path: 'inventory-table/page/:page', component: _inventory_table_inventory_table_component__WEBPACK_IMPORTED_MODULE_1__["InventoryTableComponent"] },
            { path: 'inventory-item-detail/item-id/:item-id', component: _inventory_item_detail_inventory_item_detail_component__WEBPACK_IMPORTED_MODULE_2__["InventoryItemDetailComponent"] },
            { path: 'inbound-receipt-table/page/:page', component: _inbound_receipt_table_inbound_receipt_table_component__WEBPACK_IMPORTED_MODULE_3__["InboundReceiptTableComponent"] },
            { path: 'inbound-receipt-detail/receipt-no/:receipt-no', component: _inbound_receipt_detail_inbound_receipt_detail_component__WEBPACK_IMPORTED_MODULE_4__["InboundReceiptDetailComponent"] },
            { path: 'new-inbound-receipt/receipt-no/:receipt-no', component: _new_inbound_receipt_new_inbound_receipt_component__WEBPACK_IMPORTED_MODULE_7__["NewInboundReceiptComponent"] },
            { path: 'outbound-receipt-table/page/:page', component: _outbound_receipt_table_outbound_receipt_table_component__WEBPACK_IMPORTED_MODULE_5__["OutboundReceiptTableComponent"] },
            { path: 'outbound-receipt-detail/receipt-no/:receipt-no', component: _outbound_receipt_detail_outbound_receipt_detail_component__WEBPACK_IMPORTED_MODULE_6__["OutboundReceiptDetailComponent"] },
            { path: 'new-outbound-receipt/receipt-no/:receipt-no', component: _new_outbound_receipt_new_outbound_receipt_component__WEBPACK_IMPORTED_MODULE_8__["NewOutboundReceiptComponent"] }
        ]
    }];


/***/ }),

/***/ "./src/app/bz-modules/inventory/new-inbound-receipt/new-inbound-receipt.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/new-inbound-receipt/new-inbound-receipt.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-margin\">\n  <div class=\"col-xs-12 form-bgcolor col-padding\">\n    <h3 class=\"text-center\">{{inboundDetail.title}}</h3>\n    <form class=\"form-inline form-bgcolor\">\n      <div class=\"form-group col-xs-4\">\n        <label>{{'inboundAndOutbound.receiptNo' | translate}}：</label>\n        <p class=\"form-control-static\">{{inboundDetail.receiptNo}}</p>\n      </div>\n      <div class=\"form-group col-xs-4\">\n        <label>{{'inboundAndOutbound.waybillNo' | translate}}：</label>\n        <p class=\"form-control-static\">{{inboundDetail.waybillNo}}</p>\n      </div>\n      <div class=\"form-group col-xs-4\">\n        <label>{{'inboundAndOutbound.inboundTime' | translate}}：</label>\n        <p class=\"form-control-static\">{{inboundDetail.inboundTime | date:'yyyy-MM-dd HH:mm:ss'}}</p>\n      </div>\n    </form>\n\n    <table class=\"table table-bordered detail-table\">\n      <thead>\n        <tr>\n          <th>{{'inboundAndOutbound.index' | translate}}</th>\n          <th>{{'inboundAndOutbound.vendor' | translate}}</th>\n          <th>{{'inboundAndOutbound.productName' | translate}}</th>\n          <th>{{'inboundAndOutbound.specificat' | translate}}</th>\n          <th>{{'inboundAndOutbound.model' | translate}}</th>\n          <th>{{'inboundAndOutbound.origin' | translate}}</th>\n          <th>{{'inboundAndOutbound.number' | translate}}</th>\n          <th>{{'inboundAndOutbound.itemUnit' | translate}}</th>\n          <th>{{'inboundAndOutbound.price' | translate}}</th>\n          <th>{{'inboundAndOutbound.sum' | translate}}</th>\n          <th>{{'inboundAndOutbound.warehouse' | translate}}</th>\n          <th>{{'inboundAndOutbound.cellNo' | translate}}</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of inboundDetail.items\">\n          <th scope=\"row\">{{item.index}}</th>\n          <td>{{item.vendor}}</td>\n          <td>{{item.itemName}}</td>\n          <td>{{item.spec}}</td>\n          <td>{{item.model}}</td>\n          <td>{{item.producerLocation}}</td>\n          <td>{{item.num}}</td>\n          <td>{{item.unit}}</td>\n          <td>{{item.price}}</td>\n          <td>{{item.sum}}</td>\n          <td>{{item.warehouse}}</td>\n          <td>{{item.storeCell}}</td>\n        </tr>\n        <tr>\n          <td colspan=\"12\">请扫描货品</td>\n        </tr>\n      </tbody>\n    </table>\n\n    <form class=\"form-inline\">\n      <div class=\"form-group col-xs-4\">\n        <label>{{'inboundAndOutbound.handlerName' | translate}}：</label>\n        <label class=\"form-control-static\">{{inboundDetail.handlerName}}</label>\n      </div>\n      <div class=\"form-group col-xs-4\">\n        <label>{{'inboundAndOutbound.acceptor' | translate}}：</label>\n        <label class=\"form-control-static\">{{inboundDetail.acceptor}}</label>\n      </div>\n      <div class=\"form-group col-xs-4\">\n        <label>{{'inboundAndOutbound.deliveryman' | translate}}：</label>\n        <label class=\"form-control-static\">{{inboundDetail.deliveryman}}</label>\n      </div>\n    </form>\n\n    <form class=\"form-inline\">\n      <div class=\"form-group col-xs-12\">\n        <button type=\"button\" class=\"btn btn-primary btn-margin-1rem\" (click)=\"returnToTable()\">{{'return' | translate}}</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"printReceipt()\">{{'print' | translate}}</button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/bz-modules/inventory/new-inbound-receipt/new-inbound-receipt.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/new-inbound-receipt/new-inbound-receipt.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detail-table {\n  margin: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnotbW9kdWxlcy9pbnZlbnRvcnkvbmV3LWluYm91bmQtcmVjZWlwdC9GOlxcUm9ja3dvb2RcXHdvcmtzcGFjZVxcT3BlbldNUy1uZXcvc3JjXFxhcHBcXGJ6LW1vZHVsZXNcXGludmVudG9yeVxcbmV3LWluYm91bmQtcmVjZWlwdFxcbmV3LWluYm91bmQtcmVjZWlwdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2J6LW1vZHVsZXMvaW52ZW50b3J5L25ldy1pbmJvdW5kLXJlY2VpcHQvbmV3LWluYm91bmQtcmVjZWlwdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWwtdGFibGV7XHJcbiAgICBtYXJnaW46MTVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/bz-modules/inventory/new-inbound-receipt/new-inbound-receipt.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/new-inbound-receipt/new-inbound-receipt.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: NewInboundReceiptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewInboundReceiptComponent", function() { return NewInboundReceiptComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_new_inbound_receipt_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/services/new-inbound-receipt.service */ "./src/app/common/services/new-inbound-receipt.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewInboundReceiptComponent = /** @class */ (function () {
    function NewInboundReceiptComponent(router, newInboundReceiptService) {
        this.router = router;
        this.newInboundReceiptService = newInboundReceiptService;
    }
    NewInboundReceiptComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newInboundReceiptService.getInboundDetail().subscribe(function (inboundDetail) {
            _this.inboundDetail = inboundDetail;
        });
    };
    NewInboundReceiptComponent.prototype.returnToTable = function () {
        this.router.navigateByUrl('/workspace/inventory/inbound-receipt-table/page/1');
    };
    NewInboundReceiptComponent.prototype.printReceipt = function () {
        window.print();
    };
    NewInboundReceiptComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'new-inbound-receipt',
            template: __webpack_require__(/*! ./new-inbound-receipt.component.html */ "./src/app/bz-modules/inventory/new-inbound-receipt/new-inbound-receipt.component.html"),
            styles: [__webpack_require__(/*! ./new-inbound-receipt.component.scss */ "./src/app/bz-modules/inventory/new-inbound-receipt/new-inbound-receipt.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _common_services_new_inbound_receipt_service__WEBPACK_IMPORTED_MODULE_2__["NewInboundReceiptService"]])
    ], NewInboundReceiptComponent);
    return NewInboundReceiptComponent;
}());



/***/ }),

/***/ "./src/app/bz-modules/inventory/new-outbound-receipt/new-outbound-receipt.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/new-outbound-receipt/new-outbound-receipt.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-margin\">\n    <div class=\"col-xs-12 form-bgcolor col-padding\">\n      <h3 class=\"text-center\">{{outboundDetail.title}}</h3>\n      <form class=\"form-inline\">\n        <div class=\"form-group col-xs-3\">\n          <label class=\"control-label\">{{'inboundAndOutbound.warehouse' | translate}}：</label>\n          <label class=\"form-control-static\">{{outboundDetail.warehouseName}}</label>\n        </div>\n        <div class=\"form-group col-xs-3\">\n          <label class=\"control-label\">{{'inboundAndOutbound.outReceiptNo' | translate}}：</label>\n          <label class=\"form-control-static\">{{outboundDetail.receiptNo}}</label>\n        </div>\n        <div class=\"form-group col-xs-3\">\n          <label class=\"control-label\">{{'inboundAndOutbound.waybillNo' | translate}}：</label>\n          <label class=\"form-control-static\">{{outboundDetail.waybillNo}}</label>\n        </div>\n        <div class=\"form-group col-xs-3\">\n          <label class=\"control-label\">{{'inboundAndOutbound.outboundTime' | translate}}：</label>\n          <label class=\"form-control-static\">{{outboundDetail.outboundTime | date:'yyyy-MM-dd HH:mm:ss'}}</label>\n        </div>\n      </form>\n\n      <table class=\"table table-bordered detail-table\">\n        <thead>\n          <tr>\n            <th>{{'inboundAndOutbound.index' | translate}}</th>\n            <th>{{'inboundAndOutbound.receiver' | translate}}</th>\n            <th>{{'inboundAndOutbound.productName' | translate}}</th>\n            <th>{{'inboundAndOutbound.specificat' | translate}}</th>\n            <th>{{'inboundAndOutbound.model' | translate}}</th>\n            <th>{{'inboundAndOutbound.origin' | translate}}</th>\n            <th>{{'inboundAndOutbound.number' | translate}}</th>\n            <th>{{'inboundAndOutbound.itemUnit' | translate}}</th>\n            <th>{{'inboundAndOutbound.price' | translate}}</th>\n            <th>{{'inboundAndOutbound.sum' | translate}}</th>\n            <th>{{'inboundAndOutbound.cellNo' | translate}}</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of outboundDetail.items\">\n            <th scope=\"row\">{{item.index}}</th>\n            <td>{{item.receiver}}</td>\n            <td>{{item.itemName}}</td>\n            <td>{{item.spec}}</td>\n            <td>{{item.model}}</td>\n            <td>{{item.producerLocation}}</td>\n            <td>{{item.num}}</td>\n            <td>{{item.unit}}</td>\n            <td>{{item.price}}</td>\n            <td>{{item.sum}}</td>\n            <td>{{item.storeCell}}</td>\n          </tr>\n          <tr>\n            <td colspan=\"12\">请扫描货品</td>\n          </tr>\n        </tbody>\n      </table>\n\n      <form class=\"form-inline\">\n        <div class=\"form-group col-xs-4\">\n          <label>{{'inboundAndOutbound.handlerName' | translate}}：</label>\n          <label class=\"form-control-static\">{{outboundDetail.handlerName}}</label>\n        </div>\n        <div class=\"form-group col-xs-4\">\n          <label>{{'inboundAndOutbound.acceptor' | translate}}：</label>\n          <label class=\"form-control-static\">{{outboundDetail.acceptor}}</label>\n        </div>\n        <div class=\"form-group col-xs-4\">\n          <label>{{'inboundAndOutbound.deliveryman' | translate}}：</label>\n          <label class=\"form-control-static\">{{outboundDetail.deliveryman}}</label>\n        </div>\n      </form>\n\n      <form class=\"form-inline\">\n        <div class=\"form-group col-xs-12\">\n          <button type=\"button\" class=\"btn btn-primary btn-margin-1rem \" (click)=\"returnToTable()\">{{'return' | translate}}</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"printReceipt()\">{{'print' | translate}}</button>\n        </div>\n      </form>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/bz-modules/inventory/new-outbound-receipt/new-outbound-receipt.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/new-outbound-receipt/new-outbound-receipt.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detail-table {\n  margin: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnotbW9kdWxlcy9pbnZlbnRvcnkvbmV3LW91dGJvdW5kLXJlY2VpcHQvRjpcXFJvY2t3b29kXFx3b3Jrc3BhY2VcXE9wZW5XTVMtbmV3L3NyY1xcYXBwXFxiei1tb2R1bGVzXFxpbnZlbnRvcnlcXG5ldy1vdXRib3VuZC1yZWNlaXB0XFxuZXctb3V0Ym91bmQtcmVjZWlwdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2J6LW1vZHVsZXMvaW52ZW50b3J5L25ldy1vdXRib3VuZC1yZWNlaXB0L25ldy1vdXRib3VuZC1yZWNlaXB0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRldGFpbC10YWJsZXtcclxuICAgIG1hcmdpbjoxNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/bz-modules/inventory/new-outbound-receipt/new-outbound-receipt.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/new-outbound-receipt/new-outbound-receipt.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: NewOutboundReceiptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewOutboundReceiptComponent", function() { return NewOutboundReceiptComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_new_outbound_receipt_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/services/new-outbound-receipt.service */ "./src/app/common/services/new-outbound-receipt.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewOutboundReceiptComponent = /** @class */ (function () {
    function NewOutboundReceiptComponent(router, newOutboundReceiptService) {
        this.router = router;
        this.newOutboundReceiptService = newOutboundReceiptService;
    }
    NewOutboundReceiptComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newOutboundReceiptService.getOutboundDetail().subscribe(function (outboundDetail) {
            _this.outboundDetail = outboundDetail;
        });
    };
    NewOutboundReceiptComponent.prototype.returnToTable = function () {
        this.router.navigateByUrl('/workspace/inventory/outbound-receipt-table/page/1');
    };
    NewOutboundReceiptComponent.prototype.printReceipt = function () {
        window.print();
    };
    NewOutboundReceiptComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'new-outbound-receipt',
            template: __webpack_require__(/*! ./new-outbound-receipt.component.html */ "./src/app/bz-modules/inventory/new-outbound-receipt/new-outbound-receipt.component.html"),
            styles: [__webpack_require__(/*! ./new-outbound-receipt.component.scss */ "./src/app/bz-modules/inventory/new-outbound-receipt/new-outbound-receipt.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _common_services_new_outbound_receipt_service__WEBPACK_IMPORTED_MODULE_2__["NewOutboundReceiptService"]])
    ], NewOutboundReceiptComponent);
    return NewOutboundReceiptComponent;
}());



/***/ }),

/***/ "./src/app/bz-modules/inventory/outbound-receipt-detail/outbound-receipt-detail.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/outbound-receipt-detail/outbound-receipt-detail.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-margin\">\n  <div class=\"col-xs-12 form-bgcolor col-padding\">\n    <h3 class=\"text-center\">{{outboundDetail.title}}</h3>\n    <form class=\"form-inline\">\n      <div class=\"form-group col-xs-3\">\n        <label class=\"control-label\">{{'inboundAndOutbound.warehouse' | translate}}：</label>\n        <label class=\"form-control-static\">{{outboundDetail.warehouseName}}</label>\n      </div>\n      <div class=\"form-group col-xs-3\">\n        <label class=\"control-label\">{{'inboundAndOutbound.outReceiptNo' | translate}}：</label>\n        <label class=\"form-control-static\">{{outboundDetail.receiptNo}}</label>\n      </div>\n      <div class=\"form-group col-xs-3\">\n        <label class=\"control-label\">{{'inboundAndOutbound.waybillNo' | translate}}：</label>\n        <label class=\"form-control-static\">{{outboundDetail.waybillNo}}</label>\n      </div>\n      <div class=\"form-group col-xs-3\">\n        <label class=\"control-label\">{{'inboundAndOutbound.outboundTime' | translate}}：</label>\n        <label class=\"form-control-static\">{{outboundDetail.outboundTime | date:'yyyy-MM-dd HH:mm:ss'}}</label>\n      </div>\n    </form>\n\n    <table class=\"table table-bordered detail-table\">\n      <thead>\n        <tr>\n          <th>{{'inboundAndOutbound.index' | translate}}</th>\n          <th>{{'inboundAndOutbound.receiver' | translate}}</th>\n          <th>{{'inboundAndOutbound.productName' | translate}}</th>\n          <th>{{'inboundAndOutbound.specificat' | translate}}</th>\n          <th>{{'inboundAndOutbound.model' | translate}}</th>\n          <th>{{'inboundAndOutbound.origin' | translate}}</th>\n          <th>{{'inboundAndOutbound.number' | translate}}</th>\n          <th>{{'inboundAndOutbound.itemUnit' | translate}}</th>\n          <th>{{'inboundAndOutbound.price' | translate}}</th>\n          <th>{{'inboundAndOutbound.sum' | translate}}</th>\n          <th>{{'inboundAndOutbound.cellNo' | translate}}</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of outboundDetail.items\">\n          <th scope=\"row\">{{item.index}}</th>\n          <td>{{item.receiver}}</td>\n          <td>{{item.itemName}}</td>\n          <td>{{item.spec}}</td>\n          <td>{{item.model}}</td>\n          <td>{{item.producerLocation}}</td>\n          <td>{{item.num}}</td>\n          <td>{{item.unit}}</td>\n          <td>{{item.price}}</td>\n          <td>{{item.sum}}</td>\n          <td>{{item.storeCell}}</td>\n        </tr>\n        <tr>\n          <td colspan=\"12\">{{'inboundAndOutbound.totalNum' | translate}}：{{outboundDetail.totalNum}}</td>\n        </tr>\n      </tbody>\n    </table>\n\n    <form class=\"form-inline\">\n      <div class=\"form-group col-xs-4\">\n        <label>{{'inboundAndOutbound.handlerName' | translate}}：</label>\n        <label class=\"form-control-static\">{{outboundDetail.handlerName}}</label>\n      </div>\n      <div class=\"form-group col-xs-4\">\n        <label>{{'inboundAndOutbound.acceptor' | translate}}：</label>\n        <label class=\"form-control-static\">{{outboundDetail.acceptor}}</label>\n      </div>\n      <div class=\"form-group col-xs-4\">\n        <label>{{'inboundAndOutbound.deliveryman' | translate}}：</label>\n        <label class=\"form-control-static\">{{outboundDetail.deliveryman}}</label>\n      </div>\n    </form>\n\n    <form class=\"form-inline\">\n      <div class=\"form-group col-xs-12\">\n        <button type=\"button\" class=\"btn btn-primary btn-margin-1rem\" (click)=\"returnToTable()\">{{'return' | translate}}</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"printReceipt()\">{{'print' | translate}}</button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/bz-modules/inventory/outbound-receipt-detail/outbound-receipt-detail.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/outbound-receipt-detail/outbound-receipt-detail.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detail-table {\n  margin: 15px; }\n  .detail-table th,\n  .detail-table td {\n    text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnotbW9kdWxlcy9pbnZlbnRvcnkvb3V0Ym91bmQtcmVjZWlwdC1kZXRhaWwvRjpcXFJvY2t3b29kXFx3b3Jrc3BhY2VcXE9wZW5XTVMtbmV3L3NyY1xcYXBwXFxiei1tb2R1bGVzXFxpbnZlbnRvcnlcXG91dGJvdW5kLXJlY2VpcHQtZGV0YWlsXFxvdXRib3VuZC1yZWNlaXB0LWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVksRUFBQTtFQURkOztJQUlJLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYnotbW9kdWxlcy9pbnZlbnRvcnkvb3V0Ym91bmQtcmVjZWlwdC1kZXRhaWwvb3V0Ym91bmQtcmVjZWlwdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV0YWlsLXRhYmxlIHtcbiAgbWFyZ2luOiAxNXB4O1xuICB0aCxcbiAgdGQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/bz-modules/inventory/outbound-receipt-detail/outbound-receipt-detail.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/outbound-receipt-detail/outbound-receipt-detail.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: OutboundReceiptDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutboundReceiptDetailComponent", function() { return OutboundReceiptDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_outbound_receipt_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/services/outbound-receipt-detail.service */ "./src/app/common/services/outbound-receipt-detail.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OutboundReceiptDetailComponent = /** @class */ (function () {
    function OutboundReceiptDetailComponent(router, outboundReceiptDetailService) {
        this.router = router;
        this.outboundReceiptDetailService = outboundReceiptDetailService;
    }
    OutboundReceiptDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.outboundReceiptDetailService.getOutboundDetail().subscribe(function (outboundDetail) {
            _this.outboundDetail = outboundDetail;
        });
    };
    OutboundReceiptDetailComponent.prototype.returnToTable = function () {
        this.router.navigateByUrl("/workspace/inventory/outbound-receipt-table/page/1");
    };
    OutboundReceiptDetailComponent.prototype.printReceipt = function () {
        window.print();
    };
    OutboundReceiptDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "outbound-receipt-detail",
            template: __webpack_require__(/*! ./outbound-receipt-detail.component.html */ "./src/app/bz-modules/inventory/outbound-receipt-detail/outbound-receipt-detail.component.html"),
            styles: [__webpack_require__(/*! ./outbound-receipt-detail.component.scss */ "./src/app/bz-modules/inventory/outbound-receipt-detail/outbound-receipt-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _common_services_outbound_receipt_detail_service__WEBPACK_IMPORTED_MODULE_2__["OutboundReceiptDetailService"]])
    ], OutboundReceiptDetailComponent);
    return OutboundReceiptDetailComponent;
}());



/***/ }),

/***/ "./src/app/bz-modules/inventory/outbound-receipt-table/outbound-receipt-table.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/outbound-receipt-table/outbound-receipt-table.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-table-container\">\n  <h3 class=\"header-no-margin\">{{'inboundAndOutbound.outboundControl' | translate}}</h3>\n  <form class=\"form-inline top-filter-form form-bgcolor\" role=\"form\">\n    <div class=\"form-group btn-margin-1rem\">\n      <label>{{'inboundAndOutbound.selectedInventory' | translate}}：</label>\n      <p-dropdown [options]=\"warehouses\" optionLabel=\"name\" [(ngModel)]=\"selectedInbentory\" name=\"warehouse\" [style]=\"{'width':'150px'}\"></p-dropdown>\n    </div>\n    <div class=\"form-group btn-margin-1rem\">\n      <label>{{'inboundAndOutbound.startDate' | translate}}：</label>\n      <p-calendar [(ngModel)]=\"startDate\" dateFormat=\"yy-mm-dd\" hourFormat=\"24\" name=\"startDate\"></p-calendar>\n    </div>\n    <div class=\"form-group btn-margin-1rem\">\n      <label>{{'inboundAndOutbound.endDate' | translate}}：hahahahahaahaha</label>\n      <p-calendar [(ngModel)]=\"endDate\" dateFormat=\"yy-mm-dd\" hourFormat=\"24\" name=\"endDate\"></p-calendar>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-primary\" type=\"button\" (click)=\"newReceipt()\">\n        <i class=\"fa fa-user\" aria-hidden=\"true\"></i>{{'inboundAndOutbound.newOutbound' | translate}}\n      </button>\n    </div>\n  </form>\n  <div class=\"row no-margin\">\n    <div class=\"col-xs-12 form-bgcolor col-padding \">\n      <div class=\"user-item-container\">\n        <p-dataTable [value]=\"items\" [rows]=\"10\" [paginator]=\"true\" [pageLinks]=\"3\" [rowsPerPageOptions]=\"[5,10,20]\" dataKey=\"index\">\n          <p-column field=\"index\" header=\"{{'inboundAndOutbound.index' | translate}}\" [sortable]=\"true\" [style]=\"{'width':'80px'}\"></p-column>\n          <p-column field=\"warehouseName\" header=\"{{'inboundAndOutbound.warehouseName' | translate}}\"></p-column>\n          <p-column field=\"receiptNo\" header=\"{{'inboundAndOutbound.outReceiptNo' | translate}}\" [sortable]=\"true\"></p-column>\n          <p-column field=\"waybillNo\" header=\"{{'inboundAndOutbound.waybillNo' | translate}}\" [sortable]=\"true\"></p-column>\n          <p-column field=\"enterDate\" header=\"{{'inboundAndOutbound.outDate' | translate}}\" [sortable]=\"true\"></p-column>\n          <p-column header=\"{{'operate' | translate}}\">\n            <ng-template let-item=\"rowData\" pTemplate=\"body\">\n              <button type=\"button\" class=\"btn btn-primary btn-margin-1rem\" (click)=\"receiptDetail()\">{{'editItem' | translate}}</button>\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"printReceipt()\">{{'print' | translate}}</button>\n            </ng-template>\n          </p-column>\n        </p-dataTable>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/bz-modules/inventory/outbound-receipt-table/outbound-receipt-table.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/outbound-receipt-table/outbound-receipt-table.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J6LW1vZHVsZXMvaW52ZW50b3J5L291dGJvdW5kLXJlY2VpcHQtdGFibGUvb3V0Ym91bmQtcmVjZWlwdC10YWJsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/bz-modules/inventory/outbound-receipt-table/outbound-receipt-table.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/bz-modules/inventory/outbound-receipt-table/outbound-receipt-table.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: OutboundReceiptTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutboundReceiptTableComponent", function() { return OutboundReceiptTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_warehouse_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/services/warehouse.service */ "./src/app/common/services/warehouse.service.ts");
/* harmony import */ var _common_services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/services/category.service */ "./src/app/common/services/category.service.ts");
/* harmony import */ var _common_services_outbound_receipt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/services/outbound-receipt.service */ "./src/app/common/services/outbound-receipt.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OutboundReceiptTableComponent = /** @class */ (function () {
    function OutboundReceiptTableComponent(router, activeRoute, warehouseService, categoryService, outboundReceiptService) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.warehouseService = warehouseService;
        this.categoryService = categoryService;
        this.outboundReceiptService = outboundReceiptService;
    }
    OutboundReceiptTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.startDate = new Date();
        this.endDate = new Date();
        this.warehouseService.getWarehouses().subscribe(function (warehouses) {
            _this.warehouses = warehouses;
        });
        this.outboundReceiptService.getOutboundRecords().subscribe(function (items) {
            _this.items = items;
        });
    };
    OutboundReceiptTableComponent.prototype.newReceipt = function () {
        this.router.navigateByUrl('/workspace/inventory/new-outbound-receipt/receipt-no/IN-1-2222222');
    };
    OutboundReceiptTableComponent.prototype.receiptDetail = function () {
        this.router.navigateByUrl('/workspace/inventory/outbound-receipt-detail/receipt-no/IN-1-2222222');
    };
    OutboundReceiptTableComponent.prototype.printReceipt = function () {
        window.print();
    };
    OutboundReceiptTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'outbound-receipt-table',
            template: __webpack_require__(/*! ./outbound-receipt-table.component.html */ "./src/app/bz-modules/inventory/outbound-receipt-table/outbound-receipt-table.component.html"),
            styles: [__webpack_require__(/*! ./outbound-receipt-table.component.scss */ "./src/app/bz-modules/inventory/outbound-receipt-table/outbound-receipt-table.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _common_services_warehouse_service__WEBPACK_IMPORTED_MODULE_2__["WarehouseService"],
            _common_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"],
            _common_services_outbound_receipt_service__WEBPACK_IMPORTED_MODULE_4__["OutboundReceiptService"]])
    ], OutboundReceiptTableComponent);
    return OutboundReceiptTableComponent;
}());



/***/ }),

/***/ "./src/app/common/services/inventory.service.ts":
/*!******************************************************!*\
  !*** ./src/app/common/services/inventory.service.ts ***!
  \******************************************************/
/*! exports provided: InventoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryService", function() { return InventoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-service */ "./src/app/common/services/common-service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var InventoryService = /** @class */ (function (_super) {
    __extends(InventoryService, _super);
    function InventoryService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InventoryService.prototype.getInventories = function (warehouseId) {
        return this.hc.get(this.apiURL.inventories);
    };
    InventoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], InventoryService);
    return InventoryService;
}(_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]));



/***/ })

}]);
//# sourceMappingURL=bz-modules-inventory-inventory-module.js.map