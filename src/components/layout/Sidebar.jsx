import React from 'react';
import { clsx } from 'clsx';
import { PawPrint } from 'lucide-react';

export const Sidebar = ({ animals, selectedAnimal, onSelectAnimal }) => {
    return (
        <div className="w-64 bg-slate-900 text-white h-screen flex flex-col border-r border-slate-800">
            <div className="p-6 border-b border-slate-800 flex items-center gap-3">
                <div className="bg-blue-500 p-2 rounded-lg">
                    <PawPrint size={24} className="text-white" />
                </div>
                <h1 className="font-bold text-xl tracking-tight">OsteoLearn</h1>
            </div>

            <div className="flex-1 overflow-y-auto py-6">
                <h2 className="px-6 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                    Espèces
                </h2>
                <nav className="space-y-1 px-3">
                    {animals.map((animal) => (
                        <button
                            key={animal.id}
                            onClick={() => onSelectAnimal(animal.id)}
                            className={clsx(
                                "w-full flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-colors",
                                selectedAnimal === animal.id
                                    ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20"
                                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                            )}
                        >
                            <span className="truncate">{animal.name}</span>
                        </button>
                    ))}
                </nav>
            </div>

            <div className="p-4 border-t border-slate-800">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold">
                        ET
                    </div>
                    <div className="text-xs">
                        <div className="font-medium text-white">Étudiant</div>
                        <div className="text-slate-500">Mode Pratique</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
