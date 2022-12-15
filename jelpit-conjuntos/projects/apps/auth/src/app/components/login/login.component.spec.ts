import { ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { AuthService } from '../../services/auth/auth.service';
import { LocalStorageService } from '../../services/local-storage/local.storage.service';
import { LoginComponent } from './login.component';
import { AnaliticsServices } from '../../services/analytics/analytics.service';
import { ValidationsServices } from '../../services/validations/validation.service';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginModule } from './login.module';
import { FormsModule } from '@angular/forms';
import { AuthFirebaseService } from '../../services/auth-firebase/auth-firebase.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { GoogleAuthProvider } from 'firebase/auth';
import { SocialMediaService } from '../../services/social-media/social-media.service';
jest.mock('../../services/analytics/analytics.service');

describe('test in LoginComponent HTML', () => {
  let fixture: ComponentFixture<LoginComponent>;
  let componentFixture: LoginComponent;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, LoginModule, FormsModule, HttpClientModule],
      declarations: [LoginComponent],
      providers: [AuthService, LocalStorageService, AnaliticsServices, ValidationsServices, SocialMediaService],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    componentFixture = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show or hidden password', () => {
    let treeNodeElement: HTMLElement = fixture.nativeElement.querySelector(('#eyePassword'));
    // mostrar contraseña
    treeNodeElement.click();
    expect(componentFixture.inputPassword).toEqual("text");
    // mostrar contraseña
    treeNodeElement.click();
    expect(componentFixture.inputPassword).toEqual("password");
  })

  it('should change chekbox true o false', () => {
    let checkBox: HTMLElement = fixture.nativeElement.querySelector(('#ch'));
    // activar Recordarme
    checkBox.click();
    expect(componentFixture.checked).toEqual(true);
    // desactivar Recordarme
    checkBox.click();
    expect(componentFixture.checked).toEqual(false);
  })


});

describe('test in LoginComponent', () => {

  let component: LoginComponent;
  let authService: AuthService;
  let analitycService: AnaliticsServices;
  let validationService: ValidationsServices;
  let authFirebase: AuthFirebaseService;
  let socialMedia: SocialMediaService;
  let spy: any;

  beforeEach(async () => {
    //Creamos las instancias
    authService = new AuthService();
    analitycService = new AnaliticsServices();
    validationService = new ValidationsServices();
    socialMedia = new SocialMediaService(authFirebase, authService)
    //Se las pasamos al componente
    component = new LoginComponent(analitycService, authService, validationService, authFirebase, socialMedia);
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, LoginModule, FormsModule, HttpClientModule],
      declarations: [component],
      providers: [authService, LocalStorageService, AnaliticsServices, ValidationsServices, AuthFirebaseService],
    }).compileComponents();
  });

  it('should create LoginComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should validate data Password and Email', () => {
    //Validando el Email erroneo
    component.email = "email-erroeno"
    component.validateData("email");
    expect(component.errors.errorEmail).toEqual("Por favor ingresa un correo electrónico válido.");

    //Validando el Email Correcto
    component.email = "correo@correo.com"
    component.validateData("email");
    expect(component.errors.errorEmail).toEqual("");

    //validando la Password Erronea
    component.password = "pass123"
    component.validateData("password");

    expect(component.errors.errorPassword).toEqual("Por favor ingresa una contraseña válida.");

    //Validando Password Correcta
    component.password = "Password756*"
    component.validateData("password");

    expect(component.errors.errorPassword).toEqual("");
  })

  it('should save data userLogin in LocalStorage', () => {
    const loginRequest = {
      email: "correo@correo.com",
      password: "Password756*"
    }
    localStorage.setItem("remember", JSON.stringify(loginRequest))
    component.checkRemember();

    expect(component.email).toEqual("correo@correo.com");
    expect(component.password).toEqual("Password756*");
    expect(component.checked).toEqual(true);
  })

  it('should do not Login Email empty', async () => {
    component.email = "";
    await component.login();

    expect(component.errors.errorEmail).toEqual("Por favor ingrese campo obligatorio");
  })

  it('should do not Login Password empty', async () => {
    component.email = "correo@correo.com";
    component.password = "";
    await component.login();

    expect(component.errors.errorPassword).toEqual("Por favor ingrese campo obligatorio");
  })

  it('should login successful', async () => {
    component.email = "correo@correo.com";
    component.password = "Recaudo324$";
    component.checked = true;
    const result = {
      data: {
        transversalLoginUserV2: {
          accessToken: ""
        }
      }
    };
    spy = jest.spyOn(authService, 'doLogin');

    spy.mockResolvedValue(result);
    const callFn = await component.login();
    expect(callFn).toEqual(undefined);
  });

  it('should login failed', async () => {
    component.email = "correo@correo.com";
    component.password = "Recaudo324$";
    component.checked = false;
    localStorage.removeItem("remember");

    const result = "Failed login";

    spy = jest.spyOn(authService, 'doLogin');

    spy.mockResolvedValue(result);
    const callFn = await component.login();
    expect(callFn).toEqual(undefined);
  });

  it('should login no execute for error in pass or email', async () => {
    component.errors.errorPassword = "Error";

    const callFn = await component.login();
    expect(callFn).toEqual(undefined);
  });

  it('should Call Fn Social Media for view Google and Facebook icons', async () => {
    component.errors.errorPassword = "Error";

    const result = true;

    spy = jest.spyOn(authService, 'socialMedia');
    spy.mockResolvedValue(result);
    await component.getSocialMedia();
    expect(component.socialMedia.google).toEqual(true);
    expect(component.socialMedia.facebook).toEqual(true);
  });
});

describe('test login', () => {
  let service: AuthFirebaseService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let component: LoginComponent;
  let authService: AuthService;
  let analitycService: AnaliticsServices;
  let validationService: ValidationsServices;
  let socialMedia: SocialMediaService;
  let spy: any;

  beforeEach(() => {
    authService = new AuthService();
    analitycService = new AnaliticsServices();
    validationService = new ValidationsServices();
    socialMedia = new SocialMediaService(service, authService)
    component = new LoginComponent(analitycService, authService, validationService, service, socialMedia);
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
    });
    service = TestBed.inject(AuthFirebaseService);
    injector = getTestBed();
    httpMock = injector.inject(HttpTestingController);
  });

  test('should call getConfig', async () => {
    const provider = new GoogleAuthProvider();

    jest.spyOn(service, "getConfig");
    jest.spyOn(socialMedia, "loginWithSocial").mockResolvedValue("Error al iniciar sesion")
    component.getConfigProvider(provider)

  })
})
