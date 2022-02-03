import React from "react";
import {
  MDBCol,
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import Badge from "./Badge";

const Blogs = ({
  authorname,
  title,
  likes,
  comments,
  category,
  description,
  id,
  imageUrl,
  excerpt,
  handleDelete,
}) => {
  return (
    <MDBCol size="4">
      <MDBCard className="h-100 mt-2" style={{ maxWidth: "22rem" }}>
        <MDBCardImage
          src={imageUrl}
          alt={title}
          position="top"
          style={{ maxWidth: "100%", height: "180px" }}
        />
        <MDBCardBody>
          <MDBCardTitle>{title}</MDBCardTitle>
          <MDBCardText>
            {excerpt(description)}
            {/* <Link to={`/blog/${id}`}>Read More</Link> */}
          </MDBCardText>
          <MDBCardTitle>By:- <Link to={`/blog/${id}`}>{authorname}</Link></MDBCardTitle>
          {/* <tr> */}
            {/* <td> */}
            <Badge>{category}</Badge>
            {/* </td> */}
          {/* </tr> */}
          <tr  style = {{marginLeft: '10px'}}>
          <td>
          <button style = {{
    width: '%',
    height: '44%',
    backgroundColor: '#005477',
    color: '#FFFFFF'
}}>{likes}&nbsp;Like </button>
          </td>
          <button style = {{marginLeft: '85%',
    width: '100%',
    height: '44%',
    backgroundColor: '#005477',
    position: 'relative',
    color: '#FFFFFF'
}}>{comments}&nbsp;Comments</button>
          </tr>
          
          <span>
            <MDBBtn
              className="mt-1"
              tag="a"
              color="none"
              onClick={() => handleDelete(id)}
            >
              <MDBIcon
                fas
                icon="trash"
                style={{ color: "#dd4b39" }}
                size="lg"
              />
            </MDBBtn>
            <Link to={`/editBlog/${id}`}>
              <MDBIcon
                fas
                icon="edit"
                style={{ color: "#55acee", marginLeft: "10px" }}
                size="lg"
              />
            </Link>
          </span>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default Blogs;