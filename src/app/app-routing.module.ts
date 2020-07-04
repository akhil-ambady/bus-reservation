import { SelectComponent } from './select/select.component';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopnavComponent } from './topnav/topnav.component';

const routes: Routes = [
    { path: '', component: TopnavComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'user', component: UserComponent },
    { path: '*', component: TopnavComponent },
    { path: 'search', component: SearchComponent },
    { path: 'select', component: SelectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
