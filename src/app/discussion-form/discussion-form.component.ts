import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
 
@Component({
  selector: 'app-discussion-form',
  templateUrl: './discussion-form.component.html',
  styleUrls: ['./discussion-form.component.css']
})
export class DiscussionFormComponent implements OnInit {

  constructor(private http: Http) { }
  discussionFormData = {};
  observer = "";
  dateOfDiscussion = "";
  locationOfDiscussion = "";
  colleagueDiscussionWith = "";
  subjectOfDiscussion = "";
  outcomes = "";
  ngOnInit() {
  }

  addDiscussion(){
    this.discussionFormData = {
      "Observer": this.observer,
      "DateOfDiscussion": this.dateOfDiscussion,
      "LocationOfDiscussion": this.locationOfDiscussion,
      "ColleagueDiscussionWith": this.colleagueDiscussionWith,
      "Subject": this.subjectOfDiscussion,
      "Outcomes": this.outcomes
    }
    console.log("this.disussiondata",this.discussionFormData);
    this.http.post("http://localhost:5555/discussions/",this.discussionFormData).subscribe(
      (res:Response) => {
        console.log(res);
      })
  }

}
