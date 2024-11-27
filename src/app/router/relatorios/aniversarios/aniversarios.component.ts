import { Component } from '@angular/core';
import { InputComponentComponent } from "../../../components/form-components/input-component/input-component.component";
import { ButtonComponentComponent } from "../../../components/form-components/button-component/button-component.component";
import { CardComponent } from "../../../components/form-components/card/card.component";

@Component({
  selector: 'app-aniversarios',
  standalone: true,
  imports: [InputComponentComponent, InputComponentComponent, ButtonComponentComponent, CardComponent],
  templateUrl: './aniversarios.component.html',
  styleUrl: './aniversarios.component.scss'
})
export class AniversariosComponent {

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

}
