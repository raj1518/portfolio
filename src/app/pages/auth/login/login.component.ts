import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

constructor(private router:Router){}

  loginobj:any ={
    username:'',
    password:''
  }

  login(){
    if(this.loginobj.username=='raj' && this.loginobj.password=='12345'){
    this.router.navigateByUrl('/layout/main/home')
  } else {
    alert('wrong credentials')
  }
}
}
