import { Component, OnInit } from "@angular/core";
import { RegisterService } from "src/app/services/register.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
})
export class RegisterComponent implements OnInit {

  nombres:string;
  apellidos:string;
  correo:string;
  codigo:string;
  password:string;

  constructor(private registroService: RegisterService) { }

  ngOnInit(): void {}

  registrar(){

    let user = {
      nombres: this.nombres,
      apellidos: this.apellidos,
      correo: this.correo,
      codigo: this.codigo,
      clave: this.password
    }

    this.registroService.registrar(user).subscribe(data => {
      
      console.log(data);
      //location.pathname = '';

    }, err => {
      
      alert('Ha ocurrido un error');
     });

  }
}
