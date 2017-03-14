
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component"
import {FormsModule} from "@angular/forms"
import {TodoFormComponent} from "./form/form.component"
import {TodoListComponent} from "./list/list.component";
import {TodoItemComponent} from "./item/item.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
    ],
    declarations: [
        AppComponent,
        TodoFormComponent,
        TodoListComponent,
        TodoItemComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}