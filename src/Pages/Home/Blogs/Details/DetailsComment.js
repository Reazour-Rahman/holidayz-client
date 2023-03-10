import { Avatar, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";

const DetailsComment = (props) => {
  const { blogId } = props;
  const [reviews, setReviews] = useState([]);

  /* fetch data from review */
  useEffect(() => {
    fetch("https://rare-pastoral-moonstone.glitch.me/reviews")
      .then((response) => response.json())
      .then((data) => setReviews(data));
  });
  return (
    <div>
      <section>
        {reviews.map((review) =>
          review.blogId === blogId ? (
            <div>
              <div className="d-flex flex-column mb-2 mt-2">
                <div className="d-flex align-items-center mb-2">
                  <Avatar
                    alt="Remy Sharp"
                    src="https://cdn-icons.flaticon.com/png/512/2602/premium/2602046.png?token=exp=1643395515~hmac=9c5253fe09bfb000668022a52954ae88"
                  />
                  <small className="ps-2 fw-bold me-3">Anonymous</small>
                </div>
                <div>
                  <small>{review.comment}.</small>
                </div>
              </div>
              <Divider></Divider>
            </div>
          ) : null
        )}
      </section>
    </div>
  );
};

export default DetailsComment;
