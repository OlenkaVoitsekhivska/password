import { Injectable } from '@angular/core';
import { PATTERNS } from 'src/app/shared/regex/passwordValidation';
import { StrengthEnum } from 'src/app/shared/models/enums';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ValidateStrengthService {
  private strength = new BehaviorSubject<StrengthEnum>(StrengthEnum.NEUTRAL);
  public strength$ = this.strength.asObservable();

  public calculateStrength(password: string) {
    const trimmedPassword = password.trim();
    if (trimmedPassword.length === 0) {
      this.strength.next(StrengthEnum.NEUTRAL);
    } else if (trimmedPassword.length > 0 && trimmedPassword.length < 8) {
      this.strength.next(StrengthEnum.SHORT);
    }
    this.loopOverPatternKeys(PATTERNS, password);
  }

  private loopOverPatternKeys(
    patterns: { [key: string]: RegExp },
    password: string
  ) {
    for (let key in patterns) {
      if (patterns[key].test(password)) {
        this.strengthCases(key as keyof typeof PATTERNS);
      }
    }
  }
  private strengthCases(contents: keyof typeof PATTERNS) {
    switch (contents) {
      case 'LETTERS_DIGITS_SYMBOLS':
        this.strength.next(StrengthEnum.STRONG);
        break;
      case 'DIGITS_SYMBOLS':
        this.strength.next(StrengthEnum.MEDIUM);
        break;
      case 'LETTERS_DIGITS':
        this.strength.next(StrengthEnum.MEDIUM);
        break;
      case 'LETTERS_SYMBOLS':
        this.strength.next(StrengthEnum.MEDIUM);
        break;
      default:
        this.strength.next(StrengthEnum.EASY);
    }
  }
}
