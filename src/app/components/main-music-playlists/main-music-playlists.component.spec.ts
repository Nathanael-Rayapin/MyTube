import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMusicPlaylistsComponent } from './main-music-playlists.component';

describe('MainMusicPlaylistsComponent', () => {
  let component: MainMusicPlaylistsComponent;
  let fixture: ComponentFixture<MainMusicPlaylistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainMusicPlaylistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMusicPlaylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
