# Calculadora de Interés Simple

## Descripción General
Esta aplicación es una calculadora de interés simple que permite calcular diferentes variables financieras relacionadas con el interés simple. La aplicación está construida con Next.js y utiliza componentes modernos de UI para proporcionar una experiencia de usuario intuitiva y atractiva.

## Estructura de Componentes

### 1. VariableSelector
- **Ubicación**: `components/calculator/VariableSelector.tsx`
- **Responsabilidad**: Muestra una cuadrícula de opciones para seleccionar la variable a calcular (P, F, I, i, n)
- **Características**:
  - Tarjetas interactivas con iconos
  - Tooltips informativos
  - Descripción de cada variable
  - Fórmula correspondiente
  - Enlaces a las páginas de cálculo específicas

### 2. InputField
- **Ubicación**: `components/calculator/InputField.tsx`
- **Responsabilidad**: Componente reutilizable para la entrada de datos
- **Características**:
  - Validación de entrada
  - Soporte para unidades
  - Mensajes de error
  - Tooltips de ayuda
  - Estilos condicionales

### 3. FormulaDisplay
- **Ubicación**: `components/calculator/FormulaDisplay.tsx`
- **Responsabilidad**: Muestra la fórmula matemática y su derivación
- **Características**:
  - Visualización de la fórmula principal
  - Botón para mostrar/ocultar la derivación
  - Animaciones suaves
  - Estilo matemático

### 4. ResultCard
- **Ubicación**: `components/calculator/ResultCard.tsx`
- **Responsabilidad**: Muestra los resultados del cálculo
- **Características**:
  - Formato de moneda y porcentajes
  - Opción de exportar resultados
  - Copiar al portapapeles
  - Animaciones de entrada

### 5. AnimatedContainer
- **Ubicación**: `components/shared/AnimatedContainer.tsx`
- **Responsabilidad**: Proporciona animaciones para la transición de páginas y resultados
- **Características**:
  - Animaciones de entrada/salida
  - Transiciones suaves
  - Soporte para diferentes tipos de contenido

## Flujo de la Aplicación

1. **Página Principal**:
   - El usuario selecciona la variable a calcular
   - Se muestra información detallada sobre cada opción

2. **Página de Cálculo**:
   - Muestra campos de entrada específicos para la variable seleccionada
   - Proporciona ayuda contextual
   - Muestra la fórmula correspondiente
   - Calcula y muestra los resultados

3. **Resultados**:
   - Muestra el resultado principal
   - Proporciona un desglose detallado
   - Ofrece opciones para exportar o copiar resultados

## Características Técnicas

- **Framework**: Next.js
- **UI Components**: Componentes personalizados con shadcn/ui
- **Animaciones**: Framer Motion
- **Estilos**: Tailwind CSS
- **Validación**: Validación en tiempo real
- **Accesibilidad**: Soporte completo para ARIA y navegación por teclado

## Variables Calculables

1. **Valor Presente (P)**
   - Fórmula: P = F / (1 + i × n)
   - Calcula el valor actual de una suma futura

2. **Valor Futuro (F)**
   - Fórmula: F = P × (1 + i × n)
   - Calcula el valor futuro de una inversión

3. **Interés Total (I)**
   - Fórmula: I = P × i × n
   - Calcula el interés generado

4. **Tasa de Interés (i)**
   - Fórmula: i = I / (P × n)
   - Calcula la tasa de interés necesaria

5. **Número de Periodos (n)**
   - Fórmula: n = I / (P × i)
   - Calcula el tiempo necesario

## Mejores Prácticas Implementadas

- Diseño responsivo
- Validación de datos en tiempo real
- Mensajes de error claros
- Animaciones suaves
- Interfaz intuitiva
- Documentación en línea
- Soporte para accesibilidad
- Optimización de rendimiento
