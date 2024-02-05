import { createContext, useState } from "react";

export const UpdateContext = createContext(null);

// function UpdateContextProvider({ child }) {
//   // 게시글 상세보기, 게시물을 담을 스테이트, 모달창 여닫음을 확인하는 스테이트
//   const [selectedComment, setSelectedComment] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <UpdateContext.Provider
//       value={{
//         selectedComment,
//         setSelectedComment,
//         isModalOpen,
//         setIsModalOpen,
//       }}
//     >
//       {child}
//     </UpdateContext.Provider>
//   );
// }
// export default UpdateContextProvider;
