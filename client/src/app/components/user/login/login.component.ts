import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInterface } from 'src/app/models/user-interface';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) { }
  public user: UserInterface={
    email:'',
    password:''
  };
  public isError=false;
  ngOnInit() {
  }
  onLogin(form: NgForm){
    if(form.valid){
      return this.authService.loginuser(this.user.email,this.user.password)
      .subscribe(data =>{
        this.authService.setUser(data.user)
        const token = data.id;
        this.authService.setToken(token);
        this.router.navigate(["/user/profile"]);
        this.isError=false;
      },
     error => this.onIsError()
      );

    }else{
      this.onIsError();
    }
  }

  onIsError():void{
      this.isError=true;
      setTimeout(()=>{
        this.isError=false;
      },3000);
    }

  }



