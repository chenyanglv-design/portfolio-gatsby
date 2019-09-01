import React from 'react'
import Work from '../components/work'
import staticdata from '../staticdata.json'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isScrolled: false,
    }
  }

  handleScroll = (event) => {
    const offsetY = window.pageYOffset

    if (offsetY > 5) {
      this.setState({ isScrolled: true })
    } else {
      this.setState({ isScrolled: false })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    // this.effect = window.VANTA.FOG({
    //   el: '#background',
    //   highlightColor: 0x38b09c,
    //   midtoneColor: 0x121e47,
    //   lowlightColor: 0x6f0a36,
    //   baseColor: 0x0a011f,
    //   blurFactor: 0.90,
    //   zoom: 0.3,
    //   speed: 1.00
    // })
    this.effect = window.VANTA.FOG({
      el: '#background',
      highlightColor: 0x666666,
      midtoneColor: 0x0,
      lowlightColor: 0x7265af,
      baseColor: 0x0,
      blurFactor: 0.90,
      speed: 2.00,
      zoom: 0.50
    })


  }
  
  componentWillUnmount() {
    if (this.effect) this.effect.destroy()
  }
  
  render() {
    return (
      <div>
        <div id="background"> </div>
        <div className="container">
          <div className="containerGroup">
            <h1>I am Zander / Zhen - <br/> a fresh UX designer + engineer <br/> into engaging design, bold solutions & elegant craftmanship.</h1>
            <hr/>
          </div>
          
          <div className={this.state.isScrolled ? 'containerGroup' : 'containerGroup containerGroupDeactivated'}>
            <div className="cardsGroup">
              {Object.keys(staticdata.works).map(key => ( staticdata.works[key].selected ?
                <Work 
                  image={require("../images/"+(staticdata.works[key].id==="#"?"default":staticdata.works[key].id)+"-cover.png")}
                  gradient_start={staticdata.works[key].gradient_start}
                  gradient_end={staticdata.works[key].gradient_end}
                  id={staticdata.works[key].id}
                  title={staticdata.works[key].title}
                  sub={staticdata.works[key].sub}
                  subtitle={staticdata.works[key].subtitle}
                  text={staticdata.works[key].text}
                  year={staticdata.works[key].year}
                  list="selected"
                /> : null
              ))}
            </div>
          </div>
        </div>
      </div>
  )
  }
} 

export default IndexPage
