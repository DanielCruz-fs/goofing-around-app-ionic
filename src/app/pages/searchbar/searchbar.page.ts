import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {
  albums: any[] = [];
  textToSearch: string = '';
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAlbums().subscribe( (resp: any) => {
      console.log(resp);
      this.albums = resp;
    });
  }

  lookFor(event) {
    //console.log(event);
    this.textToSearch = event.detail.value;
  }

}
