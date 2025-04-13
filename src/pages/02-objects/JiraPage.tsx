import { JiraTasks } from '../../components';

export const JiraPage = () => {
  return (
    <>
      <h1>Tasks</h1>
      <p>Zustand object State manager</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <JiraTasks title='Pending' value='pending' />
          
          <JiraTasks title='In progress' value='in-progress' />
          
          <JiraTasks title='Done' value='done' />

      </div>

      



    </>
  );
};