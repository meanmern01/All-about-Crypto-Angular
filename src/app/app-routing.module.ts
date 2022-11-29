import { CryptoComponent } from './crypto/crypto.component';
import { NewsComponent } from './news/news.component';
import { AllcurruncyComponent } from './allcurruncy/allcurruncy.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cryptoCurrencies',
    component: AllcurruncyComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'crypto/:id',
    component: CryptoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
