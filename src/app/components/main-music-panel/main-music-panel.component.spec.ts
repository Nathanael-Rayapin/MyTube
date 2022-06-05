import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMusicPanelComponent } from './main-music-panel.component';

describe('MainMusicPanelComponent', () => {
  let component: MainMusicPanelComponent;
  let fixture: ComponentFixture<MainMusicPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainMusicPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMusicPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
