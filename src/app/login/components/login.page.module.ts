import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginPage } from './login.page';
import {IonicModule} from '@ionic/angular';

const routes = [
  {
    path: '',
    component: LoginPage,
  }
];

@NgModule({
  declarations: [LoginPage],
  imports: [RouterModule.forChild(routes), ReactiveFormsModule, IonicModule, FormsModule]
})
export class LoginPageModule {}
