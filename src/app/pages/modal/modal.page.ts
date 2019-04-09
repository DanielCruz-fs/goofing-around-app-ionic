import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async showModal() {
    const modal = await this.modalController.create({
      component: ModalInfoPage,
      componentProps: {
        name: 'Daniel',
        country: 'Bolivia'
      }
    });
    await modal.present();

    //receiving data from modal child
    const {data} = await modal.onDidDismiss();
    console.log('data from modal child:', data);
  }

}
