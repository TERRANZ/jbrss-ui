import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeedPosts } from '../_services/index';
import { FeedPost } from '../_models/index';

@Component({
  selector: 'app-addpage',
  templateUrl: './addpage.component.html',
  styleUrls: ['./addpage.component.css']
})
export class AddPageComponent implements OnInit {

  constructor(private route: ActivatedRoute) {

  }
  private sub: any;
  posts: FeedPost[];
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
    });
  }

}
