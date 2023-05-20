import React from "react";

const User = (props) => {
    console.log(props);
    console.log(props.data);
    console.log(props.data.name);

    const {data} = props;

    return(
        <div>
            <h3>User Component- {props.data.name}, {props.data.age}</h3>
            <h4>{data.name} and age is {data.age}</h4>
        </div>
    )
}
export default User;