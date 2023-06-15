import { socket } from "@/utils/socket";
import { useEffect, useState } from "react";
const GET_ORDERS_URL = ''

interface Order {
  _id: string;
  customer: string;
  address: string;
  price: number;
  createdAt: string;
  updatedAt: string;
}

export const useOrder = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch(GET_ORDERS_URL);
      const data: Order[] = await response.json();
      setOrders(data);
    };

    fetchOrders()
  }, [])
  
  useEffect(() => {
    socket.on("order-added", (newData: Order) => {
      setOrders((prevData) => [...prevData, newData]);
    });
  }, []);

  return {
    orders
  }
}