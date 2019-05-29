import { Injectable } from '@angular/core';
import {AngularFirestoreCollection, AngularFirestore} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

 images:AngularFirestoreCollection<any>;
 

 addImg(img:any){
   this.images.add(img);
 }

  constructor(public afs:AngularFirestore) {
       
      this.images = afs.collection(localStorage.getItem('user'));
   }
}
