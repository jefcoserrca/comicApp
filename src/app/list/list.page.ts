import { Component, OnInit } from '@angular/core';
import { DataMarvelService } from '../data-marvel.service';
import { ModalController } from '@ionic/angular';
import { CharacterPage } from '../character/character.page';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  // tslint:disable-next-line:variable-name
  heroesData_: any[];
  tipe = null;
  constructor(private heroesData: DataMarvelService, public modalCtrl: ModalController, private activeRoute: ActivatedRoute) {
   }

ngOnInit() {
  this.tipe = this.activeRoute.snapshot.paramMap.get('tipe');
  if (this.tipe === 'heroes') {
       this.heroesData_ = this.heroesData.heroes;
   } else {
        this.heroesData_ = this.heroesData.villanos;
   }
}

  async info(data: any ) {
      const modal = await this.modalCtrl.create({
  component: CharacterPage,
  componentProps: {item: data}
});
      return await modal.present();
  }

}
