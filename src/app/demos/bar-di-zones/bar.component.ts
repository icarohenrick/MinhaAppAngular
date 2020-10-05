import { HttpClientModule } from '@angular/common/http';
import { Component, Inject, Injector, NgZone, OnInit } from '@angular/core';
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';
import { BarFactory, BarServices, BarServicesMock, BebidaService } from './bar.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  providers: [
    { provide: BarServices, useClass: BarServicesMock },
    { provide: BarServices, useFactory: BarFactory, deps:[ HttpClientModule, Injector ] },
    { provide: BebidaService, useExisting: BarServices }
  ]
})
export class BarComponent implements OnInit {

  ConfigManual: BarUnidadeConfig;
  Config: BarUnidadeConfig;
  barBebida1: string;
  dadosUnidade: string;
  barBebida2: string;

  constructor(
    private barService: BarServices,
    @Inject('ConfigManualUnidade') private ApiConfigManual: BarUnidadeConfig,
    @Inject(BAR_UNIDADE_CONFIG) private ApiConfig: BarUnidadeConfig,
    //private bebidaService: BebidaService,
    private ngZone: NgZone
    ) { }

  ngOnInit(): void { 
    this.barBebida1 = this.barService.obterBebibas();
    this.ConfigManual = this.ApiConfigManual;
    this.Config = this.ApiConfig;

    //this.barBebida2 = this.bebidaService.obterBebidas();

    this.dadosUnidade = this.barService.obterUnidade();
  }

  public progress: number = 0;
  public label: string;

  processWithingAngularZone() {
    this.label = 'dentro';
    this.progress = 0;
    this._increaseProgress( () => console.log('Finalizado por dentro do Angular!'));
  }

  processOutSideOfAngularZone() {
    this.label = 'fora';
    this.progress = 0;
    this.ngZone.runOutsideAngular(() => {
      this._increaseProgress(() => {
        this.ngZone.run(() => { console.log('Finalizado fora!'); });
      });
    });
  }

  _increaseProgress(doneCallBack: () => void) {
    this.progress += 1;
    console.log(`Progresso atual: ${this.progress}%`);
  
    if(this.progress < 100) {
      window.setTimeout(() => this._increaseProgress(doneCallBack), 10);
    } else {
      doneCallBack();
    }
  }
}