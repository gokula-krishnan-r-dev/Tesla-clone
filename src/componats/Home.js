import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
      <Section
        title='Model S'
        description='Order Online for Touchless Delivery'
        backgroundImg='https://yt3.ggpht.com/URIi4aND7NsUFBx0aV996zu7wCgATCVokvqu9T3fFggRUO9Gc-yPpSAuupeScO9mDxXlE4jbsg=s88-c-k-c0x00ffffff-no-rj'
        leftBtnText='Custom order'
        rightBtnText='Exisiting inventory'
      />
      <Section
        title='Model 3'
        description='Order Online for Touchless Delivery'
        backgroundImg='model-s.jpg'
        leftBtnText='Custom order'
        rightBtnText='Exisiting inventory'
      />
      <Section
        title='Model X'
        description='Order Online fro Touchless Delivery'
        backgroundImg='model-x.jpg'
        leftBtnText='Custom order'
        rightBtnText='Exisiting inventory'
      />
      <Section
        title='Model Y'
        description='Order Online fro Touchless Delivery'
        backgroundImg='model-y.jpg'
        leftBtnText='Custom order'
        rightBtnText='Exisiting inventory'
      />
      <Section
        title='Lowerst Cost Solar Panels in America'
        description='Money-back guarantee'
        backgroundImg='solar-panel.jpg'
        leftBtnText='Oder now'
        rightBtnText='Learn more'
      ></Section>
      <Section
        title='Solar for New Roofs'
        description='Solar Roof Costs Less Than a New'
        backgroundImg='solar-roof.jpg'
        leftBtnText='Oder now'
        rightBtnText='Learn more'
      ></Section>
      <Section
        title='Accessories'
        description=''
        backgroundImg='accessories.jpg'
        leftBtnText='Shop now'
      ></Section>
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
`
