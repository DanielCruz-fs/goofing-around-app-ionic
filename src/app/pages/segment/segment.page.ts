import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  @ViewChild(IonSegment) segment: IonSegment;
  superHeroes: Observable<any>;
  publisher: string = '';
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.segment.value = 'All';
    this.superHeroes = this.dataService.getHeroes();
  }

  segmentChanged(event) {
    const valueSegment = event.detail.value;
    (valueSegment === 'All') ? this.publisher = '' : this.publisher = valueSegment;
    console.log(valueSegment);
  }
}
