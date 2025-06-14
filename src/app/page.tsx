'use client';

import Link from 'next/link';
import { Calculator, BookOpen, TrendingUp, Lightbulb } from 'lucide-react';
import { AnimatedPage } from './home/calculadora/components/shared/AnimatedContainer';

export default function HomePage() {
  return (
    <AnimatedPage>
      <div className="space-y-16">
        {/* Hero Section */}
        <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-3xl">
          <div className="max-w-4xl mx-auto px-6">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-2xl mb-6 shadow-lg">
                <Calculator className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-dark dark:text-white mb-4 leading-tight">
                Calculadora de <span className="text-primary">Interés Simple</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Herramienta educativa desarrollada por la <span className="font-semibold">Universidad Mayor de San Simón</span>
                para facilitar el aprendizaje de conceptos financieros básicos
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/home/calculadora/app/P"
                className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-lg bg-primary hover:bg-primary-dark text-white transition-colors"
              >
                <Calculator className="w-5 h-5" />
                <span>Calcular Valor Presente</span>
              </Link>
              <Link
                href="/home/calculadora/app/F"
                className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-lg bg-primary hover:bg-primary-dark text-white transition-colors"
              >
                <Calculator className="w-5 h-5" />
                <span>Calcular Valor Futuro</span>
              </Link>
              <Link
                href="/home/documentacion"
                className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-lg bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600 transition-colors"
              >
                <BookOpen className="w-5 h-5" />
                <span>Documentación</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-dark dark:text-white mb-3">
              Beneficios de nuestra calculadora
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Diseñada pensando en las necesidades de estudiantes y profesionales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Calculator className="w-6 h-6 text-primary dark:text-blue-300" />
              </div>
              <h3 className="text-lg font-semibold text-center text-dark dark:text-white mb-3">
                Cálculos Precisos
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Resultados exactos en todos los cálculos de interés simple
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <BookOpen className="w-6 h-6 text-green-600 dark:text-green-300" />
              </div>
              <h3 className="text-lg font-semibold text-center text-dark dark:text-white mb-3">
                Aprendizaje Integrado
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Visualización detallada de fórmulas y su derivación
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-300" />
              </div>
              <h3 className="text-lg font-semibold text-center text-dark dark:text-white mb-3">
                Experiencia Optimizada
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Diseño accesible para entrada de datos y visualización
              </p>
            </div>
          </div>
        </section>

        {/* Variables Section */}
        <section className="max-w-6xl mx-auto px-6">
          <div className="bg-blue-50 dark:bg-gray-800 rounded-2xl p-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-dark dark:text-white mb-3">
                Variables de Cálculo
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Comprende los elementos fundamentales del interés simple
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg flex items-start gap-4">
                  <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center text-white font-bold shrink-0">
                    P
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark dark:text-white">Valor Presente (P)</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Capital inicial o valor actual de una inversión o préstamo
                    </p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg flex items-start gap-4">
                  <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center text-white font-bold shrink-0">
                    F
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark dark:text-white">Valor Futuro (F)</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Monto total al final del período, incluyendo capital e intereses
                    </p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg flex items-start gap-4">
                  <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center text-white font-bold shrink-0">
                    I
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark dark:text-white">Interés Total (I)</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Ganancia o costo generado por el capital inicial
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg flex items-start gap-4">
                  <div className="bg-green-600 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold shrink-0">
                    i
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark dark:text-white">Tasa de Interés (i)</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Porcentaje aplicado al capital por período (generalmente anual)
                    </p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg flex items-start gap-4">
                  <div className="bg-green-600 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold shrink-0">
                    n
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark dark:text-white">Períodos (n)</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Duración total de la inversión en la misma unidad de tiempo que la tasa
                    </p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold text-dark dark:text-white mb-3">Fórmulas Principales:</h4>
                  <div className="space-y-3">
                    <div className="bg-blue-100 dark:bg-gray-600 p-3 rounded">
                      <p className="text-primary dark:text-blue-300 font-medium">F = P × (1 + i × n)</p>
                      <p className="text-gray-600 dark:text-gray-300 text-xs mt-1">Valor Futuro</p>
                    </div>
                    <div className="bg-blue-100 dark:bg-gray-600 p-3 rounded">
                      <p className="text-primary dark:text-blue-300 font-medium">I = P × i × n</p>
                      <p className="text-gray-600 dark:text-gray-300 text-xs mt-1">Interés Total</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16 bg-primary rounded-3xl text-white">
          <div className="max-w-3xl mx-auto px-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-xl mb-6">
              <Lightbulb className="w-8 h-8" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Listo para dominar el interés simple?
            </h2>
            <p className="text-blue-100 mb-8">
              Experimenta con diferentes escenarios y comprende cómo cada variable afecta tus cálculos
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/home/calculadora/app/P"
                className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-lg bg-white text-primary hover:bg-gray-100 transition-colors"
              >
                <Calculator className="w-5 h-5" />
                <span>Valor Presente</span>
              </Link>
              <Link
                href="/home/calculadora/app/F"
                className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-lg bg-white text-primary hover:bg-gray-100 transition-colors"
              >
                <Calculator className="w-5 h-5" />
                <span>Valor Futuro</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </AnimatedPage>
  );
}