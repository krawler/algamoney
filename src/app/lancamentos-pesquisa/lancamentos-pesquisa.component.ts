import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {

  lancamentos = [
    {tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '30/08/2022',
     dataPagamento : null, valor: 4.55, pessoa: 'Padaria do José'},
     {tipo: 'DESPESA', descricao: 'Conta de luz', dataVencimento: '24/08/2022',
     dataPagamento : null, valor: 44.95, pessoa: 'Companhia de luz e força'},
     {tipo: 'RECEITA', descricao: 'Pagmento Carlos da Cruz', dataVencimento: '02/08/2022',
     dataPagamento : null, valor: 420.55, pessoa: 'Carlos da Cruz'}
  ]

}
