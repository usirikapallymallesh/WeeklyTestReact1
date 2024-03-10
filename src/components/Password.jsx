import React from "react";
import "./passwordCardStyle.css";
import { useState } from "react";

const Password = () => {
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    // Implement your logic to generate a random password
    const newPassword = RandomPassword();
    setPassword(newPassword); // Replace this with your actual logic
    if (newPassword != undefined) {
      document.getElementById("inputPassword").value = newPassword;
    }
  };

  let Number = "0123456789";
  let LowerCase = "abcdefghijklmnopqrstuvwxyz";
  let UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let SpecialCharacter = "!@#$%^&*()_+";

  var allCharacters = "";

  function RandomPassword(event) {
    // event.preventDefault();
    // console.log(event);
    let passwordSize = document.getElementById("length").value;
    let passwordLength = parseInt(passwordSize);

    if (passwordLength < 8 || passwordLength > 50) {
      alert("Password must be between 8 and 50 characters");
      return;
    }

    let numberCheckbox = document.getElementById("Number");

    if (numberCheckbox.checked) {
      allCharacters += Number;
    }
    let upperCheckbox = document.getElementById("Upper");

    if (upperCheckbox.checked) {
      allCharacters += UpperCase;
    }

    let lowerCheckbox = document.getElementById("Lower");

    if (lowerCheckbox.checked) {
      allCharacters += LowerCase;
    }

    let specialCheckbox = document.getElementById("Special");

    if (specialCheckbox.checked) {
      allCharacters += SpecialCharacter;
    }

    if (allCharacters.length === 0) {
      alert("please select at least one checkbox");
      return;
    }

    var password = "";
    for (var i = 0; i < passwordLength; i++) {
      password +=
        allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
    // console.log(password);
    // console.log(allCharacters);
    allCharacters = "";

    return password;
  }

  function copyPassword() {
    var copyText = document.getElementById("inputPassword");
    copyText.select();
    document.execCommand("copy");
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  }

  return (
    <>
      <div className="container">
        <div className="inputField">
          <h2>Generate a</h2>
          <h1>Random Password</h1>
          <div>
            <input
              type="text"
              placeholder="Random Password "
              // onChange={changeValue}
              id="inputPassword"
              // value={"Random Password"}
              readOnly
            />
            <i className="fa-solid fa-copy" onClick={copyPassword}></i>
          </div>
          <button onClick={generatePassword}>
            <i className="fa-solid fa-bolt"></i>click
          </button>
        </div>
        <div className="checkboxField">
          <div className="userData">
            <label htmlFor="length">
              Select Password length <b>(**8-50 characters**)</b>
            </label>
            <input type="number" name="" id="length" defaultValue="8" />
          </div>
          <div className="checkBoxData">
            <div>
              <input type="checkbox" name="" id="Number" />
              <label htmlFor="Number">Include Number</label>
            </div>
            <div>
              <input type="checkbox" name="" id="Upper" />
              <label htmlFor="Upper">Include upper case</label>
            </div>
            <div>
              <input type="checkbox" name="" id="Lower" />
              <label htmlFor="Lower">Include lower case</label>
            </div>
            <div>
              <input type="checkbox" name="" id="Special" />
              <label htmlFor="Special">Include Special</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Password;
