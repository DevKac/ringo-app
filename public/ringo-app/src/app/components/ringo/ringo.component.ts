import { Component, Input, OnChanges, SimpleChanges, ChangeDetectionStrategy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { Expense } from 'src/app/interfaces/expense.interface';
import { RingoConfig } from 'src/app/interfaces/ringo-config.interface';
import { Color } from 'src/app/enums/color.enum';

@Component({
  selector: 'app-ringo',
  templateUrl: './ringo.component.html',
  styleUrls: ['./ringo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RingoComponent implements OnChanges, AfterViewInit {
  @Input()
  public ringoValues: Expense[];
  @Input()
  public ringoConfig: RingoConfig;
  // Canvas drawing based on https://code.tutsplus.com/tutorials/how-to-draw-a-pie-chart-and-doughnut-chart-using-javascript-and-html5-canvas--cms-27197
  public context: CanvasRenderingContext2D;
  @ViewChild('ringoChart', {static: false})
  private ringoChart: ElementRef;

  ngOnChanges(changes: SimpleChanges) {
    if (changes && (changes.ringoValues || changes.ringoConfig)) {
      this.drawRingoChart();
    }
  }

  ngAfterViewInit(): void {
    this.context = (<HTMLCanvasElement>this.ringoChart.nativeElement).getContext('2d');
  }

  private drawRingoChart(): void {
    if (!this.ringoValues || !this.ringoChart || !this.ringoChart.nativeElement || !this.ringoConfig) {
      return;
    }
    this.ringoChart.nativeElement.width = this.ringoConfig.ringoWidth;
    this.ringoChart.nativeElement.height = this.ringoConfig.ringoHeight;
    let colorIndex = 0;
    let totalSum: number = 0;
    this.ringoValues.forEach((expense: Expense) => {
      if (!expense) {
        return;
      }
      return totalSum += expense.value;
    });
    
    let startingAngle: number = 0;
    this.ringoValues.forEach((expense: Expense) => {
      if (!expense) {
        return;
      }
      const sliceAngle: number = 2 * Math.PI * expense.value / totalSum;
      this.drawPieSlice(
        this.ringoConfig.ringoWidth / 2,
        this.ringoConfig.ringoHeight / 2,
        Math.min(this.ringoConfig.ringoWidth / 2, this.ringoConfig.ringoHeight / 2),
        startingAngle,
        startingAngle + sliceAngle,
        this.ringoConfig.colors[colorIndex]
      );
      startingAngle += sliceAngle;
      colorIndex++;
    });

    this.drawPieSlice(
      this.ringoConfig.ringoWidth / 2,
      this.ringoConfig.ringoHeight / 2,
      this.ringoConfig.ringoHoleSize * Math.min(this.ringoConfig.ringoWidth / 2, this.ringoConfig.ringoHeight / 2),
      0,
      2 * Math.PI,
      Color.WHITE
    );
  }
  
  private drawLine(startX: number, startY: number, endX: number, endY: number): void {
    this.context.beginPath();
    this.context.moveTo(startX, startY);
    this.context.lineTo(endX, endY);
    this.context.stroke();
  }

  private drawArc(centerX: number, centerY: number, radius: number, startAngle: number, endAngle: number): void {
    this.context.beginPath();
    this.context.arc(centerX, centerY, radius, startAngle, endAngle);
    this.context.stroke();
  }

  private drawPieSlice(centerX: number, centerY: number, radius: number, startAngle: number, endAngle: number, color: string): void {
    this.context.fillStyle = color;
    this.context.beginPath();
    this.context.moveTo(centerX, centerY);
    this.context.arc(centerX, centerY, radius, startAngle, endAngle);
    this.context.closePath();
    this.context.fill();
  }
}
