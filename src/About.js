import { Card, CardGroup, Container, Button } from "react-bootstrap";

let gitLink = "www.linkedin.com/in/mizuho-okimoto";

function About() {
  return (
    <Container className="mt-5">
      <CardGroup style={{ width: "1000px" }}>
        {/* squoosh.app */}
        <Card.Img
          variant="top"
          src="profile.jpg"
          style={{ width: "350px", height: "auto" }}
        />
        <Card>
          <Card.Header>
            <h2>All about me</h2>
          </Card.Header>
          <Card.Body>
            <Card.Title>Mizuho Okimoto</Card.Title>
            <Card.Text>
              Front-end Developer | Quality Assurance
              <br />
              <br />
              <h5>- About me - </h5>
              Driven and adaptable IT professional, skilled in analytical
              problem-solving and collaborative teamwork. I'm eager to apply my
              diverse experience in technology and customer service to
              contribute innovative solutions and drive success in a dynamic
              organizational environment.
              <br />
              <br />
              LinkedIn Link:
              <Card.Link
                href="https://www.linkedin.com/in/mizuho-okimoto"
                target="_blank"
              >
                {" " + "www.linkedin.com/in/mizuho-okimoto"}
              </Card.Link>
              <br />
              <br />
              GitHub Link:
              <Card.Link
                href="https://github.com/MizuhoOkimoto"
                target="_blank"
              >
                {" " + "github.com/MizuhoOkimoto"}
              </Card.Link>
              <br />
            </Card.Text>
          </Card.Body>
          {/* <Button
            variant="outline-primary"
            style={{ width: "350px", margin: "20px" }}
          >
            Send me an email
          </Button> */}
        </Card>
      </CardGroup>
    </Container>
  );
}

export default About;
