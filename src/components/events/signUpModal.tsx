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

type UserEventStatus = string | null

type Props = {
  open: boolean
  setOpen: (open: boolean) => void
  statusIn: UserEventStatus
  onSubmit: (statusOut: UserEventStatus) => void
}

export default function SignUpModal({
  open,
  setOpen,
  statusIn,
  onSubmit,
}: Props) {
  const theme = useTheme()
  //   const fullScreen = useMediaQuery(theme.breakpoints.down("md"))

  const selections = ["pridem", "iščem prevoz", "iščem partnerja"]
  const [status, setStatus] = React.useState(statusIn || selections[0])

  const isSignedUp = status !== null
  
  const handleClose = () => {
    setOpen(false)
  }

  const handleSignOut = () => {
    onSubmit(null)
    handleClose()
  }

  const handleChange = (ev: SelectChangeEvent<UserEventStatus>) => {
    console.log("value", ev.target.value)
    setStatus(ev.target.value as string)
  }

  const MenuItems = () => {
    return <></>
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
            console.log(formJson.status)

            onSubmit(formJson.status)
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
              id="status"
              name="status"
              value={status}
              onChange={handleChange}
            >
              {selections.map((selection, idx) => {
                return (
                  <MenuItem key={idx} value={selection}>
                    {selection}
                  </MenuItem>
                )
              })}
            </Select>
          </FormControl>{" "}
        </DialogContent>
        <DialogActions>
          {isSignedUp && <Button onClick={handleSignOut}>Odjava</Button>}
          <Button type="submit" variant="contained">
            Potrdi
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}
