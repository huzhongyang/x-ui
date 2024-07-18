import type { Component, Ref } from 'vue'

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'
export type NativeType = 'button' | 'submit' | 'reset'
export type ButtonSize = 'large' | 'default' | 'small'

export interface ButtonProps {
  tag?: string | Component
  type?: ButtonType
  size?: ButtonSize
  nativeType?: NativeType
  plain?: boolean
  round?: boolean
  circle?: boolean
  loading?: boolean
  disabled?: boolean
  icon?: string
  loadingIcon?: string
  autofocus?: boolean
  useThrottle?: boolean
  useDebounce?: boolean
}

export interface ButtonInstance {
  ref: Ref<HTMLButtonElement | void>
}
