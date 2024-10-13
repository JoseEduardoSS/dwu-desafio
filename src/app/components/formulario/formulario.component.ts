import {Component} from '@angular/core';
import {Pessoa} from '../../models/pessoa.model';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  pessoa: Pessoa = new Pessoa();

  onSubmit() {
    console.log(this.pessoa);
    this.pessoa = new Pessoa();
  }
}
