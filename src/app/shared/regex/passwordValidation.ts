export const PATTERNS = {
  LETTERS: /^[a-zA-Z]{8,}$/,
  DIGITS: /^\d{8,}$/,
  SYMBOLS: /^[\W_]{8,}$/,
  LETTERS_DIGITS: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
  LETTERS_SYMBOLS: /^(?=.*[a-zA-Z])(?=.*[\W_])[a-zA-Z\W_]{8,}$/,
  DIGITS_SYMBOLS: /^(?=.*\d)(?=.*[\W_])[\d\W_]{8,}$/,
  LETTERS_DIGITS_SYMBOLS:
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_])[a-zA-Z\d\W_]{8,}$/,
};
