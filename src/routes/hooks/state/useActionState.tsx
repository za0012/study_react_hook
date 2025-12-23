import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hooks/state/useActionState')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/hooks/state/useActionState"!</div>
}
