'use client';

import Link from 'next/link';
import { useUserAuth } from './_utils/auth-context';

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    await gitHubSignIn();
  };

  const handleLogout = async () => {
    await firebaseSignOut();
  };

  return (
    <main>
      {user ? (
        <div>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button onClick={handleLogout}>Logout</button>
          <p>
            <Link href='./shopping-list'>Go to Shopping List</Link>
          </p>
        </div>
      ) : (
        <div>
          <p>Please log in to continue:</p>
          <button onClick={handleLogin}>Login with GitHub</button>
        </div>
      )}
    </main>
  );
}