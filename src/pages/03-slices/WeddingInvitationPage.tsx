import { useWeddingStore } from 'src/stores';
import { WhiteCard } from '../../components';

import { parse } from 'date-fns';

export const WeddingInvitationPage = () => {
  const firstName = useWeddingStore((state) => state.firstName);
  const setFirstName = useWeddingStore((state) => state.setFirstName);

  const lastName = useWeddingStore((state) => state.lastName);
  const setLastName = useWeddingStore((state) => state.setLastName);

  const guestCount = useWeddingStore((state) => state.guestCount);
  const setGuestCount = useWeddingStore((state) => state.setGuestCount);

  const eventDate = useWeddingStore((state) => state.eventDate);
  const setEventDate = useWeddingStore((state) => state.setEventDate);

  const eventTime = useWeddingStore((state) => state.eventTime);
  const setEventTime = useWeddingStore((state) => state.setEventTime);

  const isConfirmed = useWeddingStore((state) => state.isConfirmed);
  const setIsConfirmed = useWeddingStore((state) => state.setIsConfirmed);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const parsedDate = parse(`${eventDate} ${eventTime}`, 'yyyy-MM-dd HH:mm', new Date());

    e.preventDefault();
    console.log({
      firstName,
      lastName,
      guestCount,
      eventDate: parsedDate,
      isConfirmed,
    });
  };

  return (
    <>
      <h1>Wedding guests</h1>
      <p>Zustand store in slices</p>
      <hr />

      <WhiteCard className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form onSubmit={handleSubmit}>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Last name
                  </label>{' '}
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                How many guests?
              </label>
              <input
                type="number"
                name="guestNumber"
                id="guestNumber"
                placeholder="5"
                min="0"
                onChange={(e) => setGuestCount(+e.target.value)}
                value={guestCount}
                className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Wedding date
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    id="eventDate"
                    onChange={(e) => setEventDate(e.target.value)}
                    value={eventDate}
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Wedding time
                  </label>
                  <input
                    type="time"
                    name="eventTime"
                    id="eventTime"
                    onChange={(e) => setEventTime(e.target.value)}
                    value={eventTime}
                  />
                </div>
              </div>
            </div>

            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Will attend?
              </label>
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="is-coming-yes"
                    id="is-coming-yes"
                    className="h-5 w-5"
                    checked={isConfirmed}
                    onChange={() => setIsConfirmed(true)}
                  />
                  <label
                    htmlFor="is-coming-yes"
                    className="pl-3 text-base font-medium text-[#07074D]"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="is-coming-no"
                    id="is-coming-no"
                    className="h-5 w-5"
                    checked={!isConfirmed}
                    onChange={() => setIsConfirmed(false)}
                  />
                  <label
                    htmlFor="is-coming-no"
                    className="pl-3 text-base font-medium text-[#07074D]"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>

            <div>
              <button>Submit</button>
            </div>
          </form>
        </div>
      </WhiteCard>
    </>
  );
};
