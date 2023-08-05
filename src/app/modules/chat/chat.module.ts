import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { NbChatModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';



@NgModule({
  declarations: [
    ChatComponent
  ],
  exports: [
    ChatComponent
  ],
  imports: [
    CommonModule,
    NbChatModule,
    NbEvaIconsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
  ],
  bootstrap: [
    ChatComponent
  ]
})
export class ChatModule { }
