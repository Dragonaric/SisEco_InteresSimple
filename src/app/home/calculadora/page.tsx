import { VariableSelector } from './components/calculator/VariableSelector';

const calculatorOptions = [
  {
    key: 'P',
    label: 'Valor Presente (P)',
    icon: '/images/icon-p.svg',
    href: '/home/calculadora/P',
    description: 'El valor actual de una suma de dinero que se recibirá en el futuro, descontado a una tasa de interés específica.',
    formula: 'P = F / (1 + i × n)'
  },
  {
    key: 'F',
    label: 'Valor Futuro (F)',
    icon: '/images/icon-f.svg',
    href: '/home/calculadora/F',
    description: 'El valor que tendrá una suma de dinero en el futuro, considerando una tasa de interés y un período de tiempo.',
    formula: 'F = P × (1 + i × n)'
  },
  {
    key: 'I',
    label: 'Interés Total (I)',
    icon: '/images/icon-i.svg',
    href: '/home/calculadora/I',
    description: 'La cantidad total de intereses generados durante el período de la inversión o préstamo.',
    formula: 'I = P × i × n'
  },
  {
    key: 'i',
    label: 'Tasa de Interés (i)',
    icon: '/images/icon-rate.svg',
    href: '/home/calculadora/i',
    description: 'El porcentaje que se aplica al capital para calcular los intereses en un período determinado.',
    formula: 'i = I / (P × n)'
  },
  {
    key: 'n',
    label: 'Número de Periodos (n)',
    icon: '/images/icon-n.svg',
    href: '/home/calculadora/n',
    description: 'El tiempo durante el cual se aplica la tasa de interés, expresado en años, meses o días.',
    formula: 'n = I / (P × i)'
  }
];

export default function CalculadoraPage() {
  return (
    <div className="calculator-container">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold">
          Calculadora de Interés Simple
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Seleccione la variable que desea calcular. Cada opción incluye una descripción detallada y la fórmula correspondiente.
        </p>
      </div>
      <VariableSelector options={calculatorOptions} />
    </div>
  );
}
