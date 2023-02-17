import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, map, pluck, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<NewsAPI> {
    return this.httpClient.get<NewsAPI>("http://servicodados.ibge.gov.br/api/v3/noticias/?qtd=3")
    .pipe(
      tap((valor) => console.log(valor)),
      pluck('items'),
      tap((valor) => console.log(valor))
    );
  }

}

export interface Acoes extends Array<Item>{}

export interface Root {
  count: number
  page: number
  totalPages: number
  nextPage: number
  previousPage: number
  showingFrom: number
  showingTo: number
  items: Item[]
}

export interface Item {
  id: number
  tipo: string
  titulo: string
  introducao: string
  data_publicacao: string
  produto_id: number
  produtos: string
  editorias: string
  imagens: string
  produtos_relacionados: string
  destaque: boolean
  link: string
}

export interface NewsAPI{
  items: Acoes;
}
