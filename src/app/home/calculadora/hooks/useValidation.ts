import { useState, useCallback } from 'react';

interface ValidationRules {
  required?: boolean;
  min?: number;
  max?: number;
  pattern?: RegExp;
  custom?: (value: string) => boolean;
}

interface ValidationError {
  message: string;
}

export function useFormField(initialValue: string = '') {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<ValidationError | null>(null);

  const validate = useCallback((value: string, rules: ValidationRules) => {
    if (rules.required && !value) {
      return { message: 'Este campo es requerido' };
    }

    if (value) {
      const numValue = Number(value);

      if (rules.min !== undefined && numValue < rules.min) {
        return { message: `El valor mínimo es ${rules.min}` };
      }

      if (rules.max !== undefined && numValue > rules.max) {
        return { message: `El valor máximo es ${rules.max}` };
      }

      if (rules.pattern && !rules.pattern.test(value)) {
        return { message: 'Formato inválido' };
      }

      if (rules.custom && !rules.custom(value)) {
        return { message: 'Valor inválido' };
      }
    }

    return null;
  }, []);

  const setFieldValue = useCallback((newValue: string, rules?: ValidationRules) => {
    setValue(newValue);
    if (rules) {
      setError(validate(newValue, rules));
    }
  }, [validate]);

  return {
    value,
    error,
    setFieldValue,
    validate
  };
} 