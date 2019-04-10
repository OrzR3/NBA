import { Component, OnInit } from "@angular/core";

@Component({
  selector: "record-team",
  templateUrl: "./record-team.component.html",
  styleUrls: ["./record-team.component.scss"]
})
export class RecordTeamComponent implements OnInit {
  private titleText: string = '2019 NBA "3V3" 篮球联赛 ';
  private totalList: any = [
    {
      list: [
        {
          top_name: "123",
          top_score: "100",
          bot_name: "321",
          bot_score: "50"
        }
      ]
    }
  ];
  teamList: any;
  constructor() {}
  // 充值表单
  resetForm() {
    this.teamList = [
      {
        id: 1,
        desc: "长沙猛龙队"
      },
      {
        id: 2,
        desc: "黑曼巴队"
      },
      {
        id: 3,
        desc: "X-Man"
      }
    ];
  }
  ngOnInit() {
    this.resetForm();
  }

  addSite(idx) {
    var obj = {
      top_name: "",
      top_score: "",
      bot_name: "",
      bot_score: ""
    };
    this.totalList[idx].list.push(obj);
  }

  deleteSite(i, j) {
    this.totalList[i].list.splice(j, 1);
  }
  addTeam() {
    var obj = {
      list: [
        {
          top_name: "",
          top_score: "100",
          bot_name: "",
          bot_score: "50"
        }
      ]
    };
    this.totalList.push(obj);
  }

  doSubmit() {
    alert(JSON.stringify(this.totalList));
  }
}
