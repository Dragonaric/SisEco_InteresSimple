'use client';

import Link from 'next/link'
import { Calculator, BookOpen, TrendingUp, Lightbulb, ChevronRight } from 'lucide-react'
import { AnimatedPage } from './home/calculadora/components/shared/AnimatedContainer'

export default function HomePage() {
  return (
    <AnimatedPage>
      <div className="space-y-20">
        {/* Hero Section */}
        <section className="text-center py-20 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-3xl">
          <div className="max-w-4xl mx-auto px-6">
            <div className="mb-10">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-primary rounded-2xl mb-8 shadow-lg">
                <Calculator className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-dark dark:text-white mb-6 leading-tight">
                Calculadora de <span className="text-primary">Interés Simple</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
                Herramienta educativa desarrollada por la <span className="font-semibold">Universidad Mayor de San Simón</span>
                para facilitar el aprendizaje de conceptos financieros básicos
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/home/calculadora/app/P"
                className="btn-primary inline-flex items-center justify-center space-x-3 text-lg px-8 py-4 rounded-xl hover:scale-[1.02] transition-transform"
              >
                <Calculator className="w-6 h-6" />
                <span>Calcular Valor Presente</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                href="/home/calculadora/app/F"
                className="btn-secondary inline-flex items-center justify-center space-x-3 text-lg px-8 py-4 rounded-xl hover:scale-[1.02] transition-transform"
              >
                <Calculator className="w-6 h-6" />
                <span>Calcular Valor Futuro</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Características */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark dark:text-white mb-4">
              Beneficios de nuestra calculadora
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Diseñada pensando en las necesidades de estudiantes y profesionales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-xl mb-6 mx-auto">
                <Calculator className="w-7 h-7 text-primary dark:text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold text-dark dark:text-white mb-4">
                Cálculos Precisos
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Algoritmos matemáticos verificados que garantizan resultados exactos
                en todos los cálculos de interés simple
              </p>
            </div>

            <div className="card text-center p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 dark:bg-green-900 rounded-xl mb-6 mx-auto">
                <BookOpen className="w-7 h-7 text-green-600 dark:text-green-300" />
              </div>
              <h3 className="text-xl font-semibold text-dark dark:text-white mb-4">
                Aprendizaje Integrado
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Visualización detallada de fórmulas y su derivación para
                entender cada paso del cálculo
              </p>
            </div>

            <div className="card text-center p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-purple-100 dark:bg-purple-900 rounded-xl mb-6 mx-auto">
                <TrendingUp className="w-7 h-7 text-purple-600 dark:text-purple-300" />
              </div>
              <h3 className="text-xl font-semibold text-dark dark:text-white mb-4">
                Experiencia Optimizada
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Diseño accesible que facilita la entrada de datos
                y visualización de resultados
              </p>
            </div>
          </div>
        </section>

        {/* Variables de Cálculo */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-10 md:p-14 shadow-inner">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-dark dark:text-white mb-4">
                Variables de Cálculo
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Comprende los elementos fundamentales del interés simple
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-8">
                <div className="flex items-start space-x-5 bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-lg">P</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark dark:text-white mb-2 text-lg">Valor Presente (P)</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Capital inicial o valor actual de una inversión o préstamo
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-5 bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-lg">F</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark dark:text-white mb-2 text-lg">Valor Futuro (F)</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Monto total al final del período, incluyendo capital e intereses
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-5 bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-lg">I</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark dark:text-white mb-2 text-lg">Interés Total (I)</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Ganancia o costo generado exclusivamente por el capital inicial
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-5 bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-lg">i</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark dark:text-white mb-2 text-lg">Tasa de Interés (i)</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Porcentaje aplicado al capital por período (generalmente anual)
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-5 bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-lg">n</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark dark:text-white mb-2 text-lg">Períodos (n)</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Duración total de la inversión en la misma unidad de tiempo que la tasa
                    </p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm">
                  <h4 className="font-semibold text-dark dark:text-white mb-4 text-lg">Fórmulas Principales:</h4>
                  <div className="space-y-4">
                    <div className="bg-blue-50 dark:bg-gray-600 p-4 rounded-lg">
                      <p className="text-primary dark:text-blue-300 font-bold text-lg">F = P × (1 + i × n)</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Valor Futuro</p>
                    </div>
                    <div className="bg-blue-50 dark:bg-gray-600 p-4 rounded-lg">
                      <p className="text-primary dark:text-blue-300 font-bold text-lg">I = P × i × n</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Interés Total</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-20 bg-gradient-to-r from-primary to-primary-dark rounded-3xl text-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-2xl mb-8">
              <Lightbulb className="w-10 h-10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para dominar el interés simple?
            </h2>
            <p className="text-xl mb-10 text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Experimenta con diferentes escenarios y comprende cómo cada variable afecta tus cálculos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/home/calculadora/app/P"
                className="inline-flex items-center space-x-3 bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-200 hover:shadow-lg"
              >
                <Calculator className="w-6 h-6" />
                <span>Valor Presente</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                href="/home/calculadora/app/F"
                className="inline-flex items-center space-x-3 bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-200 hover:shadow-lg"
              >
                <Calculator className="w-6 h-6" />
                <span>Valor Futuro</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </AnimatedPage>
  )
}