import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts = [
    {
      title: 'Neat Tree',
      imgUrl: 'assets',
      username: 'nature',
      content: 'i saw theses trees',
    },
    {
      title: 'Snowy Mountaines',
      imgUrl: 'assets',
      username: 'mountain',
      content: 'i saw theses mou ntains',
    },
    {
      title: 'biking',
      imgUrl: 'assets',
      username: 'bike',
      content: 'i saw theses bikes',
    },




  ]



}
