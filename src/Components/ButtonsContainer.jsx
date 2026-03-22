import styles from "./ButtonContainer.module.css";
function ButtonsContainer({onButtonClick}) {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttonsContainer}>

      {buttonNames.map((buttonName,index) => (
        <button key={index} className={`${styles.button} ${buttonName === "C" ? styles.buttonC :""}`} onClick={()=>onButtonClick(buttonName)}>{buttonName}</button>
      ))}
    </div>
  );
}

export default ButtonsContainer;
