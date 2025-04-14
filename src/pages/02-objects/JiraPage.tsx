import { JiraTasks } from '../../components';

export const JiraPage = () => {
  return (
    <>
      <h1>Tasks</h1>
      <p>Zustand object State manager</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 select-none">
        <JiraTasks title="Pending" status="open" />

        <JiraTasks title="In progress" status="in-progress" />

        <JiraTasks title="Done" status="done" />
      </div>
    </>
  );
};
