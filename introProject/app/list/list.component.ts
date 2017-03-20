import {Component, OnInit} from "@angular/core";
import {Todo} from "../shared/Todo";
import {TodoService} from "../shared/Service";


@Component({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: 'list.component.html',
    styleUrls: ['list.component.css']
})

export class TodoListComponent implements OnInit {
    inputArraysInTodoListComponent: Todo[];

    constructor(private todoService: TodoService) {
        this.inputArraysInTodoListComponent = [];
    }

    ngOnInit() {
        this.todoService.getTodos()
            .then(someName => this.inputArraysInTodoListComponent = someName);
    }

    toggle(todo: Todo) {
        this.todoService.toggleTodo(todo);
    }

    delete(todo: Todo) {
        this.todoService.deleteTodo(todo);
    }
}