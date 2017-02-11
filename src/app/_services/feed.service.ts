import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
 
import { AuthenticationService } from '../_services/index';
import { FeedsList } from '../_models/index';
 
@Injectable()
export class FeedService {
    constructor(
        private http: Http,
        private authenticationService: AuthenticationService) {
    }
 
    getFeeds(): Observable<FeedsList> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });
 
        // get users from api
        return this.http.get('/rss/1/feed', options)
            .map((response: Response) => response.json());
    }
}