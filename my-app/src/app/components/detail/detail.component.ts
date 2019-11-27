import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
	selector: 'app-detail',
	templateUrl: './detail.component.html',
	styleUrls: [ './detail.component.scss' ]
})
export class DetailComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}
