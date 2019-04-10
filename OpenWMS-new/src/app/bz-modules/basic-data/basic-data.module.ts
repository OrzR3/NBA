import { UserManageComponent } from './user-manage/user-manage.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { FormsModule } from '@angular/forms';
import { DataTableModule } from "primeng/components/datatable/datatable";
import { CalendarModule } from "primeng/components/calendar/calendar";
import { DropdownModule } from "primeng/primeng";
import { TreeModule } from "primeng/components/tree/tree";
import { MultiSelectModule } from "primeng/multiselect";

import { SharedModule } from "../../common/shared.module";
import { BasicDataComponent } from "./basic-data.component";

import { WarehouseTableComponent } from "./warehouse-table/warehouse-table.component";
import { WarehouseFormComponent } from "./warehouse-form/warehouse-form.component";
import { WarehouseMapComponent } from "./warehouse-map/warehouse-map.component";
import { CategoryTableComponent } from "./category-table/category-table.component";
import { CategoryFormComponent } from "./category-form/category-form.component";
import { VendorTableComponent } from "./vendor-table/vendor-table.component";
import { VendorFormComponent } from "./vendor-form/vendor-form.component";
import { CustomerTableComponent } from "./customer-table/customer-table.component";
import { CustomerFormComponent } from "./customer-form/customer-form.component";
import { StaffTableComponent } from "./staff-table/staff-table.component";
import { StaffFormComponent } from "./staff-form/staff-form.component";
import {CheckboxModule} from 'primeng/checkbox';
import {DialogModule} from 'primeng/dialog';
import {TableModule} from 'primeng/table';
import {multiSelectComponent} from '../../components/multiSelect/multiSelect.component';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {defineLocale} from 'ngx-bootstrap/chronos';
import {zhCnLocale} from 'ngx-bootstrap/locale';

import { basicDataRoutes } from "./basic-data.routes";
import { MatchOperationComponent } from "./match-operation/match-operation.component";
import { AddMatchComponent } from "./add-match/add-match.component";
import { AuthService } from "../../common/services/auth.service";
import { RoleManageComponent } from './role-manage/role-manage.component';
import { MenuManageComponent } from './menu-manage/menu-manage.component';
import { EditMatchComponent } from './edit-match/edit-match.component';
import { RecordTeamComponent } from './record-team/record-team.component';

defineLocale('zh-cn', zhCnLocale);// 日历显示中文

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DataTableModule,
    CalendarModule,
    DropdownModule,
    TreeModule,
    CheckboxModule,
    DialogModule,
    TableModule,
    FormsModule,
    MultiSelectModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forChild(basicDataRoutes)
  ],
  declarations: [
    BasicDataComponent,
    multiSelectComponent,
    WarehouseTableComponent,
    WarehouseFormComponent,
    WarehouseMapComponent,
    CategoryTableComponent,
    CategoryFormComponent,
    VendorTableComponent,
    VendorFormComponent,
    CustomerTableComponent,
    CustomerFormComponent,
    StaffTableComponent,
    StaffFormComponent,
    AddMatchComponent,
    MatchOperationComponent,
    EditMatchComponent,
    RecordTeamComponent,
    RoleManageComponent,
    MenuManageComponent,
    UserManageComponent
  ],
  providers:[AuthService]
})
export class BasicDataModule {}
