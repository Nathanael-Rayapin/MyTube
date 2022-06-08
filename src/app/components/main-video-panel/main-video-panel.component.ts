import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Video } from 'src/app/core/data/model/video-model';
import { VideoService } from 'src/app/core/data/service/video-service';
import { VideoFeatureStoreState } from 'src/app/core/data/store/video-feature-store';

@Component({
  selector: 'app-main-video-panel',
  templateUrl: './main-video-panel.component.html',
  styleUrls: ['./main-video-panel.component.scss']
})
export class MainVideoPanelComponent implements OnInit {
  // Current Video
  video$: Observable<Video>;

  constructor(
    private videoService: VideoService,
    private store: Store<{ video: VideoFeatureStoreState.State }>
  ) { }

  ngOnInit(): void {
    this.video$ = this.videoService.currentVideo$;
  }
}

