import { Component, signal } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { Form, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewsletterService } from '../../services/newsletter.service';
import { error } from 'console';

@Component({
  selector: 'newsletter-form',
  standalone: true,
  imports: [
    BtnPrimaryComponent,
    ReactiveFormsModule,

  ],
  providers: [NewsletterService],
  templateUrl: './news-form.component.html',
  styleUrl: './news-form.component.scss'
})
export class NewsFormComponent {

  newsletterForm:FormGroup;
  loading = signal(false);

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


    this.loading.set(true);
    if(this.newsletterForm.valid){
      this.service.sendData(
        this.newsletterForm.value.name,
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
}
