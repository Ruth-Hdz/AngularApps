import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lrhz-listado-noticias-lrhz',
  templateUrl: './listado-noticias-lrhz.component.html',
  styleUrls: ['./listado-noticias-lrhz.component.css']
})
export class ListadoNoticiasLrhzComponent implements OnInit {
  
  @Input() listNoticias:any;
  ngOnInit(): void {
  }

}
