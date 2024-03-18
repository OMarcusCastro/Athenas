import { PessoaComId } from './../../interfaces/pessoa.interface';

import { Component, Input } from '@angular/core';
import { Pessoa } from '../../interfaces/pessoa.interface';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EditarPessoaComponent } from '../editar-pessoa/editar-pessoa.component';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'lista-pessoas',
  standalone: true,
  imports: [CommonModule,MatTableModule,
  MatDialogModule,EditarPessoaComponent,
  MatIconModule],
  templateUrl: './lista-pessoas.component.html',
  styleUrl: './lista-pessoas.component.scss'
})
export class ListaPessoasComponent {
  @Input() pessoas: Pessoa[] = [];

  Columns= ['id','pNome','pPeso','pAltura','pCPF','pSexo', 'pData','editar'];


  constructor(public dialog: MatDialog) {}

  openEditarPessoa(pessoa: PessoaComId): void {
    const dialogRef = this.dialog.open(EditarPessoaComponent, {
      width: '600px',
      data: pessoa
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Atualizar dados da pessoa
        const index = this.pessoas.indexOf(pessoa);
        this.pessoas[index] = result;
      }
    });
  }
}
