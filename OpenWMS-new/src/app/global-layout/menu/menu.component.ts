import { Component, Input, OnInit, Output, OnChanges } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";
import { MenuItem } from "primeng/primeng";
import { WorkspaceComponent } from "../workspace/workspace.component";
import { TranslateService } from "@ngx-translate/core";
import { MenuModel } from "../../common/model/menu.model";
import { ConcatSource } from "webpack-sources";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { InventoryItemDetailComponent } from "../../bz-modules/inventory/inventory-item-detail/inventory-item-detail.component";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit, OnChanges {
  model: any[] = [];
  // 加载的menu集合
  @Input() menulist: MenuModel[];
  @Input() reset: boolean;
  constructor(
    public app: WorkspaceComponent,
    public translateService: TranslateService
  ) {
    this.model = [
      {
        label: "系统管理",
        iconUrl: "../../../assets/imgs/menus/Training_Course_icon.png",
        badge: "3",
        badgeStyleClass: "teal-badge",
        items: [
          { label: "角色权限管理", routerLink: ["/workspace/basic-data/role-manage"] },
          { label: "菜单管理", routerLink: ["/workspace/basic-data/menu-manage"] },
          { label: "系统用户", routerLink: ["/workspace/basic-data/user-manage"] },
        ]
      },
      {
        label: "赛事活动",
        iconUrl: "../../../assets/imgs/menus/Training_Course_icon.png",
        badge: "2",
        badgeStyleClass: "teal-badge",
        items: [
          { label: "赛事管理", routerLink: ["/workspace/basic-data/match-competition"] },
          { label: "活动管理", routerLink: ["/workspace/basic-data/match-competition"] },
        ]
      },
    ];
    console.log(this.model);
  }

  ngOnInit() {
    // if (this.menulist !== undefined && this.menulist.length !== 0) {
    //     const dataMap = new Map();
    //     const filterData = [];
    //     const rsData = this.menulist;
    //     rsData.forEach(item => {
    //       if (!dataMap.has(item.menu_name)) {
    //         dataMap.set(item.menu_name, true);
    //         filterData.push(item);
    //       }
    //     });
    //     console.log(filterData);
    //     filterData.forEach(res => {
    //         let models: any[] = [];
    //         if (res.menu_parent_id === null && (res.menu_level).toString() === '1') {
    //             models.push({label: res.menu_name, icon: 'list', routerLink: ['/workspace/inventory/inventory-table/page/1']});
    //             console.log(res);
    //             let items: any[] = [];
    //             filterData.forEach(rs => {
    //                 if (rs.menu_parent_id === null || rs.menu_parent_id === '') {
    //                     return;
    //                 } else if ((rs.menu_parent_id).toString() === (res.menu_id).toString() && (rs.menu_level).toString() === '2') {
    //                     let itemm: any[] = [];
    //                     console.log(res.menu_id);
    //                     filterData.forEach(r => {
    //                         if (r.menu_parent_id === null || r.menu_parent_id === '') {
    //                             return;
    //                         } else if ((r.menu_parent_id).toString() === (rs.menu_id).toString() && (r.menu_level).toString() === '3') {
    //                             itemm.push({label: r.menu_name, icon: 'desktop_mac',
    //                             routerLink: ['/workspace/inventory/inventory-table/page/1']});
    //                         }
    //                     })
    //                     if (itemm.length !== 0 && itemm != null) {
    //                         console.log();
    //                         items.push({label: rs.menu_name, icon: 'desktop_mac',
    //                         routerLink: ['/workspace/inventory/inventory-table/page/1'], items: itemm});
    //                     } else {
    //                         items.push({label: rs.menu_name, icon: 'desktop_mac',
    //                         routerLink: ['/workspace/inventory/inventory-table/page/1']});
    //                     }
    //                 }
    //             })
    //             this.model.push({label: res.menu_name, icon: 'list',
    //             badge: items.length, badgeStyleClass: 'teal-badge', items});
    //         }
    //     })
    // }
    // console.log(this.model);
  }
  changeTheme(theme) {
    const themeLink: HTMLLinkElement = <HTMLLinkElement>(
      document.getElementById("theme-css")
    );
    const layoutLink: HTMLLinkElement = <HTMLLinkElement>(
      document.getElementById("layout-css")
    );

    themeLink.href = "assets/theme/theme-" + theme + ".css";
    layoutLink.href = "assets/layout/css/layout-" + theme + ".css";
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges) {
    if (changes["menulist"] !== undefined) {
      this.menulist = changes["menulist"].currentValue;
      console.log(this.menulist);
      this.ngOnInit();
    }
  }
}

@Component({
  selector: "[app-submenu]",
  template: `
    <ng-template
      ngFor
      let-child
      let-i="index"
      [ngForOf]="root ? item : item.items"
    >
      <li
        [ngClass]="{ 'active-menuitem': isActive(i) }"
        [class]="child.badgeStyleClass"
        *ngIf="child.visible === false ? false : true"
      >
        <a
          [href]="child.url || '#'"
          (click)="itemClick($event, child, i)"
          (mouseenter)="onMouseEnter(i)"
          class="ripplelink"
          *ngIf="!child.routerLink"
          [attr.tabindex]="!visible ? '-1' : null"
          [attr.target]="child.target"
        >
          <i *ngIf="child.icon" class="material-icons">{{ child.icon }}</i>
          <span>{{ child.label }}</span>
          <span class="menuitem-badge" *ngIf="child.badge">{{
            child.badge
          }}</span>
          <i class="material-icons submenu-icon" *ngIf="child.items"
            >keyboard_arrow_down</i
          >
        </a>

        <a
          (click)="itemClick($event, child, i)"
          (mouseenter)="onMouseEnter(i)"
          class="ripplelink"
          *ngIf="child.routerLink"
          [routerLink]="child.routerLink"
          routerLinkActive="active-menuitem-routerlink"
          [routerLinkActiveOptions]="{ exact: true }"
          [attr.tabindex]="!visible ? '-1' : null"
          [attr.target]="child.target"
        >
          <i *ngIf="child.icon" class="material-icons">{{ child.icon }}</i>
          <span>{{ child.label }}</span>
          <span class="menuitem-badge" *ngIf="child.badge">{{
            child.badge
          }}</span>
          <i class="material-icons submenu-icon" *ngIf="child.items"
            >keyboard_arrow_down</i
          >
        </a>
        <div class="layout-menu-tooltip">
          <div class="layout-menu-tooltip-arrow"></div>
          <div class="layout-menu-tooltip-text">{{ child.label }}</div>
        </div>
        <ul
          app-submenu
          [item]="child"
          *ngIf="child.items"
          [visible]="isActive(i)"
          [reset]="reset"
          [parentActive]="isActive(i)"
          [@children]="
            (app.isSlim() || app.isHorizontal()) && root
              ? isActive(i)
                ? 'visible'
                : 'hidden'
              : isActive(i)
              ? 'visibleAnimated'
              : 'hiddenAnimated'
          "
        ></ul>
      </li>
    </ng-template>
  `,
  animations: [
    trigger("children", [
      state(
        "hiddenAnimated",
        style({
          height: "0px"
        })
      ),
      state(
        "visibleAnimated",
        style({
          height: "*"
        })
      ),
      state(
        "visible",
        style({
          height: "*",
          "z-index": 100
        })
      ),
      state(
        "hidden",
        style({
          height: "0px",
          "z-index": "*"
        })
      ),
      transition(
        "visibleAnimated => hiddenAnimated",
        animate("400ms cubic-bezier(0.86, 0, 0.07, 1)")
      ),
      transition(
        "hiddenAnimated => visibleAnimated",
        animate("400ms cubic-bezier(0.86, 0, 0.07, 1)")
      )
    ])
  ]
})
export class AppSubMenuComponent {
  @Input() item: MenuItem;

  @Input() root: boolean;

  @Input() visible: boolean;

  _reset: boolean;

  _parentActive: boolean;

  activeIndex: number;

  constructor(public app: WorkspaceComponent) {}

  itemClick(event: Event, item: MenuItem, index: number) {
    if (this.root) {
      this.app.menuHoverActive = !this.app.menuHoverActive;
    }

    // avoid processing disabled items
    if (item.disabled) {
      event.preventDefault();
      return true;
    }

    // activate current item and deactivate active sibling if any
    this.activeIndex = this.activeIndex === index ? null : index;

    // execute command
    if (item.command) {
      item.command({ originalEvent: event, item: item });
    }

    // prevent hash change
    if (item.items || (!item.url && !item.routerLink)) {
      setTimeout(() => {
        this.app.layoutMenuScrollerViewChild.moveBar();
      }, 450);
      event.preventDefault();
    }

    // hide menu
    if (!item.items) {
      if (this.app.isHorizontal() || this.app.isSlim()) {
        this.app.resetMenu = true;
      } else {
        this.app.resetMenu = false;
      }

      this.app.overlayMenuActive = false;
      this.app.staticMenuMobileActive = false;
      this.app.menuHoverActive = !this.app.menuHoverActive;
    }
  }

  onMouseEnter(index: number) {
    if (
      this.root &&
      this.app.menuHoverActive &&
      (this.app.isHorizontal() || this.app.isSlim()) &&
      !this.app.isMobile() &&
      !this.app.isTablet()
    ) {
      this.activeIndex = index;
    }
  }

  isActive(index: number): boolean {
    return this.activeIndex === index;
  }

  @Input() get reset(): boolean {
    return this._reset;
  }

  set reset(val: boolean) {
    this._reset = val;

    if (this._reset && (this.app.isHorizontal() || this.app.isSlim())) {
      this.activeIndex = null;
    }
  }

  @Input() get parentActive(): boolean {
    return this._parentActive;
  }

  set parentActive(val: boolean) {
    this._parentActive = val;

    if (!this._parentActive) {
      this.activeIndex = null;
    }
  }
}
