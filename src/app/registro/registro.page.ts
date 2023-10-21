import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { IonAvatar,IonModal } from '@ionic/angular';
import type { Animation } from '@ionic/angular';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

    
  constructor(private router: Router) {}
  
  public alertButtons = ["Ok"];
  public mensaje =""

  Reg={
    Mail:"",
    Nombre:"",
    Contra:"",
    Confirmacion:""
  }
  
  Validacion(){
    if(this.Reg.Mail !="" || this.Reg.Nombre !="" ){
      if(this.Reg.Contra !="" && this.Reg.Confirmacion !=""){
        if(this.Reg.Contra == this.Reg.Confirmacion ){
          this.mensaje ="Registro creado exitosamente";
          this.router.navigate(['/home']);
  
        }else{
          this.mensaje ="Las contraseñas deben coincidir";
        }
      }else{
        this.mensaje ="Debe ingresar su nueva contraseña";
      }
    }else{
      this.mensaje ="Debe ingresar su mail y/o nombre";
    }
  }


  ngOnInit() {
  }

}
