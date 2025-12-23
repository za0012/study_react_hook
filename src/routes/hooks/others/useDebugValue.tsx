import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hooks/others/useDebugValue')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/hooks/others/useDebugValue"!</div>
}
