import {Routes, RouterModule} from "@angular/router";
import {HttpJsonComponent} from "./httpJsonTest/httpJson.component";
import {HostComponent} from "./host/host.component";
import {FormBasicComponent} from "./FormsBasicExample/formBasic.component";


const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/host', pathMatch: 'full'},
    { path: 'host', component: HostComponent},
    { path: 'httpjson', component: HttpJsonComponent},
    { path: 'formbasic', component: FormBasicComponent}

];

export const routing = RouterModule.forRoot(APP_ROUTES);