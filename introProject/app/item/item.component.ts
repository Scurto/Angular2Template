/**
 * Created by scurto on 14.03.2017.
 */

import {Component} from "@angular/core";
import {Todo} from "../shared/Todo";

@Component({
    moduleId: module.id,
    selector: 'todo-item',
    templateUrl: 'item.component.html',
    styleUrls: ['item.component.css']
})

export class TodoItemComponent {
    todo: Todo = new Todo('asdf')
}