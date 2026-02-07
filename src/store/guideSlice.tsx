import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Guide {
  guideNumber: string;
  status: string;
  origin: string;
  destination: string;
  lastUpdate: string;
  statusValue: string;
}

interface GuideState {
  guides: Guide[];
}

const initialState: GuideState = {
  guides: [
    {
      guideNumber: "XP-3748291056",
      status: "En tránsito",
      origin: "Guadalajara, Jalisco",
      destination: "Monterrey, Nuevo León",
      lastUpdate: "2025-03-10",
      statusValue: "2"
    },
    {
      guideNumber: "TR-5921037485",
      status: "Entregado",
      origin: "Ciudad de México, CDMX",
      destination: "Querétaro, Querétaro",
      lastUpdate: "2025-03-09",
      statusValue: "3"
    },
    {
      guideNumber: "PK-8473201956",
      status: "En tránsito",
      origin: "Tijuana, Baja California",
      destination: "León, Guanajuato",
      lastUpdate: "2025-03-11",
      statusValue: "2"
    },
    {
      guideNumber: "SH-2109876543",
      status: "En tránsito",
      origin: "Mérida, Yucatán",
      destination: "Puebla, Puebla",
      lastUpdate: "2025-03-08",
      statusValue: "2"
    },
    {
      guideNumber: "DL-6598324710",
      status: "En tránsito",
      origin: "Cancún, Quintana Roo",
      destination: "Toluca, Estado de México",
      lastUpdate: "2025-03-12",
      statusValue: "2"
    }
  ],
};

const guideSlice = createSlice({
  name: 'guide',
  initialState,
  reducers: {
    addGuide: (state, action: PayloadAction<Guide>) => {
      state.guides.push(action.payload);
    },
    updateGuide: (state, action: PayloadAction<Guide>) => {
      const index = state.guides.findIndex(guide => guide.guideNumber === action.payload.guideNumber);
      if (index !== -1) {
        state.guides[index] = action.payload;
      }
    },
    
    updateGuideStatus: (state, action: PayloadAction<{ guideNumber: string; newStatusValue: string }>) => {
      const statusMap: { [key: string]: string } = {
        "1": "Pendiente",
        "2": "En tránsito",
        "3": "Entregado"
      };
      
      const guide = state.guides.find(g => g.guideNumber === action.payload.guideNumber);
      if (guide) {
        guide.status = statusMap[action.payload.newStatusValue];
        guide.statusValue = action.payload.newStatusValue;
      }
    },
  },
});

export const { addGuide, updateGuide, updateGuideStatus } = guideSlice.actions;
export default guideSlice.reducer;