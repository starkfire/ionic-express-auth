import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogsService } from '../logs/logs.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public results: Array<object> = []

  constructor(
    private router: Router,
    private logs: LogsService
  ) {}

  ngOnInit() {
    this.logs.getLogs()
      .subscribe(resp => {
        this.results = resp.body.logs
      }, err => {
        console.log(err)
      })
  }

  logout(): void {
    localStorage.removeItem('token')
    this.router.navigateByUrl('/')
  }
}
