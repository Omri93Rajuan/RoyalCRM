import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './root/app.component';
import { ContactsComponent } from './pages/contacts/contacts-page/contacts.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainComponent } from './layout/main/main.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SideNavComponent } from './layout/main/side-nav/side-nav.component';
import { LogoLinkComponent } from './layout/header/top-nav/logo-link/logo-link.component';
import { HamburgerComponent } from './layout/header/top-nav/hamburger/hamburger.component';
import { LeftLinksComponent } from './layout/header/top-nav/left-links/left-links.component';
import { RightLinksComponent } from './layout/header/top-nav/right-links/right-links.component';
import { OnLoginComponent } from './layout/header/top-nav/right-links/on-login/on-login.component';
import { OnWatchComponent } from './layout/header/top-nav/right-links/on-watch/on-watch.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { NavLinkTopComponent } from './components/nav-link-top/nav-link-top.component';
import { RandomNumPipe } from './pipes/random-num.pipe';
import { ToUpperCasePipe } from './pipes/to-upper-case.pipe';
import { SideNavLinkComponent } from './layout/main/side-nav/side-nav-link/side-nav-link.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { SignUpComponent } from './pages/Users/sign-up/sign-up.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './pages/Users/login-page/login-page.component';
import { NewContactComponent } from './pages/contacts/new-contact/new-contact.component';
import { ContactDetailsComponent } from './pages/contacts/contact-details/contact-details.component';
import { EditContactComponent } from './pages/contacts/edit-contact/edit-contact.component';
import { ContactFormComponent } from './pages/contacts/contact-form/contact-form.component';
import { AgePipe } from './pipes/age.pipe';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ContactsTableComponent } from './pages/contacts/contacts-display-mode/contacts-table/contacts-table.component';
import { ContactsFoldersComponent } from './pages/contacts/contacts-display-mode/contacts-folders/contacts-folders.component';
import { DisplayModeControllersComponent } from './components/display-mode-controllers/display-mode-controllers.component';
import { ContactsCardsComponent } from './pages/contacts/contacts-display-mode/contacts-cards/contacts-cards.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { CustomersPageComponent } from './pages/customers/customers-page/customers-page.component';
import { CustomersFoldersComponent } from './pages/customers/customers-display-mode/customers-folders/customers-folders.component';
import { CustomersTableComponent } from './pages/customers/customers-display-mode/customers-table/customers-table.component';
import { CustomerFormComponent } from './pages/customers/customer-form/customer-form.component';
import { EditCustomerComponent } from './pages/customers/edit-customer/edit-customer.component';
import { NewCustomerComponent } from './pages/customers/new-customer/new-customer.component';
import { CustomerDetailsComponent } from './pages/customers/customer-details/customer-details.component';
import { CustomersCardsComponent } from './pages/customers/customers-display-mode/customers-cards/customers-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    SideNavComponent,
    LogoLinkComponent,
    HamburgerComponent,
    LeftLinksComponent,
    RightLinksComponent,
    OnLoginComponent,
    OnWatchComponent,
    PageHeaderComponent,
    NavLinkTopComponent,
    RandomNumPipe,
    ToUpperCasePipe,
    SideNavLinkComponent,
    ContactComponent,
    AboutComponent,
    SignUpComponent,
    PageNotFoundComponent,
    LoginPageComponent,
    NewContactComponent,
    ContactDetailsComponent,
    EditContactComponent,
    ContactFormComponent,
    AgePipe,
    SearchBarComponent,
    ContactsTableComponent,
    ContactsFoldersComponent,
    DisplayModeControllersComponent,
    ContactsCardsComponent,
    CustomersPageComponent,
    CustomersFoldersComponent,
    CustomersTableComponent,
    CustomerFormComponent,
    EditCustomerComponent,
    NewCustomerComponent,
    CustomerDetailsComponent,
    CustomersCardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
