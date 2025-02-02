import Editor from './editor'

export type EditorByBot = { [botId: string]: Editor }

export interface TypingDefinitions {
  [file: string]: string
}

export type FileType =
  | 'action'
  | 'hook'
  | 'bot_config'
  | 'main_config'
  | 'module_config'
  | 'hook_example'
  | 'action_example'
  | 'raw'

export interface EditableFile {
  /** The name of the file, extracted from its location */
  name: string
  /** Content is preloaded only when filtering builtin files */
  content?: string
  /** Type of file allowed (used to determine storage) */
  type: FileType
  /** The relative location of the file of the specified type */
  location: string
  /** If not set, the file is considered global */
  botId?: string
  hookType?: string
  readOnly?: boolean
  /** Example files are a special type of file that can be copied locally */
  isExample?: boolean
}

export interface FilesDS {
  [type: string]: EditableFile[]
}

export interface FilePermissions {
  [key: string]: {
    type: string
    isGlobal?: boolean
    read: boolean
    write: boolean
  }
}

interface RequestWithPerms {
  permissions: FilePermissions
  params: any
  query?: any
  body: any
}
