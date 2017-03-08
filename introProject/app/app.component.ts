import { Component } from "@angular/core";

class Todo {
    // title: string;
    // completed: boolean;

    constructor(public title: string,
                public completed: boolean = false) {

    }
}

const todos: Todo[] = [
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
export class AppComponent{
    title: string = "Hello Angular";
    componentTasks: Todo[] = todos;
    newTodoTitle: string = '';

    toggle(todo: Todo) {
        todo.completed = !todo.completed;
    }

    delete(todo: Todo) {
        let index = this.componentTasks.indexOf(todo);

        if (index > -1) {
            this.componentTasks.splice(index, 1);
        }
    }

    create() {
    // create(event: Event, title: string) {
    // create(event: Event, titleInput: HTMLInputElement) {

        let todo: Todo = new Todo(this.newTodoTitle);

        this.componentTasks.push(todo);
        this.newTodoTitle = '';

        // titleInput.value = "";
    }
}