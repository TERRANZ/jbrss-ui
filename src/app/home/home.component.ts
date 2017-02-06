import { Component, OnInit } from '@angular/core';
 
import { Feed } from '../_models/index';
import { FeedService } from '../_services/index';
 
@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})
 
export class HomeComponent implements OnInit {
    users: Feed[] = [];
 
    constructor(private userService: FeedService) { }
 
    ngOnInit() {
        // get users from secure api end point
        this.userService.getUsers()
            .subscribe(users => {
                this.users = users;
            });
    }
 
}