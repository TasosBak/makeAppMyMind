import React from "react";

import Navbar from "react-bootstrap/Navbar";

import styled from "styled-components";

// const Styles = styled.div`
//   .navbar {
//     background-color: #20222b;
//   }

//   .navbar-brand {
//     color: #d2ccc4;
//     &:hover {
//       color: #d2ccc4;
//     }
//   }
// `;

// export const Header = ({ title, subtitle }) => (
//   <Styles>
//     <Navbar expand="lg">
//       <Navbar.Brand className="col-md-6 offset-md-3 ">
//         {title}
//         <br />
//         {subtitle}
//       </Navbar.Brand>
//     </Navbar>
//   </Styles>
// );

export class Header extends React.Component {
  render() {
    const { title, subtitle } = this.props;
    const Styles = styled.div`
      .navbar {
        background-color: #20222b;
      }

      .navbar-brand {
        color: #d2ccc4;
        &:hover {
          color: #d2ccc4;
        }
      }
    `;
    return (
      <Styles>
        <Navbar expand="lg">
          <Navbar.Brand className="col-md-6 offset-md-3 ">
            {title}
            <br />
            {subtitle}
          </Navbar.Brand>
        </Navbar>
      </Styles>
    );
  }
}

Header.defaultProps = {
  title: "Default Title",
};
