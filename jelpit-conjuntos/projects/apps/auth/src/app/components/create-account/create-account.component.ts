import { Component, Input, OnInit } from '@angular/core';
import { profileListModel } from "../../interfaces/create-account";
import {mockCreateAccount} from '../../common/ProfileList'

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']

})
export class CreateAccountComponent implements OnInit {

  @Input() ProfileList: profileListModel[] = []
  @Input() title: string = ""
  @Input() subtitle: string = ""
  @Input() footerQuestion: string = ""
  @Input() titleFooterUrl: string = ""
  @Input() footerUrl: string = ""
  @Input() imgLogo: string = ""

  constructor(

  ) {}

  ngOnInit(): void {

    console.log("create account");
    

   this.ProfileList = mockCreateAccount.ProfileListItems
   this.title = mockCreateAccount.title
   this.subtitle = mockCreateAccount.subtitle
   this.footerQuestion = mockCreateAccount.footerQuestion
   this.titleFooterUrl = mockCreateAccount.titleFooterUrl
   this.footerUrl = mockCreateAccount.footerUrl
   this.imgLogo = mockCreateAccount.imgLogo
  }
}
