import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import GuideList from './Components/GuideList';
import './styles/app.css'
import GuideRegister from './Components/GuideRegister';
import GuideState from './Components/GuideState';

function App() {
  const [guides, setGuides] = useState([
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
  ]);

  const addGuide = (newGuide) => {
    setGuides([...guides, newGuide]);
  };

  const updateGuideStatus = (guideNumber, newStatusValue) => {
    const statusMap = {
      "1": "Pendiente",
      "2": "En tránsito",
      "3": "Entregado"
    };

    setGuides(guides.map(guide => 
      guide.guideNumber === guideNumber 
        ? { ...guide, status: statusMap[newStatusValue], statusValue: newStatusValue }
        : guide
    ));
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<GuideList guides={guides} onUpdateStatus={updateGuideStatus} />} />  
        <Route path="/guidelist" element={<GuideList guides={guides} onUpdateStatus={updateGuideStatus} />} />
        <Route path='/registerguide' element={<GuideRegister addGuide={addGuide} />} />
        <Route path='/guidestatus' element={<GuideState guides={guides} />} />
      </Routes>
    </>
  );
}

export default App;
