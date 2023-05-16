import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  providers: [MessageService]
})
export class GridComponent implements OnInit {
  rowData: any[];
  columnDefs: any[];
  gridApi: any;
 title(title: any) {
   throw new Error('Method not implemented.');
 }

 constructor(
  private http: HttpClient,
  private messageService: MessageService
  ) {

    this.rowData = [];
    this.columnDefs = [
      { headerName: 'CPF', field: 'cpf' },
      { headerName: 'Creation Date', field: 'creationDate' },
      { headerName: 'Email', field: 'email' },
      { headerName: 'Full Name', field: 'fullName' },
      { headerName: 'Last Update Date', field: 'lastUpdateDate' },
      { headerName: 'Phone Number', field: 'phoneNumber' },
      { headerName: 'User ID', field: 'userId' },
      { headerName: 'User Status', field: 'userStatus' },
      { headerName: 'User Type', field: 'userType' },
      { headerName: 'Username', field: 'username' }
    ];
}

ngOnInit() {}

getAllUsers() {
  this.http.get<any[]>('http://localhost:8080/ead-authuser/users').subscribe(
data => {
      console.log(data);
      this.rowData = [data];
    },
    (error) => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to fetch users.' });
      console.log('Error fetching users:', error);
    });
  }
}