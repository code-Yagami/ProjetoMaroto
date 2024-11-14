import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from "../../../components/header/header.component";
import { InputComponentComponent } from "../../../components/form-components/input-component/input-component.component";
import { SelectComponentComponent } from "../../../components/form-components/select-component/select-component.component";
import { FormsModule } from '@angular/forms';
import { DataComponentComponent } from "../../../components/form-components/data-component/data-component.component";
import { ButtonComponentComponent } from "../../../components/form-components/button-component/button-component.component"; // Importar FormsModule

@Component({
  selector: 'app-manutencao-colaboradores',
  standalone: true,
  imports: [HeaderComponent, InputComponentComponent, SelectComponentComponent, FormsModule, DataComponentComponent, ButtonComponentComponent],
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
  // Usando ViewChild para acessar os dois componentes de data
  @ViewChild('dataInicio') dataInicio!: DataComponentComponent;
  @ViewChild('dataFim') dataFim!: DataComponentComponent;

  // Função para capturar o valor da data emitido pelo componente filho
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
}
