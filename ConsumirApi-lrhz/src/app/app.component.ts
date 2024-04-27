import { Component, OnInit } from '@angular/core';
import { DigimonesLrhzServices } from './digimones-lrhz/digimones-lrhz.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  digimoneslrhz:any;

  constructor(public digimon:DigimonesLrhzServices){}

  ngOnInit(){
    this.digimon.getDigimoneslrhz().subscribe
    (
      (r)=> {this.digimoneslrhz = r; console.log(r)},
      (e)=> {console.error(e)},

    )
  }
}
