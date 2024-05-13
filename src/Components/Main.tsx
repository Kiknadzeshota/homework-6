import { useState } from "react";
import styled from "styled-components";
import errorr from '../../public/images/icon-error.svg'

export default function Main() {
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [gmail, setGmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [nameError, setNameError] = useState<boolean | string>(false)
  const [lastNameError, setLastNameError] = useState<boolean | string>(false)
  const [gmailError, setGmailError] = useState<boolean | string>(false)
  const [pasError, serPasError] = useState<boolean | string>(false)
  const handeleSublit = (event: any) => {
    event.preventDefault();
    {!name ? setNameError(true) : null} 
    {!lastName ? setLastNameError(true) : null}
    {!gmail ? setGmailError(true) : null}
    {!pass ? serPasError(true) : null}
    setName("");
    setLastName("");
    setGmail("");
    setPass("");
  }
  return (
    <Card>
      <Info>
        <h1>
          Learn to code by <br /> watching others
        </h1>
        <p>
          See how experienced developers solve problems in real-time.
          <br /> Watching scripted tutorials is great, but understanding how
          <br /> developers think is invaluable.
        </p>
      </Info>
      <FormGrupe>
        <h1>
          <span>Try it free 7 days</span> then $20/mo. thereafter
        </h1>
        <form onSubmit={handeleSublit}>
          <div>
            <input
              onChange={(elem) => {
                setName(elem.target.value);
                setNameError('')
              }}
              value={name}
              placeholder="First Name"
            />
            {nameError === true ? <img src={errorr} alt="errorr" /> : null}
          </div>
          <div>
            <input
              onChange={(elem) => {
                setLastName(elem.target.value);
                setLastNameError("")
              }}
              value={lastName}
              placeholder="Last Name"
            />
           {lastNameError ? <img src={errorr} alt="errorr" /> : null} 
          </div>
          <div>
            <input
              onChange={(elem) => {
                setGmail(elem.target.value);
                setGmailError("")
              }}
              value={gmail}
              placeholder="Email Address"
            />
            {gmailError ? <img src={errorr} alt="errorr" /> : null} 
          </div>
          <div>
            <input
              onChange={(elem) => {
                setPass(elem.target.value);
                serPasError("")
              }}
              value={pass}
              placeholder="Password"
            />
           {pasError ? <img src={errorr} alt="errorr" /> : null} 
          </div>
          <button type="submit">
            CLAIM YOUR FREE TRIAL
          </button>
          <p>
            By clicking the button, you are agreeing to our{" "}
            <span>Terms and Services</span>
          </p>
        </form>
      </FormGrupe>
    </Card>
  );
}
const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 45px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    color: white;
    font-size: 50px;
    font-weight: 700;
    line-height: 55px;
    letter-spacing: -0.52px;
  }
  p {
    margin-top: 14px;
    color: #ffffff;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
  }
`;
const FormGrupe = styled.div`
  display: flex;
  flex-direction: column;
  width: 540px;
  h1 {
    background-color: #5e54a4;
    padding: 17px 0;
    text-align: center;
    border-radius: 7px;
    font-size: 15px;
    color: #ffffffb4;
    font-weight: 500;
    margin-bottom: 24px;
    span {
      font-weight: 700;
      color: white;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 7px;
    padding: 40px;
    > div {
      width: 100%;
      position: relative;
      >img{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 21px;
      }
      input {
        width: 100%;
        color: #3d3b48;
        font-size: 14px;
        font-weight: 600;
        outline: none;
        padding: 15px 32px;
        margin: 10px 0;
        border-radius: 5px;
        border: 1px solid #dedede;
        &:focus {
          border: 1px solid#5E54A4;
        }
      }
    }
    button {
      color: white;
      font-size: 15px;
      font-weight: 600;
      outline: none;
      padding: 15px 32px;
      margin: 10px 0;
      border-radius: 5px;
      border: none;
      background-color: #38cc8b;
      cursor: pointer;
      box-shadow: 0px -4px 0px 0px #00000017 inset;
    }
    p {
      font-size: 11px;
      font-weight: 500;
      line-height: 26px;
      color: #bab7d4;
      text-align: center;
      span {
        color: #ff7979;
      }
    }
  }
`;
