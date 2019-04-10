import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule, Http } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingModule } from 'ngx-loading';
import { GrowlModule } from 'primeng/primeng';
import { MessageService } from 'primeng/components/common/messageservice';
import { TranslateService, TranslateStore } from '@ngx-translate/core';
import { SharedModule } from './common/shared.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { appRoutes } from './app.routes';
import { AuthGuard } from './common/guard/auth.guard';
import { AuthService } from './common/services/auth.service';
import { SoapService } from './common/services/soap.service';
import { NgxSoapService, NgxSoapModule } from 'ngx-soap';
import { UtilityService } from './common/services/utility.service';
// import { MatchOperationComponent } from './global-layout/match-operation/match-operation.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // MatchOperationComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    LoadingModule,
    GrowlModule,
    NgxSoapModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [MessageService, AuthGuard, AuthService, TranslateService, TranslateStore,
    SoapService, NgxSoapService, UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
