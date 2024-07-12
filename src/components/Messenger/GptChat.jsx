import { Button } from "@consta/uikit/Button";
import { IconBackward } from "@consta/icons/IconBackward";
import { IconMeatball } from "@consta/icons/IconMeatball";
import "./messenger.scss";
import { Text } from "@consta/uikit/Text";
import { Avatar } from "@consta/uikit/Avatar";
import SendMsgInput from "../SendMsgInput";
import assets from "../../assets";
import { useNavigate } from "react-router-dom";

const GptChat = ({ selectedChat }) => {
  const { name } = selectedChat;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/chat-gpt");
  };

  return (
    <div className="personal-chat">
      <div className="personal-chat__header">
        <div className="flex gap-8">
          <Button
            className="prev-btn"
            size="xs"
            view="clear"
            onlyIcon
            iconLeft={IconBackward}
            onClick={handleNavigate}
          />
          <Text as="h3">{name}</Text>
        </div>
        <Button size="xs" view="clear" iconLeft={IconMeatball} />
      </div>
      <div className="personal-chat__content">
        <div className="chat-date">
          <Text size="xs" view="secondary">
            10 декабря в 20:50
          </Text>
        </div>
        <div className="my-chat__card">
          <div className="my-msgs">
            <div className="user-msg">
              <Text className="msg-text" as="p" size="xs">
                Привет! Что такое нефть и газ?
              </Text>
              <Text className="msg-date" size="2xs">
                20 декабря в 20:50
              </Text>
            </div>
          </div>
        </div>
        <div className="user-chat__card">
          <div className="user-chat__avatar">
            <Avatar size="s" name={name} url={assets.gptIcon} />
          </div>
          <div className="user-msgs">
            <div className="user-msg">
              <Text className="msg-text" as="p" size="xs" view="primary">
                Привет! Нефть - это природный ресурс, который представляет собой
                жидкость, состоящую из углеводородов, используемая в основном
                как сырье для производства бензина, дизельного топлива и других
                нефтепродуктов. Газ - это также углеводород, но в газообразной
                форме, используемый для обогрева, электроэнергии и в
                производстве химических продуктов.
              </Text>
              <Text className="msg-date" size="2xs" view="secondary">
                20 декабря в 20:50
              </Text>
            </div>
          </div>
        </div>
        <div className="my-chat__card">
          <div className="my-msgs">
            <div className="user-msg">
              <Text className="msg-text" as="p" size="xs">
                Привет всем! Сейчас провожу исследование. Минералы всегда такие
                удивительные, каждый из них какая-то маленькая часть истории
                нашей планеты.
              </Text>
              <Text className="msg-date" size="2xs">
                20 декабря в 20:50
              </Text>
            </div>
          </div>
        </div>
        <div className="user-chat__card">
          <div className="user-chat__avatar">
            <Avatar size="s" name={name} url={assets.gptIcon} />
          </div>
          <div className="user-msgs">
            <div className="user-msg">
              <Text className="msg-text" as="p" size="xs" view="primary">
                Да, и это так важно для нашей работы. Мы стремимся раскрыть все
                тайны и загадки нашей планеты, и каждый новый находка приближает
                нас к этой цели.
              </Text>
              <Text className="msg-date" size="2xs" view="secondary">
                20 декабря в 20:50
              </Text>
            </div>
          </div>
        </div>

        <div className="chat-date">
          <Text size="xs" view="secondary">
            20 декабря в 12:30
          </Text>
        </div>

        <div className="user-chat__card">
          <div className="user-chat__avatar">
            <Avatar size="s" name={name} url={assets.gptIcon} />
          </div>
          <div className="user-msgs">
            <div className="user-msg">
              <Text className="msg-text" as="p" size="xs" view="primary">
                Да, и это так важно для нашей работы. Мы стремимся раскрыть все
                тайны и загадки нашей планеты, и каждый новый находка приближает
                нас к этой цели.
              </Text>
              <Text className="msg-date" size="2xs" view="secondary">
                20 декабря в 20:50
              </Text>
            </div>
          </div>
        </div>
        <SendMsgInput />
      </div>
    </div>
  );
};

export default GptChat;
