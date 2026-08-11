// LogStateChange is update-only; insert must not produce its state-change info message.
const brMessage = await screen.queryByText(/state updated from/i)
expect(brMessage).toBeNull()
