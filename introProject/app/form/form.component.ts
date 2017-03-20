import {Component, Output, EventEmitter} from "@angular/core";
import {TodoService} from "../shared/Service";

@Component({
    moduleId: module.id,
    selector: 'todo-form',
    templateUrl: 'form.component.html',
    styleUrls: ['form.component.css']
})

export class TodoFormComponent {
    title: string = '';

    constructor(private todoService: TodoService){}

    create() {
        // create(event: Event, title: string) {
        // create(event: Event, titleInput: HTMLInputElement) {

        // let todo: Todo = new Todo(this.newTodoTitle);
        //
        // this.componentTasks.push(todo);
        // this.newTodoTitle = '';

        // titleInput.value = "";
    }

    onSubmit() {
        this.todoService.createTodo(this.title);
    }
}
