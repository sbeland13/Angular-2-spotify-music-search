import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import {Artist} from '../../artist';
import {Album} from '../../album';
import { ActivatedRoute, Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'artist',
    templateUrl: 'artist.component.html',
    directives: [ROUTER_DIRECTIVES]
 
})
export class ArtistComponent {
    id: string;
    artist: Artist[];
    albums: Album[];
    
    
    constructor(private _spotifyService: SpotifyService,
                private _router: Router,
                private _route: ActivatedRoute
    ){

    }
    
    ngOnInit() {
         this._spotifyService.getArtist(this._route.snapshot.params.id)
            .subscribe(artist => {
                this.artist = artist;
        });

        this._spotifyService.getAlbums(this._route.snapshot.params.id)
            .subscribe(albums => {
                this.albums = albums.items;
        });
    }

    onClick(album: Album[]) {
        this._router.navigate(['/album', album.id]);
    }
}