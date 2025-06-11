// calculadora/components/shared/FormulaDisplay.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface FormulaDisplayProps {
  formula: string;
}

export function FormulaDisplay({ formula }: FormulaDisplayProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Fórmula Activa</CardTitle>
        </CardHeader>
        <CardContent className="font-mono text-lg text-center">
          {formula}
        </CardContent>
      </Card>
    </motion.div>
  );
}
