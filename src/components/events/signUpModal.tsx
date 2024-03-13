import * as React from "react"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme } from "@mui/material/styles"
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material"

type Props = {
  open: boolean
  setOpen: (open: boolean) => void
  statusIn: string
}

export default function SignUpModal({ open, setOpen, statusIn }: Props) {
  const theme = useTheme()
  //   const fullScreen = useMediaQuery(theme.breakpoints.down("md"))

  const selections = ["pridem", "iščem prevoz", "iščem partnerja"]
  const [status, setStatus] = React.useState(statusIn || selections[0])

  const handleClose = () => {
    setOpen(false)
  }

  const handleChange = (ev: SelectChangeEvent<string>) => {
    setStatus(ev.target.value as string)
  }

  const MenuItems = () => {
    return (
      <>
        {selections.map(status => {
          return <MenuItem value={status}>{status}</MenuItem>
        })}
      </>
    )
  }

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        PaperProps={{
          component: "form",
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault()
            const formData = new FormData(event.currentTarget)
            const formJson = Object.fromEntries((formData as any).entries())
            const email = formJson.email
            console.log(email)
            handleClose()
          },
        }}
      >
        <DialogTitle id="responsive-dialog-title">
          {"Prijava na dogodek"}
        </DialogTitle>
        <DialogContent>
          <FormControl fullWidth>
            <Select
              id="demo-simple-select"
              value={status}
              onChange={handleChange}
            >
              <MenuItems />
            </Select>
          </FormControl>{" "}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Prekliči</Button>
          <Button type="submit" variant="contained">
            Potrdi
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}
