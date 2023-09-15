import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.page.html',
  styleUrls: ['./profesor.page.scss'],
})
export class ProfesorPage implements OnInit {

  constructor(private router: Router, private activatedRouter: ActivatedRoute ) { }

  public alertButtons = ['OK'];
  public user = {
    usuario: "",
    password: ""
  }
  public clase = {
    fecha: "",
    nombre_clase:"",
    seccion:""
  }

  ngOnInit() {
    this.activatedRouter.queryParams.subscribe(() => {
      let state = this.router.getCurrentNavigation()?.extras.state;
      if (state) {
        this.user.usuario = state['user'].usuario;
        this.user.password = state['user'].password;
        console.log(this.user);
      }
    })
  }

}
