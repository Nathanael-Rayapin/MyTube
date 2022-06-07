import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { videoReducer } from './reducer';
import { EffectsModule } from '@ngrx/effects';
import { VideoEffects } from '../effects';

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      StoreModule.forRoot({ video: videoReducer }),
      EffectsModule.forRoot([VideoEffects]),
    ],
    providers: []
  })
  export class VideoFeatureStoreModule { }