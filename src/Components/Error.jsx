
import { useRouteError } from 'react-router-dom';

const Error = () => {
const err = useRouteError();
console.log(err);
  return (
    <div>
      <h1>error page</h1>
      <h3>{err.status}: {err.status.text}</h3>
    </div>
  );
}

export default Error;
