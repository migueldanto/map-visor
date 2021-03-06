import { Component, OnInit, Input } from '@angular/core';
import { Map } from 'ol';
import { LayerlistComponent } from 'src/app/layerlist/layerlist.component';
import {MatDialog} from '@angular/material/dialog'
import { DialogDownloadComponent, DialogDownloadData } from '../dialog-download/dialog-download.component';
import { DntAlertaComponent, DntAlertaData } from 'src/app/dnt-alerta/dnt-alerta.component';

@Component({
  selector: 'dnt-toolbar-container',
  templateUrl: './toolbar-container.component.html',
  styleUrls: ['./toolbar-container.component.css']
})
export class ToolbarContainerComponent implements OnInit {

  @Input() olMapa:Map
  @Input() layerListComp:LayerlistComponent;
  //@Input() layerList:LayerlistComponent
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    console.log(this.layerListComp);
    
  }

  prueba1(){
    console.log(this.layerListComp.currentDntLayer);
  }

  descarga_button(){
    if(this.layerListComp.currentDntLayer!=undefined){
      if(this.layerListComp.currentDntLayer.allow_downlaoad){
        let dataSend:DialogDownloadData={dntLayer:this.layerListComp.currentDntLayer,mapa:this.olMapa}
        this.dialog.open(DialogDownloadComponent,{width:"350px",data:dataSend} )
      }else{
        let mensaje:DntAlertaData={mensaje:this.layerListComp.currentDntLayer.title+" no permite descargar información",textoBoton:"Enterado"}
        this.dialog.open(DntAlertaComponent,{data:mensaje})
      }
      
      
    }else{
      let mensaje:DntAlertaData={mensaje:"Selecciona una capa!!"}
      this.dialog.open(DntAlertaComponent,{data:mensaje})
    }
    
  }
}
