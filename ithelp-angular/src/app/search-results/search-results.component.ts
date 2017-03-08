
import { Component, OnInit, Input, ChangeDetectionStrategy, NgZone } from '@angular/core';
import { UserService } from './../user.service';

declare var google: any;
// import { filterRolePipe } from '../pipes/filter-role.pipe';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
  providers: [UserService],
  changeDetection: ChangeDetectionStrategy.Default
})
export class SearchResultsComponent implements OnInit {
  users;
  map: any;
  autocomplete: any;
  pattern: string = "";
  searchMethod: string = "name";
  filters = []
  lat: number = 41.38506389999999;
  lng: number = 2.1734034999999494;

  constructor(
    private userService: UserService,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
      this.getUsers();
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
       this.lat = map.center.lat()
       this.lng = map.center.lng();
       this.getUsers()
     })

      users.forEach(function(marker){
        if (marker.role === "HELPER") {
          let title = marker.name
          let position = {
             lat: marker.location.coordinates[1],
             lng: marker.location.coordinates[0]
           };

           var pin = new google.maps.Marker({ position, map, title  });
         }
       });
    });

  }

  addFilters(event){
    this.filters.push(event.target.value)
  }

  removeFilters(event){
    let index = event.target.value.indexOf(this.filters)
    this.filters.splice(index, 1)
  }
}
