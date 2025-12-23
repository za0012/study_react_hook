import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hooks/performance/useCallback')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/hooks/performance/useCallback"!</div>
}
