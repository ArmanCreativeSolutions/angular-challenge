import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-salons-list',
    templateUrl: './salons-list.component.html',
    styleUrls: ['./salons-list.component.scss'],
})
export class SalonsListComponent {
    salonList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
}
