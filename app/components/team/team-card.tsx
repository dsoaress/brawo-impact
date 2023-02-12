import { Avatar, Content, Role, Title, Wrapper } from './styles/team-card.style'

interface Team {
  name: string
  role: string
  image: {
    url: string
    alt: string
    width: number
    height: number
    blurhash: string
  }
}

export function TeamCard({ image, name, role }: Team) {
  return (
    <Wrapper>
      <Content>
        <Avatar
          alt={image.alt}
          src={image.url}
          width={image.width}
          height={image.height}
          blurDataURL={image.blurhash}
          placeholder="blur"
        />
        <Title>{name}</Title>
        <Role>{role}</Role>
      </Content>
    </Wrapper>
  )
}
