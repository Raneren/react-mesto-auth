function InfoTooltip(props) {
  return (
    <div className="popup__container">

      <div
        className="popup__image"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>

      <h2 className="popup__title">{props.title}</h2>

      <button
        type="button"
        className="button button_type_close"
        onClick={props.onClose}
      ></button>
    </div>
  );
}
export default InfoTooltip;
