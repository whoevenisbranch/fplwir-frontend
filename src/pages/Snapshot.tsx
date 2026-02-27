import { useParams } from "react-router-dom";


const Snapshot = () =>  {

  const {id} = useParams()

  return (
    <>
      <div className="flex flex-1 items-center justify-center text-center">
        <p>Not implemented: {id}</p>
      </div>
    </>
  );
}

export default Snapshot;