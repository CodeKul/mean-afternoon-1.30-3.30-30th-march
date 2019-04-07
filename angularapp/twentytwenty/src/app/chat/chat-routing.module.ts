import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatListComponent } from './chat-list/chat-list.component';
import { RecentsComponent } from './recents/recents.component';

const routes: Routes = [
  {path : '', component : ChatListComponent},
  {path : 'recents', component : RecentsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
