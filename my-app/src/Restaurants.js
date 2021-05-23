import { useState, useEffect } from "react";
import queryString, { parseUrl } from "query-string";
import { Card, Table, Pagination, Spinner, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { render } from "react-dom";

function Restaurants(props) {
  const [restaurants, setRestaurants] = useState(null);
  const [page, setPage] = useState(1);
  let history = useHistory();
  const perPage = 10;
  useEffect(() => {
    const url = "https://dry-beach-09049.herokuapp.com/"; //https://rocky-mesa-34015.herokuapp.com
    let URL = "";

    if (props.query) {
      const parsed = queryString.parse(props.query);
      console.log(parsed);
      URL = `${url}/api/restaurants?page=${page}&perPage=${perPage}&borough=${parsed.borough}`;
    } else URL = `${url}/api/restaurants?page=${page}&perPage=${perPage}`;
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setRestaurants(data);
        setPage(page);
      })
      .catch((err) => {
        console.log(err); //following week4 part4 console.err?
        //return null;
      });
  }, [props.query, page]);

  function previousPage() {
    if (page > 1) setPage((page) => page - 1);
  }
  function nextPage() {
    setPage((page) => page + 1);
  }

  if (restaurants) {
    // if (!restaurants.length) {
    return (
      <div>
        <Card>
          <Card.Header>
            <h2>Restaurant List</h2>
          </Card.Header>

          <Card.Body>
            {/* {!restaurants.length ? (
              <tr>
                <td colSpan="4">
                  <Alert variant="danger">
                    <Alert.Heading>Sorry, the restaurant not found</Alert.Heading>
                    <p>
                      <a href="/" style={{ float: "right" }}>
                        Back to the Restaurants list
                      </a>
                    </p>
                  </Alert>
                </td>
              </tr>
            ) : null} */}

            <p>Full list of restaurants. Optionally sorted by borough</p>
            <br />
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Borough</th>
                  <th>Cuisine</th>
                </tr>
              </thead>
              <tbody>
                {!restaurants.length ? (
                  <tr>
                    <td colSpan="4">
                      <Alert>
                        <Alert.Heading className="text-center">
                          Sorry, no results found
                        </Alert.Heading>
                        <p>
                          <a href="/" style={{ float: "right" }}>
                            Back to the Restaurants list
                          </a>
                        </p>
                      </Alert>
                    </td>
                  </tr>
                ) : null}
                {restaurants.map((data) => (
                  <tr
                    key={data._id}
                    onClick={() => {
                      history.push(`/restaurant/${data._id}`);
                    }}
                  >
                    <td>{data.name}</td>
                    <td>
                      {data.address.building} {data.address.street}
                    </td>
                    <td>{data.borough}</td>
                    <td>{data.cuisine}</td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <Pagination>
              <Pagination.Prev onClick={previousPage} />
              <Pagination.Item>{page}</Pagination.Item>
              <Pagination.Next onClick={nextPage} />
            </Pagination>
          </Card.Body>
        </Card>
      </div>
    );
    // }
  } else
    return (
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        {/* <p>Loading</p> */}
      </div>
    );
}

export default Restaurants;
