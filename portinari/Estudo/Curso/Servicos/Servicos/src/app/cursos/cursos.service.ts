import { Injectable } from '@angular/core';

@Injectable()

export class CursosService{

    private cursos: string[] = ['Java', 'Angular', 'PhoneGap'];
    constructor(){
        console.log("Teste");
    }
    getCursos(){
      return this.cursos;
    }

    addCurso(curso: string){
        this.cursos.push(curso);

    }

}