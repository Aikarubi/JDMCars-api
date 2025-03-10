import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyBarComponent } from './copy-bar.component';

describe('CopyBarComponent', () => {
  let component: CopyBarComponent;
  let fixture: ComponentFixture<CopyBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopyBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopyBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
