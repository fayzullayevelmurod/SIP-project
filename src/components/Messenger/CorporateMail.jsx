import "./messenger.scss";
import { Avatar } from "@consta/uikit/Avatar";
import { Text } from "@consta/uikit/Text";
import { Button } from "@consta/uikit/Button";
import { IconBookmarkStroked } from "@consta/icons/IconBookmarkStroked";
import { IconCalendar } from "@consta/icons/IconCalendar";
import { IconPrinterStroked } from "@consta/icons/IconPrinterStroked";
import { Attachment } from "@consta/uikit/Attachment";
import { IconDownload } from "@consta/icons/IconDownload";
import { IconChatFilled } from "@consta/icons/IconChatFilled";
import { IconReply } from "@consta/icons/IconReply";
import { IconTrash } from "@consta/icons/IconTrash";
import { IconKebab } from "@consta/icons/IconKebab";
import { IconBackward } from "@consta/icons/IconBackward";
import { data, extractDate } from "../../helpers/chatData";
import { useNavigate, useParams } from "react-router-dom";

const Mail = ({ show }) => {
  const { id } = useParams();
  const selectedChat = data
    .flatMap((chat) => chat.items)
    .find((chatItem) => chatItem.id == id);

  const { name, msgTime, avatarImg } = selectedChat;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/messenger");
  };

  return (
    <div className={`mail-layout ${show ? "show" : ""}`}>
      <div>
        <div className="mail-header">
          <div className="avatar-box flex">
            <Button
              size="xs"
              view="clear"
              iconLeft={IconBackward}
              onClick={handleNavigate}
              className="media-block__btn"
            />
            <Avatar size="x" url={avatarImg} name={name} />
            <Text size="xs">{name}</Text>
          </div>
          <div className="mail-date">
            <Text className="media-none" view="secondary" size="xs">
              {msgTime}
            </Text>
            <Text className="media-block" view="secondary" size="xs">
              {extractDate(msgTime)}
            </Text>
          </div>
        </div>
        <div className="chat-title__box">
          <Text as="h2" size="xxl" view="primary">
            Технологический лидер нефтегазового рынка России
          </Text>
          <div className="right-btns">
            <Button
              label="Событие"
              view="ghost"
              size="s"
              iconLeft={IconCalendar}
            />
            <Button
              label="Избранное"
              view="ghost"
              size="s"
              iconLeft={IconBookmarkStroked}
            />
            <Button
              label="Печать"
              view="ghost"
              size="s"
              iconLeft={IconPrinterStroked}
            />
          </div>
        </div>
        <div className="chat-body">
          <img
            className="chat-content__img"
            src="https://picsum.photos/606/331"
            alt=""
          />
          <div className="chat-content">
            <Text className="chat-desc" as="p" size="s" view="primary">
              «Газпром нефть» — технологический лидер нефтегазового рынка
              России.
            </Text>
            <Text className="chat-desc" as="p" size="s" view="primary">
              Мы производим качественные топливо, масла и битумы для бизнеса и
              розничных покупателей, заправляем самолеты, развиваем сеть АЗС.
              Новые технологии позволяют нам постоянно повышать эффективность
              работы и снижать воздействие на окружающую среду.
            </Text>
            <Text className="chat-desc" as="p" size="s" view="primary">
              Горячая линия «Газпром нефти» (бесплатный звонок по России).
              Обратная связь. Все контакты. Контакты сети АЗС.
            </Text>
          </div>
          <div className="line"></div>
          <div className="attach-boxes">
            <Attachment
              fileName="Презентация"
              fileExtension="pdf"
              withPictogram
              size="m"
              fileDescription="1,5 Mб  21.02.2019, 14:12"
              buttonIcon={IconDownload}
              buttonTitle="Download"
              onButtonClick={true}
            />

            <Attachment
              fileName="Список партнеров"
              fileExtension="docx"
              withPictogram
              size="m"
              fileDescription="1,5 Mб  21.02.2019, 14:12"
              buttonIcon={IconDownload}
              buttonTitle="Download"
              onButtonClick={true}
            />
          </div>
        </div>
      </div>
      <div className="chat-footer">
        <div className="chat-footer__btns">
          <Button
            iconLeft={IconChatFilled}
            label="Ответить"
            size="xs"
            view="ghost"
          />
          <Button
            iconLeft={IconReply}
            label="Переслать"
            size="xs"
            view="ghost"
          />
        </div>
        <div className="chat-footer__btns">
          <Button iconLeft={IconTrash} size="xs" view="ghost" />
          <Button iconLeft={IconKebab} size="xs" view="ghost" />
        </div>
      </div>
    </div>
  );
};

export default Mail;
