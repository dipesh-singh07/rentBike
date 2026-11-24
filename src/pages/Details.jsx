import { Link, useParams } from 'react-router'

function Details(props) {
  const { id } = useParams()
  let bike = null

  for (let i = 0; i < props.bikeList.length; i++) {
    if (props.bikeList[i].id === Number(id)) {
      bike = props.bikeList[i]
    }
  }

  if (!bike) {
    return (
      <div className="page details-page">
        <h1>Bike not found</h1>
        <p>The bike you are looking for does not exist or has been removed.</p>
        <Link to="/bikes" className="details-link">Back to all bikes</Link>
      </div>
    )
  }

  const engineText = bike.engineCC === 0 ? 'Electric' : `${bike.engineCC} cc`

  return (
    <div className="page details-page">
      <h1>{bike.name}</h1>
      <p><strong>Brand:</strong> {bike.brand}</p>
      <p><strong>Type:</strong> {bike.type}</p>
      <p><strong>Location:</strong> {bike.location}</p>
      <p><strong>Price Per Hour:</strong> ₹{bike.pricePerHour}</p>
      <p><strong>Availability:</strong> {bike.isAvailable ? 'Available' : 'Under Maintenance'}</p>
      <p><strong>Engine:</strong> {engineText}</p>
      {bike.isAvailable === false ? (
        <p className="maintenance-text">Under Maintenance</p>
      ) : bike.isRented ? (
        <button className="btn-return" onClick={() => props.changeRentStatus(bike.id)}>Return</button>
      ) : (
        <button className="btn-rent" onClick={() => props.changeRentStatus(bike.id)}>Rent</button>
      )}
    </div>
  )
}

export default Details
