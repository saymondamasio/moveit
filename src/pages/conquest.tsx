import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/pages/Conquest.module.css'

interface Props {
  level: number
  challenges: number
  experience: number
}

const Conquest: NextPage<Props> = ({ level, challenges, experience }) => {
  return (
    <div className="container-dashboard">
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`Vamos comemorar! Eu subi para o nível ${level}`}
        />
        <meta
          name="twitter:description"
          content={`Consegui um novo nível depois de completar ${challenges} desafios no Move.it! Acumulando ${experience} xp!`}
        />
        <meta
          name="og:description"
          content={`Consegui um novo nível depois de completar ${challenges} desafios no Move.it! Acumulando ${experience} xp!`}
        />
        <meta
          name="og:title"
          content={`Vamos comemorar! Eu subi para o nível ${level}`}
        />
        <meta
          name="twitter:image"
          content={`${process.env.NEXT_PUBLIC_APP_URL}/api/thumbnail.png?level=${level}&challenges=${challenges}&experience=${experience}`}
        />
        <meta
          name="og:image"
          content={`${process.env.NEXT_PUBLIC_APP_URL}/api/thumbnail.png?level=${level}&challenges=${challenges}&experience=${experience}`}
        />
      </Head>

      <div className={styles.container}>
        <main>
          <section>
            <div>
              <h2>${level}</h2>
            </div>
            <h1>
              Avancei para
              <br />o próximo level
            </h1>
          </section>
          <section>
            <ul>
              <li>
                <h2>desafios</h2>
                <p>
                  <span>${challenges}</span> completados
                </p>
              </li>
              <li>
                <h2>experiência</h2>
                <p>
                  <span>${experience}</span> xp
                </p>
              </li>
            </ul>
            <Link href="/">
              <a>
                <svg
                  width="360"
                  height="76"
                  viewBox="0 0 360 76"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_149852_247)">
                    <path
                      d="M154.522 33.5139L149.306 58.7967H135.718L140.934 33.5139C141.343 31.5267 141.106 31.1604 139.18 31.1604H134.275C132.362 31.1604 131.961 31.5267 131.557 33.4634C131.557 33.4634 131.557 33.4971 131.557 33.5139L126.34 58.7967H112.74L117.96 33.5139C118.369 31.5267 118.132 31.1604 116.202 31.1604H111.297C109.367 31.1604 108.979 31.5309 108.57 33.5139L103.35 58.7967H89.762L97.7701 19.9862H108.807L110.557 23.3208C111.564 22.2294 112.782 21.3684 114.133 20.7939C115.484 20.2193 116.937 19.9442 118.398 19.9862H121.214C126.528 19.9862 130.114 22.3651 131.397 26.3859C133.772 21.9146 137.214 19.9862 141.372 19.9862H144.192C152.176 19.9862 156.235 25.2954 154.522 33.5139Z"
                      fill="#5965e0"
                    />
                    <path
                      d="M195.961 33.5139L193.537 45.269C191.84 53.4875 185.586 58.7967 177.594 58.7967H167.301C159.321 58.7967 155.262 53.4833 156.959 45.2648L159.383 33.5139C161.075 25.2954 167.329 19.9862 175.325 19.9862H185.635C193.598 19.9862 197.662 25.2954 195.961 33.5139ZM182.361 33.5139C182.769 31.5266 182.532 31.1603 180.607 31.1603H175.701C173.772 31.1603 173.384 31.5308 172.975 33.5139L170.547 45.2648C170.138 47.2521 170.379 47.6184 172.304 47.6184H177.21C179.135 47.6184 179.528 47.2479 179.937 45.2648L182.361 33.5139Z"
                      fill="#5965e0"
                    />
                    <path
                      d="M280.764 30.4235C280.267 32.6298 279.067 34.6011 277.355 36.0232L270.434 41.9176C268.775 43.3548 266.687 44.1631 264.519 44.208H254.937L254.72 45.248C254.312 47.2352 254.549 47.6015 256.478 47.6015H277.212L274.906 58.7799H251.458C243.479 58.7799 239.42 53.4665 241.116 45.248L243.54 33.497C245.237 25.2785 251.491 19.9694 259.483 19.9694H269.801C277.76 19.9862 281.876 25.0175 280.764 30.4235ZM266.53 33.5139C266.939 31.5266 266.702 31.1603 264.773 31.1603H259.867C257.946 31.1561 257.537 31.5308 257.128 33.5139L256.311 37.56H264.405C264.768 37.5445 265.116 37.4074 265.396 37.1696C265.676 36.9317 265.874 36.6061 265.958 36.2422L266.53 33.5139Z"
                      fill="#5965e0"
                    />
                    <path
                      d="M296.041 52.2076C295.289 55.8495 292.497 58.8009 288.274 58.8009C284.051 58.8009 282.481 55.8537 283.234 52.2076C283.986 48.5615 286.778 45.6185 291.001 45.6185C295.223 45.6185 296.781 48.5615 296.041 52.2076Z"
                      fill="#4CD62B"
                    />
                    <path
                      d="M325.196 19.9862L322.89 31.1561L317.167 58.7925H303.583L309.306 31.1561H302.524L304.834 19.982L325.196 19.9862ZM315.107 12.7403C312.752 10.0457 313.472 5.42283 316.705 2.42089C319.939 -0.581053 324.472 -0.82525 326.839 1.87355C329.206 4.57235 328.474 9.19525 325.241 12.1972C322.007 15.1991 317.465 15.4433 315.107 12.7403Z"
                      fill="#5965e0"
                    />
                    <path
                      d="M347.001 25.5733L342.937 45.2649C342.528 47.2521 342.766 47.6184 344.691 47.6184H353.141L350.835 58.7967H339.679C331.7 58.7967 327.636 53.4834 329.333 45.2649L333.396 25.5733H328.258L330.563 14.395H335.714L337.602 5.24182H351.203L349.314 14.395H360.008L357.69 25.5733H347.001Z"
                      fill="#5965e0"
                    />
                    <path
                      d="M36.7338 5.69226H53.9765L39.6321 75.9999H22.3894L36.7338 5.69226Z"
                      fill="#5965e0"
                    />
                    <path
                      d="M62.0337 5.69226H79.2764L68.1001 60.7797H50.8533L62.0337 5.69226Z"
                      fill="#5965e0"
                    />
                    <path
                      d="M11.1804 5.69226H28.4231L17.2468 60.7797H0L11.1804 5.69226Z"
                      fill="#5965e0"
                    />
                    <path
                      d="M246.279 19.9862L221.085 58.7967H207.187L197.997 19.9862H212.881L216.883 45.4711L231.395 20.0073L246.279 19.9862Z"
                      fill="#5965e0"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_149852_247">
                      <rect width="360" height="76" fill="#5965e0" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </Link>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Conquest
