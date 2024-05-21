import React, { useState, useEffect, useContext } from "react";
import { Chip, Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import Productos from "../productos/productos";
import Categorias from "../categorias/categorias";
import Zonas from "../zonas/zonas";
import Toppings from "../toppings/toppings";
import AppContext from "../../AppContext";

const Configuracion = () => {
  const [chipSelected, setChipSelected] = useState("Productos");
  const { section, setSection } = useContext(AppContext);

  useEffect(() => {
    setSection({ ...section, chipSelected: chipSelected });
  }, [chipSelected]);

  return (
    <div className="flex flex-col gap-5  w-full">
      <div className="flex justify-start gap-5">
        <Chip
          color="primary"
          radius="md"
          onClick={(e) => setChipSelected("Productos")}
          className={`cursor-pointer text-black  ${
            chipSelected === "Productos" ? "bg-yellow-600 text-white" : ""
          } transition-all duration-300 ease-in-out hover:bg-yellow-600 hover:text-white`}
          variant="solid"
          size="lg"
        >
          Productos
        </Chip>
        <Chip
          color="primary"
          radius="md"
          onClick={(e) => setChipSelected("Categorias")}
          className={`cursor-pointer text-black  ${
            chipSelected === "Categorias" ? "bg-yellow-600 text-white" : ""
          } transition-all duration-300 ease-in-out hover:bg-yellow-600 hover:text-white`}
          variant="solid"
          size="lg"
        >
          Categorias
        </Chip>
        <Chip
          color="primary"
          radius="md"
          onClick={(e) => setChipSelected("Zonas")}
          className={`cursor-pointer text-black  ${
            chipSelected === "Zonas" ? "bg-yellow-600 text-white" : ""
          } transition-all duration-300 ease-in-out hover:bg-yellow-600 hover:text-white`}
          variant="solid"
          size="lg"
        >
          Zonas
        </Chip>
        <Chip
          color="primary"
          radius="md"
          onClick={(e) => setChipSelected("Toppings")}
          className={`cursor-pointer text-black  ${
            chipSelected === "Toppings" ? "bg-yellow-600 text-white" : ""
          } transition-all duration-300 ease-in-out hover:bg-yellow-600 hover:text-white`}
          variant="solid"
          size="lg"
        >
          Toppings
        </Chip>
      </div>
      <div>
        <Breadcrumbs>
          <BreadcrumbItem>{section.section}</BreadcrumbItem>
          <BreadcrumbItem>{section.chipSelected}</BreadcrumbItem>
        </Breadcrumbs>
        {chipSelected === "Productos" ? (
          <div>
            <Productos />
          </div>
        ) : chipSelected === "Categorias" ? (
          <div>
            <Categorias />
          </div>
        ) : chipSelected === "Zonas" ? (
          <div>
            <Zonas />
          </div>
        ) : chipSelected === "Toppings" ? (
          <div>
            <Toppings />
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default Configuracion;
