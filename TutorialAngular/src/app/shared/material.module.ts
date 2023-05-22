import { NgModule } from '@angular/core';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";

const modules = [
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatTableModule,
  MatIconModule,
];

@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class AppMaterialModule { }
