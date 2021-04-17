import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { ICategory } from '../_models/category';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: ICategory[] = [
    { id: '1', name: 'Design', count: 8 },
    { id: '2', name: 'Development', count: 5 },
    { id: '3', name: 'Devops', count: 1 },
    { id: '4', name: 'Frontend', count: 5 },
    { id: '5', name: 'Product Reviews', count: 3 },
    { id: '6', name: 'Security', count: 2 }
  ];
  
  constructor() { }

  getAll() {
    return of(this.categories);
  }
}
