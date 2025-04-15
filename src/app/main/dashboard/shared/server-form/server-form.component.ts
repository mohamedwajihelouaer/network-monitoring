import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-form',
  standalone: false,
  templateUrl: './server-form.component.html',
  styleUrl: './server-form.component.css'
})
export class ServerFormComponent implements OnInit {

  serverName = '';
  numberOfServers = 0;

  allowDisplay = true;

  constructor() {
    setTimeout(() => {
      this.allowDisplay = !this.allowDisplay;
    },
      4000);
  }

  ngOnInit() {
    console.log();
  }

  incrementServerCount() : void {
    this.numberOfServers++;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }


}
