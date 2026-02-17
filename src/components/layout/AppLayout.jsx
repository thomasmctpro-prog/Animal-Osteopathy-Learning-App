import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { LayerController } from './LayerController';
import { InfoPanel } from './InfoPanel';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

export const AppLayout = ({
    children,
    animals,
    selectedAnimal,
    onSelectAnimal,
    layers,
    layerState,
    onToggleLayer,
    onOpacityChange,
    selectedPart
}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex bg-slate-50 h-screen overflow-hidden">
            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsSidebarOpen(false)}
                        className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar - Desktop & Mobile */}
            <div className={clsx(
                "fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 md:relative md:translate-x-0",
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <Sidebar
                    animals={animals}
                    selectedAnimal={selectedAnimal}
                    onSelectAnimal={(id) => {
                        onSelectAnimal(id);
                        setIsSidebarOpen(false);
                    }}
                />
                {/* Close button for mobile */}
                <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="md:hidden absolute top-4 right-4 text-white hover:text-slate-300"
                >
                    <X size={24} />
                </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col relative w-full h-full">
                {/* Mobile Header */}
                <div className="md:hidden p-4 bg-white border-b border-slate-200 flex items-center justify-between">
                    <button onClick={() => setIsSidebarOpen(true)} className="p-2 -ml-2 text-slate-600">
                        <Menu size={24} />
                    </button>
                    <span className="font-semibold text-slate-800">OsteoLearn</span>
                    <div className="w-8" /> {/* Spacer */}
                </div>

                {/* Viewer Area */}
                <div className="flex-1 relative overflow-hidden bg-slate-100">
                    {children}

                    {/* Floating Controls */}
                    <div className="absolute top-4 right-4 z-10 hidden md:block">
                        <LayerController
                            layers={layers}
                            layerState={layerState}
                            onToggleLayer={onToggleLayer}
                            onOpacityChange={onOpacityChange}
                        />
                    </div>

                    {/* Mobile Layer Toggle (To implemented later or integrate) */}
                </div>

                {/* Info Panel Integration */}
                {selectedPart && (
                    <div className="absolute bottom-0 left-0 right-0 md:top-0 md:bottom-0 md:left-auto md:right-0 md:w-80 shadow-2xl z-20">
                        <InfoPanel part={selectedPart} onClose={() => { }} />
                    </div>
                )}
            </div>
        </div>
    );
};
