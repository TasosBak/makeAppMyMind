import React from "react";

import { OptionItem } from "./OptionItem";

// export class Options extends Component {
//   render() {
//     const { options, handleDeleteOptions } = this.props;

//     return (
//       <div>
//         {options && options.length > 0
//           ? options.map((option) => (
//               <OptionItem option={option} key={option}></OptionItem>
//             ))
//           : "No options available"}

//         <button onClick={handleDeleteOptions}>Remove All</button>
//       </div>
//     );
//   }
// }

export const Options = ({
  options,
  handleDeleteOptions,
  handleDeleteOption,
}) => {
  return (
    <div>
      {options && options.length > 0
        ? options.map((option) => (
            <OptionItem
              option={option}
              key={option}
              handleDeleteOption={handleDeleteOption}
            ></OptionItem>
          ))
        : "No options available"}

      <button onClick={handleDeleteOptions}>Remove All</button>
    </div>
  );
};
