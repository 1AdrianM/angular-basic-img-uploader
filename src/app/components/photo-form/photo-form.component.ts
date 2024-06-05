import { Component } from '@angular/core';
import {ImageService} from '../../Service/image.service'
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface HtmlInputEvent extends Event{
target: HTMLInputElement  & EventTarget
}
@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrl: './photo-form.component.css'
})
export class PhotoFormComponent implements OnInit  {

photoSelected: string| ArrayBuffer;
  file:File;

  constructor(private photoService:ImageService ,private router:Router){

  }
ngOnInit(): void {
    
}

 UploadPhoto(titulo:HTMLInputElement, description:HTMLInputElement){
  this.photoService.createPhoto(this.file, titulo.value, description.value)
  .subscribe(
    res=>{
      console.log(res)
    this.router.navigate(['/photos'])
 },
err=> console.log(err)
);
return false;



}
onPhotoSelected(event: HtmlInputEvent){
  if(event.target.files && event.target.files[0]){
    this.file = <File>event.target.files[0];
    const reader = new FileReader();
    reader.onload = e => this.photoSelected = reader.result;
    reader.readAsDataURL(this.file);

  }

}

}
