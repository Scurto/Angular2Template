import { Component } from "@angular/core";
import {Todo} from "../shared/Todo";
import {todos} from "../shared/Data";

@Component({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: 'list.component.html',
    styleUrls: ['list.component.css']
})

export class TodoListComponent {
    componentTasks: Todo[] = todos;

    toggle(todo: Todo) {
        todo.completed = !todo.completed;
    }

    delete(todo: Todo) {
        let index = this.componentTasks.indexOf(todo);

        if (index > -1) {
            this.componentTasks.splice(index, 1);
        }
    }
}