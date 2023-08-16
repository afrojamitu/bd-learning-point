import { useMutation } from "react-query";
import { postSendVerificationMail } from "../../hooks/student/studentApi";
import { toast } from "react-hot-toast";
import { Loader } from "@mantine/core";

export default function VerifyButton() {
  const { isLoading, mutate } = useMutation(postSendVerificationMail, {
    onSuccess: (response) => {
      if (response?.data?.success) {
        toast.success(
          "Successful! Check your mail to complete the verification"
        );
      } else {
        toast.success(
          "Successful! Check your mail to complete the verification"
        );
      }
    },
  });

  function generateRememberToken() {
    const timestamp = new Date().getTime(); // Get the current timestamp
    const randomNum = Math.random().toString(36).substr(2, 10); // Generate a random alphanumeric string

    // Combine the timestamp and random number to create the token
    const rememberToken = `${timestamp}_${randomNum}`;

    return rememberToken;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLoading) {
      toast.dismiss();

      mutate({
        formdata: {
          _token: generateRememberToken(),
        },
      });
    }
  };
  return (
    <div>
      <div className="border border-1 p-4">
        <h4 className="flex gap-2 items-center">
          <span>
            You{"'"}re not verified yet!, Get verified and collect your rewards{" "}
          </span>
          <button
            className="flex gap-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-500 hover:from-10% hover:via-sky-500 hover:via-30% hover:to-emerald-500 hover:to-90% hover:bg-gradient-to-l text-white p-2 rounded-lg px-6"
            onClick={handleSubmit}
          >
            {!isLoading ? (
              <>
                <span>Verify Now! </span>
                <span>
                  <svg
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
                  </svg>
                </span>
              </>
            ) : (
              <Loader color="dark" size="lg" variant="dots" />
            )}
          </button>
        </h4>
      </div>
    </div>
  );
}
