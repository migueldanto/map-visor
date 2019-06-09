import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LayerlistComponent } from './layerlist/layerlist.component';
import { SimpleRequestService } from './simple-request.service';
import { HttpClientModule } from '@angular/common/http';
import { MatTree, MatTreeNode,MatTreeModule } from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { LayerRefreshService } from './layerlist/layer-refresh.service';

@NgModule({
  declarations: [
    AppComponent,
    LayerlistComponent,
    
  ],
  imports: [
    BrowserModule,HttpClientModule,BrowserAnimationsModule,MatTreeModule,MatIconModule,MatButtonModule
  ],
  providers: [SimpleRequestService,LayerRefreshService],
  bootstrap: [AppComponent]
})
export class AppModule { }
