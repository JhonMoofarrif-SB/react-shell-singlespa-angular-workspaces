import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { AuthService } from '../../services/auth/auth.service';
import { LocalStorageService } from '../../services/local-storage/local.storage.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileButtonComponent } from './profile-button.component';
import { AnaliticsServices } from '../../services/analytics/analytics.service';

describe('test in LoginComponent', () => {
  let component: ProfileButtonComponent;
  let fixture: ComponentFixture<ProfileButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [ProfileButtonComponent],
      providers: [AnaliticsServices],
    }).compileComponents();
        const mockDataLayer = () => {
          return { push: () => null };
        };
        Object.defineProperty(window, 'dataLayer', { value: mockDataLayer() });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create ProfileButtonComponent', () => {
    expect(component).toBeTruthy();
  });

  test('should exist onclick()', () => {
    const event = { target: { value: 'id' } };
    component.onclick(event);
  });
});
