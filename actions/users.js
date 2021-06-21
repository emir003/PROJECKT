import Reg, { registration } from '../Pages/Registration'



export const Reg = async (userName, password, firstName, lastName) => {
  let Reg = (e) => {

    e.preventDefault();

    let request = {
      method: "PUT",
      body: JSON.stringify(userName),
    };

    fetch("https://azizdavletov.pythonanywhere.com/user/register/")
      .then((r) => r.json())
      .then((data) => console.log(data));

      e.preventDefault();

      let request = {
        method: "PUT",
        body: JSON.stringify(password),
      };
  
      fetch("https://azizdavletov.pythonanywhere.com/user/register/")
        .then((r) => r.json())
        .then((data) => console.log(data));

       
        e.preventDefault();

        let request = {
          method: "PUT",
          body: JSON.stringify(firstName),
        };
    
        fetch("https://azizdavletov.pythonanywhere.com/user/register/")
          .then((r) => r.json())
          .then((data) => console.log(data));

          e.preventDefault();

          let request = {
            method: "PUT",
            body: JSON.stringify(lastName),
          };
      
          fetch("https://azizdavletov.pythonanywhere.com/user/register/")
            .then((r) => r.json())
            .then((data) => console.log(data));
  };

};
