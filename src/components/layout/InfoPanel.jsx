import React from 'react';
import { X, Info, Activity, Anchor } from 'lucide-react';
import { motion } from 'framer-motion';

export const InfoPanel = ({ part, onClose }) => {
    if (!part) return null;

    return (
        <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="h-full bg-white border-l border-slate-200 flex flex-col shadow-xl"
        >
            <div className="p-6 border-b border-slate-100 flex items-start justify-between bg-slate-50">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800">{part.name}</h2>
                    <span className="inline-block mt-2 px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full uppercase tracking-wide">
                        {part.layerName || 'Structure Anatomique'}
                    </span>
                </div>
                <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
                    <X size={20} />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
                <p className="text-slate-600 leading-relaxed text-sm">
                    {part.info?.description || "Aucune description disponible."}
                </p>

                <div className="space-y-4">
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                        <div className="flex items-center gap-2 mb-2 text-slate-900 font-semibold text-sm">
                            <Anchor size={16} className="text-blue-500" />
                            Origine & Insertion
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <span className="block text-xs text-slate-400 uppercase mb-1">Origine</span>
                                <span className="text-slate-700">{part.info?.origin || "-"}</span>
                            </div>
                            <div>
                                <span className="block text-xs text-slate-400 uppercase mb-1">Insertion</span>
                                <span className="text-slate-700">{part.info?.insertion || "-"}</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                        <div className="flex items-center gap-2 mb-2 text-slate-900 font-semibold text-sm">
                            <Activity size={16} className="text-green-500" />
                            Action Principale
                        </div>
                        <p className="text-sm text-slate-700">
                            {part.info?.action || "-"}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
