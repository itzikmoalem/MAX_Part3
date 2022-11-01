import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ApiService } from "src/app/Services/api.service";
import { ExpService } from "src/app/Services/exp.service";
import { Comment } from '../../Models/comment.model';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css']
})
export class addComponent implements OnInit {

    newComment: Comment = { id: 0, name: '', email: '', postId: 0, body: '' };
    addComment!: FormGroup;

    constructor(private fb: FormBuilder, public api: ApiService, public exp: ExpService) {
    }

    ngOnInit() {
        this.addComment = this.fb.group({
            name: [this.newComment.name, [Validators.required, Validators.maxLength(50)]],
            postId: [this.newComment.postId, [Validators.required, Validators.pattern("^0*(?:[1-9][0-9]?|100)$")]],
            email: [this.newComment.email, [Validators.required, Validators.email]],
            body: [this.newComment.body, [Validators.required, Validators.minLength(50), Validators.maxLength(400)]]
        });
    }
    Add() {
        var c = {
            id: this.exp.getLastId(), name: this.addComment.controls['name'].value, email: this.addComment.controls['email'].value,
            postId: this.addComment.controls['postId'].value, body: this.addComment.controls['body'].value
        };

        this.exp.setComment(c);
        this.exp.update();
        this.addComment.reset();
    }
}