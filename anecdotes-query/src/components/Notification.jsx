import { useNotificationValue } from '../notificationContext';

function Notification () {
  const notification = useNotificationValue();
  if (notification === '') {
    return null;
  }
  return (
    <div className='notif-container'>
      {notification}
    </div>
  )
}

export default Notification;