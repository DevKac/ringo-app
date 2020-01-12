import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

import { Expense } from 'src/app/interfaces/expense.interface';

@Component({
  selector: 'app-ringo',
  templateUrl: './ringo.component.html',
  styleUrls: ['./ringo.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class RingoComponent implements OnInit, OnChanges {
  @Input()
  public ringoValues: Expense[];

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
}
