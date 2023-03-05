'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { Button } from '../button'
import { Input } from '../input'
import { Text } from '../text'
import { Textarea } from '../textarea'
import styles from './styles.module.css'

const schema = yup.object().shape({
  firstName: yup.string().required('Prénom requis'),
  lastName: yup.string().required('Nom requis'),
  email: yup.string().email('Email invalide').required('Email requis'),
  phone: yup.string().required('Téléphone requis'),
  // subject: yup.string().required('Sujet requis'),
  message: yup.string().required('Message requis')
})

type FormData = yup.InferType<typeof schema>

export function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  const onSubmit: SubmitHandler<FormData> = async data => {
    try {
      await fetch('/contact/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      reset()
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formName}>
        <Input
          label="Prénom"
          {...register('firstName')}
          error={errors.firstName?.message}
          required
        />
        <Input label="Nom" {...register('lastName')} error={errors.lastName?.message} required />
      </div>
      <Input label="Email" {...register('email')} error={errors.email?.message} required />
      <Input label="Téléphone" {...register('phone')} error={errors.phone?.message} required />
      {/* <Input label="Sujet" {...register('subject')} error={errors.subject?.message} required /> */}
      <Textarea label="Message" {...register('message')} error={errors.message?.message} required />
      <div className={styles.formFooter}>
        <Text color="light">
          {isSubmitting ? 'Envoi en cours...' : isSubmitSuccessful ? 'Message envoyé!' : ''}
        </Text>
        <Button style="outline">Envoyer ma demande</Button>
      </div>
    </form>
  )
}
