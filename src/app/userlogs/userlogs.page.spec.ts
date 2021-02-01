import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserlogsPage } from './userlogs.page';

describe('UserlogsPage', () => {
  let component: UserlogsPage;
  let fixture: ComponentFixture<UserlogsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserlogsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserlogsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
