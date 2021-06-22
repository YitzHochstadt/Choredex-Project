import { FormEvent, useContext, useState } from 'react';
import { AccountContext } from '../context/auth.context';
import { useHistory } from 'react-router-dom';
import './SignInForm.css';
import sweeping from '../assets/sweeping.png'
function SignInForm() {
  const [adminName, setAdminName] = useState('');
  const [trainerName, setTrainerName] = useState('');
  const [password, setPassword] = useState('');
  const { account, setCurrentUser } = useContext(AccountContext);

  let history = useHistory();

  function handleSubmit(event: FormEvent): void {
    event.preventDefault();
    if (adminName.length !== 0) {
      if (
        account.adminName === adminName &&
        account.adminPassword === password
      ) {
        console.log(
          'Sucess Admin: ' + account.adminName + account.adminPassword
        );
        console.log(account.adminName);
        setCurrentUser(adminName);
        history.push(`/homepage/${account.adminName}`);
      }
    } else {
      for (let trainer of account.trainers) {
        if (trainer.name === trainerName && account.gymPassword === password) {
          console.log('Sucess Trainer: ' + trainer.name + account.gymPassword);
          setCurrentUser(trainerName);
          history.push(`/choredex/${trainer.name}`);
          console.log(account.gymPassword);
        }
        console.log(trainer);
        console.log(trainer.name);
        console.log(trainerName);
        console.log(account.gymPassword);
      }
    }
  }

  return (
    <form className="SignInForm" onSubmit={handleSubmit}>
      {/* <h2>SIGN IN FORM</h2>
      <div className="SignInForm_inputs">
        <label>Admin Name: */}
      <h2 className="Title">SIGN IN FORM</h2>
      <div>
        <label>
          admin name:<br></br>
          <input
            value={adminName}
            onChange={(e) => setAdminName(e.target.value)}
          ></input>
        </label>
        <br></br>
        <label>
          trainer name:<br></br>
          <input
            value={trainerName}
            onChange={(e) => setTrainerName(e.target.value)}
          ></input>
        </label>
        <br></br>
        <label>
          password:<br></br>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
        </label>
        <br></br>
      </div>
      <div>
        <button type="submit">sign in</button>
      </div>
      <img className="sweeping" src={sweeping} alt="minccino sweeping" />
    </form>
  );
}

export default SignInForm;
