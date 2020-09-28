import {Developer} from "./developer.model";

export class Game {

  private _slug: string;
  private _name: string;
  private _picture_url: string;
  private _description: string;
  private _release_date: string;
  private _rating: number;
  private _developer: Developer
  private _recomended_count: number;

  constructor(slug: string, name?: string, picture_url?: string) {
    this._slug = slug;
    this._name = name;
    this._picture_url = picture_url;
  }

  get slug(): string {
    return this._slug;
  }

  set slug(value: string) {
    this._slug = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get picture_url(): string {
    return this._picture_url;
  }

  set picture_url(value: string) {
    this._picture_url = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get release_date(): string {
    return this._release_date;
  }

  set release_date(value: string) {
    this._release_date = value;
  }

  get rating(): number {
    return this._rating;
  }

  set rating(value: number) {
    this._rating = value;
  }

  get developer(): Developer {
    return this._developer;
  }

  set developer(value: Developer) {
    this._developer = value;
  }

  get recomended_count(): number {
    return this._recomended_count;
  }

  set recomended_count(value: number) {
    this._recomended_count = value;
  }

}
