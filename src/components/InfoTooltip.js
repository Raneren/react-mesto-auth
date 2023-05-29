function InfoTooltip(props) {
  return (
    <div className={`popup popup_type_info-tooltip ${props.isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <div className="popup__info-tooltip">
          <div
            className="popup__info-image"
            style={{ backgroundImage: `url(.${props.onValue.image})`}}
          ></div>

          <h2 className="popup__info-title">{props.onValue.text}</h2>
        </div>
        <button
          type="button"
          className="button button_type_close"
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}
export default InfoTooltip;
