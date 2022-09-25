import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../pages/about/about.component';
import { ContactDetailsComponent } from '../pages/contacts/contact-details/contact-details.component';
import { ContactsComponent } from '../pages/contacts/contacts-page/contacts.component';
import { EditContactComponent } from '../pages/contacts/edit-contact/edit-contact.component';
import { NewContactComponent } from '../pages/contacts/new-contact/new-contact.component';
import { LoginPageComponent } from '../pages/Users/login-page/login-page.component';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';
import { SignUpComponent } from '../pages/Users/sign-up/sign-up.component';
import { CustomersPageComponent } from '../pages/customers/customers-page/customers-page.component';
import { NewCustomerComponent } from '../pages/customers/new-customer/new-customer.component';
import { CustomerDetailsComponent } from '../pages/customers/customer-details/customer-details.component';
import { EditCustomerComponent } from '../pages/customers/edit-customer/edit-customer.component';
import { LeadsComponent } from '../pages/leads/leads-page/leads.component';
import { LeadsDetailsComponent } from '../pages/leads/leads-details/leads-details.component';
import { AuthGuard } from './auth.guard';
import { LoggedGuard } from './logged.guard';
LeadsDetailsComponent
const routes: Routes = [
{ path:'',component: LoginPageComponent},
 { path:'contacts',component: ContactsComponent,
 canActivate: [AuthGuard],},
 { path:'contacts/new-contact',component: NewContactComponent,
    canActivate: [AuthGuard],},
 { path:'contacts/contact-details/:id',component: ContactDetailsComponent,
 canActivate: [AuthGuard],},
 { path:'contacts/edit-contact/:id',component: EditContactComponent,
 canActivate: [AuthGuard],},
 { path:'customers',component: CustomersPageComponent,
 canActivate: [AuthGuard],},
 { path:'customers/new-customer',component: NewCustomerComponent,
 canActivate: [AuthGuard],},
 { path:'customers/customer-details/:id',component: CustomerDetailsComponent,
 canActivate: [AuthGuard],},
 { path:'customers/edit-customer/:id',component: EditCustomerComponent,
 canActivate: [AuthGuard],},
 { path:'leads',component: LeadsComponent,
 canActivate: [AuthGuard],},
 { path:'leads/leads-details/:id',component: LeadsDetailsComponent,
 canActivate: [AuthGuard],},
 { path:'about',component: AboutComponent},
 { path:'login',component: LoginPageComponent, canActivate: [LoggedGuard]},
 { path:'signUp',component: SignUpComponent, canActivate: [LoggedGuard]},
 { path:'signOut',component: ContactsComponent},
 { path:'**',component: PageNotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
