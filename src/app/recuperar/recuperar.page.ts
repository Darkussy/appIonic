import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { IonAvatar,IonModal } from '@ionic/angular';
import type { Animation } from '@ionic/angular';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

    
  constructor(private router: Router) {}
  
  public alertButtons = ["Ok"];
  public mensaje =""

  Contra={
    Nueva:"",
    Confirmacion:""
  }
  
  Validacion(){
    if(this.Contra.Nueva !="" && this.Contra.Confirmacion !=""){
      if(this.Contra.Nueva == this.Contra.Confirmacion ){
        this.mensaje ="Debe ingresar su nueva contraseña";
        this.router.navigate(['/home']);

      }else{
        this.mensaje ="Las contraseñas deben coincidir";
      }
    }else{
      this.mensaje ="Debe ingresar su nueva contraseña";
    }
  }


  ngOnInit() {
  }

}
