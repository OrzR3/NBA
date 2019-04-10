import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../common/services/auth.service';
import { SoapService } from '../common/services/soap.service';
import { NgxSoapService, Client, ISoapMethodResponse } from 'ngx-soap';
import { Http } from '@angular/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { HttpHeaders } from '@angular/common/http';
import { UserModel } from '../common/model/user.model';
import { userInfo } from 'os';
import { UtilityService } from '../common/services/utility.service';
import { stringify } from '@angular/core/src/render3/util';
import { MenuModel } from '../common/model/menu.model';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  jsonResponse: any;
  xmlResponse: string;
  message: string;
  client: Client;
  vld: number;
  user: UserModel = new UserModel;
  a: Map<string, string> = new Map<string, string>();
  js: any;
  testFlag:number = 1;
  // subtract() {
  //   this.loading = true;
  //   const body = {
  //     'serviceId': 'LYWX00033',
  //   };
  //   (<any>this.client).Subtract(body).subscribe(
  //     (res: ISoapMethodResponse) => {
  //       console.log('method response', res);
  //       this.xmlResponse = res.xml;
  //       this.message = res.result.SubtractResult;
  //       this.loading = false;
  //     },
  //     err => console.log(err)
  //   );
  // }

  constructor(private soap: NgxSoapService, public router: Router, public activatedRoute: ActivatedRoute,
    private authService: AuthService, private http: Http, private uti: UtilityService) {
  }

  login() {
    if(this.testFlag == 1){
      this.rediect();
      return;
    }
    try {
      this.a = new Map<string, string>();
      this.a.set(this.user.user_name, 'USER_NAME');
      this.a.set(this.user.user_password, 'USER_PASSWORD');
      const body = this.uti.getParams('SYPC00001', this.a);
      console.log("login : "+this.client);
      (<any>this.client).service(body).subscribe((res: ISoapMethodResponse) => {
        let message = res.result.return;
        console.log(message);
        let result = this.uti.parsXml(message);
        this.conven(result);
      }, error => { console.log(error) });
    } catch (error) {
      
    }
   
  }

  ngOnInit() {
    this.vld = 0;
    let headerss = new HttpHeaders();
    headerss.append('Access-Control-Allow-Origin', '*');
    headerss.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    headerss.append('Access-Control-Allow-Headers', 'Accept, X-Requested-With');
    headerss.append('Access-Control-Allow-Credentials', 'true');
    this.soap.createClient('../../assets/hsWebService.wsdl', { headers: headerss })
      .then(client => {
        console.log('Client', client);
        this.client = client;
      })
      .catch(err => console.log('Error', err));
  }

  conven(result: any) {
    // this.rediect();
    this.vld = 0;
    console.log("login+coven"+result);
    this.js = JSON.parse(result);
    if (this.js.login.CODE === '-1') {
      this.vld = -1;
    } else if (this.js.login.CODE === '-2') {
      this.vld = -2
    } else {
      this.rediect();
    }
  }

  rediect() {
    this.authService.loggin(this.user.user_name, this.user.user_password).subscribe(() => {
      const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/workspace/basic-data';
      this.router.navigate([redirect]);
    });
  }
  // url:'http://192.168.1.122:8080/LeYunService/services/hsWebService?wsdl',
}
