import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GameService} from "../shared/services/game.service";
import {Game} from "../shared/model/game.model";
import {RatingService} from "../shared/services/rating.service";
import {CommentService} from "../shared/services/comment.service";
import {Comment} from "../shared/model/comment.model";
import {Rating} from "../shared/model/rating.model";

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css']
})
export class GameViewComponent implements OnInit {
  private slug: string;
  private game: Game;
  commentValue: string;
  comments: Array<Comment>;
  rating: Rating;
  private error: string;
  private status: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gameService: GameService,
    private ratingService: RatingService,
    private commentService: CommentService) {
  }

  ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.game = new Game(this.slug);
    this.gameService.populateGame(this.game);
    this.getRating();
    this.getComments();
  }

  sendRating(slug: string, number: number) {
    this.ratingService.sendRating(slug, number);
  }

  sendComment(commentValue: string) {
    this.commentService.sendComment(this.slug, commentValue).subscribe(

    );
    this.commentValue = "";
  }

  private getComments() {
    this.commentService.getComments(this.slug).subscribe(
      comments => this.comments = comments
    );
  }

  private getRating() {
    this.ratingService.getRating(this.slug).subscribe(
      rating => {
        console.log(rating);
        this.rating = rating
      }
    );
  }
}
