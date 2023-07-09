import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { ValidateStrengthService } from 'src/app/core/services/validate-strength.service';
import { StrengthEnum } from '../../shared/models/enums';
import { Section } from 'src/app/shared/models/section.model';

@Directive({
  selector: '[appValidateStrength]',
})
export class ValidateStrengthDirective implements OnInit, OnDestroy {
  @Input('appValidateStrength') section!: Section;
  private sub!: Subscription;

  constructor(
    private elementRef: ElementRef,
    private validateService: ValidateStrengthService
  ) {}

  ngOnInit() {
    this.subscribeToStrengthUpd();
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  private removeClass(className: string[]) {
    className.forEach((name) =>
      this.elementRef.nativeElement.classList.remove(name)
    );
  }

  private addClass(className: string) {
    this.elementRef.nativeElement.classList.add(className);
  }

  private subscribeToStrengthUpd() {
    this.sub = this.validateService.strength$
      .pipe(
        tap((strength: StrengthEnum) => {
          if (strength === StrengthEnum.SHORT) {
            this.addClass('red');
          }
          if (strength === StrengthEnum.STRONG) {
            this.removeClass(['grey', 'red', 'yellow']);
            this.addClass('green');
          }
          if (strength === StrengthEnum.MEDIUM) {
            if (this.section.id !== 3) {
              this.removeClass(['grey', 'red', 'green']);
              this.addClass('yellow');
            } else {
              this.removeClass(['green', 'red', 'yellow']);
              this.addClass('grey');
            }
          }
          if (strength === StrengthEnum.EASY) {
            if (this.section.id === 1) {
              this.removeClass(['grey', 'yellow', 'green']);
              this.addClass('red');
            } else {
              this.removeClass(['red', 'yellow', 'green']);
              this.addClass('grey');
            }
          }
          if (strength === StrengthEnum.NEUTRAL) {
            this.removeClass(['red', 'yellow', 'green']);
            this.addClass('grey');
          }
        })
      )
      .subscribe();
  }
}
