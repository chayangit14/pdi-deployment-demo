const message = await screen.findByText('state updated from "1" to "2"', { timeout: 15000 })
await waitFor(() => expect(message).toBeVisible())
