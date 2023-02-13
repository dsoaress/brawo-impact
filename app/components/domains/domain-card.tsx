import { Text } from '../text'
import type { Domain } from './domains-section'
import { CardWrapper, Heading, IconWrapper } from './style'

export function DomainCard({ description, icon, title }: Domain) {
  return (
    <CardWrapper>
      <IconWrapper>
        {icon}
        <Heading as="h3" color="accent">
          {title}
        </Heading>
      </IconWrapper>
      <Text font="quicksand" weight="medium" size="xs">
        {description}
      </Text>
    </CardWrapper>
  )
}
