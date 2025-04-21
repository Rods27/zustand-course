import { useEffect, useState } from 'react';
import { api } from 'src/api';

export const RequestInfo = () => {
  const [info, setInfo] = useState<unknown>();

  useEffect(() => {
    api
      .get('/auth/private')
      .then((r) => setInfo(r.data))
      .catch(() => setInfo('Error'));
  }, []);

  return (
    <>
      <h2>Information</h2>
      <pre className="w-full overflow-auto">
        <span>{JSON.stringify(info, null, 2)}</span>
      </pre>
    </>
  );
};
