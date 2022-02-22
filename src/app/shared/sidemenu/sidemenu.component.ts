import { Component } from '@angular/core';

interface MenuItem {
  nombre: string;
  ruta: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html'
  
})
export class SidemenuComponent {

  templateMenu: MenuItem []= [
    {
      nombre: 'Básicos',
      ruta: './template/basicos'
    },
    {
      nombre: 'Dinámicos',
      ruta: './template/dinamicos'
    },
    {
      nombre: 'Switches',
      ruta: './template/switches'
    }
  ]

  reactiveMenu: MenuItem []= [
    {
      nombre: 'Básicos',
      ruta: './reactive/basicos'
    },
    {
      nombre: 'Dinámicos',
      ruta: './reactive/dinamicos'
    },
    {
      nombre: 'Switches',
      ruta: './reactive/switches'
    }
  ]

}
