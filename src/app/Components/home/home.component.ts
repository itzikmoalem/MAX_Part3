import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { ApiService } from "src/app/Services/api.service";
import { ExpService } from "src/app/Services/exp.service";
import { addComponent } from "../add/add.component";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class homeComponent implements OnInit {

    filtersLoaded: Promise<boolean> | undefined;

    constructor(public api: ApiService, public exp: ExpService, private dialog: MatDialog) { }

    ngOnInit() {
        this.api.getComments().subscribe(res => {
            if (res !== undefined) {
                this.exp.setNewParams(res);
                this.filtersLoaded = Promise.resolve(true);
                this.exp.update();
            }
        });
    }

    AddNewCommentDialog() {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;

        this.dialog.open(addComponent, dialogConfig);
    }
}