/**
 * Created by scurto on 14.03.2017.
 */

import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Todo} from "../shared/Todo";

@Component({
    moduleId: module.id,
    selector: 'todo-item',
    templateUrl: 'item.component.html',
    styleUrls: ['item.component.css']
})

export class TodoItemComponent {
    @Input() inputTodoItemFromComponentTask: Todo;
    @Output() deleteFlagForOutputEventEmitter = new EventEmitter();

    toggle() {
        this.inputTodoItemFromComponentTask.completed = !this.inputTodoItemFromComponentTask.completed;
    }



    onDelete() {
        this.deleteFlagForOutputEventEmitter.emit(this.inputTodoItemFromComponentTask)
    }
}