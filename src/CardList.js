import React, { Component } from "react";
import ProfileImage from "./ProfileImage";
import Card from "./Card";
import CheckBox from "./CheckBox";
import ProfileForm from "./ProfileForm";



class CardList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profiles: [
        {
          id: 1,
          name: "Jane React",
          description: "Coolest person alive",
          checked:false
        },
        {
          id: 2,
          name: "Matt Smith",
          description: "2nd Coolest person alive",
          checked:false
        },
        {
          id: 3,
          name: "Joe Blo",
          description: "3rd Coolest person alive",
          checked:false
        },
        {
          id: 4,
          name: "Lee Johnson",
          description: "4th Coolest person alive",
          checked:false
        },
        {
          id: 5,
          name: "Bello Barnes",
          description: "5th Coolest person alive",
          checked:false
        }
      ]
    };

    this.removeItem = this.removeItem.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    this.removeChecked = this.removeChecked.bind(this);
    this.writer = this.writer.bind(this);



  }

  removeItem(idi) {
    this.setState({
      profiles: this.state.profiles.filter(function(person) {
        return person.id !== idi;
      })
    });
  }

  toggleCheckbox (id) {

    console.log("woof");
    let p = this.state.profiles;

     console.log("the toggle " + p);


    p[id].checked = !p[id].checked
    this.setState({ profiles : p });

  }

  removeChecked (){

    this.setState({
      profiles: this.state.profiles.filter(function(person) {
        return !person.checked;
      })
    });

  }

  writer(a,b,c){


          console.log("woof");

          console.log("a " + a + " ", "b " + b + " ", "c " + c);


          let obj = { id: a, name: b, description: c, checked:false}


        this.setState({ 

        profiles: this.state.profiles.concat(obj)

        });

        console.log(this.state.profiles);
              console.log("woof2");

  }



  render() {
    return (
      <div>
      <ProfileForm onSubmit={this.writer}/>
        <ul>
          {this.state.profiles.map((profile,i) => {
            return (
              <li key={i}>
                <ProfileImage />
                <CheckBox key={profile.id} index={i} onSelect={this.toggleCheckbox} />
                <Card num={profile.id} onClick={this.removeItem} >
                  <h1>{profile.name}</h1>
                  <p>This item is at index position {i}</p>
                  <p>{profile.description}</p>
                </Card>
              </li>
            );
          })}
        </ul>

        <p> We've got {this.state.profiles.length} people in this list.</p>

        <button onClick={this.removeChecked}>Remove Checked Items</button>

      </div>
    );

  }
}

export default CardList;
