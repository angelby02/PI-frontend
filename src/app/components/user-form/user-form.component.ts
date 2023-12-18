import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit{

  user: User = {
    username: '',
    email: '',
    password: '',
    id:0
  };
  edit: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

  }

  submitUser() {
    this.userService.createUser(this.user)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/users']);
        },
        err => console.log(err)
      )
  }

  updateUser() {
    delete this.user._id;
    this.userService.updateUser(this.user.id, this.user)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/product'])
        },
        err => console.log(err)
      )
  }
}
