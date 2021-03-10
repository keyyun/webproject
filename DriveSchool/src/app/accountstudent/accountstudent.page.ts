import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoadingController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-accountstudent',
  templateUrl: './accountstudent.page.html',
  styleUrls: ['./accountstudent.page.scss'],
})
export class AccountstudentPage implements OnInit {
posts: any;
  constructor(private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private firestore: AngularFirestore) { }

  ngOnInit() {
  }
ionViewWillEnter() {
    this.getPosts();
}
 
  async getPosts(){
    //show loader
    let loader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    loader.present();

    try {
    this.firestore
    .collection("register")
    .snapshotChanges()
    .subscribe(data => { 
      this.posts = data.map(e => {
        return {
          id: e.payload.doc.id,
          name: e.payload.doc.data()["name"],
          ic: e.payload.doc.data()["ic"],
          email: e.payload.doc.data()["email"],
          password: e.payload.doc.data()["password"],
          enquiry: e.payload.doc.data()["enquiry"]
        };
      });

      loader.dismiss();
    });
    
    } catch(e){
    this.showToast(e);

    }
  }
}

