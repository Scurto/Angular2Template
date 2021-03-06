
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./shared/DataService";
import {TodoFormComponent} from "./host/form/form.component"
import {TodoListComponent} from "./host/list/list.component";
import {TodoItemComponent} from "./host/item/item.component";
import {HostComponent} from "./host/host.component";
import {TodoService} from "./shared/Service";
import {HttpJsonComponent} from "./httpJsonTest/httpJson.component";
import {HttpJsonService} from "./shared/HttpJsonService";
import {HeaderComponent} from "./header/header.component";
import {routing} from "./app.routing";
import {FormBasicComponent} from "./FormsBasicExample/formBasic.component";
import {FormGroupComponent} from "./FormsGroupAndValidators/formGroup.component";
import {JaxRsListComponent} from "./jaxRsList/jaxrslist.component";
import {JaxRsService} from "./shared/JaxRsService";
import { CollapseModule, AlertModule, ModalModule } from 'ngx-bootstrap';
import {TogglePanelComponent} from "./shared/common/togglePanel/togglePanel.component";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        ReactiveFormsModule,
        CollapseModule.forRoot(),
        AlertModule.forRoot(),
        ModalModule.forRoot(),
        InMemoryWebApiModule.forRoot(InMemoryDataService, {passThruUnknownUrl: true})
    ],
    declarations: [
        AppComponent,
        TodoFormComponent,
        TodoListComponent,
        TodoItemComponent,
        HostComponent,
        HttpJsonComponent,
        HeaderComponent,
        FormBasicComponent,
        FormGroupComponent,
        TogglePanelComponent,
        JaxRsListComponent

    ],
    providers: [
        TodoService,
        HttpJsonService,
        JaxRsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}