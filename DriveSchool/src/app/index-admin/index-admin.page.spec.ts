import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndexAdminPage } from './index-admin.page';

describe('IndexAdminPage', () => {
  let component: IndexAdminPage;
  let fixture: ComponentFixture<IndexAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexAdminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndexAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
