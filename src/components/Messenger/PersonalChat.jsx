import { Button } from "@consta/uikit/Button";
import { IconBackward } from "@consta/icons/IconBackward";
import { IconSettings } from "@consta/icons/IconSettings";
import { IconUser } from "@consta/icons/IconUser";
import "./messenger.scss";
import { Text } from "@consta/uikit/Text";
import { Avatar } from "@consta/uikit/Avatar";
import SendMsgInput from "../SendMsgInput";
import { useNavigate, useParams } from "react-router-dom";
import { data } from "../../helpers/chatData";
const PersonalChat = ({ show }) => {
  const { id } = useParams();
  
  const selectedChat = data
    .flatMap((group) => group.items)
    .find((item) => item.id == id);

  const { name, avatarImg } = selectedChat;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/messenger");
  };

  return (
    <div className={`personal-chat ${show ? "show" : ""}`}>
      <div className="personal-chat__header">
        <div className="left-box">
          <Button
            size="xs"
            view="clear"
            iconLeft={IconBackward}
            onClick={handleNavigate}
          />
          <Text className="title">{name}</Text>
        </div>
        <div className="right-box">
          <Button size="xs" view="clear" iconLeft={IconUser} />
          <Button size="xs" view="clear" iconLeft={IconSettings} />
        </div>
      </div>
      <div className="personal-chat__content">
        <div className="chat-date">
          <Text size="xs" view="secondary">
            10 декабря в 20:50
          </Text>
        </div>
        <div className="user-chat__card">
          <div className="user-chat__avatar">
            <Avatar size="s" name={name} url={avatarImg} />
          </div>
          <div className="user-msgs">
            <div className="user-msg">
              <Text className="msg-text" as="p" size="xs" view="primary">
                Привет всем! Сейчас провожу исследование. Минералы всегда такие
                удивительные, каждый из них какая-то маленькая часть истории
                нашей планеты.
              </Text>
              <Text className="msg-date" size="2xs" view="secondary">
                20 декабря в 20:50
              </Text>
            </div>
            <div className="user-msg">
              <Text className="msg-text" as="p" size="xs" view="primary">
                Как прошел ваш день на поле?
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
            <Avatar size="s" name={name} url={avatarImg} />
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
            <Avatar size="s" name={name} url={avatarImg} />
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
export default PersonalChat;
