import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription, distinctUntilChanged, switchMap, tap } from 'rxjs';
import { ValidateStrengthService } from 'src/app/core/services/validate-strength.service';
import { Section } from 'src/app/shared/models/section.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
  public form!: FormGroup;
  public sections: Section[] = [{ id: 1 }, { id: 2 }, { id: 3 }];

  private formSub!: Subscription;

  constructor(
    private fb: FormBuilder,
    private strengthService: ValidateStrengthService
  ) {}
  ngOnInit() {
    this.initializeForm();
    this.getStrength();
  }
  ngOnDestroy() {
    this.formSub.unsubscribe();
  }

  private initializeForm() {
    this.form = this.fb.group({
      password: [''],
    });
  }

  private getStrength() {
    this.formSub = this.form.valueChanges
      .pipe(
        tap((form) => {
          return this.strengthService.calculateStrength(form.password);
        }),
        switchMap(() => this.strengthService.strength$),
        distinctUntilChanged()
      )
      .subscribe();
  }
}
