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

  usuarios!: any;
  nome!: String
 // public students(): Observable<User>;


  ngOnInit(): void{
   this.usuarios = this.usuarioService.getStudentList();
   }



  deleteUsuario(id: Number){

    this.usuarioService.deletarUsuario(id).subscribe(data =>{
      console.log("Apagado: " + data);

      this.usuarios = this.usuarioService.getStudentList(); //Recarregar lista de usuarios

    });
  }

  consultarUser(){
    this.usuarios = this.usuarioService.consultarUser(this.nome);
  }

  constructor(private usuarioService: UsuarioService){
  }

}
