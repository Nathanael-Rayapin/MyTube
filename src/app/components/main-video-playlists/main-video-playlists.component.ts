import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { Video } from 'src/app/core/data/model/video-model';
import { VideoService } from 'src/app/core/data/service/video-service';

import { VideoFeatureStoreState } from 'src/app/core/data/store/video-feature-store';
import { VideoFeatureStoreActions } from 'src/app/core/data/store/video-feature-store';
import { VideoFeatureStoreSelectors } from 'src/app/core/data/store/video-feature-store';

@Component({
  selector: 'app-main-video-playlists',
  templateUrl: './main-video-playlists.component.html',
  styleUrls: ['./main-video-playlists.component.scss']
})
export class MainVideoPlaylistsComponent implements OnInit {
  // Cards
  videos$: Observable<Video[]>;
  currentVideoData: Video;

  constructor(
    private videoService: VideoService,
    private store: Store<{ video: VideoFeatureStoreState.State }>
  ) { }

  ngOnInit(): void {
    this.videos$ = this.store.pipe(select(VideoFeatureStoreSelectors.selectAll));
  }

  onChangeVideo(card: Video) {
    this.saveCurrentVideoData();
    this.videoService.setVideo(card);
    this.asyncVideosLists(card);
  }

  // Save Default Video Data
  saveCurrentVideoData(): void {
    this.currentVideoData = this.videoService.currentVideo$.value;
  }

  // Remove Select Video from Cards Lists
  removeVideoSelectedFromLists(card: Video): void {
    this.store.dispatch(new VideoFeatureStoreActions.DeleteVideo(card.id))
      ;
  }

  // Add Previous Video to the List
  addPreviousVideoInLists(): void {
    this.store.dispatch(new VideoFeatureStoreActions.AddVideo(this.currentVideoData));
  }

  asyncVideosLists(card: Video) {
    const promise = new Promise((resolve, reject) => {
      resolve(this.removeVideoSelectedFromLists(card));
    })
    promise.then(() => {
      this.addPreviousVideoInLists();
    })
      .catch(() => {
        console.log('An Error has Occured');
      });
  }
}