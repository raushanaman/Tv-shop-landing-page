import { useState } from "react";

import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import validationEmail from "../../utils/validationEmail";

const NewsletterForm = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("")
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        setMessage("");
        setError("");

        if (!validationEmail(email)) {
            setError("Please enter a valid email address")
            return;
        }
        setLoading(true);
        await new Promise((resolve) =>
            setTimeout(resolve, 1500)
        );
        setLoading(false);
        setMessage("successfully  subscribed");
        setEmail("");
    };
    return (

        <form onSubmit={handleSubmit}

            className="
            mt-10
            flex
            flex-col
            gap-4
            md:flex-row
        
        ">
            <input type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                    setEmail(e.target.value)
                }
            />
            <Button disabled={loading}>

                {loading ? "Submitting..." : "Subscribe"}
            </Button>

            {error && (
                <p className="text-red-500">

                    {error}

                </p>
            )}

            {message && (
                <p className="text-green-600">

                    {message}

                </p>
            )}
        </form>
    )

}

export default NewsletterForm;