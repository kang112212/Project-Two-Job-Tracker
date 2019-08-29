import React from 'react'
import Form from '../Layouts/Form'

let obj ={
  jobArr : ['jobTitle', 'compName', 'webUrl', 'linkedInName', 'email', 'phoneNumber']
}
let prospectList = []
prospectList.push(obj.jobArr)

let guessValue =[];
const getValues = (event) => {
  console.log(event)
  return (event.target.value);
}

export default FormData = () => {
console.log(guessValue)

  return(
<div>

</div>
)
}


    class App extends React.Component {
    constructor(){
      super();
      this.state ={

    }
  }
    render(){
      return (
        <div>
        
        </div>
    )
  }
}
