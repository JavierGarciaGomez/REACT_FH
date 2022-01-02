// 314, 315 eventModal Content, 316 formState, 317 validaciones de form, 322
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import DateTimePicker from "react-datetime-picker";
import moment from "moment";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import { uiCloseModal } from "../../actions/uiActions";
import {
  eventAddNew,
  eventClearActiveEvent,
  eventUpdate,
} from "../../actions/eventActions";

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

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

// 315
const initialstartDate = moment().minutes(0).seconds(0).add(1, "hours");
const initialendDate = moment().minutes(0).seconds(0).add(2, "hours");

// 322
const initEvent = {
  title: "Evento",
  notes: "",
  start: initialstartDate.toDate(),
  end: initialendDate.toDate(),
};

export const CalendarModal = () => {
  // 319
  const { modalOpen } = useSelector((state) => state.ui);
  const { activeEvent } = useSelector((state) => state.calendar);
  const dispatch = useDispatch();
  //   315
  const [startDate, setstartDate] = useState(initialstartDate.toDate());
  const [endDate, setendDate] = useState(initialendDate.toDate());
  //   317
  const [validTitle, setvalidTitle] = useState(true);

  //   316
  const [formValues, setformValues] = useState(initEvent);
  const { notes, title, start, end } = formValues;
  // 322
  useEffect(() => {
    if (activeEvent) {
      setformValues(activeEvent);
    } else {
      setformValues(initEvent);
    }
    console.log("CALENDAR MODAL form values", formValues);
  }, [activeEvent, setformValues]);

  //   const [isOpen, setisOpen] = useState(true);
  //   todo
  const closeModal = () => {
    dispatch(uiCloseModal());
    // setisOpen(false);
    // console.log("closing modal");

    // 322
    dispatch(eventClearActiveEvent());
    setformValues(initEvent);
  };

  const handleFormChange = ({ target }) => {
    setformValues({ ...formValues, [target.name]: target.value });
  };

  //   315
  const handleStartDateChange = (e) => {
    setstartDate(e);
    // 316
    setformValues({ ...formValues, start: e });
  };

  //   316
  const handleEndDateChange = (e) => {
    console.log("calendar modal, handleEndDateChange");
    setendDate(e);
    setformValues({ ...formValues, end: e });
  };
  //   316, 317
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const momentStart = moment(start);
    const momentEnd = moment(end);
    if (momentStart.isSameOrAfter(momentEnd)) {
      return Swal.fire(
        "Error",
        "la fecha final debe ser posterior a la de inicio",
        "error"
      );
    }
    if (title.trim().length < 2) {
      setvalidTitle(false);
    }

    if (activeEvent) {
      dispatch(eventUpdate(formValues));
    } else {
      const newEvent = {
        ...formValues,
        id: new Date().getTime(),
        user: { _id: "123", name: "JGG" },
      };

      dispatch(eventAddNew(newEvent));
    }
    closeModal();
    setvalidTitle(true);

    console.log("calendar modal: form values", formValues);
  };

  return (
    <Modal
      isOpen={modalOpen}
      //   onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={300}
      className="modal"
      overlayClassName="modal-fondo"
    >
      {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}

      <h1> {activeEvent ? "Editar evento" : "Nuevo evento"} </h1>
      <hr />
      <form className="container" onSubmit={handleSubmitForm}>
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
            onChange={handleFormChange}
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
            onChange={handleFormChange}
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
