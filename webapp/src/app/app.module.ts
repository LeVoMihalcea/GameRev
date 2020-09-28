import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { SearchResultsViewComponent } from './search-results-view/search-results-view.component';
import {GameService} from './shared/services/game.service';
import {ImgFallbackModule} from "ngx-img-fallback";
import { GameViewComponent } from './game-view/game-view.component';
import {RatingService} from "./shared/services/rating.service";


@NgModule({
  declarations: [
    AppComponent,
    SearchResultsViewComponent,
    GameViewComponent,



  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ImgFallbackModule
  ],
  providers: [GameService, RatingService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
