import { Component } from '@angular/core';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
   constructor(
  private router: Router
  ){}

  showNewHeader(){
    if(this.router.url==='/signup') {
      return true;
    } else {
      return false;
    }
  }
}
