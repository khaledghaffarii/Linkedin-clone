import React from "react";
import styled from "styled-components";
const Main = () => {
  return (
    <Container>
      <ShareBox>
        Share
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
      <div>
        <Article>
          <SharedActor>
            <a href="#">
              <img src="images/user.svg" />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </a>
            <button>
              <img src="images/ellipsis.svg" />
            </button>
          </SharedActor>
          <Description>Description</Description>
          <SharedImg>
            <a href="#">
              <img src="images/MTW.jpeg" />
            </a>
          </SharedImg>
          <SocialCounts>
            <li>
              <div>
                {" "}
                <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" />
                <img src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" />
                <span>75</span>
              </div>
              <li>
                <a href="#"> 2 Comments</a>{" "}
              </li>
            </li>
          </SocialCounts>
          <SocialAction>
            <div>
              {" "}
              <img src="images/like.svg" />
              <span>like</span>
            </div>
            <div>
              {" "}
              <img src="images/comment.svg" />
              <span>comments</span>
            </div>
            <div>
              {" "}
              <img src="images/share.svg" />
              <span>Share</span>
            </div>
            <div>
              {" "}
              <img src="images/send.svg" />
              <span>send</span>
            </div>
          </SocialAction>
        </Article>
      </div>
    </Container>
  );
};
const SocialAction = styled.div`
  min-height: 1.3;
  display: flex;

  justify-content: flex-start;
  margin: 0;
  padding: 10px 10px;

  div {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: #0a66c2;
    cursor: pointer;
    &:hover {
      transform: translateY(-3px);
      background-color: #ebebebeb;
    }
    @media (min-width: 768px) {
      span {
        margin-left: 8px;
      }
    }
  }
`;
const SocialCounts = styled.div`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;
  a {
    text-decoration: none;
  }
  li {
    margin-right: 5px;
    font-size: 12px;
    display: flex;

    div {
      display: flex;
      margin-right: 5px;
    }
  }
`;
const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`;
const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f99a9b;
  img {
    object-fit: 100%;
    width: 100%;
    height: 100%;
  }
`;
const Container = styled.div`
  grid-area: main;
`;
const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgba(0, 0, 0 /15%), 0 0 0 rgba(0, 0, 0 /20%);
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
const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;
const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  align-items: center;
  display: flex;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img {
      width: 48px;
      height: 48px;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: hidden;
      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }

        &:nth-child(n + 1) {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }

  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
  }
`;
export default Main;
