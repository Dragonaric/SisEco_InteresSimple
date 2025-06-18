// Página intermedia mejorada para seleccionar calculadora
'use client';

import Link from 'next/link';
import { Calculator, ArrowRightCircle } from 'lucide-react';

const calculators = [
	{
		key: 'P',
		label: 'Valor Presente',
		description:
			'Calcula el capital inicial necesario para alcanzar un monto futuro.',
	},
	{
		key: 'F',
		label: 'Valor Futuro',
		description:
			'Determina cuánto tendrás en el futuro a partir de un capital inicial.',
	},
	{
		key: 'n',
		label: 'Número de Periodos',
		description:
			'Calcula cuántos periodos necesitas para alcanzar tu objetivo.',
	},
	{
		key: 'i',
		label: 'Tasa de Interés',
		description:
			'Descubre la tasa de interés aplicada en tu operación.',
	},
	{
		key: 'I',
		label: 'Interés Total',
		description:
			'Conoce el total de intereses generados en la operación.',
	},
];

export default function CalculadoraSelectorPage() {
	return (
		<section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
			<div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8 border border-blue-100">
				<h1 className="text-4xl font-extrabold text-center text-blue-900 mb-2 flex items-center justify-center gap-2">
					<Calculator className="w-8 h-8 text-blue-600" /> Calculadoras
					Financieras
				</h1>
				<p className="text-center text-lg text-blue-700 mb-8">
					Selecciona la calculadora que deseas utilizar
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
					{calculators.map((calc) => (
						<Link
							key={calc.key}
							href={`/home/calculadora/app/${calc.key}`}
							className="group flex flex-col justify-between h-full rounded-xl border border-blue-200 bg-gradient-to-tr from-blue-100 to-white p-6 shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-200"
						>
							<div className="flex items-center gap-3 mb-2">
								<Calculator className="w-6 h-6 text-blue-500 group-hover:text-indigo-600 transition-colors" />
								<span className="text-xl font-bold text-blue-800 group-hover:text-indigo-700 transition-colors">
									{calc.label}
								</span>
							</div>
							<p className="text-blue-700 text-sm mb-4 flex-1">
								{calc.description}
							</p>
							<div className="flex justify-end">
								<ArrowRightCircle className="w-6 h-6 text-indigo-400 group-hover:text-indigo-700 transition-colors" />
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}