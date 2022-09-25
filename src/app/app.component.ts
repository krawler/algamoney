import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'algamoney';

  lancamentos = [
    {tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '30/08/2022', 
     dataPagamento : null, valor: 4.55, pessoa: 'Padaria do José'},
     {tipo: 'DESPESA', descricao: 'Conta de luz', dataVencimento: '24/08/2022', 
     dataPagamento : null, valor: 44.95, pessoa: 'Companhia de luz e força'}
  ]
}
