import secure from '../../assets/secure.svg';

export default function NetBanking() {
  return (
    <div className="tab-pane fade show" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
      <h5>Select Your Bank</h5>
      <div className="mt-4 px-3s">
        <select className="form-select shadow-none" aria-label="Select a Bank">
          <option selected>Select a Bank</option>
          <option value="ICICI Bank">ICICI Bank</option>
          <option value="HDFC Bank">HDFC Bank</option>
          <option value="Axis Bank">Axis Bank</option>
          <option value="State Bank of India">State Bank of India</option>
          <option value="Bank of Baroda">Bank of Baroda</option>
        </select>
      </div>
      <div className="d-flex mt-5 align-items-center justify-content-center">
        <img src={secure} alt='secure'/>
        <p style={{fontSize:"20px"}} className='grey mb-0 fw-semibold ms-2'>Safe & Secure Payment</p>
      </div>
      <button className='paymentBtn fw-semibold mt-4'>Proceed to Payment</button>
    </div>
  );
}
