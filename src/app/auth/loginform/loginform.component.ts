import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../api/auth.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss'],
})
export class LoginformComponent implements OnInit {

  private login: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    public toastController: ToastController,
    private router: Router
  ) {
    this.login = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Invalid Username or Password',
      position: 'bottom',
      color: 'danger',
      duration: 2000
    })

    toast.present()
  }

  onSubmit(): void {
    const { username, password } = this.login.value

    this.authService.login(username, password)
      .subscribe(resp => {
        if (('token' in resp.body) && (resp.status == 200)) {
          localStorage.setItem('token', resp.body.token)
          this.router.navigateByUrl('/home')
        }
      }, err => {
        console.log(err)
        this.presentToast()
      })
  }

}
