import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = "OurmapPage";
  tab2Root = "OurlistPage";
  tab3Root = "EditmapPage";
  tab4Root = "SettingsPage";

  constructor() {

  }
}
