import type { Metadata } from 'next/types'

import { BasePageLayout } from '../../components/base-page-layout'
import { Header } from '../../components/header'
import { Heading } from '../../components/heading'
import { Text } from '../../components/text'
import hero from './assets/hero.png'
import styles from './styles.module.css'

export default function MentionsLegales() {
  return (
    <>
      <Header />
      <BasePageLayout hero={hero}>
        <Heading color="accent" className={styles.heading}>
          Mentions Légales
        </Heading>
        <Text as="p" className={styles.text}>
          Parce que la transition durable nous oblige à repenser les métiers et les compétences,
          Brawo Impact s’engage aux côtés des entreprises pour les aider à recruter les talents
          d&apos;aujourd&apos;hui et de demain.
        </Text>

        <Text as="p" className={styles.text}>
          Lorem ipsum dolor sit amet consectetur. Semper euismod sapien libero vitae consequat eget
          in rhoncus. Mi commodo ultricies etiam duis nec a. Ut mauris egestas iaculis viverra dolor
          ornare proin lacinia feugiat. Massa orci velit mi volutpat velit eget est at a. Pretium
          rhoncus congue mattis eleifend vel nisl est dolor a.
        </Text>

        <Text as="p" className={styles.text}>
          Nisi in vulputate luctus sapien volutpat quisque non. Volutpat nec mi sed volutpat neque
          risus posuere consectetur. Sapien rhoncus egestas maecenas in imperdiet mattis morbi
          viverra. Libero fermentum congue purus mauris risus tellus auctor neque amet. Pharetra
          integer nisi sem purus.
        </Text>
      </BasePageLayout>
    </>
  )
}

export const metadata: Metadata = {
  title: 'Mentions Légales'
}
