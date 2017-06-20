import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {JaxRsTask} from "./JaxRsTask";
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

    removeTask(task: JaxRsTask) {
        var headers = new Headers();
        // headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Content-Type', 'application/json');
        var json = JSON.stringify(task);
        return this._http.post(
            this.mySrever + 'webapi/remove_task_hiber',
            json,
            {
                headers: headers
            }
        ).map(res => res);
    }

    updateTask(task: JaxRsTask) {
        var headers = new Headers();
        // headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Content-Type', 'application/json');
        var json = JSON.stringify(task);
        console.log("JSON", json);
        return this._http.post(
            this.mySrever + 'webapi/update_task_hiber',
            json,
            {
                headers: headers
            }
        ).map(res => res);
    }
}