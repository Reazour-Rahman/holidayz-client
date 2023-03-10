import { Button, Rating, TextareaAutosize } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import useAuth from "../../../../Hooks/useAuth";
import DetailsComment from "./DetailsComment";

const Details = () => {
  const { blogId } = useParams();

  const userName = blogId.displayName;
  const { user } = useAuth();

  const [blogs, setBlogs] = useState([]);


  /* fetch data from blogs */
  useEffect(() => {
    fetch("https://rare-pastoral-moonstone.glitch.me/blogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data.products));
  });


  /* post a comment */
  const { register, handleSubmit, reset } = useForm();

  /* take input and send to server */
  const onSubmit = (data) => {
    //console.log(data)
    axios
      .post(
        "https://rare-pastoral-moonstone.glitch.me/reviews",
        data,
        (data.blogId = blogId),
        (data.userName = user.name)
      )
      .then((res) => {
        if (res.data.insertedId) {
          swal(
            "Good job!",
            "Successfully submitted! An admin will approve your post",
            "success"
          );
          reset();
        }
      });
  };
  // add new product by admin
  return (
    <div>
      <section>
        {blogs.map((blog) =>
          blog._id === blogId ? (
            <div key={blog._id}>
              <section>
                <div>
                  <img
                    className="w-100"
                    style={{ width: "100vw", height: "70vh" }}
                    src={blog.image1}
                    alt=""
                  />
                </div>
                <div className="container">
                  <p className="fw-bold fs-3 text-decoration-underline mt-5">
                    About Place
                  </p>
                  <p>{blog.descAbout}</p>
                  <p>{blog.descAbout}</p>
                  <p>{blog.descAbout.slice(0, 300)}</p>
                  <br />
                  <p className="fw-bold">Stayed duration : {blog.day} days</p>
                  <p className="fw-bold">
                    Location latitude : {blog.latitude}{" "}
                  </p>
                  <p className="fw-bold">
                    Location longitude : {blog.longitude}
                  </p>
                  <p className="fw-bold">
                    I have visited : {blog.visitPlace} these places
                  </p>
                  <p className="fw-bold">
                    Hotel quantity (expected) : {blog.totalHotel} hotels
                  </p>
                  <span className="d-flex fw-bold">
                    <p className="me-3">Reviews:</p>
                    <Rating
                      name="half-rating-read"
                      defaultValue={blog.rating}
                      precision={0.5}
                      readOnly
                    />
                  </span>

                  {/* Reviews here */}
                  <DetailsComment blogId={blogId}></DetailsComment>

                  {/* User comment */}
                  <div className="text-start">
                    <form
                      action=""
                      onSubmit={handleSubmit(onSubmit)}
                      className="px-0 mx-0"
                    >
                      <p>Leave a comment :</p>
                      <TextareaAutosize
                        {...register("comment")}
                        className="w-100 rounded-3"
                        aria-label="empty textarea"
                        placeholder="Empty"
                        style={{ minHeight: "100px" }}
                      />
                      <Button
                        type="submit"
                        className="bg-success text-white px-4"
                      >
                        Submit
                      </Button>
                    </form>
                  </div>
                </div>
                <div className="w-100 container">
                  <div className="container">
                    {/* Phot Album */}

                    <div className="row rounded-3">
                      <div className="col-6 p-0 pe-1">
                        <img
                          className="img-fluid w-100 h-100 rounded-3"
                          src={blog.thumb}
                          alt=""
                        />
                      </div>
                      <div className="col-6 p-0">
                        <img
                          className="img-fluid w-100 h-100 rounded-3"
                          src={blog.image2}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="row pt-1">
                      <div className="col-6 p-0 pe-1">
                        <img
                          className="img-fluid w-100 h-100 rounded-3"
                          src={blog.image3}
                          alt=""
                        />
                      </div>
                      <div className="col-6 p-0">
                        <img
                          className="img-fluid w-100 h-100 rounded-3"
                          src={blog.image1}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <br />

                {/* Normal photo */}
                <div className="w-100 container">
                  <img
                    className="w-100 rounded-3 pb-1"
                    src={blog.thumb}
                    alt=""
                  />
                  <img
                    className="w-100 rounded-3 pb-1"
                    src={blog.image2}
                    alt=""
                  />
                  <img
                    className="w-100 rounded-3 pb-1"
                    src={blog.image3}
                    alt=""
                  />
                  <img
                    className="w-100 rounded-3 pb-1"
                    src={blog.image1}
                    alt=""
                  />
                </div>
              </section>
            </div>
          ) : null
        )}
      </section>
    </div>
  );
};

export default Details;
