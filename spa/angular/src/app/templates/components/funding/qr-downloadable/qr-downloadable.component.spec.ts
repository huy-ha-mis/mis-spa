import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrDownloadableComponent } from './qr-downloadable.component';

describe('QrDownloadableComponent', () => {
  let component: QrDownloadableComponent;
  let fixture: ComponentFixture<QrDownloadableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QrDownloadableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QrDownloadableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
