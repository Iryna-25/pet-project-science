import SignUpPage from './Pages/SignUpPage';
import Slider from './Components/Slider/Slider';
import { Container } from './Components/Container/Container.style';


export default function App() {
  const slides = [
    require('./Images/Image.jpg'),
    require('./Images/Image-2.jpg'),
    require('./Images/Image-3.jpg'),
    require('./Images/Image-4.jpg'),
  ];

const containerStyles = {
  width: '100%',
  height: '100%',
  margin: '0 auto',
};

  return (
    <Container>
      <SignUpPage/>
      <div style={containerStyles}> 
        <Slider slides={slides}/>
      </div>
      
    </Container>

  );
}