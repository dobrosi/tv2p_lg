import {Component, ElementRef, EventEmitter, inject, Output, ViewChild} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from "@angular/material/autocomplete";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FormsModule,
    MatAutocomplete,
    MatAutocompleteTrigger,
    MatFormField,
    MatInput,
    MatOption,
    ReactiveFormsModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  MAX_SEARCH_SIZE = 10;

  @Output() clicked = new EventEmitter<string>();

  @ViewChild('searchText') searchText!: ElementRef<HTMLInputElement>

  myControl = new FormControl('');

  options: string[] = [];

  startSearch() {
    this.searchText.nativeElement.focus()
  }

  search() {
    let v = this.searchText.nativeElement.value
    this.clicked.emit(v)
    if (this.options.indexOf(v) < 0) {
      this.options.unshift(v)
    }
    if (this.options.length > this.MAX_SEARCH_SIZE) {
      this.options.pop()
    }
  }
}
