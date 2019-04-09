import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ComponentInterface } from 'src/app/interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-begin',
  templateUrl: './begin.page.html',
  styleUrls: ['./begin.page.scss'],
})
export class BeginPage implements OnInit {
  components: Observable<ComponentInterface[]>;
  constructor(private menuController: MenuController, private dataService: DataService) { }

  ngOnInit() {
    this.components = this.dataService.getMenu();
  }

  toggleMenu() {
    this.menuController.toggle();
  }

}


