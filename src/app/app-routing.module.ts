import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoReviewComponent } from './components/photo-review/photo-review.component';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { PhotoFormComponent } from './components/photo-form/photo-form.component';

const routes: Routes = [
{
path:"photo/:id",
component:PhotoReviewComponent

},
{
path:"photos",
component: PhotoListComponent
},
{
path:"photo/new",
component:PhotoFormComponent
},{
  
    path: '',
    redirectTo: '/photos',
    pathMatch: 'full'
  
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
