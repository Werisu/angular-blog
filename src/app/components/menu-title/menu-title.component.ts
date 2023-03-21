import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import Typewriter from 'src/app/animations/typewriter';

@Component({
  selector: 'app-menu-title',
  templateUrl: './menu-title.component.html',
  styleUrls: ['./menu-title.component.css']
})
export class MenuTitleComponent implements AfterViewInit {
  @ViewChild('typingText') typingText!: ElementRef<any>;
  public typewriter: any;

  ngAfterViewInit(): void {
    console.log(this.typingText);
    this.typewriter = new Typewriter(this.typingText.nativeElement, {
      loop: true,
      color: 'red'
    });
    //inovadoras e personalizadas
    this.typewriter
      .typeString('notícias legais')
      .pauseFor(4000)
      .deleteChars(14)
      .typeString('diversão garantida')
      .pauseFor(4000)
      .deleteChars(17)
      .typeString('resenhas de filmes')
      .pauseFor(4000)
      .deleteChars(17)
      .typeString('opinião e discussões')
      .pauseFor(5000)
      .deleteAll(10)
      .start();
  }
}
