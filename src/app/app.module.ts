import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { GitSearchService } from './git-search.service';
import { GitUserSearchService } from './git-user-search.service';
import { GitSearchComponent } from './git-search/git-search.component';

@NgModule({
  declarations: [
    AppComponent,
    GitSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    GitSearchService,
    GitUserSearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
