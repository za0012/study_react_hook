import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hooks/performance/useMemo')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/hooks/performance/useMemo"!</div>
}
