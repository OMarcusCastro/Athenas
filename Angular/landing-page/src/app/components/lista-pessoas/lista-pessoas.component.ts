import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import {AnimateModule} from 'primeng/animate';
import { Pessoa } from '../../interfaces/pessoa.interface';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'lista-pessoas',
  standalone: true,
  imports: [TableModule,ToastModule,CommonModule,InputTextModule,FormsModule,AnimateModule],
  providers: [],
  templateUrl: './lista-pessoas.component.html',
  styleUrl: './lista-pessoas.component.scss'
})
export class ListaPessoasComponent {
  @Input() pessoas:Pessoa[]=[];
}
