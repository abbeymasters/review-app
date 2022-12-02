import './App.css';
import Header from './Components/Header'
import ReviewList from './Components/ReviewList';
import reviewsDb from "./reviews.json"

function App() {
  return (
  <>
    <Header />
    <div className="reviewContainer">
      <ReviewList reviews={reviewsDb} />
    </div>
  </>
  );
}

export default App;