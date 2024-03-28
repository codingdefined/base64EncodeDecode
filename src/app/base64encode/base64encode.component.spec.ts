import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Base64encodeComponent } from './base64encode.component';

describe('Base64encodeComponent', () => {
  let component: Base64encodeComponent;
  let fixture: ComponentFixture<Base64encodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Base64encodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Base64encodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
