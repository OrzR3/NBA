import { UserManageComponent } from './user-manage/user-manage.component';
import { Component } from '@angular/core';
import { BasicDataComponent } from './basic-data.component';
import { WarehouseTableComponent } from './warehouse-table/warehouse-table.component';
import { WarehouseFormComponent } from './warehouse-form/warehouse-form.component';
import { CategoryTableComponent } from './category-table/category-table.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { VendorTableComponent } from './vendor-table/vendor-table.component';
import { VendorFormComponent } from './vendor-form/vendor-form.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { StaffTableComponent } from './staff-table/staff-table.component';
import { StaffFormComponent } from './staff-form/staff-form.component';
import { MatchOperationComponent } from './match-operation/match-operation.component';
import { AddMatchComponent } from './add-match/add-match.component';
import { RoleManageComponent } from "./role-manage/role-manage.component";
import { MenuManageComponent } from "./menu-manage/menu-manage.component";
import { EditMatchComponent } from "./edit-match/edit-match.component";
import { RecordTeamComponent } from "./record-team/record-team.component";

export const basicDataRoutes = [{
	path: '',
	component: BasicDataComponent,
	children: [
		// { path: '', redirectTo: 'warehouse-table/page/1', pathMatch: 'full' },
		{ path: '',component: RoleManageComponent},
		{ path: 'user-manage',component: UserManageComponent},
		{ path: 'warehouse-table/page/:page', component: WarehouseTableComponent },
		// { path: 'category-table/page/:page', component: CategoryTableComponent },
		// { path: 'vendor-table/page/:page', component: VendorTableComponent },
		// { path: 'customer-table/page/:page', component: CustomerTableComponent },
		// { path: 'staff-table/page/:page', component: StaffTableComponent },
		// { path: 'warehouse-form', component: WarehouseFormComponent },
		// { path: 'category-form', component: CategoryFormComponent },
		// { path: 'vendor-form', component: VendorFormComponent },
		{ path: 'customer-form', component: CustomerFormComponent },
    { path: 'staff-form', component: StaffFormComponent },
    { path: 'add-match', component: AddMatchComponent},
    { path: 'edit-match', component: EditMatchComponent},
		{ path: 'record-team', component: RecordTeamComponent},
		{ path: 'match-competition', component: MatchOperationComponent},
		{ path: 'role-manage',component: RoleManageComponent},
		{ path: 'menu-manage',component: MenuManageComponent},
		{ path: 'user-manage',component: UserManageComponent}
	]
}];
