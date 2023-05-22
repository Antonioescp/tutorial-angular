import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CiudadesService } from '../ciudades.service';
import { ActualizarCiudadDto } from '../shared/dtos/ciudades/actualizar-ciudad-dto';
import { CrearCiudadDto } from '../shared/dtos/ciudades/crear-ciudad-dto';

@Component({
  selector: 'app-formulario-ciudad',
  templateUrl: './formulario-ciudad.component.html',
  styleUrls: ['./formulario-ciudad.component.css']
})
export class FormularioCiudadComponent implements OnInit {
  id?: number;
  title = 'Nueva ciudad';

  form!: FormGroup;
  isBusy = false;

  constructor(
    private ciudadesService: CiudadesService,
    private route: ActivatedRoute) {

    this.form = new FormGroup({
      nombre: new FormControl('', {
        nonNullable: true,
        validators: Validators.required
      })
    });
  }

  ngOnInit() {
    const routeId = this.route.snapshot.paramMap.get('id');
    if (routeId) {
      this.id = +routeId;
      this.obtenerCiudad(this.id);
    }
  }

  obtenerCiudad(id: number) {
    this.ciudadesService.getById(id).subscribe({
      next: ciudad => {
        this.form.patchValue(ciudad);
        this.title = 'Editar - ' + ciudad.nombre;
      },
      error: error => console.error(error)
    });
  }

  onSubmit() {
    // obteniendo datos del formulario

    // creando ciudad
    this.isBusy = true;
    if (this.id) {

      const datos = <ActualizarCiudadDto>{};
      datos.id = this.id;
      datos.nombre = this.form.controls['nombre'].value;
      this.actualizarCiudad(datos);

    } else {

      const datos = <CrearCiudadDto>{};
      datos.nombre = this.form.controls['nombre'].value;
      this.crearCiudad(datos);

    }
  }

  crearCiudad(data: CrearCiudadDto) {
    this.ciudadesService.create(data).subscribe({
      next: _ => console.log(`Ciudad ${data.nombre} creada.`),
      error: error => console.error(error),
      complete: () => {
        this.isBusy = false;
        this.form.reset();
      },
    });
  }

  actualizarCiudad(data: ActualizarCiudadDto) {
    this.ciudadesService.update(data).subscribe({
      next: _ => console.log(`Ciudad ${data.nombre} actualizada`),
      error: error => console.error(error),
      complete: () => {
        this.isBusy = false;
        this.form.reset();
      },
    });
  }

  getErrors(
    control: AbstractControl,
    displayName: string,
    customMessages: { [key: string]: string } | null = null
  ): string[] {
    var errors: string[] = [];
    Object.keys(control.errors || {}).forEach((key) => {
      switch (key) {
        case 'required':
          errors.push(`${displayName} ${customMessages?.[key] ?? 'es requerido.'}`);
          break;
        case 'pattern':
          errors.push(`${displayName} ${customMessages?.[key] ?? 'contiene caracteres inválidos.'}`);
          break;
        default:
          errors.push(`${displayName} ${customMessages?.[key] ?? 'es invalido.'}`);
          break;
      }
    });
    return errors;
  }
}
