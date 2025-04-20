import { usePersonStore } from 'src/stores/person';

export const PersonSesssionStorage = () => {
  const firstName = usePersonStore((state) => state.sessionFirstName);
  const lastName = usePersonStore((state) => state.sessionLastName);
  const setFirstName = usePersonStore((state) => state.setSessionFirstName);
  const setLastName = usePersonStore((state) => state.setSessionLastName);

  return (
    <div className="mx-auto w-full max-w-[550px]">
      <h1>Session Storage</h1>
      <form>
        <div className="-mx-3 flex flex-wrap">
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">First name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">Last name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
        </div>

        <pre className="bg-gray-200 p-5 rounded-[20px]">
          {JSON.stringify(
            {
              firstName: `${firstName}`,
              lastName: `${lastName}`,
            },
            null,
            2,
          )}
        </pre>
      </form>
    </div>
  );
};
