import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { AuthService } from '../../services/auth/auth.service';
import { SendMessageComponent } from './send-message.component';
import { LocalStorageService } from '../../services/local-storage/local.storage.service';
import { FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';


describe('test in LoginComponent', () => {
  let component: SendMessageComponent;
  let fixture: ComponentFixture<SendMessageComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [SendMessageComponent],
      providers: [AuthService, LocalStorageService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create SendMessageComponent', () => {
    expect(component).toBeTruthy();
  });
  
  test('should set the on click', fakeAsync(() => {
      jest.spyOn(component, 'onResendEvent');
      const fixture = TestBed.createComponent(SendMessageComponent);
    
      const button = fixture.nativeElement.querySelector('#resendButton');
      button.click(); 
    
      fixture.detectChanges();
      expect(component).toBeTruthy();;
  }));
});
