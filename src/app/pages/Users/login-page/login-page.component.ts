import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from './login';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styles: [
  ]
})
export class LoginPageComponent  {
  login:Login = {email: "" , password: ""}
onSumbit({value, valid}: NgForm){
  console.log(value);
  console.log(valid);

}
onResetForm(form:NgForm){
  form.resetForm()
}


}
