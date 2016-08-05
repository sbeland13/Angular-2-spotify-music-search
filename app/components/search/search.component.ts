import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import {Album} from '../../album.ts';
import {Artist} from '../../artist.ts';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
@Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl: 'search.component.html',
    directives: [ROUTER_DIRECTIVES] 
})
export class SearchComponent {
    
    searchStr: string;
    searchRes: Artist[];
    
    constructor(private _spotifyService: SpotifyService,
                private _router: Router){

    }
    
    searchMusic(){
        this._spotifyService.searchMusic(this.searchStr)
        .subscribe(res=>{
           this.searchRes = res.artists.items; 
        });
    }

    onClick(artist: Artist[]){
        this._router.navigate(['/artist',artist.id]);
    }
 }

 