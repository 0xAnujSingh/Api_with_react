import { useEffect, useState } from "react"

import { Link } from "react-router-dom";

const FetchData = () => {
    const [get, setGet] = useState([])
    console.log(get)

    const fetchDealer = async () => {
        const data = await fetch("api/dealer");
        const parsedData = await data.json();
        setGet(parsedData);
    }

    useEffect(() => {
        fetchDealer();
    }, []);

    async function DeleteDealer(id) {
        const data = await fetch(`api/dealer/${id}`, {
            method: "DELETE",
        });
        const response = data;
        fetchDealer();
    }


    return (
        <div>
            <h1>Dealer</h1>
            <table key={get.DealerId}>
                <thead>
                    <tr>
                        <th>DealerId</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>PhoneNo</th>
                        <th>Country</th>
                        <th>StartDate</th>
                        <th>Email</th>
                        <th>Active</th>
                        <th>CreatedBy</th>
                        <th>CreatedDate</th>
                        <th>ModifiedBy</th>
                        <th>ModifiedDate</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {get.map((te) => {
                        return (
                            <tr key={te.dealerId}>
                                <td>{te.dealerId}</td>
                                <td>{te.dealerName}</td>
                                <td>{te.dealerAddress}</td>
                                <td>{te.dealerPhone}</td>
                                <td>{te.dealerCountry}</td>
                                <td>{te.dealerShipStartDate}</td>
                                <td>{te.email}</td>
                                <td>{te.active}</td>
                                <td>{te.createdBy}</td>
                                <td>{te.createdDate}</td>
                                <td>{te.modifiedBy}</td>
                                <td>{te.modifiedDate}</td>
                                <td>
                                    <button onClick={() => DeleteDealer(te.dealerId)}>
                                        {" "}
                                        Delete
                                    </button>
                                    <Link to={`/update/${te.dealerId}`}>Update</Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default FetchData;