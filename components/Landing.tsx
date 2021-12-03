import { Hustle } from '../types'
import styled from 'styled-components'

interface Props {
  hustle: Hustle
}
function Landing({ hustle }: Props) {
  return (
    <LandingContainer>
      <NavbarDiv>
        <SearchInput type="text" name="Search" id="" placeholder="Search for a product..." />
        <NavbarLink href="#">Cart</NavbarLink>
      </NavbarDiv>
      <HustleImages>
        <HustleBanner src={hustle.shop_banner} alt="Hustle Sneaker Shop" width="" height="200px" />
        <HustleLogo src={hustle.shop_logo} alt="Hustle Sneaker Shop" width="" height="50px" />
      </HustleImages>
      <HustleTitle>{hustle.name}</HustleTitle>
      <HustleDescription>Home of the best shoes in town. Get free delivery for orders above KES 5000 countrywide.
        This is a store description area. We can define number of characters
      </HustleDescription>
      <HustleSocials>
        <HustleSocialLink href="#">Facebook</HustleSocialLink> /
        <HustleSocialLink href="#">Instagram</HustleSocialLink> /
        <HustleSocialLink href="#">Youtube</HustleSocialLink>
      </HustleSocials>
    </LandingContainer>
  );
}
const LandingContainer = styled.div`
  margin: 20px;
`
const NavbarDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 10px;
`
const NavbarLink = styled.a`
  display: inline-block;
  margin: 20px 10px 10px 10px;
`
const SearchInput = styled.input`
  width: 80%;
  color: #888;
  border: none;
  display: inline-block;
  margin: 20px 10px 10px 10px;
  font-size: 17px;
  outline: none;
  padding: 5px 10px;
`
const HustleImages = styled.div`
  width: 100%;
  position: relative;
`
const HustleBanner = styled.img`
  border-radius: 5px;
  height: 350px;
  width: 100%;
  object-fit: cover;
  display: block;
`
const HustleLogo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  top: 300px;
  left: 46%;
  display: block;
  border: 3px #fff solid;
`
const HustleTitle = styled.h4`
  margin-top: 60px;
  font-weight: 600px;
  font-size: 20px;
  margin-bottom: 10px
`
const HustleDescription = styled.p`
  color: #888;
  font-size: 15px;
  width: 70%;
  margin: 10px auto;
  line-height: 20px
`
const HustleSocials = styled.div`
  text-align: center;
  color: #888
`
const HustleSocialLink = styled.a`
  text-decoration: underline;
  display: inline-block;
  margin: 10px;
`
export default Landing;