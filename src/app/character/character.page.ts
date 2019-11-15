import { Component, OnInit} from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-character',
  templateUrl: './character.page.html',
  styleUrls: ['./character.page.scss'],
})
export class CharacterPage implements OnInit {

item: any;
  constructor(public navParams: NavParams, public modalCtrl: ModalController, public iab: InAppBrowser) {

   this.item = this.navParams.get('item');
   console.log(this.item);
  }

  ngOnInit() {
  }

  close() {
        this.modalCtrl.dismiss();
  }

  navigate(url: any) {
     window.open(url, '_system'); return false;
  }

}
