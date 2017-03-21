import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Todo} from "../../shared/Todo";



@Component({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: 'list.component.html',
    styleUrls: ['list.component.css']
})

export class TodoListComponent  {
    @Input() inputArraysInTodoListComponent: Todo[];
    @Output() delete: EventEmitter<Todo> = new EventEmitter();
    @Output() toggle: EventEmitter<Todo> = new EventEmitter();



    onToggle(todo: Todo) {
        this.toggle.emit(todo);
    }

    onDelete(todo: Todo) {
        this.delete.emit(todo);
    }
}