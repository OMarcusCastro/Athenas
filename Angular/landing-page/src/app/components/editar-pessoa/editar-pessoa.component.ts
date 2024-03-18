import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pessoa } from '../../interfaces/pessoa.interface';

@Component({
  selector: 'editar-pessoa',
  standalone: true,

  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.scss']
})
export class EditarPessoaComponent {
  pessoa: Pessoa;

  constructor(
    public dialogRef: MatDialogRef<EditarPessoaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Pessoa
  ) {
    this.pessoa = { ...data }; // Clonar os dados recebidos para evitar modificação direta
  }

  Excluir(): void {
    // Lógica para excluir a pessoa (opcional)
    this.dialogRef.close('excluir');
  }

  editarPessoa(): void {
    // Lógica para editar a pessoa
    this.dialogRef.close(this.pessoa);
  }

  Calcular(): void {
    // Lógica para calcular (opcional)
  }
}
