import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  proye: Proyecto = null; 
  
  constructor(private sProyecto: ProyectoService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id= this.activatedRouter.snapshot.params['id'];
  this.sProyecto.detail(id).subscribe(
    data=>{
      this.proye = data;
    }, err =>{
      alert("Error al modificar Proyectos");
        this.router.navigate(['']);
    }
  )
}

onUpdate(): void{
  const id= this.activatedRouter.snapshot.params['id'];
  this.sProyecto.update(id, this.proye).subscribe(
    data=>{
      this.router.navigate(['']); 
    },err =>{
      alert("Error al modificar Proyectps"); 
      this.router.navigate(['']); 
    }
  
  )
}


}
