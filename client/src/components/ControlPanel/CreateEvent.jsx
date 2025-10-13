import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateEvent() {
  const navigate = useNavigate();

  // const [ data, setData ] = useState([
  //   {
  //     page: { value: '', isVerified: false },
  //     generalEvent: { value: '', isVerified: false },
  //     specificEvent: { value: '', isVerified: false },
  //     isMultipleate: { value: '', isVerified: false },
  //     generalDateTime: {
  //       date: { value: '', isVerified: false },
  //       time: { value: '', isVerified: false }
  //     },
  //     specificDateTime: {
  //       date: { value: '', isVerified: false },
  //       time: { value: '', isVerified: false }
  //     },
  //     tickets: [
  //       {
  //         section: { value: '', isVerified: false },
  //         amount: { value: '', isVerified: false },
  //         type: { value: '', isVerified: false }
  //       },
  //     ]
  //   },
  // ])

  const [isAllVerified, setIsAllVerified] = useState(false);

  const verifyData = (key, value) => {
    return true;
  };

  // const handleData = (key, value) => {
  //   const isVerified = verifyData(key, value)

  //   setData(prev => {
  //       const newSpecificData = {
  //           ...prev.specific,
  //           key: { value, isVerified }
  //       }

  //       const amountVerified = Object.values(newSpecificData).filter(item => item.isVerified).length

  //       setIsAllVerified(Object.keys(data).length === amountVerified)

  //       return { ...prev, specific: newSpecificData }
  //   });
  // }

  const sendEventData = (e) => {
    e.preventDefault();
    isAllVerified
      ? navigate("/control-panel/dashboard")
      : console.error("No todos los datos estan listos");
  };

  const [data, setData] = useState({
    page: "",
    eventGeneral: "",
    eventSpecific: "",
    isMultipleDate: false,
    dateGeneral: "",
    dateSpecific: "",
    timeGeneral: "",
    timeSpecific: "",
  });

  const elementRef = {
    eventGeneral: useRef(null),
    eventSpecific: useRef(null),
  };

  const handleData = (key, value) => {
    setData((prev) => ({ ...prev, [key]: value }));

    const ref = elementRef[key];

    if (ref) {
      const textarea = ref.current;
      textarea.style.height = "auto"; // Restablece la altura
      textarea.style.height = `${textarea.scrollHeight}px`; // Ajusta a contenido
    }
  };

  const renderTextArea = (key, placeholder) => (
    <textarea
      ref={elementRef[key]}
      rows={1}
      maxLength={key === "page" && 20}
      name={key}
      placeholder={placeholder}
      value={data[key]}
      onChange={(e) => handleData(key, e.target.value)}
      required
    />
  );

  const renderInput = (key, placeholder) => {};

  return (
    <form id="CreateEvent" className="container" onSubmit={sendEventData}>
      <h1>Crear Evento</h1>

      <fieldset>
        {/* Eventos */}
        <ul>
          {/* Evento */}
          <li>
            {/* Datos del evento */}
            <section>
              {/* Nombre pagina */}
              {renderTextArea("page", "Page")}
              {renderTextArea("eventGeneral", "General Event")}
              {renderTextArea("eventSpecific", "Specific Event")}
              <input
                type="checkbox"
                id="MultipleDate"
                name="MultipleDate"
                required
                value={data.isMultipleDate}
                onChange={(e) => handleData("isMultipleDate", e.target.checked)}
              />

              {/* Datetime General */}
              <div id="DateTime">
                <div>
                  {/* Fecha Principal */}
                  <input
                    className={data.dateGeneral.length && "active"}
                    type="date"
                    id="GeneralDate"
                    name="GeneralDate"
                    autoComplete="off"
                    value={data.dateGeneral}
                    onChange={(e) => handleData("dateGeneral", e.target.value)}
                  />
                  {/* Hora Principal */}
                  <input
                    className={data.timeGeneral.length && "active"}
                    type="time"
                    id="GeneralTime"
                    name="GeneralTime"
                    value={data.timeGeneral}
                    onChange={(e) => handleData("timeGeneral", e.target.value)}
                  />
                </div>

                {/* Datetime Especifica */}
                <div className={!data.isMultipleDate && "hide"}>
                  {/* Fecha Secundaria */}
                  <input
                    className={data.dateSpecific.length && "active"}
                    type="date"
                    id="SpecificDate"
                    name="SpecificDate"
                    autoComplete="off"
                    value={data.dateSpecific}
                    onChange={(e) => handleData("dateSpecific", e.target.value)}
                  />
                  {/* Hora Secundaria */}
                  <input
                    className={data.timeSpecific.length && "active"}
                    type="time"
                    id="SpecificTime"
                    name="SpecificTime"
                    value={data.timeSpecific}
                    onChange={(e) => handleData("timeSpecific", e.target.value)}
                  />
                </div>
              </div>
            </section>

            {/* Datos de los tickets */}
            <ul>
              {/* Cada ticket */}
              <li>
                {/* Nombre de la seccion del ticket */}
                <input
                  placeholder="section"
                  type="text"
                  id="TicketName"
                  name="TicketName"
                />
                {/* Cantidad de tickets */}
                <input
                  placeholder="quantity"
                  type="number"
                  id="TicketAmount"
                  name="TicketAmount"
                />
                {/* Tipo de tickets */}
                <select id="TicketType" name="TicketType"></select>
              </li>
            </ul>
          </li>
        </ul>

        <button type="submit" />
      </fieldset>
    </form>
  );
}

export default CreateEvent;
