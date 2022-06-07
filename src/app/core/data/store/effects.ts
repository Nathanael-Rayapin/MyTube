import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { catchError, map, Observable, of, switchMap } from "rxjs";
import { VideoService } from "../service/video-service";

import { Video } from "../model/video-model";
import { VideoFeatureStoreActions } from "./video-feature-store";
import { Injectable } from "@angular/core";
import { VideoActions } from "./video-feature-store/action";


@Injectable({ providedIn: 'root' })
export class VideoEffects {

    constructor(
        private action$: Actions,
        private videoService: VideoService) { }

    getVideos$: Observable<Action> = createEffect(() => {
        return this.action$.pipe(
            ofType(VideoFeatureStoreActions.VideoActionTypes.GET_VIDEOS),
            switchMap(() => this.videoService.getAll().pipe(
                map((videos: Video[]) => new VideoFeatureStoreActions.GetVideosSuccess(videos)),
                catchError((err: string) => of(new VideoFeatureStoreActions.GetVideosError(err)))
            ))
        )
    })

    addVideo$: Observable<VideoActions> = createEffect(() => this.action$.pipe(
        ofType<VideoFeatureStoreActions.AddVideo>(VideoFeatureStoreActions.VideoActionTypes.ADD_VIDEO),
        switchMap(action => this.videoService.addVideo(action.payload).pipe(
            map(video => {
                return new VideoFeatureStoreActions.AddVideoSuccess(video)
            }),
            catchError((err: string) => of(new VideoFeatureStoreActions.AddVideoError(err)))
        ))
    ))

    deleteVideo$: Observable<Action> = createEffect(() => this.action$.pipe(
        ofType<VideoFeatureStoreActions.DeleteVideo>(VideoFeatureStoreActions.VideoActionTypes.DELETE_VIDEO),
        switchMap(action => this.videoService.deleteVideo(action.payload).pipe(
            map(() => {
                return new VideoFeatureStoreActions.DeleteVideoSuccess(action.payload)
            }),
            catchError((err: string) => of(new VideoFeatureStoreActions.DeleteVideoError(err)))
        ))
    ))
}