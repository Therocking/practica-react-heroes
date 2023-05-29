import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

export const FormSearch = ({ query }) => {
  const navigate = useNavigate();

    const { SearchText, onInputChange } = useForm({
        SearchText: query
    });
    
  const onSearchSubmit = (e) => {
    e.preventDefault();

    // if( SearchText.trim().length <= 1 ) return

    navigate(`?q=${ SearchText }`)
  }

  return (
    <form onSubmit={ onSearchSubmit }>
          <input
            onChange={ onInputChange } 
            type="text"
            placeholder="Search a hero"
            className="form-control"
            name="SearchText" 
            autoComplete="off"
            value={ SearchText }
          />

          <button
            className="btn btn-outline-primary mt-2 "
            type="submit"
          >
            Search
          </button>
        </form>
  )
}
