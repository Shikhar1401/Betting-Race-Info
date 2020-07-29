import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'https://www.atg.se/services/racinginfo/v1/api/products/';
  gameDataUrl = 'https://www.atg.se/services/racinginfo/v1/api/games/';

  constructor(private http: HttpClient) { }

  getGameID(gametype) {
    const urlId = this.url + gametype;
    return this.http.get(urlId);
  }

  getGameData(gameid) {
    console.log('gameid recieved in api', gameid);
    const gameurl = this.gameDataUrl + gameid;
    return this.http.get(gameurl);
  }
}
