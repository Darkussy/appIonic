import { Component,ViewChild,ElementRef} from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { IonAvatar,IonModal } from '@ionic/angular';
import type { Animation } from '@ionic/angular';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonAvatar,{read:ElementRef}) avatar!:ElementRef<HTMLIonAvatarElement>;
  
  @ViewChild(IonModal) modal!: IonModal;

  constructor(private router: Router) {}
  public mensaje = ""
  public alertButtons = ['OK'];

  user = {
    usuario: "",
    password: ""
  }

  enviarInformacion() {
    if (this.user.usuario != "") {
      let navigationExtras: NavigationExtras = {
        state: { user: this.user }
      }
      this.router.navigate(['/login'], navigationExtras);
    } else {
      this.mensaje = "Debe ingresar sus credenciales";
    }
  }
  mostrarConsola() {
    console.log(this.user);
    if (this.user.usuario != "" && this.user.password != "") {
      this.mensaje = "Usuario Conectado";
    } else {
      this.mensaje = "Usuario y contraseña deben tener algun valor"
    }
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.mensaje="Registro Exitoso"
    this.modal.dismiss(this.user.usuario, 'confirm');
  }

}

