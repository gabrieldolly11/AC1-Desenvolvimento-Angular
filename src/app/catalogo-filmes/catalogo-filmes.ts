import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-catalogo-filmes',
  standalone: true,
  imports: [FormsModule], // Necessário para o [(ngModel)].
  templateUrl: './catalogo-filmes.html',
  styleUrl: './catalogo-filmes.css'
})
export class CatalogoFilmes {
  filmes: string[] = [
    'Interestelar',
    'A Origem',
    'O Rei Leão',
    'De Volta para o Futuro',
    'Homem-Aranha: Através do Aranhaverso'
  ];

  filmeSelecionado: string | null = null;
  novoFilme: string = '';
  favorito: boolean = false;
  visualizacoes: number = 0;
  mensagem: string = '';

  selecionarFilme(filme: string): void {
    // Ao trocar o filme, os estados são reiniciados, conforme permitido no PDF.
    if (this.filmeSelecionado !== filme) {
      this.filmeSelecionado = filme;
      this.favorito = false;
      this.visualizacoes = 0;
    }
  }

  adicionarFilme(): void {
    const nome = this.novoFilme.trim();
    if (!nome) return;

    // Evita duplicação de títulos, inclusive com diferenças de maiúsculas.
    if (this.filmes.some(filme => filme.toLocaleLowerCase('pt-BR') === nome.toLocaleLowerCase('pt-BR'))) {
      this.mensagem = 'Este filme já está no catálogo.';
      return;
    }

    this.filmes.push(nome);
    this.novoFilme = '';
    this.mensagem = 'Filme adicionado ao catálogo!';
  }

  alternarFavorito(): void {
    if (this.filmeSelecionado !== null) this.favorito = !this.favorito;
  }

  aumentarVisualizacoes(): void {
    if (this.filmeSelecionado !== null) this.visualizacoes++;
  }
}
