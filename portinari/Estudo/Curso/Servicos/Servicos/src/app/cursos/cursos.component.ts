import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  //cursosSerivce: CursosService;

  constructor(private cursosSerivce: CursosService ) { 
    //this.cursosSerivce = _cursosSerivce;
    //this.cursosSerivce = new CursosService();
  }

  ngOnInit() {
    this.cursos = this.cursosSerivce.getCursos();

  }

}
