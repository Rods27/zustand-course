import { useBearStore } from '../../stores';
import { WhiteCard } from '../../components';
import { useShallow } from 'zustand/shallow';

const BlackBears = () => {
  const increaseBears = useBearStore((state) => state.increaseBears);
  const blackBears = useBearStore((state) => state.blackBears);

  return (
    <WhiteCard centered>
      <h2>Black Bears</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={() => increaseBears(1, 'blackBears')}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10"> {blackBears} </span>
        <button onClick={() => increaseBears(-1, 'blackBears')}>-1</button>
      </div>
    </WhiteCard>
  );
};

const PolarBears = () => {
  const increaseBears = useBearStore((state) => state.increaseBears);
  const polarBears = useBearStore((state) => state.polarBears);
  return (
    <WhiteCard centered>
      <h2>Polar Bears</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={() => increaseBears(1, 'polarBears')}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10"> {polarBears} </span>
        <button onClick={() => increaseBears(-1, 'polarBears')}>-1</button>
      </div>
    </WhiteCard>
  );
};

const PandaBears = () => {
  const increaseBears = useBearStore((state) => state.increaseBears);
  const pandaBears = useBearStore((state) => state.pandaBears);
  return (
    <WhiteCard centered>
      <h2>Pandas</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={() => increaseBears(1, 'pandaBears')}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10"> {pandaBears} </span>
        <button onClick={() => increaseBears(-1, 'pandaBears')}>-1</button>
      </div>
    </WhiteCard>
  );
};

const TestRender = () => {
  const doNothing = useBearStore((state) => state.doNothing);
  const bears = useBearStore(useShallow((state) => state.bears));
  const addBears = useBearStore(useShallow((state) => state.addBears));
  const clearBears = useBearStore(useShallow((state) => state.clearBears));

  return (
    <WhiteCard centered>
      <h2>Test useSwallow</h2>
      <h3 className="my-3 font-medium"> Test if the component render when the state is the same</h3>

      <button onClick={() => addBears()}>Add a Bear</button>
      <button onClick={() => doNothing()}>Do Nothing</button>
      <button onClick={() => clearBears()}>Clear Bears</button>

      <pre className="w-full text-left">{JSON.stringify(bears, null, 2)}</pre>
    </WhiteCard>
  );
};

export const BearPage = () => {
  return (
    <>
      <h1>Bears count</h1>
      <p>Simple status management of Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <BlackBears />

        <PolarBears />

        <PandaBears />

        <TestRender />
      </div>
    </>
  );
};
