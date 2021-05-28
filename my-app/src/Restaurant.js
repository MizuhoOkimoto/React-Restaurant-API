import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Card, CardDeck } from "react-bootstrap";

import Moment from "react-moment";
import "moment-timezone";

import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

function Restaurant(props) {
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const url = "https://rocky-reef-93754.herokuapp.com"; //later: try SWR
    let URL = "";

    URL = `${url}/api/restaurants/${props.id}`;

    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        if (data.hasOwnProperty("_id")) {
          setRestaurant(data);
        } else {
          setRestaurant(null);
        }
      })
      .catch((err) => console.log(err));
  }, [props.id]);

  if (!loading) {
    if (restaurant) {
      return (
        <div>
          <Card>
            <Card.Header>
              <h2>{restaurant.name}</h2>
              <h5>
                {restaurant.address.building} {restaurant.address.street}
              </h5>
            </Card.Header>
            <Card.Body>
              <MapContainer
                style={{ height: "400px" }}
                center={[restaurant.address.coord[1], restaurant.address.coord[0]]}
                zoom={13}
                scrollWheelZoom={false}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker
                  position={[restaurant.address.coord[1], restaurant.address.coord[0]]}
                ></Marker>
              </MapContainer>
            </Card.Body>
          </Card>
          <br />
          <h3>Ratings</h3>
          <hr />
          <br />
          {/* don't forget to put key! */}
          <CardDeck>
            {restaurant.grades.map((data, i) => (
              <Card key={i} border="info" style={{ width: "18rem" }}>
                <Card.Header style={{ fontWeight: "500" }}>Grade: {data.grade}</Card.Header>
                <Card.Body>
                  <Card.Title style={{ fontSize: "15px" }}>Completed: </Card.Title>
                  <Moment date={data.date} format="YYYY/MM/DD">
                    <Card.Title>{data.date}</Card.Title>
                    {/* <Card.Text></Card.Text> */}
                  </Moment>
                </Card.Body>
              </Card>
            ))}
          </CardDeck>
          <br />
          <br />
          <div>
            <a href="/" style={{ float: "right" }}>
              Back to the Restaurants list
            </a>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <p>Restaurant not found: {props.id}</p>
        </div>
      );
    }
  } else {
    return (
      <div>
        <p>loading please wait...</p>
      </div>
    );
  }
}

export default Restaurant;
