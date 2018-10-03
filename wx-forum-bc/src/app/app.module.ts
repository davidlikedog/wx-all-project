import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {EbizMaterialModule} from './ebiz-material/ebiz-material.module';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {HomeComponent} from './component/home/home.component';
import {HomeAsideComponent} from './component/home/home-aside/home-aside.component';
import {HomeBodyArticleComponent} from './component/home/home-body-article/home-body-article.component';
import {HomeBreadComponent} from './component/home/home-bread/home-bread.component';
import { LoginComponent } from './component/login/login.component';
import { ErrPageComponent } from './component/err-page/err-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeAsideComponent,
    HomeBodyArticleComponent,
    HomeBreadComponent,
    LoginComponent,
    ErrPageComponent,
  ],
  imports: [
    BrowserModule,
    EbizMaterialModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
