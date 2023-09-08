/**------------------------------------------------------------**/
const Sniper: React.FunctionComponent<{
  isHovered?: boolean;
  borderColor?: string;
}> = ({ borderColor, isHovered }) => {
  /**JSX**/
  return (
    <div className={`relative fc w-full h-full ${isHovered ? 'group' : ''}`}>
      <div
        className={` absolute top-0 left-0 h-[20%] w-[20%] border-t border-l ${
          borderColor ? borderColor : 'border-light'
        } opacity-60 group-hover:opacity-100 group-hover:h-[25%] group-hover:w-[25%] group-hover:border-corpo duration-[0.6s] ease-in delay-[0.1s]`}
      />

      <div
        className={`absolute bottom-0 left-0 h-[20%] w-[20%] border-b border-l ${
          borderColor ? borderColor : 'border-light'
        } opacity-60 group-hover:opacity-100 group-hover:h-[25%] group-hover:w-[25%] group-hover:border-corpo duration-[0.6s] ease-in delay-[0.1s]`}
      />
      <div
        className={`absolute bottom-0 right-0 h-[20%] w-[20%] border-b border-r ${
          borderColor ? borderColor : 'border-light'
        } opacity-60 group-hover:opacity-100 group-hover:h-[25%] group-hover:w-[25%] group-hover:border-corpo duration-[0.6s] ease-in delay-[0.1s]`}
      />
      <div
        className={`absolute top-0 right-0 h-[20%] w-[20%] border-t border-r ${
          borderColor ? borderColor : 'border-light'
        } opacity-60 group-hover:opacity-100 group-hover:h-[25%] group-hover:w-[25%] group-hover:border-corpo duration-[0.6s] ease-in delay-[0.1s]`}
      />
    </div>
  );
};

export default Sniper;

// <div className="relative w-full h-full fc group">
//   <div
//     className={`absolute top-0 left-0 h-[20%] w-[20%] border-t border-l ${
//       borderColor ? borderColor : 'border-light'
//     } opacity-60 group-hover:opacity-100 group-hover:h-[70%]  duration-[0.4s] ease-in delay-[0.2s]`}
//   />
//   <div
//     className={`absolute bottom-0 left-0 h-[20%] w-[20%] border-b border-l ${
//       borderColor ? borderColor : 'border-light'
//     } opacity-60 group-hover:opacity-100 group-hover:w-[70%] duration-[0.4s] ease-in delay-[0.2s]`}
//   />
//   <div
//     className={`absolute bottom-0 right-0 h-[20%] w-[20%] border-b border-r ${
//       borderColor ? borderColor : 'border-light'
//     } opacity-60 group-hover:opacity-100 group-hover:h-[70%] duration-[0.4s] ease-in delay-[0.2s]`}
//   />
//   <div
//     className={`absolute top-0 right-0 h-[20%] w-[20%] border-t border-r ${
//       borderColor ? borderColor : 'border-light'
//     } opacity-60 group-hover:opacity-100 group-hover:w-[70%] duration-[0.4s] ease-in delay-[0.2s]`}
//   />
// </div>

// <motion.div
//   className={`flex justify-between flex-col w-full h-full ${
//     containerStyle ? containerStyle : ''
//   }`}
//   // whileHover={whileHover}
//   // transition={transition}
// >
//   <div
//     className={`flex justify-between w-full ${height ? height : 'h-[20%]'}`}
//   >
//     <div
//       className={`${width ? width : 'w-[20%]'} h-full border-t border-l ${
//         borderColor ? borderColor : 'border-grey'
//       } `}
//     />
//     <div
//       className={`${width ? width : 'w-[20%]'} h-full border-t border-r ${
//         borderColor ? borderColor : 'border-grey'
//       }`}
//     />
//   </div>
//   {children}
//   <div
//     className={`flex justify-between w-full ${height ? height : 'h-[20%]'}`}
//   >
//     <div
//       className={`${width ? width : 'w-[20%]'} h-full border-b border-l ${
//         borderColor ? borderColor : 'border-grey'
//       }`}
//     />
//     <div
//       className={`${width ? width : 'w-[20%]'} h-full border-b border-r ${
//         borderColor ? borderColor : 'border-grey'
//       }`}
//     />
//   </div>
// </motion.div>
