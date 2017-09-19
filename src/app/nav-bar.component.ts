import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  template: `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand text-danger" href="#">{{brand}}</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <div class="navbar-nav">
        <a class="nav-item nav-link" *ngFor="let menu of menus" href="#/{{menu.url}}">{{menu.title}}</a>
      </div>
    </div>
  </nav>
  `,
  styles: []
})
export class NavBarComponent implements OnInit {
  brand: string;
  menus: object[];
  rightMenus: object[];

  ngOnInit() {
    this.brand = 'KPM';
    this.menus = [
      {title: 'Dashboard', url: '/main'},
      {title: 'Login', url: '/login'}
    ];
    this.rightMenus = [
      {title: 'Logoff', url: '/logoff'}
    ];
  }
}