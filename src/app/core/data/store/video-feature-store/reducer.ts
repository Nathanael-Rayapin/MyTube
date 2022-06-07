import { VideoActions, VideoActionTypes } from "./action";
import { initialState, State, VideoAdapter } from "./state";

export function videoReducer(state = initialState, action: VideoActions): State {
    switch (action.type) {
        // Get Videos
        case VideoActionTypes.GET_VIDEOS:
            return {
                ...state,
                lastUpdate: new Date().toString(),
                loading: true,
                error: null
            };
        // Get Videos Success
        case VideoActionTypes.GET_VIDEO_SUCCESS:
            return VideoAdapter.setAll(action.payload, {
                ...state,
                lastUpdate: new Date().toString(),
                loading: false,
                error: null
            });
        // Get Videos Error
        case VideoActionTypes.GET_VIDEO_ERROR:
            return {
                ...state,
                lastUpdate: new Date().toString(),
                loading: false,
                error: action.payload
            };
        // Add Video
        case VideoActionTypes.ADD_VIDEO:
            return {
                ...state,
                lastUpdate: new Date().toString(),
                loading: true,
                error: null
            };
        // Add Video Success
        case VideoActionTypes.ADD_VIDEO_SUCCESS:
            return VideoAdapter.addOne(action.payload, {
                ...state,
                lastUpdate: new Date().toString(),
                loading: false,
                error: null
            });
        // Add Video Error
        case VideoActionTypes.ADD_VIDEO_ERROR:
            return {
                ...state,
                lastUpdate: new Date().toString(),
                loading: false,
                error: action.payload
            };
        // Delete Video
        case VideoActionTypes.DELETE_VIDEO:
            return {
                ...state,
                lastUpdate: new Date().toString(),
                loading: true,
                error: null
            };
        // Delete Video Success
        case VideoActionTypes.DELETE_VIDEO_SUCCESS:
            return VideoAdapter.removeOne(action.payload, {
                ...state,
                lastUpdate: new Date().toString(),
                loading: false,
                error: null
            });
        // Delete Video Error
        case VideoActionTypes.DELETE_VIDEO_ERROR:
            return {
                ...state,
                lastUpdate: new Date().toString(),
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}