import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GameService} from "../shared/services/game.service";
import {Game} from "../shared/model/game.model";
import {RatingService} from "../shared/services/rating.service";

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css']
})
export class GameViewComponent implements OnInit {
  private slug: string;
  private game: Game;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gameService: GameService,
    private ratingService: RatingService) {
  }

  ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.game = new Game(this.slug);
    this.gameService.populateGame(this.game);
  }

  sendRating(slug: string, number: number) {
    this.ratingService.sendRating(slug, number);
  }
}
