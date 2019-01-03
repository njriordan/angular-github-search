import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { GitSearchService } from './git-search.service';
import { GitUserSearchService } from './git-user-search.service';
import { GitCodeSearchService } from './git-code-search.service';
import { GitSearchComponent } from './git-search/git-search.component';
import { UnifiedSearchService } from './unified-search.service';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RepositoryDisplayComponent } from './repository-display/repository-display.component';
import { CodeDisplayComponent } from './code-display/code-display.component';
import { FadeDirective } from './fade.directive';

@NgModule({
  declarations: [
    AppComponent,
    GitSearchComponent,
    HomePageComponent,
    NotFoundComponent,
    RepositoryDisplayComponent,
    CodeDisplayComponent,
    FadeDirective
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
