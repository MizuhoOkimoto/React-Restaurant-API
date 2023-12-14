import { useState, useEffect } from "react";
import queryString from "query-string";
import { Card, Table, Pagination, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import BackgroundPic from "./Background";

function Restaurants(props) {
  const [restaurants, setRestaurants] = useState(null);
  const [page, setPage] = useState(1);

  let history = useHistory();
  const perPage = 10;
  useEffect(() => {
    const url = "https://rocky-reef-93754.herokuapp.com";
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
        console.log(err);
      });
  }, [props.query, page]);

  function previousPage() {
    if (page > 1) setPage((page) => page - 1);
  }
  function nextPage() {
    setPage((page) => page + 1);
  }

  if (restaurants) {
    return (
      <div>
        <BackgroundPic />
        <Card>
          <Card.Header>
            <h2>Restaurant List</h2>
          </Card.Header>
          {restaurants.length === 0 ? (
            <Card.Body>
              <Alert className="text-center" style={{ fontSize: "38px" }}>
                Sorry, No Results Found
                <p>
                  <a
                    href="/"
                    style={{
                      float: "right",
                      fontSize: "20px",
                      marginTop: "38px",
                    }}
                  >
                    Back to the Restaurants list
                  </a>
                </p>
              </Alert>
            </Card.Body>
          ) : (
            <>
              <Card.Body>
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
            </>
          )}
        </Card>
      </div>
    );
  } else
    return (
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
}

export default Restaurants;
