import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import RocketIcon from './icons/rocket.js'


import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(45deg);
  }
`

const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox>
          <RocketIcon />
          <Text
            color={useColorModeValue("black")}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
            ml={3}
          >
            Tim Inthavong
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
