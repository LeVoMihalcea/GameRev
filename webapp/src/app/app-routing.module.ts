import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchResultsViewComponent} from './search-results-view/search-results-view.component';
import {GameViewComponent} from "./game-view/game-view.component";


const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'search/:key', component: SearchResultsViewComponent},
  {path: 'games/:slug', component: GameViewComponent},
  {path: '', redirectTo: 'search/', pathMatch: 'full'}
  // {path: '**', component: SearchResultsViewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
