import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { GitSearchService } from './services/git-search.service';
import { GitUserSearchService } from './services/git-user-search.service';
import { GitCodeSearchService } from './services/git-code-search.service';
import { GitSearchComponent } from './components/git-search/git-search.component';
import { UnifiedSearchService } from './services/unified-search.service';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RepositoryDisplayComponent } from './components/repository-display/repository-display.component';
import { CodeDisplayComponent } from './components/code-display/code-display.component';
import { FadeDirective } from './directives/fade.directive';
import { FavoriteTextPipe } from './pipes/favorite-text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GitSearchComponent,
    HomePageComponent,
    NotFoundComponent,
    RepositoryDisplayComponent,
    CodeDisplayComponent,
    FadeDirective,
    FavoriteTextPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    GitSearchService,
    GitUserSearchService,
    GitCodeSearchService,
    UnifiedSearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
