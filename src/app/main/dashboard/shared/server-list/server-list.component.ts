import { Component } from '@angular/core';

@Component({
  selector: 'app-server-list',
  standalone: false,
  templateUrl: './server-list.component.html',
  styleUrl: './server-list.component.css'
})
export class ServerListComponent {

  rowColor = '';

  serverList = [
    {
      name: 'Manager Server',
      ipAdress: '192.168.0.1',
      status: 'ONLINE'
    },
    {
      name: 'Worker Node 1',
      ipAdress: '172.16.20.17',
      status: 'ONLINE'
    },
    {
      name: 'Worker Noder 2',
      ipAdress: '10.18.100.114',
      status: 'OFFLINE'
    }
  ];

  findOffline(): boolean {
    return this.serverList.some(server => server.status === 'OFFLINE');
  }

  setColor() {
    this.rowColor = 'green';
  }

   // Define the condition for each row (you can adapt this)
   checkCondition(item: any): boolean {
    return item.status  === 'ONLINE';
  }

  // Function to get the background color based on the condition
  getRowBackgroundColor(item: any): string {
    return this.checkCondition(item) ? 'lightgreen' : 'red';
  }

  // Function to reset the background color
  resetRowBackgroundColor(event: Event) {
    // row.style.backgroundColor = ''; // Or any default color you prefer
    console.log(event.target);
  }

  getStatus(server: any) {
    return server.status === 'ONLINE' ? 'green' : 'red';
  }

}
