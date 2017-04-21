import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthenticationService } from '../_services/index';
import { FeedPostsList } from '../_models/index';

@Injectable()
export class FeedPosts {
    constructor(
        private http: Http,
        private authenticationService: AuthenticationService) {
    }

    private uid: string;

    getPosts(id: number): Observable<FeedPostsList> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });        
        // get users from api
        return this.http.get('/rss/' + localStorage.getItem("uid") + '/feed/' + id + '/list', options)
            .map((response: Response) => response.json());
    }
}