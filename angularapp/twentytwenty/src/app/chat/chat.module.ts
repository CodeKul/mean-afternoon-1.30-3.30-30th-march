import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatListComponent } from './chat-list/chat-list.component';
import { RecentsComponent } from './recents/recents.component';

@NgModule({
  declarations: [ChatListComponent, RecentsComponent],
  imports: [
    CommonModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
