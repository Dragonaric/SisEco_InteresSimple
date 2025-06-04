// app/page.tsx
import Link from 'next/link'
import { Calculator, BookOpen, TrendingUp, Users, Award, Lightbulb } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
              <Calculator className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
              Calculadora de Interés Simple
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Herramienta educativa desarrollada por la Universidad Mayor de San Simón 
              para facilitar el aprendizaje de conceptos financieros básicos
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/calculadora" 
              className="btn-primary inline-flex items-center justify-center space-x-2 text-lg"
            >
              <Calculator className="w-5 h-5" />
              <span>Usar Calculadora</span>
            </Link>
            <Link 
              href="/documentacion" 
              className="btn-secondary inline-flex items-center justify-center space-x-2 text-lg"
            >
              <BookOpen className="w-5 h-5" />
              <span>Ver Documentación</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Características */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dark mb-4">
            ¿Por qué usar nuestra calculadora?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Diseñada específicamente para estudiantes y profesionales que necesitan 
            herramientas precisas y fáciles de usar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
              <Calculator className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-dark mb-3">
              Cálculos Precisos
            </h3>
            <p className="text-gray-600">
              Algoritmos matemáticos verificados que garantizan resultados exactos 
              en todos los cálculos de interés simple
            </p>
          </div>

          <div className="card text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
              <BookOpen className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-dark mb-3">
              Documentación Completa
            </h3>
            <p className="text-gray-600">
              Guías detalladas, fórmulas explicadas y ejemplos prácticos 
              para entender cada concepto financiero
            </p>
          </div>

          <div className="card text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-dark mb-3">
              Resultados Visuales
            </h3>
            <p className="text-gray-600">
              Gráficos y tablas que facilitan la comprensión del crecimiento 
              del capital a través del tiempo
            </p>
          </div>
        </div>
      </section>

      {/* Conceptos Clave */}
      <section className="bg-gray-50 rounded-2xl p-8 md:p-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-dark mb-4">
            Conceptos Fundamentales
          </h2>
          <p className="text-lg text-gray-600">
            Aprende los elementos básicos del interés simple
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <div>
                <h3 className="font-semibold text-dark mb-2">Capital (C)</h3>
                <p className="text-gray-600">
                  Cantidad inicial de dinero que se invierte o presta
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">i</span>
              </div>
              <div>
                <h3 className="font-semibold text-dark mb-2">Tasa de Interés (i)</h3>
                <p className="text-gray-600">
                  Porcentaje que se aplica al capital por período de tiempo
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">t</span>
              </div>
              <div>
                <h3 className="font-semibold text-dark mb-2">Tiempo (t)</h3>
                <p className="text-gray-600">
                  Duración de la inversión o préstamo
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">I</span>
              </div>
              <div>
                <h3 className="font-semibold text-dark mb-2">Interés (I)</h3>
                <p className="text-gray-600">
                  Ganancia o costo generado por el capital
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <div>
                <h3 className="font-semibold text-dark mb-2">Monto (M)</h3>
                <p className="text-gray-600">
                  Suma total del capital más los intereses generados
                </p>
              </div>
            </div>

            <div className="formula-box">
              <h4 className="font-semibold mb-2">Fórmula Principal:</h4>
              <p className="text-primary font-bold">I = C × i × t</p>
              <p className="text-primary font-bold">M = C + I</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-gradient-to-r from-primary to-primary-dark rounded-2xl text-white">
        <div className="max-w-3xl mx-auto px-6">
          <Lightbulb className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl font-bold mb-4">
            ¡Comienza a calcular ahora!
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Utiliza nuestra calculadora para resolver problemas de interés simple 
            de manera rápida y precisa
          </p>
          <Link 
            href="/calculadora" 
            className="inline-flex items-center space-x-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <Calculator className="w-5 h-5" />
            <span>Empezar a Calcular</span>
          </Link>
        </div>
      </section>
    </div>
  )
}