import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { HeaderComponent } from './components/header/header.component';
import { MeComponent } from './pages/me/me.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { LiuyanComponent } from './pages/liuyan/liuyan.component';
import { ArtsComponent } from './pages/arts/arts.component';
import { HomeComponent } from './pages/home/home.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import {MidRange, Timeago} from "./filter/filter";
import { BlogComponent } from './components/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MeComponent,
    BlogsComponent,
    LiuyanComponent,
    ArtsComponent,
    HomeComponent,
    PaginationComponent,
    MidRange,
    Timeago,
    BlogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
