import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ContatoService } from '../service/contato.service';


@Component({
  selector: 'app-form-contato',
  templateUrl: './form-contato.component.html',
  styleUrl: './form-contato.component.css',
})
export class FormContatoComponent implements OnInit{
  
  contatoForm!: FormGroup;

  constructor(private fb: FormBuilder, private contatoService: ContatoService) {
    this.contatoForm = this.fb.group({
      nome: new FormControl('', [Validators.required]),
      contato: new FormControl('', [Validators.required, Validators.maxLength(9)]),
    });
  }

  ngOnInit(): void {
    
  }

  getAllContato() {
    this.contatoService.getAllContato().snapshotChanges().subscribe({
      next: (contatos) => {
        console.log(contatos);
      },
    });
    
  }

  addContato() {
    if (this.contatoForm.valid) {
      this.contatoService.addContato(this.contatoForm.value);
      this.contatoForm.reset(); 
    } else {
      alert('Formulário inválido, verifique os campos!');
    }
  
  }

 

  onSubmit() {
    if (this.contatoForm.valid) {
      console.log(this.contatoForm.value);
    } else {
      console.log('Formulário inválido');
    }
  }
}
