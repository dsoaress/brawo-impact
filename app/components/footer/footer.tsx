import { Text } from '../text'
import { LinkedinIcon } from './assets/linkedin-icon'
import { Logo } from './assets/logo'
import {
  Box,
  CopyRightWrapper,
  FooterLogoWrapper,
  FooterWrapper,
  Link,
  LinksWrapper
} from './style'

export function Footer() {
  return (
    <FooterWrapper>
      <Box>
        <FooterLogoWrapper>
          <Logo />
        </FooterLogoWrapper>
        <LinksWrapper>
          <Link href="/">
            <Text size="xs">Mentions Légales</Text>
          </Link>
          <Link href="/" aria-label="Linkedin" target="_blank" rel="noreferrer noopener">
            <LinkedinIcon width={19} />
          </Link>
        </LinksWrapper>
      </Box>
      <CopyRightWrapper>
        <Text size="xs" weight="normal">
          Brawo Impact {new Date().getFullYear()} © Copyright - Tous droits réservés
        </Text>
      </CopyRightWrapper>
    </FooterWrapper>
  )
}
