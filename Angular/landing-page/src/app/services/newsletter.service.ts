import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsletterResponse } from '../interfaces/newsletter.interface';



@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  private endpointUrl="http://127.0.0.1:8000/pessoa/";


  constructor(private http:HttpClient) {
  }

  sendData(nome:string, data:string,cpf:string,peso:number,altura:number,sexo:string):Observable<NewsletterResponse>{
    const data_response= {"pNome":nome,"pData":data,"pCPF":cpf,"pAltura":altura,
    "pPeso":peso,"pSexo":sexo}
    console.log(data_response)


    return this.http.post<NewsletterResponse>(this.endpointUrl, data_response)
  }
}
