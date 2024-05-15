import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj:any = {
    "username": "",
    "password": ""
  };

  constructor(private http: HttpClient, private router:Router)
  {

  }

  onLogin()
  {
    this.http.post('http://localhost:5176/api/Accounts/login', this.loginObj).subscribe((res:any)=>{
      if(res.token != null)
        {
          if(res.roleId == 1)
            {
              alert("REgional manager")
              this.router.navigateByUrl('/RegionalManager')
              localStorage.setItem('loginToken',res.data.token)
            }
            if(res.roleId == 2)
            {
              alert("Customer")
              this.router.navigateByUrl('/Customer')
            }
        }
      else
      {
        alert("Bad Username or Password")
      }
    })
  }

}
