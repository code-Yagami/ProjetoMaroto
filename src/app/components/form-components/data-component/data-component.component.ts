import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-component',
  standalone: true,
  imports: [ CommonModule,FormsModule],
  templateUrl: './data-component.component.html',
  styleUrl: './data-component.component.scss'
})
export class DataComponentComponent {

  @Input() label: string = 'dd/mm/aaaa';
  @Input() selectedDate: string | null = null;
  @Output() selectedDateChange = new EventEmitter<string>();

  onDateChange(newDate: string) {
    this.selectedDateChange.emit(newDate);
  }

}