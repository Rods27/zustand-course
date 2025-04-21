import {
  IoAccessibilityOutline,
  IoHeartOutline,
  IoInformationOutline,
  IoListOutline,
  IoLockClosedOutline,
  IoPawOutline,
} from 'react-icons/io5';
import { RequestInfo, WhiteCard } from '../../components';
import {
  useAuthStore,
  useBearStore,
  usePersonStore,
  useTaskStore,
  useWeddingStore,
} from 'src/stores';

export const Dashboard = () => {
  const bearsCount = useBearStore((state) => state.bearCount());
  const personName = usePersonStore((state) => state.firstName);
  const tasksLength = useTaskStore((state) => state.tasks.length);
  const eventDate = useWeddingStore((state) => state.eventDate);
  const eventTime = useWeddingStore((state) => state.eventTime);
  const fullName = useAuthStore((state) => state.user?.fullName || 'No user');

  return (
    <>
      <h1>Dashboard</h1>
      <p>Information about stores of Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <WhiteCard centered>
          <IoPawOutline size={50} className="text-indigo-600" />
          <h2>Bears</h2>
          <p>{bearsCount}</p>
        </WhiteCard>

        <WhiteCard centered>
          <IoAccessibilityOutline size={50} className="text-indigo-600" />
          <h2>Person</h2>
          <p>{personName}</p>
        </WhiteCard>

        <WhiteCard centered>
          <IoListOutline size={50} className="text-indigo-600" />
          <h2>Tasks</h2>
          <p>{tasksLength}</p>
        </WhiteCard>

        <WhiteCard centered>
          <IoHeartOutline size={50} className="text-indigo-600" />
          <h2>Wedding</h2>
          <div className="text-start">
            <p>{`Date: ${eventDate.replaceAll('-', '/')}`}</p>
            <p>Time: {eventTime}</p>
          </div>
        </WhiteCard>

        <WhiteCard centered>
          <IoLockClosedOutline size={50} className="text-indigo-600" />
          <h2>Auth</h2>
          <p>{fullName}</p>
        </WhiteCard>

        <WhiteCard centered className="col-span-3">
          <IoInformationOutline size={50} className="text-indigo-600" />
          <RequestInfo />
        </WhiteCard>
      </div>
    </>
  );
};
