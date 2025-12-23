import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hooks/state/useOptimistic')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/hooks/state/useOptimistic"!</div>
}
