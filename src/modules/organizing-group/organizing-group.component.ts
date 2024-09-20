import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

import { Estudiantes, Profesor, Secretarias } from '../../assets/interfaces/global.interface';


@Component({
  selector: 'app-organizing-group',
  standalone: true,
  imports: [NgFor],
  templateUrl: './organizing-group.component.html',
  styleUrl: './organizing-group.component.scss'
})
export class OrganizingGroupComponent {




  profesores: Profesor[] = [
    {Nombre: ' Giovanni Otalora', Correo: 'giovanni.otalora@academicos.uta.cl', Universidad: 'Universidad de Tarapacá', Research: 'Cosmology and Gravity | Special and General Relativity | Quantum Field Theory | Gravitational Physics | High Energy Physics | Quantum Mechanics'},
    {Nombre: ' Yoelsy Leyva', Correo: 'yoelsy.leyva@academicos.uta.cl', Universidad: 'Universidad de Tarapacá', Research: 'Cosmology and Gravity | Dark Matter | Dark Energy | General Relativity | Dynamical System'},
    {Nombre: ' Carlos Leiva', Correo: 'cleivas@academicos.uta.cl', Universidad: 'Universidad de Tarapacá', Research: 'Cosmology and Gravity | Special Relativity | Supersymmetry | Fermion | Schwarzschild Black'},
    {Nombre: ' Carlos Rodriguez', Correo: 'cerodriguez@unitru.edu.pe', Universidad: 'Universidad Nacional de Trujillo', Research: 'Dark Energy  | Dark Matter | Cosmology | Astronomy and Astrophysics | Gravitational Physics | Special and General Relativity | Quantum Cosmology'},
  ];


  estudiantes: Estudiantes[] = [
    {Nombre: 'Andrés Burton', Puesto: "Master's Student at Universidad de Tarapacá", AreaInteres: 'Quantum Cosmology'},
    {Nombre: 'Francis Vicencio', Puesto: "Master's Student at Universidad de Tarapacá", AreaInteres: 'Dark Matter and Dark Energy'},
    {Nombre: 'Rodrigo Reyes', Puesto: "Master's Student at Universidad de Tarapacá", AreaInteres: 'Black Holes'},
    {Nombre: 'Bastián Espinoza', Puesto: "Master's Student at Universidad de Tarapacá", AreaInteres: 'Cosmic Inflation'},
    {Nombre: 'Carlos Mall', Puesto: 'Student at Universidad de Tarapacá', AreaInteres: 'Gravitation'},
    {Nombre: 'Stone Silva', Puesto: 'Student at Universidad de Tarapacá', AreaInteres: 'Field Theory'},
  ];

  secretarias: Secretarias[] = [
    {Nombre: 'Sara Zúñiga', Categoria: "Master's Program in Physics"},
    {Nombre: 'Gladys Pacha', Categoria: "Faculty of Science"},
  ];






}
