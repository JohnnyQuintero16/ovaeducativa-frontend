import { Component, OnInit } from "@angular/core";
import { RegisterService } from "src/app/services/register.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
})
export class RegisterComponent implements OnInit {

  newUsuarioForm: FormGroup;

  constructor(private registroService: RegisterService,
    private formBuilder: FormBuilder) { 
      this.newUsuarioForm = this.formBuilder.group({
        nombres: ['', Validators.required],
        apellidos: ['', Validators.required],
        correo: ['', Validators.required],
        codigo: ['', Validators.required],
        password: ['', Validators.required]
      })
  }

  ngOnInit(): void {}

  registrar(){

      if(this.newUsuarioForm.status == "VALID"){
        let user = {
          nombre: this.newUsuarioForm.get('nombres').value,
          apellido: this.newUsuarioForm.get('apellidos').value,
          email: this.newUsuarioForm.get('correo').value,
          codigo: this.newUsuarioForm.get('codigo').value,
          clave: this.newUsuarioForm.get('password').value
        }
    
        console.log(user)
    
        this.registroService.registrar(user).subscribe(data => {
          
          Swal.fire({
            title: "Procesando datos, un momento...",
            timer: 2000,
            didOpen: () =>{
              Swal.showLoading(null);
            }
          }).then((data) => {
            Swal.fire({
              title: "Registro exitoso",
              icon: "success",
              confirmButtonColor: "green"
            }).then((data) => {
              if(data.isConfirmed){
                location.pathname = '/auth/login';
              }
            })
          });
    
        }, err => {
    
            Swal.fire({
              title: "Ha ocurrido un error",
              text: "Por favor verifica los datos",
              icon: "error"
            })
    
         });
      }else{
        Swal.fire({
          title: "Ha ocurrido un error",
          text: "Por favor verifica los datos",
          icon: "error"
        })
      }

  }
}
