import React, { memo } from 'react'

import { ValidationRule } from 'fastest-validator'
import { Field, useField } from 'react-final-form'
import { fv } from '../../../features/common/validation'
import styles from '../index.module.css'

export type SelectInputProps = {
  name: string
  label: string
  type?: string
  options?: any
  children?: any
  validate?: ValidationRule
  errorFieldName?: string
}

export const SelectInput = memo(
  ({
    name,
    label,
    children,
    options,
    validate,
    errorFieldName,
  }: SelectInputProps) => {
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
                <label htmlFor={input.name}>
                  <p className={styles.inputLabel}>
                      {label}
                  </p>
                </label>
                <select
                    {...input}
                    {...props}
                    className={styles.formInput}
                    id={input.name}
                    data-testid="select-input"
                >
                    <option key="" value=""></option>
                    {options.map((option: any) => (
                      <option
                        key={option.value}
                        value={option.value}>
                          {option.label}
                      </option>
                    ))}
                </select>
                <div>
                {meta.error?.[0]?.message && (
                    <span data-testid="select-input-validation-error" className={styles.inputErrorMessage}>{meta.error?.[0]?.message}</span>
                )}
                </div>
            </div>
        )}
        </Field>
    )
  },
)

