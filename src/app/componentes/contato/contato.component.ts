import { ContatoService } from './../service/contato.service';
import { Component, OnInit } from '@angular/core';
import { IContato } from '../../modelo/contato.model';
import { from } from 'rxjs';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  contatos: IContato[] = [];
  contatoToEdit: IContato = { id: '', nome: '', contato: '' };
  mostrarEdicao: boolean = false;;
  

  constructor(private contatoService: ContatoService) { }

  ngOnInit() {
    this.getAllContato();
    }

    getAllContato() {
      this.contatoService.getAllContato().snapshotChanges().subscribe({
        next: (contatos) => {
          this.contatos = [];

          contatos.forEach((item) => {
            let contato = item.payload.toJSON() as IContato;
            this.contatos.push({
              id: item.key || '',
              nome: contato.nome,
              contato: contato.contato
            
            })

          })
        },
      });
      
    }

    deleteContato(id: string) {
      this.contatoService.deleteContato(id);
    }


    editContato(id: string) {;
      if (this.contatoToEdit) {
        this.mostrarEdicao = !this.mostrarEdicao;
      }
    }
    
    salvarContato(contato: IContato) {
      if (this.contatoToEdit) {
        from(this.contatoService.updateContato(this.contatoToEdit.id, contato)).subscribe(() => {
          let index = this.contatos.findIndex(c => c.id === this.contatoToEdit.id);
          this.contatos[index] = { ...this.contatoToEdit, ...contato };
          this.contatoToEdit = {} as IContato;
          this.mostrarEdicao = false;
        });
      }
    }

    cancelar() {
      
      this.mostrarEdicao = false;
    }
  }

