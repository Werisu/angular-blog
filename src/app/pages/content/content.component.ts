import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  public photoCover: string = "https://disneyplusbrasil.com.br/wp-content/uploads/2021/03/Tony-Stark-Cancelado.jpg";
  public contentTitle: string = "Noticia Exemplo";
  public conentDescription: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, id recusandae, iure veniam nisi vitae adipisci eius distinctio repellendus mollitia expedita tempore quasi blanditiis doloribus molestias impedit ut cupiditate similique?";
}
