import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

export default function Loading() {
  return (
    <div className="h-svh w-svw absolute top-0 bottom-0 flex justify-center items-center text-8xl">
      <FontAwesomeIcon icon={faCircleNotch} spin />
    </div>
  );
}
