import { NgModule } from '@angular/core';
import { SharedModule } from '../../common/shared.module';
import { RouterModule } from '@angular/router';
import { TopMenuComponent } from '../top-menu/top-menu.component';
import { FooterComponent } from '../footer/footer.component';
import { WorkspaceComponent } from './workspace.component';
import { TopbarComponent } from '../topbar/topbar.component';
import { ProfileComponent } from '../profile/profile.component';
import { MenuComponent, AppSubMenuComponent } from '../menu/menu.component';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { RightpanelComponent } from '../rightpanel/rightpanel.component'
import { DropdownDirective } from '../../common/dropdown-directive/dropdown.directive';
import { DropdownTriggerDirective } from '../../common/dropdown-directive/dropdown-trigger.directive';
import { workspaceRoutes } from './workspace.routes';
import { SoapService } from '../../common/services/soap.service';
import { NgxSoapService, NgxSoapModule } from 'ngx-soap';
import { UtilityService } from '../../common/services/utility.service';
import {CheckboxModule} from 'primeng/checkbox';
import {DialogModule} from 'primeng/dialog';
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';

@NgModule({
  imports: [
    SharedModule,
    CheckboxModule,
    DialogModule,
    TableModule,
    TabViewModule,
    RouterModule.forChild(workspaceRoutes)],
  declarations: [
    WorkspaceComponent,
    TopMenuComponent,
    FooterComponent,
    TopbarComponent,
    BreadcrumbComponent,
    AppSubMenuComponent,
    RightpanelComponent,
    MenuComponent,
    ProfileComponent,
    DropdownDirective,
    DropdownTriggerDirective
  ],
  providers: [SoapService, NgxSoapService, UtilityService],
})
export class WorkspaceModule {}
