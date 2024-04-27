import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lrhz-navbar-lrhz',
  templateUrl: './navbar-lrhz.component.html',
  styleUrls: ['./navbar-lrhz.component.css']
})
export class NavbarLrhzComponent {

@Input() titulo: string;

constructor(){
  this.titulo =';'
}
ngOnInit():void{

}
}
