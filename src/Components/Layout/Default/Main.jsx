import React from 'react'
import {Container} from "react-bootstrap";
import {Texts} from "../../Texts/Texts";
import {Images} from "../../../assets/Images";

const Main = () => {

  return (
      <main>
        <Container style={{width:"80%"}} className='mt-4'>
          <h1>Itaplas</h1>
          <div className='d-flex align-items-center gap-5'>
            <span style={{textAlign:'justify'}}>
              {Texts.main.aboutUs}
            </span>
            <div>
              <img style={{width:400}} src={Images.EcoConscious} alt=""/>
            </div>
          </div>

          <div className='d-flex align-items-center gap-5 mt-4'>
            <div>
              <img style={{width:400}} src={Images.Start} alt=""/>
            </div>

            <span style={{textAlign:'justify'}}>
              {Texts.main.start}
            </span>
          </div>

          <div className='d-flex align-items-center gap-5 mt-4'>
            <span style={{textAlign:'justify'}}>
              {Texts.main.mission}
            </span>

            <div>
              <img style={{width:400}} src={Images.Rocket} alt=""/>
            </div>
          </div>

        </Container>
      </main>
  )
}

export default Main