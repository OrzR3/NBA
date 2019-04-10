(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["global-layout-workspace-workspace-module"],{

/***/ "./src/app/common/dropdown-directive/dropdown-trigger.directive.ts":
/*!*************************************************************************!*\
  !*** ./src/app/common/dropdown-directive/dropdown-trigger.directive.ts ***!
  \*************************************************************************/
/*! exports provided: DropdownTriggerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownTriggerDirective", function() { return DropdownTriggerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dropdown_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown.directive */ "./src/app/common/dropdown-directive/dropdown.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DropdownTriggerDirective = /** @class */ (function () {
    function DropdownTriggerDirective(dropdown, elementRef) {
        var _this = this;
        this.dropdown = dropdown;
        this.elementRef = elementRef;
        this.closeDropdownOnOutsideClick = function (event) { _this.closeIfInClosableZone(event); };
    }
    DropdownTriggerDirective.prototype.open = function () {
        if (this.dropdown.isOpened())
            return;
        this.dropdown.open();
        document.addEventListener("click", this.closeDropdownOnOutsideClick, true);
    };
    DropdownTriggerDirective.prototype.close = function () {
        if (!this.dropdown.isOpened())
            return;
        this.dropdown.close();
        document.removeEventListener("click", this.closeDropdownOnOutsideClick, true);
    };
    DropdownTriggerDirective.prototype.toggle = function () {
        if (this.dropdown.isOpened()) {
            this.close();
        }
        else {
            this.open();
        }
    };
    DropdownTriggerDirective.prototype.openDropdown = function () {
        if (this.dropdown.isOpened() && this.dropdown.toggleClick) {
            this.close();
        }
        else {
            this.open();
        }
    };
    //如果点击的位置不在下拉菜单内部，则关闭下拉
    DropdownTriggerDirective.prototype.closeIfInClosableZone = function (event) {
        if (event.target !== this.elementRef.nativeElement
            && !this.elementRef.nativeElement.contains(event.target)) {
            this.dropdown.close();
            document.removeEventListener("click", this.closeDropdownOnOutsideClick, true);
        }
    };
    DropdownTriggerDirective.prototype.ngOnDestroy = function () {
        document.removeEventListener("click", this.closeDropdownOnOutsideClick, true);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("click"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DropdownTriggerDirective.prototype, "openDropdown", null);
    DropdownTriggerDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[dropdown-trigger]',
            exportAs: "dropdown-trigger"
        })
        /**
         * 下拉按钮，点击这个区域会把原来隐藏的下拉内容显示出来
         * 这个指令用来和DropdownDirective配合实现下拉功能
         * 从github上的这个项目简化而来：https://github.com/pleerock/ngx-dropdown
         */
        ,
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"])()),
        __metadata("design:paramtypes", [_dropdown_directive__WEBPACK_IMPORTED_MODULE_1__["DropdownDirective"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], DropdownTriggerDirective);
    return DropdownTriggerDirective;
}());



/***/ }),

/***/ "./src/app/common/dropdown-directive/dropdown.directive.ts":
/*!*****************************************************************!*\
  !*** ./src/app/common/dropdown-directive/dropdown.directive.ts ***!
  \*****************************************************************/
/*! exports provided: DropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDirective", function() { return DropdownDirective; });
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

var DropdownDirective = /** @class */ (function () {
    function DropdownDirective(elementRef) {
        this.elementRef = elementRef;
        this.toggleClick = true;
        this.onOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DropdownDirective.prototype.open = function () {
        // 这种操作HTML元素的方式还是很丑陋的，对吧？
        var element = this.elementRef.nativeElement;
        element.classList.add('open');
        this.onOpen.emit('open');
    };
    DropdownDirective.prototype.close = function () {
        var element = this.elementRef.nativeElement;
        element.classList.remove('open');
        this.onClose.emit('close');
    };
    DropdownDirective.prototype.isOpened = function () {
        var element = this.elementRef.nativeElement;
        return element.classList.contains('open');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("dropdownToggle"),
        __metadata("design:type", Boolean)
    ], DropdownDirective.prototype, "toggleClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DropdownDirective.prototype, "onOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DropdownDirective.prototype, "onClose", void 0);
    DropdownDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[dropdown]',
            exportAs: 'dropdown'
        })
        /**
         * 下拉菜单本身
         * 从github上的这个项目简化而来：https://github.com/pleerock/ngx-dropdown
         */
        ,
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], DropdownDirective);
    return DropdownDirective;
}());



/***/ }),

/***/ "./src/app/global-layout/breadcrumb/breadcrumb.component.html":
/*!********************************************************************!*\
  !*** ./src/app/global-layout/breadcrumb/breadcrumb.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  breadcrumb works!\n</p> -->\n"

/***/ }),

/***/ "./src/app/global-layout/breadcrumb/breadcrumb.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/global-layout/breadcrumb/breadcrumb.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1sYXlvdXQvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/global-layout/breadcrumb/breadcrumb.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/global-layout/breadcrumb/breadcrumb.component.ts ***!
  \******************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
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

var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent() {
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
    };
    BreadcrumbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'breadcrumb',
            template: __webpack_require__(/*! ./breadcrumb.component.html */ "./src/app/global-layout/breadcrumb/breadcrumb.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumb.component.scss */ "./src/app/global-layout/breadcrumb/breadcrumb.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/global-layout/footer/footer.component.html":
/*!************************************************************!*\
  !*** ./src/app/global-layout/footer/footer.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/global-layout/footer/footer.component.scss":
/*!************************************************************!*\
  !*** ./src/app/global-layout/footer/footer.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1sYXlvdXQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/global-layout/footer/footer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/global-layout/footer/footer.component.ts ***!
  \**********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/global-layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/global-layout/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/global-layout/menu/menu.component.html":
/*!********************************************************!*\
  !*** ./src/app/global-layout/menu/menu.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ul\n  app-submenu\n  [item]=\"model\"\n  root=\"true\"\n  class=\"ultima-menu ultima-main-menu clearfix\"\n  [reset]=\"reset\"\n  visible=\"true\"\n  parentActive=\"true\"\n></ul> -->\n"

/***/ }),

/***/ "./src/app/global-layout/menu/menu.component.scss":
/*!********************************************************!*\
  !*** ./src/app/global-layout/menu/menu.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1sYXlvdXQvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/global-layout/menu/menu.component.ts":
/*!******************************************************!*\
  !*** ./src/app/global-layout/menu/menu.component.ts ***!
  \******************************************************/
/*! exports provided: MenuComponent, AppSubMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSubMenuComponent", function() { return AppSubMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _workspace_workspace_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../workspace/workspace.component */ "./src/app/global-layout/workspace/workspace.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuComponent = /** @class */ (function () {
    function MenuComponent(app, translateService) {
        this.app = app;
        this.translateService = translateService;
        this.model = [];
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.menulist !== undefined && this.menulist.length !== 0) {
            var dataMap_1 = new Map();
            var filterData_1 = [];
            var rsData = this.menulist;
            rsData.forEach(function (item) {
                if (!dataMap_1.has(item.menu_name)) {
                    dataMap_1.set(item.menu_name, true);
                    filterData_1.push(item);
                }
            });
            console.log(filterData_1);
            filterData_1.forEach(function (res) {
                var models = [];
                if (res.menu_parent_id === null && (res.menu_level).toString() === '1') {
                    models.push({ label: res.menu_name, icon: 'list', routerLink: ['/workspace/inventory/inventory-table/page/1'] });
                    console.log(res);
                    var items_1 = [];
                    filterData_1.forEach(function (rs) {
                        if (rs.menu_parent_id === null || rs.menu_parent_id === '') {
                            return;
                        }
                        else if ((rs.menu_parent_id).toString() === (res.menu_id).toString() && (rs.menu_level).toString() === '2') {
                            var itemm_1 = [];
                            console.log(res.menu_id);
                            filterData_1.forEach(function (r) {
                                if (r.menu_parent_id === null || r.menu_parent_id === '') {
                                    return;
                                }
                                else if ((r.menu_parent_id).toString() === (rs.menu_id).toString() && (r.menu_level).toString() === '3') {
                                    itemm_1.push({ label: r.menu_name, icon: 'desktop_mac',
                                        routerLink: ['/workspace/inventory/inventory-table/page/1'] });
                                }
                            });
                            if (itemm_1.length !== 0 && itemm_1 != null) {
                                console.log();
                                items_1.push({ label: rs.menu_name, icon: 'desktop_mac',
                                    routerLink: ['/workspace/inventory/inventory-table/page/1'], items: itemm_1 });
                            }
                            else {
                                items_1.push({ label: rs.menu_name, icon: 'desktop_mac',
                                    routerLink: ['/workspace/inventory/inventory-table/page/1'] });
                            }
                        }
                    });
                    _this.model.push({ label: res.menu_name, icon: 'list',
                        badge: items_1.length, badgeStyleClass: 'teal-badge', items: items_1 });
                }
            });
        }
        console.log(this.model);
    };
    MenuComponent.prototype.changeTheme = function (theme) {
        var themeLink = document.getElementById('theme-css');
        var layoutLink = document.getElementById('layout-css');
        themeLink.href = 'assets/theme/theme-' + theme + '.css';
        layoutLink.href = 'assets/layout/css/layout-' + theme + '.css';
    };
    MenuComponent.prototype.ngOnChanges = function (changes) {
        if (changes['menulist'] !== undefined) {
            this.menulist = changes['menulist'].currentValue;
            console.log(this.menulist);
            this.ngOnInit();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MenuComponent.prototype, "menulist", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], MenuComponent.prototype, "reset", void 0);
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/global-layout/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/global-layout/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_workspace_workspace_component__WEBPACK_IMPORTED_MODULE_2__["WorkspaceComponent"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], MenuComponent);
    return MenuComponent;
}());

var AppSubMenuComponent = /** @class */ (function () {
    function AppSubMenuComponent(app) {
        this.app = app;
    }
    AppSubMenuComponent.prototype.itemClick = function (event, item, index) {
        var _this = this;
        if (this.root) {
            this.app.menuHoverActive = !this.app.menuHoverActive;
        }
        // avoid processing disabled items
        if (item.disabled) {
            event.preventDefault();
            return true;
        }
        // activate current item and deactivate active sibling if any
        this.activeIndex = (this.activeIndex === index) ? null : index;
        // execute command
        if (item.command) {
            item.command({ originalEvent: event, item: item });
        }
        // prevent hash change
        if (item.items || (!item.url && !item.routerLink)) {
            setTimeout(function () {
                _this.app.layoutMenuScrollerViewChild.moveBar();
            }, 450);
            event.preventDefault();
        }
        // hide menu
        if (!item.items) {
            if (this.app.isHorizontal() || this.app.isSlim()) {
                this.app.resetMenu = true;
            }
            else {
                this.app.resetMenu = false;
            }
            this.app.overlayMenuActive = false;
            this.app.staticMenuMobileActive = false;
            this.app.menuHoverActive = !this.app.menuHoverActive;
        }
    };
    AppSubMenuComponent.prototype.onMouseEnter = function (index) {
        if (this.root && this.app.menuHoverActive && (this.app.isHorizontal() || this.app.isSlim())
            && !this.app.isMobile() && !this.app.isTablet()) {
            this.activeIndex = index;
        }
    };
    AppSubMenuComponent.prototype.isActive = function (index) {
        return this.activeIndex === index;
    };
    Object.defineProperty(AppSubMenuComponent.prototype, "reset", {
        get: function () {
            return this._reset;
        },
        set: function (val) {
            this._reset = val;
            if (this._reset && (this.app.isHorizontal() || this.app.isSlim())) {
                this.activeIndex = null;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppSubMenuComponent.prototype, "parentActive", {
        get: function () {
            return this._parentActive;
        },
        set: function (val) {
            this._parentActive = val;
            if (!this._parentActive) {
                this.activeIndex = null;
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AppSubMenuComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AppSubMenuComponent.prototype, "root", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AppSubMenuComponent.prototype, "visible", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AppSubMenuComponent.prototype, "reset", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AppSubMenuComponent.prototype, "parentActive", null);
    AppSubMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[app-submenu]',
            template: "\n        <ng-template ngFor let-child let-i=\"index\" [ngForOf]=\"(root ? item : item.items)\">\n            <li [ngClass]=\"{'active-menuitem': isActive(i)}\" [class]=\"child.badgeStyleClass\" *ngIf=\"child.visible === false ? false : true\">\n                <a [href]=\"child.url||'#'\" (click)=\"itemClick($event,child,i)\" (mouseenter)=\"onMouseEnter(i)\"\n                   class=\"ripplelink\" *ngIf=\"!child.routerLink\"\n                    [attr.tabindex]=\"!visible ? '-1' : null\" [attr.target]=\"child.target\">\n                    <i *ngIf=\"child.icon\" class=\"material-icons\">{{child.icon}}</i>\n                    <span>{{child.label}}</span>\n                    <span class=\"menuitem-badge\" *ngIf=\"child.badge\">{{child.badge}}</span>\n                    <i class=\"material-icons submenu-icon\" *ngIf=\"child.items\">keyboard_arrow_down</i>\n                </a>\n\n                <a (click)=\"itemClick($event,child,i)\" (mouseenter)=\"onMouseEnter(i)\" class=\"ripplelink\" *ngIf=\"child.routerLink\"\n                    [routerLink]=\"child.routerLink\" routerLinkActive=\"active-menuitem-routerlink\"\n                   [routerLinkActiveOptions]=\"{exact: true}\" [attr.tabindex]=\"!visible ? '-1' : null\" [attr.target]=\"child.target\">\n                    <i *ngIf=\"child.icon\" class=\"material-icons\">{{child.icon}}</i>\n                    <span>{{child.label}}</span>\n                    <span class=\"menuitem-badge\" *ngIf=\"child.badge\">{{child.badge}}</span>\n                    <i class=\"material-icons submenu-icon\" *ngIf=\"child.items\">keyboard_arrow_down</i>\n                </a>\n                <div class=\"layout-menu-tooltip\">\n                    <div class=\"layout-menu-tooltip-arrow\"></div>\n                    <div class=\"layout-menu-tooltip-text\">{{child.label}}</div>\n                </div>\n                <ul app-submenu [item]=\"child\" *ngIf=\"child.items\" [visible]=\"isActive(i)\" [reset]=\"reset\" [parentActive]=\"isActive(i)\"\n                    [@children]=\"(app.isSlim()||app.isHorizontal())&&root ? isActive(i) ?\n                    'visible' : 'hidden' : isActive(i) ? 'visibleAnimated' : 'hiddenAnimated'\"></ul>\n            </li>\n        </ng-template>\n    ",
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('children', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hiddenAnimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: '0px'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('visibleAnimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: '*'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: '*',
                        'z-index': 100
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: '0px',
                        'z-index': '*'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('visibleAnimated => hiddenAnimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hiddenAnimated => visibleAnimated', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [_workspace_workspace_component__WEBPACK_IMPORTED_MODULE_2__["WorkspaceComponent"]])
    ], AppSubMenuComponent);
    return AppSubMenuComponent;
}());



/***/ }),

/***/ "./src/app/global-layout/profile/profile.component.html":
/*!**************************************************************!*\
  !*** ./src/app/global-layout/profile/profile.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profile\" [ngClass]=\"{'profile-expanded':active}\">\n    <a href=\"#\" (click)=\"onClick($event)\">\n        <img class=\"profile-image\" src=\"assets/imgs/io.png\" />\n        <span class=\"profile-name\">{{user.user_code}}</span>\n        <!-- <i class=\"material-icons\">keyboard_arrow_down</i> -->\n    </a>\n</div>\n\n<ul class=\"ultima-menu profile-menu\">\n    <li role=\"menuitem\">\n        <a href=\"#\" class=\"ripplelink\" [attr.tabindex]=\"!active ? '-1' : null\" [routerLink]=\"['basic-data']\">\n            <!--<i class=\"material-icons\"></i>-->\n            <span class=\"set_icon\"></span>\n            <span>系统管理</span>\n        </a>\n    </li>\n    <li role=\"menuitem\">\n        <a href=\"#\" class=\"ripplelink\" [attr.tabindex]=\"!active ? '-1' : null\" [routerLink]=\"['basic-data/category-form']\">\n            <!--<i class=\"material-icons\">person</i>-->\n            <span class=\"team_icon\"></span>\n            <span>客户管理</span>\n        </a>\n    </li>\n    <li role=\"menuitem\">\n        <a href=\"#\" class=\"ripplelink\" [attr.tabindex]=\"!active ? '-1' : null\" [routerLink]=\"['basic-data']\">\n            <!--<i class=\"material-icons\">security</i>-->\n            <span class=\"tranin_icon\"></span>\n            <span>课程管理</span>\n        </a>\n    </li>\n\n    <li role=\"menuitem\">\n        <a href=\"#\" class=\"ripplelink\" [attr.tabindex]=\"!active ? '-1' : null\" [routerLink]=\"['basic-data/match-competition']\">\n            <!--<i class=\"material-icons\">power_settings_new</i>-->\n            <span class=\"match_icon\"></span>\n            <span>赛事活动</span>\n        </a>\n    </li>\n    <li role=\"menuitem\">\n      <a href=\"#\" class=\"ripplelink\" [attr.tabindex]=\"!active ? '-1' : null\" [routerLink]=\"['basic-data/add-match']\">\n          <!--<i class=\"material-icons\">power_settings_new</i>-->\n          <span class=\"match_icon\"></span>\n          <span>添加赛事</span>\n      </a>\n  </li>\n    <li role=\"menuitem\">\n            <a href=\"#\" class=\"ripplelink\" [attr.tabindex]=\"!active ? '-1' : null\" [routerLink]=\"['basic-data']\">\n                <!--<i class=\"material-icons\">power_settings_new</i>-->\n            \t<span class=\"search_icon\"></span>\n                <span>统计查询</span>\n            </a>\n        </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/global-layout/profile/profile.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/global-layout/profile/profile.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".set_icon {\n  width: 27px;\n  height: 27px;\n  display: block;\n  background: url('Setting_icon.svg') no-repeat center center;\n  background-size: 75%;\n  margin-right: 10px; }\n\n.team_icon {\n  width: 27px;\n  height: 27px;\n  display: block;\n  background: url('Team_icon.svg') no-repeat;\n  background-size: 75%;\n  margin-right: 10px; }\n\n.tranin_icon {\n  width: 27px;\n  height: 27px;\n  display: block;\n  background: url('Training_Course_icon.svg') no-repeat;\n  background-size: 75%;\n  margin-right: 10px; }\n\n.match_icon {\n  width: 27px;\n  height: 27px;\n  display: block;\n  background: url('correct_icon.svg') no-repeat;\n  background-size: 65%;\n  margin-right: 10px; }\n\n.search_icon {\n  width: 27px;\n  height: 27px;\n  display: block;\n  background: url('correct_icon.svg') no-repeat;\n  background-size: 65%;\n  margin-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLWxheW91dC9wcm9maWxlL0Y6XFxSb2Nrd29vZFxcd29ya3NwYWNlXFxPcGVuV01TLW5ldy9zcmNcXGFwcFxcZ2xvYmFsLWxheW91dFxccHJvZmlsZVxccHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLDJEQUE4RTtFQUM5RSxvQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsMENBQTZEO0VBQzdELG9CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxxREFBd0U7RUFDeEUsb0JBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLDZDQUFnRTtFQUNoRSxvQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsNkNBQWdFO0VBQ2hFLG9CQUFtQjtFQUNuQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1sYXlvdXQvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNldF9pY29ue1xyXG4gICAgd2lkdGg6IDI3cHg7XHJcbiAgICBoZWlnaHQ6IDI3cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1ncy9TZXR0aW5nX2ljb24uc3ZnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTo3NSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MTBweCA7XHJcbn1cclxuLnRlYW1faWNvbntcclxuICAgIHdpZHRoOiAyN3B4O1xyXG4gICAgaGVpZ2h0OiAyN3B4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZ3MvVGVhbV9pY29uLnN2Zykgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOjc1JTtcclxuICAgIG1hcmdpbi1yaWdodDoxMHB4IDtcclxufVxyXG4udHJhbmluX2ljb257XHJcbiAgICB3aWR0aDogMjdweDtcclxuICAgIGhlaWdodDogMjdweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWdzL1RyYWluaW5nX0NvdXJzZV9pY29uLnN2Zykgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOjc1JTtcclxuICAgIG1hcmdpbi1yaWdodDoxMHB4IDtcclxufVxyXG4ubWF0Y2hfaWNvbntcclxuICAgIHdpZHRoOiAyN3B4O1xyXG4gICAgaGVpZ2h0OiAyN3B4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZ3MvY29ycmVjdF9pY29uLnN2Zykgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOjY1JTtcclxuICAgIG1hcmdpbi1yaWdodDoxMHB4IDtcclxufVxyXG4uc2VhcmNoX2ljb257XHJcbiAgICB3aWR0aDogMjdweDtcclxuICAgIGhlaWdodDogMjdweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWdzL2NvcnJlY3RfaWNvbi5zdmcpIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTo2NSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MTBweCA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/global-layout/profile/profile.component.ts":
/*!************************************************************!*\
  !*** ./src/app/global-layout/profile/profile.component.ts ***!
  \************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _workspace_workspace_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../workspace/workspace.component */ "./src/app/global-layout/workspace/workspace.component.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _common_model_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/model/user.model */ "./src/app/common/model/user.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(app) {
        this.app = app;
    }
    ProfileComponent.prototype.ngOnChanges = function (changes) {
        if (changes['user'] !== undefined) {
            this.user = changes['user'].currentValue;
            console.log('检查更新');
            console.log(this.user);
        }
    };
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.onClick = function (event) {
        var _this = this;
        this.active = !this.active;
        setTimeout(function () {
            _this.app.layoutMenuScrollerViewChild.moveBar();
        }, 450);
        event.preventDefault();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _common_model_user_model__WEBPACK_IMPORTED_MODULE_3__["UserModel"])
    ], ProfileComponent.prototype, "user", void 0);
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/global-layout/profile/profile.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('menu', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        height: '0px'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        height: '*'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('visible => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('hidden => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
                ])
            ],
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/global-layout/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_workspace_workspace_component__WEBPACK_IMPORTED_MODULE_1__["WorkspaceComponent"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/global-layout/rightpanel/rightpanel.component.html":
/*!********************************************************************!*\
  !*** ./src/app/global-layout/rightpanel/rightpanel.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- 天气框 -->\n<div class=\"layout-rightpanel\" [ngClass]=\"{'layout-rightpanel-active': app.rightPanelActive}\" (click)=\"app.onRightPanelClick()\">\n  <p-scrollPanel #scrollRightPanel [style]=\"{height: '100%'}\">\n    <div class=\"layout-rightpanel-wrapper\">\n      <div class=\"layout-rightpanel-header\">\n          <div class=\"weather-day\">Wednesday</div>\n          <div class=\"weather-date\">Jan 26</div>\n      </div>\n\n      <div class=\"layout-rightpanel-content\">\n          <h1>Weather</h1>\n          <h2>San Francisco, USA</h2>\n\n          <div class=\"weather-today\">\n              <span class=\"weather-today-value\">21&#8451;</span>\n              <img src=\"assets/layout/images/dashboard/weather-icon-2.svg\" width=\"60\"/>\n          </div>\n\n          <ul class=\"weekly-weather\">\n              <li>\n                  Thursday\n                  <img src=\"assets/layout/images/dashboard/weather-icon-1.svg\"/>\n                  <span class=\"weekly-weather-value\">24</span>\n              </li>\n              <li>\n                  Friday\n                  <img src=\"assets/layout/images/dashboard/weather-icon-3.svg\"/>\n                  <span class=\"weekly-weather-value\">19</span>\n              </li>\n              <li>\n                  Saturday\n                  <img src=\"assets/layout/images/dashboard/weather-icon-4.svg\"/>\n                  <span class=\"weekly-weather-value\">15</span>\n              </li>\n              <li>\n                  Sunday\n                  <img src=\"assets/layout/images/dashboard/weather-icon-1.svg\"/>\n                  <span class=\"weekly-weather-value\">24</span>\n              </li>\n              <li>\n                  Monday\n                  <img src=\"assets/layout/images/dashboard/weather-icon-2.svg\"/>\n                  <span class=\"weekly-weather-value\">21</span>\n              </li>\n              <li>\n                  Tuesday\n                  <img src=\"assets/layout/images/dashboard/weather-icon-3.svg\"/>\n                  <span class=\"weekly-weather-value\">20</span>\n              </li>\n          </ul>\n      </div>\n    </div>\n  </p-scrollPanel>\n</div>\n"

/***/ }),

/***/ "./src/app/global-layout/rightpanel/rightpanel.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/global-layout/rightpanel/rightpanel.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1sYXlvdXQvcmlnaHRwYW5lbC9yaWdodHBhbmVsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/global-layout/rightpanel/rightpanel.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/global-layout/rightpanel/rightpanel.component.ts ***!
  \******************************************************************/
/*! exports provided: RightpanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightpanelComponent", function() { return RightpanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _workspace_workspace_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../workspace/workspace.component */ "./src/app/global-layout/workspace/workspace.component.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RightpanelComponent = /** @class */ (function () {
    function RightpanelComponent(app) {
        this.app = app;
    }
    RightpanelComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { _this.rightPanelMenuScrollerViewChild.moveBar(); }, 100);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollRightPanel'),
        __metadata("design:type", primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ScrollPanel"])
    ], RightpanelComponent.prototype, "rightPanelMenuScrollerViewChild", void 0);
    RightpanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'rightpanel',
            template: __webpack_require__(/*! ./rightpanel.component.html */ "./src/app/global-layout/rightpanel/rightpanel.component.html"),
            styles: [__webpack_require__(/*! ./rightpanel.component.scss */ "./src/app/global-layout/rightpanel/rightpanel.component.scss")]
        }),
        __metadata("design:paramtypes", [_workspace_workspace_component__WEBPACK_IMPORTED_MODULE_1__["WorkspaceComponent"]])
    ], RightpanelComponent);
    return RightpanelComponent;
}());



/***/ }),

/***/ "./src/app/global-layout/top-menu/top-menu.component.html":
/*!****************************************************************!*\
  !*** ./src/app/global-layout/top-menu/top-menu.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <!-- .navbar-toggle样式用于toggle收缩的内容，即nav-collapse collapse样式所在元素 -->\n      <button class=\"navbar-toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-responsive-collapse\"\n        (click)=\"toogleCli(toggleSta)\">\n        <span class=\"sr-only\">Toggle Navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <!-- 确保无论是宽屏还是窄屏，navbar-brand都显示 -->\n      <a routerLink=\"/login\" class=\"navbar-brand\">\n        Open-WMS\n      </a>\n      <a href=\"https://gitee.com/mumu-osc/OpenWMS-Frontend\" target=\"_blank\" class=\"navbar-brand\">\n        <i class=\"fa fa-github fa-2\" aria-hidden=\"true\"></i>\n      </a>\n\n    </div>\n    <!-- <theme-switcher></theme-switcher> -->\n    <!-- 屏幕宽度小于768px时，div.navbar-responsive-collapse容器里的内容都会隐藏，显示icon-bar图标，当点击icon-bar图标时，再展开。屏幕大于768px时，默认显示。 -->\n    <!-- <div class=\"collapse navbar-collapse navbar-responsive-collapse\" aria-expanded=\"false\" [class.in]=\"toggleSta\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"dropdown\" dropdown>\n          <a routerLink=\"dashboard\">\n        <li class=\"fa fa-area-chart fa-2\"></li>{{'globalLayout.dashboard' | translate}}</a>\n        </li>\n        <li class=\"dropdown\" dropdown>\n          <a dropdown-trigger>\n        <li class=\"fa fa-bars fa-2\"></li>{{'globalLayout.inventoryControl' | translate}}</a>\n        <ul class=\"dropdown-menu dropdown-menu-left\">\n          <li>\n            <a routerLink=\"inventory/inventory-table/page/1\">{{'globalLayout.inventory' | translate}}</a>\n          </li>\n          <li>\n            <a routerLink=\"inventory/inbound-receipt-table/page/1\">{{'globalLayout.inbound' | translate}}</a>\n          </li>\n          <li>\n            <a routerLink=\"inventory/outbound-receipt-table/page/1\">{{'globalLayout.outbound' | translate}}</a>\n          </li>\n        </ul>\n        </li>\n        <li class=\"dropdown\" dropdown>\n          <a dropdown-trigger>\n        <li class=\"fa fa-cogs fa-2\"></li>{{'globalLayout.baseData' | translate}}</a>\n        <ul class=\"dropdown-menu  dropdown-menu-left\">\n          <li>\n            <a routerLink=\"basic-data/warehouse-table/page/1\">{{'globalLayout.warehouseData' | translate}}</a>\n          </li>\n          <li>\n            <a routerLink=\"basic-data/category-table/page/1\">{{'globalLayout.categoryData' | translate}}</a>\n          </li>\n          <li>\n            <a routerLink=\"basic-data/vendor-table/page/1\">{{'globalLayout.vendorData' | translate}}</a>\n          </li>\n          <li>\n            <a routerLink=\"basic-data/customer-table/page/1\">{{'globalLayout.customerData' | translate}}</a>\n          </li>\n          <li>\n            <a routerLink=\"basic-data/staff-table/page/1\">{{'globalLayout.staffData' | translate}}</a>\n          </li>\n        </ul>\n        </li>\n        <li class=\"dropdown\" dropdown>\n          <a dropdown-trigger>\n        <li class=\"fa fa-area-chart fa-2\"></li>{{'globalLayout.systemMonitoring' | translate}}</a>\n        <ul class=\"dropdown-menu  dropdown-menu-left\">\n          <li>\n            <a routerLink=\"sys/sysmonitor\">{{'globalLayout.Echarts' | translate}}</a>\n          </li>\n        </ul>\n        </li>\n        <li class=\"dropdown\" dropdown>\n          <a dropdown-trigger>\n        <li class=\"fa fa-user-circle fa-2\"></li> Admin</a>\n        <ul class=\"dropdown-menu  dropdown-menu-right\">\n          <li>\n            <a routerLink=\"sys/sysmonitor\">\n          <li class=\"fa fa-user-o fa-2\"></li>{{'user.profile' | translate}}</a>\n          </li>\n          <li>\n            <a routerLink=\"sys/sysmonitor\">\n          <li class=\"fa fa-gear fa-2\"></li>{{'user.settings' | translate}}</a>\n          </li>\n          <li>\n            <a routerLink=\"/login\">\n          <li class=\"fa fa-sign-out fa-2\"></li>{{'user.logout' | translate}}</a>\n          </li>\n        </ul>\n        </li>\n      </ul>\n    </div>-->\n  </div> \n</nav>\n"

/***/ }),

/***/ "./src/app/global-layout/top-menu/top-menu.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/global-layout/top-menu/top-menu.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-menu {\n  padding: 0px;\n  min-width: 120px;\n  background-color: #38434e; }\n  .dropdown-menu li a {\n    position: relative;\n    left: -1px;\n    padding: 10px 20px;\n    color: #fff; }\n  .dropdown-menu li a:hover {\n      background-color: #39b9c6; }\n  .navbar-inverse {\n  background-color: #435360;\n  border-color: #435360; }\n  .navbar-inverse .navbar-nav > li > a:hover {\n    background-color: #242c33; }\n  .navbar-inverse .navbar-nav .open > a {\n    background-color: #242c33; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLWxheW91dC90b3AtbWVudS9GOlxcUm9ja3dvb2RcXHdvcmtzcGFjZVxcT3BlbldNUy1uZXcvc3JjXFxhcHBcXGdsb2JhbC1sYXlvdXRcXHRvcC1tZW51XFx0b3AtbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFZaEIseUJBQXlCLEVBQUE7RUFkM0I7SUFLTSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixXQUFXLEVBQUE7RUFSakI7TUFVUSx5QkFBeUIsRUFBQTtFQU1qQztFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUIsRUFBQTtFQUZ2QjtJQUtNLHlCQUF5QixFQUFBO0VBTC9CO0lBUU0seUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9nbG9iYWwtbGF5b3V0L3RvcC1tZW51L3RvcC1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3Bkb3duLW1lbnUge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIGxpIHtcbiAgICBhIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGxlZnQ6IC0xcHg7XG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICY6aG92ZXJ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzOWI5YzY7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODQzNGU7XG59XG4ubmF2YmFyLWludmVyc2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM1MzYwO1xuICBib3JkZXItY29sb3I6ICM0MzUzNjA7XG4gIC5uYXZiYXItbmF2e1xuICAgID4gbGkgPiBhOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDJjMzM7XG4gICAgfVxuICAgIC5vcGVuID5he1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MmMzMztcbiAgICB9XG4gIH1cbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/global-layout/top-menu/top-menu.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/global-layout/top-menu/top-menu.component.ts ***!
  \**************************************************************/
/*! exports provided: TopMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopMenuComponent", function() { return TopMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_event_bus_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/services/event-bus.service */ "./src/app/common/services/event-bus.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopMenuComponent = /** @class */ (function () {
    function TopMenuComponent(elementRef, eventBusService) {
        this.elementRef = elementRef;
        this.eventBusService = eventBusService;
        this.toggleBtnStatus = false;
        this.showTopMenu = false;
        this.toggleSta = false;
    }
    TopMenuComponent.prototype.ngOnInit = function () { };
    TopMenuComponent.prototype.onTogglerClick = function (event) {
        this.toggleBtnStatus = !this.toggleBtnStatus;
        this.eventBusService.topToggleBtn.next(this.toggleBtnStatus);
    };
    TopMenuComponent.prototype.toogleCli = function (val) {
        this.toggleSta = !this.toggleSta;
    };
    TopMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'top-menu',
            template: __webpack_require__(/*! ./top-menu.component.html */ "./src/app/global-layout/top-menu/top-menu.component.html"),
            styles: [__webpack_require__(/*! ./top-menu.component.scss */ "./src/app/global-layout/top-menu/top-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _common_services_event_bus_service__WEBPACK_IMPORTED_MODULE_1__["EventBusService"]])
    ], TopMenuComponent);
    return TopMenuComponent;
}());



/***/ }),

/***/ "./src/app/global-layout/topbar/topbar.component.html":
/*!************************************************************!*\
  !*** ./src/app/global-layout/topbar/topbar.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"topbar clearfix\">\n    <div class=\"topbar-left\">\n        <div class=\"top-logo position-relative\"></div>\n        <!-- <a class=\"navbar-brand position-relative\">\n           乐运体育后台管理系统\n        </a> -->\n    </div>\n\n    <div class=\"topbar-right\">\n        <!-- <a id=\"menu-button\" href=\"#\" (click)=\"app.onMenuButtonClick($event)\">\n            <i class=\"material-icons\"></i>\n        </a> -->\n\n        <a id=\"rightpanel-menu-button\" href=\"#\" (click)=\"app.onRightPanelButtonClick($event)\">\n            <i class=\"material-icons\">more_vert</i>\n        </a>\n\n        <a id=\"topbar-menu-button\" href=\"#\" (click)=\"app.onTopbarMenuButtonClick($event)\">\n            <i class=\"material-icons\">menu</i>\n        </a> \n\n        <ul class=\"topbar-items animated fadeInDown\" [ngClass]=\"{'topbar-items-visible': app.topbarMenuActive}\">\n            <!-- <li #profile class=\"profile-item\" *ngIf=\"app.profileMode==='top'||app.isHorizontal()\" [ngClass]=\"{'active-top-menu':app.activeTopbarItem === profile}\">\n\n                <a href=\"#\" (click)=\"app.onTopbarItemClick($event,profile)\">\n                    <img class=\"profile-image\" src=\"../../../assets/imgs/io.png\" />\n                    <span class=\"topbar-item-name\">Jane Williams</span>\n                </a>\n\n                <ul class=\"ultima-menu animated fadeInDown\">\n                    <li role=\"menuitem\">\n                        <a href=\"#\" (click)=\"app.onTopbarSubItemClick($event)\">\n                            <i class=\"material-icons\">person</i>\n                            <span>Profile</span>\n                        </a>\n                    </li>\n                    <li role=\"menuitem\">\n                        <a href=\"#\" (click)=\"app.onTopbarSubItemClick($event)\">\n                            <i class=\"material-icons\">security</i>\n                            <span>Privacy</span>\n                        </a>\n                    </li>\n                    <li role=\"menuitem\">\n                        <a href=\"#\" (click)=\"app.onTopbarSubItemClick($event)\">\n                            <i class=\"material-icons\">settings_applications</i>\n                            <span>Settings</span>\n                        </a>\n                    </li>\n                    <li role=\"menuitem\">\n                        <a href=\"#\" (click)=\"app.onTopbarSubItemClick($event)\">\n                            <i class=\"material-icons\">power_settings_new</i>\n                            <span>Logout</span>\n                        </a>\n                    </li>\n                </ul>\n            </li> -->\n            <!-- <li #settings [ngClass]=\"{'active-top-menu':app.activeTopbarItem === settings}\">\n                <a href=\"#\" (click)=\"app.onTopbarItemClick($event,settings)\">\n                    <i class=\"topbar-icon material-icons\">settings</i>\n                    <span class=\"topbar-item-name\">Settings</span>\n                </a>\n                <ul class=\"ultima-menu animated fadeInDown\">\n                    <li role=\"menuitem\">\n                        <a href=\"#\" (click)=\"app.onTopbarSubItemClick($event)\">\n                            <i class=\"material-icons\">palette</i>\n                            <span>Change Theme</span>\n                        </a>\n                    </li>\n                    <li role=\"menuitem\">\n                        <a href=\"#\" (click)=\"app.onTopbarSubItemClick($event)\">\n                            <i class=\"material-icons\">favorite_border</i>\n                            <span>Favorites</span>\n                        </a>\n                    </li>\n                    <li role=\"menuitem\">\n                        <a href=\"#\" (click)=\"app.onTopbarSubItemClick($event)\">\n                            <i class=\"material-icons\">lock</i>\n                            <span>Lock Screen</span>\n                        </a>\n                    </li>\n                    <li role=\"menuitem\">\n                        <a href=\"#\" (click)=\"app.onTopbarSubItemClick($event)\">\n                            <i class=\"material-icons\">wallpaper</i>\n                            <span>Wallpaper</span>\n                        </a>\n                    </li>\n                </ul>\n            </li> -->\n            <li #messages [ngClass]=\"{'active-top-menu':app.activeTopbarItem === messages}\">\n                <a href=\"#\" (click)=\"app.onTopbarItemClick($event,messages)\">\n                    <i class=\"topbar-icon material-icons animated swing\">message</i>\n                    <span class=\"topbar-item-name\">Messages</span>\n                </a>\n                <!-- <ul class=\"ultima-menu animated fadeInDown\">\n                    <li role=\"menuitem\">\n                        <a href=\"#\" class=\"topbar-message\" (click)=\"app.onTopbarSubItemClick($event)\">\n                            <img src=\"assets/layout/images/avatar1.png\" width=\"35\" />\n                            <span>Give me a call</span>\n                        </a>\n                    </li>\n                    <li role=\"menuitem\">\n                        <a href=\"#\" class=\"topbar-message\" (click)=\"app.onTopbarSubItemClick($event)\">\n                            <img src=\"assets/layout/images/avatar2.png\" width=\"35\" />\n                            <span>Sales reports attached</span>\n                        </a>\n                    </li>\n                    <li role=\"menuitem\">\n                        <a href=\"#\" class=\"topbar-message\" (click)=\"app.onTopbarSubItemClick($event)\">\n                            <img src=\"assets/layout/images/avatar3.png\" width=\"35\" />\n                            <span>About your invoice</span>\n                        </a>\n                    </li>\n                    <li role=\"menuitem\">\n                        <a href=\"#\" class=\"topbar-message\" (click)=\"app.onTopbarSubItemClick($event)\">\n                            <img src=\"assets/layout/images/avatar2.png\" width=\"35\" />\n                            <span>Meeting today at 10pm</span>\n                        </a>\n                    </li>\n                    <li role=\"menuitem\">\n                        <a href=\"#\" class=\"topbar-message\" (click)=\"app.onTopbarSubItemClick($event)\">\n                            <img src=\"assets/layout/images/avatar4.png\" width=\"35\" />\n                            <span>Out of office</span>\n                        </a>\n                    </li>\n                </ul> -->\n            </li>\n            <!-- <li #notifications [ngClass]=\"{'active-top-menu':app.activeTopbarItem === notifications}\">\n                <a href=\"#\" (click)=\"app.onTopbarItemClick($event,notifications)\">\n                    <i class=\"topbar-icon material-icons\">timer</i>\n                    <span class=\"topbar-badge animated rubberBand\">4</span>\n                    <span class=\"topbar-item-name\">Notifications</span>\n                </a>\n                <ul class=\"ultima-menu animated fadeInDown\">\n                    <li role=\"menuitem\">\n                        <a href=\"#\" (click)=\"app.onTopbarSubItemClick($event)\">\n                            <i class=\"material-icons\">bug_report</i>\n                            <span>Pending tasks</span>\n                        </a>\n                    </li>\n                    <li role=\"menuitem\">\n                        <a href=\"#\" (click)=\"app.onTopbarSubItemClick($event)\">\n                            <i class=\"material-icons\">event</i>\n                            <span>Meeting today at 3pm</span>\n                        </a>\n                    </li>\n                    <li role=\"menuitem\">\n                        <a href=\"#\" (click)=\"app.onTopbarSubItemClick($event)\">\n                            <i class=\"material-icons\">file_download</i>\n                            <span>Download documents</span>\n                        </a>\n                    </li>\n                    <li role=\"menuitem\">\n                        <a href=\"#\" (click)=\"app.onTopbarSubItemClick($event)\">\n                            <i class=\"material-icons\">flight</i>\n                            <span>Book flight</span>\n                        </a>\n                    </li>\n                </ul>\n            </li> -->\n            <!-- <li #search class=\"search-item\" [ngClass]=\"{'active-top-menu':app.activeTopbarItem === search}\" (click)=\"app.onTopbarItemClick($event,search)\">\n                <span class=\"md-inputfield\">\n                    <input type=\"text\" pInputText>\n                    <label>Search</label>\n                    <i class=\"topbar-icon material-icons\">search</i>\n                </span>\n            </li> -->\n        </ul>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/global-layout/topbar/topbar.component.scss":
/*!************************************************************!*\
  !*** ./src/app/global-layout/topbar/topbar.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".position-relative {\n  position: relative;\n  z-index: 1000;\n  color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsLWxheW91dC90b3BiYXIvRjpcXFJvY2t3b29kXFx3b3Jrc3BhY2VcXE9wZW5XTVMtbmV3L3NyY1xcYXBwXFxnbG9iYWwtbGF5b3V0XFx0b3BiYXJcXHRvcGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZ2xvYmFsLWxheW91dC90b3BiYXIvdG9wYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc2l0aW9uLXJlbGF0aXZle1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/global-layout/topbar/topbar.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/global-layout/topbar/topbar.component.ts ***!
  \**********************************************************/
/*! exports provided: TopbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopbarComponent", function() { return TopbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _workspace_workspace_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../workspace/workspace.component */ "./src/app/global-layout/workspace/workspace.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopbarComponent = /** @class */ (function () {
    function TopbarComponent(app) {
        this.app = app;
    }
    TopbarComponent.prototype.ngOnInit = function () {
    };
    TopbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'topbar',
            template: __webpack_require__(/*! ./topbar.component.html */ "./src/app/global-layout/topbar/topbar.component.html"),
            styles: [__webpack_require__(/*! ./topbar.component.scss */ "./src/app/global-layout/topbar/topbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_workspace_workspace_component__WEBPACK_IMPORTED_MODULE_1__["WorkspaceComponent"]])
    ], TopbarComponent);
    return TopbarComponent;
}());



/***/ }),

/***/ "./src/app/global-layout/workspace/workspace.component.html":
/*!******************************************************************!*\
  !*** ./src/app/global-layout/workspace/workspace.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <top-menu></top-menu> -->\n<!-- <div class=\"layout-content\">\n    <router-outlet></router-outlet>\n</div> -->\n\n<div class=\"layout-wrapper\" [ngClass]=\"{'layout-compact':layoutCompact}\" (click)=\"onLayoutClick()\">\n  <div #layoutContainer class=\"layout-container\"\n            [ngClass]=\"{'menu-layout-static': !isOverlay(),\n            'menu-layout-overlay': isOverlay(),\n            'layout-menu-overlay-active': overlayMenuActive,\n            'menu-layout-horizontal': isHorizontal(),\n            'menu-layout-slim': isSlim(),\n            'layout-menu-static-inactive': staticMenuDesktopInactive,\n            'layout-menu-static-active': staticMenuMobileActive}\">\n    <topbar></topbar>\n    <!-- 右上角客户界面 -->\n    <div class=\"layout-menu\" [ngClass]=\"{'layout-menu-dark':darkMenu}\" (click)=\"onMenuClick($event)\">\n      <p-scrollPanel #scrollPanel [style]=\"{height: '100%'}\">\n           <profile *ngIf=\"profileMode=='inline'&&!isHorizontal()\" [(user)]=\"user\"></profile>\n           <!-- 左菜单栏 -->\n           <app-menu *ngIf=\"menulist !== undefined\"  [reset]=\"resetMenu\" [(menulist)]=\"menulist\">\n            <!-- <top-menu></top-menu>  [menuModel]=\"menuModel\" -->\n           </app-menu>\n      </p-scrollPanel>\n    </div>\n    <div class=\"layout-main\"  [style.height]=\"initHight()\">\n        <!-- <breadcrumb></breadcrumb> -->\n        <div class=\"layout-content\" ng-view>\n          <router-outlet></router-outlet>\n          <!-- <app-footer></app-footer> -->\n        </div>\n    </div>\n    <rightpanel></rightpanel>\n    <div class=\"layout-mask\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/global-layout/workspace/workspace.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/global-layout/workspace/workspace.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC1sYXlvdXQvd29ya3NwYWNlL3dvcmtzcGFjZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/global-layout/workspace/workspace.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/global-layout/workspace/workspace.component.ts ***!
  \****************************************************************/
/*! exports provided: WorkspaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceComponent", function() { return WorkspaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_event_bus_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/services/event-bus.service */ "./src/app/common/services/event-bus.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_model_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/model/user.model */ "./src/app/common/model/user.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _common_services_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/services/utility.service */ "./src/app/common/services/utility.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_soap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-soap */ "./node_modules/ngx-soap/fesm5/ngx-soap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MenuOrientation;
(function (MenuOrientation) {
    MenuOrientation[MenuOrientation["STATIC"] = 0] = "STATIC";
    MenuOrientation[MenuOrientation["OVERLAY"] = 1] = "OVERLAY";
    MenuOrientation[MenuOrientation["SLIM"] = 2] = "SLIM";
    MenuOrientation[MenuOrientation["HORIZONTAL"] = 3] = "HORIZONTAL";
})(MenuOrientation || (MenuOrientation = {}));
var WorkspaceComponent = /** @class */ (function () {
    function WorkspaceComponent(renderer2, zone, eventBusService, activatedRoute, soap, http, uti) {
        this.renderer2 = renderer2;
        this.zone = zone;
        this.eventBusService = eventBusService;
        this.activatedRoute = activatedRoute;
        this.soap = soap;
        this.http = http;
        this.uti = uti;
        this.isCollapsed = false;
        // constructor(private elementRef: ElementRef, private eventBusService: EventBusService) {
        // }
        this.layoutCompact = true;
        this.layoutMode = MenuOrientation.STATIC;
        this.darkMenu = true;
        this.profileMode = 'inline';
        // user个人资料
        this.user = new _common_model_user_model__WEBPACK_IMPORTED_MODULE_3__["UserModel"]();
        // user能操作的menu集合
        this.menulist = [];
        this.a = new Map();
        this.resize = true;
    }
    WorkspaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.activatedRoute.queryParams.subscribe(queryParams => {
        //   this.user.user_name = queryParams.name;
        //   this.user.user_password = queryParams.pass;
        //   this.login();
        //   console.log(this.user);
        // });
        this.user.user_name = sessionStorage.getItem('name');
        this.user.user_password = sessionStorage.getItem('pwd');
        this.login();
        this.eventBusService.topToggleBtn.subscribe(function (value) {
            _this.toggleMenuStatus(value);
        });
        this.zone.runOutsideAngular(function () {
            _this.bindRipple();
        });
    };
    WorkspaceComponent.prototype.initHight = function () {
        var fullHeight = window.innerHeight;
        var contHeight = (fullHeight - 20) + 'px';
        return contHeight;
    };
    WorkspaceComponent.prototype.login = function () {
        var _this = this;
        var headerss = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]();
        headerss.append('Access-Control-Allow-Origin', '*');
        headerss.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        headerss.append('Access-Control-Allow-Headers', 'Accept, X-Requested-With');
        headerss.append('Access-Control-Allow-Credentials', 'true');
        this.soap.createClient('../../assets/hsWebService.wsdl', { headers: headerss })
            .then(function (client) {
            console.log('Client', client);
            _this.client = client;
            _this.a = new Map();
            _this.a.set(_this.user.user_name, 'USER_NAME');
            _this.a.set(_this.user.user_password, 'USER_PASSWORD');
            var body = _this.uti.getParams('ACLG00001', _this.a);
            _this.client.service(body).subscribe(function (res) {
                var message = res.result.return;
                var result = _this.uti.parsXml(message);
                _this.conven(result);
            }, function (error) { console.log(error); });
        })
            .catch(function (err) { return console.log('Error', err); });
    };
    WorkspaceComponent.prototype.conven = function (result) {
        this.js = JSON.parse(result);
        if (this.js.user_admin !== null) {
            this.menulist = this.js.user_admin;
            console.log('菜单显示----');
            console.log(this.menulist);
        }
        if (this.js.user_infromation !== null) {
            this.user = this.js.user_infromation;
            console.log('用户显示----');
            console.log(this.user);
        }
    };
    WorkspaceComponent.prototype.bindRipple = function () {
        this.rippleInitListener = this.init.bind(this);
        document.addEventListener('DOMContentLoaded', this.rippleInitListener);
    };
    WorkspaceComponent.prototype.init = function () {
        this.rippleMouseDownListener = this.rippleMouseDown.bind(this);
        document.addEventListener('mousedown', this.rippleMouseDownListener, false);
    };
    WorkspaceComponent.prototype.rippleMouseDown = function (e) {
        for (var target = e.target; target && target !== this; target = target['parentNode']) {
            if (!this.isVisible(target)) {
                continue;
            }
            // Element.matches() -> https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
            if (this.selectorMatches(target, '.ripplelink, .ui-button')) {
                var element = target;
                this.rippleEffect(element, e);
                break;
            }
        }
    };
    WorkspaceComponent.prototype.selectorMatches = function (el, selector) {
        var p = Element.prototype;
        var f = p['matches'] ||
            p['webkitMatchesSelector'] ||
            p['mozMatchesSelector'] ||
            p['msMatchesSelector'] ||
            function (s) {
                return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
            };
        return f.call(el, selector);
    };
    WorkspaceComponent.prototype.isVisible = function (el) {
        return !!(el.offsetWidth || el.offsetHeight);
    };
    WorkspaceComponent.prototype.rippleEffect = function (element, e) {
        if (element.querySelector('.ink') === null) {
            var inkEl = document.createElement('span');
            this.addClass(inkEl, 'ink');
            if (this.hasClass(element, 'ripplelink') &&
                element.querySelector('span')) {
                element
                    .querySelector('span')
                    .insertAdjacentHTML('afterend', "<span class='ink'></span>");
            }
            else {
                element.appendChild(inkEl);
            }
        }
        var ink = element.querySelector('.ink');
        this.removeClass(ink, 'ripple-animate');
        if (!ink.offsetHeight && !ink.offsetWidth) {
            var d = Math.max(element.offsetWidth, element.offsetHeight);
            ink.style.height = d + 'px';
            ink.style.width = d + 'px';
        }
        var x = e.pageX - this.getOffset(element).left - ink.offsetWidth / 2;
        var y = e.pageY - this.getOffset(element).top - ink.offsetHeight / 2;
        ink.style.top = y + 'px';
        ink.style.left = x + 'px';
        ink.style.pointerEvents = 'none';
        this.addClass(ink, 'ripple-animate');
    };
    WorkspaceComponent.prototype.hasClass = function (element, className) {
        if (element.classList) {
            return element.classList.contains(className);
        }
        else {
            return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
        }
    };
    WorkspaceComponent.prototype.addClass = function (element, className) {
        if (element.classList) {
            element.classList.add(className);
        }
        else {
            element.className += ' ' + className;
        }
    };
    WorkspaceComponent.prototype.removeClass = function (element, className) {
        if (element.classList) {
            element.classList.remove(className);
        }
        else {
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    };
    WorkspaceComponent.prototype.getOffset = function (el) {
        var rect = el.getBoundingClientRect();
        return {
            top: rect.top +
                (window.pageYOffset ||
                    document.documentElement.scrollTop ||
                    document.body.scrollTop ||
                    0),
            left: rect.left +
                (window.pageXOffset ||
                    document.documentElement.scrollLeft ||
                    document.body.scrollLeft ||
                    0)
        };
    };
    WorkspaceComponent.prototype.unbindRipple = function () {
        if (this.rippleInitListener) {
            document.removeEventListener('DOMContentLoaded', this.rippleInitListener);
        }
        if (this.rippleMouseDownListener) {
            document.removeEventListener('mousedown', this.rippleMouseDownListener);
        }
    };
    WorkspaceComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.layoutContainer = (this.layourContainerViewChild.nativeElement);
        setTimeout(function () {
            _this.layoutMenuScrollerViewChild.moveBar();
        }, 100);
    };
    WorkspaceComponent.prototype.onLayoutClick = function () {
        if (!this.topbarItemClick) {
            this.activeTopbarItem = null;
            this.topbarMenuActive = false;
        }
        if (!this.menuClick) {
            if (this.isHorizontal() || this.isSlim()) {
                this.resetMenu = true;
            }
            if (this.overlayMenuActive || this.staticMenuMobileActive) {
                this.hideOverlayMenu();
            }
            this.menuHoverActive = false;
        }
        if (!this.rightPanelClick) {
            this.rightPanelActive = false;
        }
        this.topbarItemClick = false;
        this.menuClick = false;
        this.rightPanelClick = false;
        this.resize = !this.resize;
    };
    WorkspaceComponent.prototype.onMenuButtonClick = function (event) {
        this.menuClick = true;
        this.rotateMenuButton = !this.rotateMenuButton;
        this.topbarMenuActive = false;
        if (this.layoutMode === MenuOrientation.OVERLAY) {
            this.overlayMenuActive = !this.overlayMenuActive;
        }
        else {
            if (this.isDesktop()) {
                this.staticMenuDesktopInactive = !this.staticMenuDesktopInactive;
            }
            else {
                this.staticMenuMobileActive = !this.staticMenuMobileActive;
            }
        }
        event.preventDefault();
    };
    WorkspaceComponent.prototype.onMenuClick = function ($event) {
        this.menuClick = true;
        this.resetMenu = false;
    };
    WorkspaceComponent.prototype.onTopbarMenuButtonClick = function (event) {
        this.topbarItemClick = true;
        this.topbarMenuActive = !this.topbarMenuActive;
        this.hideOverlayMenu();
        event.preventDefault();
    };
    WorkspaceComponent.prototype.onTopbarItemClick = function (event, item) {
        this.topbarItemClick = true;
        if (this.activeTopbarItem === item) {
            this.activeTopbarItem = null;
        }
        else {
            this.activeTopbarItem = item;
        }
        event.preventDefault();
    };
    WorkspaceComponent.prototype.onTopbarSubItemClick = function (event) {
        event.preventDefault();
    };
    WorkspaceComponent.prototype.onRightPanelButtonClick = function (event) {
        this.rightPanelClick = true;
        this.rightPanelActive = !this.rightPanelActive;
        event.preventDefault();
    };
    WorkspaceComponent.prototype.onRightPanelClick = function () {
        this.rightPanelClick = true;
    };
    WorkspaceComponent.prototype.hideOverlayMenu = function () {
        this.rotateMenuButton = false;
        this.overlayMenuActive = false;
        this.staticMenuMobileActive = false;
    };
    WorkspaceComponent.prototype.isTablet = function () {
        var width = window.innerWidth;
        return width <= 1024 && width > 640;
    };
    WorkspaceComponent.prototype.isDesktop = function () {
        return window.innerWidth > 1024;
    };
    WorkspaceComponent.prototype.isMobile = function () {
        return window.innerWidth <= 640;
    };
    WorkspaceComponent.prototype.isOverlay = function () {
        return this.layoutMode === MenuOrientation.OVERLAY;
    };
    WorkspaceComponent.prototype.isHorizontal = function () {
        return this.layoutMode === MenuOrientation.HORIZONTAL;
    };
    WorkspaceComponent.prototype.isSlim = function () {
        return this.layoutMode === MenuOrientation.SLIM;
    };
    WorkspaceComponent.prototype.changeToStaticMenu = function () {
        this.layoutMode = MenuOrientation.STATIC;
    };
    WorkspaceComponent.prototype.changeToOverlayMenu = function () {
        this.layoutMode = MenuOrientation.OVERLAY;
    };
    WorkspaceComponent.prototype.changeToHorizontalMenu = function () {
        this.layoutMode = MenuOrientation.HORIZONTAL;
    };
    WorkspaceComponent.prototype.changeToSlimMenu = function () {
        this.layoutMode = MenuOrientation.SLIM;
    };
    WorkspaceComponent.prototype.ngOnDestroy = function () {
        this.unbindRipple();
    };
    WorkspaceComponent.prototype.toggleMenuStatus = function (isCollapse) {
        this.isCollapsed = isCollapse;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('layoutContainer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], WorkspaceComponent.prototype, "layourContainerViewChild", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollPanel'),
        __metadata("design:type", primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ScrollPanel"])
    ], WorkspaceComponent.prototype, "layoutMenuScrollerViewChild", void 0);
    WorkspaceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'workspace',
            template: __webpack_require__(/*! ./workspace.component.html */ "./src/app/global-layout/workspace/workspace.component.html"),
            styles: [__webpack_require__(/*! ./workspace.component.scss */ "./src/app/global-layout/workspace/workspace.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _common_services_event_bus_service__WEBPACK_IMPORTED_MODULE_1__["EventBusService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], ngx_soap__WEBPACK_IMPORTED_MODULE_8__["NgxSoapService"], _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"],
            _common_services_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"]])
    ], WorkspaceComponent);
    return WorkspaceComponent;
}());



/***/ }),

/***/ "./src/app/global-layout/workspace/workspace.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/global-layout/workspace/workspace.module.ts ***!
  \*************************************************************/
/*! exports provided: WorkspaceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceModule", function() { return WorkspaceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/shared.module */ "./src/app/common/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../top-menu/top-menu.component */ "./src/app/global-layout/top-menu/top-menu.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/global-layout/footer/footer.component.ts");
/* harmony import */ var _workspace_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./workspace.component */ "./src/app/global-layout/workspace/workspace.component.ts");
/* harmony import */ var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../topbar/topbar.component */ "./src/app/global-layout/topbar/topbar.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../profile/profile.component */ "./src/app/global-layout/profile/profile.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../menu/menu.component */ "./src/app/global-layout/menu/menu.component.ts");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../breadcrumb/breadcrumb.component */ "./src/app/global-layout/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _rightpanel_rightpanel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../rightpanel/rightpanel.component */ "./src/app/global-layout/rightpanel/rightpanel.component.ts");
/* harmony import */ var _common_dropdown_directive_dropdown_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/dropdown-directive/dropdown.directive */ "./src/app/common/dropdown-directive/dropdown.directive.ts");
/* harmony import */ var _common_dropdown_directive_dropdown_trigger_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/dropdown-directive/dropdown-trigger.directive */ "./src/app/common/dropdown-directive/dropdown-trigger.directive.ts");
/* harmony import */ var _workspace_routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./workspace.routes */ "./src/app/global-layout/workspace/workspace.routes.ts");
/* harmony import */ var _common_services_soap_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../common/services/soap.service */ "./src/app/common/services/soap.service.ts");
/* harmony import */ var ngx_soap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-soap */ "./node_modules/ngx-soap/fesm5/ngx-soap.js");
/* harmony import */ var _common_services_utility_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../common/services/utility.service */ "./src/app/common/services/utility.service.ts");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_19__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var WorkspaceModule = /** @class */ (function () {
    function WorkspaceModule() {
    }
    WorkspaceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _common_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                primeng_checkbox__WEBPACK_IMPORTED_MODULE_17__["CheckboxModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_18__["DialogModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_19__["TableModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_workspace_routes__WEBPACK_IMPORTED_MODULE_13__["workspaceRoutes"])
            ],
            declarations: [
                _workspace_component__WEBPACK_IMPORTED_MODULE_5__["WorkspaceComponent"],
                _top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_3__["TopMenuComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_6__["TopbarComponent"],
                _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["AppSubMenuComponent"],
                _rightpanel_rightpanel_component__WEBPACK_IMPORTED_MODULE_10__["RightpanelComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
                _common_dropdown_directive_dropdown_directive__WEBPACK_IMPORTED_MODULE_11__["DropdownDirective"],
                _common_dropdown_directive_dropdown_trigger_directive__WEBPACK_IMPORTED_MODULE_12__["DropdownTriggerDirective"]
            ],
            providers: [_common_services_soap_service__WEBPACK_IMPORTED_MODULE_14__["SoapService"], ngx_soap__WEBPACK_IMPORTED_MODULE_15__["NgxSoapService"], _common_services_utility_service__WEBPACK_IMPORTED_MODULE_16__["UtilityService"]],
        })
    ], WorkspaceModule);
    return WorkspaceModule;
}());



/***/ }),

/***/ "./src/app/global-layout/workspace/workspace.routes.ts":
/*!*************************************************************!*\
  !*** ./src/app/global-layout/workspace/workspace.routes.ts ***!
  \*************************************************************/
/*! exports provided: workspaceRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "workspaceRoutes", function() { return workspaceRoutes; });
/* harmony import */ var _workspace_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workspace.component */ "./src/app/global-layout/workspace/workspace.component.ts");

var workspaceRoutes = [
    {
        path: "",
        component: _workspace_component__WEBPACK_IMPORTED_MODULE_0__["WorkspaceComponent"],
        children: [
            { path: "", redirectTo: "dashboard", pathMatch: "full" },
            // { path: "", redirectTo: "match-operation", pathMatch: "full" },
            {
                path: "dashboard",
                loadChildren: "../../bz-modules/dashboard/dashboard.module#DashboardModule"
            },
            {
                path: "inventory",
                loadChildren: "../../bz-modules/inventory/inventory.module#InventoryModule"
            },
            {
                path: "basic-data",
                loadChildren: "../../bz-modules/basic-data/basic-data.module#BasicDataModule"
            },
            { path: "sys", loadChildren: "../../bz-modules/sys/sys.module#SysModule" }
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=global-layout-workspace-workspace-module.js.map