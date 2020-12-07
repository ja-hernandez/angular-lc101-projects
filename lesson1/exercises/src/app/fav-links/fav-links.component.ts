import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks: string[] = ['https://youtu.be/5qap5aO4i9A', 'https://www.reddit.com/', 'https://coronavirus.jhu.edu/']
  constructor() { }

  ngOnInit() {
  }

}
