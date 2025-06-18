export type CalculatorVariable = 'P' | 'F' | 'I' | 'i' | 'n';

interface CalculatorInputs {
  P?: number; // Valor Presente
  F?: number; // Valor Futuro
  I?: number; // Interés Total
  i?: number; // Tasa de Interés (en decimal)
  n?: number; // Número de Periodos
}

export const formulas = {
  // Calcular Valor Presente (P)
  calculateP: (inputs: CalculatorInputs): number => {
    const { F, i, n } = inputs;
    if (
      F === undefined || F === null || isNaN(F) ||
      i === undefined || i === null || isNaN(i) ||
      n === undefined || n === null || isNaN(n)
    ) throw new Error('Faltan valores requeridos o hay valores inválidos');
    return F / (1 + i * n);
  },

  // Calcular Valor Futuro (F)
  calculateF: (inputs: CalculatorInputs): number => {
    const { P, i, n } = inputs;
    if (
      P === undefined || P === null || isNaN(P) ||
      i === undefined || i === null || isNaN(i) ||
      n === undefined || n === null || isNaN(n)
    ) throw new Error('Faltan valores requeridos o hay valores inválidos');
    return P * (1 + i * n);
  },

  // Calcular Interés Total (I)
  calculateI: (inputs: CalculatorInputs): number => {
    const { P, i, n } = inputs;
    if (
      P === undefined || P === null || isNaN(P) ||
      i === undefined || i === null || isNaN(i) ||
      n === undefined || n === null || isNaN(n)
    ) throw new Error('Faltan valores requeridos o hay valores inválidos');
    return P * i * n;
  },

  // Calcular Tasa de Interés (i)
  calculatei: (inputs: CalculatorInputs): number => {
    const { I, P, n } = inputs;
    if (
      I === undefined || I === null || isNaN(I) ||
      P === undefined || P === null || isNaN(P) ||
      n === undefined || n === null || isNaN(n)
    ) throw new Error('Faltan valores requeridos o hay valores inválidos');
    return I / (P * n);
  },

  // Calcular Número de Periodos (n)
  calculaten: (inputs: CalculatorInputs): number => {
    const { I, P, i } = inputs;
    if (
      I === undefined || I === null || isNaN(I) ||
      P === undefined || P === null || isNaN(P) ||
      i === undefined || i === null || isNaN(i)
    ) throw new Error('Faltan valores requeridos o hay valores inválidos');
    return I / (P * i);
  }
};

// Función helper para convertir porcentaje a decimal
export const percentToDecimal = (percent: number): number => {
  return percent / 100;
};

// Función helper para convertir decimal a porcentaje
export const decimalToPercent = (decimal: number): number => {
  return decimal * 100;
};

// Función helper para formatear moneda
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('es-BO', {
    style: 'currency',
    currency: 'BOB',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
};

// Función helper para formatear porcentaje
export const formatPercent = (value: number): string => {
  return new Intl.NumberFormat('es-BO', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
};
