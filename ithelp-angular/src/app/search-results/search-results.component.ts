
import { Component, OnInit, Input, ChangeDetectionStrategy, NgZone } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute,Params } from '@angular/router';

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
  initialFilters = ["Computer", "Internet", "Phone", "TV", "Printer", "Other"];
  customFilters = []
  filterActive = false
  computerActive = false
  internetActive = false
  phoneActive = false
  tvActive = false
  printerActive = false
  otherActive = false
  filters: Array<String> = []
  place: Object;
  lat: any;
  lng: any;


  constructor(
    private userService: UserService,
    private ngZone: NgZone,
    private route: Router,
    private router: ActivatedRoute


  ) { }

  ngOnInit() {
    this.router.queryParams.subscribe((queryParams)=> {
      this.lat = parseFloat(queryParams['lat']);
      this.lng = parseFloat(queryParams['lng']);
      let homefilters = queryParams['filters'].split(",");
      if(homefilters.length != 0 &&  homefilters[0] != ''){
        this.filters = homefilters;
        this.customFilters = this.filters
        console.log("init",this.filters);
        this.filters.forEach((checkbox)=>{
          if(checkbox === 'Computer'){
            this.computerActive = true;
          }
          else if(checkbox === 'Internet'){
            this.internetActive = true;
          }
          else if(checkbox === 'Phone'){
            this.phoneActive = true;
          }
          else if(checkbox === 'TV'){
            this.tvActive = true;
          }
          else if(checkbox === 'Printer'){
            this.printerActive = true;
          }
          else if(checkbox === 'Other') {
            this.otherActive = true;
          }
        })

      } else {
          this.filters = this.initialFilters;
      }
    })

    this.getUsers();
  console.log("undergetusers",this.filters);
    let input = document.getElementById('searchLocation');
    let autocomplete = new google.maps.places.Autocomplete(input);

    autocomplete.addListener("place_changed", ()=>{
      this.ngZone.run(()=>{
        this.lat = autocomplete.getPlace().geometry.location.lat()
        this.lng = autocomplete.getPlace().geometry.location.lng();
  console.log("drag",this.filters);
        this.getUsers()
          console.log("drag",this.filters);
      })
    })
  }

  getUsers() {
    this.userService.getUsers(this.lat, this.lng)
    .subscribe((users) => {
      this.users = users;
      // this.route.navigate(['search'], {queryParams: {lat: this.lat, lng: this.lng, filters: this.filters}})
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
      console.log("addfilters",this.filters);
  }


  removeFilters(event){
      console.log("remove",this.filters);
      console.log(event.target.value)
    this.filterActive = false;
    let index = this.filters.indexOf(event.target.value)
    console.log(index)
    this.filters.splice(index, 1)
        console.log("remove2",this.filters);
    if(this.customFilters.length == 0){
      this.filters = this.initialFilters
        console.log(this.filters);
    }
    this.getUsers()
  }
}
