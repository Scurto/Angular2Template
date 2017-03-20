import {Injectable} from '@angular/core'
import {Todo} from "./Todo";
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {toPromise} from "rxjs/operator/toPromise";


@Injectable()
export class TodoService {
    private apiUrl = 'api/jsonArray';
    showedArray: Todo[] = [];

    constructor(private http: Http) {

    }

    getTodos(): Promise<Todo[]> {
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(res => res.json().data)
            .then(someName => this.showedArray = someName)
            .catch(this.handleError);
    }

    createTodo(title: string) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers});

        let todo = new Todo(title);
        // this.showedArray.push(todo);

        this.http.post(this.apiUrl, todo, options)
            .toPromise()
            .then(res => res.json().data)
            .then(someName => this.showedArray.push(todo))
            .catch(this.handleError);
    }

    deleteTodo(todo: Todo) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers});
        let url = `${this.apiUrl}/${todo.id}`;

        this.http.delete(url, options)
            .toPromise()
            .then(res => {
                let index = this.showedArray.indexOf(todo);
                if (index > -1) {
                    this.showedArray.splice(index, 1);
                }
            })
            .catch(this.handleError);


    }

    toggleTodo(todo: Todo) {

        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers});
        let url = `${this.apiUrl}/${todo.id}`;

        this.http.delete(url, options)
            .toPromise()
            .then(res => {
                todo.completed = !todo.completed;
            })
            .catch(this.handleError);


    }

    private handleError(error: any) {
        console.error("Error -> ", error);
        return Promise.reject(error.message || error);
    }
}