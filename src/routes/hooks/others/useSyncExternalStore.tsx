import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hooks/others/useSyncExternalStore')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/hooks/others/useSyncExternalStore"!</div>
}
