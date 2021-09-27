// 307, 308, 309, 310, 315, 316
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import DateTimePicker from "react-datetime-picker";
import moment from "moment";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { uiCloseModal } from "../../actions/ui";
import {
  eventAddNew,
  eventClearActiveEvent,
  eventUpdated,
} from "../../actions/events";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

// 308
const now = moment().minutes(0).seconds(0).add(1, "hours");
const nowPlus1 = now.clone().add(1, "hours");

console.log(moment(now).add(1, "hours"));

// 315
const initEvent = {
  title: "",
  notes: "",
  start: now.toDate(),
  end: nowPlus1.toDate(),
};

export const CalendarModal = () => {
  // 308
  const [startDate, setstartDate] = useState(now.toDate());
  //   308
  const [endDate, setendDate] = useState(nowPlus1.toDate());

  //   308
  const [formValues, setformValues] = useState(initEvent);

  const { notes, title, start, end } = formValues;

  //   310
  const [validTitle, setvalidTitle] = useState(true);

  // 312
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { target } = event;
    setformValues({ ...formValues, [target.name]: target.value });
  };

  // 307, 312, 315
  const closeModal = () => {
    dispatch(uiCloseModal());
    dispatch(eventClearActiveEvent());
    setformValues(initEvent);
    //   TODO: cerrar el modal
    // setisOpen(false);
  };
  //   307
  //   const [isOpen, setisOpen] = useState(true);

  //   308
  const handleStartDateChange = (e) => {
    setstartDate(e);
    setformValues({ ...formValues, start: e });
  };

  //   308
  const handleEndDateChange = (e) => {
    setendDate(e);
    setformValues({ ...formValues, end: e });
  };

  //   309, 310, 316
  const handleSubmit = (e) => {
    e.preventDefault();

    const momentStart = moment(start);
    const momentEnd = moment(end);
    // validación de los moments
    if (momentStart.isSameOrAfter(momentEnd, "hour")) {
      return Swal.fire(
        "Error",
        "La fecha fin debe de ser mayor a al fecha de inicio",
        "error"
      );
    }

    if (title.trim().length < 2) {
      return setvalidTitle(false);
    }

    if (activeEvent) {
      dispatch(eventUpdated(formValues));
    } else {
      dispatch(
        eventAddNew({
          ...formValues,
          id: new Date().getTime(),
          user: {
            _id: "123",
            name: "JGG",
          },
        })
      );
    }

    // TODO: guardar en base de datos

    setvalidTitle(true);
    closeModal();
  };

  // 312
  const { modalOpen } = useSelector((state) => state.ui);

  // 315
  const { activeEvent } = useSelector((state) => state.calendar);

  useEffect(() => {
    if (activeEvent) {
      setformValues(activeEvent);
    } else {
      setformValues(initEvent);
    }
  }, [activeEvent, setformValues]);

  return (
    <Modal
      isOpen={modalOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={200}
      className="modal"
      overlayClassName="modal-fondo"
    >
      <h1> {activeEvent ? "Editar Evento" : "Nuevo evento"} </h1>
      <hr />
      {/* ..., 309 */}
      <form className="container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Fecha y hora inicio</label>
          <DateTimePicker
            onChange={handleStartDateChange}
            value={startDate}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Fecha y hora fin</label>
          <DateTimePicker
            onChange={handleEndDateChange}
            value={endDate}
            className="form-control"
            minDate={startDate}
          />
        </div>

        <hr />
        <div className="form-group">
          <label>Titulo y notas</label>
          <input
            type="text"
            className={`form-control ${!validTitle && "is-invalid"}`}
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={title}
            onChange={handleInputChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Una descripción corta
          </small>
        </div>

        <div className="form-group">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            value={notes}
            onChange={handleInputChange}
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">
            Información adicional
          </small>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};
