import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from "../../../components/header/header.component";
import { InputComponentComponent } from "../../../components/form-components/input-component/input-component.component";
import { SelectComponentComponent } from "../../../components/form-components/select-component/select-component.component";
import { FormsModule } from '@angular/forms';
import { DataComponentComponent } from "../../../components/form-components/data-component/data-component.component";
import { ButtonComponentComponent } from "../../../components/form-components/button-component/button-component.component";
import { InteractiveTableComponentComponent } from "../../../components/form-components/interactive-table-component/interactive-table-component.component";

@Component({
  selector: 'app-manutencao-colaboradores',
  standalone: true,
  imports: [HeaderComponent, InputComponentComponent, SelectComponentComponent, FormsModule, DataComponentComponent, ButtonComponentComponent, InteractiveTableComponentComponent],
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

  //  ## TRABALHANDO COM DATA ##
  @ViewChild('dataInicio') dataInicio!: DataComponentComponent;
  @ViewChild('dataFim') dataFim!: DataComponentComponent;


  onDataInicio(date: string) {
    this.dataInicioSelecionada = date;
  }

  onDataFim(date: string) {
    this.dataFimSelecionada = date;
  }


  // ## METODOS QUE ATRIBUEM OS VALORES DO SELECT ##
  selecionaStatus(status: string){ this.statusSelecionado = status; };

  selecionaCidade(cidade: string){ this.cidadeSelecionada = cidade; };

  selecionaHierarquia(hierarquia: string){ this.hierarquiaSelecionada = hierarquia; };

  selecionaCentro(centro: string) { this.centroSelecionado = centro; };

  selecionaProjeto(projeto: string) { this.projetoSelecionado = projeto };



  // ## METODO QUE PESQUISA ##
  onPesquisar() {
    // Acessando o método getDate do componente filho para obter o valor da data
    this.dataInicio.getDate(); // Enviar valor para o componente pai
    this.dataFim.getDate(); // Enviar valor para o componente pai

    console.log(this.dataInicioSelecionada)
    console.log(this.dataFimSelecionada)
  }




    // ## LISTAS MOCKADAS ##

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



  // ## TRABALHANDO COM A TABELA ##
  dadosTabela = [
    { aniversario: '01/01', nome: 'João Silva', email: 'joao@email.com', centroDeCusto: 'Financeiro', cidade: 'São Paulo' },
    { aniversario: '02/02', nome: 'Maria Oliveira', email: 'maria@email.com', centroDeCusto: 'RH', cidade: 'Rio de Janeiro' },
  ];

  onVisualizar(item: any): void {
    console.log('Visualizar:', item);
    // Adicione a lógica de visualização aqui
  }

  onEditar(item: any): void {
    console.log('Editar:', item);
    // Adicione a lógica de edição aqui
  }
}
