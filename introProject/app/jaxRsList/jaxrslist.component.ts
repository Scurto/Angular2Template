import {Component, OnInit} from "@angular/core";
import {Todo} from "../shared/Todo";
import {JaxRsService} from "../shared/JaxRsService";
import {JaxRsTask} from "../shared/JaxRsTask";


@Component({
    moduleId: module.id,
    selector: 'jaxrslist',
    templateUrl: 'jaxrslist.component.html',
    styleUrls: ['jaxrslist.component.css']
})

export class JaxRsListComponent implements OnInit {
    tasksList: JaxRsTask[];

    ngOnInit(): void {
        this.tasksList = [];
        console.log('ngOnInit');
        this._service.getTasks().subscribe(
            resp => {
                this.tasksList = resp.json();

                console.log("I CANT SEE DATA HERE: ", this.tasksList);
            },
            // error => alert(error),
            (err) => console.log("request failed", err)
        );
    }

    constructor(private _service: JaxRsService) {

    }

}
