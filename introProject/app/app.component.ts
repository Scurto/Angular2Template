import { Component } from "@angular/core";

const todos = [
    {
        title: "Learn javascript",
        completed: true
    },
    {
        title: "Learn angular2",
        completed: true
    },
    {
        title: "Write application",
        completed: false
    }
];

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: "app.component.html",
    styleUrls: ["app.component.css"]
})
export class AppComponent {
    title = "Hello Angular";
    componentTasks = todos;

    toggle(todo: any) {
        todo.completed = !todo.completed;
    }

    delete(todo: any) {
        let index = this.componentTasks.indexOf(todo);

        if (index > -1) {
            this.componentTasks.splice(index, 1);
        }
    }
}