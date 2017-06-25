import { Component } from '@angular/core';

import { MapsService } from './services/maps.service';
import { Marker } from './interfaces/marker.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lat: number = 41.403514;
  lng: number = 2.174310;
  zoom: number = 16;


  constructor( public _ms: MapsService ) {}


  clickMap( event ) {

    // console.log(event);

    let markerToInsert: Marker = {
      lat: event.coords.lat,
      lng: event.coords.lng,
      title: "No title",
      draggable: true
    }

    this._ms.insertMarker(markerToInsert);

  }

}
