"use strict";

const container = document.querySelector(".content");
const passwordCreation = document.querySelector("#passGen");
const genPassword = document.querySelector("#password");

const generatePassword = () => {
  let length = 8;
  let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let retval = "";

  for (let i = 0, n = charset.length; i < length; ++i) {
    retval += charset.charAt(Math.floor(Math.random() * n));
  }
  console.log(retval);
  genPassword.innerHTML = retval;
};

passwordCreation.addEventListener("click", generatePassword);
