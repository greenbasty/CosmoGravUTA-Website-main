import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import {Router} from '@angular/router'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(
    private router: Router
  ){}



  navigate(){
    console.log("aer");
    this.router.navigate(['/schedule']);
  }
}
