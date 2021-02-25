import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent implements OnInit {

  @Output() SideNavigationToggle = new EventEmitter();

  constructor() { }

  ngOnInit(){
  }

  onToggleOpenSidenav() {

    this.SideNavigationToggle.emit();

  }

}
