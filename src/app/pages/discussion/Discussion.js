import "./Discussion.css";

// Placeholder element for User Profiles
export function UserProfile() {
  return (
    <div className="user-profile">
      <img className="user-profile-pic" src="#" alt="" />
      <span className="user-display-name">&lt;User Display Name&gt;</span>
    </div>
  );
}

// Placeholder element for New Post Forms
export function NewPostForm() {
  return (
    <form className="post-form new-post">
      <textarea
        className="default-textarea post-content"
        placeholder="What is on your mind?"
        required
      ></textarea>
      <button type="submit" className="default-button">
        <i className="fa-solid fa-plus"></i>
        Post
      </button>
    </form>
  );
}

// Placeholder element for Reply Post Forms
export function ReplyPostForm() {
  return (
    <form className="post-form reply-post">
      <textarea
        className="default-textarea post-content"
        placeholder="Reply in this thread"
        required
      ></textarea>
      <button type="submit" className="default-button">
        <i className="fa-solid fa-reply"></i>
        Reply
      </button>
    </form>
  );
}

// Placeholder element for a single Post
export function Post() {
  return (
    <div className="post">
      <UserProfile />
      <p>&lt;Post Content&gt;</p>
    </div>
  );
}

// Placeholder element for a single Reply
export function Reply() {
  return (
    <div className="reply">
      <UserProfile />
      <p>&lt;Reply Content&gt;</p>
    </div>
  )
}

export default function Discussion() {
  return (
    <div className="default-box content" id="discussion-container">
      <UserProfile />

      <NewPostForm />

      {/* Posts Container */}
      <div id="posts">
        <div className="post">
          <UserProfile />
          <p>&lt;Post Content&gt;</p>
          <div className="thread">
            <Reply />
            <ReplyPostForm />
          </div>
        </div>
        <div className="post">
          <UserProfile />
          <p>&lt;Post Content&gt;</p>
          <div className="thread">
            <Reply />
            <Reply />
            <ReplyPostForm />
          </div>
        </div>
        <div className="post">
          <UserProfile />
          <p>&lt;Post Content&gt;</p>
          <div className="thread">
            <Reply />
            <Reply />
            <Reply />
            <ReplyPostForm />
          </div>
        </div>
      </div>
    </div>
  );
}
