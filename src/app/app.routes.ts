import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlatformDetailComponent } from './pages/platform-detail/platform-detail.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'platform/:id', component: PlatformDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
