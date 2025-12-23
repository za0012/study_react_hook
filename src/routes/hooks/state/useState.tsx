import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hooks/state/useState')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/hooks/state/useState"!</div>
}
