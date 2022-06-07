import { Action } from "@ngrx/store";
import { Video } from "../../model/video-model";

export enum VideoActionTypes {

    GET_VIDEOS = 'GET_VIDEOS',
    GET_VIDEO_SUCCESS = 'GET_VIDEO_SUCCESS',
    GET_VIDEO_ERROR = 'GET_VIDEO_ERROR',

    ADD_VIDEO = 'ADD_VIDEO',
    ADD_VIDEO_SUCCESS = 'ADD_VIDEO_SUCCESS',
    ADD_VIDEO_ERROR = 'ADD_VIDEO_ERROR',

    DELETE_VIDEO = 'DELETE_VIDEO',
    DELETE_VIDEO_SUCCESS = 'DELETE_VIDEO_SUCCESS',
    DELETE_VIDEO_ERROR = 'DELETE_VIDEO_ERROR',
}

// Get Videos
export class GetVideos implements Action {
    readonly type = VideoActionTypes.GET_VIDEOS;
}

// Get Videos Success
export class GetVideosSuccess implements Action {
    readonly type = VideoActionTypes.GET_VIDEO_SUCCESS;

    constructor(public payload: Video[]) {}
}

// Get Videos Error
export class GetVideosError implements Action {
    readonly type = VideoActionTypes.GET_VIDEO_ERROR;

    constructor(public payload: string) {}
}

// Add Video
export class AddVideo implements Action {
    readonly type = VideoActionTypes.ADD_VIDEO;

    constructor(public payload: Video) {}
}

// Add Video Success
export class AddVideoSuccess implements Action {
    readonly type = VideoActionTypes.ADD_VIDEO_SUCCESS;

    constructor(public payload: Video) {}
}

// Add Video Error
export class AddVideoError implements Action {
    readonly type = VideoActionTypes.ADD_VIDEO_ERROR;

    constructor(public payload: string) {}
}

// Delete Video
export class DeleteVideo implements Action {
    readonly type = VideoActionTypes.DELETE_VIDEO;

    constructor(public payload: number) {}
}

// Delete Video Success
export class DeleteVideoSuccess implements Action {
    readonly type = VideoActionTypes.DELETE_VIDEO_SUCCESS;

    constructor(public payload: number) {}
}

// Delete Video Error
export class DeleteVideoError implements Action {
    readonly type = VideoActionTypes.DELETE_VIDEO_ERROR;

    constructor(public payload: string) {}
}

export type VideoActions =
| GetVideos
| GetVideosSuccess
| GetVideosError
| AddVideo
| AddVideoSuccess
| AddVideoError
| DeleteVideo
| DeleteVideoSuccess
| DeleteVideoError