import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Some of my favorite photos!';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = '..\/..\/assets/dart-clipart-tranquilizer-dart-19-transparent.png';
  image3 = 'https://cdn.vox-cdn.com/thumbor/p-MQqakFytgblP7PidTHmen1FF8=/0x0:640x400/920x613/filters:focal(269x149:371x251):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/57993335/aolrunningman.0.png';

  constructor() { }

  ngOnInit() {
  }

}