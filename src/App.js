import logo from './logo.svg';
import Pricecard from './priceCard/priceCard';

const plans = [
  {
    id:'1',
    plan: "FREE",
    price: "$0/month",
    details: ['Single User','50GB Storage','Unlimited public projects','Community Access','Unlimited private projects','Dedicated phone support','Free subdomain','Monthly Status Reports'],
  },
  {
    id:'2',
    plan: "PLUS",
    price: "$9/month",
    details: ['5 Users','50GB Storage','Unlimited public projects','Community Access','Unlimited private projects','Dedicated phone support','Free subdomain','Monthly Status Reports'],
  },
  {
    id:'3',
    plan: "PRO",
    price: "$49/month",
    details: ['Unlimited Users','50GB Storage','Unlimited public projects','Community Access','Unlimited private projects','Dedicated phone support','Free subdomain','Monthly Status Reports'],
  },
]

function App() {
  return (
    <div className='App'>
      <Pricecard plans={plans}/>
    </div>
  );
}

export default App;
