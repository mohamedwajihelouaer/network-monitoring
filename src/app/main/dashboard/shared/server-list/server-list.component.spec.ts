import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerListComponent } from './server-list.component';

describe('ServerListComponent', () => {
  let component: ServerListComponent;
  let fixture: ComponentFixture<ServerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServerListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
