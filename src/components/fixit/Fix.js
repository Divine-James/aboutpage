import {
  StyledFixHeader,
  StyledFixImg,
  StyledFixCenter,
  StyledFixBox,
  StyledColor,
  StyledColorBlue,
  StyledColorOrange,
  StyledFixp,
} from "../styled/Fix.styled";

export default function Fix() {
  /*
  const data = [
    {
      name: "trust",
      id: 1,
      img: "assets/img/Trust.jpg",
      text: "You get to have an idea of your fee before you commit: and yet, you only make payment when the job is successfully completed.",
    },
    {
      name: "Convience",
      id: 2,
      img: "assets/img/Convenience.jpg",
      text: "You get to have an idea of your fee before you commit: and yet, you only make payment when the job is successfully completed.",
    },
    {
      name: "Professionalism",
      id: 3,
      img: "assets/img/Professionalism.png",
      text: "You get to have an idea of your fee before you commit: and yet, you only make payment when the job is successfully completed.",
    },
  ];
*/
  return (
    <>
      <StyledFixHeader>
        Why Choose <StyledColorBlue>Fix</StyledColorBlue>
        <StyledColor>It</StyledColor>
      </StyledFixHeader>
      <StyledFixBox>
        <StyledFixCenter>
          <StyledFixImg src="assets/img/Trust.png" alt="trust" />
          <StyledColorOrange>Trust</StyledColorOrange>
          <StyledFixp>
            <p>
              You get to have an idea of your fee before you commit: and yet,
              you only make payment when the job is successfully completed.
            </p>
          </StyledFixp>
        </StyledFixCenter>
        <StyledFixCenter>
          <StyledFixImg src="assets/img/Convenience.png" alt="convenience" />
          <StyledColorOrange>Convience</StyledColorOrange>
          <StyledFixp>
            <p>
              Our site is quite easy to use through simple steps: sign up, lodge
              your complaint, then sit back and view the real-time status
              updates on your dashboard, while we FixIt for you
            </p>
          </StyledFixp>
        </StyledFixCenter>
        <StyledFixCenter>
          <StyledFixImg
            src="assets/img/Professionalism.png"
            alt="professionals"
          />
          <StyledColorOrange> Professionalism</StyledColorOrange>
          <StyledFixp>
            <p>
              With a team of very experienced professionals, we approach each
              request on a case-by-case basis ensuring our client gets updated
              every step of the way and is given only the best result.
            </p>
          </StyledFixp>
        </StyledFixCenter>
      </StyledFixBox>
    </>
  );
  /*
      <div>
        {data.map((item) => (
          <StyledFixBox>
            <StyledFixCenter key={item.id}>
              <StyledFixImg src={item.img} alt={item.name} />
              <h1>{item.name}</h1>
              <p>{item.text}</p>
            </StyledFixCenter>
          </StyledFixBox>
        ))}
      </div>
      */
}
