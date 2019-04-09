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
    { icon: 'person-add', name: 'Avatar', redirectTo: '/avatar' },
    { icon: 'logo-pinterest', name: 'Icons', redirectTo: '/buttons' },
    { icon: 'card', name: 'Cards', redirectTo: '/card' },
    { icon: 'checkmark-circle-outline', name: 'Check-box', redirectTo: '/check' },
    { icon: 'calendar', name: 'Date Time', redirectTo: '/date-time' },
    { icon: 'car', name: 'Fab', redirectTo: '/fab' },
    { icon: 'grid', name: 'Grid Layout', redirectTo: '/grid' },
    { icon: 'infinite', name: 'Infinite Scroll', redirectTo: '/infinite-scroll' },
    { icon: 'code-working', name: 'Inputs', redirectTo: '/input' },
    { icon: 'list', name: 'List', redirectTo: '/list' },
    { icon: 'refresh-circle', name: 'Loading', redirectTo: '/loading' }
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
