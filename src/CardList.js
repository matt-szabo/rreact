import React, { Component } from "react";
import Card from "./Card";
import CheckBox from "./CheckBox";
import ProfileForm from "./ProfileForm";
import ProfileFilter from "./ProfileFilter";
import './CardList.css';



class CardList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            profiles: [
                {
                    id: 1,
                    firstName: "Mark",
                    lastName: "Smith",
                    address: "5587 Notre-Dame",
                    prov: "QC",
                    postalCode: "H4R 3G3",
                    checked:false
                },
                {
                    id: 2,
                    firstName: "Peter",
                    lastName: "Rogers",
                    address: "5527 Blvd St-James",
                    prov: "QC",
                    postalCode: "H1Z 1Z7",
                    checked:false
                },
                {
                    id: 3,
                    firstName: "Lucy",
                    lastName: "Michaud",
                    address: "3852 des Iles",
                    prov: "QC",
                    postalCode: "H9R 2G1",
                    checked:false
                },
                {
                    id: 4,
                    firstName: "Pierre",
                    lastName: "Desjardins",
                    address: "23 5ieme ave",
                    prov: "QC",
                    postalCode: "H1Q 9J3",
                    checked:false
                },
                {
                    id: 5,
                    firstName: "Marie",
                    lastName: "Smithers",
                    address: "123 Rue St-Jacques",
                    prov: "QC",
                    postalCode: "H2C 8I2",
                    checked:false
                },
                {
                    id: 6,
                    firstName: "Bart",
                    lastName: "Simpson",
                    address: "987 de Maisonneuve",
                    prov: "QC",
                    postalCode: "H9U 3J6",
                    checked:false
                }
            ]
        };

        this.toggleCheckbox = this.toggleCheckbox.bind(this);
        this.removeChecked = this.removeChecked.bind(this);
        this.writer = this.writer.bind(this);
        this.filter = this.filter.bind(this);




    }

    filter(idi) {

        this.setState({
            profiles : this.state.profiles.filter(function(person) {
                return person.firstName.includes(idi);
            })

        })

    }



    toggleCheckbox (id) {

        let p = this.state.profiles;
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


        let obj = { firstName: a, lastName: b, address: c, prov: d, postalCode: e, id : f, checked:false}

        this.setState({

            profiles: this.state.profiles.concat(obj)

        });

    }



    render() {
        return (
            <div>
                <ProfileFilter onFilter={this.filter}/>
                <ProfileForm onSubmit={this.writer}/>




                <table>
                    <tbody>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Province</th>
                        <th>Postal Code</th>
                        <th>Select</th>
                    </tr>

                    {this.state.profiles.map((profile,i) => (

                        <Card num={profile.id} onClick={this.removeItem} data={profile[i]}>
                            <td>{profile.firstName}</td>
                            <td>{profile.lastName}</td>
                            <td>{profile.address}</td>
                            <td>{profile.prov}</td>
                            <td>{profile.postalCode}</td>
                            <td><CheckBox key={profile.id} index={i} onSelect={this.toggleCheckbox} /></td>
                        </Card>

                    ))}

                    </tbody>
                </table>

                <p> We've got {this.state.profiles.length} people in this list.</p>

                <button onClick={this.removeChecked}>Remove Checked Items</button>
            </div>
        )
    }
}

export default CardList;
