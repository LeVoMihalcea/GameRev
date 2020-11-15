import {Developer} from "./developer.model";

export class Comment {

  private _slug: string;
  private _comment: string;
  private _date: Date;

  constructor(slug: string, text: string, date: Date) {
    this._slug = slug;
    this._comment = text;
    this._date = date;
  }

  get slug(): string {
    return this._slug;
  }

  set slug(value: string) {
    this._slug = value;
  }

  get comment(): string {
    return this._comment;
  }

  set comment(value: string) {
    this._comment = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }
}
