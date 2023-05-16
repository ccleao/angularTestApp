import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, ColGroupDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { MenuItem, MessageService } from 'primeng/api';


@Component({
 selector: 'app-root', 
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.scss'],
 providers: [MessageService]
})
export class AppComponent {

}
