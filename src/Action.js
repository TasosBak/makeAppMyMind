import React from "react";

// export class Action extends Component {
//   render() {
//     return (
//       <div>
//         <button
//           onClick={this.props.handlePick}
//           disabled={!this.props.hasOptions}
//         >
//           Action What should I do?
//         </button>
//       </div>
//     );
//   }
// }

export const Action = ({ handlePick, hasOptions }) => {
  return (
    <div>
      <button onClick={handlePick} disabled={!hasOptions}>
        Action What should I do?
      </button>
    </div>
  );
};
