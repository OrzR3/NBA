import { Component, OnInit } from "@angular/core";
import { BsLocaleService, BsDatepickerConfig } from "ngx-bootstrap/datepicker";
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: "add-match",
  templateUrl: "./add-match.component.html",
  styleUrls: ["./add-match.component.scss"]
})
export class AddMatchComponent implements OnInit {
  bsConfig: Partial<BsDatepickerConfig>;
  locale = "zh-cn";
  public matchInfo: any = {
    match_name: "",
    match_writing: "",
    enlis_picture: "",
    enlis_big_picture: "",
    enlist_start_date: "",
    enlist_end_date: "",
    match_start_date: "",
    match_end_date: "",
    match_type: "",
    match_state: "",
    match_num: "",
    enlis_price: ""
  };
  // 赛事状态
  matchStateList: any;
  // 报名条件
  matchTypeList: any;
  cropUploader: any;
  // 图片裁剪
  imageChangedEvent: any = "";
  croppedImage: any = "";
  cropperReady = false;
  cropperFile: any;
  // 文件上传操作
  uploader: any;
  constructor(
    private localeService: BsLocaleService,
    private sanitizer: DomSanitizer
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
  ngOnInit() {
     //日期配置
     this.bsConfig = Object.assign(
      {},
      { dateInputFormat: "YYYY-MM-DD", showWeekNumbers: false }
    );
    //日期使用中文
    this.localeService.use(this.locale);
    this.resetForm();
  }
  imageCropped(image: string) {
    this.croppedImage = image;
    // 将文件格式转换成file
    const formData = new FormData(); // 这里连带form里的其他参数也一起提交了,如果不需要提交其他参数可以直接FormData无参数的构造函数
    // convertBase64UrlToBlob函数是将base64编码转换为Blob
    const vm = this;
    formData.append("cropper", vm.convertBase64UrlToBlob(image));
    // append函数的第一个参数是后台获取数据的参数名,和html标签的input的name属性功能相同
    console.log(
      "查看这个DOM节点",
      formData.get("cropper"),
      vm.convertBase64UrlToBlob(image)
    );
    vm.cropperFile = formData.get("cropper");
  }

  imageLoaded() {
    this.cropperReady = true;
  }

  imageLoadFailed() {
    console.log("Load failed");
  }

  selectedFileOnChanged(event?: any) {
    if (event) {
      this.imageChangedEvent = event; // 通知裁剪插件
    }
  }

  convertBase64UrlToBlob(urlData) {
    // 将文件的base64转换成file
    const bytes = window.atob(urlData.split(",")[1]); // 去掉url的头，并转换为byte
    // 处理异常,将ascii码小于0的转换为大于0
    const ab = new ArrayBuffer(bytes.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < bytes.length; i++) {
      ia[i] = bytes.charCodeAt(i);
    }
    return new Blob([ab], { type: "image/png" });
  }

  /* getObjectURL(file) {  
    var url = null;  
    if (window.createObjcectURL != undefined) {  
        url = window.createOjcectURL(file);  
    } else if (window.URL != undefined) {  
        url = window.URL.createObjectURL(file);  
    } else if (window.webkitURL != undefined) {  
        url = window.webkitURL.createObjectURL(file);  
    }  
    return url;  
} */

  doSubmit() {
    /*
    jquery  dom操作
      <input type="text" id="username" />
      let usernameDom:any=document.getElementById('username');
      console.log(usernameDom.value);
    */
    console.log(this.matchInfo);
  }

  fileChange(e) {
   /*  const file = e.srcElement.files[0]; // 获取图片这里只操作一张图片
    this.matchInfo.enlis_picture = window.URL.createObjectURL(file); // 获取上传的图片临时路径
    alert(this.matchInfo.enlis_picture); */
    let file = e.target.files[0];
    let imgUrl = window.URL.createObjectURL(file);
    let sanitizerUrl = this.sanitizer.bypassSecurityTrustUrl(imgUrl); 
    this.matchInfo.enlis_picture = sanitizerUrl;
    // alert(this.matchInfo.enlis_picture);
  }
}
