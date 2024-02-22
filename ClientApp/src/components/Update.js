import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
    const params = useParams();
    //const navigate = useNavigate();
    const [update, setUpdate] = useState([]);

    useEffect(() => {
        fetchDealer();
    }, []);

    const fetchDealer = async () => {
        const data = await fetch(`api/dealer/${params.id}`);
        const parsedData = await data.json();
        setUpdate(parsedData);
    };

    const onChangeHandler = (e) => {
        setUpdate({ ...update, [e.target.name]: e.target.value });
    };

    const updateHandler = async (e) => {
        e.preventDefault();
        const requestOptions = {
            method: "PUT",
            body: JSON.stringify({
                dealerName: update.dealerName,
                dealerAddress: update.dealerAddress,
                dealerPhone: update.dealerPhone,
                dealerCountry: update.dealerCountry,
                dealerShipStartDate: update.dealerShipStartDate,
                email: update.email,
                active: update.active,
                createdBy: update.createdBy,
                createdDate: update.createdDate,
                modifiedBy: update.modifiedBy,
                modifiedDate: update.modifiedDate,
                password: update.password,
            }),
            headers: { "Content-type": "application/json" },
        };
        const data = await fetch(
            `http://localhost:5041/api/Dealer/${update.dealerId}`,
            requestOptions
        );
        const response = await data;
        console.log(response);
    };
    return (
        <div>
            {params.id}
            <form onSubmit={updateHandler}>
                <label>DealerName</label>
                <input
                    id="dealerName"
                    name="dealerName"
                    placeholder="with a placeholder"
                    type="text"
                    value={update.dealerName}
                    onChange={onChangeHandler}
                />
                <br />
                <label>DealerAddress</label>
                <input
                    id="dealerAddress"
                    name="dealerAddress"
                    placeholder="with a placeholder"
                    type="text"
                    value={update.dealerAddress}
                    onChange={onChangeHandler}
                />
                <br />
                <label>DealerPhone</label>
                <input
                    id="dealerPhone"
                    name="dealerPhone"
                    placeholder="with a placeholder"
                    type="text"
                    value={update.dealerPhone}
                    onChange={onChangeHandler}
                />
                <br />
                <label>DealerCountry</label>

                <div>
                    <input
                        type="radio"
                        id="Australia"
                        name="dealerCountry"
                        value="Australia"
                        checked={update.dealerCountry === "Australia"}
                        onChange={onChangeHandler}
                    />
                    <label htmlFor="Australia">Australia</label>
                </div>

                <div>
                    <input
                        type="radio"
                        id="India"
                        name="dealerCountry"
                        value="India"
                        checked={update.dealerCountry === "India"}
                        onChange={onChangeHandler}
                    />
                    <label htmlFor="India">India</label>
                </div>

                <label>dealerShipStartDate</label>
                <input
                    id="dealerShipStartDate"
                    name="dealerShipStartDate"
                    placeholder="with a placeholder"
                    type="text"
                    value={update.dealerShipStartDate}
                    onChange={onChangeHandler}
                />
                <br />
                <label>Email</label>
                <input
                    id="email"
                    name="email"
                    placeholder="with a placeholder"
                    type="text"
                    value={update.email}
                    onChange={onChangeHandler}
                />
                <br />
                <label>Active</label>

                <select
                    name="active"
                    id="active"
                    //value={update.active}
                    onChange={onChangeHandler}
                >
                    <option value="Yes" selected={update.active === "Yes"}>
                        Yes
                    </option>
                    <option value="No" selected={update.active === "No"}>
                        No
                    </option>
                </select>
                <br />

                <label>CreatedBy</label>
                <input
                    id="createdBy"
                    name="createdBy"
                    placeholder="with a placeholder"
                    type="text"
                    value={update.createdBy}
                    onChange={onChangeHandler}
                />
                <br />
                <label>Create Date</label>
                <input
                    id="createdDate"
                    name="createdDate"
                    placeholder="with a placeholder"
                    type="text"
                    value={update.createdDate}
                    onChange={onChangeHandler}
                />
                <br />
                <label>Modified By</label>
                <input
                    id="modifiedBy"
                    name="modifiedBy"
                    placeholder="with a placeholder"
                    type="text"
                    value={update.modifiedBy}
                    onChange={onChangeHandler}
                />
                <br />
                <label>Modified Date</label>
                <input
                    id="modifiedDate"
                    name="modifiedDate"
                    placeholder="with a placeholder"
                    type="text"
                    value={update.modifiedDate}
                    onChange={onChangeHandler}
                />
                <br />
                <label>Password</label>
                <input
                    id="password"
                    name="password"
                    placeholder="with a placeholder"
                    type="text"
                    value={update.password}
                    onChange={onChangeHandler}
                />
                <br />
                <button color="success" onClick={updateHandler}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Update;
