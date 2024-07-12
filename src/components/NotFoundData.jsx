import { Text } from "@consta/uikit/Text"
import { cnMixSpace } from "@consta/uikit/MixSpace"
import assets from '../assets'

const NotFoundData = () => {
  return (
    <div className="not-found">
      <Text className="not-found-title" view="primary" as="h2">Данные не найдены</Text>
      <div className="null-content">
        <img src={assets.notFoundImg} alt="" />
        <Text view="primary" size="lg" weight="semibold" className={cnMixSpace({
          mB: 'xs',
        })}>
          Выберите обьект
        </Text>
        <Text view="secondary" size="s">
          Пока тут пусто
        </Text>
      </div>
    </div>
  )
}

export default NotFoundData