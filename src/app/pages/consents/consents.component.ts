import { Component, OnInit } from '@angular/core';

import { routerTransition } from '@app/core';


@Component({
  selector: 'di-consents',
  templateUrl: './consents.component.html',
  styleUrls: ['./consents.component.scss'],
  animations: [routerTransition]
})
export class ConsentsComponent implements OnInit {

  constructor() {}

  ngOnInit() {}
}
