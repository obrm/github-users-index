
import { useAlertGlobalContext } from '../../context/alert/AlertContext';

const Alert = () => {
  const { alert } = useAlertGlobalContext();

  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle">
          <span> {alert.message}</span>
        </i>
      </div>
    )
  );
};

export default Alert;
