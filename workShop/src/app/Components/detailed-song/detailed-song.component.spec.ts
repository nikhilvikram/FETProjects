import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedSongComponent } from './detailed-song.component';

describe('DetailedSongComponent', () => {
  let component: DetailedSongComponent;
  let fixture: ComponentFixture<DetailedSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedSongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
