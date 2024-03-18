import { Component, signal } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { NewsFormComponent } from '../news-form/news-form.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewsletterService } from '../../services/newsletter.service';
// import { ListaPessoasComponent } from '../lista-pessoas/lista-pessoas.component';
import { Pessoa } from '../../interfaces/pessoa.interface';
import { noop } from 'rxjs';
import { ListaPessoasComponent } from '../lista-pessoas/lista-pessoas.component';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    HeaderComponent,
    BtnPrimaryComponent,
    NewsFormComponent,
    CommonModule,
    ReactiveFormsModule,
    ListaPessoasComponent

  ],
  providers: [NewsletterService,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  newsletterForm:FormGroup;
  loading = signal(false);
  loadingSearchByName = (false);
  pessoas:Pessoa[]=[];
  operacao: 'incluir' | 'alterar' | 'pesquisar' | 'excluir' = 'incluir';

  constructor(private service:NewsletterService) {
    this.newsletterForm = new FormGroup({
      nome: new FormControl('',[Validators.required]),
      data: new FormControl('',[Validators.required]),
      cpf: new FormControl('',[Validators.required]),
      altura: new FormControl('',[Validators.required]),
      peso: new FormControl('',[Validators.required]),
      sexo: new FormControl('',[Validators.required]),
    });
  }

  onSubmit(){
    this.operacao = 'incluir'
    this.loading.set(true);
    if(this.newsletterForm.valid){
      this.service.sendData(
        this.newsletterForm.value.nome,
        this.newsletterForm.value.data,
        this.newsletterForm.value.cpf,
        this.newsletterForm.value.peso,
        this.newsletterForm.value.altura,
        this.newsletterForm.value.sexo
        ).subscribe({
        next:() => {
          console.log('Data sent');

          this.newsletterForm.reset();
          this.loading.set(false);
        },
        error:()=>{

          this.loading.set(false);
        }
      })
    }
  }

  onSearch() {
    this.operacao = 'pesquisar'

  }
  onSearchValue(event:any){
    const nome = event.target.value;
    this.service.searchByName(nome).subscribe({

      next: (data) => {
        this.pessoas = data;
        console.log(data);
        this.loadingSearchByName=(true);
      }
    })
  }
}


