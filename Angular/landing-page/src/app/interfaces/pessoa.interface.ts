export interface Pessoa{
  pNome:string;
  pData:string;
  pCPF:string;
  pAltura:number;
  pPeso:number;
  pSexo:string;
}


export interface PessoaComId extends Pessoa {
   id: number;
}
