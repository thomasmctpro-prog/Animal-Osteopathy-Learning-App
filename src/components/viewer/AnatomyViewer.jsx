import React from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

export const AnatomyViewer = ({ animal, layerState, onSelectPart, selectedPart }) => {
    if (!animal) return <div className="p-10 text-slate-400">Sélectionnez une espèce</div>;

    return (
        <div className="w-full h-full bg-slate-100 cursor-move">
            <TransformWrapper
                initialScale={1}
                minScale={0.5}
                maxScale={4}
                centerOnInit={true}
                wheel={{ step: 0.1 }}
            >
                <TransformComponent wrapperClass="w-full h-full" contentClass="w-full h-full flex items-center justify-center">
                    {/* 
             ViewBox is arbitrary here for demo. 
             In a real app, it would match the SVG dimensions of the illustrations.
           */}
                    <svg
                        viewBox="0 0 800 600"
                        className="w-full h-full max-h-[80vh]"
                        style={{ filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.1))' }}
                    >
                        {/* Base Silhouette (Optional) */}
                        <path d="M100,500 L700,500" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="5,5" />

                        {animal.layers.map((layer) => {
                            const config = layerState[layer.id];
                            if (!config?.visible) return null;

                            return (
                                <g key={layer.id} style={{ opacity: config.opacity }}>
                                    {layer.items.map((item) => {
                                        const isSelected = selectedPart?.id === item.id;
                                        return (
                                            <path
                                                key={item.id}
                                                d={item.path}
                                                fill={isSelected ? '#3b82f6' : (item.color || '#e2e8f0')}
                                                stroke={isSelected ? '#1e40af' : '#64748b'}
                                                strokeWidth={isSelected ? 3 : 1}
                                                className="transition-all duration-200 hover:fill-blue-200 cursor-pointer"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    // Attach layer name for context
                                                    onSelectPart({ ...item, layerName: layer.name });
                                                }}
                                            // Simple tooltip via title for now, could be custom floating div
                                            >
                                                <title>{item.name}</title>
                                            </path>
                                        );
                                    })}
                                </g>
                            );
                        })}
                    </svg>
                </TransformComponent>
            </TransformWrapper>
        </div>
    );
};
