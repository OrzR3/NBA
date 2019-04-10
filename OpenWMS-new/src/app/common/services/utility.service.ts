import { BodyModel } from '../model/body-model';


export class UtilityService {
    convert = require('xml-js');
    body: BodyModel = new BodyModel;
    constructor() {

    }
    // 拼接xml response头部信息
    public getParams(serviceId: string, obj: Map<string, string>) {
        let xml = null;
        obj.forEach((key: string, value: string) => {
            xml += ('<' + key + '>' + value + '</' + key + '>');
        })
        this.body = {
            param: 'serviceId{=}' + serviceId + '{,}dataPackType{=}4{,}userName{=}dep{,}password{=}1{,}compress{=}N{,}encrypt{=}N',
            data: '<![CDATA[<WSD><MESSAGE><VERSION>1</VERSION></MESSAGE><DATA><BEAN>'
                + xml + '</BEAN></DATA></WSD>]]>'
        }
        return this.body;
    }

    // 解析xml文件 实体类转换
    parsXml(xml: any) {
        let options = { compact: true, ignoreCdata: true, ignoreDeclaration: true };
        let result = this.convert.xml2js(xml, options);  // to convert xml text to json text
        console.log('转换后的json');
        console.log(result.WSD.DATA._text);
        return result.WSD.DATA._text;
    }

}


