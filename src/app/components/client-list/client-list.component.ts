import { ClientListService } from './../../services/client-list-service/client-list.service';
import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/interface/client';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  objectList: any[];

  constructor(private clientListService: ClientListService) { }

  ngOnInit(): void {
    this.getClients();
  }

  getClients() {
    this.clientListService.getAllClientList().subscribe(resp => {
      this.objectList = resp;
    });
  }

}
