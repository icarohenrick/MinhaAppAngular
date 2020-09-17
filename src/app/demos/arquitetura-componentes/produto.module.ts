import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';
import { ProdutoDetalheComponent } from './componentes/produto-card-detalhe.component';

import { ProdutoRoutingModule } from './produto.route';
import { ProdutoCountComponent } from './componentes/produto-cout.component';

@NgModule({
    declarations: [
        ProdutoDashboardComponent,
        ProdutoDetalheComponent,
        ProdutoCountComponent
    ],
    imports: [
        CommonModule,
        ProdutoRoutingModule
    ],
    exports: [
        ProdutoDashboardComponent
    ]
})

export class ProdutoModule {}