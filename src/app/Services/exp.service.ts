import { Injectable } from '@angular/core';
import { GridApi, GridReadyEvent } from 'ag-grid-community';
import { Comment } from '../Models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class ExpService {

  public comments: Comment[] = [];
  private gridApi: GridApi<Comment> = new GridApi<Comment>;

  constructor() { }

  setComment(c: Comment) {
    this.comments.push(c);
  }

  getComments() {
    return this.comments;
  }

  getLastId() {
    var lastId = this.comments[this.comments.length-1].id;
    if (lastId != undefined)
    {
      return lastId + 1;
    }
    return 0;
  }

  setNewParams(res: any) {
    this.comments = res;
    this.update();
  }

  update() {
    this.gridApi.setRowData(this.comments)
  }

  onGridReady(params: GridReadyEvent<Comment>) {
    this.gridApi = params.api;
  }
}
