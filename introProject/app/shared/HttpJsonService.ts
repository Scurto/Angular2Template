import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';


/**
 * Created by scurto on 12.04.2017.
 */

@Injectable()
export class HttpJsonService {
    constructor(private _http: Http) {}

    getCurrentTime() {
       // return  this._http.get("http://echo.jsontest.com/key/value/one/two")
       //  var headers = new Headers();
        // headers.append("Access-Control-Allow-Origin", "*");
        return  this._http.get("http://localhost:9000/greeting")
           .map(res => res.json());
        // return this._http.get("http://echo.jsontest.com/key/value/one/two")
        //     .map(data => {
        //         data.json();
        //         the console.log(...) line prevents your code from working
        //         either remove it or add the line below (return ...)
                // console.log("I CAN SEE DATA HERE: ", data.json());
                // return data.json();
            // });
    }

    postJSON() {

    }
}