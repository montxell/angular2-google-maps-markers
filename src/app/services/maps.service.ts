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
    this.saveMarker();
  }


  deleteMarker( index: number ) {
    this.markers.splice(index, 1);
    this.saveMarker();
  }


  saveMarker() {
    localStorage.setItem('mapMarkers', JSON.stringify(this.markers));
  }


  loadMarkers() {

    if ( localStorage.getItem('mapMarkers') ) {
      this.markers = JSON.parse(localStorage.getItem('mapMarkers'));
    } else {
      this.markers = [];
    }

  }

}
