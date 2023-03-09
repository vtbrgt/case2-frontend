import Spinner from 'react-bootstrap/Spinner';

function Loading() {
  return (
    <Spinner animation="border" role="status" style={{ margin: '2rem 0' }}>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default Loading;
