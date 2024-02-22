
import React, { useEffect, useState } from "react";

const PostDealer = () => {
    const [post, setPost] = useState({
        // dealerId: "",
        dealerName: "",
        dealerAddress: "",
        dealerPhone: "",
        dealerCountry: "",
        dealerShipStartDate: "",
        email: "",
        active: "",
        createdBy: "",
        createdDate: "",
        modifiedBy: "",
        modifiedDate: "",
        password: "",
    });

    const onChangeHandler = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };




    const clickHandler = async (e) => {
        e.preventDefault();
        const requestOptions = {
            method: "POST",
            body: JSON.stringify({
                // dealerId: post.dealerId,
                dealerName: post.dealerName,
                dealerAddress: post.dealerAddress,
                dealerPhone: post.dealerPhone,
                dealerCountry: post.dealerCountry,
                dealerShipStartDate: post.dealerShipStartDate,
                email: post.email,
                active: post.active,
                createdBy: post.createdBy,
                createdDate: post.createdDate,
                modifiedBy: post.modifiedBy,
                modifiedDate: post.modifiedDate,
                password: post.password,
            }),
            headers: { "Content-type": "application/json" },
        };
        const data = await fetch(
            "api/dealer",
            requestOptions
        );
        const response = await data;
    };


    return (
        <div>
            <form onSubmit={clickHandler}>
                <label>DealerName</label>
                <input
                    id="dealerName"
                    name="dealerName"
                    placeholder="with a placeholder"
                    type="text"
                    value={post.dealerName}
                    onChange={onChangeHandler}
                />
                <br />
                <label>DealerAddress</label>
                <input
                    id="dealerAddress"
                    name="dealerAddress"
                    placeholder="with a placeholder"
                    type="text"
                    value={post.dealerAddress}
                    onChange={onChangeHandler}
                />
                <br />
                <label>DealerPhone</label>
                <input
                    id="dealerPhone"
                    name="dealerPhone"
                    placeholder="with a placeholder"
                    type="text"
                    value={post.dealerPhone}
                    onChange={onChangeHandler}
                />
                <br />
                <label>DealerCountry</label>
                {/* <input
          id="dealerCountry"
          name="dealerCountry"
          placeholder="with a placeholder"
          type="radio"
          value={post.dealerCountry}
          onChange={onChangeHandler}
        /> */}
                <div>
                    <input
                        type="radio"
                        id="Australia"
                        name="dealerCountry"
                        value="Australia"
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
                    value={post.dealerShipStartDate}
                    onChange={onChangeHandler}
                />
                <br />
                <label>Email</label>
                <input
                    id="email"
                    name="email"
                    placeholder="with a placeholder"
                    type="text"
                    value={post.email}
                    onChange={onChangeHandler}
                />
                <br />
                <label>Active</label>
                {/* <input
          id="active"
          name="active"
          placeholder="with a placeholder"
          type="text"
          value={post.active}
          onChange={onChangeHandler}
        /> */}
                <select
                    name="active"
                    id="active"
                    //value={post.active}
                    onChange={onChangeHandler}
                >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                <br />

                <label>CreatedBy</label>
                <input
                    id="createdBy"
                    name="createdBy"
                    placeholder="with a placeholder"
                    type="text"
                    value={post.createdBy}
                    onChange={onChangeHandler}
                />
                <br />
                <label>Create Date</label>
                <input
                    id="createdDate"
                    name="createdDate"
                    placeholder="with a placeholder"
                    type="text"
                    value={post.createdDate}
                    onChange={onChangeHandler}
                />
                <br />
                <label>Modified By</label>
                <input
                    id="modifiedBy"
                    name="modifiedBy"
                    placeholder="with a placeholder"
                    type="text"
                    value={post.modifiedBy}
                    onChange={onChangeHandler}
                />
                <br />
                <label>Modified Date</label>
                <input
                    id="modifiedDate"
                    name="modifiedDate"
                    placeholder="with a placeholder"
                    type="text"
                    value={post.modifiedDate}
                    onChange={onChangeHandler}
                />
                <br />
                <label>Password</label>
                <input
                    id="password"
                    name="password"
                    placeholder="with a placeholder"
                    type="text"
                    value={post.password}
                    onChange={onChangeHandler}
                />
                <br />
                <button color="success">Submit</button>
            </form>
        </div>
    );
};

export default PostDealer;