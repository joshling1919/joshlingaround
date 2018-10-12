import React from 'react';
import styled from 'styled-components';

// would probably like to just do a markdown parser for text formatting

const POSTS = [
  'There’s a lot of excitement in the air for this event. This is a highly anticipated event. After years of fighting, these 2 towns were going to put aside their differences by having a big race. One week before the race, officials for the event unveiled the rules for the race. Citizens from Town A were furious to discover that the competitor from Town B gets to start 20% closer to the finish line.',
  'Officials were perplexed at this outrage.How could they all forget the fact that Town A leaders had been, for years, waging a sort of covert chemical warfare on the citizens of Town B ? For years, the leaders of Town A had been knowingly dumping lead into the Town B water supply.Because of this, almost the entire population of Town B had their growth physically stunted.The reality was, because of the intentional lead poisoning, there was basically no shot that Town B citizens could win this race.',
];

const PostsContainer = styled.div`
  width: 90%;
`;

const Posts = () => (
  <PostsContainer>
    {POSTS.map(post => (
      <div>
        {post}
      </div>
    ))}
  </PostsContainer>
);

export default Posts;
