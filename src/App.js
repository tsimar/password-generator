
import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { selectItemsPassword } from "./components/selectItemsPassword";
import { typePassword } from "./components/typePassword";
import { checkPassword } from "./components/checkPassword";
import { progressDifficult } from "./components/progressDifficult";
import { clearProgressColor } from "./components/clearProgressColor";
import "./app.css";

function App() {
  const [lenghtPassword, setLenghtPassword] = useState("4");
  const [password, setPassword] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  
  const [difficultTypePassword, setDifficultTypePassword] = useState({
    uppercase: "",
    lowercase: "",
    numbers: true,
    symbols: "",
  });

  const [progressColor, setProgressColor] = useState({
    first: "color",
    second: "",
    third: "",
    foursth: "",
  });

  const generate = () => {
    let countIncredibling = "";

    let types = typePassword(difficultTypePassword);
  
    let objProgressColor = progressDifficult(types.length, progressColor);
    setProgressColor(objProgressColor);
    let index = 0;
    while (index < parseInt(lenghtPassword)) {
      if (parseInt(lenghtPassword) - index === types.length) {
        countIncredibling += checkPassword(
          types.charAt(0),
          countIncredibling,
          difficultTypePassword
        );
        types = types.substring(1, types.length);
      } else {
        countIncredibling += selectItemsPassword(difficultTypePassword);
      }
      index++;
    }

    setPassword(countIncredibling);
  };

  const handleIncredible = (e) => {
    e.preventDefault();
    let fieldName;
    let fieldValue;
    if (e.target.name === "numbers") {
      fieldName = e.target.name;
      fieldValue = true;
    } else {
      fieldName = e.target.name;
      fieldValue = e.target.checked;
    }

    const newFormData = { ...difficultTypePassword };
    newFormData[fieldName] = fieldValue;

    setDifficultTypePassword(newFormData);
    let clearProgress = clearProgressColor(progressColor);
      setProgressColor(clearProgress);
  };
  const handleRefresh = (e) => {
    generate();
  }

  useEffect(() => {
      
    generate();
  }, [lenghtPassword, difficultTypePassword]);

  return (
    <div className="app">
      <h1 className="title">Password Generator</h1>
      <section className="lenghtPassword">
        <div className="lenghtPassword__div">
          <p className="lenghtPassword__div-character">Character Lengh</p>
          <label className="lenghtPassword__div-lenght-number" htmlFor="volume">
            {lenghtPassword}
          </label>
        </div>
        <input
          className="lenghtPassword-line-range"
          type="range"
          id="volume"
          name="volume"
          min="4"
          max="16"
          step="1"
          value={lenghtPassword}
          onChange={(e) => setLenghtPassword(e.target.value)}
        />
      </section>
      <section className="type__password">
        <div className="type__password__div">
          <input
            className="type__password__div-checkbox"
            type="checkbox"
            id="uppercase"
            name="uppercase"
            onChange={handleIncredible}
            checked={difficultTypePassword.uppercase}
          />
          <label className="type__password__div-label" htmlFor="uppercase">
            Include Uppercase Letter
          </label>
        </div>
        <div className="type__password__div">
          <input
            className="type__password__div-checkbox"
            type="checkbox"
            id="lowercase"
            name="lowercase"
            onChange={handleIncredible}
            checked={difficultTypePassword.lowercase}
          />
          <label className="type__password__div-label" htmlFor="lowercase">
            Include Lowercase Letter
          </label>
        </div>
        <div className="type__password__div">
          <input
            className="type__password__div-checkbox"
            type="checkbox"
            id="numbers"
            name="numbers"
            onChange={handleIncredible}
            checked={true}
          />
          <label className="type__password__div-label" htmlFor="numbers">
            Include Numbers
          </label>
        </div>
        <div className="type__password__div">
          <input
            className="type__password__div-checkbox"
            type="checkbox"
            id="symbols"
            name="symbols"
            onChange={handleIncredible}
            checked={difficultTypePassword.symbols}
          />
          <label className="type__password__div-label" htmlFor="symbols">
            Include Symbols
          </label>
        </div>
      </section>
      <section className="strenght">
        <div className="strenght__wrapper__text">
          <p className="strenght__wrapper__text-p">Strenght</p>
          <p className="strenght__wrapper__text-low">Low password strength</p>
        </div>

        <div className="strenght__wapper-color">
          <div
            className={"strenght__wapper-color-div " + progressColor.first}
          ></div>
          <div
            className={"strenght__wapper-color-div " + progressColor.second}
          ></div>
          <div
            className={"strenght__wapper-color-div " + progressColor.third}
          ></div>
          <div
            className={"strenght__wapper-color-div " + progressColor.foursth}
          ></div>
        </div>
      </section>
      <section className="created-password">
        <label className="created-password__password">{password}</label>
        <button
          className="created-password__btn-refresh"
          onClick={(e) => handleRefresh(e)}
        >
          <ion-icon name="refresh"></ion-icon>
        </button>
      </section>
      <CopyToClipboard
        text={password}
        onCopy={() => {
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, 1000);
        }}
      >
        <button className="btn" >
          <ion-icon name="copy-outline"></ion-icon>Copy Password
        </button>
      </CopyToClipboard>
    </div>
  );
}

export default App;
