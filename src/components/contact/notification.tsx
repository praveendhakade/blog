import { INotification } from "@/types/post";
import ReactDOM from "react-dom";

function Notification({ title, message, status }: INotification) {
  let statusClasses = "";

  if (status === "success") {
    statusClasses = "success";
  }

  if (status === "error") {
    statusClasses = "error";
  }

  const cssClasses = `notification ${statusClasses}`;

  return ReactDOM.createPortal(
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById("notifications") as Element
  );
}

export default Notification;
