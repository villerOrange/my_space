import './App.css';
import Copyright from './components/Copyright/Copyright';
import PersonalCard from './components/PersonalCard/PersonalCard';
import QualiContainer from './components/QualiContainer/QualiContainer';
import users from './data/users';

function App() {
  return (
    <>
      <h1>ЭПИЧНОЕ ДЗ</h1>
      {users.map((el) => <PersonalCard
        fullName={el.fullName}
        quali={el.quali}
        about={el.about}
        img={el.img}
      />)}
      <QualiContainer />
      <Copyright />
    </>
  );
}

export default App;
