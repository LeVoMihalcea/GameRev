export class Rating{
  private _grade: number;
  private _slug: string;
  private _numberOfVotes: number;

  constructor(grade: number, slug: string, numberOfVotes: number) {
    this._grade = grade;
    this._slug = slug;
    this._numberOfVotes = numberOfVotes;
  }

  get grade(): number {
    return this._grade;
  }

  set grade(value: number) {
    this._grade = value;
  }

  get slug(): string {
    return this._slug;
  }

  set slug(value: string) {
    this._slug = value;
  }

  get numberOfVotes(): number {
    return this._numberOfVotes;
  }

  set numberOfVotes(value: number) {
    this._numberOfVotes = value;
  }
}
