import styled from 'styled-components';

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 15.45vw;
  line-height: 0.85;
`;

const Row = styled.div`
  display: flex;
  position: relative;
  align-self: flex-end;
  position: relative;
  left: -1.3vw;
  margin-bottom: 0.1em;
`;

const DiskWrapper = styled.div`
  --size: 1.3em;
  --gap: 0.2em;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0.04em;
  bottom: 0.025em;
  left: calc(var(--size) * -1 - var(--gap));
`;
const Disk = styled.div`
  width: var(--size);
  flex: 1;
  border-radius: 50%;
  border: 1.5px solid var(--color-primary);
  transition: all 0.3s ease-in-out;

  &:nth-child(1) {
    flex: 1;

    ${DiskWrapper}:hover & {
      flex: 3;
    }
  }
  &:nth-child(2) {
    flex: 2;
  }
  &:nth-child(3) {
    flex: 3;
    display: grid;
    place-items: center;

    ${DiskWrapper}:hover & {
      flex: 1;
    }
  }
`;

const Stick = styled.div`
  width: 1.5px;
  height: 140%;
  background-color: var(--color-primary);
  transform: translateY(-50%);
  transition: all 0.3s ease-in-out;
  max-height: 0.5em;

  ${DiskWrapper}:hover & {
    height: 450%;
  }
`;

const Title = styled.span`
  font-weight: 700;
  text-align: right;
  transform: translateX(-5px);
  text-transform: uppercase;
`;

const TitleStroke = styled(Title)`
  -webkit-text-stroke: 3px white;
  -webkit-text-fill-color: transparent;
  position: relative;
`;

export const Footer = () => (
  <Wrapper>
    <Row>
      <Title>wear</Title>
      <DiskWrapper>
        <Disk />
        <Disk />
        <Disk>
          <Stick />
        </Disk>
      </DiskWrapper>
    </Row>
    <TitleStroke>everyday</TitleStroke>
  </Wrapper>
);
