'use client';

import Link from 'next/link';
import { Calculator, BookOpen, TrendingUp, Lightbulb, ArrowRight, Play, Users, Award, Clock } from 'lucide-react';
import { AnimatedPage, AnimatedContainer } from './home/calculadora/components/shared/AnimatedContainer';

export default function HomePage() {
  return (
    <AnimatedPage>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="space-y-20 pb-16">
          {/* Hero Section Mejorado */}
          <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 dark:from-blue-600/20 dark:to-purple-600/20" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
              <AnimatedContainer animation="slide" delay={0.1}>
                <div className="text-center">
                  {/* Logo animado */}
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl mb-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <Calculator className="w-12 h-12 text-white" />
                  </div>
                  
                  {/* Título principal */}
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                    Calculadora de{' '}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Interés Simple
                    </span>
                  </h1>
                  
                  {/* Subtítulo */}
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
                    Herramienta educativa desarrollada por la{' '}
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                      Universidad Mayor de San Simón
                    </span>
                  </p>
                  
                  <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                    Aprende y calcula conceptos financieros básicos de manera intuitiva y precisa
                  </p>

                  {/* Botones de acción */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                      href="/home/calculadora/app/P"
                      className="group inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <Calculator className="w-5 h-5" />
                      <span>Calcular Valor Presente</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    
                    <Link
                      href="/home/calculadora/app/F"
                      className="group inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-2xl bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold border border-gray-200 dark:border-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <TrendingUp className="w-5 h-5" />
                      <span>Calcular Valor Futuro</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </AnimatedContainer>
            </div>
          </section>

          {/* Estadísticas rápidas */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedContainer animation="fade" delay={0.3}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-2xl mb-4">
                    <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">1000+</h3>
                  <p className="text-gray-600 dark:text-gray-300">Estudiantes beneficiados</p>
                </div>
                
                <div className="text-center p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-2xl mb-4">
                    <Award className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">99.9%</h3>
                  <p className="text-gray-600 dark:text-gray-300">Precisión en cálculos</p>
                </div>
                
                <div className="text-center p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-2xl mb-4">
                    <Clock className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">24/7</h3>
                  <p className="text-gray-600 dark:text-gray-300">Disponible siempre</p>
                </div>
              </div>
            </AnimatedContainer>
          </section>

          {/* Características principales */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedContainer animation="slide" delay={0.4}>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  ¿Por qué elegir nuestra calculadora?
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Diseñada pensando en las necesidades de estudiantes y profesionales del área financiera
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="group p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Calculator className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Cálculos Precisos
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Algoritmos optimizados que garantizan resultados exactos en todos los cálculos de interés simple, 
                    eliminando errores de redondeo y proporcionando confiabilidad total.
                  </p>
                  <Link 
                    href="/home/calculadora/app/P"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    Probar calculadora
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>

                <div className="group p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Aprendizaje Integrado
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Visualización detallada de fórmulas, pasos de cálculo y conceptos teóricos, 
                    facilitando la comprensión profunda de los principios financieros.
                  </p>
                  <Link 
                    href="/home/documentacion"
                    className="inline-flex items-center text-green-600 dark:text-green-400 font-semibold hover:text-green-700 dark:hover:text-green-300 transition-colors"
                  >
                    Ver documentación
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>

                <div className="group p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Experiencia Optimizada
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Interfaz intuitiva y responsiva, diseñada para facilitar la entrada de datos 
                    y la interpretación de resultados en cualquier dispositivo.
                  </p>
                  <Link 
                    href="/home/calculadora/app/F"
                    className="inline-flex items-center text-purple-600 dark:text-purple-400 font-semibold hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                  >
                    Explorar funciones
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </AnimatedContainer>
          </section>

          {/* Variables de cálculo mejoradas */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedContainer animation="fade" delay={0.6}>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 lg:p-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Variables de Cálculo
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300">
                    Comprende los elementos fundamentales del interés simple
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Variables principales */}
                  <div className="space-y-6">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg shrink-0">
                          P
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                            Valor Presente (P)
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            Capital inicial o valor actual de una inversión o préstamo. 
                            Es la base sobre la cual se calculan los intereses.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-green-600 to-green-700 w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg shrink-0">
                          F
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                            Valor Futuro (F)
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            Monto total al final del período, incluyendo el capital inicial 
                            más todos los intereses generados.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-purple-600 to-purple-700 w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg shrink-0">
                          I
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                            Interés Total (I)
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            Ganancia o costo total generado por el capital inicial 
                            durante todo el período de tiempo.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Parámetros y fórmulas */}
                  <div className="space-y-6">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-orange-600 to-orange-700 w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg shrink-0">
                          i
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                            Tasa de Interés (i)
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            Porcentaje aplicado al capital por período de tiempo, 
                            generalmente expresado en forma anual.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-red-600 to-red-700 w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg shrink-0">
                          n
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                            Períodos (n)
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            Duración total de la inversión expresada en la misma 
                            unidad de tiempo que la tasa de interés.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Fórmulas */}
                    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-2xl">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                        Fórmulas Principales
                      </h4>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border-l-4 border-blue-500">
                          <p className="text-lg font-mono font-bold text-blue-600 dark:text-blue-400 mb-1">
                            F = P × (1 + i × n)
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            Cálculo del Valor Futuro
                          </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border-l-4 border-green-500">
                          <p className="text-lg font-mono font-bold text-green-600 dark:text-green-400 mb-1">
                            I = P × i × n
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            Cálculo del Interés Total
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedContainer>
          </section>

          {/* CTA Section mejorado */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedContainer animation="scale" delay={0.8}>
              <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-8 lg:p-16 text-white">
                <div className="absolute inset-0 bg-black/10" />
                <div className="relative text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-8">
                    <Lightbulb className="w-10 h-10" />
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                    ¿Listo para dominar el interés simple?
                  </h2>
                  
                  <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
                    Experimenta con diferentes escenarios financieros y comprende cómo cada variable 
                    afecta tus cálculos. Desarrolla tu intuición financiera con nuestra herramienta educativa.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                      href="/home/calculadora/app/P"
                      className="group inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-2xl bg-white text-blue-600 hover:bg-gray-100 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <Calculator className="w-5 h-5" />
                      <span>Calcular Valor Presente</span>
                      <Play className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    
                    <Link
                      href="/home/calculadora/app/F"
                      className="group inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-2xl bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold border border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <TrendingUp className="w-5 h-5" />
                      <span>Calcular Valor Futuro</span>
                      <Play className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedContainer>
          </section>
        </div>
      </div>
    </AnimatedPage>
  );
}