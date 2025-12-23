import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hooks/others/useId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/hooks/others/useId"!</div>
}
