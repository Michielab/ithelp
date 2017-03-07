
import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';

// import { FilterPipe } from './../pipes/filter-search.pipe';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
  providers: [UserService]
})
export class SearchResultsComponent implements OnInit {
	users: Array<Object> = [];
  pattern: string="";
  searchMethod: string = "name";
  initialFilters = ["Computers", "Phones", "Iphone"];
  customFilters = []
  filterActive = false
  filters: Array<Object>

  constructor(private user: UserService) { }


  ngOnInit() {
  	this.user.getList()
      .subscribe((users) => {
        this.users = users;
      });

      this.filters = this.initialFilters

  }



  addFilters(event){
    this.filterActive = true
    this.customFilters.push(event.target.value)
    this.filters = this.customFilters
    console.log(this.filters)
  }

  removeFilters(event){
    let index = event.target.value.indexOf(this.customFilters)
    this.customFilters.splice(index, 1)
    if(this.customFilters.length == 0){
      this.filters = this.initialFilters
    }

  }
}
