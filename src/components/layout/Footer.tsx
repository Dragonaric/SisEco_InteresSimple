// components/layout/Footer.tsx
import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información de la Universidad */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">
              Universidad Mayor de San Simón
            </h3>
            <p className="text-blue-200 mb-4">
              Calculadora de Interés Simple desarrollada para facilitar el aprendizaje 
              de conceptos financieros básicos.
            </p>
            <div className="space-y-2 text-sm text-blue-200">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Cochabamba, Bolivia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+591 4 4542563</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@umss.edu.bo</span>
              </div>
            </div>
          </div>

          {/* Enlaces Útiles */}
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Útiles</h3>
            <ul className="space-y-2 text-blue-200">
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Portal UMSS
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Biblioteca Virtual
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Matemáticas Financieras
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Soporte Técnico
                </a>
              </li>
            </ul>
          </div>

          {/* Información del Proyecto */}
          <div>
            <h3 className="text-lg font-bold mb-4">Acerca del Proyecto</h3>
            <p className="text-blue-200 text-sm mb-4">
              Esta herramienta educativa fue desarrollada para apoyar el proceso de 
              enseñanza-aprendizaje en el área de matemáticas financieras.
            </p>
            <div className="text-sm text-blue-200">
              <p className="mb-1">Versión: 1.0.0</p>
              <p className="mb-1">Última actualización: Junio 2025</p>
              <p>Desarrollado con Next.js y TypeScript</p>
            </div>
          </div>
        </div>

        {/* Línea divisoria y copyright */}
        <div className="border-t border-blue-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm">
              © {currentYear} Universidad Mayor de San Simón. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-blue-200">
              <a href="#" className="hover:text-white transition-colors duration-200">
                Términos de Uso
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}