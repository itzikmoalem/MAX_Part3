import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { ApiService } from "src/app/Services/api.service";
import { ExpService } from "src/app/Services/exp.service";

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class searchComponent implements OnInit {

    select: boolean = true;
    choice: number = 0;

    email = new FormControl('', [Validators.email]);
    name = new FormControl('', [Validators.maxLength(50)]);

    constructor(private fb: FormBuilder, public api: ApiService, public exp: ExpService) {
    }

    getErrorMessageEmail() {
        return this.email.hasError('email') ? 'אימייל לא חוקי' : '';
    }

    getErrorMessageName() {
        return this.email.hasError('name') ? 'שם לא חוקי' : '';
    }

    ngOnInit() {
        this.choice = 1;
    }

    Search() {
        if (this.choice == 1) {
            if (this.email.value != undefined) {
                if (this.email.value == "")     // if empty value => return all list
                {
                    this.api.getComments().subscribe(res => {
                        if (undefined !== res) {
                            this.exp.setNewParams(res);
                        }
                    });
                }
                else    // if value of serach => search
                {
                    this.api.getCommentsByEmail(this.email.value).subscribe(res => {
                        if (undefined !== res) {
                            this.exp.setNewParams(res);
                        }
                    });
                }
            }
        }
        else if (this.choice == 2) {
            if (this.name.value != undefined) {
                if (this.name.value == "")     // if empty value => return all list
                {
                    this.api.getComments().subscribe(res => {
                        if (undefined !== res) {
                            this.exp.setNewParams(res);
                        }
                    });
                }
                else    // if value of serach => search
                {
                    this.api.getCommentsByName(this.name.value).subscribe(res => {
                        if (undefined !== res) {
                            this.exp.setNewParams(res);
                        }
                    });
                }
            }
        }
    }

    ChangeSearchType(val: any) {
        this.choice = val;
    }
}