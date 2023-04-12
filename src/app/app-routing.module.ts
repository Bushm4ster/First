import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberFormComponent } from './member-form/member-form.component';
import { MemberListComponent } from './member-list/member-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolsComponent } from './tools/tools.component';
import { ArticleComponent } from './article/article.component';
import { EventComponent } from './event/event.component';
import { ArticleAffectComponent } from './article-affect/article-affect.component';
import { LoginComponent } from './login/login.component';
import { EventCreateComponent } from './event-create/event-create.component';

const routes: Routes = [
  {
    path:"members",
    pathMatch:"full",
    component:MemberListComponent
  },
  {
    path:"create",
    pathMatch:"full",
    component:MemberFormComponent
  },
  {
    path:"edit/:id",
    pathMatch:"full",
    component:MemberFormComponent
  },
  {
    path:"affect/:id",
    pathMatch:"full",
    component:ArticleAffectComponent
  },
  {
    path:"dashboard",
    pathMatch:"full",
    component:DashboardComponent
  },
  {
    path:"tools",
    pathMatch:"full",
    component:ToolsComponent
  },
  {
    path:"articles",
    pathMatch:"full",
    component:ArticleComponent
  },
  {
    path:"events",
    pathMatch:"full",
    component:EventComponent
  },
  {
    path:"eventcreate",
    pathMatch:"full",
    component:EventCreateComponent
  },
  {
    path:"login",
    pathMatch:"full",
    component:LoginComponent
  },
  {
    path:"",
    pathMatch:"full",
    redirectTo:"login"
  },
  {
    path:"**",
    pathMatch:"full",
    redirectTo:"login"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
