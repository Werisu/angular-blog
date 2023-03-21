import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public photoCover: string = "https://disneyplusbrasil.com.br/wp-content/uploads/2021/03/Tony-Stark-Cancelado.jpg";
  public contentTitle: string = "Noticia Exemplo";
  public conentDescription: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, id recusandae, iure veniam nisi vitae adipisci eius distinctio repellendus mollitia expedita tempore quasi blanditiis doloribus molestias impedit ut cupiditate similique?";
  private id: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => {
      this.id = parseInt(`${value.get("id")}`);
    });

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: number){
    const result = dataFake.filter(article => article.id == id)[0];

    this.contentTitle = result.title;
    this.conentDescription = result.description;
    this.photoCover =result.photoCover;
  }
}
