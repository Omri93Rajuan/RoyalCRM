import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from './categoty';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styles: [
  ]
})
export class SearchBarComponent implements OnInit {
  @Input() categories: Array<Category> = [];
  @Input() placeholderText: string =
    'Click the Navigation button to choose a category and then enter the item you are looking for here';
  @Input() array: any = [];
  @Output() onArrayFiltered = new EventEmitter();

  category: Category = { name: '', value: '' };


  onCategoryChange(e: any) {
    const categoryChanged = this.categories.find(
      (category: Category) => category.value === e.target.value
    );
    if (categoryChanged) this.category = categoryChanged;
  }


  onSearch(e: any) {
    const term = e.target.value;
    const arrayFiltered = [...this.array].filter((item: any) =>
      item[this.category.value]
        .toLowerCase()
        .trim()
        .includes(term.toLowerCase().trim())
    );
    this.onArrayFiltered.emit(arrayFiltered);
  }

  ngOnInit(): void {
    this.category = {
      name: this.categories[0].name,
      value: this.categories[0].value,
    };
  }
}
