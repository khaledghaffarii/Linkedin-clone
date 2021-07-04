import styled from "styled-components";

const Home = (props) => {

  return (
    <Container>
        <Section>
          <h5>
            <a href="#"> Haring in a Harry ?</a>
          </h5>
          <p>
            Find Talent pres in record time with upwork and keep business moving
          </p>
        </Section>
    </Container>
  );

};
export default Home;
const Container = styled.div`
  padding-top: 100px;
  max-width: 100%;
`;
const Content = styled.div`
  max-width: 1128px;

  margin-left: auto;
  margin-right: auto;
`;
const Section = styled.div`
  min-height: 50px;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  h5 {
    color: #0a66c2;
    font-size: 14px;
    a {
      font-weight: 700;
    }
  }
  p {
    font-size: 14px;
    color: #434649;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;
