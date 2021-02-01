import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthguardService } from './guard/authguard.service'

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthPageModule)
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthguardService]
  },
  {
    path: 'sensors',
    loadChildren: () => import('./sensors/sensors.module').then( m => m.SensorsPageModule)
  },
  {
    path: 'userlogs',
    loadChildren: () => import('./userlogs/userlogs.module').then( m => m.UserlogsPageModule)
  }

];

@NgModule({
  providers: [AuthguardService],
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
