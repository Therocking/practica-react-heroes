import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { getHeroesByName } from '../helpers';
import { HeroCard, MsgAlert, FormSearch } from '../components';

const validaciones = ( q, heroes ) => {
  if( q < 1 ) {
    return <MsgAlert clases={"alert alert-primary animate__animated animate__fadeIn"} texto={'Search a hero'}/> 
  }
  return heroes.length === 0 && <MsgAlert clases={"alert alert-danger animate__animated animate__fadeIn"} texto={`No hero with`} query={q}/>
}

export const Search = () => {

  const location = useLocation();

  const { q = '' } = queryString.parse( location.search );

  const heroes = useMemo(() => getHeroesByName( q ), [ q ]) ;

  return (
    <>
      <h1>Search</h1>
      <hr />

    <div className="row">

      <div className="col-5">
        <h4>Searching...</h4>

        <FormSearch query={ q }/>

      </div> {/*col-5*/}

      <div className="col-7 ">
        <h4>Results</h4>
        <hr />

        {
          validaciones( q, heroes )
        }
        
        {
          heroes.map( hero => (

            <HeroCard
              key={ hero.id }
              { ...hero }
            /> 

          ) )
        }
      </div> {/*col-7*/}
    </div>
    </>
  )
}
