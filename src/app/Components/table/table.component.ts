import { Component, OnChanges, OnInit } from "@angular/core";
import { ExpService } from "src/app/Services/exp.service";

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class tableComponent implements OnInit {
    rowData: any;

    columnDefs = [
        { headerName: 'מס מזהה', field: 'id', maxWidth: 100 },
        { headerName: 'סוג', field: 'postId', maxWidth: 100 },
        { headerName: 'שם', field: 'name', minWidth: 250, tooltipField: 'name' },
        { headerName: 'דואר אלקטרוני', field: 'email', tooltipField: 'email', minWidth: 250 },
        { headerName: 'תוכן', field: 'body', tooltipField: 'body', minWidth: 300 }
    ];

    constructor(public exp: ExpService) {
    }

    ngOnInit() {
    }
}