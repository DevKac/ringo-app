import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { apiPath } from '../config';
import { ExpensesTotal } from '../interfaces/expenses-total.interface';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  constructor(private http: HttpClient) { }

  public fetchDrinksTable(): Observable<ExpensesTotal> {
    return this.http.get(environment.serverPath + apiPath + '/drinks').pipe(
      map((response: ExpensesTotal) => response)
    );
  }
}
