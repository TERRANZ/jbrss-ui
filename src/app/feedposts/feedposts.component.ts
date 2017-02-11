import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeedPosts } from '../_services/index';
import { FeedPost } from '../_models/index';

@Component({
  selector: 'app-feedposts',
  templateUrl: './feedposts.component.html',
  styleUrls: ['./feedposts.component.css']
})
export class FeedpostsComponent implements OnInit {

  constructor(private feedPosts: FeedPosts, private route: ActivatedRoute) {

  }
  private sub: any;
  posts: FeedPost[];
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

      let id = params['id'];

      // Retrieve Pet with Id route param
      this.feedPosts.getPosts(id).subscribe(posts => this.posts = posts.posts);
    });
  }

}
