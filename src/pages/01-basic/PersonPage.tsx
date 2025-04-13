import { WhiteCard } from '../../components';



export const PersonPage = () => {
  return (
    <>
      <h1>Person</h1>
      <p>Information that will be shared in another store, Session Storage, and firebase</p>
      <hr />

      <WhiteCard className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                  First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="First Name"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                  Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Last Name"
                  />
                </div>
              </div>
            </div>
  
            <pre className="bg-gray-200 p-5 rounded-[20px]">
              {
                JSON.stringify({
                  firstName: '',
                  lastName: ''
                }, null, 2)
              }
            </pre>
          </form>
        </div>
      </WhiteCard>
    </>
  );
};