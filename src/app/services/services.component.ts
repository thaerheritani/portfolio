import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ServicesService} from "../shared/services.service";
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services:any;
  constructor(private activatedRoute: ActivatedRoute, protected servicesServices: ServicesService) {
  }
  ngOnInit(): void {
    this.servicesServices.getServices().subscribe(data =>{
      this.services = data;
    })
  }
}
