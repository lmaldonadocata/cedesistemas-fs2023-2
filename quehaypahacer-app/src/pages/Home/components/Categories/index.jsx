
import { styled } from "styled-components"
import { Category } from "../Category"
import { IoMusicalNotes, IoColorPalette, IoFastFood, IoLaptop, IoPhonePortraitOutline  } from 'react-icons/io5'

const CategoriesContainer = styled.section`
  display: flex;
  // border: 1px solid red;
  margin: 0 15px;
  justify-content: center;
  `

const CATEGORY_LIST = [
  {
    id: 1,
    name: 'Arte',
    //icon: 'art',
    icon: <IoColorPalette />,
    color: 'yellow'
  },

  {
    id: 2,
    name: 'Gastronómico',
    //icon: 'food',
    icon: <IoFastFood />,
    color: 'orange'
  },
  {
    id: 3,
    name: 'Musica',
    //icon: 'music',
    icon: <IoMusicalNotes />,
    color: 'blue'
  },
  {
    id: 4,
    name: 'Tecnológico',
    //icon: 'device',
    icon: <IoPhonePortraitOutline />,
    color: 'green'
  },
]

export const Categories = () => {

  return (
    <CategoriesContainer>
      {
        CATEGORY_LIST.map(item => <Category name={item.name} icon={item.icon} color={item.color} />)
      }
    </CategoriesContainer>
  )
}
