import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDataTableComponent } from './ngx-data-table.component';
import {
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatInputModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
  ],
  declarations: [NgxDataTableComponent],
  exports: [NgxDataTableComponent],
})
export class NgxDataTableModule {}
