import React from 'react';
import { Eye, EyeOff, Layers } from 'lucide-react';
import { clsx } from 'clsx';

export const LayerController = ({ layers, layerState, onToggleLayer, onOpacityChange }) => {
    return (
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl border border-slate-200 p-4 w-72">
            <div className="flex items-center gap-2 mb-4 text-slate-700">
                <Layers size={18} />
                <h3 className="font-semibold text-sm">Calques Anatomiques</h3>
            </div>

            <div className="space-y-4">
                {layers.map((layer) => {
                    const isVisible = layerState[layer.id]?.visible ?? true;
                    const opacity = layerState[layer.id]?.opacity ?? 1;

                    return (
                        <div key={layer.id} className="space-y-2">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-slate-700">{layer.name}</span>
                                <button
                                    onClick={() => onToggleLayer(layer.id)}
                                    className={clsx(
                                        "p-1.5 rounded-md transition-colors",
                                        isVisible ? "text-blue-600 bg-blue-50" : "text-slate-400 hover:bg-slate-100"
                                    )}
                                >
                                    {isVisible ? <Eye size={16} /> : <EyeOff size={16} />}
                                </button>
                            </div>

                            <div className="flex items-center gap-3">
                                <input
                                    type="range"
                                    min="0"
                                    max="1"
                                    step="0.1"
                                    value={opacity}
                                    disabled={!isVisible}
                                    onChange={(e) => onOpacityChange(layer.id, parseFloat(e.target.value))}
                                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer disabled:opacity-50 accent-blue-500"
                                />
                                <span className="text-xs text-slate-400 w-8 text-right">
                                    {Math.round(opacity * 100)}%
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
