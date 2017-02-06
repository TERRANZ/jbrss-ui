import { Component, OnInit } from '@angular/core';

import { Feed } from '../_models/index';
import { FeedService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    feeds: Feed[] = [];

    constructor(private FeedService: FeedService) { }
    ngOnInit() {
        this.FeedService.getFeeds()
            .subscribe(feeds => {
                this.feeds = feeds;
            });
    }

}