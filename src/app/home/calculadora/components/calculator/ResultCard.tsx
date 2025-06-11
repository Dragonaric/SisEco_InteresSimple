// calculadora/components/calculator/ResultCard.tsx
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Copy, Download } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

interface ResultCardProps {
  results: Record<string, number>;
  title?: string;
  showExport?: boolean;
  onExport?: () => void;
}

export function ResultCard({ 
  results, 
  title = "Resultados", 
  showExport = true,
  onExport 
}: ResultCardProps) {
  const [copied, setCopied] = useState(false);

  const formatValue = (value: number) => {
    return new Intl.NumberFormat('es-BO', {
      style: 'currency',
      currency: 'BOB',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };

  const handleCopy = () => {
    const text = Object.entries(results)
      .map(([key, value]) => `${key}: ${formatValue(value)}`)
      .join('\n');
    
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success('Resultados copiados al portapapeles');
    
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="calculator-card">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{title}</span>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleCopy}
              className={copied ? 'text-primary' : ''}
            >
              <Copy className="h-4 w-4" />
            </Button>
            {showExport && onExport && (
              <Button
                variant="ghost"
                size="icon"
                onClick={onExport}
              >
                <Download className="h-4 w-4" />
              </Button>
            )}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Object.entries(results).map(([key, value]) => (
            <div key={key} className="flex flex-col space-y-1">
              <span className="text-sm font-medium text-muted-foreground uppercase">
                {key}
              </span>
              <Badge variant="outline" className="text-lg font-mono">
                {formatValue(value)}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between text-sm text-muted-foreground">
        <span>Última actualización: {new Date().toLocaleTimeString()}</span>
        <span>Moneda: BOB</span>
      </CardFooter>
    </Card>
  );
}