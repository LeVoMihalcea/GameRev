import {Injectable} from '@angular/core';

import {HttpClient, HttpParams} from '@angular/common/http';

import {Game} from '../model/game.model';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Developer} from "../model/developer.model";
import {Rating} from "../model/rating.model";

@Injectable()
export class RatingService {
  private API_URL = 'http://localhost:8080/api/v1/review';

  constructor(private httpClient: HttpClient) {
  }

  sendRating(slug: string, number: number) {
    console.log("sending rating", slug, number);
    this.httpClient.post(this.API_URL,
      {gameSlug: slug, rating: number}).subscribe();
  }

  getRating(slug: string): Observable<Rating>{
    console.log("getting rating", slug);
    return this.httpClient
      .get<Rating>(this.API_URL, {
        params: {slug: slug}
      });
  }

}
