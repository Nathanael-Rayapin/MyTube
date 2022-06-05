import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { MainMusicPanelComponent } from './components/main-music-panel/main-music-panel.component';
import { MainMusicPlaylistsComponent } from './components/main-music-playlists/main-music-playlists.component';
import { MainPageComponent } from './view/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    MainMusicPanelComponent,
    MainMusicPlaylistsComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
