import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit{


  teste = ['teste', 'louco']
  students!: Observable<User[]>;

  constructor(private usuarioService: UsuarioService){
   }

  ngOnInit(): void {
    this.usuarioService.getStudentList().subscribe(data =>{
      this.students = data;
    });



  }

}
