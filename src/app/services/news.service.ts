import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, map, pluck, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient: HttpClient) { }

  public getAll() {}

}
