export const CardsLists: CardsLists[] = [
  {
    id: 0,
    title: 'The Curse For Weakness (heroic hybrid metal)',
    poster: '../../../assets/poster/curseforweakness.jpg',
    author: 'Antti Martikainen Music',
    view: '2 439 343 views',
    date: '28 fév. 2019',
    src: '../../../assets/video/piratefolkmetal.mp4',
    like: '19.6k',
    dislike: '0',
  },
  {
    id: 1,
    title: 'Old West Conquest',
    poster: '../../../assets/poster/oldwest.jpg',
    author: 'Alatella',
    view: '191 638 views',
    date: '18 oct. 2015',
    src: '../../../assets/video/oldwest.mp4',
    like: '2.4k',
    dislike: '364',
  },
  {
    id: 2,
    title: 'The good the bad and the weird',
    poster: '../../../assets/poster/thegood.jpg',
    author: 'Kim Jee-woon',
    view: '2 563 681 views',
    date: '27 Mar. 2011',
    src: '../../../assets/video/thegood.mp4',
    like: '3.6k',
    dislike: '233',
  },
  {
    id: 3,
    title: 'New World Symphony',
    poster: '../../../assets/poster/espada.jpg',
    author: 'One Piece Ost',
    view: '2 464 852 views',
    date: '30 Jui. 2020',
    src: '',
    like: '1k',
    dislike: '978',
  },
  {
    id: 4,
    title: 'Eldorado',
    poster: '../../../assets/poster/landmustang.jpg',
    author: 'Bibo Bergeron',
    view: '4 567 201 views',
    date: '11 Jan. 2009',
    src: '',
    like: '9k',
    dislike: '1432',
  },
];

export interface CardsLists {
  id: number;
  title: string;
  poster: string;
  author: string;
  view: string;
  date: string;
  src: string;
  like: string;
  dislike: string;
}