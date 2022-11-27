import { BrowserRouter as Route, Routes, Link} from 'react-router-dom';

import SignUpPage from './Pages/SignUpPage';
import LoginPage from './Pages/LoginPage'; 
import ForgotPasswordPage from './Pages/ForgotPassword';
import VarifyPage from './Pages/VarifyPage';

import Slider from './Components/Slider/Slider';
import { Container } from './Components/Container/Container.style';
import { SliderContainer } from './Components/Slider/Slider.style';


export default function App() {
  const slides = [
    require('./Images/Image.jpg'),
    require('./Images/Image-2.jpg'),
    require('./Images/Image-3.jpg'),
    require('./Images/Image-4.jpg'),
  ];

  return (
    <>
    <Container>
      <div>asdfghjkl,mnjbhgv</div>
      {/* <nav>
        <Link to="/signup">
          SignUp
        </Link>
      </nav> */}
      {/* <Routes>
        <Route exact path="signup" element={ <SignUpPage/> }/>
        <Route path="login" element={ <LoginPage/> } />
        <Route path="forgotpassword" element={ <ForgotPasswordPage/> } />
        <Route path="varify" element={ <VarifyPage/> } />
      </Routes>  */}

      {/* <SliderContainer>
        <Slider slides={slides}/>
      </SliderContainer>  */}
    </Container>
    </>
  );
}