import { Inject, Injectable, Injector } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';

export function BarFactory(http: HttpClientModule, injector: Injector){
    return new BarServices(http, injector.get(BAR_UNIDADE_CONFIG));
}

@Injectable()
export class BarServices {
    constructor(
        private http: HttpClientModule,
        @Inject(BAR_UNIDADE_CONFIG) private config: BarUnidadeConfig
    ) { }

    public obterUnidade(): string {
        return 'Unidade ID: ' + this.config.unidadeId + ' Token: ' + this.config.unidadeToken;
    }

    obterBebibas(): string {
        return 'Bebidas';
    }

    obterPorcoes(): string {
        return 'Porções';
    } 

    obterRefeicoes() : string {
        return 'Refeições';
    }
}

export class BarServicesMock {
    constructor(private http: HttpClientModule) { }

    obterBebibas(): string {
        return 'Mock Bebidas';
    }

    obterPorcoes(): string {
        return 'Mock Porções';
    } 

    obterRefeicoes() : string {
        return 'Mock Refeições';
    }
}

export abstract class BebidaService {

    obterBebidas: () => string
} 