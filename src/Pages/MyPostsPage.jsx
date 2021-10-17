import React, { useReducer, useState } from "react";
import AddModal from "../components/AddModal";
import { toast } from "react-toastify";

const initialState = {
  modalIsOpen: false,
  modalMessage: "",
};

const postReducer = (state, action) => {
  switch (action.type) {
    case "closeModal":
      return {
        ...state,
        modalIsOpen: false,
      };
    case "updateField":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "openModal":
      return {
        ...state,
        modalIsOpen: true,
        modalMessage: "Create your blog post",
      };
    case "postAdded":
      return {
        ...state,
        postTitle: "",
        videoUrl: "",
        imageUrl: "",
        text: "",
        closeModal: true,
      };
    default:
      return false;
  }
};

function MyPostsPage() {
  const [myPosts, setMyPosts] = useState([]);
  const [state, dispatch] = useReducer(postReducer, initialState);

  const { modalIsOpen, postTitle, videoUrl, imageUrl, text, modalMessage } =
    state;

  const fieldUpdate = (e) =>
    dispatch({
      type: "updateField",
      field: e.currentTarget.name,
      value: e.currentTarget.value,
    });

  const addPost = (e) => {
    e.preventDefault();
    if (!videoUrl && !imageUrl) {
      toast.error("you must provide image url or video url", {
        theme: "colored",
        hideProgressBar: true,
      });
    }
  };

  const onModalClose = () => {
    dispatch({ type: "closeModal" });
  };

  console.log(state);
  return (
    <div>
      <h2>my posts page</h2>
      <AddModal
        modalIsOpen={modalIsOpen}
        modalMessage={modalMessage}
        fieldUpdate={fieldUpdate}
        addPost={addPost}
        onModalClose={onModalClose}
      />
      <button onClick={() => dispatch({ type: "openModal" })}>
        Add new post
      </button>
    </div>
  );
}

export default MyPostsPage;
