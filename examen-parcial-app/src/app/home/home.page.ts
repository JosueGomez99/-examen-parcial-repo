import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation'; 
import { Platform } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { CommonModule } from '@angular/common'; // Agrega esta importación
import { IonHeader,IonToolbar,IonTitle,IonContent,IonButton,IonIcon,IonInput,IonItem,IonLabel,IonThumbnail,IonImg } from '@ionic/angular/standalone';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone:true,
  imports:[IonHeader,IonToolbar,IonTitle,IonContent,IonButton,IonIcon,IonInput,IonItem,IonLabel,IonThumbnail,IonImg,CommonModule]
})
export class HomePage {
  message: string = '';
  imageSrc: string = '';
  showLabel: boolean = true; // Agrega una bandera para controlar la visibilidad del label

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

  async pickImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos, // Solo permite seleccionar desde galería
      promptLabelHeader: 'Seleccionar una imagen',
      promptLabelPhoto: 'Seleccionar desde galería',
    });

    if (!image) return;

    this.imageSrc = image.webPath ?? image.path ?? '';
    this.showLabel = false; // Oculta el label al seleccionar una imagen
  }
}