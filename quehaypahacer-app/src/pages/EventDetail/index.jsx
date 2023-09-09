import { Layout } from '../../components/Layout'
import { Button } from '../../globalStyles'

export const EventDetail = () => {

  return (
    <Layout>
      <h2> Titulo del evento</h2>
      <div>
        <img src="https://www.eltiempo.com/files/image_640_428/uploads/2022/07/29/62e3d34873715.jpeg"/>
      </div>

      <div>
        <p>xxx</p>
        <p>Ubicacion</p>
        <p>Fecha</p>
        <p>Categoria</p>
        <p>Precio</p>
      </div>

      <Button>Quiero participar</Button>

    </Layout>
  )
}
