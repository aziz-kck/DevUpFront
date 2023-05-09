import "./footer.css"

function Footer() {


    return (
      <footer className='footer styleFooter' style={{textAlign: "center",alignContent: "center",alignItems: "center",fontSize: "20px",borderTop: "1px solid #c2bfbf"}}>
        <div className=''>
          <div>
            <div className='row align-items-center'>
              <div className=''>
                <span className='small text-muted'>
                  Copyright {new Date().getFullYear()} © EcoWaste . All rights
                  reserved. Powered by{" "}
                  <a href='https://codescandy.com/'>Dev'Up</a>.
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  export default Footer;
  