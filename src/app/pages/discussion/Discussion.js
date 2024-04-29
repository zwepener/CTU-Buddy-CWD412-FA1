import { useRef, useEffect } from "react";

import default_profile from './assets/static/images/default-profile.jpg';

import "./Discussion.css";

function UserProfile() {
  return (
    <div className="user-profile">
      <img className="user-profile-pic" src={default_profile} alt="" />
      <span className="user-display-name">&lt; User Display Name &gt;</span>
    </div>
  );
}

function NewPostForm() {
  const NewPostFormRef = useRef(null);

  useEffect(() => {
    const NewPostFormElem = NewPostFormRef.current;

    const handleSubmit = (event) => {
      event.preventDefault();
      alert(
        "Due to the static nature of FA 1, no logic has been added to this element yet."
      );
    };

    NewPostFormElem.addEventListener("submit", handleSubmit);

    return () => {
      NewPostFormElem.removeEventListener("submit", handleSubmit);
    };
  }, []); // Empty dependency array ensures the listener is added only once

  return (
    <form ref={NewPostFormRef} className="post-form new-post">
      <textarea
        className="default-textarea post-content"
        placeholder="What is on your mind?"
        required
      ></textarea>
      <button type="submit" className="default-button">
        <i className="fa-solid fa-plus"></i>
        &nbsp;Post
      </button>
    </form>
  );
}

function ReplyPostForm() {
  const ReplyPostFormRef = useRef(null);

  useEffect(() => {
    const ReplyPostFormElem = ReplyPostFormRef.current;

    const handleSubmit = (event) => {
      event.preventDefault();
      alert(
        "Due to the static nature of FA 1, no logic has been added to this element yet."
      );
    };

    ReplyPostFormElem.addEventListener("submit", handleSubmit);

    return () => {
      ReplyPostFormElem.removeEventListener("submit", handleSubmit);
    };
  }, []); // Empty dependency array ensures the listener is added only once

  return (
    <form ref={ReplyPostFormRef} className="post-form reply-post">
      <textarea
        className="default-textarea post-content"
        placeholder="Reply in this thread"
        required
      ></textarea>
      <button type="submit" className="default-button">
        <i className="fa-solid fa-reply"></i>
        &nbsp;Reply
      </button>
    </form>
  );
}

function Post(props) {
  const thread = props.thread;
  return (
    <div className="post">
      <UserProfile />
      <p>&lt; Post Content &gt;</p>
      {thread}
    </div>
  );
}

function Thread(props) {
  const replies = props.replies;
  return (
    <div className="thread">
      {replies.map((reply) => {
        return reply;
      })}
      <ReplyPostForm />
    </div>
  );
}

function Reply() {
  return (
    <div className="reply">
      <UserProfile />
      <p>&lt; Reply Content &gt;</p>
    </div>
  );
}

export default function Discussion() {
  return (
    <div className="default-box content" id="discussion-container">
      <UserProfile />
      <NewPostForm />
      <div id="posts">
        <Post thread={<Thread replies={[<Reply />]} />} />
        <Post thread={<Thread replies={[<Reply />, <Reply />]} />} />
        <Post thread={<Thread replies={[<Reply />, <Reply />, <Reply />]} />} />
      </div>
    </div>
  );
}
