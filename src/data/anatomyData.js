export const animals = [
    {
        id: 'horse',
        name: 'Cheval',
        layers: [
            {
                id: 'skeleton',
                name: 'Squelette',
                items: [
                    {
                        id: 'h-skull',
                        name: 'Crâne',
                        path: 'M250,150  C240,140 280,110 320,130 C340,140 330,170 300,180 C280,185 260,160 250,150 Z', // Simplified Shape
                        info: {
                            description: "Le crâne protège le cerveau et loge les organes sensoriels.",
                            origin: "-",
                            insertion: "-",
                            action: "-"
                        }
                    },
                    {
                        id: 'h-scapula',
                        name: 'Scapula',
                        path: 'M280,220 L300,280 L260,260 Z',
                        info: {
                            description: "Os plat et triangulaire de l'épaule.",
                            origin: "-",
                            insertion: "-",
                            action: "Permet l'articulation de l'épaule."
                        }
                    },
                    {
                        id: 'h-humerus',
                        name: 'Humérus',
                        path: 'M300,280 L320,350 L290,340 Z',
                        info: { description: "Os du bras.", origin: "Scapula", insertion: "Radius/Ulna", action: "Flexion/Extension du coude." }
                    },
                    {
                        id: 'h-spine',
                        name: 'Colonne Vertébrale',
                        path: 'M300,180 Q450,160 600,200',
                        type: 'stroke', // Special handling for lines if needed
                        info: { description: "Axe central du squelette.", origin: "-", insertion: "-", action: "-" }
                    }
                ]
            },
            {
                id: 'muscle_superficial',
                name: 'Muscles Superficiels',
                items: [
                    {
                        id: 'h-latissimus',
                        name: 'Grand Dorsal',
                        path: 'M320,220 Q400,200 450,250 L400,300 Z',
                        info: {
                            description: "Muscle large du dos.",
                            origin: "Vertebres thoraciques/lombaires",
                            insertion: "Humérus",
                            action: "Rétracteur du membre thoracique."
                        }
                    },
                    {
                        id: 'h-trapezius',
                        name: 'Trapèze',
                        path: 'M300,160 L400,170 L380,210 L310,200 Z',
                        info: {
                            description: "Muscle triangulaire de l'encolure et du garrot.",
                            origin: "Ligament nuchal",
                            insertion: "Épine scapulaire",
                            action: "Élève l'épaule."
                        }
                    }
                ]
            }
        ]
    },
    {
        id: 'dog',
        name: 'Chien',
        layers: [
            {
                id: 'skeleton',
                name: 'Squelette',
                items: [
                    {
                        id: 'd-skull',
                        name: 'Crâne',
                        path: 'M150,200 C140,190 180,180 200,200 C210,210 200,230 180,230 Z',
                        info: {
                            description: "Crâne de canidé.",
                            origin: "-",
                            insertion: "-",
                            action: "-"
                        }
                    }
                ]
            }
        ]
    }
];

export const defaultAnimalId = 'horse';
