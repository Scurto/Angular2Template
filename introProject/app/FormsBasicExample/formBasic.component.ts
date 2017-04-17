import {Component, OnInit} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'form-basic',
    templateUrl: 'formBasic.component.html',
    styleUrls: ['formBasic.component.css']
})
export class FormBasicComponent implements OnInit {

    inputData: any;

    onSubmit(values: any) {
        console.log(values);
        console.log('inputData', this.inputData);
    }


    ngOnInit(): any {
        this.inputData = {myEmail: 'test@asd', myPassword: ''}
    }
}
