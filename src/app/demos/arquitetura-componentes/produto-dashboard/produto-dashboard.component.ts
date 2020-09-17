import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { ProdutoDetalheComponent } from '../componentes/produto-card-detalhe.component';
import { ProdutoCountComponent } from '../componentes/produto-cout.component';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html',
  styles: []
})
export class ProdutoDashboardComponent implements OnInit, AfterViewInit {

  produtos: Produto[]
  @ViewChild(ProdutoCountComponent, {static: false}) contador: ProdutoCountComponent;
  @ViewChild('teste', { static: false }) mensagemTela: ElementRef;

  @ViewChildren(ProdutoDetalheComponent) botoes: QueryList<ProdutoDetalheComponent>; 

  constructor() { }

  ngAfterViewInit(): void {
    console.log('Objeto do contador:', this.contador.produtos);

    console.log(this.botoes);
    this.botoes.forEach(p => {
      console.log(p.produto);
    })

    let clickTexto: Observable<any> = fromEvent( this.mensagemTela.nativeElement, 'click');
    clickTexto.subscribe(() => {
      alert('clicou no texto!');
      return;
    });
  }

  ngOnInit() {
    this.produtos = [{
      id: 1,
      nome: 'mouse Microsoft',
      ativo: true,
      valor: 15.90,
      imagem: "mouse.jpg"
    },
    {
      id: 2,
      nome: 'Teclado Microsoft',
      ativo: true,
      valor: 30.00,
      imagem: "teclado.jpg"
    },
    {
      id: 3,
      nome: 'Monitor Samsung',
      ativo: true,
      valor: 250.00,
      imagem: "monitor.jpg"
    },
    {
      id: 4,
      nome: 'Laptop Asus',
      ativo: false,
      valor: 3000.00,
      imagem: "laptop.jpg"
    },
    {
      id: 5,
      nome: 'Headset Microsoft',
      ativo: true,
      valor: 10.50,
      imagem: "headset.jpg"
    },
    {
      id: 6,
      nome: 'Webcam Logitech',
      ativo: true,
      valor: 90.00,
      imagem: "webcam.jpg"
    },
    {
      id: 7,
      nome: 'Galaxy S10+',
      ativo: true,
      valor: 3000.00,
      imagem: "celular.jpg"
    },
    {
      id: 8,
      nome: 'Mousepad Microsoft',
      ativo: true,
      valor: 5.50,
      imagem: "mousepad.jpg"
    },
    {
      id: 9,
      nome: 'Go Pro 8',
      ativo: false,
      valor: 300.00,
      imagem: "gopro.jpg"
    }]
  }

  mudarStatus(event: Produto){
    event.ativo = !event.ativo;
  }
}