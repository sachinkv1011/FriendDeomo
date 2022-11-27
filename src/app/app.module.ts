import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { SearchFriendComponent } from './search-friend/search-friend.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';

const route:Routes=[
  {
    path:"",
    component:AddFriendComponent
  },
  {
    path:"view",
    component:ViewAllComponent
  },
  {
    path:"search",
    component:SearchFriendComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AddFriendComponent,
    SearchFriendComponent,
    ViewAllComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
