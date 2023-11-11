import React, { useState } from "react";
import Logo from "../data/logo.png";
import Loader from "../data/loader.gif";
import validator from "validator";

import GoogleTrans from "../components/GoogleTrans";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faUser,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";

// import { useNavigate } from "react-router-dom";

const Signup = () => {
  // const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    firstPassword: "",
    secondPassword: "",
  });
  const [plan, setPlan] = useState("");
  const [country, setCountry] = useState("");
  const [load, setLoad] = useState(false);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [type1, setType1] = useState(false);
  const [type2, setType2] = useState(false);
  const [message, setMessage] = useState("");
  const [err, setErr] = useState("");
  const [shows, setShows] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("strong!");
    } else {
      setErrorMessage("weak!");
    }
  };

  const handlePassword = () => {
    if (password.firstPassword !== password.secondPassword) {
      setShow2(true);
      return;
    } else {
      setShow2(false);
    }
  };

  const handleSubmit = () => {
    if (password.firstPassword !== password.secondPassword) {
      setShow2(!show2);
      return;
    } else if (
      username === "" &&
      email === "" &&
      plan === "" &&
      country === ""
    ) {
      setShows(!shows);
    } else {
      setLoad(!load);
      fetch("https://coherent-alike-patient.glitch.me/user/signup", {
        method: "POST",
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
          investmentPlan: plan,
          country: country,
        }),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => {
          setLoad(!load);
          return response.json();
        })
        .then((res) => {
          console.log(res.error);
          if (res.error === "error") {
            setErr(res.message);
            setLoad(false);
          } else {
            setMessage(res.message);
            setUsername("");
            setEmail("");
            setPassword({ firstPassword: "", secondPassword: "" });
            setPlan("");
            setCountry("");
            setLoad(!load);
            setShow(!show);
          }
        })
        // .then(() => {
        //   setUsername("");
        //   setEmail("");
        //   setPassword("");
        //   setConpassword("");
        //   setPlan("");
        //   setCountry("");
        //   setLoad(!load);
        //   setShow(!show);
        // })
        .catch((err) => console.log(err));
    }
  };

  return (
    <section className="signup">
      <div className="signup-img"></div>
      <div className="sign">
        <a className="navbar-brand" href="/" style={{ margin: "0px" }}>
          <img
            src={Logo}
            alt="britishfx.org"
            width={70}
            style={{ margin: "0px" }}
            className="logoss"
          />
          <span
            style={{
              color: "#1F51FF",
              fontWeight: "bolder",
              fontSize: "35px",
              textShadow: "2px 0px 2px black",
            }}
          >
            British
          </span>
          <span
            style={{
              color: "#fff",
              fontWeight: "bolder",
              fontSize: "35px",
              textShadow: "2px 4px 4px #1F51FF",
            }}
          >
            FX
          </span>
        </a>
        <GoogleTrans />
        <div>
          <p style={{ fontSize: "1.5rem", margin: "0px" }}>
            Create a free account
          </p>
          <p style={{ fontSize: "0.8rem", margin: "0px" }}>
            Already have an account? <a href="/login">Login here</a>
          </p>
        </div>
        {show ? (
          <p style={{ padding: "2rem" }}>{message}</p>
        ) : (
          <div>
            {load ? (
              <div className="loader">
                <img src={Loader} alt="loader" />
              </div>
            ) : (
              <div className="fom">
                <InputGroup>
                  {!shows ? (
                    ""
                  ) : (
                    <i
                      style={{
                        textAlign: "start",
                        fontSize: "small",
                        color: "red",
                      }}
                    >
                      Please make sure that all fields are completely filled!
                    </i>
                  )}
                </InputGroup>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <InputGroup.Text id="basic-addon1">
                    <FontAwesomeIcon icon={faUser} />
                  </InputGroup.Text>
                </InputGroup>
                <InputGroup>
                  <i
                    style={{
                      textAlign: "start",
                      fontSize: "small",
                      color: "red",
                    }}
                  >
                    {err}
                  </i>
                </InputGroup>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Email"
                    aria-label="Email"
                    aria-describedby="basic-addon1"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setErr("")}
                    required
                  />
                  <InputGroup.Text id="basic-addon1">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </InputGroup.Text>
                </InputGroup>
                <InputGroup>
                  {errorMessage === "" ? null : (
                    <i
                      style={{
                        fontWeight: "bold",
                        color: errorMessage === "strong!" ? "green" : "red",
                        fontSize: "x-small",
                      }}
                    >
                      {errorMessage}
                    </i>
                  )}
                </InputGroup>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                    type={type1 ? "text" : "password"}
                    value={password.firstPassword}
                    onChange={(e) => {
                      setPassword({
                        ...password,
                        firstPassword: e.target.value,
                      });
                      validate(e.target.value);
                    }}
                  />
                  <InputGroup.Text
                    id="basic-addon1"
                    onClick={() => setType1(!type1)}
                    style={{ cursor: "pointer" }}
                  >
                    <FontAwesomeIcon icon={faEye} />
                  </InputGroup.Text>
                  <InputGroup.Text id="basic-addon1">
                    <FontAwesomeIcon icon={faLock} />
                  </InputGroup.Text>
                </InputGroup>

                <InputGroup>
                  {show2 ? (
                    <i
                      style={{
                        textAlign: "start",
                        fontSize: "x-small",
                        color: "red",
                      }}
                    >
                      Passwords don't match
                    </i>
                  ) : (
                    ""
                  )}
                </InputGroup>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Confirm Password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                    type={type2 ? "text" : "password"}
                    value={password.secondPassword}
                    onChange={(e) => {
                      setPassword({
                        ...password,
                        secondPassword: e.target.value,
                      });
                    }}
                    onBlur={handlePassword}
                  />
                  <InputGroup.Text
                    id="basic-addon1"
                    onClick={() => setType2(!type2)}
                    style={{ cursor: "pointer" }}
                  >
                    <FontAwesomeIcon icon={faEye} />
                  </InputGroup.Text>
                  <InputGroup.Text id="basic-addon1">
                    <FontAwesomeIcon icon={faLock} />
                  </InputGroup.Text>
                </InputGroup>

                <InputGroup className="mb-3">
                  <Form.Select
                    aria-label="Default select example"
                    value={plan}
                    onChange={(e) => setPlan(e.target.value)}
                  >
                    <option>Investment Plan</option>
                    <option value="bronze">Bronze (10% weekly ROI)</option>
                    <option value="silver">Silver (15% weekly ROI)</option>
                    <option value="gold">Gold (20% weekly ROI)</option>
                  </Form.Select>
                </InputGroup>
                <InputGroup className="mb-3">
                  <Form.Select
                    aria-label="Default select example"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option>Select Country</option>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Aland Islands">Aland Islands</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                    <option value="American Samoa">American Samoa</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="Anguilla">Anguilla</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="Antigua and Barbuda">
                      Antigua and Barbuda
                    </option>
                    <option value="Argentina">Argentina</option>
                    <option value="Armenia">Armenia</option>
                    <option value="Aruba">Aruba</option>
                    <option value="AAustraliaU">Australia</option>
                    <option value="Austria">Austria</option>
                    <option value="Azerbaijan">Azerbaijan</option>
                    <option value="Bahamas">Bahamas</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Barbados">Barbados</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Belize">Belize</option>
                    <option value="Benin">Benin</option>
                    <option value="Bermuda">Bermuda</option>
                    <option value="Bhutan">Bhutan</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Bonaire, Sint Eustatius and Saba">
                      Bonaire, Sint Eustatius and Saba
                    </option>
                    <option value="Bosnia and Herzegovina">
                      Bosnia and Herzegovina
                    </option>
                    <option value="Botswana">Botswana</option>
                    <option value="Bouvet Island">Bouvet Island</option>
                    <option value="Brazil">Brazil</option>
                    <option value="British Indian Ocean Territory">
                      British Indian Ocean Territory
                    </option>
                    <option value="Brunei Darussalam">Brunei Darussalam</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="Burkina Faso">Burkina Faso</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Cambodia">Cambodia</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Canada">Canada</option>
                    <option value="Cape Verde">Cape Verde</option>
                    <option value="Cayman Islands">Cayman Islands</option>
                    <option value="Central African Republic">
                      Central African Republic
                    </option>
                    <option value="Chad">Chad</option>
                    <option value="Chile">Chile</option>
                    <option value="China">China</option>
                    <option value="Christmas Island">Christmas Island</option>
                    <option value="Cocos (Keeling) Islands">
                      Cocos (Keeling) Islands
                    </option>
                    <option value="Colombia">Colombia</option>
                    <option value="Comoros">Comoros</option>
                    <option value="Congo">Congo</option>
                    <option value="Congo, Democratic Republic of the Congo">
                      Congo, Democratic Republic of the Congo
                    </option>
                    <option value="Cook Islands">Cook Islands</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Cote D'Ivoire">Cote D'Ivoire</option>
                    <option value="Croatia">Croatia</option>
                    <option value="Cuba">Cuba</option>
                    <option value="Curacao">Curacao</option>
                    <option value="Cyprus">Cyprus</option>
                    <option value="Czech Republic">Czech Republic</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Djibouti">Djibouti</option>
                    <option value="Dominica">Dominica</option>
                    <option value="Dominican Republic">
                      Dominican Republic
                    </option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Egypt">Egypt</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                    <option value="Eritrea">Eritrea</option>
                    <option value="Estonia">Estonia</option>
                    <option value="Ethiopia">Ethiopia</option>
                    <option value="Falkland Islands (Malvinas)">
                      Falkland Islands (Malvinas)
                    </option>
                    <option value="Faroe Islands">Faroe Islands</option>
                    <option value="Fiji">Fiji</option>
                    <option value="Finland">Finland</option>
                    <option value="France">France</option>
                    <option value="French Guiana">French Guiana</option>
                    <option value="French Polynesia">French Polynesia</option>
                    <option value="French Southern Territories">
                      French Southern Territories
                    </option>
                    <option value="Gabon">Gabon</option>
                    <option value="Gambia">Gambia</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Germany">Germany</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Gibraltar">Gibraltar</option>
                    <option value="Greece">Greece</option>
                    <option value="Greenland">Greenland</option>
                    <option value="Grenada">Grenada</option>
                    <option value="Guadeloupe">Guadeloupe</option>
                    <option value="Guam">Guam</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Guernsey">Guernsey</option>
                    <option value="Guinea">Guinea</option>
                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                    <option value="Guyana">Guyana</option>
                    <option value="Haiti">Haiti</option>
                    <option value="Heard Island and Mcdonald Islands">
                      Heard Island and Mcdonald Islands
                    </option>
                    <option value="Holy See (Vatican City State)">
                      Holy See (Vatican City State)
                    </option>
                    <option value="HHondurasN">Honduras</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Hungary">Hungary</option>
                    <option value="IIcelandS">Iceland</option>
                    <option value="India">India</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Iran, Islamic Republic of">
                      Iran, Islamic Republic of
                    </option>
                    <option value="Iraq">Iraq</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Isle of Man">Isle of Man</option>
                    <option value="Israel">Israel</option>
                    <option value="IItalyT">Italy</option>
                    <option value="Jamaica">Jamaica</option>
                    <option value="Japan">Japan</option>
                    <option value="Jersey">Jersey</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Kazakhstan">Kazakhstan</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Kiribati">Kiribati</option>
                    <option value="Korea, Democratic People's Republic of">
                      Korea, Democratic People's Republic of
                    </option>
                    <option value="Korea, Republic of">
                      Korea, Republic of
                    </option>
                    <option value="Kosovo">Kosovo</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                    <option value="Lao People's Democratic Republic">
                      Lao People's Democratic Republic
                    </option>
                    <option value="Latvia">Latvia</option>
                    <option value="Lebanon">Lebanon</option>
                    <option value="Lesotho">Lesotho</option>
                    <option value="Liberia">Liberia</option>
                    <option value="Libyan Arab Jamahiriya">
                      Libyan Arab Jamahiriya
                    </option>
                    <option value="Liechtenstein">Liechtenstein</option>
                    <option value="Lithuania">Lithuania</option>
                    <option value="Luxembourg">Luxembourg</option>
                    <option value="Macao">Macao</option>
                    <option value="Macedonia, the Former Yugoslav Republic of">
                      Macedonia, the Former Yugoslav Republic of
                    </option>
                    <option value="Madagascar">Madagascar</option>
                    <option value="Malawi">Malawi</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Mali">Mali</option>
                    <option value="Malta">Malta</option>
                    <option value="Marshall Islands">Marshall Islands</option>
                    <option value="Martinique">Martinique</option>
                    <option value="Mauritania">Mauritania</option>
                    <option value="Mauritius">Mauritius</option>
                    <option value="Mayotte">Mayotte</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Micronesia, Federated States of">
                      Micronesia, Federated States of
                    </option>
                    <option value="Moldova, Republic of">
                      Moldova, Republic of
                    </option>
                    <option value="Monaco">Monaco</option>
                    <option value="Mongolia">Mongolia</option>
                    <option value="Montenegro">Montenegro</option>
                    <option value="Montserrat">Montserrat</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Mozambique">Mozambique</option>
                    <option value="Myanmar">Myanmar</option>
                    <option value="Namibia">Namibia</option>
                    <option value="Nauru">Nauru</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="Netherlands Antilles">
                      Netherlands Antilles
                    </option>
                    <option value="New Caledonia">New Caledonia</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Nicaragua">Nicaragua</option>
                    <option value="Niger">Niger</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Niue">Niue</option>
                    <option value="Norfolk Island">Norfolk Island</option>
                    <option value="Northern Mariana Islands">
                      Northern Mariana Islands
                    </option>
                    <option value="Norway">Norway</option>
                    <option value="Oman">Oman</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Palau">Palau</option>
                    <option value="Palestinian Territory, Occupied">
                      Palestinian Territory, Occupied
                    </option>
                    <option value="Panama">Panama</option>
                    <option value="PG">Papua New Guinea</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Peru">Peru</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Pitcairn">Pitcairn</option>
                    <option value="Poland">Poland</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Puerto Rico">Puerto Rico</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Reunion">Reunion</option>
                    <option value="Romania">Romania</option>
                    <option value="Russian Federation">
                      Russian Federation
                    </option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Saint Barthelemy">Saint Barthelemy</option>
                    <option value="Saint Helena">Saint Helena</option>
                    <option value="Saint Kitts and Nevis">
                      Saint Kitts and Nevis
                    </option>
                    <option value="Saint Lucia">Saint Lucia</option>
                    <option value="Saint Martin">Saint Martin</option>
                    <option value="Saint Pierre and Miquelon">
                      Saint Pierre and Miquelon
                    </option>
                    <option value="Saint Vincent and the Grenadines">
                      Saint Vincent and the Grenadines
                    </option>
                    <option value="Samoa">Samoa</option>
                    <option value="San Marino">San Marino</option>
                    <option value="Sao Tome and Principe">
                      Sao Tome and Principe
                    </option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Serbia">Serbia</option>
                    <option value="Serbia and Montenegro">
                      Serbia and Montenegro
                    </option>
                    <option value="Seychelles">Seychelles</option>
                    <option value="Sierra Leone">Sierra Leone</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Sint Maarten">Sint Maarten</option>
                    <option value="Slovakia">Slovakia</option>
                    <option value="Slovenia">Slovenia</option>
                    <option value="Solomon Islands">Solomon Islands</option>
                    <option value="Somalia">Somalia</option>
                    <option value="South Africa">South Africa</option>
                    <option value="South Georgia and the South Sandwich Islands">
                      South Georgia and the South Sandwich Islands
                    </option>
                    <option value="South Sudan">South Sudan</option>
                    <option value="Spain">Spain</option>
                    <option value="LK">Sri Lanka</option>
                    <option value="Sudan">Sudan</option>
                    <option value="Suriname">Suriname</option>
                    <option value="SJ">Svalbard and Jan Mayen</option>
                    <option value="Swaziland">Swaziland</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Syrian Arab Republic">
                      Syrian Arab Republic
                    </option>
                    <option value="Taiwan, Province of China">
                      Taiwan, Province of China
                    </option>
                    <option value="Tajikistan">Tajikistan</option>
                    <option value="Tanzania, United Republic of">
                      Tanzania, United Republic of
                    </option>
                    <option value="Thailand">Thailand</option>
                    <option value="TL">Timor-Leste</option>
                    <option value="Togo">Togo</option>
                    <option value="Tokelau">Tokelau</option>
                    <option value="Tonga">Tonga</option>
                    <option value="Trinidad and Tobago">
                      Trinidad and Tobago
                    </option>
                    <option value="Tunisia">Tunisia</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Turkmenistan">Turkmenistan</option>
                    <option value="Turks and Caicos Islands">
                      Turks and Caicos Islands
                    </option>
                    <option value="Tuvalu">Tuvalu</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="United Arab Emirates">
                      United Arab Emirates
                    </option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="United States Minor Outlying Islands">
                      United States Minor Outlying Islands
                    </option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Vanuatu">Vanuatu</option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="Viet Nam">Viet Nam</option>
                    <option value="Virgin Islands, British">
                      Virgin Islands, British
                    </option>
                    <option value="Virgin Islands, U.S.">
                      Virgin Islands, U.S.
                    </option>
                    <option value="Wallis and Futuna">Wallis and Futuna</option>
                    <option value="Western Sahara">Western Sahara</option>
                    <option value="Yemen">Yemen</option>
                    <option value="Zambia">Zambia</option>
                    <option value="Zimbabwe">Zimbabwe</option>
                  </Form.Select>
                </InputGroup>
                <button className="sin" onClick={handleSubmit}>
                  Sign up
                </button>
                {/* <div className="or">
              <hr />
              Or
              <hr />
            </div>
            <button className="ssn" onClick={() => navigate("/login")}>
              Login Here
            </button> */}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Signup;
