import React from 'react'
import Icon1 from '../../images/factory.svg'
import Icon2 from '../../images/tableware.svg'
import Icon3 from '../../images/book.svg'
import { ServicesContainer, ServicesIcon, ServicesWrapper, ServicesH1, ServicesH2, ServicesP, ServicesCard} from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Reclaimed wood</ServicesH2>
                <ServicesP>Recycling And Reusing </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>TableWare</ServicesH2>
                <ServicesP>Stylish And Elegant</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Wooden Case</ServicesH2>
                <ServicesP>Essential Minimalists</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services