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
                                    {/* Layer Image Background */}
                                    {layer.image && (
                                        <image
                                            href={layer.image}
                                            x="0"
                                            y="0"
                                            width="800"
                                            height="600"
                                            preserveAspectRatio="xMidYMid meet"
                                        />
                                    )}

                                    {/* SVGs Overlay / Hit Areas */}
                                    {layer.items.map((item) => {
                                        const isSelected = selectedPart?.id === item.id;
                                        return (
                                            <path
                                                key={item.id}
                                                d={item.path}
                                                fill={isSelected ? 'rgba(59, 130, 246, 0.5)' : 'transparent'} // Transparent by default to see image
                                                stroke={isSelected ? '#1e40af' : 'transparent'} // Only show stroke on hover/select or always? 
                                                // Let's keep it transparent unless selected for now
                                                // Or maybe dashed line? 
                                                strokeWidth={isSelected ? 3 : 1}
                                                className="transition-all duration-200 hover:fill-blue-500/30 hover:stroke-blue-400 cursor-pointer"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    // Attach layer name for context
                                                    onSelectPart({ ...item, layerName: layer.name });
                                                }}
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
