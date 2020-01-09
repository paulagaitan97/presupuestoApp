import { Egreso } from './egreso.model';

export class EgresoServicio{
    egresos:Egreso[]=[
        new Egreso("Renta Departamento",900),
        new Egreso("Ropita",200)
    ];

    eliminar(egreso:Egreso){
        const indice: number = this.egresos.indexOf(egreso);
        this.egresos.splice(indice,1);
    }
}