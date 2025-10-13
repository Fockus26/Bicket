import { useState } from "react";
import Form from "./SignUp/Form";

function SignUp(props) {
  const { setIsLogin } = props;

  const [showComponent, setShowComponent] = useState({
    main: false,
    specific: false,
    temporalMessage: false,
  });

  const [step, setStep] = useState(0);

  const [counterClass, setCounterClass] = useState("");

  return (
    <main
      id="Authentication"
      className={`counterClass signUp verifiedData${step}`}
    >
      {showComponent.temporalMessage ? (
        <span className="container">Almost There</span>
      ) : showComponent.main || showComponent.specific ? (
        <Form
          showComponent={showComponent}
          setShowComponent={setShowComponent}
          setIsLogin={setIsLogin}
          setCounterClass={setCounterClass}
          setStep={setStep}
        />
      ) : (
        <button
          className={"container " + counterClass}
          onClick={() =>
            !counterClass.length &&
            setShowComponent((prev) => ({ ...prev, main: true }))
          }
        >
          {counterClass.length ? (
            <>
              {counterClass === "loading" && (
                <i className="fa-solid fa-circle" />
              )}
              <i
                className={
                  "fa-solid fa-" +
                  (counterClass === "ready" ? "check" : "circle")
                }
              />
              {counterClass === "loading" && (
                <i className="fa-solid fa-circle" />
              )}
            </>
          ) : (
            <>
              <h1>Sign Up</h1>
              <i className="fa-solid fa-user" />
            </>
          )}
        </button>
      )}
    </main>
  );
}

export default SignUp;
