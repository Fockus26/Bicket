import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Main from "./Form/Main";
import Specific from "./Form/Specific";

function Form(props) {
  const {
    showComponent,
    setShowComponent,
    setCounterClass,
    setIsLogin,
    setStep,
  } = props;

  const [data, setData] = useState({
    main: {
      username: { value: "", isVerified: false },
      email: { value: "", isVerified: false },
      password: { value: "", isVerified: false },
    },
    specific: {
      firstName: { value: "", isVerified: false },
      lastName: { value: "", isVerified: false },
      country: { value: "", isVerified: false },
      phone: { value: "", isVerified: false },
      birthday: { value: "", isVerified: false },
      gender: { value: "", isVerified: false },
    },
  });

  useEffect(() => {
    const amountVerified = Object.keys(data).flatMap((key) =>
      Object.values(data[key]).filter((item) => item.isVerified)
    ).length;

    setStep(amountVerified);
  }, [data, setStep]);

  const navigate = useNavigate();
  const sendData = () => {
    setCounterClass("loading");

    setTimeout(() => {
      setCounterClass("ready");

      setTimeout(() => {
        setIsLogin(true);
        navigate("/");
      }, 2000);
    }, 6000);
  };

  return (
    <form
      className={"container " + (showComponent.specific ? "specificData" : "")}
    >
      {showComponent.main ? (
        <Main
          mainData={data.main}
          setData={setData}
          setShowComponent={setShowComponent}
        />
      ) : (
        showComponent.specific && (
          <Specific
            specificData={data.specific}
            setData={setData}
            sendData={sendData}
          />
        )
      )}
    </form>
  );
}

export default Form;
