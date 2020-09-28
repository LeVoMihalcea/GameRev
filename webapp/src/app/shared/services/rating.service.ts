import {Injectable} from '@angular/core';

import {HttpClient, HttpParams} from '@angular/common/http';

import {Game} from '../model/game.model';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Developer} from "../model/developer.model";

@Injectable()
export class RatingService {
  private API_URL = 'http://localhost:8080/api/v1/review';

  constructor(private httpClient: HttpClient) {
  }

  getGames(): Observable<Game[]> {
    return this.httpClient
      .get<Array<Game>>(this.API_URL);
  }


  sendRating(slug: string, number: number) {
    console.log("sending review", slug, number)
    this.httpClient.post(this.API_URL,
      {gameSlug: slug, comment: 'Nothing yet', rating: number}).subscribe();
  }
}
