import Grid from "../grid/grid";
import { useEffect, useState, useCallback } from "react";
import GridV2 from "../grid/gridV2";
import {
  getOrdenes,
  getClientes,
  getZonas,
  getOrdenesDeliveryById,
  tomarOrden,
  cancelarOrden,
  entregarOrden,
} from "../../api/api";
import { FaTrash } from "react-icons/fa";
import { Chip, Button, Select, SelectItem } from "@nextui-org/react";
import toast from "react-hot-toast";
const Ordenes = () => {
  const [rowData, setRowData] = useState([]);
  const [selectedValue, setSelectedValue] = useState("activeOrders");
  const [tipoDePago, setTipoDePago] = useState("");
  const columnsActiveOrders = [
    { name: "Numero", uid: "NUMERO_ORDEN" },
    { name: "Zona", uid: "ZONA" },
    { name: "Cliente", uid: "NOMBRE_CLIENTE" },
    { name: "Precio", uid: "PRECIO_TOTAL" },
    { name: "", uid: "ACTION" },
  ];
  const columnsMyOrders = [
    { name: "Numero", uid: "NUMERO_ORDEN" },
    { name: "Zona", uid: "ZONA" },
    { name: "Cliente", uid: "NOMBRE_CLIENTE" },
    { name: "Precio", uid: "PRECIO_TOTAL" },
    { name: "Tipo de pago", uid: "TIPO_PAGO" },
    { name: "", uid: "ACTION" },
    { name: "", uid: "DEL" },
  ];

  const formatDate = (date) => {
    const fechaObj = new Date(date);
    const dia = fechaObj.getUTCDate();
    const mes = fechaObj.getUTCMonth() + 1;
    const ano = fechaObj.getUTCFullYear();
    const fechaFormateada = `${dia.toString().padStart(2, "0")}/${mes
      .toString()
      .padStart(2, "0")}/${ano}`;
    return fechaFormateada;
  };

  const fetchOrdenesAndClientes = async () => {
    const [ordenesRes, clientesRes, zonasRes] = await Promise.all([
      getOrdenes(),
      getClientes(),
      getZonas(),
    ]);
    const ordenes = await Promise.all(
      ordenesRes.map(async (item) => {
        const cliente = clientesRes.find(
          (c) => c.ID === parseInt(item.ID_CLIENTE)
        );
        const zona = zonasRes.map((z) =>
          z.ID === parseInt(item.ZONA_ENVIO) ? z.NOMBRE : null
        );

        const nombreCliente = cliente ? cliente.NOMBRE_COMPLETO : null;
        if (item.ESTADO === 3) {
          return {
            ...item,
            FECHA_ORDEN: formatDate(item.FECHA_ORDEN),
            NOMBRE_CLIENTE: nombreCliente,
            ZONA: zona,
          };
        }
      })
    );
    setRowData(ordenes);
  };
  const fetchOrdenesAndClientesById = async () => {
    const [ordenesRes, clientesRes, zonasRes] = await Promise.all([
      getOrdenesDeliveryById(4),
      getClientes(),
      getZonas(),
    ]);
    const ordenes = await Promise.all(
      ordenesRes.map(async (item) => {
        const cliente = clientesRes.find(
          (c) => c.ID === parseInt(item.ID_CLIENTE)
        );
        const zona = zonasRes.map((z) =>
          z.ID === parseInt(item.ZONA_ENVIO) ? z.NOMBRE : null
        );

        const nombreCliente = cliente ? cliente.NOMBRE_COMPLETO : null;
        if (item.ESTADO === 4) {
          return {
            ...item,
            FECHA_ORDEN: formatDate(item.FECHA_ORDEN),
            NOMBRE_CLIENTE: nombreCliente,
            ZONA: zona,
          };
        }
      })
    );
    setRowData(ordenes);
  };

  useEffect(() => {
    if (selectedValue === "activeOrders") {
      setRowData([]);
      fetchOrdenesAndClientes();
    } else {
      setRowData([]);
      fetchOrdenesAndClientesById();
    }
  }, [selectedValue]);

  const handleEngregarPedido = (numeroOrden) => {
    console.log("tipodepago", tipoDePago);
    if (tipoDePago) {
      entregarOrden(numeroOrden, "EFECTIVO").then((res) => {
        if (res.status === 200) {
          toast.success(res.message);
          fetchOrdenesAndClientesById();
        }
      });
    } else {
      toast.error("Debe seleccionar un tipo de pago");
    }
  };

  const renderCellActiveOrders = useCallback(
    (user, columnKey) => {
      const cellValue = user[columnKey];
      switch (columnKey) {
        case "NUMERO_ORDEN":
          return (
            <div className="flex">
              <div className="flex flex-col">
                <p className="text-bold capitalize">#{cellValue}</p>
              </div>
            </div>
          );
        case "ZONA":
          return (
            <div className="flex">
              <div className="flex flex-col">
                <p className="text-bold capitalize">{cellValue}</p>
              </div>
            </div>
          );
        case "FECHA_ORDEN":
          return (
            <div className="flex">
              <div className="flex flex-col">
                <p className="text-bold capitalize">{cellValue}</p>
              </div>
            </div>
          );

        case "NOMBRE_CLIENTE":
          return (
            <div className="flex">
              <div className="flex flex-col">
                <p className="text-bold capitalize">{cellValue}</p>
              </div>
            </div>
          );
        case "PRECIO_TOTAL":
          return (
            <div className="flex">
              <div className="flex flex-col">
                <p className="text-bold capitalize">$ {cellValue}</p>
              </div>
            </div>
          );
        case "ACTION":
          return (
            <div className="relative flex items-center gap-5">
              <Button
                color="success"
                onClick={() => {
                  tomarOrden(user.NUMERO_ORDEN).then((res) => {
                    if (res.status === 200) {
                      toast.success(res.message);
                      fetchOrdenesAndClientes();
                    }
                  });
                }}
              >
                Tomar pedido
              </Button>
            </div>
          );
        default:
          return cellValue;
      }
    },
    [rowData]
  );

  const renderCellMyOrders = useCallback(
    (user, columnKey) => {
      const cellValue = user[columnKey];
      switch (columnKey) {
        case "NUMERO_ORDEN":
          return (
            <div className="flex">
              <div className="flex flex-col">
                <p className="text-bold capitalize">#{cellValue}</p>
              </div>
            </div>
          );
        case "ZONA":
          return (
            <div className="flex">
              <div className="flex flex-col">
                <p className="text-bold capitalize">{cellValue}</p>
              </div>
            </div>
          );
        case "FECHA_ORDEN":
          return (
            <div className="flex">
              <div className="flex flex-col">
                <p className="text-bold capitalize">{cellValue}</p>
              </div>
            </div>
          );

        case "NOMBRE_CLIENTE":
          return (
            <div className="flex">
              <div className="flex flex-col">
                <p className="text-bold capitalize">{cellValue}</p>
              </div>
            </div>
          );
        case "PRECIO_TOTAL":
          return (
            <div className="flex">
              <div className="flex flex-col">
                <p className="text-bold capitalize">$ {cellValue}</p>
              </div>
            </div>
          );
        case "PRECIO_TOTAL":
          return (
            <div className="flex">
              <div className="flex flex-col">
                <p className="text-bold capitalize">$ {cellValue}</p>
              </div>
            </div>
          );
        case "TIPO_PAGO":
          return (
            <Select
              label="Selecionar tipo de pago"
              className="max-w-xs"
              size="sm"
              value={tipoDePago}
              onChange={(e) => {
                setTipoDePago(e.target.value);
              }}
            >
              <SelectItem key={"d"} value={"d"} className="text-black">
                Débito
              </SelectItem>
              <SelectItem key={"e"} value={"e"} className="text-black">
                Efectivo
              </SelectItem>
            </Select>
          );
        case "ACTION":
          return (
            <div className="relative flex items-center gap-10">
              <Button
                color="success"
                onClick={() => {
                  handleEngregarPedido(user.NUMERO_ORDEN);
                }}
              >
                Finalizar pedido
              </Button>
            </div>
          );
        case "DEL":
          return (
            <div className="relative flex items-center gap-10">
              <div
                onClick={() => {
                  cancelarOrden(user.NUMERO_ORDEN).then((res) => {
                    if (res.status === 200) {
                      toast.success(res.message);
                      fetchOrdenesAndClientesById();
                    }
                  });
                }}
              >
                <FaTrash
                  size={20}
                  color="red"
                  className="cursor-pointer hover:text-red-400"
                />
              </div>
            </div>
          );
        default:
          return cellValue;
      }
    },
    [rowData]
  );

  return (
    <div className="flex flex-col justify-start gap-5 w-full">
      <p className="text-2xl text-start font-semibold text-black">
        Administracion de Ordenes
      </p>
      <div className="flex flex-col gap-5">
        <div className="flex gap-2 justify-start items-center">
          <Chip
            className={`capitalize  cursor-pointer`}
            size="lg"
            onClick={() => setSelectedValue("activeOrders")}
            color={`${
              selectedValue === "activeOrders" ? "primary" : "default"
            }`}
          >
            <p className=" text-white">Activas</p>
          </Chip>
          <Chip
            className={`capitalize  cursor-pointer`}
            size="lg"
            onClick={() => setSelectedValue("myOrders")}
            color={`${selectedValue === "myOrders" ? "primary" : "default"}`}
          >
            <p className=" text-white">Mis ordenes</p>
          </Chip>
        </div>
        <div className="flex flex-col gap-5 w-full ">
          <div className="h-[calc(100vh-200px)] w-full overflow-hidden bg-white rounded-xl shadow-xl">
            {/* <Grid
              colDefs={colDefs}
              rowData={rowData}
              quickFilterText={filter}
            /> */}
            <GridV2
              columns={
                selectedValue === "activeOrders"
                  ? columnsActiveOrders
                  : columnsMyOrders
              }
              data={rowData}
              renderCell={
                selectedValue === "activeOrders"
                  ? renderCellActiveOrders
                  : renderCellMyOrders
              }
              rowKey={"NUMERO_ORDEN"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Ordenes;
