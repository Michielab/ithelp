
import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';

// import { filterRolePipe } from '../pipes/filter-role.pipe';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
  providers: [UserService]
})
export class SearchResultsComponent implements OnInit {
	users;
  pattern: string="";
  searchMethod: string = "name";
  filters = []

  constructor(private user: UserService) { }


  ngOnInit() {
  	this.user.getList()
      .subscribe((users) => {
        this.users = users;
      });
  }



  addFilters(event){
    this.filters.push(event.target.value)
    console.log(this.filters)
  }

  removeFilters(event){
    let index = event.target.value.indexOf(this.filters)
    this.filters.splice(index, 1)
    console.log(this.filters)
  }
}
