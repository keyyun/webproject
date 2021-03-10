import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccountstudentPage } from './accountstudent.page';

describe('AccountstudentPage', () => {
  let component: AccountstudentPage;
  let fixture: ComponentFixture<AccountstudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountstudentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountstudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
