import { Component, OnInit } from '@angular/core';
import { SettingsLists } from 'src/app/core/data/setting-panel';

@Component({
  selector: 'app-main-music-panel',
  templateUrl: './main-music-panel.component.html',
  styleUrls: ['./main-music-panel.component.scss']
})
export class MainMusicPanelComponent implements OnInit {
  // Setting
  settings: SettingsLists[] = SettingsLists;

  constructor() { }

  ngOnInit(): void {
  }
}

