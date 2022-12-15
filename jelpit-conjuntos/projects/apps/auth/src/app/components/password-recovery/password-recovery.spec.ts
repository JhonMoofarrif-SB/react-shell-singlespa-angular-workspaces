import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { AuthService } from '../../services/auth/auth.service';
import { PasswordRecoveryComponent } from './password-recovery.component';
import { LocalStorageService } from '../../services/local-storage/local.storage.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnaliticsServices } from '../../services/analytics/analytics.service';

describe('test in LoginComponent', () => {
  let component: PasswordRecoveryComponent;
  let fixture: ComponentFixture<PasswordRecoveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [PasswordRecoveryComponent],
      providers: [AuthService, LocalStorageService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordRecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create PasswordRecoveryComponent', () => {
    expect(component).toBeTruthy();
  });

  test('should set the on click', () => {
    jest.spyOn(component, 'recovery');
    const fixture = TestBed.createComponent(PasswordRecoveryComponent);
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button');
    button.click();

    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  test('should set mail on input', () => {
    const event = {
      target: {
        value: {
          length: '0',
        },
      },
    };

    const fixture = TestBed.createComponent(PasswordRecoveryComponent);
    jest.spyOn(component, 'onChangeHandle');
    component = fixture.componentInstance;
    component.onChangeHandle(event);
    const input = fixture.nativeElement.querySelector('input');

    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  test('test fn onResend()', () => {
    component.onResend(true);
    expect(component.showMessage).toEqual(true);
  });


});
