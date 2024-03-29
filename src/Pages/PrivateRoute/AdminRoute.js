// import { Navigate, useLocation } from "react-router-dom";
// import useAuth from "../../Hooks/useAuth";
// // react spinner
// import { useState } from "react";
// import { css } from "@emotion/react";
// import { HashLoader } from "react-spinners";
// // react spinner

// const AdminRoute = ({ children, ...rest }) => {
//   const { user, isLoading, admin } = useAuth();
//   let location = useLocation();
//   // react spinner
//   let [spinner, setSpinner] = useState(true);
//   let [color, setColor] = useState("#36D7B7");
//   const override = css`
//     display: block;
//     align: center;
//     margin: 125px auto;
//     border-color: red;
//   `;

//   // react spinner

//   if (isLoading) {
//     return (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           minHeight: "100vh",
//         }}
//       >
//         {" "}
//         <HashLoader color={color} spinner={spinner} css={override} size={65} />
//       </div>
//     );
//   }
//   if (admin) {
//     return children;
//   }
//   return <Navigate to="/dashboard" state={{ from: location }} />;
// };

// export default AdminRoute;
import React from 'react';
import { Spinner, Stack } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const AdminRoute = ({children, ...rest}) => {
  let {user,  admin} = useFirebase();
  let location = useLocation();

  if (!admin) { return <Stack >
  <Spinner animation="border" className='mx-auto ' variant="danger" />
  </Stack> }
  if (user.email && admin) {
    return children;
}
return <Navigate to="/home" state={{ from: location }} />;
};

export default AdminRoute;
