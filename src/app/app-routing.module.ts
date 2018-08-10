import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'links', pathMatch: 'full' },
  { path: 'links', loadChildren: './links/links.module#LinksPageModule' },
  { path: 'nested', loadChildren: './tabs/tabs.module#TabsPageModule' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
