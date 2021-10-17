import React from "react";
import Modal from "react-modal";
import { useState } from "react/cjs/react.development";

function AddModal({
  modalIsOpen,
  modalMessage,
  fieldUpdate,
  addPost,
  onModalClose,
}) {
  console.log(onModalClose);
  return (
    <Modal isOpen={modalIsOpen} className="modal">
      <div className="modal__header">
        <p className="modal__header__message">{modalMessage}</p>
        <button className="modal__header__close" onClick={onModalClose}>
          X
        </button>
      </div>
      <div className="modal__body">
        <form className="modal__form" onSubmit={addPost}>
          <div className="modal__form__row">
            <label className="modal__form__label" htmlFor="postTitle">
              Post title:
            </label>
            <input
              type="text"
              name="postTitle"
              id="postTitle"
              onChange={(e) => fieldUpdate(e)}
              minLength="6"
              required
            />
          </div>
          <div className="modal__form__row">
            <label className="modal__form__label" htmlFor="videoUrl">
              Video Url
            </label>
            <input
              type="text"
              name="videoUrl"
              id="videoUrl"
              onChange={(e) => fieldUpdate(e)}
            />
          </div>
          <div className="modal__form__row">
            <label className="modal__form__label" htmlFor="url">
              Image Url
            </label>
            <input
              type="text"
              id="url"
              name="imageUrl"
              className="modal__form__url"
              onChange={(e) => fieldUpdate(e)}
            />
          </div>
          <textarea
            className="modal__form__textArea"
            onChange={(e) => fieldUpdate(e)}
            name="postText"
            id="postText"
            cols="30"
            rows="10"
            minLength="6"
            required
          ></textarea>
          <div className="modal__form__row">
            <button type="submit" className="modal__form__button">
              Create Post
            </button>
            <button
              onClick={onModalClose}
              button="button"
              className="modal__form__button--cancel"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default AddModal;
