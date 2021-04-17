import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/_models/category';
import { themeColors } from 'src/app/_models/color';
import { CategoryService } from 'src/app/_services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categories: ICategory[];

  constructor(private _categoryService: CategoryService) {}

  ngOnInit(): void {
    this._categoryService.getAll()
      .subscribe(result => this.categories = result);
  }

  getBadgeClass(index: number) {
    return `badge badge-pill badge-${themeColors[index % themeColors.length]}`;
  }
}
