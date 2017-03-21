import {Component, OnInit} from "@angular/core";
import {Todo} from "../shared/Todo";
import {TodoService} from "../shared/Service";


@Component({
    moduleId: module.id,
    selector: 'host',
    templateUrl: 'host.component.html',
    styleUrls: ['host.component.css']
})

export class HostComponent implements OnInit {
    inputArraysInTodoListComponent: Todo[];

    constructor(private todoService: TodoService) {
        this.inputArraysInTodoListComponent = [];
    }

    ngOnInit() {
        this.todoService.getTodos()
            .subscribe(someName => this.inputArraysInTodoListComponent = someName);
    }

    create(title: string) {
       this.todoService.createTodo(title).subscribe(todo => this.inputArraysInTodoListComponent.push(todo));
    }

    toggle(todo: Todo) {
        this.todoService.toggleTodo(todo).subscribe(res => {
            todo.completed = !todo.completed;
        });
    }

    delete(todo: Todo) {
        this.todoService.deleteTodo(todo).subscribe(res => {
            let index = this.inputArraysInTodoListComponent.indexOf(todo);
            if (index > -1) {
                this.inputArraysInTodoListComponent.splice(index, 1);
            }
        });
    }
}
