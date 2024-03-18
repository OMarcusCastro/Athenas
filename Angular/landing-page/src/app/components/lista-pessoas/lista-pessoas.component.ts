import { Component, Input } from '@angular/core';
import { Pessoa } from '../../interfaces/pessoa.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lista-pessoas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-pessoas.component.html',
  styleUrl: './lista-pessoas.component.scss'
})
export class ListaPessoasComponent {
  @Input() pessoas: Pessoa[] = [];


}
