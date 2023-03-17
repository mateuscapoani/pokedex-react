import { Container, Box, Text, Image } from '../../component'
import spoink from '../../../assets/images/spoink.png'

export const NotFoundScreen = () => {

  return (
    <main>
      <Container>
        <Box alignItens column padding>
          <Text big>404 - Not Found</Text>
          <Image src={spoink} alt='Pokemon Spoink' size='300' />
        </Box>
      </Container>
    </main>
  )
}
