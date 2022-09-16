import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../pages/about/about.component';
import { ContactDetailsComponent } from '../pages/contacts/contact-details/contact-details.component';
import { ContactsComponent } from '../pages/contacts/contacts.component';
import { EditContactComponent } from '../pages/contacts/edit-contact/edit-contact.component';
import { NewContactComponent } from '../pages/contacts/new-contact/new-contact.component';
import { LoginPageComponent } from '../pages/Users/login-page/login-page.component';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';
import { SignUpComponent } from '../pages/Users/sign-up/sign-up.component';

const routes: Routes = [
{ path:'',component: LoginPageComponent},
 { path:'contacts',component: ContactsComponent},
 { path:'contacts/new-contact',component: NewContactComponent},
 { path:'contacts/contact-details/:id',component: ContactDetailsComponent},
 { path:'contacts/edit-contact/:id',component: EditContactComponent},
 { path:'about',component: AboutComponent},
 { path:'login',component: LoginPageComponent},
 { path:'signUp',component: SignUpComponent},
 { path:'signOut',component: ContactsComponent},
 { path:'**',component: PageNotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
