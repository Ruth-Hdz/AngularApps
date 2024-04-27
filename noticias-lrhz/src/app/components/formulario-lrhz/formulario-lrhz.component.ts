import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lrhz-formulario-lrhz',
  templateUrl: './formulario-lrhz.component.html',
  styleUrls: ['./formulario-lrhz.component.css']
})
export class FormularioLrhzComponent implements OnInit{
  
  @Output() parametrosSeleccionados =new EventEmitter<any>()

  categoriaSeleccionada = 'general';

  paisSeleccionado = 'mx';

  categorias:any[]=[
    {value:'general', nombre:'General'},
    {value:'bussines', nombre:'Negocios'},
    {value:'entertaiments', nombre:'Entretenimiento'},
    {value:'health', nombre:'Salud'},
    {value:'science', nombre:'Ciencia'},
    {value:'sports', nombre:'Deportes'},
    {value:'tecnology', nombre:'Tecnologia'},


  ];
  paises:any[]=[
    {value:'mx', nombre:'Mexico'},
    {value:'ar', nombre:'Argentina'},
    {value:'br', nombre:'Brasil'},
    {value:'Fr', nombre:'Francia'},
    {value:'Hu', nombre:'Hungria'},
    {value:'gb', nombre:'Reino unido'},

  ];
  constructor(){

  }
  ngOnInit(): void {
  }
  
  buscadorNoticias(){
    const PARAMETROS = {
     categoria: this.categoriaSeleccionada,    
     pais: this.paisSeleccionado
    }
    this.parametrosSeleccionados.emit(PARAMETROS)
  }

}
