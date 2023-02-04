








import { useState } from "react";

function Formval() {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    message:""
  });
  const { username, email,message } = formValues;

  const [error, setError] = useState(false);

  const onChangeText = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };




  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !email) {
      setError(true);
      return false;
    }
  // for firebae conection
    const res = await fetch(
      "https://digitalshark-ba3ec-default-rtdb.firebaseio.com/Contact.json",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ formValues }),
      }
    );

    setFormValues({ username: "", email: "",message:"" });
  };





  return (
    <div className="container  mt-5 mb-5">
      <div className="row d-flex align-items-center ">
        <div className="col-md-6 col-12 shadow-lg p-5 mt-5 rounded pe-5 contact ">
          <form onSubmit={(e)=>handleSubmit(e)} autoComplete="off">
            <div className="form-group mb-5  ">
              <input  className="form-control bg-transparent text-white" type="text" name="username" placeholder="Username ....."
                value={username}
                onChange={onChangeText}
              />
              {error && !username && ( <span className="text-danger ms-2"> Please Enter The user Name ....</span>)}
            </div>

            <div className="form-group mb-5">
              <input className="form-control bg-transparent text-white" type="text" name="email" placeholder="Email ....."
                value={email}
                onChange={onChangeText}
              />
          {error && !email && (<span className="text-danger ms-2"> Please Enter your Email ....</span>)}
            </div>


            <div className="form-group mb-5 ">
            <textarea name="message" id="" cols="30" rows="3" className="form-control bg-transparent text-white"
             value={message} onChange={onChangeText} placeholder="message ....."  ></textarea>
             {error && !email && ( <span className="text-danger ms-2">  Please Enter your Message ....</span>)}
            </div>

            <div className="text-center">
              <button className="btn btn-outline-info w-50 mb-4">
                Contact us
              </button>
            </div>
          </form>
        </div>

        <div className="col-md-6 col-12 ps-5">
          <img
            src="./images/customercare.png"
            alt="customercare image"
            className="w-100"
          />
        </div>
      </div>
    </div>
  );
}

export default Formval;