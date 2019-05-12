import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent} from './users/users.component';
import { DeatilsComponent} from './deatils/deatils.component';
import { PostsComponent} from './posts/posts.component';



const routes: Routes = [
{
	path: "",
	component: UsersComponent

},
{
	path: "deatils/:id",
	component: DeatilsComponent

},
{
	path: "posts",
	component: PostsComponent

},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
