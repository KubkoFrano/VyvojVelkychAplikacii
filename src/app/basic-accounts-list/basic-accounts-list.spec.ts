import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAccountsList } from './basic-accounts-list';

describe('BasicAccountsList', () => {
  let component: BasicAccountsList;
  let fixture: ComponentFixture<BasicAccountsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicAccountsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicAccountsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
