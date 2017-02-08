import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthenticationService } from './index';
import { Feed, UserId } from '../_models/index';

@Injectable()
export class FeedService {
    constructor(
        private http: Http,        
        private authenticationService: AuthenticationService) {
    }

    getFeeds(): Observable<Feed[]> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });

        this.getUID().subscribe(val => console.log(val));
        return this.http.get('/rss/1/feed', options).map((response: Response) => response.json());
    }

      getUID(): Observable<UserId> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });

        return this.http.get('/acc/user/' + this.authenticationService.clientId + '/id', options).map((response: Response) => response.json());
    }
}