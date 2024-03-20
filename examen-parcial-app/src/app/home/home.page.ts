import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation'; 
import { Platform } from '@ionic/angular';

import { IonHeader,IonToolbar,IonTitle,IonContent,IonButton,IonIcon,IonInput,IonItem,IonLabel } from '@ionic/angular/standalone';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone:true,
  imports:[IonHeader,IonToolbar,IonTitle,IonContent,IonButton,IonIcon,IonInput,IonItem,IonLabel]
})
export class HomePage {
  message: string = '';

  constructor(private platform: Platform) {}

  async getLocationButtonClicked() {
    this.platform.ready().then(async () => {
      try {
        const position = await Geolocation.getCurrentPosition();
        this.message = `Mi posición actual es: Latitud: ${position.coords.latitude}/ Longitud: ${position.coords.longitude}`;
      } catch (error) {
        console.error('Error getting location', error);
      }
    });
  }

  async takePicture() {
    // Implementa lógica para tomar una imagen desde la cámara o galería
  }
}