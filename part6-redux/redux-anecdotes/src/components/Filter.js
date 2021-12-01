import React from 'react'
import { connect } from 'react-redux' 
// import { useDispatch } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'
// ex 6.12 6.20
const Filter = (props) => {
    // const dispatch = useDispatch()

  const handleChange = (event) => {
    const filter = event.target.value
    // dispatch(filterChange(filter))
    props.filterChange(filter)
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input type="text" onChange={handleChange} />
    </div>
  )
}

// export default Filter

export default connect(
    null,
    { filterChange }
) (Filter)