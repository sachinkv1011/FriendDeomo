import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { SearchFriendComponent } from './search-friend/search-friend.component';
import { ViewAllComponent } from './view-all/view-all.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFriendComponent,
    SearchFriendComponent,
    ViewAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
