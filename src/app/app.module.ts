import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { VideoFeatureStoreModule } from './core/data/store/video-feature-store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { MainVideoPanelComponent } from './components/main-video-panel/main-video-panel.component';
import { MainVideoPlaylistsComponent } from './components/main-video-playlists/main-video-playlists.component';
import { MainPageComponent } from './view/main-page/main-page.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    MainVideoPanelComponent,
    MainVideoPlaylistsComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    VideoFeatureStoreModule,
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 5 }) : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
