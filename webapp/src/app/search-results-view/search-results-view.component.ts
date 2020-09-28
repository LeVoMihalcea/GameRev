import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Game} from '../shared/model/game.model';
import {GameService} from '../shared/services/game.service';
import {Observable} from 'rxjs';
import {Developer} from "../shared/model/developer.model";

@Component({
  selector: 'app-search-results-view',
  templateUrl: './search-results-view.component.html',
  styleUrls: ['./search-results-view.component.css']
})
export class SearchResultsViewComponent implements OnInit {
  key: string;
  games: Array<Game>;
  currentGame: Game;
  errorMessage: string;
  placeholder = 'https://www.metrorollerdoors.com.au/wp-content/uploads/2018/02/unavailable-image.jpg';


  constructor(private route: ActivatedRoute, private gameService: GameService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.games = new Array<Game>();
      this.key = routeParams.key;
      this.searchAllGames(this.key);
      console.log(this.games);
    });
  }

  redirectToGame(slug: string) {
    this.router.navigate(['games', slug]);
  }

  searchAllGames(key: string) {
    this.gameService.searchGames(key)
      .subscribe(
        response => {
          response['results'].forEach((game) => {
            this.games.push(new Game(game['slug']));
          })
          this.games.forEach((game) => {
            this.gameService.populateGame(game);
          })
        },
        error => this.errorMessage = <any>error
      );
  }
}
