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
    addTaskFlag;
    // checkBoxFlag: boolean = true;


    ngOnInit(): void {
        this.tasksList = [];
        this.addTaskFlag = true;
        console.log('ngOnInit');

        this._service.getTasksHiber().subscribe(
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

    onAddTask() {
        this.addTaskFlag = !this.addTaskFlag;
    }

    onToggle(task: JaxRsTask) {

        var task_copy = JSON.parse(JSON.stringify(task));


        if (task.completed != 0) {
            task_copy.completed = 0;
        } else {
            task_copy.completed = 1;
        }

        this._service.updateTask(task_copy).subscribe(
            resp => {
                var status = resp.status;
                console.log("RESPONSE STATUS: ", status);
                if (task.completed != 0) {
                    task.completed = 0;
                } else {
                    task.completed = 1;
                }

            },
            // error => alert(error),
            (err) => console.log("request failed", err)
        )
    }

    onDelete(task: JaxRsTask) {


        this._service.removeTask(task).subscribe(
            resp => {
                // this.tasksList = resp.json();
                var status = resp.status;
                console.log("RESPONSE STATUS: ", status);
                //TODO REMOVING ELEMENT (task) FROM ARRAY (tasksList)  - not supported in IE
                this.tasksList = this.tasksList.filter(item => item !== task);
            },
            // error => alert(error),
            (err) => console.log("request failed", err)
        )
    }

}
