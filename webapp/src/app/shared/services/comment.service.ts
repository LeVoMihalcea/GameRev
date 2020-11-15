import {Injectable} from '@angular/core';

import {HttpClient, HttpParams} from '@angular/common/http';

import {Game} from '../model/game.model';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Developer} from "../model/developer.model";
import {Comment} from "../model/comment.model";

@Injectable()
export class CommentService {
  private API_URL = 'http://localhost:8080/api/v1/comment';

  constructor(private httpClient: HttpClient) {
  }

  getComments(slug: string): Observable<Comment[]>{
    return this.httpClient.get<Array<Comment>>(this.API_URL, {
      params: {slug: slug}
    });
  }

  sendComment(slug: string, comment: string): Observable<Object> {
    console.log("sending comment", slug, comment)
    return this.httpClient.post(this.API_URL,
      {gameSlug: slug, comment: comment, date: this.getCurrentDate()});
  }

  getCurrentDate(): string{
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    console.log(yyyy);
    return yyyy + '-' + mm + '-' + dd;
  }
}
