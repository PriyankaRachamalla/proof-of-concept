import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-view-discussions',
  templateUrl: './view-discussions.component.html',
  styleUrls: ['./view-discussions.component.css']
})
export class ViewDiscussionsComponent implements OnInit {

  discussionsData = [];

  constructor(private http:Http) { }

  ngOnInit() {
    this.getDiscussions();
  }

  getDiscussions(){
    this.http.get('http://localhost:5555/discussions').subscribe(
      (res:Response) => {
        this.discussionsData = res.json();
        console.log("discussions data",this.discussionsData);
      }
    )
  }

}
