import { Card, CardGroup, Container, Button } from "react-bootstrap";

let gitLink = "www.linkedin.com/in/mizuho-okimoto";

function About() {
  return (
    <Container className="mt-5">
      <CardGroup style={{ width: "780px" }}>
        {/* squoosh.app */}
        <Card.Img variant="top" src="profile.jpg" style={{ width: "260px", height: "auto" }} />
        <Card>
          <Card.Header>
            <h2>All about me - Developer </h2>
          </Card.Header>
          <Card.Body>
            <Card.Title>Mizuho Okimoto</Card.Title>
            <Card.Text>
              Student (Computer Programming & Analysis)
              <br />
              <br />
              Favorite Languages: JavaScript, Java, SQL
              <br />
              <br />
              LinkedIn Link:
              <Card.Link href="https://www.linkedin.com/in/mizuho-okimoto" target="_blank">
                {" " + "www.linkedin.com/in/mizuho-okimoto"}
              </Card.Link>
              <br />
              <br />
              GitHub Link:
              <Card.Link href="https://https://github.com/MizuhoOkimoto" target="_blank">
                {" " + "github.com/MizuhoOkimoto"}
              </Card.Link>
              <br />
            </Card.Text>
          </Card.Body>
          <Button variant="outline-primary" style={{ width: "350px", margin: "20px" }}>
            Send me an email
          </Button>
        </Card>
      </CardGroup>
    </Container>
  );
}

export default About;
