import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Produto } from '../models/produto';
import { ProdutoService } from './produto.service';

@Injectable()
export class ProdutosResolve implements Resolve<Produto[]> {

    constructor(private produtoServive: ProdutoService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.produtoServive.obterTodos(route.params["estado"]);
    }
}