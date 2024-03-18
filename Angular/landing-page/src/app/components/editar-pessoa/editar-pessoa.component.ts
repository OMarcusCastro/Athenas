import { Component, Inject, Injectable } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pessoa, PessoaComId } from '../../interfaces/pessoa.interface';
import { NewsletterService } from '../../services/newsletter.service';

@Component({
  selector: 'editar-pessoa',
  standalone: true,
  imports:[],
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.scss']
})



export class EditarPessoaComponent {
  pessoa: Pessoa;

  constructor(
    public dialogRef: MatDialogRef<EditarPessoaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Pessoa,
    private newsletterService: NewsletterService // Injete o NewsletterService no construtor
  ) {
    this.pessoa = { ...data }; // Clonar os dados recebidos para evitar modificação direta
  }

  Excluir(): void {
    // Lógica para excluir a pessoa (opcional)
    this.dialogRef.close('excluir');
  }

  editarPessoa(): void {
    // Lógica para editar a pessoa
    this.newsletterService.updatePessoa(this.pessoa).subscribe({
      next: () => {
        console.log('Pessoa atualizada com sucesso!');
        this.dialogRef.close(); // Feche o diálogo após a edição bem-sucedida
      },
      error: (error) => {
        console.error('Erro ao atualizar pessoa:', error);
        // Lógica para lidar com o erro (opcional)
      }
    });
  }

  Calcular(): void {
    // Lógica para calcular (opcional)
  }
}
