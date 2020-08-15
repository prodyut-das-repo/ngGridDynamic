import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'agGrid';
  index: number;
  color: string;
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  change(index: number, color: string) {
    let b:HTMLElement = document.getElementsByClassName(`item${index - 1}`)[0] as HTMLElement;
    b.style.cssText = `background-color: ${color}`;
  }
}
