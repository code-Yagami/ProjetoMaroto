import { Component, ViewChild } from '@angular/core';
import { NgFor } from '@angular/common';
import { CardComponent } from '../../../components/form-components/card/card.component';
import { InputComponentComponent } from "../../../components/form-components/input-component/input-component.component";
import { SelectComponentComponent } from "../../../components/form-components/select-component/select-component.component";
import { FormsModule } from '@angular/forms';
import { DataComponentComponent } from "../../../components/form-components/data-component/data-component.component";
import { ButtonComponentComponent } from "../../../components/form-components/button-component/button-component.component";
import { InteractiveTableComponentComponent } from "../../../components/form-components/interactive-table-component/interactive-table-component.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-manutencao-colaboradores',
  standalone: true,
  imports: [InputComponentComponent, NgFor, RouterLink, SelectComponentComponent, FormsModule, DataComponentComponent, ButtonComponentComponent, InteractiveTableComponentComponent,CardComponent],
  templateUrl: './manutencao-colaboradores.component.html',
  styleUrl: './manutencao-colaboradores.component.scss'
})
export class ManutencaoColaboradoresComponent {
  statusSelecionado: string = "";
  cidadeSelecionada: string = "";
  hierarquiaSelecionada: string = "";
  centroSelecionado: string = "";
  projetoSelecionado: string = "";
  dataInicioSelecionada: string = '';
  dataFimSelecionada: string = "";
  selectedDate: string | null = null;

  router: any;

  openNovo() {
    this.router.navigate(['/pderp/colaboradores/manutencao-colaboradores/novo-colaborador']);  }

  @ViewChild('dataInicio') dataInicio!: DataComponentComponent;
  @ViewChild('dataFim') dataFim!: DataComponentComponent;


  onDataInicio(date: string) {
    this.dataInicioSelecionada = date;
  }

  onDataFim(date: string) {
    this.dataFimSelecionada = date;
  }

  selecionaStatus(status: string){ this.statusSelecionado = status; };

  selecionaCidade(cidade: string){ this.cidadeSelecionada = cidade; };

  selecionaHierarquia(hierarquia: string){ this.hierarquiaSelecionada = hierarquia; };

  selecionaCentro(centro: string) { this.centroSelecionado = centro; };

  selecionaProjeto(projeto: string) { this.projetoSelecionado = projeto };

  listaCentroCusto = [
    "PD\\",
    "PD\\DRO-01\\",
    "PD\\DRO-01\\AL\\",
    "PD\\DRO-01\\AL\\SEFAZ-AL\\"
  ];

  listaCidade = [
    "Belém",
    "São Paulo",
    "Rio de Janeiro",
    "São Luiz",
    "Belo Horizonte"
  ];

  listaHieraquias = [
    'Empresa',
    'Diretoria',
    'Gerencia',
    'Coordenação',
    'Gerencia Regional',
  ]

  listaProjetos = [
    'Mercantil',
    'TACON - TACON/TACON',
    'Fabrica de Software',
    'Auditoria Eletronica'
  ]

  dadosTabela = [
    { aniversario: '01/01/1980', nome: 'João Silva', email: 'joao@email.com', centroDeCusto: 'RH', cidade: 'São Paulo' },
    { aniversario: '15/07/1992', nome: 'Maria Santos', email: 'maria@email.com', centroDeCusto: 'TI', cidade: 'Rio de Janeiro' },
    { aniversario: '12/03/1985', nome: 'Carlos Pereira', email: 'carlos@email.com', centroDeCusto: 'Financeiro', cidade: 'Belo Horizonte' },
    { aniversario: '20/05/1990', nome: 'Ana Oliveira', email: 'ana@email.com', centroDeCusto: 'Vendas', cidade: 'Curitiba' },
    { aniversario: '10/09/1988', nome: 'Pedro Souza', email: 'pedro@email.com', centroDeCusto: 'Marketing', cidade: 'Salvador' },
    { aniversario: '25/12/1995', nome: 'Juliana Andrade', email: 'juliana@email.com', centroDeCusto: 'TI', cidade: 'Florianópolis' },
    { aniversario: '08/06/1983', nome: 'Roberto Lima', email: 'roberto@email.com', centroDeCusto: 'RH', cidade: 'Recife' },
    { aniversario: '30/11/1979', nome: 'Fernanda Costa', email: 'fernanda@email.com', centroDeCusto: 'Administração', cidade: 'Fortaleza' },
    { aniversario: '19/04/1998', nome: 'Bruno Teixeira', email: 'bruno@email.com', centroDeCusto: 'Logística', cidade: 'Porto Alegre' },
    { aniversario: '22/07/1987', nome: 'Larissa Melo', email: 'larissa@email.com', centroDeCusto: 'Financeiro', cidade: 'Manaus' },
    { aniversario: '17/02/1991', nome: 'Ricardo Alves', email: 'ricardo@email.com', centroDeCusto: 'Compras', cidade: 'São Luís' },
    { aniversario: '05/08/1989', nome: 'Marcela Souza', email: 'marcela@email.com', centroDeCusto: 'RH', cidade: 'João Pessoa' },
    { aniversario: '11/11/1984', nome: 'André Gomes', email: 'andre@email.com', centroDeCusto: 'Vendas', cidade: 'Maceió' },
    { aniversario: '03/03/1993', nome: 'Paula Vieira', email: 'paula@email.com', centroDeCusto: 'TI', cidade: 'Natal' },
    { aniversario: '28/10/1986', nome: 'Leonardo Martins', email: 'leonardo@email.com', centroDeCusto: 'Marketing', cidade: 'Belém' },
    { aniversario: '09/09/1997', nome: 'Tatiane Rocha', email: 'tatiane@email.com', centroDeCusto: 'Administração', cidade: 'Campo Grande' },
    { aniversario: '06/12/1982', nome: 'Eduardo Nunes', email: 'eduardo@email.com', centroDeCusto: 'Logística', cidade: 'Goiânia' },
    { aniversario: '14/01/1990', nome: 'Camila Monteiro', email: 'camila@email.com', centroDeCusto: 'Financeiro', cidade: 'Brasília' },
    { aniversario: '02/02/1981', nome: 'Vinícius Freitas', email: 'vinicius@email.com', centroDeCusto: 'Compras', cidade: 'Aracaju' },
    { aniversario: '27/05/1994', nome: 'Isabela Farias', email: 'isabela@email.com', centroDeCusto: 'TI', cidade: 'Cuiabá' }
  ];

  itensPorPagina = 5;
  paginaAtual = 1;

  Math = Math;

  get dadosPaginados() {
    const inicio = (this.paginaAtual - 1) * this.itensPorPagina;
    const fim = inicio + this.itensPorPagina;
    return this.dadosTabela.slice(inicio, fim);
  }

  alterarPagina(novaPagina: number) {
    this.paginaAtual = novaPagina;
  }

  onVisualizar(item: any): void {
    console.log('Visualizar:', item);

  }

  onEditar(item: any): void {
    console.log('Editar:', item);

  }

  handleDateChange(newDate: string) {
    console.log('Selected date:', newDate);
    this.selectedDate = newDate;
  }
}
