import {
  StoryImg,
  StyledStory,
  StoryP,
  StoryHead,
  StyledStorytxt,
} from "../styled/Story.styled";

export default function Story() {
  return (
    <>
      <StyledStory>
        <StyledStorytxt>
          <StoryHead>Our Story</StoryHead>
          <StoryP>
            Founded in November 2022 during an internship program of great
            minds, the founder took note of a rising trend: high profile
            individuals and businesses are becoming more susceptible to negative
            reviews, where a few words could have a devastating impact on the
            reputation, sales, and recruitment efforts of the victim. For this
            reason, the FixIt vision came to life.
          </StoryP>
          <StoryP>
            At FixIt, we aim to provide a stellar reputation management service
            by utilising the latest technology, and the most effective user
            experience processes.
          </StoryP>
        </StyledStorytxt>
        <StoryImg
          src="assets/img/Our-Story.png"
          alt="our story"
          width="600px"
        />
      </StyledStory>
    </>
  );
}
