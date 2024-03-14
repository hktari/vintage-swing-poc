import React, { useState } from "react"

function useModal<TContext>(initContext: TContext | null = null) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [context, setContext] = useState<TContext | null>(initContext)

  const onSubmit = (newContext: TContext) => {
    setContext(newContext)
  }
  return { setIsOpen, isOpen, onSubmit, context }
}

export default useModal
