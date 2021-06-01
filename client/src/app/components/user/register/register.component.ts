import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/models/user-interface';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) { }

    public user: UserInterface={
      name:'',
      email:'',
      password:'',
      tipo:'',
      tienda:''
    };
    public isError=false;
    public msgError='';
  ngOnInit(){}

  onRegister(form:NgForm): void{
    if(form.valid){
      this.authService.registerUser(
        this.user.name,
         this.user.email,
         this.user.password,
         this.user.tipo,
          this.user.tienda)
         .subscribe(user=>{
           this.authService.setUser(user);
           const token = user.id;
           this.authService.setToken(token);
           this.router.navigate(['/user/profile']);
         },
         
         res => {
           this.msgError=res.error.error.details.messages.email;
         this.onIsError();
          }
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
