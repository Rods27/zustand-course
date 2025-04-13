import { WhiteCard } from 'src/components/';
import { PersonLocalStorage } from './components/personLocalStorage';
import { PersonSesssionStorage } from './components/personSessionStorage';

export const PersonPage = () => {
  return (
    <>
      <h1>Person</h1>
      <p>Information that will be shared in another store, Session Storage, and firebase</p>
      <hr />
      <WhiteCard className="flex-col items-center justify-center p-12">
        <PersonLocalStorage />
        <PersonSesssionStorage />
      </WhiteCard>
    </>
  );
};
