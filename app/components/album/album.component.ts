import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import {Artist} from '../../artist';
import {Album} from '../../album';
import { ActivatedRoute, Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'album',
    templateUrl: 'album.component.html',
    directives: [ROUTER_DIRECTIVES]
 
})
export class AlbumComponent {
    id: string;
    album: Album[];
   
    
    
    constructor(private _spotifyService: SpotifyService,
                private _router: Router,
                private _route: ActivatedRoute
    ){

    }
    
    ngOnInit() {
         

        this._spotifyService.getAlbum(this._route.snapshot.params.id)
            .subscribe(album => {
                this.album = album;
        });
    }

    
}