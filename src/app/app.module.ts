import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { authInterceptorProviders } from './user/_helpers/auth.interceptor';
import {LoginComponent} from './user/login/login.component';
import {RegisterComponent} from './user/register/register.component';
import {BoardAdminComponent} from './user/board-admin/board-admin.component';
import {ProfileComponent} from './user/profile/profile.component';
import {HomeComponent} from './user/home/home.component';
import {BoardModeratorComponent} from './user/board-moderator/board-moderator.component';
import {BoardUserComponent} from './user/board-user/board-user.component';
import { HomePageComponent } from './component/public/home-page/home-page.component';
import { AuthorListComponent } from './component/admin/author/author-list/author-list.component';
import { AuthorCreateComponent } from './component/admin/author/author-create/author-create.component';
import { AuthorEditComponent } from './component/admin/author/author-edit/author-edit.component';
import { AuthorDeleteComponent } from './component/admin/author/author-delete/author-delete.component';
import { AuthorDetailComponent } from './component/admin/author/author-detail/author-detail.component';
import { BookDetailComponent } from './component/admin/book/book-detail/book-detail.component';
import { CategoryListComponent } from './component/admin/category/category-list/category-list.component';
import { CategoryCreateComponent } from './component/admin/category/category-create/category-create.component';
import { CategoryEditComponent } from './component/admin/category/category-edit/category-edit.component';
import { CategoryDeleteComponent } from './component/admin/category/category-delete/category-delete.component';
import { CategoryDetailComponent } from './component/admin/category/category-detail/category-detail.component';
import { LanguageListComponent } from './component/admin/language/language-list/language-list.component';
import { LanguageCreateComponent } from './component/admin/language/language-create/language-create.component';
import { LanguageEditComponent } from './component/admin/language/language-edit/language-edit.component';
import { LanguageDeleteComponent } from './component/admin/language/language-delete/language-delete.component';
import { LanguageDetailComponent } from './component/admin/language/language-detail/language-detail.component';
import { PublishingListComponent } from './component/admin/publishing/publishing-list/publishing-list.component';
import { PublishingCreateComponent } from './component/admin/publishing/publishing-create/publishing-create.component';
import { PublishingEditComponent } from './component/admin/publishing/publishing-edit/publishing-edit.component';
import { PublishingDeleteComponent } from './component/admin/publishing/publishing-delete/publishing-delete.component';
import { PublishingDetailComponent } from './component/admin/publishing/publishing-detail/publishing-detail.component';
import {BookDeleteComponent} from './component/admin/book/book-delete/book-delete.component';
import {BookEditComponent} from './component/admin/book/book-edit/book-edit.component';
import {BookCreateComponent} from './component/admin/book/book-create/book-create.component';
import {BookListComponent} from './component/admin/book/book-list/book-list.component';
import { BookPublicComponent } from './component/public/book-public/book-public.component';
import { BookHotComponent } from './component/public/book-hot/book-hot.component';
import { BookNewComponent } from './component/public/book-new/book-new.component';
import { BookCategoryComponent } from './component/public/book-category/book-category.component';
import { HeaderComponent } from './component/public/header/header.component';
import { FooterComponent } from './component/public/footer/footer.component';
import { CoverComponent } from './component/public/cover/cover.component';
import { CartComponent } from './component/public/cart/cart.component';
import { CartListComponent } from './component/public/cart-list/cart-list.component';
import { OrderManagerComponent } from './component/admin/order-manager/order-manager.component';
import { BookFavoriteComponent } from './component/public/book-favorite/book-favorite.component';
import { BookLanguageComponent } from './component/public/book-language/book-language.component';
import { BookAuthorComponent } from './component/public/book-author/book-author.component';
import { BookPublishingComponent } from './component/public/book-publishing/book-publishing.component';
import { BookCardComponent } from './component/public/book-card/book-card.component';
import { OrderListComponent } from './user/order-list/order-list.component';
import { ChangePasswordComponent } from './user/change-password/change-password.component';
import { UserOrderListComponent } from './user/user-order-list/user-order-list.component';
import { CardComponent } from './component/public/card/card.component';
import { OrderAdminListComponent } from './component/admin/order-admin-list/order-admin-list.component';
import { EditProfileComponent } from './user/edit-profile/edit-profile.component';
import { SearchComponent } from './component/public/search/search.component';
import { SearchAdvancedComponent } from './component/public/search-advanced/search-advanced.component';
import {BookDetailPublicComponent} from './component/public/book-detail-public/book-detail-public.component';
import {AboutUsComponent} from './component/public/about-us/about-us.component';
import { BookPriceComponent } from './component/public/book-price/book-price.component';
import { BookCommentComponent } from './component/public/book-comment/book-comment.component';
import { CommentComponent } from './component/public/comment/comment.component';
import { PaymentCreateComponent } from './component/admin/payment/payment-create/payment-create.component';
import { PaymentDeleteComponent } from './component/admin/payment/payment-delete/payment-delete.component';
import { PaymentListComponent } from './component/admin/payment/payment-list/payment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BoardAdminComponent,
    BoardUserComponent,
    BoardModeratorComponent,
    ProfileComponent,
    HomePageComponent,
    AuthorListComponent,
    AuthorCreateComponent,
    AuthorEditComponent,
    AuthorDeleteComponent,
    AuthorDetailComponent,
    BookDetailComponent,
    BookDeleteComponent,
    BookEditComponent,
    BookCreateComponent,
    BookListComponent,
    CategoryListComponent,
    CategoryCreateComponent,
    CategoryEditComponent,
    CategoryDeleteComponent,
    CategoryDetailComponent,
    LanguageListComponent,
    LanguageCreateComponent,
    LanguageEditComponent,
    LanguageDeleteComponent,
    LanguageDetailComponent,
    PublishingListComponent,
    PublishingCreateComponent,
    PublishingEditComponent,
    PublishingDeleteComponent,
    PublishingDetailComponent,
    BookPublicComponent,
    BookHotComponent,
    BookNewComponent,
    BookCategoryComponent,
    HeaderComponent,
    FooterComponent,
    CoverComponent,
    CartComponent,
    CartListComponent,
    OrderManagerComponent,
    BookFavoriteComponent,
    BookLanguageComponent,
    BookAuthorComponent,
    BookPublishingComponent,
    BookCardComponent,
    OrderListComponent,
    ChangePasswordComponent,
    UserOrderListComponent,
    CardComponent,
    OrderAdminListComponent,
    EditProfileComponent,
    SearchComponent,
    SearchAdvancedComponent,
    BookDetailPublicComponent,
    AboutUsComponent,
    BookPriceComponent,
    BookCommentComponent,
    CommentComponent,
    PaymentCreateComponent,
    PaymentDeleteComponent,
    PaymentListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
