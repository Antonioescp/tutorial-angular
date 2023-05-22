import { Component, OnInit } from '@angular/core';
import { CiudadesService } from '../ciudades.service';
import { Ciudad } from '../shared/models/Ciudad';

@Component({
  selector: 'app-lista-ciudades',
  templateUrl: './lista-ciudades.component.html',
  styleUrls: ['./lista-ciudades.component.css']
})
export class ListaCiudadesComponent implements OnInit {
  dataSource: Ciudad[] = [];
  displayedColumns = ['id', 'nombre', 'acciones'];

  constructor(private ciudadesService: CiudadesService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.ciudadesService.getAll().subscribe({
      next: ciudades => this.dataSource = [...ciudades],
      error: error => console.log(error)
    });
  }

  onDelete(id: number): void {
    this.ciudadesService.deleteById(id).subscribe({
      next: _ => this.loadData(),
      error: error => console.error(error)
    });
  }
}
