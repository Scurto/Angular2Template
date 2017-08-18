import {OnInit, Component, ViewChild} from "@angular/core";
import {TEST_ANIMATION, MY_ROTATE} from "../../animations";
import {Validators, FormControl, FormGroup, NgForm} from "@angular/forms";
@Component({
    moduleId: module.id,
    selector: 'togglePanel',
    templateUrl: 'togglePanel.component.html',
    styleUrls: ['togglePanel.component.css'],
    animations: [TEST_ANIMATION, MY_ROTATE]
})

export class TogglePanelComponent implements OnInit {
    public visibility:string = 'hide';
    public rotate:string = 'add';
    public addTaskFlag: boolean;
    public alerts: any = [];

    @ViewChild('icon') myIcon: any;
    @ViewChild('addPanel') addPanel: any;
    @ViewChild('newTaskForm') newTaskForm: NgForm;

    public addTasksPanelClass:string = 'addTasksPanel';

    ngOnInit(): void {

    }

    onAddTask(event: any) {
        this.addTaskFlag = !this.addTaskFlag;
        // console.log("element", this.myIcon.nativeElement);
        // console.log("event", event);
        // console.log("addPanel", this.addPanel.nativeElement);
        // addTasksPanel



        this.rotate = this.rotate == 'add' ? 'close' : 'add';
        this.visibility = this.visibility == 'shown' ? 'hidden' : 'shown';

        this.newTaskForm.reset();

        this.alerts.push({
            type: 'success',
            msg: `TEST TEXT`,
            timeout: 2000
        });

    }

    newTaskFormGroup = new FormGroup({
        // name: new FormControl('test name', Validators.required),
        author: new FormControl(null, [Validators.required, Validators.minLength(4)]),
        message: new FormControl(null, [Validators.required, Validators.minLength(4)]),
        completed: new FormControl()

        // city: new FormControl(null, [Validators.required, Validators.minLength(4)])

    });

    onSubmit() {
        console.log("onSubmit", this.newTaskForm);
        this.newTaskForm.reset();
    }

    animationRotateDone($event: any) {
        console.log('animationRotateDone');

    }

    animationVisibilityDone($event: any) {
        console.log('animationVisibilityDone', this.myIcon);
        // if (this.myIcon.nativeElement != undefined) {
        //     this.myIcon.nativeElement.className = 'material-icons';
        // }
    }

    animationVisibilityStart($event: any) {
        console.log('animationVisibilityStart', this.myIcon);
        // if (this.myIcon.nativeElement != undefined) {
        //     this.myIcon.nativeElement.className = 'material-icons animated';
        // }
    }

    public classTest() {
        console.log('this.baseClassName');
    }

}
