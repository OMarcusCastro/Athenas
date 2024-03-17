import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsletterResponse } from '../interfaces/newsletter.interface';



@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  private endpointUrl="https://faed47pcwb7biktidlecuafuty0aegep.lambda-url.us-east-1.on.aws/";


  constructor(private http:HttpClient) {
  }

  sendData(name:string, data:string,cpf:string,peso:number,altura:number,sexo:string):Observable<NewsletterResponse>{
    const data_response= {name,data,cpf,altura,peso,sexo}
    return this.http.post<NewsletterResponse>(this.endpointUrl, data_response)
  }
}
