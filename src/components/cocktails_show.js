import React from 'react';
import {connect} from 'react-redux';

function CocktailsShow (props) {
  const cocktail = props.cocktail;

  if (!cocktail) {
    return <div>'Loading...'</div>;
  }

  return (
    <div>
      <h2>{cocktail.name}</h2>
      <p>{cocktail.description}</p>
      <ul>
        {cocktail.proportions.map( proportion => <li key={proportion.id}>{`${proportion.amount} ${proportion.ingredient_name}`}</li>)}
      </ul>
      <p>{cocktail.instructions}</p>
    </div>);
}

function mapStateToProps(state, ownProps){
  const cocktail = state.cocktails.find(cocktail => cocktail.id == ownProps.params.id);
  return {
    cocktail: cocktail
  }
}

export default connect(mapStateToProps)(CocktailsShow)