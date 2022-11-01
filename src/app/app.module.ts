import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from './Services/api.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { homeComponent } from './Components/home/home.component';
import { searchComponent } from './Components/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { tableComponent } from './Components/table/table.component';
import { AgGridModule } from 'ag-grid-angular';
import { addComponent } from './Components/add/add.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    homeComponent,
    searchComponent,
    tableComponent,
    addComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    BrowserAnimationsModule,
    AgGridModule,
    MatDialogModule,
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
