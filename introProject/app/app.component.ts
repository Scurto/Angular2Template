import { Component } from "@angular/core";

interface ITodo {
    title: string;
    completed: boolean;
}

const todos: ITodo[] = [
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
    componentTasks: ITodo[] = todos;

    toggle(todo: ITodo) {
        todo.completed = !todo.completed;
    }

    delete(todo: ITodo) {
        let index = this.componentTasks.indexOf(todo);

        if (index > -1) {
            this.componentTasks.splice(index, 1);
        }
    }
}