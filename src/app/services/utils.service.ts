import { Injectable } from '@angular/core';
import { MatTabCategory } from '../models/mat-tab-category.model';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  sortCategories(categories: MatTabCategory[]): MatTabCategory[] {
    const order = [
      "desayuno",
      "almuerzo",
      "merienda",
      "cena",
      "colación 10:30hs",
      "colación 18:30hs",
      "colación 23hs"
    ];

    return categories.sort((a, b) => {
      const indexA = order.indexOf(a.description.toLowerCase());
      const indexB = order.indexOf(b.description.toLowerCase());
      if (indexA === -1 || indexB === -1) {
        return a.description.localeCompare(b.description);
      }
      return indexA - indexB;
    });
  }
  
}