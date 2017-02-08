import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    public token: string;
    public clientId: string;

    constructor(private http: Http) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
        this.clientId = currentUser && currentUser.username;
    }

    login(username: string, password: string): Observable<boolean> {        
        let body = new URLSearchParams();
        body.set('grant_type', "client_credentials");
        body.set('scope', "read");
        body.set('client_id', username);
        body.set('client_secret', password);
       
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });         

        return this.http.post('/acc/oauth/token', body, { headers: headers })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().access_token;
                if (token) {
                    // set token property
                    this.token = token;
                    this.clientId = username;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}