import { dashboardRoutes } from "./../../dashboard/dashboard.routes";
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
  selector: "user-manage",
  templateUrl: "./user-manage.component.html",
  styleUrls: ["./user-manage.component.scss", "../basic-data.component.scss"]
})
export class UserManageComponent implements OnInit {
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
  private searchText: string = "";
  private beginTime: any;
  private endTime: any;

  display = false;
  display1 = false;
  current = 1;
  pageSize = 6;
  totalSize = 20;
  gymId = "";
  test = 1;
  msg = "";
  testFlag = 1;

  rules: any = {
    name: [
      {
        required: true,
        message: "请输入姓名"
      },
      {
        validator: function(value) {
          if (value.length > 3) {
            return "名字不能太长哦";
          }
        }
      }
    ],
    age: [
      {
        required: true,
        message: "请输入年龄"
      },
      {
        validator: function(value) {
          if (value < 0) {
            return "虽然你年轻得像逆生长，但年龄必须是正数哦";
          }
        }
      }
    ]
  };

  private roleList: any;

  private siteList: any;

  private headStr: string;
  private formStyle: number; //0是新增，1是修改
  private modifyId: number;

  private userInfo: any = {
    role_name: "",
    site: "",
    user_name: "",
    user_code: "",
    name: "",
    phone: "",
    user_email: "",
    desc: "",
    user_password: "",
    pconfirm: ""
  };
  userInfoForm: FormGroup;

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

    this.siteList = [
      {
        value: 1,
        label: "梅溪湖篮球馆"
      },
      {
        value: 2,
        label: "798篮球馆"
      }
    ];
  }

  initFormUntouched() {
    alert(123);
    this.userInfoForm.get("roleName").untouched;
    this.userInfoForm.get("roleName").touched;
    alert(this.userInfoForm.get("roleName").touched);
  }

  ngOnInit() {
    this.resetForm();
    this.initUserInfoForm();

    //日期配置
    this.bsConfig = Object.assign(
      {},
      { dateInputFormat: "YYYY-MM-DD", showWeekNumbers: false }
    );
    //日期使用中文
    this.localeService.use(this.locale);
    /* imp 自测调试用的测试数据 */
    if (this.testFlag == 1) {
      var testList = [
        {
          user_id: "1",
          user_code: "007",
          user_name: "yfy",
          name: "yfy",
          role_name: "小管理",
          login_time: "2049-4-8",
          site: "梅溪湖篮球馆",
          phone: "15000000000",
          user_email: "test@163.com",
          user_password: "1223311",
          desc: ""
        },
        {
          user_id: "2",
          user_code: "1",
          user_name: "ljh",
          name: "	刘菊红",
          role_name: "员工",
          login_time: "2049-4-8",
          site: "梅溪湖篮球馆",
          phone: "150000001130",
          user_email: "test123@163.com",
          desc: "备注2222"
        },
        {
          user_id: "3",
          user_code: "11",
          user_name: "wz",
          name: "文章",
          role_name: "总部运营篮球主管",
          login_time: "2019-4-8",
          site: "梅溪湖篮球馆",
          phone: "150000001130",
          user_email: "test123@163.com",
          desc: "备注333"
        },
        {
          user_id: "4",
          user_code: "007",
          user_name: "yfy",
          name: "yfy",
          role_name: "小管理",
          login_time: "2049-4-8",
          site: "梅溪湖篮球馆",
          phone: "15000000000",
          user_email: "test@163.com",
          desc: ""
        },
        {
          user_id: "5",
          user_code: "1",
          user_name: "ljh",
          name: "	刘菊红",
          role_name: "员工",
          login_time: "2049-4-8",
          site: "梅溪湖篮球馆",
          phone: "150000001130",
          user_email: "test123@163.com",
          desc: "备注2222"
        },
        {
          user_id: "6",
          user_code: "11",
          user_name: "wz",
          name: "文章",
          role_name: "总部运营篮球主管",
          login_time: "2019-4-8",
          site: "梅溪湖篮球馆",
          phone: "150000001130",
          user_email: "test123@163.com",
          desc: "备注333"
        }
      ];
      this.conven(testList);
      return;
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
    this.userList = result;
    // this.preloadId(this.matchList);
    /* IMP  */
  }

  showList() {}
  modify(idx) {
    this.initUserInfoForm();
    this.headStr = "资料";
    this.formStyle = 1;
    this.userInfo = this.userList[idx];
    this.modifyId = idx;
    this.display = true;
    this.initFormUntouched();
  }

  add() {
    this.initUserInfoForm();
    this.headStr = "新增";
    this.formStyle = 0;
    this.initUserInfo();
    console.log("新增");
    // this.gruadone = new GroundSchedulingModel;
    this.display = true;
    this.initFormUntouched();
    // this.test = 1;
  }

  modifyOper() {
    // this.test = 2;
    if (this.selectedOperation.length > 1) {
      this.msg = "只能选择单个场地修改信息！";
      this.display1 = true;
    } else if (this.selectedOperation.length === 0) {
      this.msg = "请选择需要修改的场地！";
      this.display1 = true;
    } else {
      /*  this.authService.selectFeild(this.selectedOperation[0]).subscribe(
                res => {
                    this.gruadone = res['data'];
                    console.log(res);
                    this.display = true;
                }, error => {
                    console.log(error);
                }
            ) */
    }
    console.log(this.selectedOperation);
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

  delete(idx) {
    console.log("删除" + this.selectedOperation);
    this.msg = "";
    if (this.selectedOperation.length > 0) {
      this.confirmationService.confirm({
        message: "确定要删除[" + this.userList[idx].name + "]吗??",
        header: "删除场地",
        accept: () => {
          this.userList.splice(idx, 1);
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
    } else {
      this.msg = "未选中场地！";
      this.display1 = true;
    }
  }

  search() {
    console.log("查询");
  }

  showInfo() {
    this.msg = "";
    if (this.selectedOperation.length > 1) {
      this.msg = "只能选择单个场地查看信息！";
      this.display1 = true;
    } else if (this.selectedOperation.length === 0) {
      this.msg = "请选择需要查看的场地！";
      this.display1 = true;
    } else {
      this.test = 3;
      /*  this.authService.selectFeild(this.selectedOperation[0]).subscribe(
                res => {
                    this.gruadone = res['data'];
                    console.log(res);
                    this.display = true;
                }, error => {
                    console.log(error);
                }
            ) */
    }
    console.log(this.selectedOperation);
  }

  selectChange() {
    alert(
      new Date(this.endTime).getTime() +
        "|" +
        new Date(this.beginTime).getTime() +
        "|" +
        this.searchText
    );
  }

  onPage(e) {
    if (this.current !== e.page) {
      this.current = e.page;
      this.pageSize = e.rows;
      console.log(this.current + "|" + this.pageSize + "|" + this.totalSize);
    }
  }

  initUserInfo() {
    this.userInfo = {
      role_name: "",
      site: "",
      user_name: "",
      user_code: "",
      name: "",
      phone: "",
      user_email: "",
      desc: "",
      user_password: ""
    };
  }

  mobileValidator(control: FormControl): any {
    const mobileReg = /^1[34578]\d{9}$/;
    const result = mobileReg.test(control.value);
    return result ? null : { phone: { info: "请输入正确的手机号" } };
  }

  equalValidator(group: FormGroup): any {
    const password = group.get("password") as FormControl;
    const pconfirm = group.get("pconfirm") as FormControl;

    const isEqule: boolean = password.value === pconfirm.value;
    return isEqule ? null : { equal: { info: "两次密码不一致" } };
  }

  initUserInfoForm() {
    this.userInfoForm = this.fb.group({
      roleName: ["", Validators.required],
      site: ["", Validators.required],
      name: ["", Validators.required],
      phone: ["", [Validators.required, this.mobileValidator]],
      userName: ["", Validators.required],
      email: [""],
      desc: [""],
      passwordGroup: this.fb.group(
        {
          password: [
            "",
            [
              Validators.required,
              Validators.minLength(6),
              Validators.maxLength(20)
            ]
          ],
          pconfirm: [""]
        },
        { validator: this.equalValidator }
      )
    });
  }

  formSave() {
    console.log("新增表单验证");
    console.log(this.userInfoForm.get("passwordGroup").valid);
    console.log(this.userInfoForm.get("passwordGroup").get("password").valid);
    console.log("roleNmae角色名" + this.userInfoForm.get("roleName").valid);
    console.log("site场馆名" + this.userInfoForm.get("site").valid);
    console.log("姓名" + this.userInfoForm.get("name").valid);
    console.log("手机 ：" + this.userInfoForm.get("phone").valid);
    console.log("邮箱：" + this.userInfoForm.get("email").valid);
    console.log("用户名" + this.userInfoForm.get("userName").valid);
    console.log("备注" + this.userInfoForm.get("desc").valid);
    console.log(
      "两次密码验证 ： " + this.userInfoForm.get("passwordGroup").valid
    );
    console.log(
      "再次输入密码 ： " + this.userInfoForm.get("passwordGroup").valid
    );

    if (this.userInfoForm.valid) {
      alert(JSON.stringify(this.userInfo));
      if (this.formStyle == 1) {
        this.userList[this.modifyId] = this.userInfo;
        // this.userList.unshift(this.userInfo);
      } else {
        this.userList.unshift(this.userInfo);
      }
      this.display = false;
    } else {
      alert(2);
    }
  }

  formCancel() {
    console.log("新增取消");
    this.display = false;
  }
}
