import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit {

constructor(public http: HttpClient) {}
 public ping() {
   this.http.get('https://example.com/api/things')
     .subscribe(
       data => console.log(data),
       err => console.log(err)
     );
 }

  ngOnInit() {
  }

}
