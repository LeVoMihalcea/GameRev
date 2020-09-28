export class Developer{
  private _name: string;
  private _slug: string;
  private _games_count: number;
  private _image_background: string;


  constructor(name: string, slug: string, games_count: number, image_background: string) {
    this._name = name;
    this._slug = slug;
    this._games_count = games_count;
    this._image_background = image_background;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get slug(): string {
    return this._slug;
  }

  set slug(value: string) {
    this._slug = value;
  }

  get games_count(): number {
    return this._games_count;
  }

  set games_count(value: number) {
    this._games_count = value;
  }

  get image_background(): string {
    return this._image_background;
  }

  set image_background(value: string) {
    this._image_background = value;
  }
}
