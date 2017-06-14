import {Component, OnInit} from "@angular/core";
import {HttpJsonService} from "../shared/HttpJsonService";

@Component({
    moduleId: module.id,
    selector: 'form-basic',
    templateUrl: 'formBasic.component.html',
    styleUrls: ['formBasic.component.css']
})
export class FormBasicComponent implements OnInit {

    constructor(private service: HttpJsonService) {}

    getData: string;
    inputData: any;

    onSubmit(values: any) {
        console.log(values);
        console.log('inputData', this.inputData);

        // this.service.register(values).
        // subscribe(
        //     data => {
        //         this.inputData = JSON.stringify(data);
        //         console.log("I CANT SEE DATA HERE: ", data);
        //     },
        //     // error => alert(error),
        //     (err) => console.log("request completed", err)
        // );

        this.service.getJsonFromJAXRS(values).
        subscribe(
            data => {
                this.inputData = JSON.stringify(data);
                console.log("I CANT SEE DATA HERE: ", data);
            },
            // error => alert(error),
            (err) => console.log("request failed", err)
        );
    }


    ngOnInit(): any {
        this.inputData = {myEmail: 'test@asd', myPassword: ''}
    }
}
