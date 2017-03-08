
import { Component, OnInit, Input, ChangeDetectionStrategy, NgZone } from '@angular/core';
import { UserService } from './../user.service';

declare var google: any;



@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
  providers: [UserService],
  changeDetection: ChangeDetectionStrategy.Default
})
export class SearchResultsComponent implements OnInit {
  users: Array<Object> = [];
  pattern: string="";
  searchMethod: string = "name";
  initialFilters = ["Hardware", "Software", "Internet", "Phones", "Services", "Teaching"];
  customFilters = []
  filterActive = false
  filters: Array<Object>
  lat: number = 41.38506389999999;
  lng: number = 2.1734034999999494;


  constructor(
    private userService: UserService,
    private ngZone: NgZone,
  ) { }

  ngOnInit() {
    this.getUsers();
    this.filters = this.initialFilters
    let input = document.getElementById('searchLocation');
    let autocomplete = new google.maps.places.Autocomplete(input);

    autocomplete.addListener("place_changed", ()=>{
      this.ngZone.run(()=>{
        this.lat = autocomplete.getPlace().geometry.location.lat()
        this.lng = autocomplete.getPlace().geometry.location.lng();

        this.getUsers()
      })
    })
  }

  getUsers() {
    this.userService.getUsers(this.lat, this.lng)
    .subscribe((users) => {
      this.users = users;

      let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: {lat: this.lat, lng: this.lng},
        scrollwheel:false,
      });

      map.addListener('dragend', ()=> {
        this.ngZone.run(()=>{
        this.lat = map.center.lat()
        this.lng = map.center.lng();
        this.getUsers()
          })
      })


    users.forEach((marker) => {
      if (marker.role === "HELPER") {
        this.filters.forEach(function(filter){
          (marker.speciality).forEach(function(speciality){
            if(speciality === filter){
              let title = marker.name
              let position = {
                lat: marker.location.coordinates[1],
                lng: marker.location.coordinates[0]
              };

              var pin = new google.maps.Marker({ position, map, title  });
            }
          })
        })
      }
    });
  });
};

  addFilters(event){
    this.filterActive = true
    this.customFilters.push(event.target.value)
    this.filters = this.customFilters
    this.getUsers()
    console.log(this.filters)
  }

  removeFilters(event){
    this.filterActive = false;
    let index = event.target.value.indexOf(this.customFilters)
    this.customFilters.splice(index, 1)
    if(this.customFilters.length == 0){
      this.filters = this.initialFilters
    }
    this.getUsers()
  }
}
