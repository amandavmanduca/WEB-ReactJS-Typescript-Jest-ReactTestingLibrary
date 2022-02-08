import React, { memo, useMemo } from 'react'

import { ValidationRule } from 'fastest-validator'
import { Field, useField } from 'react-final-form'
import { fv } from '../../../features/common/validation'
import IMask from 'imask'
import styles from '../index.module.css'

export type MaskInputProps = {
  name: string
  label: string
  mask: any
  type?: string
  validate?: ValidationRule
  errorFieldName?: string
  maskedFunction?: any
}

export const MaskInput = memo(
  ({
    name,
    label,
    mask,
    validate,
    maskedFunction,
    errorFieldName,
  }: MaskInputProps) => {
    const masked = useMemo(
        () =>
            IMask.createMask({
                mask,
            }),
        [mask],
    )

    const { input, meta } = useField(name, {
        format(value) {
            if (maskedFunction) {
              return maskedFunction(value)
            } else {
              return value
            } 
        },
        parse(value) {
            masked.resolve(value ?? '')
            return masked.unmaskedValue
        },
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
        {() => (
            <div>
                <label htmlFor={input.name}>
                    <p className={styles.inputLabel}>
                        {label}
                    </p>
                </label>
                <input
                    {...input}
                    className={styles.formInput}
                    id={input.name}
                    data-testid="mask-input"
                />
                <div>
                {meta.error?.[0]?.message && (
                    <span data-testid="mask-input-validation-error" className={styles.inputErrorMessage}>{meta.error?.[0]?.message}</span>
                )}
                </div>
            </div>
        )}
        </Field>
    )
  },
)

