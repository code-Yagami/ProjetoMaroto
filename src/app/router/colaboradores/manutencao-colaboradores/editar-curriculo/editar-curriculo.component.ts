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
    { id: 'personal-data', label: 'Dados Pessoais', link: '/dados-pessoais' },
    { id: 'financial-data', label: 'Dados Financeiros', link: 'dados-financeiros'  },
    { id: 'languages', label: 'Idiomas', link: ''  },
    { id: 'positions', label: 'Cargos Pretendidos', link: 'cargos'  },
    { id: 'previous-employment', label: 'Emprego Anteriores', link: ''  },
    { id: 'skills', label: 'Conhecimentos Específicos', link: ''  },
    { id: 'search-employees', label: 'Pesquisar Colaboradores', link: ''  },
    { id: 'education', label: 'Escolaridade', link: ''  },
    { id: 'courses', label: 'Cursos', link: ''  },
    { id: 'mini-cv', label: 'Mini-Currículo', link: ''  },
    { id: 'certifications', label: 'Certificações' , link: '' },
    { id: 'upload-cv', label: 'Anexar Currículo', link: ''  }
  ];

}
