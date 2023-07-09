import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputEnum } from 'src/app/shared/models/enums';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() type: InputEnum = InputEnum.PASSWORD;
  @Input() label: string = '';

  private inputValue: any;
  private onChange!: (_: any) => void;
  private onTouched!: () => void;

  get value(): any {
    return this.inputValue;
  }

  set value(v: any) {
    this.inputValue = v;
    this.onChange(v);
  }

  writeValue(value: any): void {
    this.inputValue = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {}
}
