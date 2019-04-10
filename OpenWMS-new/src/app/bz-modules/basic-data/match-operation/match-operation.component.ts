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

@Component({
  selector: "match-operation",
  templateUrl: "./match-operation.component.html",
  styleUrls: [
    "./match-operation.component.scss",
    "../basic-data.component.scss"
  ]
})
export class MatchOperationComponent implements OnInit {
  bsConfig: Partial<BsDatepickerConfig>;
  locale = "zh-cn";
  // gruadList: GroundSchedulingModel[] = [];
  // gruadone: GroundSchedulingModel = new GroundSchedulingModel;
  jsonResponse: any;
  xmlResponse: string;
  message: string;
  client: Client;
  user: UserModel = new UserModel();
  matchList: MatchModel[] = [];
  match: MatchModel = new MatchModel();
  a: Map<string, string> = new Map<string, string>();
  js: any;
  // 赛事状态
  matchStateList: any;
  // 报名条件
  matchTypeList: any;

  /*  matchStateId: "";
  matchTypeId: ""; */

  private matchStateId: string = "";
  private matchTypeId: string = "";
  private searchText: string = "";
  private beginTime: any;
  private endTime: any;

  /*  searchText:"";
  beginTime: "";
  endTime:""; */

  display = false;
  display1 = false;
  current = 1;
  pageSize = 6;
  totalSize = 20;
  gymId = "";
  test = 1;
  msg = "";
  // imp
  testFlag = 0;
  matchTypeObj = {
    1: "个人赛",
    2: "球队赛"
  };

  selectedOperation: string[] = [];
  selectedId: string[] = [];

  constructor(
    private localeService: BsLocaleService,
    private soap: NgxSoapService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private confirmationService: ConfirmationService,
    private http: Http,
    private uti: UtilityService
  ) {}
  // 充值表单
  resetForm() {
    this.matchTypeList = [
      {
        desc: "个人赛",
        id: 1
      },
      {
        desc: "球队赛",
        id: 2
      }
    ];
    this.matchStateList = [
      {
        desc: "登记",
        id: 1
      },
      {
        desc: "挂网",
        id: 2
      },
      {
        desc: "报名",
        id: 3
      },
      {
        desc: "报名截止",
        id: 4
      },
      {
        desc: "开始",
        id: 5
      },
      {
        desc: "结束",
        id: 6
      },
      {
        desc: "特殊挂起",
        id: 8
      },
      {
        desc: "异常终止",
        id: 9
      }
    ];
  }
  selectHobby(data) {
    console.log("选择兴趣", data);
  }

  load() {
    console.log("load");
    this.a = new Map<string, string>();
    /* 
    需要的参数：
    PAGEIDX：当前页面
    PAGESIZE：每页显示记录的条数 */
    this.a.set(this.current + "", "PAGEIDX");
    this.a.set(this.pageSize + "", "PAGESIZE");

    /* this.a.set(this.user.user_name, 'USER_NAME');
    this.a.set(this.user.user_password, 'USER_PASSWORD'); */

    const body = this.uti.getParams("LYPC00001", this.a);
    console.log("this.client : " + this.client);
    (<any>this.client).service(body).subscribe(
      (res: ISoapMethodResponse) => {
        let message = res.result.return;
        let result = this.uti.parsXml(message);
        console.log(JSON.stringify(result));
        this.conven(result);
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    //日期配置
    this.bsConfig = Object.assign(
      {},
      { dateInputFormat: "YYYY-MM-DD", showWeekNumbers: false }
    );
    //日期使用中文
    this.localeService.use(this.locale);

    this.onSearch();
    this.resetForm();
    /* imp 自测调试用的测试数据 */
    if (this.testFlag == 1) {
      var testList = {
        listMap: [
          {
            match_id: "2",
            match_name: "这是第二个赛事名字",
            match_start_date: 1554393600000,
            match_end_date: 1554566400000,
            match_type: "2",
            match_writing: "这是球队赛的文案介绍",
            match_num: 20,
            enlist_start_date: 1554134400000,
            enlist_end_date: 1554307200000,
            enlist_mode: "0",
            enlis_phone: "222222",
            enlis_person: "联系人2",
            enlis_picture: "",
            enlis_big_picture: "",
            enlis_price: 30.0,
            Is_enable: 0,
            creator_id: "fdasfsdf",
            create_date: 1553744410000,
            modifier_id: "dfsdffdsgfd",
            modify_date: 1553702400000,
            match_state: "3",
            enroll_num: 0
          },
          {
            match_id: "3",
            match_name: "这是第三个赛事名字",
            match_start_date: 1554393600000,
            match_end_date: 1554566400000,
            match_type: "2",
            match_writing: "这是球队赛的文案介绍",
            match_num: 20,
            enlist_start_date: 1554134400000,
            enlist_end_date: 1554307200000,
            enlist_mode: "0",
            enlis_phone: "3333333",
            enlis_person: "联系人3",
            enlis_picture: "",
            enlis_big_picture: "",
            enlis_price: 30.0,
            Is_enable: 0,
            creator_id: "fdasfsdf",
            create_date: 1553744770000,
            modifier_id: "dfsdffdsgfd",
            modify_date: 1553702400000,
            match_state: "3",
            enroll_num: 0
          },
          {
            match_id: "1",
            match_name: "赛事名字",
            match_start_date: 1554393600000,
            match_end_date: 1554566400000,
            match_type: "1",
            match_writing: "这是文案介绍",
            match_num: 20,
            enlist_start_date: 1554134400000,
            enlist_end_date: 1554307200000,
            enlist_mode: "0",
            enlis_phone: "1111111",
            enlis_person: "联系人",
            enlis_picture: null,
            enlis_big_picture: null,
            enlis_price: 20.0,
            Is_enable: 0,
            creator_id: "fdasfsdf",
            create_date: 1554170855000,
            modifier_id: null,
            modify_date: 1554134400000,
            match_state: "3",
            enroll_num: 1
          }
        ],
        pageInfo: { pageIdx: 1, pageSize: 6, totalSize: 3, begin: 1, end: 6 }
      };
      for (let index = 0; index < 2; index++) {
        testList.listMap.push(testList.listMap[testList.listMap.length - 1]);
      }
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
    // this.js = JSON.parse(result);
    this.matchList = result.listMap;
    this.totalSize = result.totalSize;
    // this.preloadId(this.matchList);
    /* IMP  */
  }

  showList() {}

  onSearch() {
    this.gymId = sessionStorage.getItem("gymId");
    console.log("onsearch");
    /*  this.authService.showFeild(this.gymId).subscribe(
          res => {
              this.gruadList = res['data'];
              this.preloadId(this.gruadList);
              console.log(res);
          }, error => {
              console.log(error);
          }
      ) */
  }

  add() {
    // this.gruadone = new GroundSchedulingModel;
    this.display = true;
    this.test = 1;
  }

  addOper() {
    /*  this.authService.addFeild(this.gruadone).subscribe(
            res => {
                this.display = false;
                this.onSearch();
                console.log(res);
            }, error => {
                console.log(error);
            }
        ); */
  }

  modifyOper() {
    this.test = 2;
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
  modifyOk() {
    /*  this.authService.modifFeild(this.gruadone).subscribe(
            res => {
                console.log(res);
                this.display = false;
                this.onSearch();
            }, error => {
                console.log(error);
            }
        ) */
  }
  addSite() {
    /*  this.authService.addFeild(this.gruadone).subscribe(
            res => {
                console.log(res);
                this.display = false;
                this.onSearch();
            }, error => {
                console.log(error);
            }
        ) */
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

  deleteOper() {
    this.msg = "";
    if (this.selectedOperation.length > 0) {
      this.confirmationService.confirm({
        message: "您是否确定删除选中场地?",
        header: "删除场地",
        accept: () => {
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

  /* 报名付费 */
  /*  添加赛事 */
  addMatch() {
    console.log("添加赛事");
    this.router.navigateByUrl("/workspace/basic-data/add-match");
  }
  /*  编辑赛事 */
  modifyMatch() {
    console.log("编辑赛事");
  }
  /*  录入成绩 */
  entryResult() {}
  /*  查询 */
  search() {
    console.log("查询");
  }
  /* 删除赛事 */
  deleteMatch() {
    console.log("查询");
  }
  /* 赛事详情 */
  detailMatch() {
    console.log("赛事详情");
  }
  /* 导出表格 */
  derivedForm() {
    console.log("导出表格");
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
        this.searchText +
        "|" +
        this.matchStateId +
        "|" +
        this.matchTypeId
    );
  }

  onPage(e) {
    if (this.current !== e.page) {
      this.current = e.page;
      this.pageSize = e.rows;
      alert(this.matchStateId + "|" + this.matchTypeId);
      // console.log(this.current + "|" + this.pageSize + "|" + this.totalSize);
    }
  }
}
