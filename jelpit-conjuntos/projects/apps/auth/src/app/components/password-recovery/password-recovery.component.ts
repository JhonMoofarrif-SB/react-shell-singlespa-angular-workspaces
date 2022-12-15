import { Component, OnInit,Input, Output, ComponentFactoryResolver } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['../../app.component.scss', './password-recovery.component.scss']
})
export class PasswordRecoveryComponent implements OnInit {

  @Input() createAccountLink: string = "/"
  @Output() email: string = "";
  @Output() message: string = "";
  showMessage: boolean = false;


  constructor(
    private _authService: AuthService,
  ) {}
  
  ngOnInit(): void {
    this.createAccountLink = "create-account"
  }

  get recoveryEmail(){
    return this.userEmail.get('email')
  }

  recovery() {
    this._authService.doForgotPassword(this.email)
    .then((response) => {
      this.showMessage = true
      this.message = ""
    })
    .catch((error) =>  this.message = error.message)
  };

  onChangeHandle(event: any){
    this.email = event.target.value
    if(event.target.value.length == 0){
      this.message = ""
    }
  }

  onResend(evt: boolean) {
    this.showMessage = evt
  };


  userEmail = new FormGroup({
    email: new FormControl('',[
    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
});
}
