import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Info } from 'lucide-react';

interface FormulaDisplayProps {
  formula: string;
  derivation: string[];
  variable: 'P' | 'F' | 'I' | 'i' | 'n';
}

export function FormulaDisplay({ formula, derivation, variable }: FormulaDisplayProps) {
  const [showDerivation, setShowDerivation] = useState(false);

  return (
    <Card className="calculator-card">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-medium">
          Fórmula para calcular {variable}
        </CardTitle>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setShowDerivation(!showDerivation)}
          className="h-8 w-8"
        >
          <Info className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-2xl font-mono text-center p-4 bg-muted rounded-lg">
            {formula}
          </div>
          
          {showDerivation && (
            <div className="space-y-2 animate-fade-in">
              <h4 className="font-medium">Derivación:</h4>
              <ol className="list-decimal list-inside space-y-2">
                {derivation.map((step, index) => (
                  <li key={index} className="text-sm text-muted-foreground">
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
} 