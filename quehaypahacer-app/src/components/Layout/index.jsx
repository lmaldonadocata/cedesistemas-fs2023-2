import styled from 'styled-components'
import { Topbar } from '../Topbar'

const ContentLayout = styled.section `
  //border: 1px solid red;
  margin-top: 60px;
  padding: 10px 15px;
`

export const Layout = (props) => {

  return (
    <>

      <Topbar />

      <ContentLayout>
        { props.children }
      </ContentLayout>

      <footer>todos los derechos</footer>

    </>
  )
}
