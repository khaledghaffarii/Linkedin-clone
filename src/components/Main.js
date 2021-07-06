import React from 'react'
import styled from "styled-components";
const Main = () => {
    return (
      <Container>
        <ShareBox>
          <div>
            <img src="" alt="" />

            <img src="/images/user.svg" alt="" />

            <button>Start a post</button>
          </div>
          <div>
            <button>
              <img src="images/photo-card.svg" alt="" />
              <span>Photo</span>
            </button>
            <button>
              <img src="images/video-card.svg" alt="" />
              <span>Video</span>
            </button>
            <button>
              <img src="images/event-card.svg" alt="" />
              <span>Event</span>
            </button>
            <button>
              <img src="images/article-card.svg" alt="" />
              <span>Write article</span>
            </button>
          </div>
        </ShareBox>
      </Container>
    );
}
const Container = styled.div`
  grid-area: main;
`;
const CommonCard = styled.div`
text-align: center;
overflow: hidden;
margin-bottom: 8px;
background-color:#fff;
border-radius:5px;
position: relative;
border:none;
box-shadow: 0 0  0  1px rgba(0, 0, 0 /15%),0 0 0 rgba(0, 0, 0 /20%);

`;
const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  margin: 0 0 8px;
  color: #958b7b;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      display: flex;
      align-items: center;
      border: none;
      background-color: transparent;
      font-weight: 600;
      cursor: pointer;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 35px;
        text-align: left;
        cursor: pointer;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;
      button {
        img {
          margin: 0 4px 0 -2px;
        }
      }
    }
  }
`;

export default Main
