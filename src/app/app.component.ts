import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat tree',
      imageUrl: 'assets/card_images/tree.jpeg',
      username: 'nature',
      content: 'I saw this neat tree today'
    },
    {
      title: 'Snowy mountain',
      imageUrl: 'assets/card_images/mountain.jpeg',
      username: 'mountainlover',
      content: 'Here is a picture of snowy mountain'
    },
    {
      title: 'Mountain biking',
      imageUrl: 'assets/card_images/biking.jpeg',
      username: 'biking12222',
      content: 'I did some biking today'
    }
  ];
}
