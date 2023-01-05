import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombrePro:string = '';
  descripcionPro:string = '';
  fechaPro:string ='';
  linkPro: string = ''; 
  constructor(private sProyecto: ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const pro = new Proyecto(this.nombrePro, this.descripcionPro, this.fechaPro, this.linkPro);
    this.sProyecto.save(pro).subscribe(
      data=> {
        alert("Proyecto añadido");
        this.router.navigate(['']);
      }, err=>{
        alert("Falló");
        this.router.navigate(['']); 
      }
    )
  }

}