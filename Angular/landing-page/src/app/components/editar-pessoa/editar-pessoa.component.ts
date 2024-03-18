import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pessoa, PessoaComId } from '../../interfaces/pessoa.interface';
import { NewsletterService } from '../../services/newsletter.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'editar-pessoa',
  standalone: true,
  imports:[ReactiveFormsModule,RouterOutlet,CommonModule],
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.scss']
})


export class EditarPessoaComponent {
  pessoaForm: FormGroup;
  pesoIdeal: string | undefined;

  constructor(
    public dialogRef: MatDialogRef<EditarPessoaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PessoaComId,
    private router: Router,
    private fb: FormBuilder,
    private service : NewsletterService,

  ) {
    this.pessoaForm = this.fb.group({
      id: [this.data.id, Validators.required], // Inclua a inicialização para o campo id
      pNome: [this.data.pNome, Validators.required],
      pData: [this.data.pData, Validators.required],
      pCPF: [this.data.pCPF, Validators.required],
      pAltura: [this.data.pAltura, Validators.required],
      pPeso: [this.data.pPeso, Validators.required],
      pSexo: [this.data.pSexo, Validators.required]
    });
  }




  Excluir(): void {
    this.service.deletePessoa(this.data.id).subscribe({
      next: () => {
        console.log('Pessoa excluída com sucesso!');

        this.dialogRef.close();
      },
      error: (error) => {
        console.error('Erro ao excluir pessoa:', error);
        // Adicione lógica para exibir uma mensagem de erro ao usuário
      }
    });
  window.location.reload();
  //  this.router.navigate(['/']);
  }

  editarPessoa(): void {
    if (this.pessoaForm.valid) {
      const pessoaAtualizada: Pessoa = this.pessoaForm.value;
      console.log('Pessoa atualizada:', this.pessoaForm.getRawValue());
      this.service.updatePessoa(pessoaAtualizada).subscribe({
        next: () => {
          console.log('Pessoa atualizada com sucesso!');
          this.dialogRef.close();
        },
        error: (error) => {
          console.error('Erro ao atualizar pessoa:', error);
          // Adicione lógica para exibir uma mensagem de erro ao usuário
        }
      });
    } else {
      console.error('Formulário inválido. Verifique os campos.');
      // Adicione lógica para exibir uma mensagem ao usuário informando que o formulário está inválido
    }

  }

  Calcular(): void {
    this.service.calculaPesoIdeal(this.data.id).subscribe({

      next: (response) => {
        console.log('Peso ideal calculado:', response);
        this.pesoIdeal =response.peso_ideal;
        // Adicione lógica para exibir o peso ideal ao usuário
      },
      error: (error) => {
        console.error('Erro ao calcular peso ideal:', error);
        // Adicione lógica para exibir uma mensagem de erro ao usuário
      }
    });
  }
}
