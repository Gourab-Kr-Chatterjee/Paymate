import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlockCardPage } from './block-card.page';

describe('BlockCardPage', () => {
  let component: BlockCardPage;
  let fixture: ComponentFixture<BlockCardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
