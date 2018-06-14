import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MeComponent} from './pages/me/me.component'
import {BlogsComponent} from "./pages/blogs/blogs.component";
import {LiuyanComponent} from "./pages/liuyan/liuyan.component";
import {ArtsComponent} from "./pages/arts/arts.component";
import {HomeComponent} from "./pages/home/home.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'me', component: MeComponent},
  {path: 'blogs', component: BlogsComponent},
  {path: 'liuyan', component: LiuyanComponent},
  {path: 'arts', component: ArtsComponent},
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
