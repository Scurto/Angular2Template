import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
/**
 * Created by yustymenko on 15.06.2017.
 */

@Injectable()
export class JaxRsService {

    mySrever: string = 'http://localhost:8080/';
    mySreverDeployed: string = 'http://localhost:8080/';
    constructor(private _http: Http) { }

    getTasks() {
        var headers = new Headers();
        // headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Content-Type', 'application/json');
        // return "stub";

        return this._http.post(
            this.mySrever + 'webapi/get_test_json',
            {
                headers: headers
            }
        ).map(res => res);
    }

    getTasksHiber() {
        var headers = new Headers();
        // headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Content-Type', 'application/json');
        // return "stub";

        return this._http.post(
            this.mySrever + 'webapi/get_test_json_hiber',
            {
                headers: headers
            }
        ).map(res => res);
    }
}