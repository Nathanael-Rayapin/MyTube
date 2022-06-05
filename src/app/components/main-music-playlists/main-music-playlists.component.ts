import { Component, OnInit } from '@angular/core';
import { CardsLists } from 'src/app/core/data/cards-lists';

@Component({
  selector: 'app-main-music-playlists',
  templateUrl: './main-music-playlists.component.html',
  styleUrls: ['./main-music-playlists.component.scss']
})
export class MainMusicPlaylistsComponent implements OnInit {
  // Cards
  cards: CardsLists[] = CardsLists;

  constructor() { }

  ngOnInit(): void {
  }
}


