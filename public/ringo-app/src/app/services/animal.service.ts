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
export class AnimalService {

  constructor(private http: HttpClient) { }

  public fetchAnimalsTable(): Observable<ExpensesTotal> {
    return this.http.get(environment.serverPath + apiPath + '/animals').pipe(
      map((response: ExpensesTotal) => response)
    );
  }
}
