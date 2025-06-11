import { CalculatorVariable } from './formulas';

interface ValidationRule {
  required?: boolean;
  min?: number;
  max?: number;
  pattern?: RegExp;
  custom?: (value: string) => boolean;
  message?: string;
}

export const variableValidators: Record<CalculatorVariable, Record<string, ValidationRule>> = {
  P: {
    F: {
      required: true,
      min: 0,
      message: 'El valor futuro debe ser mayor a 0'
    },
    i: {
      required: true,
      min: 0,
      max: 100,
      message: 'La tasa de interés debe estar entre 0% y 100%'
    },
    n: {
      required: true,
      min: 0,
      message: 'El número de periodos debe ser mayor a 0'
    }
  },
  F: {
    P: {
      required: true,
      min: 0,
      message: 'El valor presente debe ser mayor a 0'
    },
    i: {
      required: true,
      min: 0,
      max: 100,
      message: 'La tasa de interés debe estar entre 0% y 100%'
    },
    n: {
      required: true,
      min: 0,
      message: 'El número de periodos debe ser mayor a 0'
    }
  },
  I: {
    P: {
      required: true,
      min: 0,
      message: 'El valor presente debe ser mayor a 0'
    },
    i: {
      required: true,
      min: 0,
      max: 100,
      message: 'La tasa de interés debe estar entre 0% y 100%'
    },
    n: {
      required: true,
      min: 0,
      message: 'El número de periodos debe ser mayor a 0'
    }
  },
  i: {
    I: {
      required: true,
      min: 0,
      message: 'El interés total debe ser mayor a 0'
    },
    P: {
      required: true,
      min: 0,
      message: 'El valor presente debe ser mayor a 0'
    },
    n: {
      required: true,
      min: 0,
      message: 'El número de periodos debe ser mayor a 0'
    }
  },
  n: {
    I: {
      required: true,
      min: 0,
      message: 'El interés total debe ser mayor a 0'
    },
    P: {
      required: true,
      min: 0,
      message: 'El valor presente debe ser mayor a 0'
    },
    i: {
      required: true,
      min: 0,
      max: 100,
      message: 'La tasa de interés debe estar entre 0% y 100%'
    }
  }
};

export const getFieldDescription = (variable: CalculatorVariable, field: string): string => {
  const descriptions: Record<CalculatorVariable, Record<string, string>> = {
    P: {
      F: 'El valor futuro que se desea calcular',
      i: 'La tasa de interés anual (en porcentaje)',
      n: 'El número de periodos (en años)'
    },
    F: {
      P: 'El valor presente o capital inicial',
      i: 'La tasa de interés anual (en porcentaje)',
      n: 'El número de periodos (en años)'
    },
    I: {
      P: 'El valor presente o capital inicial',
      i: 'La tasa de interés anual (en porcentaje)',
      n: 'El número de periodos (en años)'
    },
    i: {
      I: 'El interés total generado',
      P: 'El valor presente o capital inicial',
      n: 'El número de periodos (en años)'
    },
    n: {
      I: 'El interés total generado',
      P: 'El valor presente o capital inicial',
      i: 'La tasa de interés anual (en porcentaje)'
    }
  };

  return descriptions[variable][field] || '';
};

export const getFieldUnit = (field: string): string => {
  const units: Record<string, string> = {
    P: 'BOB',
    F: 'BOB',
    I: 'BOB',
    i: '%',
    n: 'años'
  };

  return units[field] || '';
};
