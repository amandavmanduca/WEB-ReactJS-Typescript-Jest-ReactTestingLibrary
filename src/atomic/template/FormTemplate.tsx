import React from 'react'
import { Form } from 'react-final-form'
import { Button } from '../atom/Button'

export const FormTemplate = ({
    formProps,
    buttonLabel,
    onCancel,
    ...props
}: any) => {
    return (
        <Form {...formProps}>
        {({
          handleSubmit,
          form,
          hasValidationErrors,
        }) => (
          <div {...props}>
            <div>
              {props.children &&
                React.cloneElement(props.children as any, { form })}
            </div>
            <div style={{ display: 'flex', gap: '10px', padding: '20px 0px', flexWrap: 'wrap' }}>
              <Button
                disabled={hasValidationErrors}
                onClick={(event: any) => handleSubmit(event)}
              >
                {buttonLabel}
              </Button>
              <Button
                onClick={onCancel}
                type={'secondary'}
              >
                  Cancelar
              </Button>
            </div>
          </div>
        )}
      </Form>
    )
}