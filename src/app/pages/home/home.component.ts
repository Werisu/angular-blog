import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public noticias = this.newsService.getAll();

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {

  }

}
