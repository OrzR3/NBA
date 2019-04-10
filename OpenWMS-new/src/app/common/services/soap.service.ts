import { Injectable } from '@angular/core';
import SOAPClient from './soapclient.js';
import { HttpHeaders } from '@angular/common/http';
import { NgModule } from '@angular/core';

@Injectable()

export class SoapService {

    public soapParams: any;
    public soapClient: any;
    public action: String;
    public url: String;
    public header: HttpHeaders;

    constructor() {
    }

    post(params) {

        //params.add('wuserid','111');

        this.action = 'processing';
        this.url = 'http://172.16.24.251:8080/LeYunService/services/hsWebService?wsdl';
        this.soapParams = new SOAPClient.SOAPClientParameters;
        this.soapClient = SOAPClient.SOAPClient;
        return new Promise((resolve, reject) => {
            /*Create SOAPClientParameters
			for(var param in params){
				this.soapParams.add(param, params[param]);
			}
            Create Callback*/
            var soapCallback = function (e, status) {
                if (e == null || e.constructor.toString().indexOf('function Error()') != -1) {
                    reject('Unable to contat the server: ' + status);
                } else {

                    resolve(JSON.parse(e));
                    console.log('json转换--------------' + JSON.parse(e));
                }
            }
            // let userid = window.localStorage.getItem('userid');
            // let username = window.localStorage.getItem('username');
            // let ouid = window.localStorage.getItem('ouid');
            // console.log('userid:' + userid + '--username' + username);
            // params['userid'] = !null ? userid : '';
            // params['username'] = !null ? username : '';
            // params['ouid'] = !null ? ouid : ''
            console.log(params);
            this.soapClient.invoke(this.url, this.action, params, true, soapCallback);
        });
    }
    setCredentials(username, password) {
        this.soapClient.username = username;
        this.soapClient.password = password;
    }

    getsysdate() {
        // 格式化日期，获取今天的日期
        const Dates = new Date();
        const year: number = Dates.getFullYear();
        const month: any = (Dates.getMonth() + 1) < 10 ? '0' + (Dates.getMonth() + 1) : (Dates.getMonth() + 1);
        const day: any = Dates.getDate() < 10 ? '0' + Dates.getDate() : Dates.getDate();
        const sysdate: string = year + '-' + month + '-' + day;
        return sysdate.toString();
    }
    //     function ajaxClass(_http, _url, _method, _params, _headers, _data, _responseType, _successCallback, _failureCallback) {
    //     this.http = _http
    //     this.url = _url || '';
    //     this.method = _method || 'GET';
    //     this.params = _params || '';
    //     this.headers = _headers || '';
    //     this.data = _data || '';
    //     this.responseType = _responseType || 'json';
    //     this.successCallback = _successCallback || function (res) {
    //     };
    //     this.failureCallback = _failureCallback || function (res) {

    //     };
    //     this.requestData = function () {
    //         this.http({
    //             method: this.method,
    //             url: this.url,
    //             params: this.params,
    //             data: this.data,
    //             headers: this.headers,
    //             responseType: this.responseType
    //         }).then(this.successCallback, this.failureCallback);
    //     }
    //    }
}
