import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule,MatButtonModule,MatIconModule} from '@angular/material';

import { CanvasComponent } from './canvas/canvas.component';
import { ImageEditorComponent } from './image-editor.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ImagePickerComponent } from './image-picker/image-picker.component';
import { MenubarComponent } from './menubar/menubar.component';

import { UtilServiceService } from './util-service.service'

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [CanvasComponent, ImageEditorComponent, ToolbarComponent, ImagePickerComponent, MenubarComponent],
  exports:[ImageEditorComponent],
  providers:[UtilServiceService]
})
export class ImageEditorModule {
  
}