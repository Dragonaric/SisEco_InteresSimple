export default function DocumentationPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-8 bg-white rounded-xl shadow-lg">
      {/* Encabezado con degradado */}
      <header className="mb-10 bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 rounded-xl">
        <h1 className="text-4xl font-bold mb-2">Interés Simple</h1>
        <p className="text-xl opacity-90">Guía completa con ejemplos prácticos y su interpretación</p>
      </header>

      {/* Sección de Definición */}
      <section className="mb-12 p-6 bg-gray-50 rounded-lg border-l-4 border-blue-500">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          ¿Qué es el Interés Simple?
        </h2>
        <div className="space-y-4 text-gray-700">
          <p className="text-lg leading-relaxed">
            El interés simple es un método de cálculo financiero donde los intereses generados se calculan <strong>únicamente sobre el capital inicial</strong> durante un período determinado.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h3 className="font-medium text-blue-800 mb-2">Características clave:</h3>
            <ul className="list-disc list-inside space-y-1 text-blue-700">
              <li>Los intereses no se capitalizan (no generan más intereses)</li>
              <li>Crecimiento lineal del dinero</li>
              <li>Fácil de calcular y entender</li>
              <li>Común en préstamos a corto plazo e inversiones simples</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sección de Fórmula */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <svg className="w-6 h-6 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          Fórmula del Interés Simple
        </h2>

        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <div className="text-center mb-4">
            <div className="text-3xl font-mono font-bold text-indigo-700 p-4 bg-white rounded-lg shadow-sm inline-block">
              I = C × r × t
            </div>
          </div>

          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="bg-indigo-100 text-indigo-800 font-bold px-2 py-1 rounded mr-3">I</span>
              <span>Interés generado (en unidades monetarias)</span>
            </li>
            <li className="flex items-start">
              <span className="bg-indigo-100 text-indigo-800 font-bold px-2 py-1 rounded mr-3">C</span>
              <span>Capital inicial (monto principal)</span>
            </li>
            <li className="flex items-start">
              <span className="bg-indigo-100 text-indigo-800 font-bold px-2 py-1 rounded mr-3">r</span>
              <span>Tasa de interés (expresada en decimal, ej: 5% = 0.05)</span>
            </li>
            <li className="flex items-start">
              <span className="bg-indigo-100 text-indigo-800 font-bold px-2 py-1 rounded mr-3">t</span>
              <span>Tiempo (en años)</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Ejemplos Prácticos con Interpretación */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center text-indigo-800">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          5 Ejemplos Prácticos con Interpretación
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Ejemplo 1 */}
          <div className="bg-white p-5 rounded-lg shadow-sm border border-blue-200">
            <h3 className="font-medium text-blue-800 mb-3 flex items-center">
              <span className="bg-blue-100 text-blue-800 font-bold w-6 h-6 rounded-full flex items-center justify-center mr-2">1</span>
              Préstamo personal
            </h3>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">Capital:</span> $8,000</p>
              <p><span className="font-medium">Tasa anual:</span> 12% (0.12)</p>
              <p><span className="font-medium">Plazo:</span> 2 años</p>
              <div className="mt-3 p-3 bg-blue-50 rounded">
                <p className="font-mono">I = 8000 × 0.12 × 2 = $1,920</p>
                <p className="font-medium mt-2">Total a pagar: $9,920</p>
              </div>
              <div className="mt-3 p-3 bg-blue-100 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-1">Interpretación:</h4>
                <p className="text-blue-700 text-sm">Por un préstamo de $8,000 al 12% anual, pagarás $1,920 adicionales en concepto de intereses durante 2 años. Esto significa que cada año pagarás $960 en intereses (12% del capital), sin acumulación.</p>
              </div>
            </div>
          </div>

          {/* Ejemplo 2 */}
          <div className="bg-white p-5 rounded-lg shadow-sm border border-green-200">
            <h3 className="font-medium text-green-800 mb-3 flex items-center">
              <span className="bg-green-100 text-green-800 font-bold w-6 h-6 rounded-full flex items-center justify-center mr-2">2</span>
              Inversión en bonos
            </h3>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">Inversión:</span> $15,000</p>
              <p><span className="font-medium">Rendimiento anual:</span> 7.5% (0.075)</p>
              <p><span className="font-medium">Duración:</span> 5 años</p>
              <div className="mt-3 p-3 bg-green-50 rounded">
                <p className="font-mono">I = 15000 × 0.075 × 5 = $5,625</p>
                <p className="font-medium mt-2">Total final: $20,625</p>
              </div>
              <div className="mt-3 p-3 bg-green-100 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-1">Interpretación:</h4>
                <p className="text-green-700 text-sm">Al invertir $15,000 en bonos al 7.5% anual, recibirás $1,125 cada año (7.5% de $15,000). En 5 años habrás ganado $5,625 en intereses, manteniendo siempre el mismo rendimiento sobre el capital inicial.</p>
              </div>
            </div>
          </div>

          {/* Ejemplo 3 */}
          <div className="bg-white p-5 rounded-lg shadow-sm border border-purple-200">
            <h3 className="font-medium text-purple-800 mb-3 flex items-center">
              <span className="bg-purple-100 text-purple-800 font-bold w-6 h-6 rounded-full flex items-center justify-center mr-2">3</span>
              Crédito automotriz
            </h3>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">Monto:</span> $25,000</p>
              <p><span className="font-medium">Tasa:</span> 9.25% (0.0925)</p>
              <p><span className="font-medium">Plazo:</span> 3 años</p>
              <div className="mt-3 p-3 bg-purple-50 rounded">
                <p className="font-mono">I = 25000 × 0.0925 × 3 = $6,937.50</p>
                <p className="font-medium mt-2">Total del préstamo: $31,937.50</p>
              </div>
              <div className="mt-3 p-3 bg-purple-100 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-1">Interpretación:</h4>
                <p className="text-purple-700 text-sm">Un crédito de $25,000 para auto al 9.25% anual generará $2,312.50 en intereses cada año. En 3 años, pagarás casi $7,000 adicionales al capital, lo que representa aproximadamente el 27.75% del monto original en intereses.</p>
              </div>
            </div>
          </div>

          {/* Ejemplo 4 */}
          <div className="bg-white p-5 rounded-lg shadow-sm border border-yellow-200">
            <h3 className="font-medium text-yellow-800 mb-3 flex items-center">
              <span className="bg-yellow-100 text-yellow-800 font-bold w-6 h-6 rounded-full flex items-center justify-center mr-2">4</span>
              Préstamo estudiantil
            </h3>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">Capital:</span> $12,500</p>
              <p><span className="font-medium">Tasa fija:</span> 6.8% (0.068)</p>
              <p><span className="font-medium">Periodo:</span> 4 años</p>
              <div className="mt-3 p-3 bg-yellow-50 rounded">
                <p className="font-mono">I = 12500 × 0.068 × 4 = $3,400</p>
                <p className="font-medium mt-2">Deuda total: $15,900</p>
              </div>
              <div className="mt-3 p-3 bg-yellow-100 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-1">Interpretación:</h4>
                <p className="text-yellow-700 text-sm">Un préstamo estudiantil de $12,500 al 6.8% anual costará $850 en intereses cada año. Al finalizar los 4 años, habrás pagado $3,400 en intereses, lo que aumenta tu deuda total en un 27.2% sobre el monto original.</p>
              </div>
            </div>
          </div>

          {/* Ejemplo 5 */}
          <div className="bg-white p-5 rounded-lg shadow-sm border border-red-200">
            <h3 className="font-medium text-red-800 mb-3 flex items-center">
              <span className="bg-red-100 text-red-800 font-bold w-6 h-6 rounded-full flex items-center justify-center mr-2">5</span>
              Inversión en cuenta de ahorros
            </h3>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">Depósito:</span> $5,000</p>
              <p><span className="font-medium">Interés anual:</span> 3.2% (0.032)</p>
              <p><span className="font-medium">Tiempo:</span> 7 años</p>
              <div className="mt-3 p-3 bg-red-50 rounded">
                <p className="font-mono">I = 5000 × 0.032 × 7 = $1,120</p>
                <p className="font-medium mt-2">Saldo final: $6,120</p>
              </div>
              <div className="mt-3 p-3 bg-red-100 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-1">Interpretación:</h4>
                <p className="text-red-700 text-sm">Depositar $5,000 en una cuenta de ahorros al 3.2% te generará $160 anuales en intereses. En 7 años habrás ganado $1,120, lo que representa un crecimiento del 22.4% sobre tu inversión inicial, sin reinvertir los intereses.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aplicaciones y Comparación */}
      <section className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <svg className="w-6 h-6 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Aplicaciones Comunes
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="bg-purple-100 text-purple-800 p-1 rounded-full mr-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Préstamos personales o comerciales a corto plazo
            </li>
            <li className="flex items-start">
              <span className="bg-purple-100 text-purple-800 p-1 rounded-full mr-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Certificados de depósito con pago periódico de intereses
            </li>
            <li className="flex items-start">
              <span className="bg-purple-100 text-purple-800 p-1 rounded-full mr-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Cálculos educativos para entender conceptos financieros básicos
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <svg className="w-6 h-6 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Interés Simple vs. Compuesto
          </h2>
          <div className="bg-red-50 p-4 rounded-lg mb-3">
            <h3 className="font-medium text-red-800 mb-2">Interés Simple:</h3>
            <ul className="text-red-700 space-y-1 text-sm">
              <li>• Solo ganas interés sobre el capital inicial</li>
              <li>• Crecimiento lineal del dinero</li>
              <li>• Fórmula: I = C × r × t</li>
              <li>• Ideal para períodos cortos</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-medium text-green-800 mb-2">Interés Compuesto:</h3>
            <ul className="text-green-700 space-y-1 text-sm">
              <li>• Ganas interés sobre el capital + intereses acumulados</li>
              <li>• Crecimiento exponencial del dinero</li>
              <li>• Fórmula: M = C × (1 + r)^t</li>
              <li>• Mejor para inversiones a largo plazo</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Consejos finales */}
      <section className="bg-indigo-50 p-6 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-indigo-800">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          Consejos Prácticos
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-medium text-indigo-700 mb-2">Para préstamos:</h3>
            <ul className="text-sm space-y-1">
              <li>• Busca siempre la menor tasa de interés posible</li>
              <li>• Periodos más cortos reducen el interés total</li>
              <li>• Verifica que usen interés simple y no compuesto</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-medium text-indigo-700 mb-2">Para inversiones:</h3>
            <ul className="text-sm space-y-1">
              <li>• Considera el interés compuesto para largo plazo</li>
              <li>• El interés simple es mejor para periodos cortos</li>
              <li>• Compara siempre diferentes opciones</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}