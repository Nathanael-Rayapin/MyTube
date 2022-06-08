import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { VideoFeatureStoreActions } from './core/data/store/video-feature-store';
import { VideoFeatureStoreState } from './core/data/store/video-feature-store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mytube-project';

  constructor(private store: Store<VideoFeatureStoreState.State>) {
    this.store.dispatch(new VideoFeatureStoreActions.GetVideos())
  }
}
