import { createContext, ReactNode, useState } from 'react';
import { Account } from '../model/model';
import { updateAccountInDatabase } from '../service/pokemonService';

interface AccountContextValue {
  account: Account;
  updateAccount: (account: Account) => void;
  currentUser: string;
  isAdmin: boolean;
  setCurrentUser: (user: string) => void;
  setAccount: (account: Account) => void;
}
const example: Account = 
    {
        _id: "60ca0d103e4534633954dd1c",
        adminName: "Ash",
        adminPassword: "123",
        gymName: "Cerulean Gym",
        gymPassword: "123",
        calendarTitle: "Galar League",
        trainers: [
            { name: "Jimmy", pokemons: [] },
            { name: "Billy", pokemons: [] },
            { name: "Samantha", pokemons: [] }
        ]
    };

const defaultValue: AccountContextValue = {
  account: example,
  updateAccount: () => {},
  currentUser: '',
  isAdmin: false,
  setCurrentUser: () => {},
  setAccount: () => {},
};
export const AccountContext = createContext(defaultValue);

export function AccountContextProvider({ children }: { children: ReactNode }) {
  const [account, setAccount] = useState<Account>(example);

  const [currentUser, setCurrentUser] = useState('');
  const isAdmin = currentUser === account.adminName;

  function updateAccount(account: Account) {
    setAccount(account);
    updateAccountInDatabase(account);
  }

  //////////I NEED THIS TO KNOW
  ////Account is now misty
  // useEffect(() => {
  //     readAccountById("60d1ebab35da292b60ff674c").then(accountFromApi => {
  //         setAccount(accountFromApi)
  //         console.log(JSON.stringify(accountFromApi, null, 2));
  //     });
  // }, [])
  //   useEffect(() => {
  //     readAccountByGymName("Northern").then(accountFromApi => {
  //         setAccount(accountFromApi)
  //         console.log(JSON.stringify(accountFromApi, null, 2));
  //     });
  // }, [])

  return (
    <AccountContext.Provider
      value={{
        account,
        updateAccount,
        currentUser,
        isAdmin,
        setCurrentUser,
        setAccount,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}
