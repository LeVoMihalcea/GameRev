import {Injectable} from '@angular/core';

import {HttpClient, HttpParams} from '@angular/common/http';

import {Game} from '../model/game.model';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Developer} from "../model/developer.model";


@Injectable()
export class GameService {
  private API_URL = 'https://api.rawg.io/api/games';
  private USER_AGENT = "GameRev/0.1 Developing (Language=Angular)";

  constructor(private httpClient: HttpClient) {
  }

  getGames(): Observable<Game[]> {
    return this.httpClient
      .get<Array<Game>>(this.API_URL);
  }

  searchGames(key: string): Observable<Object> {
    return this.httpClient
      .get(this.API_URL, {
        params: {search: key, page_size: '36'}
      });
  }

  getGameDetailedInformation(slug: string): Observable<Object>{
    const request_url = this.API_URL + "/" + slug;
    return this.httpClient
      .get(request_url);
  }

  getGame(slug: string): Observable<Game> {
    return this.getGames()
      .pipe(
        map(games => games.find(game => game.slug === slug))
      );
  }

  update(game): Observable<Game> {
    const url = `${this.API_URL}/${game.id}`;
    return this.httpClient
      .put<Game>(url, game);
  }



  private mapJSONToGame(response: Object, game: Game) {
    game.name = response['name'];
    game.picture_url = response['background_image']
    game.description = response['description_raw'];
    game.release_date = response['released'];
    game.rating = response['rating'];
    game.developer = this.mapNewDeveloper(response['developers']);
    game.recomended_count = response['ratings'][0] ? response['ratings'][0].count : 0;
  }

  mapNewDeveloper(developers: any): Developer {
    return new Developer(developers[0].name, developers[0].slug,
      developers[0].games_count, developers[0].image_background);
  }

  public populateGame(game: Game) {
    this.getGameDetailedInformation(game.slug)
      .subscribe(reponse => {
        this.mapJSONToGame(reponse, game);
      });
  }

}
