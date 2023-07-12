import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
  form_contato = this.form_builder.group({
    nome: ["", [
      Validators.minLength(3),
      Validators.required
    ]],
    assunto: ["", [
      Validators.minLength(4),
      Validators.required
    ]],
    telefone: ["", [
      Validators.minLength(11),
      Validators.required
    ]],
    email: ["", [
      Validators.email,
      Validators.required
    ]],
    mensagem: ["", [
      Validators.minLength(20),
      Validators.required
    ]]
  });

  constructor(private form_builder: FormBuilder) {

  }
  
  enviarFormulario() {
    alert("O formulário foi enviado.");
    this.form_contato.reset();
  }
}
