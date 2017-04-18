import {Component, OnInit} from "@angular/core";
import {HttpJsonService} from "../shared/HttpJsonService";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {ValueVisitor} from "@angular/compiler/src/util";
@Component({
    moduleId: module.id,
    selector: 'form-group',
    templateUrl: 'formGroup.component.html',
    styleUrls: ['formGroup.component.css']
})
export class FormGroupComponent implements OnInit {

    constructor(private service: HttpJsonService) {}

    myGroup = new FormGroup({
        name: new FormControl('test name', Validators.required),
        email: new FormControl(),
        address: new FormControl(),
        city: new FormControl(null, [Validators.required, Validators.minLength(4)])

    });

    onSubmit() {

    }


    ngOnInit(): any {
        console.log("ON INIT");
    }
}
