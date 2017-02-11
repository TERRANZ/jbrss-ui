import { Component, OnInit } from '@angular/core';

import { Feed } from '../_models/index';
import { FeedService, UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    feeds: Feed[] = [];

    constructor(private FeedService: FeedService, private UserService: UserService) { }
    ngOnInit() {
        this.FeedService.getFeeds()
            .subscribe(feedsList => {
                this.feeds = feedsList.data;
            });
        this.UserService.getId().subscribe(user => localStorage.setItem("uid", user.id.toString()));
    }

}