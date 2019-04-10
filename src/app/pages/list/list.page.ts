import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild('myList') list: IonList; 
  users: any[] = [];
  constructor(private dataService: DataService, private toastController: ToastController) { }

  ngOnInit() {
    this.dataService.getUsers().subscribe( (data: any) => {
      console.log(data);
      this.users = data;
    });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  favorite(user) {
    console.log(user);
    this.presentToast(`Hi: ${user.name}`);
    this.closeList();
  }

  share(user) {
    console.log(user);
  }

  delete(user) {
    this.presentToast(`Deleted: ${user.name}`);
    console.log(user);
  }

  closeList(): void {
    this.list.closeSlidingItems();
  }

}
