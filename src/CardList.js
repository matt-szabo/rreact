import React, { Component } from "react";
import Card from "./Card";
import CheckBox from "./CheckBox";
import ProfileForm from "./ProfileForm";
import ProfileFilter from "./ProfileFilter";


class CardList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profiles: [
        {
          id: 1,
          firstName: "Jack1",
          lastName: "Smith",
          address: "5587 Notre-Dame",
          prov: "QC",
          postalCode: "H4R 3G3",
          checked:false
        },
        {
          id: 2,
          firstName: "Jack2",
          lastName: "Smith",
          address: "5587 Notre-Dame",
          prov: "QC",
          postalCode: "H4R 3G3",
          checked:false
        },
        {
          id: 3,
          firstName: "Jack3",
          lastName: "Smith",
          address: "5587 Notre-Dame",
          prov: "QC",
          postalCode: "H4R 3G3",
          checked:false
        },
        {
          id: 4,
          firstName: "Jack4",
          lastName: "Smith",
          address: "5587 Notre-Dame",
          prov: "QC",
          postalCode: "H4R 3G3",
          checked:false
        },
        {
          id: 5,
          firstName: "Jack5",
          lastName: "Smith",
          address: "5587 Notre-Dame",
          prov: "QC",
          postalCode: "H4R 3G3",
          checked:false
        },
        {
          id: 6,
          firstName: "Jack6",
          lastName: "Smith",
          address: "5587 Notre-Dame",
          prov: "QC",
          postalCode: "H4R 3G3",
          checked:false
        }
      ]
    };

    this.removeItem = this.removeItem.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    this.removeChecked = this.removeChecked.bind(this);
    this.writer = this.writer.bind(this);
    this.filter = this.filter.bind(this);




  }

  filter(idi) {

    //profiles = this.state.profiles.filter(function (person) { return person.includes(idi); });

    this.setState({
      profiles : this.state.profiles.filter(function(person) {
        return person.firstName.includes(idi);
      })

    })

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

  writer(a,b,c,d,e,f){


    console.log("woof");

    console.log("a " + a + " ", "b " + b + " ", "c " + c);


    let obj = { firstName: a, lastName: b, address: c, prov: d, postalCode: e, id : f, checked:false}


    this.setState({

      profiles: this.state.profiles.concat(obj)

    });

    console.log(this.state.profiles);
    console.log("woof2");

  }



  render() {
    return (
      <div>
        <ProfileFilter onFilter={this.filter}/>
        <ProfileForm onSubmit={this.writer}/>

        return (

        <div>
          <table>

            <tbody>
            <tr>
              <th colSpan="2" className="large">First Name</th>
              <th colSpan="1" className="minview">Last Name</th>
              <th>Address</th>
              <th>Province</th>
              <th>Postal Code</th>

            </tr>


            <Card num={profile.id} onClick={this.removeItem} >

              {this.state.profiles.map((profile,i) => (
                <tr key={i}>
                  <td className="col1">{profile.firstName}</td>
                  <td className="col">{profile.lastName}</td>
                  <td className="col">{profile.address}</td>
                  <td className="col">{profile.prov}</td>
                  <td className="col">{profile.postalCode}</td>
                  <td className="col"><CheckBox key={profile.id} index={i} onSelect={this.toggleCheckbox} /></td>

                </tr>
              ))}
                </Card>


                </tbody>
                </table>



            <p> We've got {this.state.profiles.length} people in this list.</p>

            <button onClick={this.removeChecked}>Remove Checked Items</button>
        </div>;
        )
        }
        }

        export default CardList;
