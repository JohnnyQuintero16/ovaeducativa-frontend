import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/services/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {

  correo:string;
  password:string;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}


  logear(){
    let user = {
      correo: this.correo,
      clave: this.password,
    }

    this.loginService.login(user).subscribe(data => {
      localStorage.setItem('usuario', JSON.stringify(data));
      //localStorage.getItem('usuario') meterlo en un json parse al imprimir
      //https://itelisoft.com/como-utilizar-el-localstorage-en-angula/
      location.pathname = '';
    },
    err =>{
      console.log(err)
    }
    )
  }

}
