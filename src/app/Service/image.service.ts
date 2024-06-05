import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../interface/Photo';
@Injectable({
  providedIn: 'root'
})
export class ImageService {
  URI = 'http://localhost:3500/api/photos';

  constructor(private http:HttpClient) { }
createPhoto(photo:File, title:string, description:string){
  const fd = new FormData()
fd.append("title",title);
fd.append("description",description);
fd.append("photo",photo);
return this.http.post(this.URI,fd);

  }
getPhotos(){
return this.http.get<Photo[]>(this.URI)
}
getPhotoById(id:string){

}
deletePhoto(id:string){

}
updatePhoto(title:string, description:string, id:string){

}
}
