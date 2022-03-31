import "./InputCard.css";

export default function InputCard(props) {
  const {
    billAmount,
    setBillAmount,
    numOfPeople,
    setNumOfPeople,
    setTipPercentage,
  } = props;
  const handleClick = (e) => {
    setTipPercentage(parseInt(e.target.id));
  };
  const handlePeopleChange = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || !re.test(e.target.value)) {
      // Don't know how to get previous target value
      // Relying on previous state
      e.target.value = numOfPeople + "";
    }
    setNumOfPeople(e.target.value);
  };
  const handleBillChange = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || !re.test(e.target.value)) {
      // Don't know how to get previous target value
      // Relying on previous state
      e.target.value = billAmount + "";
    }
    setBillAmount(e.target.value);
  };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="input-card">
      <h4 className="bill">Bill</h4>
      <input
        type="text"
        className="bill-input"
        placeholder={formatter.format(0)}
        onChange={handleBillChange}
      />
      <h4 className="select-tip">Select Tip %</h4>
      <div className="tip-selector-box">
        <div className="tip-percentage-box" id={5} onClick={handleClick}>
          5%
        </div>
        <div className="tip-percentage-box" id={10} onClick={handleClick}>
          10%
        </div>
        <div className="tip-percentage-box" id={15} onClick={handleClick}>
          15%
        </div>
        <div className="tip-percentage-box" id={25} onClick={handleClick}>
          25%
        </div>
        <div className="tip-percentage-box" id={50} onClick={handleClick}>
          50%
        </div>
        <div className="tip-percentage-box custom">Custom</div>
      </div>

      <h4 className="people">Number of People</h4>
      <input
        type="text"
        className="number-of-people"
        placeholder="1"
        onChange={handlePeopleChange}
      />
    </div>
  );
}
