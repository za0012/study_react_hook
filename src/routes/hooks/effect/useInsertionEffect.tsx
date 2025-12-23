import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hooks/effect/useInsertionEffect')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/hooks/effect/useInsertionEffect"!</div>
}
