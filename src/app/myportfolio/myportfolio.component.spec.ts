import { ComponentFixture, TestBed } from '@angular/core/testing';
import { myportfolioComponent } from './myportfolio.component';

describe('myportfolioComponent', () => {
  let component: myportfolioComponent;
  let fixture: ComponentFixture<myportfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [myportfolioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(myportfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
