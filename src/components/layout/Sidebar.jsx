import React from 'react';
import { clsx } from 'clsx';
import { PawPrint, Bone, GraduationCap, Dog } from 'lucide-react';

export const Sidebar = ({ animals, selectedAnimal, onSelectAnimal }) => {
    return (
        <div className="w-64 bg-slate-900 text-white h-screen flex flex-col border-r border-slate-800">
            <div className="p-6 border-b border-slate-800 flex items-center gap-3">
                <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 p-2.5 rounded-xl shadow-lg shadow-blue-900/30 overflow-hidden group">
                    <Bone size={24} className="text-white relative z-10 rotate-45" />
                    <GraduationCap size={16} className="text-blue-200 absolute top-0.5 right-0.5 z-0 opacity-50" />
                </div>
                <div>
                    <h1 className="font-bold text-xl tracking-tight text-white leading-none">OsteoLearn</h1>
                    <span className="text-[10px] font-medium text-blue-400 uppercase tracking-widest">Éducation</span>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto py-6">
                <h2 className="px-6 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                    Espèces
                </h2>
                <nav className="space-y-2 px-3">
                    {animals.map((animal) => {
                        // Dynamic icon selection based on ID
                        const Icon = animal.id === 'horse' ? PawPrint : PawPrint; // Placeholder until we have specific icons

                        return (
                            <button
                                key={animal.id}
                                onClick={() => onSelectAnimal(animal.id)}
                                className={clsx(
                                    "w-full flex items-center gap-3 px-3 py-3 text-sm font-medium rounded-xl transition-all duration-200 group",
                                    selectedAnimal === animal.id
                                        ? "bg-blue-600 text-white shadow-lg shadow-blue-900/40 scale-105"
                                        : "text-slate-400 hover:bg-slate-800 hover:text-white hover:pl-4"
                                )}
                            >
                                <div className={clsx(
                                    "p-2 rounded-lg transition-colors",
                                    selectedAnimal === animal.id ? "bg-blue-500/20" : "bg-slate-800 group-hover:bg-slate-700"
                                )}>
                                    <Icon size={18} />
                                </div>
                                <span className="font-semibold">{animal.name}</span>
                            </button>
                        );
                    })}
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
