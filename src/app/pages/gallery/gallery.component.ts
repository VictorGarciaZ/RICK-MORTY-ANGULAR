import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../shared/services/api.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit{

public galleryCharacters!: any [];

constructor (private service: ApiService){}

ngOnInit(): void {
  this.service.getCharacters().subscribe((datos:any)=>{
    this.galleryCharacters = [...datos.results]
  });
}

}
