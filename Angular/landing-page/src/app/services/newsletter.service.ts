import { Pessoa } from './../interfaces/pessoa.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsletterResponse } from '../interfaces/newsletter.interface';


interface PessoaComId extends Pessoa {
  id: number;

}

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  private endpointUrl="http://127.0.0.1:8000/pessoa/";


  constructor(private http:HttpClient) {
  }

  // pessoas?nome=joao
  searchByName(nome:string){
   let params = new HttpParams().set('pNome', nome);

  // Passar os parâmetros na solicitação GET
  return this.http.get<Pessoa[]>(this.endpointUrl, { params: params });
  }

  sendData(nome:string, data:string,cpf:string,peso:number,altura:number,sexo:string):Observable<NewsletterResponse>{
    const data_response= {"pNome":nome,"pData":data,"pCPF":cpf,"pAltura":altura,
    "pPeso":peso,"pSexo":sexo}
    console.log(data_response)


    return this.http.post<NewsletterResponse>(this.endpointUrl, data_response)
  }

  updatePessoa(pessoa:any): Observable<NewsletterResponse> {
    console.log(pessoa)
    return this.http.put<NewsletterResponse>(`${this.endpointUrl}${pessoa.id}/`, pessoa);
  }
}
