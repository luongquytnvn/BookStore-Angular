import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../user/home/home.component';
import {RegisterComponent} from '../user/register/register.component';
import {BoardUserComponent} from '../user/board-user/board-user.component';
import {BoardModeratorComponent} from '../user/board-moderator/board-moderator.component';
import {ProfileComponent} from '../user/profile/profile.component';
import {LoginComponent} from '../user/login/login.component';
import {BoardAdminComponent} from '../user/board-admin/board-admin.component';
import {HomePageComponent} from '../component/public/home-page/home-page.component';
import {BookListComponent} from '../component/admin/book/book-list/book-list.component';
import {BookCreateComponent} from '../component/admin/book/book-create/book-create.component';
import {BookEditComponent} from '../component/admin/book/book-edit/book-edit.component';
import {BookDeleteComponent} from '../component/admin/book/book-delete/book-delete.component';
import {BookDetailComponent} from '../component/admin/book/book-detail/book-detail.component';
import {AuthorListComponent} from '../component/admin/author/author-list/author-list.component';
import {AuthorCreateComponent} from '../component/admin/author/author-create/author-create.component';
import {AuthorEditComponent} from '../component/admin/author/author-edit/author-edit.component';
import {AuthorDeleteComponent} from '../component/admin/author/author-delete/author-delete.component';
import {AuthorDetailComponent} from '../component/admin/author/author-detail/author-detail.component';
import {CategoryListComponent} from '../component/admin/category/category-list/category-list.component';
import {CategoryCreateComponent} from '../component/admin/category/category-create/category-create.component';
import {CategoryEditComponent} from '../component/admin/category/category-edit/category-edit.component';
import {CategoryDeleteComponent} from '../component/admin/category/category-delete/category-delete.component';
import {CategoryDetailComponent} from '../component/admin/category/category-detail/category-detail.component';
import {CommentListComponent} from '../component/admin/comment/comment-list/comment-list.component';
import {CommentCreateComponent} from '../component/admin/comment/comment-create/comment-create.component';
import {CommentEditComponent} from '../component/admin/comment/comment-edit/comment-edit.component';
import {CommentDeleteComponent} from '../component/admin/comment/comment-delete/comment-delete.component';
import {CommentDetailComponent} from '../component/admin/comment/comment-detail/comment-detail.component';
import {LanguageListComponent} from '../component/admin/language/language-list/language-list.component';
import {LanguageCreateComponent} from '../component/admin/language/language-create/language-create.component';
import {LanguageEditComponent} from '../component/admin/language/language-edit/language-edit.component';
import {LanguageDeleteComponent} from '../component/admin/language/language-delete/language-delete.component';
import {LanguageDetailComponent} from '../component/admin/language/language-detail/language-detail.component';
import {PublishingListComponent} from '../component/admin/publishing/publishing-list/publishing-list.component';
import {PublishingCreateComponent} from '../component/admin/publishing/publishing-create/publishing-create.component';
import {PublishingEditComponent} from '../component/admin/publishing/publishing-edit/publishing-edit.component';
import {PublishingDeleteComponent} from '../component/admin/publishing/publishing-delete/publishing-delete.component';
import {PublishingDetailComponent} from '../component/admin/publishing/publishing-detail/publishing-detail.component';
import {BookPublicComponent} from '../component/public/book-public/book-public.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'book-list', component: BookListComponent },
  { path: 'book-create', component: BookCreateComponent },
  { path: 'book-edit/:id', component: BookEditComponent },
  { path: 'book-delete/:id', component: BookDeleteComponent },
  { path: 'book-detail/:id', component: BookDetailComponent },
  { path: 'author-list', component: AuthorListComponent },
  { path: 'author-create', component: AuthorCreateComponent },
  { path: 'author-edit/:id', component: AuthorEditComponent },
  { path: 'author-delete/:id', component: AuthorDeleteComponent },
  { path: 'author-detail/:id', component: AuthorDetailComponent },
  { path: 'category-list', component: CategoryListComponent },
  { path: 'category-create', component: CategoryCreateComponent },
  { path: 'category-edit/:id', component: CategoryEditComponent },
  { path: 'category-delete/:id', component: CategoryDeleteComponent },
  { path: 'category-detail/:id', component: CategoryDetailComponent },
  { path: 'comment-list', component: CommentListComponent },
  { path: 'comment-create', component: CommentCreateComponent },
  { path: 'comment-edit/:id', component: CommentEditComponent },
  { path: 'comment-delete/:id', component: CommentDeleteComponent },
  { path: 'comment-detail/:id', component: CommentDetailComponent },
  { path: 'language-list', component: LanguageListComponent },
  { path: 'language-create', component: LanguageCreateComponent },
  { path: 'language-edit/:id', component: LanguageEditComponent },
  { path: 'language-delete/:id', component: LanguageDeleteComponent },
  { path: 'language-detail/:id', component: LanguageDetailComponent },
  { path: 'publishing-list', component: PublishingListComponent },
  { path: 'publishing-create', component: PublishingCreateComponent },
  { path: 'publishing-edit/:id', component: PublishingEditComponent },
  { path: 'publishing-delete/:id', component: PublishingDeleteComponent },
  { path: 'publishing-detail/:id', component: PublishingDetailComponent },
  { path: 'book-public', component: BookPublicComponent },
  { path: '', redirectTo: '/book-public', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
