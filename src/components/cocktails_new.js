import React from 'react';
import {bindActionCreators} from 'redux'
import * as actions from '../actions'



class CocktailsNew extends React.Componenet.{
  constructor(props){
    super(props)

  }


onSubmitDrink(event){
  event.preventDefault()
  this.props.action.createCocktail(this.refs)
}

  render(){
    return (
      <div>
          <form onSubmitDrink={this.onSubmitDrink.bind(this)}>

          <label>name: </label>
          <input ref='name' /><br>
          <label>description: </label>
          <input ref='description' /><br>
          <label>instructions: </label>

          <input  ref='drink'/>
          <input type='submit'></input>
          </form>
      </div
    )
  }
}

function mapDispatchToProps(dispatch){
  //the props here are the actions
  return {
    actions: bindActionCreators(actions, dispatch)
    //binding the actions and dispatch together
  }
}

function mapStatetoProps(){

}

export default connect(null, mapDispatchToProps)(CocktailsNew)

// export default CocktailsNew; << don't need this anymore
