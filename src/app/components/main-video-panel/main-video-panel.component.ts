import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CardsLists } from 'src/app/core/data/cards-lists';
import { VideoService } from 'src/app/core/data/service/video-service';

@Component({
  selector: 'app-main-video-panel',
  templateUrl: './main-video-panel.component.html',
  styleUrls: ['./main-video-panel.component.scss']
})
export class MainVideoPanelComponent implements OnInit {
  // Current Video
  video$: Observable<CardsLists>;

  constructor(
    private videoService: VideoService
  ) { }

  ngOnInit(): void {
    this.video$ = this.videoService.currentVideo$;
  }
}

