import { FieldError } from 'react-hook-form'
import { InputHTMLAttributes } from 'react'
import { IconType } from 'react-icons'

export interface IFieldProps {
	error?: FieldError | undefined
	Icon?: IconType
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps

export interface IField extends TypeInputPropsField {}
