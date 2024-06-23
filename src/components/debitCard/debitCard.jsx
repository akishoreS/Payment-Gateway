import secure from '../../assets/secure.svg';

export default function DebitCreditCard() {
  return (
    <div className="tab-pane fade show" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
      <h5>Enter your Card Details</h5>
      <div className="mt-4 px-3s">
        <input type="text" className="shadow-none w-100 form-control cardInput" placeholder="Card Number" />
      </div>
      <div className="mt-3 d-flex">
        <input type="text" className="shadow-none w-50 form-control cardInput me-2" placeholder="Expiry Date" />
        <input type="text" className="shadow-none w-50 form-control cardInput" placeholder="CVV" />
      </div>
      <div className="mt-3 px-3s">
        <input type="text" className="shadow-none w-100 form-control cardInput" placeholder="Card Holder Name" />
      </div>
      <div className="d-flex mt-5 align-items-center justify-content-center">
        <img src={secure} alt='secure'/>
        <p style={{fontSize:"20px"}} className='grey mb-0 fw-semibold ms-2'>Safe & Secure Payment</p>
      </div>
      <button className='paymentBtn fw-semibold mt-4'>Proceed to Payment</button>
    </div>
  );
}
