import { Component, OnInit } from '@angular/core';
import { Curriculo } from 'src/app/models/curriculo.model';
import { CurriculoService } from 'src/app/services/curriculo.service';

@Component({
  selector: 'app-curriculos',
  templateUrl: './curriculo.component.html',
  styleUrls: ['./curriculo.component.scss'],
})
export class CurriculoComponent implements OnInit {
  public curriculos: Curriculo[] = [];

  constructor(private _curriculoService: CurriculoService) {}
  ngOnInit(): void {
    this.listarCurriculos();
  }
  listarCurriculos() {
    this._curriculoService.getCurriculos().subscribe((retornaCurriculo) => {
      this.curriculos = retornaCurriculo.map((item: any) => {
        return Curriculo.fromMap(item);
      });
    });
  }
}
