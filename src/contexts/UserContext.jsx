import React, { createContext, useState, useEffect } from "react";
import { ethers } from "ethers";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Intenta obtener el estado del LocalStorage al inicializar
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : {
      address: null,
      isConnected: false,
      provider: null,
      signer: null,
    };
  });
  const [city, setCity] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    // Guarda el estado en LocalStorage cada vez que cambia
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  const connectWalletHandler = async () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();

        setUser({
          address: accounts[0],
          isConnected: true,
          provider: provider,
          signer: signer,
        });
        // Lógica para obtener datos de la ciudad (si aplica)
        //await fetchCityData(accounts[0], signer);
      } catch (error) {
        setErrorMessage(error.message);
      }
    } else {
      setErrorMessage("Por favor instala MetaMask!");
    }
  };

  const disconnectWalletHandler = () => {
    setUser({
      address: null,
      isConnected: false,
      provider: null,
      signer: null,
    });
    localStorage.removeItem('user');
    setCity(null);
    setErrorMessage(null);
  };

  const fetchCityData = async (address, signer) => {
    // Aquí iría la lógica para obtener los datos de la ciudad desde la blockchain
    // usando el signer para interactuar con el contrato.
    // Ejemplo (necesitas el ABI y la dirección del contrato):
    /*
    try {
        const contract = new ethers.Contract(contractAddress, contractABI, signer);
        const cityData = await contract.getCityByOwner(address);
        setCity(cityData)
    } catch (error) {
        console.error("Error al obtener datos de la ciudad:", error);
    }
    */
    // Por ahora, un ejemplo simulado:
    setCity({ name: "Ciudad Ejemplo", population: 1000, owner: address });
  };

  const value = {
    user,
    city,
    setCity,
    connectWalletHandler,
    disconnectWalletHandler,
    errorMessage,
    setErrorMessage,
    fetchCityData,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
