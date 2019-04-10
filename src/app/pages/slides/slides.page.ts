import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {
  hideMe = '';
  slides: { img: string, title: string, desc: string }[] = [
    {
      img: '/assets/slides/photos.svg',
      title: 'Share photos',
      desc: 'Explore and share your photos all around the world'
    },
    {
      img: '/assets/slides/music-player-2.svg',
      title: 'Listen to your heart',
      desc: 'All your favorite artists'
    },
    {
      img: '/assets/slides/calendar.svg',
      title: 'Never forget something again',
      desc: 'The best calendar on your mobile'
    },
    {
      img: '/assets/slides/placeholder-1.svg',
      title: 'We share your location',
      desc: 'We will always know where you are'
    }
  ];
  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  onClick() {
    this.hideMe ='animated fadeOut fast';
    this.navController.navigateBack('/');
  }

}
