import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import GuideList from './Components/GuideList';
import './styles/app.css'
import GuideRegister from './Components/GuideRegister';
import GuideState from './Components/GuideState';
import { updateGuideStatus } from './store/guideSlice';

function App() {
  const guides = useSelector(state => state.guide.guides);
  const dispatch = useDispatch();

  const handleUpdateGuideStatus = (guideNumber, newStatusValue) => {
    dispatch(updateGuideStatus({ guideNumber, newStatusValue }));
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<GuideList guides={guides} onUpdateStatus={handleUpdateGuideStatus} />} />  
        <Route path="/guidelist" element={<GuideList guides={guides} onUpdateStatus={handleUpdateGuideStatus} />} />
        <Route path='/registerguide' element={<GuideRegister />} />
        <Route path='/guidestatus' element={<GuideState guides={guides} />} />
      </Routes>
    </>
  );
}

export default App;
