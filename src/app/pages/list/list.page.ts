import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild('myList') list: IonList; 
  users: any[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getUsers().subscribe( (data: any) => {
      console.log(data);
      this.users = data;
    });
  }

  favorite(user) {
    console.log(user);
    this.closeList();
  }

  share(user) {
    console.log(user);
  }

  delete(user) {
    console.log(user);
  }

  closeList(): void {
    this.list.closeSlidingItems();
  }

}
