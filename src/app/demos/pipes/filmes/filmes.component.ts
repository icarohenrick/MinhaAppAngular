import { Component, OnInit } from '@angular/core';
import { fileURLToPath } from 'url';
import { ImageFormaterPipe } from '../image.pipe';
import { Filme } from './filme';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  providers:[
    ImageFormaterPipe
  ]
})

export class FilmesComponent implements OnInit {

  constructor(private imageFormat: ImageFormaterPipe) { }

  filmes: Filme[];
  mapped: Filme[];

  ngOnInit() {

    this.filmes = [
      {
        nome: 'Um Sonho de Liberdade',
        dataLancamento: new Date('12/07/1994'),
        valor: 150.00,
        imagem: 'sonhoLiberdade.jpg',
        tamanho: '513326980'
      },
      {
        nome: 'o Poderoso Chefão',
        dataLancamento: new Date('01/12/1972'),
        valor: 200.00,
        imagem: '',
        tamanho: '1342177280'
      },
      {
        nome: 'Batman: O Cavaleiro das Trevas',
        dataLancamento: new Date('08/01/2008'),
        valor: 70.00,
        imagem: 'batman2008.jpg',
        tamanho: '719974720'
      },
      {
        nome: 'o Poderoso Chefão 2',
        dataLancamento: new Date('01/12/1974'),
        valor: 120.00,
        imagem: 'poderosoChefaoII.jpg',
        tamanho: '1254589899'
      },
      {
        nome: 'pulp fiction: Tempo de Violência',
        dataLancamento: new Date('01/08/1994'),
        valor: 190.00,
        imagem: 'pulpFiction.jpg',
        tamanho: '773039680'
      }
    ];

    this.mapped = this.filmes.map(filme => {
      return {
        nome: filme.nome,
        dataLancamento: filme.dataLancamento,
        valor: filme.valor,
        tamanho: filme.tamanho,
        imagem: this.imageFormat.transform(filme.imagem, 'default', true)
      }
    });
  }

}
