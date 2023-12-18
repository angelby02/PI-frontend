import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users:User[]=[]
  constructor(private userService: UserService){
  

  }
  ngOnInit(){
      this.getUsers();
  }
  getUsers(){
    this.userService.getUsers()
    .subscribe( res => console.log(res), err => console.log(err) )
  }
  deleteUser(id: number): void {
    this.userService.deleteUser(id)
      .subscribe(
        res => {
          console.log(res);
          this.getUsers();
        },
        err => console.log(err)
      )
  }
}
