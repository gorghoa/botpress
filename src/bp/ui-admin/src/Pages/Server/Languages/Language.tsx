import { Button, Position, ProgressBar, Tooltip } from '@blueprintjs/core'
import React, { FC, SFC, useState } from 'react'
import confirmDialog from '~/App/ConfirmDialog'

import api from '../../../api'

import { LanguageSource } from './typings'

interface Props {
  language: {
    code: string
    name: string
    size?: number
  }
  installed: boolean
  allowActions: boolean
  loaded: boolean
  languageSource: LanguageSource
  downloadProgress?: any
}

const units = ['bytes', 'Kb', 'Mb', 'Gb', 'Tb']
function bytesToFormatedString(bytes: number): string {
  const power = Math.log2(bytes)
  const unitNumber = Math.min(Math.floor(power / 10), 4)
  const mantisse = bytes / Math.pow(2, unitNumber * 10)
  return `${mantisse.toFixed(0)} ${units[unitNumber]}`
}

const DownloadProgress: SFC<{ current: number; total: number }> = props => {
  const value = props.current / props.total
  const formatedLoadingState = `${bytesToFormatedString(props.current)} / ${bytesToFormatedString(props.total)}`
  return (
    <Tooltip content={formatedLoadingState} position={Position.TOP}>
      <div style={{ width: '250px' }}>
        <ProgressBar value={value} />
      </div>
    </Tooltip>
  )
}

const Language: FC<Props> = props => {
  const [modelLoading, setLoading] = useState(false)

  const deleteLanguage = async () => {
    if (
      await confirmDialog(`Are you sure that you want to delete ${props.language.name} from the server?`, {
        acceptLabel: 'Delete'
      })
    ) {
      await api.getSecured().post(`/admin/languages/${props.language.code}/delete`)
    }
  }

  const installLanguage = async () => {
    await api.getSecured().post(`/admin/languages/${props.language.code}`)
  }

  const loadLanguage = async () => {
    setLoading(true)
    try {
      await api.getSecured({ timeout: 10000 }).post(`/admin/languages/${props.language.code}/load`)
    } catch (err) {
      console.log('error loading model')
    } finally {
      setLoading(false)
    }
  }

  const requireFlag = code => {
    try {
      return require(`../../../media/flags/${code}.svg`)
    } catch {
      return requireFlag('missing')
    }
  }

  return (
    <div className="language">
      <div>
        <div className="flag">
          <img src={requireFlag(props.language.code)} alt={props.language.code} />
        </div>
        <span>{props.language.name}</span>
      </div>
      <div className="action">
        {props.downloadProgress && (
          <DownloadProgress current={props.downloadProgress.progress.size} total={props.language.size!} />
        )}
        {props.allowActions && !props.downloadProgress && !props.installed && (
          <Button small onClick={installLanguage} minimal icon="import" />
        )}
        {props.allowActions && props.installed && !props.loaded && (
          <Button disabled={modelLoading} minimal icon="updated" onClick={loadLanguage}>
            {modelLoading ? 'loading' : 'Load'}
          </Button>
        )}
        {props.allowActions && props.installed && (
          <Button disabled={modelLoading} icon="cross" minimal onClick={deleteLanguage} />
        )}
      </div>
    </div>
  )
}

export default Language
