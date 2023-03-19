import { Box } from '../'
import './style.css'

export const Loader = ({ show }) => {
  return (
    <>
      {show &&
        <Box alignItens>
          <div className="loader__loader">
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
          </div>
        </Box>
      }
    </>
  )
}
