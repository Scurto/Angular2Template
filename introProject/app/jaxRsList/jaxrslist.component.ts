import {
    Component, OnInit, ViewChild
} from "@angular/core";
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
    addTaskFlag: boolean;
    @ViewChild('collapseExample') collapseExample: any;

    public myStyle:string = "card card-block card-header";
    public addTasksPanelClass:string = 'addTasksPanel';

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

    ngAfterViewInit() {
        // After the view is initialized, this.userProfile will be available
       console.log('ngAfterViewInit');
    }

    ngAfterContentInit() {
        // Component content has been initialized
        console.log('ngAfterContentInit');
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

    public isCollapsed:boolean = true;
    public baseClassName:string;

    public collapsed(event:any):void {
        console.log(event);

        event._el.nativeElement.className = 'collapse reduceMyHeight';
    }

    public expanded(event:any):void {
        console.log(event);
        event._el.nativeElement.className = 'zoomMyHeight';
    }

    public classTest() {
        console.log('this.baseClassName', this.myStyle);
    }
    // ngOnInit() {
    //     // Properties are resolved and things like
    //     // this.mapWindow and this.mapControls
    //     // had a chance to resolve from the
    //     // two child components <map-window> and <map-controls>
    // }
    // ngOnDestroy() {
    //     // Speak now or forever hold your peace
    // }
    // ngDoCheck() {
    //     // Custom change detection
    // }
    // ngOnChanges(changes) {
    //     // Called right after our bindings have been checked but only
    //     // if one of our bindings has changed.
    //     //
    //     // changes is an object of the format:
    //     // {
    //     //   'prop': PropertyUpdate
    //     // }
    // }
    // ngAfterContentInit() {
    //     // Component content has been initialized
    // }
    // ngAfterContentChecked() {
    //     // Component content has been Checked
    // }
    // ngAfterViewInit() {
    //     // Component views are initialized
    // }
    // ngAfterViewChecked() {
    //     // Component views have been checked
    // }
}
