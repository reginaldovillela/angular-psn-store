import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
	@Input()
	gameCover: string = '';
	@Input()
	gameLabel: string = '';
	@Input()
	gameTitle: string = '';
	@Input()
	gameType: string = '';
	@Input()
	gamePrice: string = '';

	ngOnInit(): void {
		//throw new Error('Method not implemented.');
	}
}
