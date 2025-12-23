import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hooks/context')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/hooks/context"!</div>
}
