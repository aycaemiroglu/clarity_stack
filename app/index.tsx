import { Redirect } from 'expo-router';

/**
 * Entry route — redirects to the appropriate group.
 * Once auth is implemented, this will check session state
 * and redirect to /(auth)/login or /(app)/inbox accordingly.
 */
export default function Index() {
  // TODO: Replace with real auth check
  const isAuthenticated = false;

  if (isAuthenticated) {
    return <Redirect href="/(app)/inbox" />;
  }

  return <Redirect href="/(auth)/login" />;
}
