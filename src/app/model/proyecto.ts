export class Proyecto {
    id? : number; 
    nombrePro: string; 
    descripcionPro: string; 
    fechaPro: string; 
    linkPro: string;

    constructor(nombrePro: string, descripcionPro: string,fechaPro: string, linkPro: string){
        this.nombrePro = nombrePro; 
        this.descripcionPro = descripcionPro; 
        this.fechaPro = fechaPro; 
        this.linkPro = linkPro; 
    }
}
