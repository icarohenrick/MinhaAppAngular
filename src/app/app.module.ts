import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app.routes';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { BarModule } from './demos/bar-di-zones/bar.module';
import { HttpClientModule } from '@angular/common/http';

import { NgBrazil } from 'ng-brazil' 

import { TextMaskModule } from 'angular2-text-mask';
import { CustomFormsModule } from 'ng2-validation'

import { AppComponent } from './app.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { FilmesComponent } from './demos/pipes/filmes/filmes.component';

import { AuthGuard } from './services/app.guard';
import { CadastroGuard } from './services/cadastro.guard';
import { BarServices, BarServicesMock } from './demos/bar-di-zones/bar.service';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { FileSizePipe } from './demos/pipes/filesize.pipe';
import { ImageFormaterPipe } from './demos/pipes/image.pipe';
import { TodoModule } from './demos/todo-list/todo.module';

registerLocaleData(localePt);

export const BAR_PROVIDERS: Provider[] = [
  BarServices, BarServicesMock
];

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    CadastroComponent,
    FilmesComponent,
    FileSizePipe,
    ImageFormaterPipe
  ],
  imports: [
    NavegacaoModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgBrazil, TextMaskModule,
    CustomFormsModule,
    AppRoutingModule,
    HttpClientModule,
    TodoModule,
    BarModule.forRoot({
      unidadeId: 1000,
      unidadeToken: 'egajhj4k5knrl3j43kj43k'
    })
  ],
  providers: [
    AuthGuard,
    CadastroGuard,
    BAR_PROVIDERS
    //{provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
