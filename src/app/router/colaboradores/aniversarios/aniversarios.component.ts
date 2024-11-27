interface Anniversary {
  birthday: string;
  fullName: string;
  email: string;
  costCenter: string;
  city: string;
}

const anniversaryData: Anniversary[] = [
  {
      birthday: '01/11',
      fullName: 'Jéssica Espíndola Fontoura',
      email: 'jessica.fontoura@pdcase.com.br',
      costCenter: 'PDI\\DRO-01\\MG\\PRODFINAN\\',
      city: 'Belo Horizonte'
  },
  {
      birthday: '02/11',
      fullName: 'Hernan Verches',
      email: 'hernan.verches@pdcase.com.br',
      costCenter: 'PDI\\DRO-02\\ES\\BANESTES\\',
      city: 'Vitória'
  },
  {
      birthday: '03/11',
      fullName: 'Jackson Willian Silva Agostinho',
      email: 'jackson.agostinho@pdcase.com.br',
      costCenter: 'PDI\\DRO-02\\ES\\BANESTES\\',
      city: 'Vitória'
  },
];

const searchBtn = document.getElementById('search-btn') as HTMLButtonElement;
const anniversaryTableBody = document.querySelector('#anniversary-table tbody') as HTMLTableSectionElement;

searchBtn.addEventListener('click', () => {
  const name = (document.getElementById('name') as HTMLInputElement).value.toLowerCase();
  const city = (document.getElementById('city') as HTMLSelectElement).value;
  const month = (document.getElementById('month') as HTMLSelectElement).value;
  const costCenter = (document.getElementById('cost-center') as HTMLSelectElement).value;

  const filteredData = anniversaryData.filter((data) => {
      return (
          (name === '' || data.fullName.toLowerCase().includes(name)) &&
          (city === 'todos' || data.city.toLowerCase() === city) &&
          (month === 'novembro' || data.birthday.includes(month)) &&
          (costCenter === 'todos' || data.costCenter.includes(costCenter))
      );
  });

  updateTable(filteredData);
});

function updateTable(data: Anniversary[]) {
  anniversaryTableBody.innerHTML = '';

  data.forEach((anniversary) => {
      const row = document.createElement('tr');

      row.innerHTML = `
          <td>${anniversary.birthday}</td>
          <td>${anniversary.fullName}</td>
          <td>${anniversary.email}</td>
          <td>${anniversary.costCenter}</td>
          <td>${anniversary.city}</td>
      `;

      anniversaryTableBody.appendChild(row);
  });
}
updateTable(anniversaryData);
