import React, { useEffect, useState } from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from "@mui/material";
import "../Dashboard/Packages/Package.css";
import "../Home/Blogs/Blogs.css";
import HoverRating from "../Home/Blogs/Rating";
import "./Explore.css";

const Explore = () => {
  const [blog, setBlog] = useState([]);
  const [value, setValue] = useState("All Blogs");
  useEffect(() => {
    fetch("https://holidayz-backend.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => setBlog(data.products));
  }, []);
  const allBlog = blog.filter((b) => b.status === "approved");
  const highestPaid = allBlog.filter((b) => parseFloat(b.avgPrice) >= 499);
  const topRated = allBlog.filter((b) => parseFloat(b.rating) >= 4.5);
  return (
    <div>
      <Container className="py-5">
        <Dropdown className="mb-5 ">
          <Dropdown.Toggle
            className="w-100 shadow-none"
            variant="primary"
            id="dropdown-basic"
          >
            {value}
          </Dropdown.Toggle>

          <Dropdown.Menu className="w-100">
            <Dropdown.Item checked onClick={() => setValue("AllBlogs")}>
              All Blogs{" "}
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setValue("HighestPaid")}>
              Expensive
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setValue("TopRated")}>
              Top Rated Spots
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Row>
          <Col>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
              {value === "HighestPaid" &&
                highestPaid.map((blog) => (
                  <div>
                    <Card className="card-width">
                      <CardActionArea>
                        <div className="container-ll">
                          <CardMedia
                            class="image"
                            component="img"
                            height="340"
                            image={blog.thumb}
                            alt="green iguana"
                          />
                        </div>
                        <CardContent className="py-1 px-2">
                          <Typography
                            gutterBottom
                            variant="body"
                            className="mb-0"
                            component="div"
                          >
                            {blog.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            className="d-flex justify-content-between align-items-center"
                          >
                            <HoverRating rating={blog.rating}></HoverRating>
                            <span className="fw-bold text-dark">
                              <span className="text-success">Avg $</span>{" "}
                              {blog.avgPrice}
                            </span>
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      {/* </Link> */}
                      <CardActions className="pt-0">
                        <Typography
                          gutterBottom
                          variant="body"
                          className="mb-0"
                          component="div"
                        >
                          <span>
                            {blog.day} day accommodation with all expenses
                          </span>
                        </Typography>
                      </CardActions>
                    </Card>
                  </div>
                ))}
              {value === "AllBlogs" &&
                allBlog.map((blog) => (
                  <div>
                    <Card className="card-width">
                      <CardActionArea>
                        <div className="container-ll">
                          <CardMedia
                            class="image"
                            component="img"
                            height="340"
                            image={blog.thumb}
                            alt="green iguana"
                          />
                        </div>
                        <CardContent className="py-1 px-2">
                          <Typography
                            gutterBottom
                            variant="body"
                            className="mb-0"
                            component="div"
                          >
                            {blog.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            className="d-flex justify-content-between align-items-center"
                          >
                            <HoverRating rating={blog.rating}></HoverRating>
                            <span className="fw-bold text-dark">
                              <span className="text-success">Avg $</span>{" "}
                              {blog.avgPrice}
                            </span>
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      {/* </Link> */}
                      <CardActions className="pt-0">
                        <Typography
                          gutterBottom
                          variant="body"
                          className="mb-0"
                          component="div"
                        >
                          <span>
                            {blog.day} day accommodation with all expenses
                          </span>
                        </Typography>
                      </CardActions>
                    </Card>
                  </div>
                ))}
              {value === "TopRated" &&
                topRated.map((blog) => (
                  <div>
                    <Card className="card-width">
                      <CardActionArea>
                        <div className="container-ll">
                          <CardMedia
                            class="image"
                            component="img"
                            height="340"
                            image={blog.thumb}
                            alt="green iguana"
                          />
                        </div>
                        <CardContent className="py-1 px-2">
                          <Typography
                            gutterBottom
                            variant="body"
                            className="mb-0"
                            component="div"
                          >
                            {blog.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            className="d-flex justify-content-between align-items-center"
                          >
                            <HoverRating rating={blog.rating}></HoverRating>
                            <span className="fw-bold text-dark">
                              <span className="text-success">Avg $</span>{" "}
                              {blog.avgPrice}
                            </span>
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      {/* </Link> */}
                      <CardActions className="pt-0">
                        <Typography
                          gutterBottom
                          variant="body"
                          className="mb-0"
                          component="div"
                        >
                          <span>
                            {blog.day} day accommodation with all expenses
                          </span>
                        </Typography>
                      </CardActions>
                    </Card>
                  </div>
                ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Explore;
