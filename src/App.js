import SignUpPage from './Pages/SignUpPage';
import LoginPage from './Pages/LoginPage'; 
import ForgotPasswordPage from './Pages/ForgotPassword';
import VarifyPage from './Pages/VarifyPage';

import Slider from './Components/Slider/Slider';
import { Container } from './Components/Container/Container.style';
import { SliderContainer } from './Components/Slider/Slider.style';
import { Route, Routes } from 'react-router';

export default function App() {
  const slides = [
    require('./Images/Image.jpg'),
    require('./Images/Image-2.jpg'),
    require('./Images/Image-3.jpg'),
    require('./Images/Image-4.jpg'),
  ];

  return (
    <Container>
      <Routes>
        <Route 
          exact
          path="/signup"
        >
          <SignUpPage/>        
        </Route>
        
        <SliderContainer>
          <Slider slides={slides}/>
        </SliderContainer>
        
        <Route 
          path="/login"
        >
          <LoginPage/>
        </Route>
        
        <Route
          path="/forgotpassword"
        >
          <ForgotPasswordPage/>
        </Route>
        
        <Route 
          path="/varify"
        >
          <VarifyPage/>
        </Route>
      </Routes>
    </Container>
  );
}