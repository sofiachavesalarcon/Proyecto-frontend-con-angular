import { Component } from '@angular/core';
import { FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: [ './nav-bar.component.css'],
})
export class NavBarComponent {
  constructor(private fb: FormBuilder, private router: Router){}

  badgevisible=false;
  badgeVisibility(){
    this.badgevisible = true;
  }

  logout(){
    this.router.navigateByUrl('/home/content');
  }
}
