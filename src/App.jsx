import React, { useState, useEffect } from 'react';
import { AppLayout } from './components/layout/AppLayout';
import { AnatomyViewer } from './components/viewer/AnatomyViewer';
import { animals, defaultAnimalId } from './data/anatomyData';

function App() {
  const [selectedAnimalId, setSelectedAnimalId] = useState(defaultAnimalId);
  const [layerState, setLayerState] = useState({});
  const [selectedPart, setSelectedPart] = useState(null);

  const selectedAnimal = animals.find(a => a.id === selectedAnimalId);

  // Initialize or update layer state when animal changes
  useEffect(() => {
    if (selectedAnimal) {
      const initialLayerState = {};
      selectedAnimal.layers.forEach(layer => {
        // Preserve existing state if switching back? 
        // For now, reset or check if we want persistence. 
        // Let's reset for simplicity but keep defaults.
        initialLayerState[layer.id] = { visible: true, opacity: 1 };
      });
      setLayerState(initialLayerState);
      setSelectedPart(null); // Deselect on switch
    }
  }, [selectedAnimalId]);

  const handleToggleLayer = (layerId) => {
    setLayerState(prev => ({
      ...prev,
      [layerId]: {
        ...prev[layerId],
        visible: !prev[layerId].visible
      }
    }));
  };

  const handleOpacityChange = (layerId, newOpacity) => {
    setLayerState(prev => ({
      ...prev,
      [layerId]: {
        ...prev[layerId],
        opacity: newOpacity
      }
    }));
  };

  return (
    <AppLayout
      animals={animals}
      selectedAnimal={selectedAnimalId}
      onSelectAnimal={setSelectedAnimalId}
      layers={selectedAnimal ? selectedAnimal.layers : []}
      layerState={layerState}
      onToggleLayer={handleToggleLayer}
      onOpacityChange={handleOpacityChange}
      selectedPart={selectedPart}
    >
      <AnatomyViewer
        animal={selectedAnimal}
        layerState={layerState}
        onSelectPart={setSelectedPart}
        selectedPart={selectedPart}
      />
    </AppLayout>
  );
}

export default App;
