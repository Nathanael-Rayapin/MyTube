import { Component, OnInit } from '@angular/core';
import { CardsLists } from 'src/app/core/data/cards-lists';
import { VideoService } from 'src/app/core/data/service/video-service';

@Component({
  selector: 'app-main-video-playlists',
  templateUrl: './main-video-playlists.component.html',
  styleUrls: ['./main-video-playlists.component.scss']
})
export class MainVideoPlaylistsComponent implements OnInit {
  // Cards
  cards: CardsLists[] = CardsLists;
  currentData: CardsLists;

  constructor(
    private videoService: VideoService
  ) { }

  ngOnInit(): void {
  }

  onChangeVideo(card: CardsLists) {
    this.saveCurrentVideoData();
    this.videoService.onViewVideo(card);
    this.removeVideoSelectedFromLists(card);
    this.addPreviousVideoInLists();
    this.shuffleVideoLists();
  }

  // Save Default Video Data
  saveCurrentVideoData(): void {
    this.currentData = this.videoService.currentVideo$.value;
  }

  //  Remove Select Video from Cards Lists
  removeVideoSelectedFromLists(card: CardsLists): CardsLists[] {
    const filteredCard = this.cards.filter(x => x.id !== card.id);
    return this.cards = filteredCard;
  }

  // Add Previous Video to the List
  addPreviousVideoInLists(): number {
    return this.cards.push(this.currentData);
  }

  // Additionnaly Shuffle Cards Lists
  shuffleVideoLists(): CardsLists[] {
    return this.cards.sort((a, b) => 0.5 - Math.random());
  }
}