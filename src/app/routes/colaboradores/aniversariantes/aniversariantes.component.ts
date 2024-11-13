import { Component } from '@angular/core';
import { HeaderComponent } from "../../../components/header/header.component";
import { InputComponentComponent } from "../../../components/form-components/input-component/input-component.component";
import { SelectComponentComponent } from "../../../components/form-components/select-component/select-component.component";
import { ButtonComponentComponent } from "../../../components/form-components/button-component/button-component.component";
import { TableComponentComponent } from "../../../components/form-components/table-component/table-component.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aniversariantes',
  standalone: true,
  imports: [HeaderComponent, InputComponentComponent, SelectComponentComponent, ButtonComponentComponent, TableComponentComponent, CommonModule],
  templateUrl: './aniversariantes.component.html',
  styleUrl: './aniversariantes.component.scss'
})
export class AniversariantesComponent {

  cidadeSelecionada: string | null = "";
  mesSelecionado: string | null = "";
  centroSelecionado: string | null = "";

  selecionaCidade(valor: string) {
    this.cidadeSelecionada = valor;
    console.log("Valor atualizado no componente pai:", this.cidadeSelecionada);
  }

  selecionaMes(valor: string) {
    this.mesSelecionado = valor;
    console.log("Valor atualizado no componente pai:", this.mesSelecionado);
  }

  selecionaCentro(valor: string) {
    this.centroSelecionado = valor;
    console.log("Valor atualizado no componente pai:", this.centroSelecionado);
  }

  listaCidade = [
    "Belém",
    "São Paulo",
    "Rio de Janeiro",
    "São Luiz",
    "Belo Horizonte"
  ]

  listaMes = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ]

  listaCentroCusto = [
    "PD\\",
    "PD\\DRO-01\\",
    "PD\\DRO-01\\AL\\",
    "PD\\DRO-01\\AL\\SEFAZ-AL\\"
  ]

  dadosTabela = [
    { aniversario: '01/11', nome: 'Maria Oliveira Silva', email: 'maria.oliveira@pdcase.com.br', centroDeCusto: 'PDI\\DRO-01\\MG\\PRODFINAN\\', cidade: 'Belo Horizonte' },
    { aniversario: '01/11', nome: 'Carlos Pereira', email: 'carlos.pereira@pdcase.com.br', centroDeCusto: 'PDI\\DRO-01\\MG\\PRODFINAN\\', cidade: "São Luiz" },{ aniversario: '01/11', nome: 'Maria Oliveira', email: 'maria.oliveira@pdcase.com.br', centroDeCusto: 'PDI\\DRO-01\\MG\\PRODFINAN\\', cidade: 'Belo Horizonte' },
    { aniversario: '01/11', nome: 'Carlos Pereira dos Santos Costa', email: 'carlos.pereira@pdcase.com.br', centroDeCusto: "PD\\DRO-01\\", cidade: "São Paulo" },
    { aniversario: '01/11', nome: 'Maria Oliveira', email: 'maria.oliveira@pdcase.com.br', centroDeCusto: 'PDI\\DRO-01\\MG\\PRODFINAN\\', cidade: 'Belo Horizonte' },
    { aniversario: '01/11', nome: 'Carlos Pereira de Paula', email: 'carlos.pereira@pdcase.com.br', centroDeCusto: "PD\\DRO-01\\", cidade: "São Paulo" },
    { aniversario: '01/11', nome: 'Maria Oliveira Silva', email: 'maria.oliveira@pdcase.com.br', centroDeCusto: 'PDI\\DRO-01\\MG\\PRODFINAN\\', cidade: 'Belo Horizonte' },
    { aniversario: '01/11', nome: 'Carlos Pereira', email: 'carlos.pereira@pdcase.com.br', centroDeCusto: 'PDI\\DRO-01\\MG\\PRODFINAN\\', cidade: "São Luiz" },{ aniversario: '01/11', nome: 'Maria Oliveira', email: 'maria.oliveira@pdcase.com.br', centroDeCusto: 'PDI\\DRO-01\\MG\\PRODFINAN\\', cidade: 'Belo Horizonte' },
    { aniversario: '01/11', nome: 'Carlos Pereira dos Santos Costa', email: 'carlos.pereira@pdcase.com.br', centroDeCusto: "PD\\DRO-01\\", cidade: "São Paulo" },
    { aniversario: '01/11', nome: 'Maria Oliveira', email: 'maria.oliveira@pdcase.com.br', centroDeCusto: 'PDI\\DRO-01\\MG\\PRODFINAN\\', cidade: 'Belo Horizonte' },
    { aniversario: '01/11', nome: 'Carlos Pereira de Paula', email: 'carlos.pereira@pdcase.com.br', centroDeCusto: "PD\\DRO-01\\", cidade: "São Paulo" },

  ];



  

}
