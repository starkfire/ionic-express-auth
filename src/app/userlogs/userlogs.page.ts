import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogsService } from '../logs/logs.service'

@Component({
  selector: 'app-userlogs',
  templateUrl: './userlogs.page.html',
  styleUrls: ['./userlogs.page.scss'],
})
export class UserlogsPage implements OnInit {

  public results: Array<object> = []

  constructor(
    private router: Router,
    private logs: LogsService
  ) { }

  ngOnInit() {
    this.logs.getLogs()
      .subscribe(resp => {
        let entries = resp.body.logs

        this.results = entries.reverse()
      }, err => {
        console.log(err)
      })
  }

  logout(): void {
    localStorage.removeItem('token')
    this.router.navigateByUrl('/')
  }

}
