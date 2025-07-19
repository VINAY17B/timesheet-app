// pages/index.tsx
import LoginForm from "@/components/Auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex h-screen w-full"> {/* Ensure h-screen for full height */}
      {/* Left Side - Login Form */}
      <div className="flex flex-col justify-center items-center w-1/2 bg-white px-16 py-10">
        <div className="w-[440px]"> {/* Fixed width container for the login form as per design */}
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Welcome back</h2>
          <LoginForm />
          <p className="text-sm text-gray-400 mt-10 text-center">&copy; 2024 tentwenty</p>
        </div>
      </div>

      {/* Right Side - Intro Text */}
      <div className="flex flex-col justify-center items-center w-1/2 bg-[#0070F3] text-white p-16">
        <h1 className="text-5xl font-bold mb-4">ticktock</h1>
        <p className="max-w-md text-lg leading-relaxed text-center">
          Introducing ticktock, our cutting-edge timesheet web application designed to revolutionize how you manage employee work hours. With ticktock, you can effortlessly track and monitor employee attendance and productivity from anywhere, anytime, using any internet-connected device.
        </p>
      </div>
    </div>
  );
}