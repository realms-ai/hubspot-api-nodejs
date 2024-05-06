import fetch from 'node-fetch'
import { Request } from './Request'
import util from 'util'
// @ts-ignore
import { convertFetchToCurl } from 'convert-fetch-to-curl';


let debugCurlLog = util.debuglog("Curl")

export class HttpClient {
  public static async send(request: Request) {
    debugCurlLog(util.inspect(convertFetchToCurl(request.getUrl(), request.getSendData()), false, 5, true));
    
    return await fetch(request.getUrl(), request.getSendData())
  }
}
