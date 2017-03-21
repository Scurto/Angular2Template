import {Component, Output, EventEmitter} from "@angular/core";


@Component({
    moduleId: module.id,
    selector: 'todo-form',
    templateUrl: 'form.component.html',
    styleUrls: ['form.component.css']
})

export class TodoFormComponent {
    title: string = '';

    @Output() create: EventEmitter<string> = new EventEmitter();

    onSubmit() {
        this.create.emit(this.title);
    }
}
