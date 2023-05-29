import { Link } from 'react-router-dom'

export const HeroCard = ({superhero, publisher, alter_ego, first_appearance, characters, id}) => {

  const heroUrl = `/assets/heroes/${id}.jpg`

  // const characterByHero = ( <p>{characters}</p> );

  return (
    <div className="col">
      <div className="car">

        <div className="row no-glutters">

          <div className="col-4 ">
            <img src={heroUrl} alt={superhero} className="card-img animate__animated animate__zoomIn" />
          </div> {/* col-4 */}

          <div className="col-8">

            <div className="card-body">

              <h5 className="card-tittle">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>

              {
                ( alter_ego !== characters ) &&  ( <p>{characters}</p> )
              }

              <Link
                to={`/hero/${ id }`}
              >
                More...
              </Link>

            </div> {/* card-body */}

          </div> {/* col-8 */}

        </div> {/* row no-glutters */}

      </div> {/* row no-glutters */}

    </div>
  )
}
