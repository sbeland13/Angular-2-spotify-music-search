import { Component } from '@angular/core';
import { NavbarTopComponent } from './components/navbar-top/navbar-top.component';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { SpotifyService } from './services/spotify.service';
import { HTTP_PROVIDERS } from '@angular/http';


@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [HTTP_PROVIDERS, SpotifyService],
    directives: [ROUTER_DIRECTIVES, NavbarTopComponent, ArtistComponent, AlbumComponent],
    precompile: [SearchComponent, AboutComponent, ArtistComponent,AlbumComponent]
})
export class AppComponent { }
    