import {Component, OnInit} from '@angular/core';

import {ActivatedRoute} from "@angular/router";
import {TraveauService} from "../shared/traveau.service";

@Component({
  selector: 'app-traveau',
  templateUrl: './traveau.component.html',
  styleUrls: ['./traveau.component.css']
})
export class TraveauComponent implements OnInit {

  traveaus: any;
    constructor(private activatedRoute: ActivatedRoute, protected traveauServices: TraveauService) {

  }

  ngOnInit(): void {
    this.traveauServices.getTraveau().subscribe(data => {
      this.traveaus = data;
    })
  }

}
