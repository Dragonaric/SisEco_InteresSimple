'use client';

import { useParams } from 'next/navigation';
import { useInterestCalculation } from '../../hooks/useInterestCalculation';
import { InputField } from '../../components/calculator/InputField';
import { ResultCard } from '../../components/calculator/ResultCard';
import { FormulaDisplay } from '../../components/calculator/FormulaDisplay';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalculatorVariable } from '../../utils/formulas';
import { formatCurrency, formatPercent } from '../../utils/formulas';
import { AnimatedPage, AnimatedResult } from '../../components/shared/AnimatedContainer';
import { InfoTooltip, HelpDialog } from '../../components/shared/Tooltip'; 

const variableLabels: Record<CalculatorVariable, string> = {
  P: 'Valor Presente',
  F: 'Valor Futuro',
  I: 'Interés Total',
  i: 'Tasa de Interés',
  n: 'Número de Periodos'
};

const variableFormulas: Record<CalculatorVariable, { formula: string; derivation: string[] }> = {
  P: {
    formula: 'P = F / (1 + i × n)',
    derivation: [
      'Partimos de la fórmula del valor futuro: F = P × (1 + i × n)',
      'Despejamos P: P = F / (1 + i × n)'
    ]
  },
  F: {
    formula: 'F = P × (1 + i × n)',
    derivation: [
      'El valor futuro es igual al valor presente más los intereses',
      'F = P + I',
      'Donde I = P × i × n',
      'Sustituyendo: F = P + (P × i × n)',
      'Factorizando: F = P × (1 + i × n)'
    ]
  },
  I: {
    formula: 'I = P × i × n',
    derivation: [
      'El interés simple se calcula multiplicando el capital por la tasa y el tiempo',
      'I = P × i × n'
    ]
  },
  i: {
    formula: 'i = I / (P × n)',
    derivation: [
      'Partimos de la fórmula del interés: I = P × i × n',
      'Despejamos i: i = I / (P × n)'
    ]
  },
  n: {
    formula: 'n = I / (P × i)',
    derivation: [
      'Partimos de la fórmula del interés: I = P × i × n',
      'Despejamos n: n = I / (P × i)'
    ]
  }
};

export default function CalculatorPage() {
  const { variable } = useParams();
  const calculatorVariable = variable as CalculatorVariable;
  
  const {
    result,
    error,
    calculate,
    getFieldProps,
    getRequiredFields
  } = useInterestCalculation(calculatorVariable);

  const formatResult = (value: number, key: string) => {
    if (key === 'i') return formatPercent(value);
    if (['P', 'F', 'I'].includes(key)) return formatCurrency(value);
    return value.toFixed(2);
  };

  return (
    <AnimatedPage>
      <div className="calculator-container" role="main" aria-label={`Calculadora de ${variableLabels[calculatorVariable]}`}>
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold">
            Calcular {variableLabels[calculatorVariable]}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ingrese los valores requeridos para calcular el {variableLabels[calculatorVariable].toLowerCase()}
          </p>
        </div>

        <div className="calculator-grid">
          <Card className="calculator-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Datos de Entrada
                <HelpDialog
                  title={`Ayuda: ${variableLabels[calculatorVariable]}`}
                  content={
                    <div className="space-y-4">
                      <p>
                        Para calcular el {variableLabels[calculatorVariable].toLowerCase()}, 
                        necesitará proporcionar los siguientes datos:
                      </p>
                      <ul className="list-disc pl-4 space-y-2">
                        {getRequiredFields().map((field: string) => (
                          <li key={field}>
                            <strong>{variableLabels[field as CalculatorVariable]}:</strong>{' '}
                            {getFieldProps(field).description}
                          </li>
                        ))}
                      </ul>
                    </div>
                  }
                />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {getRequiredFields().map((field: string) => (
                <div key={field} className="relative">
                  <InputField
                    name={field}
                    label={variableLabels[field as CalculatorVariable]}
                    {...getFieldProps(field)}
                  />
                  <InfoTooltip
                    content={getFieldProps(field).description}
                    side="right"
                    className="absolute right-0 top-1/2 -translate-y-1/2"
                  />
                </div>
              ))}
              <Button 
                onClick={calculate}
                className="w-full calculator-button"
                aria-label="Calcular resultado"
              >
                Calcular
              </Button>
              {error && (
                <p 
                  className="text-destructive text-sm animate-fade-in"
                  role="alert"
                  aria-live="polite"
                >
                  {error}
                </p>
              )}
            </CardContent>
          </Card>

          <div className="space-y-6">
            <FormulaDisplay
              formula={variableFormulas[calculatorVariable].formula}
              derivation={variableFormulas[calculatorVariable].derivation}
              variable={calculatorVariable}
            />

            <AnimatedResult show={!!result}>
              {result && (
                <ResultCard
                  title={`Resultado: ${variableLabels[calculatorVariable]}`}
                  results={Object.entries(result.breakdown).reduce((acc, [key, value]) => ({
                    ...acc,
                    [variableLabels[key as CalculatorVariable]]: formatResult(value as number, key)
                  }), {})}
                />
              )}
            </AnimatedResult>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}