import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'horsegame';
  results: any  = [];
  upcoming: any  = [];
  gameInfo = {};
  gameRaces: any = [];
  raceStartInfo: any =  [];
  selectedHorse = 0;

  selectedGame = '';
  gameId = '';
  tabView = false;
  value = 0;
  index;

  gameIdData: Array<string> = ['V75', 'V65', 'V64', 'V4'];
  constructor(private router: Router, private apiService: ApiService) {}
  // selectValue(event) {
  //   this.selectedGame = event.target.
  // }
  gotoHome() {
    this.router.navigate(['/newpage']);
  }
  // getData() {
  //   this.apiService.getGameID(this.testValue).subscribe((data) => {
  //     this.results = data['results'];
  //     this.upcoming = data['upcoming'];
  //     console.log(this.results);
  //     console.log(this.upcoming);
  //   });
  // }

  getID(id) {
    console.log(id);
    this.gameId = id;
    this.apiService.getGameData(this.gameId).subscribe((data) => {
      const val = 'races';
      this.gameInfo = data;
      console.log(data[val]);
      this.gameRaces = this.gameInfo[val];
    });
  }

  getRaceID(id, index) {
    const val = 'races';
    this.raceStartInfo = this.gameInfo[val][index].starts;
    console.log(this.raceStartInfo);
  }

  // getTabView(index) {
  //   this.index = index;
  //   if (this.value == 0) {
  //     this.tabView = true;
  //     this.value = 1;
  //   } else {
  //     this.tabView = false;
  //     this.value = 0;
  //   }
  // }

  findHorseDetails(r) {
    console.log(r.horse.id);
    return this.raceStartInfo.filter((x) => x.number === r.number);
  }
  onChange(e) {
    const i = e;
    this.apiService.getGameID(i.toString()).subscribe((data) => {
      const res = 'results';
      const up = 'upcoming';
      this.results = data[res];
      this.upcoming = data[up];
    });
  }
}
