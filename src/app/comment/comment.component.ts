import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TestsAndBugsData } from '../TestsAndBugsData';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comment: string;
  name: string;
  comments: Comment[];
  @Input() trip: TestsAndBugsData;
  userService: any;

  isLoaded = false;
  canComment = false;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  addComment() {
    if (!this.comment) { return; }
    this.auth.getUsers().subscribe(users => {
      users.forEach(user => {
        if (user.email === this.auth.getUser().email) {
          this.auth.setUser(user);
          const comment = { mail: user.email, trip_id: this.trip.id, name: this.name, text: this.comment} as unknown as Comment;
        }
      });
      this.comment = '';
      this.name = '';
    });
  }
}
