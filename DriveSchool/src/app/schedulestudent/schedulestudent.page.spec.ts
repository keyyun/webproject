import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchedulestudentPage } from './schedulestudent.page';

describe('SchedulestudentPage', () => {
  let component: SchedulestudentPage;
  let fixture: ComponentFixture<SchedulestudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulestudentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchedulestudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
