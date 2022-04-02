import Gasto from './Gasto'

const ListadoGastos = ({gastos}) => {
    return (
      <div className="contenedor listado-gastos">
        <h2 >{gastos.length ? 'Gastos': 'No Hay Gastos Agrega Uno'}</h2>
       
       
        {
          gastos.map(gasto => (
            
            <Gasto
              key={gasto.id}
              gastos={gastos}
            />

          ))
        }
      
      </div>
  )
}

export default ListadoGastos