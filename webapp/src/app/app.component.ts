import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GameRev';
  searchValue: string;

  constructor(private router: Router) {
  }

  onSearchGame(searchValue: string) {
    console.log("searching for " + searchValue);
    this.router.navigate(['search', searchValue]);
  }
}
