import { Avatar, CardContent, CardHeading, CardText, CardWrapper } from './style'

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
    <CardWrapper>
      <CardContent>
        <Avatar
          alt={image.alt}
          src={image.url}
          width={image.width}
          height={image.height}
          blurDataURL={image.blurhash}
          placeholder="blur"
        />
        <CardHeading as="h3" color="accent">
          {name}
        </CardHeading>
        <CardText font="raleway" weight="semibold">
          {role}
        </CardText>
      </CardContent>
    </CardWrapper>
  )
}
