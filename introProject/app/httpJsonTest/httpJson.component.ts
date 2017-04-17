import {Component} from "@angular/core";
import {HttpJsonService} from "../shared/HttpJsonService";
import {Headers} from "@angular/http";
/**
 * Created by scurto on 12.04.2017.
 */

@Component({
    moduleId: module.id,
    selector: 'http-test',
    templateUrl: 'httpJson.component.html',
    styleUrls: ['httpJson.component.css'],
    providers: [HttpJsonService]
})
export class HttpJsonComponent {
    getData: string;
    postData: string;

    constructor(private service: HttpJsonService) {}

    doGetEvent() {
        this.service.getJsonFromServer().
        subscribe(
            data => {
                this.getData = JSON.stringify(data);
                console.log("I CANT SEE DATA HERE: ", this.getData);
            },
            // error => alert(error),
            () => console.log("request completed", this.getData)
        );
    }

    doPostEvent() {
        this.service.postJSON().
        subscribe(
            data => {
                this.postData = JSON.stringify(data);
                console.log("I CANT SEE DATA HERE: ", this.getData);
            },
            // error => alert(error),
            () => console.log("request completed", this.getData)
        );
    }

}