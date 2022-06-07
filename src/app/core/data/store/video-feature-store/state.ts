import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Video } from "../../model/video-model";

export interface State extends EntityState<Video> {
    lastUpdate: string;
    loading: boolean;
    error: string;
}

export const VideoAdapter: EntityAdapter<Video> = createEntityAdapter<Video>();

const defaultVideosLists = {
    lastUpdate: new Date().toString(),
    loading: false,
    error: null
}

export const initialState: State = VideoAdapter.getInitialState(defaultVideosLists);