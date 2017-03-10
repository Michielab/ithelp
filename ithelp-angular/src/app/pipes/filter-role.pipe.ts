import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'role',
  pure: false
})
export class FilterRolePipe implements PipeTransform {

  transform(user) {
    console.log(user)
    console.log(user.role)


    if (user.role === "COSTUMER") {
      console.log("Im on the pipe", user)
        return user;
    }

  }
}
