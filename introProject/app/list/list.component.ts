import {Component, Input} from "@angular/core";
import {Todo} from "../shared/Todo";


@Component({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: 'list.component.html',
    styleUrls: ['list.component.css']
})

export class TodoListComponent {
    @Input() inputArraysInTodoListComponent: Todo[];

    toggle(todo: Todo) {
        todo.completed = !todo.completed;
    }

    delete(todo: Todo) {

        console.log("del");


        let index = this.inputArraysInTodoListComponent.indexOf(todo);

        if (index > -1) {
            this.inputArraysInTodoListComponent.splice(index, 1);
        }
    }
}