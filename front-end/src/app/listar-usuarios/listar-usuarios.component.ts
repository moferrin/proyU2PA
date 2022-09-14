import { Component, OnInit } from '@angular/core';
import { AdultosService } from '../service/adultos.service';
import { TecnicosService } from '../service/tecnicos.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.scss']
})
export class ListarUsuariosComponent implements OnInit {
  data: any;
  adultosCount: any;
  searchText='';
  tec_id='';
  tec_nombre='';
  tec_apellido='';

  indice:string;

  constructor(
    private adultosService: AdultosService,
    private rutaActiva: ActivatedRoute,
    private tecnicosService:TecnicosService
    ) { 
     this.indice = "APP MIES";
  }

  ngOnInit(): void {
    this.tec_id = this.rutaActiva.snapshot.params['id'];
    console.log("el id es:"+this.tec_id);
    this.tecnicosService.getById(this.tec_id).subscribe(result => {
      this.tec_nombre = result.tec_nombre;
      this.tec_apellido = result.tec_apellido;
    })

    this.adultosService.getAdultosCount(this.tec_id).subscribe(result => {
      this.adultosCount = result;
    });
    this.adultosService.getAdultos(this.tec_id).subscribe(result => {
      this.data = result;
      for (let index = 0; index < this.adultosCount; index++) {
        if (this.data[index]['am_genero']==1) {
          this.data[index]['am_genero'] = "Masculino"
        } else {
          this.data[index]['am_genero'] = "Femenino"
        }
      }
      console.log(this.data)
    });
  }



}
