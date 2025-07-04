// components/layout/Footer.tsx
'use client'

import { Mail, MapPin, ExternalLink, BookText, Code, ShieldCheck, Users, User, GraduationCap } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const lastUpdated = 'Junio 2025'

  const teamMembers = [
    {
      name: 'Franklin Emanuel Garcia Gomez',
      role: 'Responsable Directo',
      degree: 'Ing. Sistemas',
      icon: User
    },
    {
      name: 'Celso Jimenes Obando',
      role: 'Colaborador',
      degree: 'Ing. Sistemas',
      icon: GraduationCap
    },
    {
      name: 'Kevin Brayan Chinuri Jancko',
      role: 'Colaborador',
      degree: 'Ing. Sistemas',
      icon: GraduationCap
    },
    {
      name: 'Sebastian Arnez Nigoevic',
      role: 'Colaborador',
      degree: 'Ing. Sistemas',
      icon: GraduationCap
    },
    {
      name: 'Dhery Mercado Mejia',
      role: 'Colaborador',
      degree: 'Ing. Sistemas',
      icon: GraduationCap
    },
    {
      name: 'Felipe Rivera Leyton Ludwin',
      role: 'Colaborador',
      degree: 'Ing. Sistemas',
      icon: GraduationCap
    }
  ]

  return (
    <footer className="bg-dark text-white border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Información de la Universidad */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="bg-primary/20 p-2 rounded-lg mr-3">
                <BookText className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary">
                Universidad Mayor de San Simón
              </h3>
            </div>
            <p className="text-blue-200 mb-6 text-sm leading-relaxed">
              Calculadora de Interés Simple desarrollada por la Facultad de Tecnología para facilitar el aprendizaje de conceptos financieros básicos en el área de
              matemáticas financieras.
            </p>
            <div className="space-y-3 text-sm text-blue-200">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>Cochabamba, Bolivia - Facultad de Tecnología</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <a
                  href="mailto:franklinemanuelcapo@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  franklinemanuelcapo@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Enlaces Útiles */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <ExternalLink className="h-5 w-5 text-primary mr-2" />
              Enlaces Útiles
            </h3>
            <ul className="space-y-3">
              {[
                {
                  name: 'Portal UMSS',
                  href: 'https://www.umss.edu.bo',
                  external: true
                },
                {
                  name: 'Carrera de Ingenieria de sistemas',
                  href: 'https://www.umss.edu.bo/licenciatura-en-ingenieria-de-sistemas/',
                  badge: 'Nuevo'
                }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    target={link.external ? '_blank' : '_self'}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="flex items-center text-blue-200 hover:text-white transition-colors group"
                  >
                    <span className="border-b border-transparent group-hover:border-blue-300 pb-0.5 transition-all">
                      {link.name}
                    </span>
                    {link.external && (
                      <ExternalLink className="h-3 w-3 ml-1.5 opacity-70" />
                    )}
                    {link.badge && (
                      <span className="ml-2 bg-primary/20 text-primary text-xs px-1.5 py-0.5 rounded">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Información del Proyecto */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <Code className="h-5 w-5 text-primary mr-2" />
              Acerca del Proyecto
            </h3>
            <p className="text-blue-200 text-sm mb-4 leading-relaxed">
              Herramienta educativa desarrollada para apoyar el proceso de
              enseñanza-aprendizaje en el área de matemáticas financieras.
            </p>
            <div className="space-y-2 text-sm text-blue-200">
              <div className="flex items-center">
                <span className="w-24">Versión:</span>
                <span className="font-medium">1.0.0</span>
              </div>
              <div className="flex items-center">
                <span className="w-24">Actualizado:</span>
                <span className="font-medium">{lastUpdated}</span>
              </div>
              <div className="flex items-center">
                <span className="w-24">Tecnologías:</span>
                <span className="font-medium">Next.js, TypeScript</span>
              </div>
              <div className="flex items-center">
                <span className="w-24">Responsable del código:</span>
                <span className="font-medium">Grupo 1 del Sistemas Económico</span>
              </div>
            </div>
          </div>
        </div>

        {/* Equipo de Desarrollo */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-primary flex items-center justify-center mb-2">
              <Users className="h-6 w-6 mr-2" />
              Equipo de Desarrollo
            </h3>
            <p className="text-blue-200 text-sm">
              Grupo 1 - Sistemas Económico - Facultad de Tecnología
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-primary/50 transition-all duration-300 hover:bg-gray-800/70"
              >
                <div className="flex items-start space-x-3">
                  <div className="bg-primary/20 p-2 rounded-lg flex-shrink-0">
                    <member.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-white text-sm leading-tight mb-1">
                      {member.name}
                    </h4>
                    <div className="flex items-center space-x-2 text-xs">
                      <span className="bg-primary/20 text-primary px-2 py-1 rounded-full">
                        {member.role}
                      </span>
                      <span className="text-blue-200">
                        {member.degree}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Línea divisoria y copyright */}
        <div className="border-t border-gray-800 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm mb-4 md:mb-0">
              © {currentYear} Facultad de Ciencias y tecnología - UMSS. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
              {[
                { name: 'Términos de Uso', icon: ShieldCheck },
                { name: 'Política de Privacidad', icon: ShieldCheck },
                { name: 'Contacto', icon: Mail }
              ].map((item) => (
                <Link
                  key={item.name}
                  href="#"
                  className="flex items-center text-blue-200 hover:text-white text-sm transition-colors"
                >
                  <item.icon className="h-3.5 w-3.5 mr-1.5 opacity-70" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}