import {Component, OnInit, ElementRef, ViewChild} from "@angular/core";
import {Todo} from "../shared/Todo";
import {TodoService} from "../shared/Service";


@Component({
    moduleId: module.id,
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})

export class HeaderComponent {
    public isCollapsed:boolean = false;
    @ViewChild('navBar') navBar: any;

    constructor(headElement: ElementRef) {

        console.log("headElement", headElement);
        window.addEventListener('scroll', (e) => {

            if (window.pageYOffset > 100) {
                this.navBar.nativeElement.classList.add('stick');
            } else {
                this.navBar.nativeElement.classList.remove('stick');
            }
        });
    }

    onSignUp(loginModal: any) {
        console.log('onSignUp', loginModal);
        loginModal.show();
    }
}
