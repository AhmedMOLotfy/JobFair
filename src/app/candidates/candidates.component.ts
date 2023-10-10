import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {

  candidates: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get("https://localhost:5001/api/candidates").subscribe({
      next: response => {
        this.candidates = response;
        console.log(response);
      },
      error: (error) => console.log(error),
      complete: () => console.log("Request completed")
    });
  }

}
