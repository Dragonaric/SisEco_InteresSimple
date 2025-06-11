import { useState, useCallback } from 'react';
import { formulas, CalculatorVariable, percentToDecimal } from '../utils/formulas';
import { variableValidators, getFieldDescription, getFieldUnit } from '../utils/validators';

interface CalculationInputs {
  [key: string]: string;
}

interface CalculationResult {
  value: number;
  breakdown: {
    [key: string]: number;
  };
}

export function useInterestCalculation(variable: CalculatorVariable) {
  const [inputs, setInputs] = useState<CalculationInputs>({});
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getRequiredFields = useCallback(() => {
    return Object.keys(variableValidators[variable]);
  }, [variable]);

  const validateInputs = useCallback((values: CalculationInputs) => {
    const validators = variableValidators[variable];
    const errors: string[] = [];

    Object.entries(validators).forEach(([field, rules]) => {
      const value = values[field];
      
      if (rules.required && !value) {
        errors.push(`El campo ${field} es requerido`);
        return;
      }

      if (value) {
        const numValue = Number(value);

        if (rules.min !== undefined && numValue < rules.min) {
          errors.push(rules.message || `El valor mínimo para ${field} es ${rules.min}`);
        }

        if (rules.max !== undefined && numValue > rules.max) {
          errors.push(rules.message || `El valor máximo para ${field} es ${rules.max}`);
        }
      }
    });

    return errors;
  }, [variable]);

  const calculate = useCallback(() => {
    try {
      const errors = validateInputs(inputs);
      if (errors.length > 0) {
        setError(errors[0]);
        return;
      }

      // Convertir inputs a números y ajustar la tasa de interés
      const numericInputs = Object.entries(inputs).reduce((acc, [key, value]) => {
        const numValue = Number(value);
        acc[key] = key === 'i' ? percentToDecimal(numValue) : numValue;
        return acc;
      }, {} as Record<string, number>);

      // Calcular el resultado
      const calculateFn = formulas[`calculate${variable}` as keyof typeof formulas];
      if (!calculateFn) {
        throw new Error('Fórmula no encontrada');
      }

      const result = calculateFn(numericInputs);
      
      // Preparar el desglose
      const breakdown = {
        ...numericInputs,
        [variable]: result
      };

      setResult({ value: result, breakdown });
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error en el cálculo');
      setResult(null);
    }
  }, [inputs, variable, validateInputs]);

  const setInput = useCallback((field: string, value: string) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);

  const getFieldProps = useCallback((field: string) => {
    return {
      value: inputs[field] || '',
      onChange: (value: string) => setInput(field, value),
      description: getFieldDescription(variable, field),
      unit: getFieldUnit(field),
      rules: variableValidators[variable][field]
    };
  }, [inputs, variable, setInput]);

  return {
    inputs,
    result,
    error,
    calculate,
    setInput,
    getFieldProps,
    getRequiredFields
  };
}
