import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule], // necessary for router naviguation
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {

}
