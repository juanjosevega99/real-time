import { useState } from "react";
const GET_ORDERS_URL = ''

const Initial_data = {
  customer: "",
  address: "",
  price: 0,
};

export const useCreateOrder = async () => {
  const [data, setData] = useState(Initial_data)

  const onChange = () => {}
  const handleSubmit = () => {}

  try {
    await fetch(`${GET_ORDERS_URL}/order`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
  } catch (error) {
    return error
  }

  return {
    onChange,
    handleSubmit,
    data,
  };
}