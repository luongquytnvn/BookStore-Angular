import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BookListComponent} from '../component/book/book-list/book-list.component';
import {BookCreateComponent} from '../component/book/book-create/book-create.component';
import {BookEditComponent} from '../component/book/book-edit/book-edit.component';
import {BookDeleteComponent} from '../component/book/book-delete/book-delete.component';
import {HomeComponent} from '../user/home/home.component';
import {RegisterComponent} from '../user/register/register.component';
import {BoardUserComponent} from '../user/board-user/board-user.component';
import {BoardModeratorComponent} from '../user/board-moderator/board-moderator.component';
import {ProfileComponent} from '../user/profile/profile.component';
import {LoginComponent} from '../user/login/login.component';
import {BoardAdminComponent} from '../user/board-admin/board-admin.component';


const routes: Routes = [
  {
    path: 'book-list', component: BookListComponent
  }, {
    path: 'book-create', component: BookCreateComponent
  }, {
    path: 'book-edit', component: BookEditComponent
  }, {
    path: 'book-delete', component: BookDeleteComponent
  },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
