import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Video } from "../model/video-model";

@Injectable({ providedIn: 'root' })
export class VideoService {
    // Fake API Rest 
    baseUrl: string;

    constructor(
        private http: HttpClient
    ) {
        this.baseUrl = 'http://localhost:3000/videos';
    }

    getAll(): Observable<Video[]> {
        return this.http.get<Video[]>(this.baseUrl);
    }

    addVideo(video: Video) {
        return this.http.post<Video>(this.baseUrl, video);
    }

    deleteVideo(videoId: number) {
        return this.http.delete<Video>(`${this.baseUrl}/${videoId}`);
    }

    // Default Observable (Current Video)
    currentVideo$ = new BehaviorSubject<Video>({
        id: Math.floor(Date.now() * Math.random()),
        title: 'The Crown of War',
        poster: '../../../../assets/poster/motocross.jpg',
        author: 'Antti Martikainen Musi',
        view: '75 512 views',
        date: '5 déc. 2017',
        src: '../../../../assets/video/rockepicaction.mp4',
        like: '9.9k',
        dislike: '0',
    })

    // View a New Video
    setVideo(card: Video) {
        this.currentVideo$.next(
            {
                id: card.id,
                title: card.title,
                poster: card.poster,
                author: card.author,
                view: card.view,
                date: card.date,
                src: card.src,
                like: card.like,
                dislike: card.dislike,
            }
        );
    }
}