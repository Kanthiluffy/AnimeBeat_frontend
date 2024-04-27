import { useState } from "react";
import TextInput from "../components/shared/TextInput";
import { Link, useNavigate } from "react-router-dom";
import { makeUnauthenticatedPOSTRequest } from "../utils/serverHelpers";
import { useCookies } from "react-cookie";
import logo from '../assets/images/Designer_circle_nobackground.png';
import background from '../assets/images/samurai_scenery.jpg';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cookies, setCookie] = useCookies(["token"]);
    const navigate = useNavigate();

    const login = async () => {
        const data = { email, password };
        const response = await makeUnauthenticatedPOSTRequest(
            "/auth/artistlogin",
            data
        );
        if (response && !response.err) {
            const token = response.token;
            const date = new Date();
            date.setDate(date.getDate() + 30);
            setCookie("token", token, { path: "/", expires: date });
            setCookie("role", "artist", {path: "/", expires: date});
            alert("Success");
            navigate("/home");
        } else {
            alert("Failure");
        }
    };
    const redirectToArtistLogin = () => {
        navigate("/login");
    };
    return (
        <div className="flex w-full h-screen" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="logo flex items-center justify-center w-1/3">
                {/* Replace with your logo */}
                <img src={logo} alt="Logo" style={{ width: '80%', height: 'auto' }} />
            </div>
            <div className="w-2/3 flex flex-col items-center justify-center py-5">
                <div className="inputRegion flex flex-col space-y-4">
                    <p className="text-xl semi-bold my-8">To Continue, log in to AnimeBeat</p>
                    <TextInput
                        label="Email address"
                        placeholder="Email address"
                        className="w-full"
                        value={email}
                        setValue={setEmail}
                    />
                    <TextInput
                        label="Password"
                        placeholder="Password"
                        type="password"
                        className="w-full"
                        value={password}
                        setValue={setPassword}
                    />
                    <div className="w-full flex items-center justify-end my-8">
                        <button
                            className="bg-green-400 font-semibold p-3 px-10 rounded-full"
                            onClick={(e) => {
                                e.preventDefault();
                                login();
                            }}
                        >
                            LOG IN
                        </button>
                    </div>
                    <div className="w-full border-gray-300 border-solid border-b"></div>
                    <div className="flex item-center justify-center semi-bold text-xl">Don't have an account?</div>
                    <div className="border border-solid border-gray-400 text-gray-500 rounded-full flex justify-center py-2 font-bold">
                        <Link to="/artistsignup">SIGN UP FOR SPOTIFY</Link>
                    </div>
                    <div className="mt-4">
                        <button
                            className="bg-blue-500 text-white font-semibold p-3 px-10 rounded-full"
                            onClick={redirectToArtistLogin}
                        >
                            USER LOGIN
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
