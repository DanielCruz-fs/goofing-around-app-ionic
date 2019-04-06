import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-begin',
  templateUrl: './begin.page.html',
  styleUrls: ['./begin.page.scss'],
})
export class BeginPage implements OnInit {
  components: ComponentInterface[] = [
    { icon: 'hammer', name: 'Action Sheet', redirectTo: '/action-sheet' },
    { icon: 'appstore', name: 'Alert', redirectTo: '/alert' },
    { icon: 'person-add', name: 'Avatar', redirectTo: '/avatar'}
  ];
  constructor() { }

  ngOnInit() {
  }

}

interface ComponentInterface {
  icon: string;
  name: string;
  redirectTo: string;
}
