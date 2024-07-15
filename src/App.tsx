import './styles/GlobalStyles.css';


import RegistrationForm from './components/RegistrationForm';

const App = () => {
  return (
    <>
      <div className='container'>
        <div className="row">
          <div className="col-6">
            <h1 className='my-5'>Formik and Yup</h1>
            <RegistrationForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default App
