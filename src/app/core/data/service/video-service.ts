import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CardsLists } from "../cards-lists";

@Injectable({ providedIn: 'root' })
export class VideoService {

    // Default Observable
    currentVideo$ = new BehaviorSubject<CardsLists>({
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
    CardsLists: any;

    // View a New Video
    onViewVideo(card: CardsLists) {
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