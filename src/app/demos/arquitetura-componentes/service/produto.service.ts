import { Injectable } from "@angular/core";
import { Produto } from '../models/produto';

@Injectable()
export class ProdutoService {

    produtos: Produto[];

    constructor() {

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

    obterTodos(estado: string) : Produto[] {
        if(estado == 'ativos'){
          return this.produtos.filter(produto => produto.ativo)
        }
        
        return this.produtos;
    }

    obterPorId(id:number): Produto {
        return this.produtos.find(produto => produto.id == id);
    }
}