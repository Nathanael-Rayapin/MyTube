import { EntitySelectors, EntityState } from "@ngrx/entity/src/models";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Video } from "../../model/video-model";
import { State, VideoAdapter } from "./state";

// 1 - Call the Store we want use
export const getVideoState = createFeatureSelector<State>('video');

// 2 - Create the Entity and retrieve the todo lists and length (Method are given here)

export const {selectAll: selectAllVideo}: EntitySelectors<Video, EntityState<Video>> = VideoAdapter.getSelectors();

// 3 - Create Other Selectors
export const lastUpdate = (state: State) => state.lastUpdate;
export const loading = (state: State) => state.loading;
export const error = (state: State) => state.error;

// 4 - Export Selectors
export const selectAll = createSelector(getVideoState, selectAllVideo);
export const selectLastUpdate = createSelector(getVideoState, lastUpdate);
export const selectLoading = createSelector(getVideoState, loading);
export const selectError = createSelector(getVideoState, error);
