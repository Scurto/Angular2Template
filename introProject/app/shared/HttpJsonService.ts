import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';


/**
 * Created by scurto on 12.04.2017.
 */

@Injectable()
export class HttpJsonService {
    constructor(private _http: Http) {}

    getJsonFromServer() {
        return  this._http.get("http://localhost:8080/api/test")
           .map(res => res.json());
    }

    postJSON() {
        var json = JSON.stringify({var1: "test", var2: 3});
        var params = "json="+json;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.post(
            'http://validate.jsontest.com',
            params,
            {
            headers: headers
            }
        ).map(res => res.json());
    }

    register(json: any) {
        var headers = new Headers();
        // headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Content-Type', 'application/json');

        return this._http.post(
            'http://localhost:8080/register',
            json,
            {
                headers: headers
            }
        ).map(res => res.status);
    }

    getJsonFromJAXRS(json: any) {
        var headers = new Headers();
        // headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Content-Type', 'application/json');

        return this._http.post(
            'http://localhost:8081/webapi/get_test_json',
            json,
            {
                headers: headers
            }
        ).map(res => res.status);
    }
}