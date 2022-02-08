import React, { memo } from 'react'

import { ValidationRule } from 'fastest-validator'
import { Field, useField } from 'react-final-form'
import { fv } from '../../../features/common/validation'
import styles from '../index.module.css'

export type TextInputProps = {
  name: string
  label: string
  type?: string
  validate?: ValidationRule
  errorFieldName?: string
}

export const TextInput = memo(
  ({
    name,
    label,
    validate,
    errorFieldName,
  }: TextInputProps) => {
    const { input, meta } = useField(name, {
      validate:
        ((value) => {
          let key = label ?? errorFieldName
          key = key.replace(':', '')
          const validation = fv.validate(
            {
              [key]: value,
            },
            {
              [key]: validate,
            },
          )
          return Array.isArray(validation) ? validation : false
        }),
    })

    return (
        <Field
            id={input.name}
            name={name}
        >
        {props => (
            <div>
                <label htmlFor={props.input.name}>
                  <p className={styles.inputLabel}>
                      {label}
                  </p>
                </label>
                <input
                    name={props.input.name}
                    value={props.input.value}
                    id={props.input.name}
                    onChange={props.input.onChange}
                    className={styles.formInput}
                    data-testid="text-input"
                />
                <div>
                {meta.error?.[0]?.message && (
                    <span data-testid="text-input-validation-error" className={styles.inputErrorMessage}>{meta.error?.[0]?.message}</span>
                )}
                </div>
            </div>
        )}
        </Field>
    )
  },
)

