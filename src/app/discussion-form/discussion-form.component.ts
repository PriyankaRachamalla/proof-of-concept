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
  successMessage = "";
  errorMessage = "";
  errorFlag = false;
  ngOnInit() {
  }

  addDiscussion(){
    this.successMessage = "";
    if(this.formValidation()){
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
          if(res.statusText == 'Created'){
            this.successMessage = "Discussion added successfully";
            this.clearFormElements();
          }
          console.log(res);
        })
    }
  }

  formValidation(){
    if(this.observer == '' || this.observer == null){
      this.errorFlag = true;
    }
    else if(this.dateOfDiscussion == '' || this.dateOfDiscussion == null){
      this.errorFlag = true;
    }
    else if(this.locationOfDiscussion == '' || this.locationOfDiscussion == null){
      this.errorFlag = true;
    }
    else if(this.subjectOfDiscussion == '' || this.subjectOfDiscussion == null){
      this.errorFlag = true;
    }
    else if(this.colleagueDiscussionWith == '' || this.colleagueDiscussionWith == null){
      this.errorFlag = true;
    }
    else if(this.outcomes == '' || this.outcomes == null){
      this.errorFlag = true;
    }
    else{
      this.errorFlag = false;
    }

    if(this.errorFlag){
      this.errorMessage = "Please enter all mandatory fields";
      return false;
    }
    else{
      this.errorMessage = "";
      return true;
    }
  }

  clearFormElements(){
    this.errorMessage = '';
    this.observer = '';
    this.dateOfDiscussion = '';
    this.locationOfDiscussion = '';
    this.subjectOfDiscussion = '';
    this.colleagueDiscussionWith = '';
    this.outcomes = '';
  }

}
