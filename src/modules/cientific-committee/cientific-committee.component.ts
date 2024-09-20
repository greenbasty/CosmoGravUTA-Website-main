import { Component, OnInit } from '@angular/core';

import { NgFor } from '@angular/common';
import { Committee } from '../../assets/interfaces/global.interface';

@Component({
  selector: 'app-cientific-committee',
  standalone: true,
  imports: [NgFor],
  templateUrl: './cientific-committee.component.html',
  styleUrl: './cientific-committee.component.scss'
})
export class CientificCommitteeComponent {

  committee: Committee[] = [
    {Nombre: 'John Doe', Carrera: 'Carrera', Email: 'esta es mi Descripcion!'},
    {Nombre: 'John Doe', Carrera: 'Carrera', Email: 'esta es mi Descripcion!'},
    {Nombre: 'John Doe', Carrera: 'Carrera', Email: 'esta es mi Descripcion!'},
    {Nombre: 'John Doe', Carrera: 'Carrera', Email: 'esta es mi Descripcion!'},
    {Nombre: 'John Doe', Carrera: 'Carrera', Email: 'esta es mi Descripcion!'},
    {Nombre: 'John Doe', Carrera: 'Carrera', Email: 'esta es mi Descripcion!'},

  ];

}
