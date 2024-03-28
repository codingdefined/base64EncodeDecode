import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Base64decodeComponent } from './base64decode.component';

describe('Base64decodeComponent', () => {
  let component: Base64decodeComponent;
  let fixture: ComponentFixture<Base64decodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Base64decodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Base64decodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
