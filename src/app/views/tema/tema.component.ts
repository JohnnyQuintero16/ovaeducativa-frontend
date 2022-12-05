import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  id = "";

  constructor(private aRouter: ActivatedRoute,) {
    aRouter.snapshot.paramMap.get('idTema');
   }

  ngOnInit(): void {
  }

}
