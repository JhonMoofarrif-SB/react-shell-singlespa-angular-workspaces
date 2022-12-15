import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileButtonComponent } from '../profile-button/profile-button.component';
import { CreateAccountComponent } from './create-account.component';
import { AnaliticsServices } from '../../services/analytics/analytics.service';
import { RouterTestingModule } from '@angular/router/testing';


describe('test in LoginComponent', () => {
  let component: CreateAccountComponent;
  let fixture: ComponentFixture<CreateAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [CreateAccountComponent, ProfileButtonComponent],
      providers:[AnaliticsServices]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create CreateAccountComponent', () => {
    expect(component).toBeTruthy();
  });
});
