import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoAppComponent } from './componentes/produto.app.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';
import { ProdutosResolve } from './service/produto.resolve';

const produtoRouterConfig: Routes = [
    { path: '', component: ProdutoAppComponent,
        children:[
            { path: '', redirectTo: 'todos' },
            { 
                path: ':estado', 
                component: ProdutoDashboardComponent, 
                resolve: {
                    produtos: ProdutosResolve
                },
                data : {
                    teste: 'Informação'
                }
            },
            { path: 'editar/:id', component: EditarProdutoComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(produtoRouterConfig)
    ],
    exports: [
        RouterModule
    ]
})

export class ProdutoRoutingModule{}