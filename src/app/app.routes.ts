import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './views/pages/core/about/about.component';
import { HomeComponent } from './views/pages/core/home/home.component';
import { ContactComponent } from './views/pages/core/contact/contact.component';
import { UserDashboardComponent } from './views/pages/core/userdashboard/userdashboard.component';
import { ContentProviderComponent } from './views/pages/core/content-provider/create-content-provider/content-provider.component';
import { ContentAuthorizerComponent } from './views/pages/core/content-authorizer/create-content-authorizer/content-authorizer.component';
import { AdminDashboardComponent } from './views/pages/core/admin/dashboard/admin-dashboard.component';
import { ViewUsersComponent } from './views/pages/core/admin/users/view-users/view-users.component';
import { AddUsersComponent } from './views/pages/core/admin/users/add-users/add-users.component';
import { ChangePasswordComponent } from './views/pages/core/admin/users/change-password/change-password.component';
import { AddAuthorizersComponent } from './views/pages/core/admin/content-authorizer/add-authorizer/add-authorizers.component';
import { ViewAuthorizersComponent } from './views/pages/core/admin/content-authorizer/view-authorizer/view-authorizers.component';
import { AddProvidersComponent } from './views/pages/core/admin/content-provider/add-provider/add-providers.component';
import { ViewProvidersComponent } from './views/pages/core/admin/content-provider/view-provider/view-providers.component';
import { ViewConsumersComponent } from './views/pages/core/admin/content-consumer/view-consumer/view-consumers.component';
import { AddConsumersComponent } from './views/pages/core/admin/content-consumer/add-consumer/add-consumers.component';
import { ContentAuthorizerReportComponent } from './views/pages/core/admin/reports/content-authorizer/content-authorizer-report.component';
import { ContentProviderReportComponent } from './views/pages/core/admin/reports/content-provider/content-provider-report.component';
import { LoginComponent } from './views/forms/login/login.component';
import { ContentProviderDashboardComponent } from './views/pages/core/content-provider/dashboard/content-provider-dashboard.component';
import { ContentProviderProfileComponent } from './views/pages/core/content-provider/profile/content-provider-profile.component';
import { SingleSubmissionComponent } from './views/pages/core/content-provider/submissions/single-submission/single-submission.component';
import { MultipleSubmissionComponent } from './views/pages/core/content-provider/submissions/multiple-submission/multiple-submission.component';
import { ContentProviderHistoryComponent } from './views/pages/core/content-provider/history/content-provider-history.component';
import { ContentAuthorizerDashboardComponent } from './views/pages/core/content-authorizer/dashboard/dashboard.component';
import { ContentAuthorizerProfileComponent } from './views/pages/core/content-authorizer/profile/profile.component';
import { ContentAuthorizationComponent } from './views/pages/core/content-authorizer/content-authorization/content-authorization.component';
import { AuthorizationHistoryComponent } from './views/pages/core/content-authorizer/authorization-history/authorization-history.component';
import { ViewContentProvidersComponent } from './views/pages/core/content-authorizer/view-content-providers/ca-content-provider.component';
import { ArticlesComponent } from './views/pages/core/content-authorizer/content-authorization/articles/ca-articles.component';
import { AudioClipComponent } from './views/pages/core/content-authorizer/content-authorization/audio-clip/ca-audio-clip.component';
import { BooksComponent } from './views/pages/core/content-authorizer/content-authorization/books/ca-books.component';
import { CaseStudyComponent } from './views/pages/core/content-authorizer/content-authorization/case-study/ca-case-study.component';
import { ImagesComponent } from './views/pages/core/content-authorizer/content-authorization/images/ca-images.component';
import { VideoClipComponent } from './views/pages/core/content-authorizer/content-authorization/video-clip/ca-video-clip.component';
import { ArticlesHistoryComponent } from './views/pages/core/content-authorizer/authorization-history/articles/articles-history.component';
import { AudioClipHistoryComponent } from './views/pages/core/content-authorizer/authorization-history/audio-clip/audio-clip-history.component';
import { BooksHistoryComponent } from './views/pages/core/content-authorizer/authorization-history/books/books-history.component';
import { CaseStudyHistoryComponent } from './views/pages/core/content-authorizer/authorization-history/case-study/case-study-history.component';
import { ImagesHistoryComponent } from './views/pages/core/content-authorizer/authorization-history/images/images-history.component';
import { VideoClipHistoryComponent } from './views/pages/core/content-authorizer/authorization-history/video-clip/video-clip-history.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '_', loadChildren: './modules/domain-high-priority.module#DomainHighPriorityModule' },
  { path: 'sec', loadChildren: './modules/security.module#SecurityModule' },
  { path: 'contact', component: ContactComponent },
  { path: 'userdashboard', component: UserDashboardComponent },
  { path: 'content-provider', component: ContentProviderComponent},
  { path: 'content-authorizer', component: ContentAuthorizerComponent},
  { path: 'dashboard', component: AdminDashboardComponent},
  { path: 'users/view-users', component: ViewUsersComponent},
  { path: 'users/add-users', component: AddUsersComponent},
  { path: 'users/change-password', component: ChangePasswordComponent},
  { path: 'content-authorizer/view-authorizers', component: ViewAuthorizersComponent},
  { path: 'content-authorizer/add-authorizers', component: AddAuthorizersComponent},
  { path: 'content-provider/add-providers', component: AddProvidersComponent},
  { path: 'content-provider/view-providers', component: ViewProvidersComponent},
  { path: 'content-consumer/view-consumers', component: ViewConsumersComponent},
  { path: 'content-consumer/add-consumers', component: AddConsumersComponent},
  { path: 'reports/content-authorizer-report', component: ContentAuthorizerReportComponent},
  { path: 'reports/content-provider-report', component: ContentProviderReportComponent},
  { path: 'login', component: LoginComponent},
  { path: 'cp-dashboard', component: ContentProviderDashboardComponent},
  { path: 'cp-profile', component: ContentProviderProfileComponent},
  { path: 'submissions/cp-single-submission', component: SingleSubmissionComponent},
  { path: 'submissions/cp-multiple-submission', component: MultipleSubmissionComponent},
  { path: 'cp-history', component: ContentProviderHistoryComponent},
  { path: 'ca-dashboard', component: ContentAuthorizerDashboardComponent},
  { path: 'ca-profile', component: ContentAuthorizerProfileComponent},
  { path: 'ca-content-authorization', component: ContentAuthorizationComponent,
  children: [
    {path: 'ca-articles', component: ArticlesComponent},
    {path: 'ca-audio-clip', component: AudioClipComponent},
    {path: 'ca-books', component: BooksComponent},
    {path: 'ca-case-study', component: CaseStudyComponent},
    {path: 'ca-images', component: ImagesComponent},
    {path: 'ca-video-clip', component: VideoClipComponent},
    { path: '', redirectTo: 'ca-articles', pathMatch: 'full' }
  ]
},
  { path: 'ca-authorization-history', component: AuthorizationHistoryComponent,
  children: [
    {path: 'ca-articles-history', component: ArticlesHistoryComponent},
    {path: 'ca-audio-clip-history', component: AudioClipHistoryComponent},
    {path: 'ca-books-history', component: BooksHistoryComponent},
    {path: 'ca-case-study-history', component: CaseStudyHistoryComponent},
    {path: 'ca-images-history', component: ImagesHistoryComponent},
    {path: 'ca-video-clip-history', component: VideoClipHistoryComponent},
    { path: '', redirectTo: 'ca-articles-history', pathMatch: 'full' }
  ]
},
  { path: 'ca-content-providers', component: ViewContentProvidersComponent},
  { path: '', redirectTo: 'ca-dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

