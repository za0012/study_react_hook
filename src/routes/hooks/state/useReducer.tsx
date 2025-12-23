import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hooks/state/useReducer')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/hooks/state/useReducer"!</div>
}
