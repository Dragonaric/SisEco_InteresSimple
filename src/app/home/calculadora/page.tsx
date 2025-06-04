// src/app/home/calculadora/page.tsx
'use client'

import { useState } from 'react'
import { Calculator } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function CalculadoraPage() {
  const [capital, setCapital] = useState('')
  const [tasa, setTasa] = useState('')
  const [tiempo, setTiempo] = useState('')
  const [unidadTiempo, setUnidadTiempo] = useState('años')
  const [resultado, setResultado] = useState<{
    interes: number;
    monto: number;
  } | null>(null)

  const calcularInteresSimple = () => {
    const C = parseFloat(capital)
    const i = parseFloat(tasa) / 100 // Convertir porcentaje a decimal
    let t = parseFloat(tiempo)

    // Convertir tiempo a años según la unidad seleccionada
    switch (unidadTiempo) {
      case 'meses':
        t = t / 12
        break
      case 'dias':
        t = t / 365
        break
    }

    const I = C * i * t // Interés
    const M = C + I // Monto total

    setResultado({
      interes: I,
      monto: M
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Encabezado */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
            <Calculator className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold">Calculadora de Interés Simple</h1>
          <p className="text-muted-foreground">
            Calcula el interés simple y el monto total de tu inversión
          </p>
        </div>

        {/* Formulario de cálculo */}
        <Card>
          <CardHeader>
            <CardTitle>Ingresa los datos</CardTitle>
            <CardDescription>
              Completa los campos para calcular el interés simple
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="capital">Capital Inicial (Bs)</Label>
                <Input
                  id="capital"
                  type="number"
                  placeholder="Ingresa el capital inicial"
                  value={capital}
                  onChange={(e) => setCapital(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tasa">Tasa de Interés (%)</Label>
                <Input
                  id="tasa"
                  type="number"
                  placeholder="Ingresa la tasa de interés"
                  value={tasa}
                  onChange={(e) => setTasa(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="tiempo">Tiempo</Label>
                  <Input
                    id="tiempo"
                    type="number"
                    placeholder="Ingresa el tiempo"
                    value={tiempo}
                    onChange={(e) => setTiempo(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="unidadTiempo">Unidad de Tiempo</Label>
                  <Select
                    value={unidadTiempo}
                    onValueChange={setUnidadTiempo}
                  >
                    <SelectTrigger id="unidadTiempo">
                      <SelectValue placeholder="Selecciona la unidad" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="años">Años</SelectItem>
                      <SelectItem value="meses">Meses</SelectItem>
                      <SelectItem value="dias">Días</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <Button 
              className="w-full"
              onClick={calcularInteresSimple}
            >
              Calcular
            </Button>
          </CardContent>
        </Card>

        {/* Resultados */}
        {resultado && (
          <Card>
            <CardHeader>
              <CardTitle>Resultados</CardTitle>
              <CardDescription>
                El cálculo del interés simple
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Interés Generado</Label>
                  <div className="text-2xl font-bold text-primary">
                    Bs. {resultado.interes.toFixed(2)}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Monto Total</Label>
                  <div className="text-2xl font-bold text-primary">
                    Bs. {resultado.monto.toFixed(2)}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Información adicional */}
        <Card>
          <CardHeader>
            <CardTitle>Fórmula del Interés Simple</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                El interés simple se calcula mediante la siguiente fórmula:
              </p>
              <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                I = C × i × t
              </div>
              <div className="space-y-2 text-sm">
                <p>Donde:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>I = Interés generado</li>
                  <li>C = Capital inicial</li>
                  <li>i = Tasa de interés (en decimal)</li>
                  <li>t = Tiempo (en años)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}