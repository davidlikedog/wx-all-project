import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './component/home/home.component';
import {HomeBodyArticleComponent} from './component/home/home-body-article/home-body-article.component';
import {LoginComponent} from './component/login/login.component';
import {ErrPageComponent} from './component/err-page/err-page.component';
import {HomeBodyAddComponent} from './component/home/home-body-add/home-body-add.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {
    path: 'home', component: HomeComponent, children: [
      {path: '', component: HomeBodyArticleComponent},
      {path: 'add', component: HomeBodyAddComponent},
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'err/:msg', component: ErrPageComponent},
  {path: '**', component: ErrPageComponent},  // **是通配符，当页面找不到就来这个页面
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
