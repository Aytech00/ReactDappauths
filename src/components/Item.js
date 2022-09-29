import "./Item.css";

function Item() {
  return (
    <div>
      <header>
        <div className="connect-btn-container">
          <button className="connect-btn">Connect wallet</button>
        </div>
      </header>

      <div className="main-container">
        <div className="inner-container">
          <div className="title-container">
            <h1 className="title">DAPPAUTHES</h1>
            </div>
          <div className="text-container">
            <p>Claim your Airdrop</p>
          </div>

          <div className="main-button-wrap-1">

            <div className="inner-button-wrap-1">

            <button>Claim</button>
          <button>Swap</button>

            </div>

          </div>

          <div className="main-button-wrap-2">
            <div className="inner-button-wrap-2">
            <button>Migrate</button>
          <button>Staking</button>
              

            </div>

          </div>

        


         

        
      </div>
    </div>

    </div>
  );
}

export default Item;
