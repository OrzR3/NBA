import { Component, OnInit } from "@angular/core";
// import { GroundSchedulingModel } from '../../../../common/model/ground.scheduling-model';
import { ConfirmationService } from "primeng/api";
import { ActivatedRoute, Router } from "@angular/router";
import { SoapService } from "../../../common/services/soap.service";
import { NgxSoapService, Client, ISoapMethodResponse } from "ngx-soap";
import { Http } from "@angular/http";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { HttpHeaders } from "@angular/common/http";
import { UserModel } from "../../../common/model/user.model";
import { MatchModel } from "../../../common/model/match.mode";
import { AuthService } from "../../../common/services/auth.service";
import { UtilityService } from "../../../common/services/utility.service";
import { load } from "@angular/core/src/render3";
import { Alert } from "selenium-webdriver";
// import { RoleService } from '../../../../common/services/role.service';
import { BsLocaleService, BsDatepickerConfig } from "ngx-bootstrap/datepicker";
import { DialogModule } from "primeng/dialog";
// ConfirmDialog由一个利用Observables的服务提供支持，可以轻松显示确认窗口，可以由同一组件上的多个操作共享。
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { LoginComponent } from "../../../login/login.component";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { DropdownModule } from "primeng/dropdown";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { PasswordModule } from "primeng/password";
import { MultiSelectModule } from "primeng/multiselect";
import { SelectItem } from "primeng/api";

@Component({
  selector: "role-manage",
  templateUrl: "./role-manage.component.html",
  styleUrls: ["./role-manage.component.scss", "../basic-data.component.scss"]
})
export class RoleManageComponent implements OnInit {
  bsConfig: Partial<BsDatepickerConfig>;
  locale = "zh-cn";
  // gruadList: GroundSchedulingModel[] = [];
  // gruadone: GroundSchedulingModel = new GroundSchedulingModel;
  jsonResponse: any;
  xmlResponse: string;
  message: string;
  client: Client;
  user: UserModel = new UserModel();
  userList: UserModel[] = [];
  match: MatchModel = new MatchModel();
  a: Map<string, string> = new Map<string, string>();
  js: any;

  display = false;
  display1 = false;
  current = 1;
  pageSize = 6;
  totalSize = 20;
  gymId = "";
  test = 1;
  msg = "";
  testFlag = 1;

  private roleList: any;
  private roleInfo: any = {
    value: 0,
    label: ""
  };



  private headStr: string;
  private formStyle: number; //0是新增，1是修改
  private modifyId: number;

  selectedOperation: string[] = [];
  selectedId: string[] = [];

  constructor(
    private localeService: BsLocaleService,
    private soap: NgxSoapService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private fb: FormBuilder,
    private confirmationService: ConfirmationService,
    private http: Http,
    private uti: UtilityService
  ) {}

  load() {
    console.log("load");
    this.a = new Map<string, string>();
    this.a.set(this.user.user_name, "");
    this.a.set(this.user.user_password, "");
    const body = this.uti.getParams("LYPC00001", this.a);
    console.log("this.client : " + this.client);
    (<any>this.client).service(body).subscribe(
      (res: ISoapMethodResponse) => {
        let message = res.result.return;
        let result = this.uti.parsXml(message);
        this.conven(result);
      },
      error => {
        console.log(error);
      }
    );
  }

  resetForm() {
    /* 场馆列表，和角色列表需要从接口读取 */
    this.roleList = [
      {
        value: 1,
        label: "小管理"
      },
      {
        value: 2,
        label: "店长"
      },
      {
        value: 3,
        label: "运营总监"
      },
      {
        value: 4,
        label: "员工"
      },
      {
        value: 5,
        label: "总部运营篮球项目总经理"
      },
      {
        value: 6,
        label: "总部运营篮球主管"
      },
      {
        value: 7,
        label: "admin"
      },
      {
        value: 8,
        label: "NBAhooppark运营总监"
      }
    ];
  }

  ngOnInit() {
    this.resetForm();
    /* imp 自测调试用的测试数据 */
    if (this.testFlag == 1) {
    }

    let headerss = new HttpHeaders();
    headerss.append("Access-Control-Allow-Origin", "*");
    headerss.append("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    headerss.append("Access-Control-Allow-Headers", "Accept, X-Requested-With");
    headerss.append("Access-Control-Allow-Credentials", "true");
    this.soap
      .createClient("../../assets/hsWebService.wsdl", { headers: headerss })
      .then(client => {
        this.client = client;
        console.log("Client", client);
        this.load();
      })
      .catch(err => console.log("Error", err));
  }

  conven(result: any) {
    console.log(result);
    // this.js = JSON.parse(result);
    this.roleList = result;
    // this.preloadId(this.matchList);
    /* IMP  */
  }

  showList() {}
 

  add() {
    this.headStr = "新增";
    this.formStyle = 0;
    this.initRoleInfo();
    console.log("新增");
    // this.gruadone = new GroundSchedulingModel;
    this.display = true;
    // this.test = 1;
  }

  checks(e) {
    if (e) {
      this.selectedOperation = this.selectedId;
    } else {
      this.selectedOperation = [];
    }
    console.log(e);
  }

  preloadId(matchList: MatchModel[]) {
    matchList.forEach(res => {
      this.selectedId.push(res.match_id);
    });
  }

  menuEdit(idx) {}

  roleEdit(idx) {
    this.headStr = "修改";
    this.formStyle = 1;
    this.roleInfo = this.roleList[idx];
    let tmp_id = this.roleList[idx].id;
    let tmp_label = this.roleList[idx].label;
    this.roleInfo =  {
      value: tmp_id,
      label: tmp_label
    };
    this.modifyId = idx;
    this.display = true;
  }

  roleDelete(idx) {
    console.log("删除" + this.selectedOperation);
    this.msg = "";
    this.confirmationService.confirm({
      message: "确定要删除[" + this.roleList[idx].label + "]吗??",
      header: "删除",
      accept: () => {
        this.roleList.splice(idx, 1);
        console.log("这里需要调用删除的接口方法");
        /*  this.authService.deleteFeild(this.selectedOperation).subscribe(
                        res => {
                            console.log(res);
                            this.selectedOperation = [];
                            this.onSearch();
                        }, error => {
                            console.log(error);
                        }
                    ) */
      },
      reject: () => {}
    });
  }

  selectChange() {}

  onPage(e) {
    if (this.current !== e.page) {
      this.current = e.page;
      this.pageSize = e.rows;
      console.log(this.current + "|" + this.pageSize + "|" + this.totalSize);
    }
  }

  initRoleInfo() {
    this.roleInfo = {
      id: "",
      label: ""
    };
  }

  formSave() {
    if (this.formStyle == 1) {
      this.roleList[this.modifyId] = this.roleInfo;
      // this.userList.unshift(this.userInfo);
    } else {
      this.roleList.unshift(this.roleInfo);
    }
    this.display = false;
  }

  formCancel() {
    console.log("新增取消");
    this.display = false;
  }
}
