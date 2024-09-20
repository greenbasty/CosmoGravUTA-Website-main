import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Cientific, Expositor, Organizador } from '../../assets/interfaces/global.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  expositores: Expositor[] = [
    {Nombre: " Susana Landau",         Universidad: "Universidad de Buenos Aires"},
    {Nombre: " Eduardo Guendelman",    Universidad: "Ben-Gurion University of the Negev"},
    {Nombre: " Hermano Velten",        Universidad: "Universidade Federal de Ouro Preto"},
    // {Nombre: " Emmanuel Saridakis",    Universidad: "Institute for Astronomy, Astrophysics, Space Applications and Remote Sensing", Universidad2: "National Observatory of Athens"},
    {Nombre: " Emmanuel Saridakis",    Universidad: "National Observatory of Athens"},
    {Nombre: " José Pereira",  Universidad: "Universidade Estadual Paulista"},
    {Nombre: " David Wands",  Universidad: "University of Portsmouth"},
    {Nombre: " María José Guzmán",  Universidad: "University of Tartu"},
  ];
  

  organizadores: Organizador[] = [
    {Nombre: " Giovanni Otalora",    Universidad: "Universidad de Tarapacá"},
    {Nombre: " Yoelsy Leyva",        Universidad: "Universidad de Tarapacá"},
    {Nombre: " Carlos Leiva",        Universidad: "Universidad de Tarapacá"},
    {Nombre: " Carlos Rodriguez",    Universidad: "Universidad Nacional de Trujillo"}
  ];

 

  openGoogleForm() {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSdsfpIj2IOkMiBcrn_BImK984fg02OaxPOjawly9iRAdJWykQ/viewform", '_blank');
  }

  
}
