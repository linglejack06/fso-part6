import { useSelector } from 'react-redux';

function Notification () {
  const message = useSelector((state) => state.message);
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  }
  return (
    <div style={style}>
      {message}
    </div>
  )
}

export default Notification;