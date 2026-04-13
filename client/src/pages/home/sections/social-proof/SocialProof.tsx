import Card from "@/components/card/Card"
import './SocialProof.scss'


type TAchievement = {
  title: string;
  body: string;
}

const Achievements: TAchievement[] = [
  {
    title: "93%",
    body: 'Customers who sy using RCC has made them better',
  },
  {
    title: "93%",
    body: 'Customers who sy using RCC has made them better',
  },
  {
    title: "93%",
    body: 'Customers who sy using RCC has made them better',
  },
]

const Certificates = [
  {
    title: 'Health Cerfiticate',
    img: 'img',
  },
  {
    title: 'Health Cerfiticate',
    img: 'img',
  },
  {
    title: 'Health Cerfiticate',
    img: 'img',
  },
  {
    title: 'Health Cerfiticate',
    img: 'img',
  }
]


const SocialProof = () => {
  return (
    <section className="social-proof" >
      <h2 className="heading heading--2">Roe Cancer Center is a leading cancer care <br /> provider  serving  Taguig City.</h2>
      <div className="social-proof__content">
        <div className="social-proof__certificates">
          {Certificates.map((cert, index) => (
            <Card key={index} title={cert.title}><div>Hello</div></Card>
          ))}
        </div>
        <div className="social-proof__cards">
          {Achievements.map((achievement, index) => (
            <Card key={index} title={achievement.title} variant='outlined'>
              {achievement.body}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SocialProof;
