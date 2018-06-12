
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueComponent } from './catalogue.component';

describe('CatalogueComponent', () => {
  let component: CatalogueComponent;
  let fixture: ComponentFixture<CatalogueComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
