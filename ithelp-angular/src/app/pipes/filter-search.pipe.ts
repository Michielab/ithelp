import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: any[], filters: any[]) {

    if (!users) {
        return []
    }

    var firstUsers = []
    var uniqueUsers = []


    users.forEach(function(user){
      filters.forEach(function(filter){
        (user.speciality).forEach(function(speciality){
          if(speciality === filter){
            console.log(user.name)
            firstUsers.push(user)
          }
        })
      })
    })

    console.log(firstUsers)

    uniqueUsers = firstUsers.filter(function(item, pos) {
        return firstUsers.indexOf(item) == pos;
    })
    console.log(uniqueUsers)
    return uniqueUsers
}
}
