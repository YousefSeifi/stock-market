export default function SignUpPage() {
  const handleSignup = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      alert("User created!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="w-96 p-6 bg-white shadow-xl rounded-xl space-y-4">
        <h1 className="text-2xl font-bold">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
        />

        <button className="w-full bg-green-600 text-white py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
