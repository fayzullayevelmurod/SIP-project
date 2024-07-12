import React from 'react'
import { Button } from '@consta/uikit/Button'
import { IconAttach } from '@consta/icons/IconAttach';
import { IconTop } from '@consta/icons/IconTop';
import { IconSmileStroked } from '@consta/icons/IconSmileStroked';
import { DragNDropField } from '@consta/uikit/DragNDropFieldCanary';


const SendMsgInput = () => {
  return (
    <div className='send-msg__box'>
      <div className='box left'>
        <DragNDropField>
          {({ openFileDialog }) => (
            <>
              <Button iconLeft={IconAttach} size='xs' view='clear' onClick={openFileDialog} />
            </>
          )}
        </DragNDropField>
        <textarea className='send-msg__input' rows={1} placeholder='Введите сообщение'></textarea>
      </div>
      <div className='box'>
        <Button iconLeft={IconSmileStroked} size='xs' view='clear' />
        <Button iconLeft={IconTop} size='xs' view='primary' />
      </div>
    </div>
  )
}

export default SendMsgInput