import { Button } from '@mui/material'

interface IGeneratePaletteButtonProps {
  onClick: () => void
}
const GeneratePaletteButton: React.FC<IGeneratePaletteButtonProps> = ({
  onClick,
}) => {
  return (
    <Button onClick={onClick} variant="contained" color="primary" fullWidth>
      Generate Palette
    </Button>
  )
}

export default GeneratePaletteButton
