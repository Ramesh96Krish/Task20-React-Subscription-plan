import './priceCard.css';

const Pricecard = (props) => {

    const {plans} = props;
    
    return (
     <div className='price-container'>
        {plans.map((plans,index)=>(
            < div className='plan-container'>
         <div className='header'>
         <p className='text1'>{plans.plan}</p>
         <h1 className='text'>{plans.price}</h1>
         <hr></hr>
         </div>
         <div className='details-container'>
           {plans.plan ==="FREE"?(
            <ul className="custom-list">
            <li className="checkmark">{plans.details[0]}</li>
            <li className="checkmark">{plans.details[1]}</li>
            <li className="checkmark">{plans.details[2]}</li>
            <li className="checkmark">{plans.details[3]}</li>
            <li className='cancel' id='fade'>{plans.details[4]}</li>
            <li className='cancel' id='fade'>{plans.details[5]}</li>
            <li className='cancel' id='fade'>{plans.details[6]}</li>
            <li className='cancel' id='fade'>{plans.details[7]}</li>
        </ul>
           ):''}
           {plans.plan ==="PLUS"?(
            <ul className="custom-list">
            <li className="checkmark">{plans.details[0]}</li>
            <li className="checkmark">{plans.details[1]}</li>
            <li className="checkmark">{plans.details[2]}</li>
            <li className="checkmark">{plans.details[3]}</li>
            <li className='checkmark'>{plans.details[4]}</li>
            <li className='checkmark'>{plans.details[5]}</li>
            <li className='checkmark'>{plans.details[6]}</li>
            <li className='cancel' id='fade'>{plans.details[7]}</li>
        </ul>
           ):''}
           {plans.plan ==="PRO"?(
            <ul className="custom-list">
            <li className="checkmark">{plans.details[0]}</li>
            <li className="checkmark">{plans.details[1]}</li>
            <li className="checkmark">{plans.details[2]}</li>
            <li className="checkmark">{plans.details[3]}</li>
            <li className='checkmark'>{plans.details[4]}</li>
            <li className='checkmark'>{plans.details[5]}</li>
            <li className='checkmark'>{plans.details[6]}</li>
            <li className='checkmark'>{plans.details[7]}</li>
        </ul>
           ):''}   
         </div>
         <div className='button-container'>
         <button>BUTTON</button>
         </div>
         </div>
      ))}   
     </div>          
    )
}                               
export default Pricecard;

