import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { IContato } from '../../modelo/contato.model';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private dbPath = "/contatos";
  contatosRef: AngularFireList<any>;
  constructor(private db: AngularFireDatabase) { 
    this.contatosRef = db.list(this.dbPath);
   }

   getAllContato() {
    return this.contatosRef;
    }

    getContato(id: string) {
      return this.db.object(`${this.dbPath}/${id}`);
    }

    updateContato(id: string, contato: IContato) {
      return this.contatosRef.update(id, contato);
    }

    deleteContato(id: string) {
      return this.contatosRef.remove(id);
    }

    addContato(contato: IContato) {
      this.contatosRef.push(contato);
    }
}
