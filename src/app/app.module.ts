import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';

import {HomeComponent} from './pages/home/home.component';
import {GettingStartedComponent} from './pages/gettingstarted/gettingstarted.component';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgxAudioPlayerModule} from 'projects/ngx-audio-player/src/public_api';
import {MatButtonModule} from '@angular/material/button';

import {NavBarModule} from './shared/navbar';
import {FooterModule} from './shared/footer';
import {RegisterComponent} from './form-login/register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {LoginComponent} from './form-login/login/login.component';
import {UserAccountComponent} from './form-login/user-account/user-account.component';
import {UploadAvatarComponent} from './upload/upload-avatar/upload-avatar.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {AngularFireStorageModule} from "@angular/fire/storage";
// @ts-ignore
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment.prod";
import {AuthInterceptor, httpInterceptorProvider} from "./security/auth.interceptor";
import {CreateCategoryComponent} from './content/categoryManage/create-category/create-category.component';
import { PageCategoryComponent } from './content/categoryManage/page-category/page-category.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import { UpdateCategoryComponent } from './content/categoryManage/update-category/update-category.component';
import { DialogComponent } from './content/categoryManage/dialog/dialog.component';
import {MatDialogModule} from "@angular/material/dialog";

export const appRoutes: Routes = [
    {path: '', component: HomeComponent, data: {title: 'Home'}},
    {path: 'register', component: RegisterComponent, data: {title: 'Register'}},
    {path: 'login', component: LoginComponent},
    {path: 'user-account', component: UserAccountComponent},
    {path: 'create-category', component: CreateCategoryComponent},
    {path: 'page-category', component: PageCategoryComponent},
    {path: 'update-category/:id', component: UpdateCategoryComponent},
    {
        path: 'guide/getting-started',
        component: GettingStartedComponent,
        data: {title: 'Getting Started'}
    }
];

@NgModule({
    declarations: [AppComponent, HomeComponent, GettingStartedComponent, RegisterComponent, LoginComponent, UserAccountComponent, UploadAvatarComponent, CreateCategoryComponent, PageCategoryComponent, UpdateCategoryComponent, DialogComponent],
    imports: [
        FormsModule,
        MatInputModule,
        HttpClientModule,
        BrowserModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatRadioModule,
        MatCheckboxModule,
        MatSlideToggleModule,
        MatButtonModule,
        BrowserAnimationsModule,
        NavBarModule, FooterModule,
        NgxAudioPlayerModule,
        AngularFireStorageModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        RouterModule.forRoot(appRoutes, {useHash: false}), MatFormFieldModule, ReactiveFormsModule, MatProgressSpinnerModule, MatPaginatorModule, MatDialogModule
    ],
    providers: [httpInterceptorProvider],
    bootstrap: [AppComponent]
})
export class AppModule {

}
