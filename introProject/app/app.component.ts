import { Component } from "@angular/core";
import {Todo} from "./shared/Todo";
// import {arrayOfData} from "./shared/DataService";


@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: "app.component.html",
    styleUrls: ["app.component.css"]
})
export class AppComponent{
    title: string = "Hello Angular";
    // localArray: Todo[] = arrayOfData;

    // create(title: string) {
    //     const newTask = new Todo(title);
    //     this.localArray.push(newTask)
    // }




}