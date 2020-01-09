import { Component, OnInit, Input } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoServicio } from './egreso.servicio';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {
  egresos:Egreso[]=[];
  @Input() ingresoTotal:number;
  constructor(private egresoService:EgresoServicio) { }

  ngOnInit() {
    this.egresos=this.egresoService.egresos;
  }

  eliminarEgreso(eliminarEgreso:Egreso){
    this.egresoService.eliminar(eliminarEgreso);
  }

  calcularPorcentaje(egreso:Egreso){
    return egreso.valor/this.ingresoTotal;
  }
}
