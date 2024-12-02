import { Component, ViewChild } from '@angular/core';
import { CardComponent } from '../../../components/form-components/card/card.component';
import { InputComponentComponent } from "../../../components/form-components/input-component/input-component.component";
import { SelectComponentComponent } from "../../../components/form-components/select-component/select-component.component";
import { FormsModule } from '@angular/forms';
import { DataComponentComponent } from "../../../components/form-components/data-component/data-component.component";
import { ButtonComponentComponent } from "../../../components/form-components/button-component/button-component.component";
import { RouterLink } from '@angular/router';
import { TableComponent } from '../../../components/form-components/table/table.component';

@Component({
  selector: 'app-manutencao-colaboradores',
  standalone: true,
  imports: [InputComponentComponent, TableComponent, RouterLink, SelectComponentComponent, FormsModule, DataComponentComponent, ButtonComponentComponent,CardComponent],
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

  tableData = [
    { Colaborador: 'Ana.Silva', CentroDeCusto: 'PD\\', Cidade: 'Belém', DataFim: '', Status: 'Ativo' },
    { Colaborador: 'Bruno.Santos', CentroDeCusto: 'PD\\DRO-01\\', Cidade: 'São Paulo', DataFim: '', Status: 'Ativo' },
    { Colaborador: 'Carlos.Souza', CentroDeCusto: 'PD\\DRO-01\\AL\\', Cidade: 'Rio de Janeiro', DataFim: '', Status: 'Ativo' },
    { Colaborador: 'Daniela.Costa', CentroDeCusto: 'PD\\DRO-01\\AL\\SEFAZ-AL\\', Cidade: 'São Luiz', DataFim: '', Status: 'Ativo' },
    { Colaborador: 'Eduardo.Pereira', CentroDeCusto: 'PD\\', Cidade: 'Belo Horizonte', DataFim: '', Status: 'Ativo' },
    { Colaborador: 'Fernanda.Almeida', CentroDeCusto: 'PD\\DRO-01\\', Cidade: 'Belém', DataFim: '', Status: 'Ativo' },
    { Colaborador: 'Gabriel.Martins', CentroDeCusto: 'PD\\DRO-02\\', Cidade: 'Curitiba', DataFim: '', Status: 'Ativo' },
    { Colaborador: 'Helena.Ramos', CentroDeCusto: 'PD\\DRO-03\\', Cidade: 'Recife', DataFim: '', Status: 'Ativo' },
    { Colaborador: 'Isabela.Andrade', CentroDeCusto: 'PD\\DRO-03\\PE\\', Cidade: 'Porto Alegre', DataFim: '', Status: 'Ativo' },
    { Colaborador: 'João.Costa', CentroDeCusto: 'PD\\DRO-04\\', Cidade: 'Fortaleza', DataFim: '', Status: 'Ativo' },
    { Colaborador: 'Lara.Nogueira', CentroDeCusto: 'PD\\DRO-05\\', Cidade: 'Manaus', DataFim: '', Status: 'Ativo' },
    { Colaborador: 'Marcos.Silva', CentroDeCusto: 'PD\\DRO-05\\AM\\', Cidade: 'Natal', DataFim: '', Status: 'Ativo' },
    { Colaborador: 'Nina.Rocha', CentroDeCusto: 'PD\\DRO-06\\', Cidade: 'Salvador', DataFim: '', Status: 'Ativo' },
    { Colaborador: 'Otávio.Lima', CentroDeCusto: 'PD\\DRO-07\\', Cidade: 'João Pessoa', DataFim: '', Status: 'Ativo' },
    { Colaborador: 'Patrícia.Gomes', CentroDeCusto: 'PD\\DRO-08\\', Cidade: 'Vitória', DataFim: '', Status: 'Ativo' },
    { Colaborador: 'Rafael.Alves', CentroDeCusto: 'PD\\DRO-09\\', Cidade: 'Campo Grande', DataFim: '', Status: 'Ativo' },
    { Colaborador: 'Sofia.Sousa', CentroDeCusto: 'PD\\DRO-10\\', Cidade: 'Florianópolis', DataFim: '', Status: 'Ativo' },
  ];

  
  showEdit = true;
  showDelete = false;
  showView = true;
  editButtonTitle = 'Editar';
  deleteButtonTitle = 'Deletar';
  viewButtonTitle = 'Visualizar';

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
