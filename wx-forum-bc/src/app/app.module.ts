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
import {LoginComponent} from './component/login/login.component';
import {ErrPageComponent} from './component/err-page/err-page.component';
import {HomeBodyAddComponent} from './component/home/home-body-add/home-body-add.component';

import {MatPaginatorIntl} from '@angular/material';

function myPaginator() {
  const p = new MatPaginatorIntl();
  p.itemsPerPageLabel = '当前分页数';
  p.nextPageLabel = '下一页';
  p.previousPageLabel = '上一页';
  p.firstPageLabel = '第一页';
  p.lastPageLabel = '最后一页';
  p.getRangeLabel = (page, pageSize, length) => {
    if (length === 0 || pageSize === 0) {
      return `0 od ${length}`;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
      startIndex + pageSize;
    return `第 ${startIndex + 1} - ${endIndex} 条，一共：${length} 条`;
  };
  return p;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeAsideComponent,
    HomeBodyArticleComponent,
    HomeBodyAddComponent,
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
  providers: [{
    provide: MatPaginatorIntl, useValue: myPaginator()
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
