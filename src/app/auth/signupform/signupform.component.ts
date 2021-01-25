import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../api/auth.service';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.scss'],
})
export class SignupformComponent implements OnInit {

  private signup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public alertController: AlertController,
    private authService: AuthService
  ) {
    this.signup = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirm: ['', Validators.required]
    })
  }

  ngOnInit() {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Passwords do not match',
      buttons: ['OK']
    })

    await alert.present()
  }

  onSubmit(): void {
    if (this.signup.value.password !== this.signup.value.confirm) {
      this.presentAlert()
    } else {
      const { username, password } = this.signup.value

      this.authService.signup(username, password)
        .subscribe(resp => {
          localStorage.setItem('token', resp.body.token)
        })
    }
  }

}
