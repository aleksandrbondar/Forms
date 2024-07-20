import './styles/GlobalStyles.css';


import RegistrationForm from './components/RegistrationForm';

const App = () => {
  return (
    <>
      <div className='container'>
        <div className="row">
          <div className="col-6 my-5 mx-auto rounded shadow bg-gray-100">
            <h1 className='my-5 text-center text-3xl'>Formik and Yup</h1>
            <RegistrationForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default App
