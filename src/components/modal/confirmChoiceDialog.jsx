import * as React from "react"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"

export default function ConfirmChoiceDialog({ message, onChoiceMade, open }) {
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={() => onChoiceMade(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{message}</DialogTitle>
        <DialogActions>
          <Button onClick={() => onChoiceMade(false)}>Prekliči</Button>
          <Button onClick={() => onChoiceMade(true)} autoFocus>
            Potrdi
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}
