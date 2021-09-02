import React from 'react';


// class App extends Component {
//   render() {
//     return <input type="text" onClick={() =>{console.log("I am clicked")}} />
//   }
// }

const App = () => {
  const profiles = [
    {name: "Taro", age: 10},
    {name: "Hanako", age: 5},
    {name: "Noname"}
  ]
  return (
    <div>
    {
      profiles.map((profile, index)=>{
       return <User key={index} name={profile.name} age={profile.age} />
      })
    }
    </div>
  );
}

const User = (props) => {
  return <div>Hi,I am {props.name} and {props.age} years old !</div>
}

User.defaultProps = {
  age: 1
}
export default App;
