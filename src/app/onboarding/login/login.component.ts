import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  username: string = ""
  password: string = ""

  constructor(
    private apiService: ApiServiceService,
    private router: Router
  ) { }

  async ngOnInit() {
    await this.apiService.test()
  }

  async logIn() {
    try {
      this.apiService.login(this.username, this.password).then(res => {
        console.log(res);
        localStorage.setItem("user_token", res.data.authToken)
        alert("Todo bn")
        this.router.navigate(['tabs'])
      })
    } catch (error) {
      alert(error)
    }
  }

}
