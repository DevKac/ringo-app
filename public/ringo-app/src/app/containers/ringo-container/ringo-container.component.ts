import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { Subject, BehaviorSubject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';

import { ringoWaitTime } from 'src/app/config';
import { Expense } from 'src/app/interfaces/expense.interface';
import { ExpensesTotal } from 'src/app/interfaces/expenses-total.interface';
import { ExpensesDivision } from 'src/app/enums/expenses-division.enum';
import { AnimalService } from 'src/app/services/animal.service';
import { DrinkService } from 'src/app/services/drink.service';
import { FoodService } from 'src/app/services/food.service';
import { HouseService } from 'src/app/services/house.service';
import { MovieService } from 'src/app/services/movie.service';
import { RingoComponent } from 'src/app/components/ringo/ringo.component';

@Component({
  selector: 'app-ringo-container',
  templateUrl: './ringo-container.component.html',
  styleUrls: ['./ringo-container.component.scss']
})
export class RingoContainerComponent implements OnInit, OnDestroy {
  public ringoValues: Expense[];
  private destroy$: Subject<boolean> = new Subject<boolean>();
  private ringoValuesChanged$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  @ViewChild(RingoComponent, {static: false})
  private ringoComponent: RingoComponent;

  constructor(
    private animalService: AnimalService,
    private drinkService: DrinkService,
    private foodService: FoodService,
    private houseService: HouseService,
    private movieService: MovieService,
  ) { }

  ngOnInit() {
    this.ringoValuesChanged$
      .pipe(takeUntil(this.destroy$), debounceTime(ringoWaitTime))
      .subscribe((valueChanged: boolean) => {
        if (!this.ringoComponent) {
          return;
        }
        if (!this.ringoValues) {
          this.ringoValues = [];
        }
        this.ringoComponent.ringoValues = this.ringoValues;
    });
    this.animalService.fetchAnimalsTable()
    .pipe(takeUntil(this.destroy$))
    .subscribe(
      (response: ExpensesTotal) => {
        this.updateRingoValues(response, ExpensesDivision.ANIMALS);
      }, error => {
        console.log(error);
        this.ringoValuesChanged$.next(false);
      }
    );
    this.drinkService.fetchDrinksTable()
    .pipe(takeUntil(this.destroy$))
    .subscribe(
      (response: ExpensesTotal) => {
        this.updateRingoValues(response, ExpensesDivision.DRINKS);
      }, error => {
        console.log(error);
        this.ringoValuesChanged$.next(false);
      }
    );
    this.foodService.fetchFoodTable()
    .pipe(takeUntil(this.destroy$))
    .subscribe(
      (response: ExpensesTotal) => {
        this.updateRingoValues(response, ExpensesDivision.FOOD);
      }, error => {
        console.log(error);
        this.ringoValuesChanged$.next(false);
      }
    );
    this.houseService.fetchHouseTable()
    .pipe(takeUntil(this.destroy$))
    .subscribe(
      (response: ExpensesTotal) => {
        this.updateRingoValues(response, ExpensesDivision.HOUSE);
      }, error => {
        console.log(error);
        this.ringoValuesChanged$.next(false);
      }
    );
    this.movieService.fetchMoviesTable()
    .pipe(takeUntil(this.destroy$))
    .subscribe(
      (response: ExpensesTotal) => {
        this.updateRingoValues(response, ExpensesDivision.MOVIES);
      }, error => {
        console.log(error);
        this.ringoValuesChanged$.next(false);
      }
    );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  private updateRingoValues(response: ExpensesTotal, expensesDivision: ExpensesDivision): void {
    if (!this.ringoValues) {
      this.ringoValues = [];
    }
    this.ringoValues.push({
      name: expensesDivision,
      value: response.total
    });
    this.ringoValuesChanged$.next(true);
  }
}
