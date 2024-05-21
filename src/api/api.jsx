import axios from "axios";

const SERVER_URL = "http://localhost:3000";

export const login = async (userName, password) => {
  try {
    const response = await axios.post(SERVER_URL + `/login`, {
      usuario: userName,
      contrasenia: password,
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

/*Categorias*/

export const getCategorias = async () => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axios.get(SERVER_URL + `/categorias`, config);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const addCategoria = async (categoria) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axios.post(
      SERVER_URL + `/addCategoria`,
      categoria,
      config
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteCategoria = async (categoria_id) => {
  try {
    const token = localStorage.getItem("token");
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const response = await axios.post(
      SERVER_URL + `/deleteCategoria`,
      categoria_id,
      config
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const updateCategoria = async (categoria) => {
  try {
    const token = localStorage.getItem("token");
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const response = await axios.put(
      SERVER_URL + `/updateCategoria/${categoria.id}`,
      categoria,
      config
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

/*Fin Categorias*/

/* Toppings */

export const getToppings = async () => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axios.get(SERVER_URL + `/toppings`, config);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const addTopping = async (topping) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axios.post(
      SERVER_URL + `/addTopping`,
      topping,
      config
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getToppingsByCategory = async (idCategoria) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axios.get(
      SERVER_URL + `/toppings/${idCategoria}`,
      config
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteTopping = async (idTopping) => {
  try {
    const token = localStorage.getItem("token");
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const response = await axios.post(
      SERVER_URL + `/deleteTopping`,
      idTopping,
      config
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getToppingXProducto = async () => {
  try {
    const token = localStorage.getItem("token");
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const response = await axios.get(SERVER_URL + `/toppingXProductos`, config);
    return response.data;
  } catch (error) {
    return error;
  }
};

/* Fin Toppings */

/* Zonas */

export const getZonas = async () => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axios.get(SERVER_URL + `/zonas`, config);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const addZona = async (zona) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axios.post(SERVER_URL + `/addZona`, zona, config);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteZona = async (zona) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axios.post(
      SERVER_URL + `/deleteZona`,
      zona.id,
      config
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

/* Fin Zonas */

/* Clientes */

export const getClientes = async () => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axios.get(SERVER_URL + `/clientes`, config);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const addCliente = async (cliente) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axios.post(
      SERVER_URL + `/addCliente`,
      cliente,
      config
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteCliente = async (id) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axios.delete(
      SERVER_URL + `/deleteCliente/${id}`,
      config
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const updateCliente = async (cliente) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axios.put(
      SERVER_URL + `/updateCliente/${cliente.id}`,
      cliente,
      config
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

/* Fin Clientes */

/* Productos */

export const getProductos = async () => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axios.get(SERVER_URL + `/productos`, config);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const addProductos = async (producto) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axios.post(
      SERVER_URL + `/addProducto`,
      producto,
      config
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteProducto = async (id) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axios.delete(
      SERVER_URL + `/deleteProducto/${id}`,
      config
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const updateProducto = async (producto) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axios.put(
      SERVER_URL + `/updateProducto/${producto.id}`,
      producto,
      config
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getProductoByCategory = async (idCategoria) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axios.get(
      SERVER_URL + `/productos/${idCategoria}`,
      config
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteProductos = async (id) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const response = await axios.delete(
      SERVER_URL + `/deleteProducto/${id}`,
      config
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

/* Fin Productos */

// Ordenes

export const tomarOrden = async (ordenId) => {
  try {
    const token = localStorage.getItem("token");
    const idDelivery = 4;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axios.put(
      SERVER_URL + `/tomarOrden/${ordenId}`,
      { idDelivery },
      config
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const entregarOrden = async (ordenId, pago) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axios.put(
      SERVER_URL + `/entregarOrden/${ordenId}`,
      { pago },
      config
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getOrdenes = async () => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axios.get(SERVER_URL + `/ordenes`, config);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getOrdenesDelivery = async () => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axios.get(SERVER_URL + `/ordenesDelivery`, config);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getOrdenesDeliveryById = async (id) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axios.get(
      SERVER_URL + `/ordenesDelivery/${id}`,
      config
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const cancelarOrden = async (ordenId) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axios.put(
      SERVER_URL + `/cancelarOrden/${ordenId}`,
      {},
      config
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const addOrden = async (orden) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const response = await axios.post(SERVER_URL + `/addOrden`, orden, config);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const updateOrden = async (orden) => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const response = await axios.put(
      SERVER_URL + `/updateOrden/${orden.id}`,
      { estado: orden.estado },
      config
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getLastNumberOrder = async () => {
  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axios.get(SERVER_URL + `/lastOrder`, config);
    return response.data;
  } catch (error) {
    return error;
  }
};
