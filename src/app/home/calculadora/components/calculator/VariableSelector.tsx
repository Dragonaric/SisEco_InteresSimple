// calculadora/components/calculator/VariableSelector.tsx
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Info } from 'lucide-react';

interface VariableOption {
  key: string;
  label: string;
  icon: string;
  href: string;
  description: string;
  formula: string;
}

interface VariableSelectorProps {
  options: VariableOption[];
}

export function VariableSelector({ options }: VariableSelectorProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {options.map(opt => (
        <Card 
          key={opt.key} 
          className="calculator-card hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
        >
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img 
                  src={opt.icon} 
                  alt={opt.label} 
                  className="w-8 h-8 object-contain"
                />
                <span>{opt.label}</span>
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Info className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p className="mb-2">{opt.description}</p>
                    <p className="text-sm font-mono bg-muted p-2 rounded">
                      {opt.formula}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              {opt.description}
            </p>
          </CardContent>
          <CardFooter>
            <Link href={opt.href} passHref className="w-full">
              <Button 
                variant="outline" 
                className="w-full calculator-button"
              >
                Calcular {opt.key}
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
