import {Injectable} from "@angular/core";
import {CONTACTS} from "./data/mock-contact";
/**
 * Created by scurto on 17.04.2017.
 */

@Injectable()
export class ContactService {
    getContacts() {
       return Promise.resolve(CONTACTS);
    }
}