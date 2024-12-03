import { Component } from '@angular/core';
import { CardComponent } from "../../../../components/form-components/card/card.component";
import { NavTabsComponent, Tab } from '../../../../components/form-components/nav-tabs/nav-tabs.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-curriculo',
  standalone: true,
  imports: [CardComponent, NavTabsComponent, CommonModule],
  templateUrl: './editar-curriculo.component.html',
  styleUrl: './editar-curriculo.component.scss'
})
export class EditarCurriculoComponent {

  tabs: Tab[] = [
    { id: 'personal-data', label: 'Dados Pessoais' },
    { id: 'financial-data', label: 'Dados Financeiros' },
    { id: 'languages', label: 'Idiomas' },
    { id: 'positions', label: 'Cargos Pretendidos' },
    { id: 'previous-employment', label: 'Emprego Anteriores' },
    { id: 'skills', label: 'Conhecimentos Específicos' },
    { id: 'search-employees', label: 'Pesquisar Colaboradores' },
    { id: 'education', label: 'Escolaridade' },
    { id: 'courses', label: 'Cursos' },
    { id: 'mini-cv', label: 'Mini-Currículo' },
    { id: 'certifications', label: 'Certificações' },
    { id: 'upload-cv', label: 'Anexar Currículo' }
  ];

}
