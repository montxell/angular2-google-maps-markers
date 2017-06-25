import { Injectable } from '@angular/core';

import { Marker } from '../interfaces/marker.interface';

@Injectable()
export class MapsService {

  markers: Marker[] = [];


  constructor() {

    let newMarker: Marker = {

      lat: 41.403514,
      lng: 2.174310,
      title: "Sagrada Familia Basilica",
      draggable: true

    }

    this.markers.push(newMarker);

  }


  insertMarker( marker: Marker ) {
    this.markers.push(marker);
  }

}
