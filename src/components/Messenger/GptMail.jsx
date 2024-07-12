import React from "react";
import GptChat from "./GptChat";
import { gptData } from "../../helpers/GPTData";
import { useParams } from "react-router-dom";
const GptMail = () => {
  const { id } = useParams();
  const selectedChat = gptData.find((item) => item.id == id);
  
  return (
    <div className="gpt-mail">
      <GptChat selectedChat={selectedChat} />
    </div>
  );
};

export default GptMail;
