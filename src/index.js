import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard />
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        commentText="Interesting"
        imgSrc={faker.image.avatar()}
      />
      <CommentDetail
        author="Dave"
        timeAgo="Today at 2:00AM"
        commentText="This is soooo funny!"
        imgSrc={faker.image.avatar()}
      />
      <CommentDetail
        author="Larry"
        timeAgo="Yesterday at 7:45PM"
        commentText="You're dumb"
        imgSrc={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
