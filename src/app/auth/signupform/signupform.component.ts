import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../../api/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.scss'],
})
export class SignupformComponent implements OnInit {

  private signup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public toastController: ToastController,
    private authService: AuthService,
    private router: Router
  ) {
    this.signup = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirm: ['', Validators.required]
    })
  }

  ngOnInit() {}

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      position: 'bottom',
      color: 'danger',
      duration: 2000
    })

    toast.present()
  }

  onSubmit(): void {
    if (this.signup.value.password !== this.signup.value.confirm) {
      this.presentToast('Passwords do not match')
    } else {
      const { username, password } = this.signup.value

      this.authService.signup(username, password)
        .subscribe(resp => {
          if (('token' in resp.body) && (resp.status == 200)) {
            localStorage.setItem('token', resp.body.token)
            this.router.navigateByUrl('/home')
          }
        }, err => {
          console.log(err)
          this.presentToast('Username already taken')
        })
    }
  }

}
