import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { Speakers } from '../../assets/interfaces/global.interface';

import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-exhibitors',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './exhibitors.component.html',
  styleUrl: './exhibitors.component.scss'
})

export class ExhibitorsComponent implements AfterViewInit {
  displayedColumns: string[] = ['N', 'Name', 'Affiliation'];
  dataSource = new MatTableDataSource<Speakers>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

const ELEMENT_DATA: Speakers[] = [
  { Name: "Susana Landau", Affiliation: "UBA" },
  { Name: "Giovanni Otalora", Affiliation: "UTA" },
  { Name: "Eduardo Guendelman", Affiliation: "BGU" },
  { Name: "Jose Geraldo Pereira (online)", Affiliation: "IFT - UNESP" },
  { Name: "Hermano Velten", Affiliation: "UFOP" },
  { Name: "David Wands (online)", Affiliation: "ICG" },
  { Name: "Emmanuel Saridakis", Affiliation: "NOA" },
  { Name: "María José Guzmán", Affiliation: "UT" },
  { Name: "Manuel Gonzalez Espinoza", Affiliation: "UPLA" },
  { Name: "David Choque", Affiliation: "PUCP" },
  { Name: "José Villanueva", Affiliation: "UV" },
  { Name: "Bivudutta Mishra", Affiliation: "BITS" },
  { Name: "Nelson Videla", Affiliation: "PUCV" },
  { Name: "Pedro Labraña", Affiliation: "UBB" },
  { Name: "Milko Estrada", Affiliation: "UCSH" },
  { Name: "Diego Molina", Affiliation: "UNAP" },
  { Name: "Joel Saavedra", Affiliation: "PUCV" },
  { Name: "Pedro Alvarez", Affiliation: "USS" },
  { Name: "Jose Thomas Galves Ghersi", Affiliation: "UTEC" },
  { Name: "Victor Cardenas", Affiliation: "UV" },
  { Name: "Graeme Candlish", Affiliation: "UV" },
  { Name: "Francisco Tello Ortiz", Affiliation: "UFRO" },
  { Name: "Vesselin Gueroguiev", Affiliation: "IAPS" },
  { Name: "José Arbañil Vela", Affiliation: "UPN - UNMSM" },
  { Name: "Mauricio Valenzuela", Affiliation: "USS" },
  { Name: "Valeriy Dvoeglazov", Affiliation: "UAZ" },
  { Name: "Almeira Sampson", Affiliation: "USS" },
  { Name: "Omar valdivia", Affiliation: "ICEN - UNAP" },
  { Name: "Andrés Burton Villalobos", Affiliation: "UTA" },
  { Name: "Fabián Trigo", Affiliation: "UTA - ULS - UV" },
  { Name: "Greco Alejandro Peña", Affiliation: "UV" },
  { Name: "Rahul Thakur", Affiliation: "IISERB" },
  { Name: "Gabriela Conde Saavedra", Affiliation: "INPE" },
  { Name: "Rahul Bhagat", Affiliation: "BITS" },
  { Name: "Amarkumar Agrawal (online)", Affiliation: "UTA" },
  { Name: "Oriana Labrin", Affiliation: "PUCV" },
  { Name: "Shubham Narawade", Affiliation: "BITS" },
  { Name: "Diego Navia Rojas", Affiliation: "UTA" },
  { Name: "Diego Fonesca Moreno", Affiliation: "UNAL" },
  { Name: "Lokesh Kumar Duchaniya", Affiliation: "BITS" },
  { Name: "Juan Cabello", Affiliation: "UCh" },
  { Name: "Francisco Plaza", Affiliation: "UBA" },
  { Name: "Matías Leizerovich", Affiliation: "UBA" },
  { Name: "Siddheshwar A. Kadam", Affiliation: "BITS" },
  { Name: "Khalil El Bourakadi", Affiliation: "UTA" },
  { Name: "Kin-ya Oda", Affiliation: "" },
  { Name: "Manuel Alva Morales", Affiliation: "UNT" },
  { Name: "Bastián Espinoza Leal", Affiliation: "UTA" },
  { Name: "Rodrigo Reyes Pizarro", Affiliation: "UTA" },
  { Name: "Francis Vicencio", Affiliation: "UTA" },
  { Name: "Andrés Diaz", Affiliation: "UNT" },
  { Name: "Iván Vásquez Ordóñez", Affiliation: "UA" },
  { Name: "Daniel Pino", Affiliation: "UDEC" },
  { Name: "Loreto Osorio Navarro", Affiliation: "PUCV" },
  { Name: "Gustavo Concha", Affiliation: "UNMSM" },
  { Name: "Joaquin Robledo", Affiliation: "UTA-ULS-UV" },
  { Name: "Jherson Miguel Herrera", Affiliation: "UNT" },
  { Name: "Kevin Josue Escalante Ledesma", Affiliation: "UNI" },
  { Name: "Johor David Peñalba Quispitupa", Affiliation: "UNI" },
  { Name: "Joaquin Chadicov", Affiliation: "UDELAR" },
  { Name: "Abhishek Rajak", Affiliation: "QMUL" },
  { Name: "Carlos Leiva", Affiliation: "UTA" },
  { Name: "Yoesly Leyva", Affiliation: "UTA" },
  { Name: "Carlos Rodríguez", Affiliation: "UNT" },
  { Name: "Carlos Mall", Affiliation: "UTA" },
  { Name: "Stone Silva", Affiliation: "UTA" },
  { Name: "Wilson Marin", Affiliation: "UTA" },
  { Name: "Nicolás Valderrama", Affiliation: "UTA" },
  { Name: "Matiás Pallauta", Affiliation: "UTA" },
  { Name: "Fabian Huaman Avalos", Affiliation: "PUCP" },
  { Name: "Johan Casimiro", Affiliation: "PUCP" },
  { Name: "Yemile Quispe Choque", Affiliation: "UNJBG" },
  { Name: "Guiller Espinoza", Affiliation: "UNI" },
  { Name: "Kevin Mejia", Affiliation: "UNI" },
  { Name: "Soham Maity", Affiliation: "IISERM" },
  { Name: "Richard Avalos", Affiliation: "UNMSM" },
  { Name: "Kevin Paredes Gonzalez", Affiliation: "UNT" },
  { Name: "Cristian Gonzalez Arroyo", Affiliation: "UNT" },
  { Name: "Matias Cuba Jiménez", Affiliation: "UNT" },
  { Name: "Aldo Arce Santa Cruz", Affiliation: "UNT" },
  { Name: "Joel Caballero Ávila", Affiliation: "UNT" },
  { Name: "Ana belen de los Angeles", Affiliation: "UNT" },
  { Name: "Andrea Palacios Mendoza", Affiliation: "UNT" },
  { Name: "Yoryeth Ramos", Affiliation: "UNT" }
];

